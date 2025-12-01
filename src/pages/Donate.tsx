import { motion } from 'framer-motion'
import { Heart, Gift, School, Utensils, Users, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
import { detectCurrency, getCurrencySymbol } from '../utils/currency'
import { processPayment, getRecommendedGateway, type PaymentConfig } from '../utils/payments'

const Donate = () => {
  const [currency, setCurrency] = useState<string>('NGN')
  const [currencySymbol, setCurrencySymbol] = useState<string>('₦')
  const [customAmount, setCustomAmount] = useState<number | "">("")
  const [donorName, setDonorName] = useState<string>("")
  const [donorEmail, setDonorEmail] = useState<string>("")
  const [selectedGateway, setSelectedGateway] = useState<'paystack' | 'stripe' | 'monnify'>('paystack')
  const [isProcessing, setIsProcessing] = useState(false)

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
    // Set recommended gateway based on currency
    setSelectedGateway(getRecommendedGateway(detected))
  }, [])

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency)
    setCurrencySymbol(getCurrencySymbol(newCurrency))
    setCustomAmount("") // Reset custom amount when currency changes
    // Update recommended gateway for new currency
    setSelectedGateway(getRecommendedGateway(newCurrency))
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomAmount(value === "" ? "" : parseFloat(value))
  }

  const handleDonate = async (amount: number | "") => {
    if (!amount || amount <= 0) {
      alert("Please enter a donation amount.")
      return
    }

    // Check if name and email are provided
    if (!donorName.trim()) {
      alert("Please enter your name.")
      return
    }

    if (!donorEmail.trim() || !donorEmail.includes('@')) {
      alert("Please enter a valid email address.")
      return
    }

    setIsProcessing(true)

    const paymentConfig: PaymentConfig = {
      amount: amount,
      currency: currency,
      email: donorEmail,
      name: donorName,
      metadata: {
        source: 'website',
        donation_type: 'general',
      },
      callbackUrl: `${window.location.origin}/donate/success`,
    }

    try {
      processPayment(paymentConfig, selectedGateway)
    } catch (error) {
      console.error('Payment error:', error)
      alert('An error occurred while processing your payment. Please try again or contact us.')
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
            
            <div className="space-y-6">
              <div>
                <label htmlFor="donor-name" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="donor-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="donor-email" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="donor-email"
                  type="email"
                  placeholder="Enter your email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  required
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
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-lg"
                    required
                  />
                </div>
              </div>

              {/* Payment Gateway Selection */}
              <div>
                <label className="block text-sm font-semibold text-secondary-blue mb-2">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (currency === 'NGN') {
                        setSelectedGateway('paystack')
                      } else {
                        alert('Paystack only supports NGN. Please change currency to NGN to use Paystack.')
                      }
                    }}
                    disabled={currency !== 'NGN'}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedGateway === 'paystack' && currency === 'NGN'
                        ? 'border-primary-gold bg-primary-gold/10'
                        : currency === 'NGN'
                        ? 'border-gray-300 hover:border-primary-gold/50'
                        : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <img 
                      src="/logos/Paystack-Logo.png" 
                      alt="Paystack" 
                      className={`mx-auto mb-2 h-12 w-auto object-contain ${currency !== 'NGN' ? 'opacity-40' : ''}`}
                    />
                    <p className={`font-semibold text-sm ${currency === 'NGN' ? 'text-text-charcoal' : 'text-gray-400'}`}>Paystack</p>
                    <p className={`text-xs ${currency === 'NGN' ? 'text-text-charcoal' : 'text-gray-400'}`}>Cards & Bank</p>
                    {currency !== 'NGN' && (
                      <p className="text-xs text-red-500 mt-1">NGN only</p>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (['USD', 'EUR', 'GBP'].includes(currency)) {
                        setSelectedGateway('stripe')
                      } else {
                        alert('Stripe supports USD, EUR, and GBP. Please change currency to use Stripe.')
                      }
                    }}
                    disabled={!['USD', 'EUR', 'GBP'].includes(currency)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedGateway === 'stripe' && ['USD', 'EUR', 'GBP'].includes(currency)
                        ? 'border-primary-gold bg-primary-gold/10'
                        : ['USD', 'EUR', 'GBP'].includes(currency)
                        ? 'border-gray-300 hover:border-primary-gold/50'
                        : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <img 
                      src="/logos/Stripe-Logo.png" 
                      alt="Stripe" 
                      className={`mx-auto mb-2 h-12 w-auto object-contain ${!['USD', 'EUR', 'GBP'].includes(currency) ? 'opacity-40' : ''}`}
                    />
                    <p className={`font-semibold text-sm ${['USD', 'EUR', 'GBP'].includes(currency) ? 'text-text-charcoal' : 'text-gray-400'}`}>Stripe</p>
                    <p className={`text-xs ${['USD', 'EUR', 'GBP'].includes(currency) ? 'text-text-charcoal' : 'text-gray-400'}`}>Cards & More</p>
                    {!['USD', 'EUR', 'GBP'].includes(currency) && (
                      <p className="text-xs text-red-500 mt-1">USD/EUR/GBP</p>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (currency === 'NGN') {
                        setSelectedGateway('monnify')
                      } else {
                        alert('Monnify only supports NGN. Please change currency to NGN to use Monnify.')
                      }
                    }}
                    disabled={currency !== 'NGN'}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      selectedGateway === 'monnify' && currency === 'NGN'
                        ? 'border-primary-gold bg-primary-gold/10'
                        : currency === 'NGN'
                        ? 'border-gray-300 hover:border-primary-gold/50'
                        : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <img 
                      src="/logos/monnify-logo.png" 
                      alt="Monnify" 
                      className={`mx-auto mb-2 h-12 w-auto object-contain ${currency !== 'NGN' ? 'opacity-40' : ''}`}
                    />
                    <p className={`font-semibold text-sm ${currency === 'NGN' ? 'text-text-charcoal' : 'text-gray-400'}`}>Monnify</p>
                    <p className={`text-xs ${currency === 'NGN' ? 'text-text-charcoal' : 'text-gray-400'}`}>Cards & Transfer</p>
                    {currency !== 'NGN' && (
                      <p className="text-xs text-red-500 mt-1">NGN only</p>
                    )}
                  </button>
                </div>
                <p className="text-xs text-text-charcoal mt-2 text-center">
                  {currency === 'NGN' 
                    ? 'Paystack and Monnify are available for NGN payments'
                    : 'Stripe is available for USD, EUR, and GBP payments. Change currency to NGN for Paystack or Monnify.'
                  }
                </p>
              </div>

              {/* Manual Currency Selection */}
              <div className="pt-4 border-t border-gray-200">
                <label htmlFor="currency-select" className="block text-sm font-semibold text-secondary-blue mb-2">
                  Change Currency (Optional)
                </label>
                <select
                  id="currency-select"
                  value={currency}
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent bg-white"
                >
                  <option value="NGN">🇳🇬 NGN - Nigerian Naira</option>
                  <option value="USD">🇺🇸 USD - US Dollar</option>
                  <option value="EUR">🇪🇺 EUR - Euro</option>
                  <option value="GBP">🇬🇧 GBP - British Pound</option>
                </select>
              </div>

              <button
                onClick={() => handleDonate(customAmount)}
                disabled={isProcessing}
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
            </div>

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
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                  Bank Transfer
                </h3>
                <p className="text-text-charcoal mb-2">
                  You can also make a direct bank transfer to our account:
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-text-charcoal">Account Name: Child Rights Foundation</p>
                  <p className="text-text-charcoal">Account Number: [Account Number]</p>
                  <p className="text-text-charcoal">Bank: [Bank Name]</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                  Contact Us
                </h3>
                <p className="text-text-charcoal">
                  For more information about donations or to discuss partnership opportunities, 
                  please contact us at{' '}
                  <a href="mailto:donate@thechildrightsfoundation.org" className="text-primary-gold hover:underline">
                    donate@thechildrightsfoundation.org
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

