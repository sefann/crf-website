import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Handshake, Calendar, Mail, Phone, MapPin } from 'lucide-react'

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration would go here
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', interest: 'volunteer', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const waysToGetInvolved = [
    {
      icon: Users,
      title: 'Volunteer / Internship',
      description: 'Join our team as a volunteer or intern. Gain valuable experience while making a difference in the lives of children.',
      benefits: ['Hands-on experience', 'Skill development', 'Networking opportunities', 'Making an impact'],
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Partner with us to amplify our impact. We welcome collaborations with organizations, businesses, and institutions.',
      benefits: ['Strategic collaboration', 'Shared resources', 'Expanded reach', 'Mutual growth'],
    },
    {
      icon: Calendar,
      title: 'Event Participation',
      description: 'Participate in our events, workshops, and conferences. Be part of our community of change-makers.',
      benefits: ['Learning opportunities', 'Community building', 'Networking', 'Inspiration'],
    },
  ]

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
            Get Involved
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Join us in making a difference. Your involvement can change lives.
          </motion.p>
        </div>
      </section>

      {/* Ways to Get Involved */}
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
              Ways to Get Involved
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {waysToGetInvolved.map((way, index) => {
              const Icon = way.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-accent-gray p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-primary-gold" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-3">
                    {way.title}
                  </h3>
                  <p className="text-text-charcoal mb-4 leading-relaxed">
                    {way.description}
                  </p>
                  <ul className="space-y-2">
                    {way.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-text-charcoal">
                        <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-text-charcoal">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
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
                <div>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-text-charcoal font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-text-charcoal font-semibold mb-2">
                    I'm Interested In *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                  >
                    <option value="volunteer">Volunteering</option>
                    <option value="internship">Internship</option>
                    <option value="partnership">Partnership</option>
                    <option value="events">Event Participation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
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
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
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
              Contact Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
              data-aos="fade-up"
            >
              <MapPin className="text-primary-gold mx-auto mb-4" size={40} />
              <h3 className="font-heading font-bold text-secondary-blue mb-2">Address</h3>
              <p className="text-text-charcoal">
                United Nations House, Shendam Road<br />
                Lafia, Nasarawa State
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Phone className="text-primary-gold mx-auto mb-4" size={40} />
              <h3 className="font-heading font-bold text-secondary-blue mb-2">Phone</h3>
              <a href="tel:+2347079993916" className="text-text-charcoal hover:text-primary-gold">
                +234 707 999 3916
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Mail className="text-primary-gold mx-auto mb-4" size={40} />
              <h3 className="font-heading font-bold text-secondary-blue mb-2">Email</h3>
              <a href="mailto:contact@childrightsfoundation.com" className="text-text-charcoal hover:text-primary-gold">
                contact@childrightsfoundation.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved

