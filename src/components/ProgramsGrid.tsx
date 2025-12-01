import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Heart, Utensils, GraduationCap, Megaphone, Users } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Child Rights Awareness Campaign',
    description: 'Raising awareness about children\'s rights and protection across communities.',
  },
  {
    icon: GraduationCap,
    title: 'Child Rights Education',
    description: 'Providing quality education and educational resources to children.',
  },
  {
    icon: Heart,
    title: 'Reproductive Health',
    description: 'Promoting reproductive health education and access to healthcare services.',
  },
  {
    icon: Utensils,
    title: 'School Feeding',
    description: 'Ensuring children receive nutritious meals to support their learning.',
  },
  {
    icon: Megaphone,
    title: 'Advocacy Activities',
    description: 'Advocating for policy changes and child rights protection at all levels.',
  },
  {
    icon: Users,
    title: 'Aisha Cares Initiative',
    description: 'Empowering young women through mentorship and support programs.',
    link: '/aisha-cares',
  },
]

const ProgramsGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-blue mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-text-charcoal max-w-2xl mx-auto">
            Comprehensive programs designed to empower, protect, and promote child rights across Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            const cardContent = (
              <>
                <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-gold transition-colors">
                  <Icon className="text-primary-gold group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                  {program.title}
                </h3>
                <p className="text-text-charcoal flex-grow">
                  {program.description}
                </p>
                {program.link ? (
                  <span className="mt-4 text-primary-gold font-semibold inline-flex items-center">
                    Learn More →
                  </span>
                ) : null}
              </>
            )

            const cardWrapper = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-gold group h-full flex flex-col ${
                  program.link ? 'cursor-pointer' : ''
                }`}
              >
                {cardContent}
              </motion.div>
            )

            return program.link ? (
              <Link key={index} to={program.link} className="block h-full">
                {cardWrapper}
              </Link>
            ) : (
              cardWrapper
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/programs" className="btn-primary">
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsGrid

