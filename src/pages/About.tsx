import { motion } from 'framer-motion'
import { Award, Target, Users, Heart, Lightbulb, Handshake } from 'lucide-react'

const About = () => {
  const objectives = [
    'Advocate for women\'s rights and well-being',
    'Protect the rights of the unborn child',
    'Instill values of responsibility, obedience, and confidence in children',
    'Create awareness and advocate against child abuse',
  ]

  const values = [
    { icon: Award, title: 'Integrity', description: 'We operate with honesty and transparency' },
    { icon: Target, title: 'Excellence', description: 'We strive for the highest standards' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace creative solutions' },
    { icon: Heart, title: 'Sustainability', description: 'We build lasting impact' },
    { icon: Handshake, title: 'Strategic Partnerships', description: 'We collaborate for greater good' },
  ]

  const trustees = [
    { name: 'HRH. Alh. Dr. Ramadan Abubakar', role: 'Chairman' },
    { name: 'Hajiya Amina Abubakar', role: 'Trustee' },
    { name: 'Hajiya Barr. Khadijah A. Adamu', role: 'Trustee' },
  ]

  const boardMembers = [
    { name: 'Group Capt. Usaman Jibrin (Rtd)', role: 'Board Member' },
    { name: 'Hajiya Ramatu Bala U. Halilu', role: 'Board Member' },
    { name: 'Lady Chief Mrs. T. Wuya', role: 'Board Member (UNFPA)' },
    { name: 'Hajiya Barr. Khadijah A. Adamu', role: 'Board Member (UNICEF Representative)' },
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
            About CRF
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Empowering, protecting, and promoting child rights across Africa since 2000
          </motion.p>
        </div>
      </section>

      {/* About CRF Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-aos="fade-up"
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-6">
                Our Story
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Child Rights Foundation (CRF) was founded in 2000 by Hajiya Barr. Khadijah A. Adamu, 
                with a vision to create a safe and well-developed child instilled with positive values 
                and prepared for positive adulthood.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed">
                Over the past two decades, CRF has been at the forefront of child rights advocacy, 
                education, and community development across Africa. We work tirelessly to ensure that 
                every child has access to quality education, healthcare, and protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Director */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
              Executive Director
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-gold mb-2">
                Aisha Abdullahi Adamu
              </h3>
              <p className="text-lg text-text-charcoal">
                Leading CRF with passion and dedication to create lasting change in the lives of children 
                and communities across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-6">
              Our Vision
            </h2>
            <p className="text-2xl md:text-3xl text-primary-gold font-semibold italic leading-relaxed">
              "A safe and well-developed child instilled with positive values and prepared for positive adulthood."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-8 text-center">
              Our Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-primary-gold text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-text-charcoal">{objective}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="bg-primary-gold bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-gold" size={40} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-charcoal">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership & Trustees
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Trustees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-6 text-center">
                Trustees
              </h3>
              <div className="space-y-4">
                {trustees.map((trustee, index) => (
                  <div key={index} className="border-l-4 border-primary-gold pl-4">
                    <h4 className="font-heading font-bold text-text-charcoal">{trustee.name}</h4>
                    <p className="text-primary-gold">{trustee.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Board of Directors */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-6 text-center">
                Board of Directors
              </h3>
              <div className="space-y-4">
                {boardMembers.map((member, index) => (
                  <div key={index} className="border-l-4 border-primary-gold pl-4">
                    <h4 className="font-heading font-bold text-text-charcoal">{member.name}</h4>
                    <p className="text-primary-gold">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

