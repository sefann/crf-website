import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, Heart, Utensils, Megaphone, Users, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Child Rights Awareness Campaign',
    description: 'Our comprehensive awareness campaigns educate communities about children\'s rights, protection mechanisms, and the importance of child welfare. We organize workshops, seminars, and community outreach programs to ensure that every stakeholder understands their role in protecting children.',
    activities: ['Community workshops', 'School programs', 'Media campaigns', 'Parent education'],
  },
  {
    icon: GraduationCap,
    title: 'Child Rights Education',
    description: 'We provide quality education and educational resources to children, ensuring they have access to learning materials, trained teachers, and safe learning environments. Our programs focus on both formal and informal education.',
    activities: ['School construction', 'Teacher training', 'Educational materials', 'Scholarship programs'],
  },
  {
    icon: Megaphone,
    title: 'Advocacy Activities',
    description: 'We advocate for policy changes and child rights protection at local, national, and international levels. Our advocacy work includes engaging with policymakers, participating in forums, and raising awareness about critical issues affecting children.',
    activities: ['Policy engagement', 'Public forums', 'Research and reports', 'Coalition building'],
  },
  {
    icon: Heart,
    title: 'Reproductive Health',
    description: 'We promote reproductive health education and access to healthcare services for adolescents and young women. Our programs focus on providing accurate information, reducing stigma, and ensuring access to quality healthcare.',
    activities: ['Health education', 'Access to services', 'Youth-friendly clinics', 'Peer education'],
  },
  {
    icon: Utensils,
    title: 'School Construction & Feeding',
    description: 'We build schools and implement feeding programs to ensure children have access to education and nutrition. Our school feeding programs help improve attendance, concentration, and overall health outcomes.',
    activities: ['School construction', 'Feeding programs', 'Nutrition education', 'Kitchen facilities'],
  },
  {
    icon: Users,
    title: 'Aisha Cares Initiative',
    description: 'A special initiative empowering young women across Northern Nigeria through mentorship, education, and support. The program is driven by the "Big Sister, Little Sister" concept, creating safe spaces for women to share stories and gain skills.',
    activities: ['Mentorship programs', 'Annual conferences', 'University tours', 'Leadership training'],
    link: '/aisha-cares',
  },
]

const Programs = () => {
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive programs designed to empower, protect, and promote child rights
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {programs.map((program, index) => {
              const Icon = program.icon
              const content = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border-2 border-accent-gray rounded-lg p-8 hover:border-primary-gold transition-all duration-300 shadow-md hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-gold bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center">
                        <Icon className="text-primary-gold" size={40} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                        {program.title}
                      </h2>
                      <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <div className="mb-6">
                        <h3 className="font-heading font-bold text-secondary-blue mb-3">Key Activities:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {program.activities.map((activity, i) => (
                            <li key={i} className="flex items-center space-x-2 text-text-charcoal">
                              <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {program.link && (
                        <Link
                          to={program.link}
                          className="inline-flex items-center space-x-2 text-primary-gold font-semibold hover:underline"
                        >
                          <span>Learn More About Aisha Cares Initiative</span>
                          <ArrowRight size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              )

              return content
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-text-charcoal mb-8 max-w-2xl mx-auto">
              Join us in making a difference. Volunteer, partner with us, or support our programs.
            </p>
            <Link to="/get-involved" className="btn-primary inline-block">
              Get Involved Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs

