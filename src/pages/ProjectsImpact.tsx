import { motion } from 'framer-motion'
import { School, Heart, Users, Award, TrendingUp, MapPin } from 'lucide-react'

const ProjectsImpact = () => {
  const successStories = [
    {
      icon: School,
      title: 'School Construction Projects',
      description: 'We have built and renovated over 50 schools across Africa, providing safe learning environments for thousands of children. Each school is equipped with classrooms, libraries, and facilities to support quality education.',
      impact: '50+ Schools Built',
    },
    {
      icon: Heart,
      title: 'Healthcare & Feeding Programs',
      description: 'Our school feeding programs ensure that children receive nutritious meals daily, improving attendance and learning outcomes. We also provide healthcare services and reproductive health education.',
      impact: '10,000+ Children Fed Daily',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Through our community outreach programs, we have reached over 100 communities, providing education, awareness, and support services to children and families.',
      impact: '100+ Communities Reached',
    },
    {
      icon: Award,
      title: 'Advocacy & Policy Change',
      description: 'Our advocacy efforts have contributed to policy changes at local and national levels, improving child protection laws and educational policies across Africa.',
      impact: 'Multiple Policy Wins',
    },
  ]

  const partnerships = [
    { name: 'UNICEF', description: 'Collaborating on child rights advocacy and education programs' },
    { name: 'WHO', description: 'Working together on health and nutrition initiatives' },
    { name: 'World Bank', description: 'Partnering on infrastructure and development projects' },
    { name: 'Pathfinder', description: 'Joint reproductive health and education programs' },
    { name: 'IHVN', description: 'Healthcare and community support initiatives' },
    { name: 'SMILE', description: 'Education and child protection programs' },
    { name: 'CSS', description: 'Community development and capacity building' },
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
            Projects & Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Transforming lives and communities through impactful projects
          </motion.p>
        </div>
      </section>

      {/* Impact Overview */}
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
              Our Impact at a Glance
            </h2>
            <p className="text-lg text-text-charcoal max-w-3xl mx-auto">
              Over 20 years of dedicated service, we have made a significant impact on the lives 
              of children and communities across Africa. Here are some of our key achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, label: '20+ Years', description: 'Of Service' },
              { icon: Users, label: '10,000+', description: 'Children Reached' },
              { icon: School, label: '50+', description: 'Schools Built' },
              { icon: MapPin, label: '100+', description: 'Communities Supported' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-accent-gray p-6 rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Icon className="text-primary-gold mx-auto mb-4" size={40} />
                  <div className="text-3xl font-heading font-bold text-secondary-blue mb-2">
                    {stat.label}
                  </div>
                  <div className="text-text-charcoal">{stat.description}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => {
              const Icon = story.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-gold" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-2">
                        {story.title}
                      </h3>
                      <div className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {story.impact}
                      </div>
                    </div>
                  </div>
                  <p className="text-text-charcoal leading-relaxed">
                    {story.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnerships */}
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
              Partnership-Driven Results
            </h2>
            <p className="text-lg text-text-charcoal max-w-3xl mx-auto">
              Our impact is amplified through strategic partnerships with leading organizations 
              committed to child rights and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-accent-gray p-6 rounded-lg border-l-4 border-primary-gold"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                  {partner.name}
                </h3>
                <p className="text-text-charcoal">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: '2000', event: 'CRF Founded by Hajiya Barr. Khadijah A. Adamu' },
              { year: '2005', event: 'First school construction project completed' },
              { year: '2010', event: 'Launched comprehensive child rights education program' },
              { year: '2015', event: 'Aisha Cares Initiative launched' },
              { year: '2020', event: 'Reached milestone of 10,000+ children served' },
              { year: '2024', event: 'Continuing to expand impact across Africa' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 mb-8"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-gold text-white px-4 py-2 rounded-lg font-heading font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                  <p className="text-text-charcoal">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsImpact

