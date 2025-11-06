import { motion } from 'framer-motion'
import { Target, Heart, Shield } from 'lucide-react'

const MissionSection = () => {
  return (
    <section className="section-padding bg-accent-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-blue mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-text-charcoal leading-relaxed mb-12">
            CRF is a non-profit, non-governmental, and non-partisan organization dedicated to 
            empowering, protecting, and promoting child rights, access to quality education, 
            and overall well-being across Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">Empower</h3>
              <p className="text-text-charcoal">Empowering children with knowledge and skills</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-primary-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">Protect</h3>
              <p className="text-text-charcoal">Protecting children's rights and well-being</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">Promote</h3>
              <p className="text-text-charcoal">Promoting quality education and development</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection

