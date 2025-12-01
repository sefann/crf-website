import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, BookOpen, Award, Heart, ArrowRight, DollarSign, Target } from 'lucide-react'

const UniversityTours = () => {
  const impactData = [
    {
      university: 'University of Abuja',
      students: '200+',
      scholarships: '50 scholarships',
      states: '25 states',
      description: 'Launched scholarships across 25 states, reaching over 200 students.',
    },
    {
      university: 'Nasarawa State University, Keffi',
      students: '500+',
      scholarships: '15 scholarships',
      sessions: 'Leadership sessions delivered',
      description: 'Awarded 15 scholarships and delivered comprehensive leadership sessions.',
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
            The CRF University Tour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Empowering Young Women, One Campus at a Time
          </motion.p>
        </div>
      </section>

      {/* Origin Section */}
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
                Origin – Aisha Cares Love Drive
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                The University Tour began as the Aisha Cares Love Drive, an initiative created by Aisha Abdullahi Adamu. 
                Built on the "Big Sister, Little Sister" concept, the Love Drive was established as a tool of impact and 
                tangible support committed to empowering and uplifting the futures of Northern women.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed">
                Through Aisha Cares Love Drives, safe spaces were created to spark open conversations, encourage mentorship, 
                and provide support systems that equip young women to break limiting barriers and excel beyond expectations 
                and glass ceilings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="section-padding bg-accent-gray">
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
                From Love Drive to University Tour
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                As the Love Drive grew, it evolved into a larger platform — the University Tour. This expansion allowed us 
                to reach hundreds of female students directly within their universities, offering them:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Award className="text-primary-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-1">Scholarships</h3>
                    <p className="text-text-charcoal">To ease financial burdens and support academic pursuits.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-primary-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-1">Mentorship Opportunities</h3>
                    <p className="text-text-charcoal">To guide personal and career growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-primary-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-1">Workshops & Dialogues</h3>
                    <p className="text-text-charcoal">On resilience, leadership, and breaking barriers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="text-primary-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-heading font-bold text-secondary-blue mb-1">Community Support</h3>
                    <p className="text-text-charcoal">Through CRF's established advocacy networks.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              Impact So Far
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {impactData.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-accent-gray p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-primary-gold" size={32} />
                  <h3 className="text-2xl font-heading font-bold text-secondary-blue">
                    {impact.university}
                  </h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="text-primary-gold" size={20} />
                    <span className="text-text-charcoal"><strong>{impact.students}</strong> students reached</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="text-primary-gold" size={20} />
                    <span className="text-text-charcoal"><strong>{impact.scholarships}</strong> {impact.states && `launched across ${impact.states}`} {impact.sessions && impact.sessions}</span>
                  </div>
                </div>
                <p className="text-text-charcoal">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
              data-aos="fade-up"
            >
              <Target className="text-primary-gold mx-auto mb-4" size={48} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-6">
                Future Vision
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed">
                Now absorbed under the Child Rights Foundation (CRF), the University Tour has become a flagship youth 
                empowerment program. Our vision is to expand across Nigerian universities and eventually continental campuses, 
                building a pipeline of young women equipped to lead, excel, and uplift others.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsor a Student Section */}
      <section className="section-padding bg-gradient-to-br from-[#B8860B] via-[#9A7209] to-[#B8860B] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Help Sponsor a Student
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Your sponsorship can transform a young woman's future by providing financial support, 
                mentorship, and opportunities to excel in her academic journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <DollarSign className="text-white mb-4" size={40} />
                <h3 className="text-xl font-heading font-bold mb-3">Financial Support</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Help cover tuition fees, books, and essential supplies that enable students to focus on their studies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Heart className="text-white mb-4" size={40} />
                <h3 className="text-xl font-heading font-bold mb-3">Mentorship Access</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Sponsored students receive priority access to mentorship programs and career guidance sessions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Award className="text-white mb-4" size={40} />
                <h3 className="text-xl font-heading font-bold mb-3">Life-Changing Impact</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Your contribution creates a ripple effect, empowering students to become leaders and change-makers.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg mb-8"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-heading font-bold mb-4 text-center">How Sponsorship Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-primary-gold rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Make Your Donation</h4>
                    <p className="text-white/90 text-sm">
                      Choose any amount you'd like to contribute. Every donation makes a difference in a student's life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-primary-gold rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Student Selection</h4>
                    <p className="text-white/90 text-sm">
                      We identify deserving students based on need, academic performance, and commitment to their education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-primary-gold rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Direct Support</h4>
                    <p className="text-white/90 text-sm">
                      Funds are directly allocated to cover tuition, books, and essential academic resources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white text-primary-gold rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-heading font-bold mb-2">Regular Updates</h4>
                    <p className="text-white/90 text-sm">
                      Receive updates on your sponsored student's progress and the impact of your contribution.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
              data-aos="fade-up"
            >
              <Link 
                to="/donate" 
                className="btn-primary bg-white text-secondary-blue hover:bg-accent-gray inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Sponsor a Student Now</span>
                <ArrowRight size={24} />
              </Link>
              <p className="text-white/90 mt-4 text-sm">
                For questions about sponsorship, contact us at{' '}
                <a href="mailto:unitour@thechildrightsfoundation.org" className="underline font-semibold hover:text-white">
                  unitour@thechildrightsfoundation.org
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-8">
              Get Involved
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
              <a href="mailto:unitour@thechildrightsfoundation.org" className="btn-outline inline-flex items-center space-x-2">
                <span>Partner with the Tour</span>
                <ArrowRight size={20} />
              </a>
              <Link to="/get-involved" className="btn-outline inline-flex items-center space-x-2">
                <span>Join the Next Tour</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default UniversityTours
