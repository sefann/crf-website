// Payment gateway integration utilities

export interface PaymentConfig {
  amount: number
  currency: string
  email: string
  name: string
  metadata?: Record<string, string>
  callbackUrl?: string
}

// Paystack Integration (NGN)
export const initializePaystack = (config: PaymentConfig) => {
  const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || ''
  
  if (!paystackPublicKey) {
    console.error('Paystack public key not configured')
    return
  }

  // Convert amount to kobo (Paystack uses kobo for NGN)
  const amountInKobo = Math.round(config.amount * 100)

  const handler = (window as any).PaystackPop?.setup({
    key: paystackPublicKey,
    email: config.email,
    amount: amountInKobo,
    currency: config.currency,
    ref: `CRF-${Date.now()}`,
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
    callback: function(response: any) {
      // Handle successful payment
      window.location.href = config.callbackUrl || '/donate?status=success&reference=' + response.reference
    },
    onClose: function() {
      // Handle payment cancellation
      alert('Payment window closed. If you completed the payment, you will receive a confirmation email.')
    },
  })

  handler?.openIframe()
}

// Stripe Integration (USD, EUR, GBP)
export const initializeStripe = async (config: PaymentConfig) => {
  const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || ''
  
  if (!stripePublicKey) {
    console.error('Stripe public key not configured')
    return
  }

  // Load Stripe.js
  const stripeScript = document.createElement('script')
  stripeScript.src = 'https://js.stripe.com/v3/'
  stripeScript.async = true
  document.head.appendChild(stripeScript)

  stripeScript.onload = async () => {
    const stripe = (window as any).Stripe(stripePublicKey)

    try {
      // Create a payment intent on your backend
      // For now, we'll use Stripe Checkout which is simpler for static sites
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: config.amount,
          currency: config.currency.toLowerCase(),
          email: config.email,
          name: config.name,
          metadata: config.metadata,
        }),
      })

      if (response.ok) {
        const { sessionId } = await response.json()
        const result = await stripe.redirectToCheckout({ sessionId })
        if (result.error) {
          alert(result.error.message)
        }
      } else {
        // Fallback: Use Stripe Payment Element (client-side only)
        alert('Please contact us at donate@thechildrightsfoundation.org to complete your donation.')
      }
    } catch (error) {
      console.error('Stripe error:', error)
      alert('Payment initialization failed. Please try again or contact us.')
    }
  }
}

// Monnify Integration (NGN)
export const initializeMonnify = (config: PaymentConfig) => {
  const monnifyPublicKey = import.meta.env.VITE_MONNIFY_PUBLIC_KEY || ''
  const contractCode = import.meta.env.VITE_MONNIFY_CONTRACT_CODE || ''
  
  if (!monnifyPublicKey || !contractCode) {
    console.error('Monnify credentials not configured')
    return
  }

  // Generate transaction reference
  const transactionReference = `CRF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  // Monnify payment data
  const paymentData = {
    amount: config.amount,
    currency: config.currency,
    reference: transactionReference,
    customerName: config.name,
    customerEmail: config.email,
    paymentDescription: 'Donation to Child Rights Foundation',
    contractCode: contractCode,
      redirectUrl: config.callbackUrl || `${window.location.origin}/donate/success?reference=${transactionReference}`,
    paymentMethods: ['CARD', 'ACCOUNT_TRANSFER', 'USSD'],
    metadata: config.metadata || {},
  }

  // Load Monnify inline script
  const monnifyScript = document.createElement('script')
  monnifyScript.src = 'https://sdk.monnify.com/plugin/monnify.js'
  monnifyScript.async = true
  document.head.appendChild(monnifyScript)

  monnifyScript.onload = () => {
    const MonnifySDK = (window as any).MonnifySDK
    
    MonnifySDK.initialize({
      amount: paymentData.amount,
      currency: paymentData.currency,
      reference: paymentData.reference,
      customerFullName: paymentData.customerName,
      customerEmail: paymentData.customerEmail,
      customerMobileNumber: '',
      apiKey: monnifyPublicKey,
      contractCode: paymentData.contractCode,
      paymentDescription: paymentData.paymentDescription,
      isTestMode: import.meta.env.VITE_MONNIFY_TEST_MODE === 'true',
      metadata: paymentData.metadata,
      onComplete: function(response: any) {
        // Handle successful payment
        window.location.href = paymentData.redirectUrl
      },
      onClose: function() {
        // Handle payment cancellation
        console.log('Monnify payment window closed')
      },
    })
  }
}

// Main payment handler - routes to appropriate gateway
export const processPayment = (config: PaymentConfig, gateway: 'paystack' | 'stripe' | 'monnify') => {
  // Validate required fields
  if (!config.amount || config.amount <= 0) {
    alert('Please enter a valid donation amount.')
    return
  }

  if (!config.email || !config.name) {
    alert('Please provide your name and email address.')
    return
  }

  // Route to appropriate payment gateway
  switch (gateway) {
    case 'paystack':
      if (config.currency === 'NGN') {
        initializePaystack(config)
      } else {
        alert('Paystack currently only supports NGN. Please use Stripe for other currencies.')
      }
      break

    case 'stripe':
      if (['USD', 'EUR', 'GBP'].includes(config.currency)) {
        initializeStripe(config)
      } else {
        alert('Stripe supports USD, EUR, and GBP. For NGN, please use Paystack or Monnify.')
      }
      break

    case 'monnify':
      if (config.currency === 'NGN') {
        initializeMonnify(config)
      } else {
        alert('Monnify currently only supports NGN. Please use Stripe for other currencies.')
      }
      break

    default:
      alert('Please select a payment method.')
  }
}

// Auto-select payment gateway based on currency
export const getRecommendedGateway = (currency: string): 'paystack' | 'stripe' | 'monnify' => {
  if (currency === 'NGN') {
    return 'paystack' // Default to Paystack for NGN
  }
  return 'stripe' // Default to Stripe for other currencies
}

