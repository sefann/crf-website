import { motion } from 'framer-motion'
import { FileText, Shield, Cookie } from 'lucide-react'

const Legal = () => {
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
            Legal & Policies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Transparency and trust are at the core of everything we do
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy */}
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
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Privacy Policy
              </h2>
            </div>
            <div className="prose max-w-none text-text-charcoal space-y-4">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p>
                Child Rights Foundation (CRF) is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or interact with our services.
              </p>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                Information We Collect
              </h3>
              <p>
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone, address)</li>
                <li>Donation information and payment details</li>
                <li>Volunteer and partnership inquiry information</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                How We Use Your Information
              </h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process donations and provide receipts</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates about our programs and impact</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                Information Sharing
              </h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only with trusted service providers who assist us in operating our website 
                and conducting our programs, and only to the extent necessary.
              </p>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                Data Security
              </h3>
              <p>
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee absolute 
                security.
              </p>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                Your Rights
              </h3>
              <p>
                You have the right to access, update, or delete your personal information at any time. 
                To exercise these rights, please contact us at contact@thechildrightsfoundation.org.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms & Conditions Link */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <FileText className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Terms & Conditions
              </h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-text-charcoal mb-6">
                Our Terms of Service have been moved to a separate page for better organization and clarity.
              </p>
              <a href="/terms-of-service" className="btn-primary inline-block">
                View Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy */}
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
            <div className="flex items-center space-x-4 mb-6">
              <Cookie className="text-primary-gold" size={40} />
              <h2 className="text-4xl font-heading font-bold text-secondary-blue">
                Cookie Policy
              </h2>
            </div>
            <div className="prose max-w-none text-text-charcoal space-y-4">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p>
                Our website uses cookies to enhance your browsing experience and analyze website traffic. 
                By continuing to use our website, you consent to our use of cookies.
              </p>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                What Are Cookies
              </h3>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and provide 
                information to the website owners.
              </p>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                How We Use Cookies
              </h3>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To ensure the website functions properly</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve website performance and user experience</li>
                <li>To remember your preferences and settings</li>
              </ul>
              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                Managing Cookies
              </h3>
              <p>
                You can control and manage cookies in your browser settings. However, please note that 
                disabling cookies may affect the functionality of our website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Questions */}
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
              Questions About Our Policies?
            </h2>
            <p className="text-text-charcoal mb-6">
              If you have any questions about our Privacy Policy, Terms & Conditions, or Cookie Policy, 
              please don't hesitate to contact us.
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

export default Legal

