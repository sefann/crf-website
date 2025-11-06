import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is Child Rights Foundation (CRF)?',
      answer: 'Child Rights Foundation (CRF) is a non-profit, non-governmental, and non-partisan organization dedicated to empowering, protecting, and promoting child rights, access to quality education, and overall well-being across Africa. Founded in 2000, CRF has been working tirelessly to ensure that every child has access to quality education, healthcare, and protection.',
    },
    {
      question: 'How can I donate to CRF?',
      answer: 'You can donate to CRF through our website by clicking the "Donate" button in the navigation. We accept online donations through secure payment platforms. You can also make direct bank transfers to our account. For more information, please visit our Donate page or contact us directly.',
    },
    {
      question: 'How are donations used?',
      answer: 'CRF is committed to financial transparency. Approximately 85% of donations go directly to programs and services, 10% to administrative costs, and 5% to fundraising. All financial statements are audited annually by independent auditors. You can view our annual reports in the Resources section for detailed financial information.',
    },
    {
      question: 'How can I volunteer with CRF?',
      answer: 'We welcome volunteers and interns who share our passion for child rights. You can apply through our "Get Involved" page, where you can fill out a volunteer/internship form. We offer various opportunities including program coordination, community outreach, and administrative support.',
    },
    {
      question: 'What programs does CRF offer?',
      answer: 'CRF offers several programs including Child Rights Awareness Campaigns, Child Rights Education, Advocacy Activities, Reproductive Health programs, School Construction & Feeding, and the Aisha Cares Initiative. Visit our Programs page to learn more about each program.',
    },
    {
      question: 'How can I partner with CRF?',
      answer: 'We welcome partnerships with organizations, businesses, and institutions that share our mission. You can reach out to us through our Contact page or fill out the partnership inquiry form on our "Get Involved" page. We collaborate on various initiatives including education, healthcare, and community development.',
    },
    {
      question: 'Where does CRF operate?',
      answer: 'CRF operates primarily in Nigeria, with programs across various states. We have offices in Lafia, Nasarawa State, and Abuja. Our programs reach communities across Northern Nigeria and we continue to expand our impact across Africa.',
    },
    {
      question: 'How can I stay updated on CRF\'s activities?',
      answer: 'You can stay updated by visiting our News & Updates page, subscribing to our newsletter, or following us on social media (Facebook, Instagram, Twitter, LinkedIn). We regularly post updates about our programs, events, and impact.',
    },
    {
      question: 'Can I sponsor a specific child or program?',
      answer: 'Yes, you can sponsor students through our University Tour program or support specific initiatives. Visit our Donate page to see donation tiers and options. You can also contact us directly to discuss specific sponsorship opportunities.',
    },
    {
      question: 'How can I report child rights violations?',
      answer: 'If you need to report child rights violations, please contact us immediately through our Contact page or call us at +234 707 999 3916. We work with relevant authorities and organizations to address such issues and provide support to affected children.',
    },
    {
      question: 'What is the Aisha Cares Initiative?',
      answer: 'The Aisha Cares Initiative is a special program founded by Executive Director Aisha Abdullahi Adamu, dedicated to empowering young women across Northern Nigeria. It includes mentorship programs, university tours, annual conferences, and leadership training. Visit our Aisha Cares page to learn more.',
    },
    {
      question: 'How can I access CRF\'s annual reports?',
      answer: 'Our annual reports are available in the Resources section of our website. You can download PDF versions of our reports, which include detailed information about our programs, financial statements, and impact metrics.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Find answers to common questions about CRF and our programs
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
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
              <HelpCircle className="text-primary-gold mx-auto mb-4" size={48} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-text-charcoal">
                Can't find what you're looking for? <a href="/contact" className="text-primary-gold hover:underline">Contact us</a> and we'll be happy to help.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-accent-gray rounded-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-heading font-bold text-secondary-blue text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`text-primary-gold flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-text-charcoal leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-text-charcoal mb-6">
              If you couldn't find the answer you're looking for, please don't hesitate to reach out to us. 
              We're here to help!
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

