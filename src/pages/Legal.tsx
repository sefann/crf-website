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
            <div className="prose max-w-none text-text-charcoal space-y-6">
              <p className="text-lg">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <p className="leading-relaxed">
                Child Rights Foundation (CRF) is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information 
                when you visit our website (thechildrightsfoundation.org), make donations, or interact with our 
                services. Please read this policy carefully to understand our practices regarding your personal 
                data and how we will treat it.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                1. Information We Collect
              </h3>
              <p className="leading-relaxed mb-4">
                We collect information that you provide directly to us and information that is automatically 
                collected when you use our website.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                1.1 Information You Provide Directly
              </h4>
              <p className="leading-relaxed mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Donation Information:</strong> Donation amounts, frequency, payment preferences, 
                transaction history, and donation purpose (if specified)</li>
                <li><strong>Payment Information:</strong> Payment method details (credit/debit card type, 
                last 4 digits of card number), billing address, and transaction references. Note: We do not 
                store complete payment card numbers, CVV codes, or full account numbers on our servers.</li>
                <li><strong>Account Information:</strong> If you create an account, username, password, and 
                profile information</li>
                <li><strong>Communication Preferences:</strong> Your preferences for receiving updates, 
                newsletters, and communications from us</li>
                <li><strong>Volunteer and Partnership Information:</strong> Information provided when you 
                inquire about volunteering, partnerships, or other involvement opportunities</li>
                <li><strong>Event Registration:</strong> Information provided when registering for events, 
                workshops, or programs</li>
                <li><strong>Correspondence:</strong> Any information you provide when contacting us via email, 
                contact forms, or other communication channels</li>
              </ul>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                1.2 Information Automatically Collected
              </h4>
              <p className="leading-relaxed mb-3">When you visit our website, we automatically collect certain information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Device Information:</strong> IP address, browser type and version, device type, 
                operating system, and device identifiers</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on pages, click patterns, 
                referring website addresses, and navigation paths</li>
                <li><strong>Location Information:</strong> General geographic location based on IP address 
                (country and city level, not precise location)</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, 
                web beacons, pixels, and similar technologies (see our Cookie Policy below)</li>
                <li><strong>Log Files:</strong> Server logs containing information about your access to 
                our website</li>
              </ul>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                2. How We Use Your Information
              </h3>
              <p className="leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Processing Donations:</strong> To process your donations, verify payment information, 
                process transactions, and send you donation receipts and confirmations</li>
                <li><strong>Communication:</strong> To respond to your inquiries, requests, and comments; 
                to send you updates about our programs, impact reports, and organizational news (with your 
                consent where required)</li>
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our website and 
                services; to personalize your experience; and to ensure website security</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal 
                processes, and government requests; to enforce our Terms of Service; and to protect our rights, 
                privacy, safety, and property</li>
                <li><strong>Financial Reporting:</strong> To maintain accurate financial records, prepare 
                reports, and comply with accounting and tax obligations</li>
                <li><strong>Analytics and Improvement:</strong> To analyze website usage, understand user 
                preferences, improve website functionality, and enhance user experience</li>
                <li><strong>Fraud Prevention:</strong> To detect, prevent, and address fraud, security issues, 
                and other potentially prohibited or illegal activities</li>
                <li><strong>Marketing:</strong> To send you information about our programs, events, and 
                fundraising campaigns (only with your consent and in accordance with applicable laws)</li>
              </ul>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                3. Payment Information and Third-Party Payment Processors
              </h3>
              <p className="leading-relaxed mb-4">
                <strong>Important:</strong> We do not store your complete payment card information (full card 
                numbers, CVV codes, or expiration dates) on our servers. All payment transactions are processed 
                securely through third-party payment processors.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                3.1 Payment Processors We Use
              </h4>
              <p className="leading-relaxed mb-3">We use the following payment processors to handle donations:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Paystack:</strong> For Nigerian Naira (NGN) payments. Paystack is PCI-DSS Level 1 
                compliant and processes payments in accordance with Nigerian financial regulations. 
                <a href="https://paystack.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:underline ml-1">
                  View Paystack Privacy Policy
                </a></li>
                <li><strong>Stripe:</strong> For USD, EUR, and GBP payments. Stripe is PCI-DSS Level 1 
                compliant and certified to PCI Service Provider Level 1, the most stringent level of 
                certification available. 
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:underline ml-1">
                  View Stripe Privacy Policy
                </a></li>
                <li><strong>Monnify:</strong> For Nigerian Naira (NGN) payments. Monnify is a licensed payment 
                gateway that complies with Nigerian financial regulations. 
                <a href="https://monnify.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:underline ml-1">
                  View Monnify Privacy Policy
                </a></li>
              </ul>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                3.2 How Payment Information is Handled
              </h4>
              <p className="leading-relaxed mb-3">When you make a donation:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your payment information is encrypted and securely transmitted directly to the payment 
                processor</li>
                <li>The payment processor handles all aspects of payment authorization, processing, and storage</li>
                <li>We receive confirmation of successful payments and transaction details (amount, date, 
                reference number) but not your full payment card details</li>
                <li>Payment processors may store your payment information (in encrypted form) to facilitate 
                future transactions, subject to their own privacy policies</li>
                <li>We may store the last 4 digits of your card number and card type for identification and 
                receipt purposes only</li>
              </ul>
              <p className="leading-relaxed mb-4">
                By using our payment services, you agree to the privacy policies and terms of service of the 
                payment processors. We encourage you to review their policies to understand how they handle 
                your payment information.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                3.3 Payment Data Retention
              </h4>
              <p className="leading-relaxed mb-4">
                We retain payment transaction records (amounts, dates, reference numbers) for as long as 
                necessary to comply with legal obligations, resolve disputes, enforce our agreements, and 
                maintain accurate financial records. This typically means retaining records for at least 7 
                years as required by accounting and tax regulations. Payment information stored by payment 
                processors is subject to their own retention policies.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                4. Information Sharing and Disclosure
              </h3>
              <p className="leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                4.1 Service Providers
              </h4>
              <p className="leading-relaxed mb-3">We may share your information with trusted third-party service providers who assist us in:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Processing payments and donations</li>
                <li>Hosting and maintaining our website</li>
                <li>Sending emails and communications</li>
                <li>Analyzing website usage and performance</li>
                <li>Providing customer support</li>
                <li>Managing events and programs</li>
              </ul>
              <p className="leading-relaxed mb-4">
                These service providers are contractually obligated to protect your information and use it only 
                for the purposes we specify. They are not permitted to use your information for their own 
                marketing purposes.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                4.2 Legal Requirements
              </h4>
              <p className="leading-relaxed mb-4">
                We may disclose your information if required to do so by law or in response to valid requests 
                by public authorities (e.g., court orders, government agencies). We may also disclose information 
                to protect our rights, privacy, safety, or property, or that of our users or others, and to 
                enforce our Terms of Service.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                4.3 Business Transfers
              </h4>
              <p className="leading-relaxed mb-4">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information 
                may be transferred as part of that transaction. We will notify you of any such change in 
                ownership or control of your personal information.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                4.4 With Your Consent
              </h4>
              <p className="leading-relaxed mb-4">
                We may share your information with third parties when you have given us explicit consent to 
                do so. For example, if you choose to participate in a partner program or event, we may share 
                relevant information with the partner organization.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                5. Data Security
              </h3>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures 
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Encryption:</strong> We use SSL/TLS encryption to protect data transmitted between 
                your browser and our servers</li>
                <li><strong>Secure Payment Processing:</strong> All payment transactions are processed through 
                PCI-DSS compliant payment processors</li>
                <li><strong>Access Controls:</strong> We limit access to personal information to authorized 
                personnel who need it to perform their duties</li>
                <li><strong>Regular Security Assessments:</strong> We conduct regular security assessments and 
                updates to identify and address vulnerabilities</li>
                <li><strong>Data Backup:</strong> We maintain secure backups of data to prevent data loss</li>
                <li><strong>Employee Training:</strong> Our staff are trained on data protection and privacy 
                best practices</li>
              </ul>
              <p className="leading-relaxed mb-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot 
                guarantee absolute security. If you have reason to believe that your interaction with us is 
                no longer secure, please immediately notify us at contact@thechildrightsfoundation.org.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                6. Data Retention
              </h3>
              <p className="leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Donation Records:</strong> Retained for at least 7 years for accounting and tax 
                purposes</li>
                <li><strong>Contact Information:</strong> Retained until you request deletion or opt out of 
                communications</li>
                <li><strong>Website Usage Data:</strong> Retained for analytical purposes, typically for up 
                to 2 years</li>
                <li><strong>Legal Requirements:</strong> Some information may be retained longer if required 
                by law or for legal proceedings</li>
              </ul>
              <p className="leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it, 
                unless we are required to retain it for legal or regulatory purposes.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                7. Your Rights and Choices
              </h3>
              <p className="leading-relaxed mb-4">You have the following rights regarding your personal information:</p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.1 Access and Portability
              </h4>
              <p className="leading-relaxed mb-4">
                You have the right to request access to the personal information we hold about you and to 
                receive a copy of that information in a structured, commonly used format.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.2 Correction and Update
              </h4>
              <p className="leading-relaxed mb-4">
                You have the right to request correction of inaccurate or incomplete personal information. 
                You can update some information directly through your account settings, if available, or by 
                contacting us.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.3 Deletion
              </h4>
              <p className="leading-relaxed mb-4">
                You have the right to request deletion of your personal information, subject to certain 
                exceptions (e.g., we may need to retain information for legal compliance or to complete 
                transactions).
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.4 Opt-Out of Communications
              </h4>
              <p className="leading-relaxed mb-4">
                You can opt out of receiving marketing communications from us at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Clicking the "unsubscribe" link in any email we send you</li>
                <li>Contacting us at contact@thechildrightsfoundation.org</li>
                <li>Updating your communication preferences in your account settings, if available</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Note: Even if you opt out of marketing communications, we may still send you transactional 
                messages related to your donations, account, or our services.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.5 Cookie Preferences
              </h4>
              <p className="leading-relaxed mb-4">
                You can control cookies through your browser settings. See our Cookie Policy section below 
                for more information.
              </p>

              <h4 className="text-xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                7.6 Exercising Your Rights
              </h4>
              <p className="leading-relaxed mb-4">
                To exercise any of these rights, please contact us at contact@thechildrightsfoundation.org 
                with your request. We will respond to your request within 30 days, subject to applicable law. 
                We may need to verify your identity before processing your request.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                8. Cookies and Tracking Technologies
              </h3>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and use information about you. 
                For detailed information about how we use cookies, please see our Cookie Policy section below.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                9. International Data Transfers
              </h3>
              <p className="leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country of 
                residence. These countries may have data protection laws that differ from those in your 
                country. When we transfer your information internationally, we take steps to ensure that 
                appropriate safeguards are in place to protect your information in accordance with this 
                Privacy Policy.
              </p>
              <p className="leading-relaxed mb-4">
                Our payment processors (Paystack, Stripe, Monnify) may process and store your payment 
                information in various locations worldwide, subject to their own privacy policies and 
                applicable data protection laws.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                10. Children's Privacy
              </h3>
              <p className="leading-relaxed mb-4">
                Our website is not intended for children under the age of 13 (or the applicable age of 
                majority in your jurisdiction). We do not knowingly collect personal information from 
                children under 13. If you are a parent or guardian and believe your child has provided us 
                with personal information, please contact us immediately. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete that 
                information promptly.
              </p>
              <p className="leading-relaxed">
                If you are between 13 and 18 years old, you may use our website only with the consent and 
                supervision of a parent or guardian.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                11. Links to Other Websites
              </h3>
              <p className="leading-relaxed mb-4">
                Our website may contain links to third-party websites, including payment processors, social 
                media platforms, and partner organizations. This Privacy Policy does not apply to those 
                third-party websites. We encourage you to review the privacy policies of any third-party 
                websites you visit.
              </p>
              <p className="leading-relaxed">
                We are not responsible for the privacy practices or content of third-party websites. Your 
                use of third-party websites is at your own risk.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                12. Changes to This Privacy Policy
              </h3>
              <p className="leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes 
                by:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Posting the updated Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date at the top of this page</li>
                <li>Sending an email notification to registered users, if applicable</li>
                <li>Posting a notice on our website homepage, if changes are significant</li>
              </ul>
              <p className="leading-relaxed">
                Your continued use of our website after any changes to this Privacy Policy constitutes your 
                acceptance of the updated policy. We encourage you to review this Privacy Policy periodically 
                to stay informed about how we protect your information.
              </p>

              <h3 className="text-2xl font-heading font-bold text-secondary-blue mt-8 mb-4">
                13. Contact Us
              </h3>
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="bg-accent-gray p-6 rounded-lg mt-4">
                <p className="mb-2"><strong>Email:</strong> contact@thechildrightsfoundation.org</p>
                <p className="mb-2"><strong>Phone:</strong> +234 707 999 3916</p>
                <p className="mb-2"><strong>Address:</strong> United Nations House, Shendam Road, Lafia, Nasarawa State, Nigeria</p>
                <p className="mt-4 text-sm text-text-charcoal/80">
                  For privacy-related inquiries, please include "Privacy Policy" in your subject line. For 
                  data access or deletion requests, please include your full name and email address used for 
                  your account or donations.
                </p>
              </div>
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

