import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, ArrowRight } from 'lucide-react'

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams()
  const [reference, setReference] = useState<string | null>(null)

  useEffect(() => {
    const ref = searchParams.get('reference')
    setReference(ref)
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-gray section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <CheckCircle className="text-green-500 mx-auto" size={80} />
        </motion.div>

        <h1 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
          Payment Successful!
        </h1>

        <p className="text-lg text-text-charcoal mb-6">
          Thank you for your generous donation to Child Rights Foundation.
        </p>

        {reference && (
          <div className="bg-accent-gray p-4 rounded-lg mb-6">
            <p className="text-sm text-text-charcoal">
              <span className="font-semibold">Transaction Reference:</span> {reference}
            </p>
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 text-text-charcoal mb-8">
          <Mail className="text-primary-gold" size={20} />
          <p className="text-sm">
            A confirmation email with your receipt has been sent to your email address.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center space-x-2">
            <span>Return to Home</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/donate" className="btn-outline inline-flex items-center justify-center space-x-2">
            <span>Make Another Donation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentSuccess
