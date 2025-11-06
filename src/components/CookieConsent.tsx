import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show popup after a short delay
      setTimeout(() => {
        setShowConsent(true)
      }, 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-2xl border-2 border-primary-gold p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Cookie className="text-primary-gold" size={32} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    We Use Cookies
                  </h3>
                  <p className="text-text-charcoal mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                    content. By clicking "Accept All", you consent to our use of cookies.{' '}
                    <Link to="/legal" className="text-primary-gold hover:underline font-semibold">
                      Learn more
                    </Link>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptCookies}
                      className="btn-primary text-sm py-2 px-6"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={declineCookies}
                      className="btn-outline text-sm py-2 px-6"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                <button
                  onClick={declineCookies}
                  className="absolute top-4 right-4 text-text-charcoal hover:text-primary-gold transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent

