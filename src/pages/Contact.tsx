import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-blue to-secondary-blue/90 text-white section-padding">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Get in touch with us. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-aos="fade-right"
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-text-charcoal mb-8 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gold bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-2">Address</h3>
                    <p className="text-text-charcoal">
                      United Nations House, Shendam Road<br />
                      Lafia, Nasarawa State
                    </p>
                    <p className="text-text-charcoal mt-2">
                      DAD6 D Mayors Estate<br />
                      Games Village, Abuja
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gold bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-2">Phone</h3>
                    <a href="tel:+2347079993916" className="text-text-charcoal hover:text-primary-gold transition-colors">
                      +234 707 999 3916
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gold bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-2">Email</h3>
                    <a href="mailto:contact@childrightsfoundation.com" className="text-text-charcoal hover:text-primary-gold transition-colors">
                      contact@childrightsfoundation.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-aos="fade-left"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-accent-gray p-8 rounded-lg shadow-lg"
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-text-charcoal font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-charcoal font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-text-charcoal font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-charcoal font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9!2d8.5!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDjCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CRF Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

