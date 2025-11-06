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
      <section id="our-story" className="section-padding bg-white scroll-mt-20">
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
                Child Rights Foundation (CRF) is a non-profit, non-governmental, and non-partisan 
                organization dedicated to empowering, protecting, and promoting child rights, access to 
                quality education, and overall well-being. Over the past two decades, CRF has established 
                invaluable partnerships with global organizations such as UNICEF and the World Health 
                Organization (WHO), Pathfinder, and World Bank making significant strides in reshaping the 
                educational landscape in Nigeria.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Under the visionary leadership of the Director, Aisha Abdullahi Adamu, CRF has achieved 
                remarkable milestones, including constructing schools and clinics and initiating numerous 
                school feeding programs across Nigeria. These efforts have improved countless individual's 
                and communities' lives and ensured that education remains accessible and impactful.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Child Rights Foundation's main programs include: Orphans and Vulnerable Children 
                programming, Creation of awareness on HIV/AIDS, conducting referral services, empowering 
                households, community/Local Government system strengthening, Educational promotion, 
                health sensitization, water sanitation and hygiene with the following partners: Institute of 
                Human Virology Nigeria (IVN), Sustainable Mechanism for Livelihood Empowerment (SMILE), 
                Community System Strengthening (CSS), all the projects have the components of HIV and 
                AIDS, Education, Healthcare, Safe motherhood, gender and women rights, governance 
                mainstreamed into it and sustainable livelihood.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed">
                Child Rights Foundation also seeks to influence government policies by engaging with the 
                executives and legislatures and seeking to contribute to the process of developing government 
                budgets, especially at the local level, while collaborating with her strategic partners and 
                networks to make an impact at the state level. Community members form an advocacy group to 
                engage governments at various levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder & Executive Director */}
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
              Leadership
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-right"
            >
              <div className="h-64 bg-gradient-to-br from-primary-gold to-primary-gold/80 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl font-heading font-bold text-primary-gold">
                  KA
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-2">
                  Hajiya Barr. Khadijah A. Adamu
                </h3>
                <p className="text-primary-gold font-semibold mb-4">Founder</p>
                <p className="text-text-charcoal leading-relaxed">
                  Founded Child Rights Foundation in 2000 with a vision to create a safe and well-developed 
                  child instilled with positive values. A dedicated advocate for child rights and women's 
                  empowerment across Africa.
                </p>
              </div>
            </motion.div>

            {/* Executive Director */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-left"
            >
              <div className="h-64 bg-gradient-to-br from-secondary-blue to-secondary-blue/80 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl font-heading font-bold text-secondary-blue">
                  AA
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-2">
                  Aisha Abdullahi Adamu
                </h3>
                <p className="text-primary-gold font-semibold mb-4">Executive Director</p>
                <p className="text-text-charcoal leading-relaxed">
                  Leading CRF with passion and dedication to create lasting change in the lives of children 
                  and communities across Africa. Founder of the Aisha Cares Initiative, empowering young 
                  women through mentorship and support.
                </p>
              </div>
            </motion.div>
          </div>
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
      <section id="objectives" className="section-padding bg-accent-gray scroll-mt-20">
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

      {/* Leadership & Trustees */}
      <section id="leadership" className="section-padding bg-white scroll-mt-20">
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

          {/* Trustees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-heading font-bold text-secondary-blue mb-8 text-center">
              Trustees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {trustees.map((trustee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-48 bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary-gold rounded-full flex items-center justify-center text-4xl font-heading font-bold text-white">
                      {trustee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-heading font-bold text-text-charcoal mb-2 text-lg">
                      {trustee.name}
                    </h4>
                    <p className="text-primary-gold font-semibold">{trustee.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board of Directors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h3 className="text-3xl font-heading font-bold text-secondary-blue mb-8 text-center">
              Board of Directors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-accent-gray rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-40 bg-gradient-to-br from-secondary-blue/20 to-secondary-blue/10 flex items-center justify-center">
                    <div className="w-24 h-24 bg-secondary-blue rounded-full flex items-center justify-center text-3xl font-heading font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-heading font-bold text-text-charcoal mb-2 text-sm leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-primary-gold font-semibold text-xs">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

