import { motion } from 'framer-motion'
import { Heart, Gift, School, Utensils, Users, Shield, AlertCircle, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { detectCurrency, getCurrencySymbol, CURRENCY_INFO, SUPPORTED_CURRENCIES } from '../utils/currency'
import { processPayment, getRecommendedGateway, getAvailableGateways, type PaymentConfig, type PaymentGateway } from '../utils/payments'
import { getBankAccountDetails, getContactEmail, isBankDetailsConfigured } from '../utils/config'

const Donate = () => {
  const [currency, setCurrency] = useState<string>('NGN')
  const [currencySymbol, setCurrencySymbol] = useState<string>('₦')
  const [customAmount, setCustomAmount] = useState<number | "">("")
  const [donorName, setDonorName] = useState<string>("")
  const [donorEmail, setDonorEmail] = useState<string>("")
  const [selectedGateway, setSelectedGateway] = useState<PaymentGateway | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false)
  const currencyDropdownRef = useRef<HTMLDivElement>(null)

  // Optional preset tiers (for quick clicks)
  const donationTiers: Record<string, number[]> = {
    NGN: [1000, 5000, 10000, 20000, 50000],
    USD: [5, 10, 25, 50, 100],
    GBP: [4, 8, 20, 40, 80],
    EUR: [5, 10, 25, 50, 100],
  }

  useEffect(() => {
    const detected = detectCurrency()
    setCurrency(detected)
    setCurrencySymbol(getCurrencySymbol(detected))
    // Auto-select recommended gateway based on currency
    const recommended = getRecommendedGateway(detected)
    setSelectedGateway(recommended)
  }, [])

  // Update gateway when currency changes
  useEffect(() => {
    const recommended = getRecommendedGateway(currency)
    setSelectedGateway(recommended)
    setError(null)
  }, [currency])

  // Close currency dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target as Node)) {
        setIsCurrencyDropdownOpen(false)
      }
    }

    if (isCurrencyDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCurrencyDropdownOpen])

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency)
    setCurrencySymbol(getCurrencySymbol(newCurrency))
    setCustomAmount("") // Reset custom amount when currency changes
    setError(null)
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomAmount(value === "" ? "" : parseFloat(value))
  }

  const handleDonate = async (amount: number | "") => {
    setError(null)

    // Validate amount
    if (!amount || amount <= 0) {
      setError("Please enter a donation amount.")
      return
    }

    // Validate name
    if (!donorName.trim()) {
      setError("Please enter your name.")
      return
    }

    // Validate email
    if (!donorEmail.trim() || !donorEmail.includes('@')) {
      setError("Please enter a valid email address.")
      return
    }

    // Validate gateway selection
    if (!selectedGateway) {
      const available = getAvailableGateways(currency)
      if (available.length === 0) {
        setError(`No payment method available for ${currency}. Please contact us at donate@thechildrightsfoundation.org`)
        return
      }
      setError("Please select a payment method.")
      return
    }

    setIsProcessing(true)

    const paymentConfig: PaymentConfig = {
      amount: amount,
      currency: currency,
      email: donorEmail.trim(),
      name: donorName.trim(),
      metadata: {
        source: 'website',
        donation_type: 'general',
      },
      callbackUrl: `${window.location.origin}/donate/success`,
    }

    try {
      await processPayment(paymentConfig, selectedGateway)
      // Payment gateway will handle redirect, so we don't reset processing state here
    } catch (error: any) {
      console.error('Payment error:', error)
      setError(error.message || 'An error occurred while processing your payment. Please try again or contact us.')
      setIsProcessing(false)
    }
  }

  const donationCategories = [
    {
      icon: Gift,
      title: 'School Kit',
      description: 'Provide a child with essential school supplies including books, pens, and a backpack.',
    },
    {
      icon: Utensils,
      title: 'Feeding Support',
      description: 'Support a child\'s nutrition for a month through our school feeding program.',
    },
    {
      icon: School,
      title: 'Education Support',
      description: 'Help build and maintain school facilities, providing a safe learning environment.',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Support an entire community program, reaching multiple children and families.',
    },
  ]

  const testimonials = [
    {
      quote: 'Donating to CRF has been one of the most rewarding experiences. Knowing that my contribution is helping children access education fills my heart with joy.',
      author: 'Dr. Sarah Ibrahim',
      role: 'Regular Donor',
    },
    {
      quote: 'I\'ve been supporting CRF for 5 years now. The transparency and impact of their work is remarkable. Every donation makes a real difference.',
      author: 'Alhaji Musa Abdullahi',
      role: 'Long-term Supporter',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-gold to-primary-gold/80 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
          >
            Make a Difference
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Your donation helps CRF continue building schools, empowering children, and promoting education across Africa
          </motion.p>
        </div>
      </section>

      {/* Impact Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-aos="fade-up"
            >
              <Heart className="text-primary-gold mx-auto mb-6" size={60} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-6">
                Why Your Donation Matters
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Every contribution, no matter the size, helps us continue our mission of empowering, 
                protecting, and promoting child rights across Africa. Your donation directly supports:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-3 text-text-charcoal">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>School construction and renovation projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>School feeding programs ensuring children receive nutritious meals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Educational materials and resources for children</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Child rights awareness campaigns and advocacy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span>Healthcare and reproductive health programs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
              Ways to Make an Impact
            </h2>
            <p className="text-lg text-text-charcoal">
              Choose how you'd like to support our mission. Every contribution makes a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-gold"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-center">
                    <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-gold" size={32} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                      {category.title}
                    </h3>
                    <p className="text-text-charcoal mb-4 text-sm">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Preset Donation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-8"
            data-aos="fade-up"
          >
            <p className="text-center text-text-charcoal mb-4">
              Quick select an amount, or enter a custom amount below
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              {donationTiers[currency]?.map((amount) => (
                <motion.button
                  key={amount}
                  onClick={() => {
                    setCustomAmount(amount)
                    // Scroll to donation form
                    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-gold text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-gold/90 transition-all text-lg"
                >
                  {currencySymbol}{amount.toLocaleString()}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Custom Donation Form */}
          <motion.div
            id="donation-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-heading font-bold text-secondary-blue mb-2">
                Make a Donation
              </h3>
              <p className="text-text-charcoal mb-4">
                Or enter any amount you wish to donate
              </p>
              <p className="text-sm text-text-charcoal">
                Currency automatically detected: <span className="font-semibold text-primary-gold">{currency}</span>
              </p>
            </div>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                handleDonate(customAmount)
              }}
              className="space-y-6"
              id="donation-form-element"
              data-form-filler="true"
            >
              <div>
                <label htmlFor="donor-name" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="donor-name"
                  name="donorName"
                  type="text"
                  placeholder="Enter your full name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="donor-email" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="donor-email"
                  name="donorEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="donation-amount" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Donation Amount <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-text-charcoal font-semibold text-lg">{currencySymbol}</span>
                  <input
                    id="donation-amount"
                    name="donationAmount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-lg"
                    required
                    autoComplete="transaction-amount"
                  />
                </div>
              </div>

              {/* Payment Gateway Selection - Auto-filtered by availability */}
              <div>
                <label className="block text-sm font-semibold text-secondary-blue mb-2">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                {(() => {
                  const availableGateways = getAvailableGateways(currency)
                  
                  if (availableGateways.length === 0) {
                    return (
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <AlertCircle className="text-yellow-600 mt-0.5" size={20} />
                          <div>
                            <p className="text-sm font-semibold text-yellow-800">No payment method available</p>
                            <p className="text-xs text-yellow-700 mt-1">
                              No payment gateway is configured for {currency}. Please contact us at{' '}
                              <a href="mailto:donate@thechildrightsfoundation.org" className="underline">
                                donate@thechildrightsfoundation.org
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  const gatewayConfigs = {
                    paystack: {
                      name: 'Paystack',
                      logo: '/logos/Paystack-Logo.png',
                      description: 'Cards & Bank Transfer',
                      supported: ['NGN'],
                    },
                    stripe: {
                      name: 'Stripe',
                      logo: '/logos/Stripe-Logo.png',
                      description: 'Cards & More',
                      supported: ['USD', 'EUR', 'GBP'],
                    },
                    monnify: {
                      name: 'Monnify',
                      logo: '/logos/monnify-logo.png',
                      description: 'Cards & Transfer',
                      supported: ['NGN'],
                    },
                  }

                  return (
                    <>
                      <div className={`grid gap-3 ${availableGateways.length === 1 ? 'grid-cols-1' : availableGateways.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                        {availableGateways.map((gatewayConfig) => {
                          const config = gatewayConfigs[gatewayConfig.gateway]
                          const isSelected = selectedGateway === gatewayConfig.gateway
                          
                          return (
                            <button
                              key={gatewayConfig.gateway}
                              type="button"
                              onClick={() => setSelectedGateway(gatewayConfig.gateway)}
                              className={`p-4 border-2 rounded-lg transition-all ${
                                isSelected
                                  ? 'border-primary-gold bg-primary-gold/10'
                                  : 'border-gray-300 hover:border-primary-gold/50'
                              }`}
                            >
                              <img 
                                src={config.logo} 
                                alt={config.name} 
                                className="mx-auto mb-2 h-12 w-auto object-contain"
                              />
                              <p className="font-semibold text-sm text-text-charcoal">{config.name}</p>
                              <p className="text-xs text-text-charcoal">{config.description}</p>
                            </button>
                          )
                        })}
                      </div>
                      <p className="text-xs text-text-charcoal mt-2 text-center">
                        {availableGateways.length > 1 
                          ? `Multiple payment methods available for ${currency}. Select your preferred option.`
                          : `Using ${gatewayConfigs[availableGateways[0].gateway].name} for ${currency} payments.`
                        }
                      </p>
                    </>
                  )
                })()}
              </div>

              {/* Manual Currency Selection - Custom Styled Dropdown */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-semibold text-secondary-blue mb-2">
                  Change Currency (Optional)
                </label>
                <div className="relative" ref={currencyDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent bg-white text-left flex items-center justify-between hover:border-primary-gold/50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{CURRENCY_INFO[currency as keyof typeof CURRENCY_INFO]?.flag}</span>
                      <span className="font-medium text-text-charcoal">
                        {currency} - {CURRENCY_INFO[currency as keyof typeof CURRENCY_INFO]?.name}
                      </span>
                    </span>
                    <ChevronDown 
                      className={`text-gray-400 transition-transform ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  
                  {isCurrencyDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                    >
                      {SUPPORTED_CURRENCIES.map((curr) => {
                        const currencyInfo = CURRENCY_INFO[curr]
                        const isSelected = currency === curr
                        return (
                          <button
                            key={curr}
                            type="button"
                            onClick={() => {
                              handleCurrencyChange(curr)
                              setIsCurrencyDropdownOpen(false)
                            }}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-primary-gold/10 transition-colors ${
                              isSelected 
                                ? 'bg-primary-gold/5 border-l-4 border-primary-gold' 
                                : 'border-l-4 border-transparent'
                            }`}
                          >
                            <span className="text-lg">{currencyInfo.flag}</span>
                            <div className="flex-1">
                              <div className="font-medium text-text-charcoal">
                                {currencyInfo.code} - {currencyInfo.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                Symbol: {currencyInfo.symbol}
                              </div>
                            </div>
                            {isSelected && (
                              <Shield className="text-primary-gold" size={16} />
                            )}
                          </button>
                        )
                      })}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="text-red-600 mt-0.5" size={20} />
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing || !selectedGateway}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield size={20} />
                    Proceed to Payment
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-accent-gray rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="text-primary-gold mt-1 flex-shrink-0" size={20} />
                <div className="text-sm text-text-charcoal">
                  <p className="font-semibold mb-1">Secure Payment</p>
                  <p>All donations are processed securely through encrypted payment gateways. Your payment information is never stored on our servers.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-charcoal text-center mt-6">
              All donations are tax-deductible. You will receive a receipt via email after successful payment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
              How to Donate
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-accent-gray p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                  Online Donation
                </h3>
                <p className="text-text-charcoal">
                  Make a secure online donation using Paystack or Flutterwave. Click any of the 
                  donation buttons above to proceed.
                </p>
              </div>
              {isBankDetailsConfigured() && (
                <div>
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    Bank Transfer
                  </h3>
                  <p className="text-text-charcoal mb-2">
                    You can also make a direct bank transfer to our account:
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    {(() => {
                      const bankDetails = getBankAccountDetails()
                      return (
                        <>
                          <p className="font-semibold text-text-charcoal mb-1">
                            Account Name: <span className="font-normal">{bankDetails.accountName}</span>
                          </p>
                          <p className="text-text-charcoal mb-1">
                            Account Number: <span className="font-semibold">{bankDetails.accountNumber}</span>
                          </p>
                          <p className="text-text-charcoal">
                            Bank: <span className="font-semibold">{bankDetails.bankName}</span>
                          </p>
                        </>
                      )
                    })()}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                  Contact Us
                </h3>
                <p className="text-text-charcoal">
                  For more information about donations or to discuss partnership opportunities, 
                  please contact us at{' '}
                  <a href={`mailto:${getContactEmail()}`} className="text-primary-gold hover:underline">
                    {getContactEmail()}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
              What Our Donors Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="text-text-charcoal italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-secondary-blue">{testimonial.author}</p>
                  <p className="text-primary-gold text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate

