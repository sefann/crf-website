import { motion } from 'framer-motion'
import { Heart, Gift, School, Utensils, Users, ArrowRight } from 'lucide-react'

const Donate = () => {
  const donationTiers = [
    {
      icon: Gift,
      amount: '₦5,000',
      title: 'School Kit',
      description: 'Provide a child with essential school supplies including books, pens, and a backpack.',
    },
    {
      icon: Utensils,
      amount: '₦20,000',
      title: 'Feeding Support',
      description: 'Support a child\'s nutrition for a month through our school feeding program.',
    },
    {
      icon: School,
      amount: '₦50,000',
      title: 'Education Support',
      description: 'Help build and maintain school facilities, providing a safe learning environment.',
    },
    {
      icon: Users,
      amount: '₦100,000',
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

      {/* Donation Tiers */}
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
              Donation Tiers
            </h2>
            <p className="text-lg text-text-charcoal">
              Choose an amount that works for you, or donate any amount you wish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon
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
                    <div className="text-3xl font-heading font-bold text-primary-gold mb-2">
                      {tier.amount}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                      {tier.title}
                    </h3>
                    <p className="text-text-charcoal mb-4 text-sm">
                      {tier.description}
                    </p>
                    <button className="btn-primary w-full text-sm py-2">
                      Donate {tier.amount}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Custom Amount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-4 text-center">
              Donate Any Amount
            </h3>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter amount (₦)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
              />
              <button className="btn-primary w-full">
                Donate Now
              </button>
            </div>
            <p className="text-sm text-text-charcoal text-center mt-4">
              All donations are secure and tax-deductible
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
                  <a href="mailto:contact@childrightsfoundation.com" className="text-primary-gold hover:underline">
                    contact@childrightsfoundation.com
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

