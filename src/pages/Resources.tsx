import { motion } from 'framer-motion'
import { FileText, BookOpen, Shield, DollarSign, Briefcase, Download } from 'lucide-react'

const Resources = () => {
  const annualReports = [
    { year: '2023', title: 'Annual Report 2023', description: 'Comprehensive overview of our programs and impact in 2023' },
    { year: '2022', title: 'Annual Report 2022', description: 'Annual report highlighting our achievements and milestones' },
    { year: '2021', title: 'Annual Report 2021', description: 'Year in review: Our impact across communities' },
  ]

  const publications = [
    { title: 'Child Rights Advocacy Guide', description: 'A comprehensive guide to child rights advocacy in Nigeria' },
    { title: 'Education Access Report', description: 'Research on education access and barriers in Northern Nigeria' },
    { title: 'Community Development Framework', description: 'Our approach to sustainable community development' },
    { title: 'Women Empowerment Initiatives', description: 'Documentation of our women empowerment programs' },
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
            Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Access our reports, publications, and important information about our work
          </motion.p>
        </div>
      </section>

      {/* Annual Reports */}
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Annual Reports
              </h2>
            </div>
            <p className="text-lg text-text-charcoal max-w-2xl mx-auto">
              Download our annual reports to learn about our impact, programs, and financial transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-accent-gray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-primary-gold" size={32} />
                </div>
                <div className="text-sm text-primary-gold font-semibold mb-2">{report.year}</div>
                <h3 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                  {report.title}
                </h3>
                <p className="text-text-charcoal mb-4 text-sm">
                  {report.description}
                </p>
                <button className="btn-primary w-full text-sm py-2 inline-flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download PDF</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Publications
              </h2>
            </div>
            <p className="text-lg text-text-charcoal max-w-2xl mx-auto">
              Explore our research, guides, and documentation on child rights and development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gold bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-primary-gold" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-heading font-bold text-secondary-blue mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-text-charcoal text-sm mb-4">
                      {publication.description}
                    </p>
                    <button className="text-primary-gold font-semibold text-sm hover:underline inline-flex items-center space-x-1">
                      <span>Read More</span>
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Shield className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Accountability & Transparency
              </h2>
            </div>
            <div className="bg-accent-gray p-8 rounded-lg">
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                At Child Rights Foundation, we are committed to maintaining the highest standards of 
                accountability and transparency in all our operations. We believe that our stakeholders 
                have the right to know how we use resources and the impact we create.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading font-bold text-secondary-blue mb-3">Our Commitment</h3>
                  <ul className="space-y-2 text-text-charcoal">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular financial audits and reporting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Public disclosure of program outcomes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transparent governance structures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary-blue mb-3">How We Ensure Transparency</h3>
                  <ul className="space-y-2 text-text-charcoal">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Annual reports with detailed financial statements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular updates on program activities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span>Independent evaluations and assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Responsibility */}
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
            <div className="flex items-center justify-center space-x-3 mb-8">
              <DollarSign className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Financial Responsibility
              </h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                We are committed to using every donation and resource efficiently and effectively. 
                Our financial management practices ensure that the maximum amount of resources goes 
                directly to programs that benefit children and communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent-gray rounded-lg">
                  <div className="text-3xl font-heading font-bold text-primary-gold mb-2">85%</div>
                  <p className="text-text-charcoal text-sm">Programs & Services</p>
                </div>
                <div className="text-center p-4 bg-accent-gray rounded-lg">
                  <div className="text-3xl font-heading font-bold text-primary-gold mb-2">10%</div>
                  <p className="text-text-charcoal text-sm">Administrative Costs</p>
                </div>
                <div className="text-center p-4 bg-accent-gray rounded-lg">
                  <div className="text-3xl font-heading font-bold text-primary-gold mb-2">5%</div>
                  <p className="text-text-charcoal text-sm">Fundraising</p>
                </div>
              </div>
              <p className="text-text-charcoal text-sm text-center">
                All financial statements are audited annually by independent auditors and are available 
                upon request. We maintain the highest standards of financial accountability and transparency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Careers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Briefcase className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Careers
              </h2>
            </div>
            <div className="bg-accent-gray p-8 rounded-lg">
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Join our team and make a difference in the lives of children and communities across Africa. 
                We are always looking for passionate, dedicated individuals who share our commitment to 
                child rights and development.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    Program Coordinator
                  </h3>
                  <p className="text-text-charcoal mb-3">
                    We are seeking an experienced Program Coordinator to oversee our child rights education 
                    programs across multiple communities.
                  </p>
                  <button className="text-primary-gold font-semibold hover:underline">
                    View Details & Apply →
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    Community Outreach Specialist
                  </h3>
                  <p className="text-text-charcoal mb-3">
                    Join our team as a Community Outreach Specialist and help us expand our reach to 
                    underserved communities.
                  </p>
                  <button className="text-primary-gold font-semibold hover:underline">
                    View Details & Apply →
                  </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-heading font-bold text-secondary-blue mb-2">
                    Finance Officer
                  </h3>
                  <p className="text-text-charcoal mb-3">
                    We are looking for a Finance Officer to manage our financial operations and ensure 
                    transparency and accountability.
                  </p>
                  <button className="text-primary-gold font-semibold hover:underline">
                    View Details & Apply →
                  </button>
                </div>
              </div>
              <p className="text-text-charcoal text-center">
                Don't see a position that matches your skills? We're always interested in hearing from 
                passionate individuals. Send your CV to{' '}
                <a href="mailto:contact@thechildrightsfoundation.org" className="text-primary-gold hover:underline">
                  contact@thechildrightsfoundation.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources

