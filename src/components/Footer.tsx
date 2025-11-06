import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img 
              src="/crf-logofooter.svg" 
              alt="Child Rights Foundation" 
              className="h-48 w-auto mb-4"
            />
            <p className="text-sm mb-4">
              Developing the Child Today for a Better Tomorrow. Empowering, protecting, and promoting child rights across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary-gold transition-colors">Programs</Link></li>
              <li><Link to="/projects-impact" className="hover:text-primary-gold transition-colors">Projects & Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary-gold transition-colors">Get Involved</Link></li>
              <li><Link to="/donate" className="hover:text-primary-gold transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary-gold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-primary-gold flex-shrink-0" />
                <div>
                  <p>United Nations House, Shendam Road</p>
                  <p>Lafia, Nasarawa State</p>
                  <p className="mt-2">DAD6 D Mayors Estate</p>
                  <p>Games Village, Abuja</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-gold" />
                <a href="tel:+2347079993916" className="hover:text-primary-gold transition-colors">
                  +234 707 999 3916
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-gold" />
                <a href="mailto:contact@thechildrightsfoundation.org" className="hover:text-primary-gold transition-colors">
                  contact@thechildrightsfoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary-gold">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-primary-gold transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary-gold transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-primary-gold transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
            <Link to="/faq" className="text-sm hover:text-primary-gold transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Child Rights Foundation (CRF). All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link to="/legal" className="hover:text-primary-gold transition-colors">
              Legal / Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/terms-of-service" className="hover:text-primary-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

