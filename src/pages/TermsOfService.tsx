import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const TermsOfService = () => {
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
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our website
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
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
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="text-primary-gold" size={40} />
                <p className="text-lg text-text-charcoal">
                  <strong>Last Updated:</strong> January 2024
                </p>
              </div>

              <div className="prose max-w-none text-text-charcoal space-y-6">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">
                    By accessing and using the Child Rights Foundation (CRF) website, you accept and agree 
                    to be bound by the terms and provision of this agreement. If you do not agree to abide 
                    by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Use of Website
                  </h2>
                  <p className="leading-relaxed mb-4">
                    The content of this website is for general information and use only. It is subject to 
                    change without notice. Neither we nor any third parties provide any warranty or guarantee 
                    as to the accuracy, timeliness, performance, completeness, or suitability of the information 
                    and materials found or offered on this website.
                  </p>
                  <p className="leading-relaxed">
                    Your use of any information or materials on this website is entirely at your own risk, 
                    for which we shall not be liable. It shall be your own responsibility to ensure that any 
                    products, services, or information available through this website meet your specific requirements.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Donations
                  </h2>
                  <p className="leading-relaxed mb-4">
                    All donations made through our website are final and non-refundable unless otherwise 
                    specified. Donations are used to support CRF's programs and operations in accordance 
                    with our mission and objectives.
                  </p>
                  <p className="leading-relaxed">
                    By making a donation, you acknowledge that you have read and understood our donation 
                    policy and agree to the terms of your contribution. All donations are processed securely, 
                    and we maintain the highest standards of financial accountability.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Intellectual Property
                  </h2>
                  <p className="leading-relaxed mb-4">
                    This website contains material which is owned by or licensed to us. This material includes, 
                    but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is 
                    prohibited other than in accordance with the copyright notice, which forms part of these 
                    terms and conditions.
                  </p>
                  <p className="leading-relaxed">
                    All trademarks reproduced in this website, which are not the property of, or licensed to 
                    the operator, are acknowledged on the website. Unauthorized use of this website may give 
                    rise to a claim for damages and/or be a criminal offense.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    User Conduct
                  </h2>
                  <p className="leading-relaxed mb-4">
                    You agree to use our website only for lawful purposes and in a way that does not infringe 
                    the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. 
                    Prohibited behavior includes harassing or causing distress or inconvenience to any person, 
                    transmitting obscene or offensive content, or disrupting the normal flow of dialogue within 
                    our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="leading-relaxed mb-4">
                    CRF shall not be liable for any indirect, incidental, special, consequential, or punitive 
                    damages resulting from your use of or inability to use the website. This includes, but is 
                    not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
                  </p>
                  <p className="leading-relaxed">
                    In no event shall CRF's total liability to you for all damages, losses, or causes of action 
                    exceed the amount you paid to us, if any, for accessing this website.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Links to Other Websites
                  </h2>
                  <p className="leading-relaxed">
                    Our website may contain links to other websites of interest. However, once you have used 
                    these links to leave our site, you should note that we do not have any control over that 
                    other website. Therefore, we cannot be responsible for the protection and privacy of any 
                    information which you provide whilst visiting such sites and such sites are not governed 
                    by this privacy statement.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Modifications to Terms
                  </h2>
                  <p className="leading-relaxed">
                    CRF reserves the right to modify these terms of service at any time. We will notify users 
                    of any changes by posting the new terms on this page. Your continued use of the website 
                    after any such changes constitutes your acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Governing Law
                  </h2>
                  <p className="leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of 
                    Nigeria. Any disputes relating to these terms will be subject to the exclusive jurisdiction 
                    of the courts of Nigeria.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    Contact Information
                  </h2>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-accent-gray p-4 rounded-lg mt-4">
                    <p className="mb-2"><strong>Email:</strong> contact@thechildrightsfoundation.org</p>
                    <p className="mb-2"><strong>Phone:</strong> +234 707 999 3916</p>
                    <p><strong>Address:</strong> United Nations House, Shendam Road, Lafia, Nasarawa State</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService

