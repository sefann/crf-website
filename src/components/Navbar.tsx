import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/news', label: 'News & Updates' },
    { path: '/resources', label: 'Resources' },
  ]

  const aboutDropdown = [
    { path: '/about#our-story', label: 'Our Story' },
    { path: '/about#objectives', label: 'Objectives' },
    { path: '/about#leadership', label: 'Leadership & Trustee' },
  ]

  const programsDropdown = [
    { path: '/programs', label: 'All Programs' },
    { path: '/aisha-cares', label: 'Aisha Cares' },
    { path: '/university-tours', label: 'University Tour' },
  ]

  const isActive = (path: string) => location.pathname === path
  const isAboutActive = location.pathname === '/about'
  const isProgramsActive = location.pathname === '/programs' || location.pathname === '/aisha-cares' || location.pathname === '/university-tours'

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/crf-logoheader.svg" 
              alt="Child Rights Foundation" 
              className="h-36 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-gold font-semibold'
                    : 'text-text-charcoal hover:text-primary-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isAboutActive
                    ? 'text-primary-gold font-semibold'
                    : 'text-text-charcoal hover:text-primary-gold'
                }`}
              >
                <span>About</span>
                <ChevronDown size={16} className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm transition-colors text-text-charcoal hover:bg-accent-gray"
                        onClick={() => {
                          // Scroll to section after navigation
                          setTimeout(() => {
                            const hash = item.path.split('#')[1]
                            if (hash) {
                              const element = document.getElementById(hash)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              }
                            }
                          }, 100)
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isProgramsActive
                    ? 'text-primary-gold font-semibold'
                    : 'text-text-charcoal hover:text-primary-gold'
                }`}
              >
                <span>Programs</span>
                <ChevronDown size={16} className={`transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {programsDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(item.path)
                            ? 'bg-primary-gold text-white'
                            : 'text-text-charcoal hover:bg-accent-gray'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/donate"
              className="btn-primary ml-4"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-text-charcoal hover:bg-accent-gray"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-gold font-semibold'
                      : 'text-text-charcoal hover:text-primary-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* About Dropdown for Mobile */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-text-charcoal">
                  About
                </div>
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        const hash = item.path.split('#')[1]
                        if (hash) {
                          const element = document.getElementById(hash)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }
                      }, 100)
                    }}
                    className="block px-6 py-2 rounded-md text-sm font-medium transition-colors text-text-charcoal hover:text-primary-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Programs Dropdown for Mobile */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-semibold text-text-charcoal">
                  Programs
                </div>
                {programsDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-gold font-semibold bg-primary-gold/10'
                        : 'text-text-charcoal hover:text-primary-gold'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full block mt-4 text-center"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

