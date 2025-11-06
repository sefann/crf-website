import { motion } from 'framer-motion'

const partners = [
  'UNICEF',
  'WHO',
  'World Bank',
  'Pathfinder',
  'IHVN',
  'SMILE',
  'CSS',
]

const PartnersCarousel = () => {
  return (
    <section className="section-padding bg-accent-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-blue mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-text-charcoal">
            Working together to create lasting change
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-24"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <span className="text-secondary-blue font-heading font-bold text-lg">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel

