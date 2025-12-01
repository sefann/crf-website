// Payment gateway integration utilities - Lean & Optimized

export interface PaymentConfig {
  amount: number
  currency: string
  email: string
  name: string
  metadata?: Record<string, string>
  callbackUrl?: string
}

// Gateway configuration
export type PaymentGateway = 'paystack' | 'stripe' | 'monnify'

export interface GatewayConfig {
  gateway: PaymentGateway
  supportedCurrencies: string[]
  isAvailable: boolean
}

// Get available gateways for a currency
export const getAvailableGateways = (currency: string): GatewayConfig[] => {
  const gateways: GatewayConfig[] = [
    {
      gateway: 'paystack',
      supportedCurrencies: ['NGN'],
      isAvailable: !!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY && currency === 'NGN',
    },
    {
      gateway: 'stripe',
      supportedCurrencies: ['USD', 'EUR', 'GBP'],
      isAvailable: !!import.meta.env.VITE_STRIPE_PUBLIC_KEY && ['USD', 'EUR', 'GBP'].includes(currency),
    },
    {
      gateway: 'monnify',
      supportedCurrencies: ['NGN'],
      isAvailable: 
        !!import.meta.env.VITE_MONNIFY_PUBLIC_KEY && 
        !!import.meta.env.VITE_MONNIFY_CONTRACT_CODE && 
        currency === 'NGN',
    },
  ]

  return gateways.filter(g => g.isAvailable)
}

// Auto-select best gateway for currency
export const getRecommendedGateway = (currency: string): PaymentGateway | null => {
  const available = getAvailableGateways(currency)
  if (available.length === 0) return null
  
  // Prefer Paystack for NGN, Stripe for international
  if (currency === 'NGN') {
    return available.find(g => g.gateway === 'paystack')?.gateway || available[0].gateway
  }
  return available.find(g => g.gateway === 'stripe')?.gateway || available[0].gateway
}

// Paystack Integration (NGN) - Already optimized
export const initializePaystack = (config: PaymentConfig): void => {
  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || ''
  
  if (!paystackPublicKey) {
    throw new Error('Paystack is not configured. Please contact support.')
  }

  // Ensure Paystack script is loaded
  if (!(window as any).PaystackPop) {
    throw new Error('Paystack script not loaded. Please refresh the page.')
  }

  const amountInKobo = Math.round(config.amount * 100)
  const transactionRef = `CRF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  const handler = (window as any).PaystackPop.setup({
    key: paystackPublicKey,
    email: config.email,
    amount: amountInKobo,
    currency: config.currency,
    ref: transactionRef,
    metadata: {
      custom_fields: [
        {
          display_name: 'Donor Name',
          variable_name: 'donor_name',
          value: config.name,
        },
      ],
      ...config.metadata,
    },
    callback: (response: any) => {
      window.location.href = config.callbackUrl || `/donate/success?reference=${response.reference}`
    },
    onClose: () => {
      // Silent close - user can retry if needed
      console.log('Payment window closed')
    },
  })

  handler.openIframe()
}

// Stripe Integration (USD, EUR, GBP) - Using serverless function approach
let stripeLoaded = false
let stripeLoadPromise: Promise<void> | null = null

const loadStripe = (): Promise<void> => {
  if (stripeLoaded && (window as any).Stripe) {
    return Promise.resolve()
  }

  if (stripeLoadPromise) {
    return stripeLoadPromise
  }

  stripeLoadPromise = new Promise((resolve, reject) => {
    // Check if already loaded
    if ((window as any).Stripe) {
      stripeLoaded = true
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/'
    script.async = true
    script.onload = () => {
      stripeLoaded = true
      resolve()
    }
    script.onerror = () => {
      stripeLoadPromise = null
      reject(new Error('Failed to load Stripe'))
    }
    document.head.appendChild(script)
  })

  return stripeLoadPromise
}

export const initializeStripe = async (config: PaymentConfig): Promise<void> => {
  const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || ''
  const stripeApiUrl = import.meta.env.VITE_STRIPE_API_URL || '/api/stripe-checkout'
  
  if (!stripePublicKey) {
    throw new Error('Stripe is not configured. Please contact support.')
  }

  try {
    // Load Stripe.js
    await loadStripe()
    const stripe = (window as any).Stripe(stripePublicKey)

    // Create checkout session via serverless function
    const response = await fetch(stripeApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(config.amount * 100), // Convert to cents
        currency: config.currency.toLowerCase(),
        email: config.email,
        name: config.name,
        metadata: {
          donor_name: config.name,
          ...config.metadata,
        },
        success_url: config.callbackUrl || `${window.location.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/donate?canceled=true`,
      }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Failed to create payment session' }))
      throw new Error(error.error || 'Failed to initialize payment')
    }

    const { sessionId } = await response.json()
    
    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId })
    
    if (result.error) {
      throw new Error(result.error.message)
    }
  } catch (error: any) {
    console.error('Stripe error:', error)
    throw new Error(error.message || 'Payment initialization failed. Please try again.')
  }
}

// Monnify Integration (NGN) - Optimized script loading
let monnifyLoaded = false
let monnifyLoadPromise: Promise<void> | null = null

const loadMonnify = (): Promise<void> => {
  if (monnifyLoaded && (window as any).MonnifySDK) {
    return Promise.resolve()
  }

  if (monnifyLoadPromise) {
    return monnifyLoadPromise
  }

  monnifyLoadPromise = new Promise((resolve, reject) => {
    if ((window as any).MonnifySDK) {
      monnifyLoaded = true
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://sdk.monnify.com/plugin/monnify.js'
    script.async = true
    script.onload = () => {
      monnifyLoaded = true
      resolve()
    }
    script.onerror = () => {
      monnifyLoadPromise = null
      reject(new Error('Failed to load Monnify'))
    }
    document.head.appendChild(script)
  })

  return monnifyLoadPromise
}

export const initializeMonnify = async (config: PaymentConfig): Promise<void> => {
  const monnifyPublicKey = import.meta.env.VITE_MONNIFY_PUBLIC_KEY || ''
  const contractCode = import.meta.env.VITE_MONNIFY_CONTRACT_CODE || ''
  
  if (!monnifyPublicKey || !contractCode) {
    throw new Error('Monnify is not configured. Please contact support.')
  }

  try {
    await loadMonnify()
    const MonnifySDK = (window as any).MonnifySDK

    const transactionReference = `CRF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const redirectUrl = config.callbackUrl || `${window.location.origin}/donate/success?reference=${transactionReference}`

    MonnifySDK.initialize({
      amount: config.amount,
      currency: config.currency,
      reference: transactionReference,
      customerFullName: config.name,
      customerEmail: config.email,
      customerMobileNumber: '',
      apiKey: monnifyPublicKey,
      contractCode: contractCode,
      paymentDescription: 'Donation to Child Rights Foundation',
      isTestMode: import.meta.env.VITE_MONNIFY_TEST_MODE === 'true',
      metadata: {
        donor_name: config.name,
        ...config.metadata,
      },
      onComplete: (_response: any) => {
        window.location.href = redirectUrl
      },
      onClose: () => {
        console.log('Monnify payment window closed')
      },
    })
  } catch (error: any) {
    console.error('Monnify error:', error)
    throw new Error(error.message || 'Payment initialization failed. Please try again.')
  }
}

// Main payment processor - routes to appropriate gateway
export const processPayment = async (
  config: PaymentConfig, 
  gateway: PaymentGateway
): Promise<void> => {
  // Validate
  if (!config.amount || config.amount <= 0) {
    throw new Error('Please enter a valid donation amount.')
  }

  if (!config.email || !config.name) {
    throw new Error('Please provide your name and email address.')
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(config.email)) {
    throw new Error('Please enter a valid email address.')
  }

  // Route to gateway
  switch (gateway) {
    case 'paystack':
      if (config.currency !== 'NGN') {
        throw new Error('Paystack only supports NGN. Please change currency or select a different payment method.')
      }
      initializePaystack(config)
      break

    case 'stripe':
      if (!['USD', 'EUR', 'GBP'].includes(config.currency)) {
        throw new Error('Stripe supports USD, EUR, and GBP only. Please change currency or select a different payment method.')
      }
      await initializeStripe(config)
      break

    case 'monnify':
      if (config.currency !== 'NGN') {
        throw new Error('Monnify only supports NGN. Please change currency or select a different payment method.')
      }
      await initializeMonnify(config)
      break

    default:
      throw new Error('Invalid payment gateway selected.')
  }
}
