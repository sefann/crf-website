import { motion } from 'framer-motion'
import { FileText, Shield, CreditCard, AlertCircle } from 'lucide-react'

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
            Please read these terms carefully before using our website or making a donation
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
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>

              <div className="prose max-w-none text-text-charcoal space-y-8">
                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4 flex items-center gap-2">
                    <Shield className="text-primary-gold" size={28} />
                    1. Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed mb-4">
                    By accessing and using the Child Rights Foundation (CRF) website located at 
                    thechildrightsfoundation.org, you accept and agree to be bound by the terms and provisions 
                    of this agreement. If you do not agree to abide by these terms, please do not use this 
                    service or make any donations through our platform.
                  </p>
                  <p className="leading-relaxed">
                    These Terms of Service ("Terms") govern your access to and use of our website, including 
                    any content, functionality, and services offered on or through the website. By using our 
                    website, you represent that you are at least 18 years of age or have the consent of a parent 
                    or guardian, and that you have the legal capacity to enter into these Terms.
                  </p>
                </div>

                {/* Use of Website */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    2. Use of Website
                  </h2>
                  <p className="leading-relaxed mb-4">
                    The content of this website is for general information and use only. It is subject to 
                    change without notice. Neither we nor any third parties provide any warranty or guarantee 
                    as to the accuracy, timeliness, performance, completeness, or suitability of the information 
                    and materials found or offered on this website.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Your use of any information or materials on this website is entirely at your own risk, 
                    for which we shall not be liable. It shall be your own responsibility to ensure that any 
                    products, services, or information available through this website meet your specific requirements.
                  </p>
                  <p className="leading-relaxed">
                    You agree to use our website only for lawful purposes and in accordance with these Terms. 
                    You agree not to use the website in any way that violates any applicable federal, state, 
                    local, or international law or regulation.
                  </p>
                </div>

                {/* Donations and Payments */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4 flex items-center gap-2">
                    <CreditCard className="text-primary-gold" size={28} />
                    3. Donations and Payment Terms
                  </h2>
                  
                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.1 General Donation Terms
                  </h3>
                  <p className="leading-relaxed mb-4">
                    All donations made through our website are voluntary contributions to support CRF's programs 
                    and operations in accordance with our mission and objectives. By making a donation, you 
                    acknowledge that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>You have read and understood our donation policy and agree to the terms of your contribution</li>
                    <li>Your donation is made voluntarily and without expectation of any goods or services in return</li>
                    <li>Donations are used to support CRF's charitable activities and programs</li>
                    <li>You are authorized to use the payment method you have selected</li>
                    <li>All information provided during the donation process is accurate and complete</li>
                  </ul>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.2 Payment Methods and Gateways
                  </h3>
                  <p className="leading-relaxed mb-4">
                    We accept donations through multiple secure payment gateways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Paystack:</strong> Available for Nigerian Naira (NGN) payments. Paystack is a licensed 
                    payment service provider in Nigeria and processes payments in accordance with Nigerian financial 
                    regulations.</li>
                    <li><strong>Stripe:</strong> Available for USD, EUR, and GBP payments. Stripe is a PCI-DSS 
                    compliant payment processor that securely handles international payments.</li>
                    <li><strong>Monnify:</strong> Available for Nigerian Naira (NGN) payments. Monnify is a licensed 
                    payment gateway that provides secure payment processing services in Nigeria.</li>
                  </ul>
                  <p className="leading-relaxed mb-4">
                    By selecting a payment gateway, you agree to be bound by the terms and conditions of that 
                    payment processor. Each payment gateway has its own privacy policy and terms of service, 
                    which you should review before completing your donation.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.3 Payment Processing
                  </h3>
                  <p className="leading-relaxed mb-4">
                    All payment transactions are processed securely through our third-party payment processors. 
                    We do not store your complete payment card information on our servers. When you make a donation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Your payment information is encrypted and transmitted securely to our payment processors</li>
                    <li>Payment processors handle all aspects of payment authorization and processing</li>
                    <li>We receive confirmation of successful payments but not your full payment card details</li>
                    <li>You will receive a receipt via email upon successful payment completion</li>
                  </ul>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.4 Currency and Exchange Rates
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Donations can be made in multiple currencies (NGN, USD, EUR, GBP). Currency conversion, 
                    if applicable, is handled by your payment provider or financial institution. Exchange rates 
                    are determined by the payment processor or your bank at the time of transaction and may 
                    include fees. CRF is not responsible for currency conversion rates or fees charged by 
                    payment processors or financial institutions.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.5 Donation Amounts and Minimums
                  </h3>
                  <p className="leading-relaxed mb-4">
                    We accept donations of any amount, subject to minimum transaction amounts set by our payment 
                    processors. Minimum donation amounts may vary by currency and payment method. You may choose 
                    from preset donation amounts or enter a custom amount. All donation amounts are clearly 
                    displayed before you confirm your payment.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.6 Refund Policy
                  </h3>
                  <p className="leading-relaxed mb-4">
                    <strong>All donations are final and non-refundable</strong>, except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Duplicate Transactions:</strong> If you accidentally make a duplicate donation, 
                    contact us within 30 days of the transaction date. We will investigate and may issue a 
                    refund if the duplicate is verified.</li>
                    <li><strong>Unauthorized Transactions:</strong> If you believe your payment card was used 
                    without your authorization, contact us immediately and report the issue to your bank or 
                    card issuer. We will cooperate with any investigation.</li>
                    <li><strong>Processing Errors:</strong> If a technical error results in an incorrect charge, 
                    we will refund the difference or the entire amount, as appropriate.</li>
                    <li><strong>Failed Services:</strong> If CRF is unable to fulfill its stated mission due to 
                    circumstances beyond our control, refunds may be considered on a case-by-case basis.</li>
                  </ul>
                  <p className="leading-relaxed mb-4">
                    To request a refund, please contact us at contact@thechildrightsfoundation.org with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Your full name and email address used for the donation</li>
                    <li>Transaction reference number or receipt</li>
                    <li>Date and amount of the donation</li>
                    <li>Reason for refund request</li>
                  </ul>
                  <p className="leading-relaxed">
                    Refund requests will be reviewed within 14 business days. If approved, refunds will be 
                    processed to the original payment method within 5-10 business days, depending on your 
                    financial institution.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.7 Tax Deductibility and Receipts
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Donations to CRF may be tax-deductible depending on your jurisdiction and tax laws. You 
                    will receive an electronic receipt via email immediately after your donation is processed. 
                    This receipt serves as proof of your charitable contribution and may be used for tax purposes 
                    where applicable.
                  </p>
                  <p className="leading-relaxed">
                    CRF is a registered non-profit organization. For specific tax advice regarding your donation, 
                    please consult with a qualified tax professional in your jurisdiction.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.8 Recurring Donations
                  </h3>
                  <p className="leading-relaxed mb-4">
                    If you choose to set up a recurring donation, you authorize us to charge your payment 
                    method on a recurring basis according to the schedule you select. You may cancel or modify 
                    your recurring donation at any time by contacting us or through your account settings, 
                    if available. Cancellation requests must be received at least 3 business days before the 
                    next scheduled donation to prevent that donation from being processed.
                  </p>

                  <h3 className="text-2xl font-heading font-semibold text-secondary-blue mt-6 mb-3">
                    3.9 Payment Security
                  </h3>
                  <p className="leading-relaxed mb-4">
                    We take payment security seriously and use industry-standard encryption and security measures 
                    to protect your payment information. However, no method of transmission over the internet 
                    or electronic storage is 100% secure. While we strive to use commercially acceptable means 
                    to protect your information, we cannot guarantee absolute security.
                  </p>
                  <p className="leading-relaxed">
                    If you suspect any unauthorized activity on your account or believe your payment information 
                    has been compromised, contact us immediately at contact@thechildrightsfoundation.org.
                  </p>
                </div>

                {/* User Responsibilities */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    4. User Responsibilities and Account Security
                  </h2>
                  <p className="leading-relaxed mb-4">
                    You are responsible for maintaining the confidentiality of any account information, 
                    passwords, or other credentials you use to access our website or services. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Provide accurate, current, and complete information when making donations or using our services</li>
                    <li>Maintain and promptly update your information to keep it accurate, current, and complete</li>
                    <li>Maintain the security of your account credentials and notify us immediately of any 
                    unauthorized access or use</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Ensure that any payment information you provide is valid and that you are authorized 
                    to use the payment method</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    5. Intellectual Property Rights
                  </h2>
                  <p className="leading-relaxed mb-4">
                    This website contains material which is owned by or licensed to CRF. This material includes, 
                    but is not limited to, the design, layout, look, appearance, graphics, logos, text, images, 
                    audio clips, video clips, and software. Reproduction is prohibited other than in accordance 
                    with the copyright notice, which forms part of these terms and conditions.
                  </p>
                  <p className="leading-relaxed mb-4">
                    All trademarks reproduced in this website, which are not the property of, or licensed to 
                    the operator, are acknowledged on the website. Unauthorized use of this website may give 
                    rise to a claim for damages and/or be a criminal offense.
                  </p>
                  <p className="leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                    publicly perform, republish, download, store, or transmit any of the material on our website, 
                    except as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your 
                    accessing and viewing those materials</li>
                    <li>You may store files that are automatically cached by your web browser for display 
                    enhancement purposes</li>
                    <li>You may print or download one copy of a reasonable number of pages of the website for 
                    your own personal, non-commercial use</li>
                  </ul>
                </div>

                {/* User Conduct */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    6. User Conduct and Prohibited Activities
                  </h2>
                  <p className="leading-relaxed mb-4">
                    You agree to use our website only for lawful purposes and in a way that does not infringe 
                    the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. 
                    Prohibited behavior includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Harassing or causing distress or inconvenience to any person</li>
                    <li>Transmitting obscene or offensive content</li>
                    <li>Disrupting the normal flow of dialogue within our website</li>
                    <li>Attempting to gain unauthorized access to any portion of the website or any systems 
                    or networks connected to the website</li>
                    <li>Using any device, software, or routine to interfere or attempt to interfere with the 
                    proper working of the website</li>
                    <li>Introducing any viruses, trojans, worms, logic bombs, or other material that is 
                    malicious or technologically harmful</li>
                    <li>Using the website to make fraudulent donations or engage in money laundering or other 
                    illegal activities</li>
                    <li>Impersonating any person or entity or misrepresenting your affiliation with any person 
                    or entity</li>
                  </ul>
                  <p className="leading-relaxed">
                    Violation of these terms may result in termination of your access to the website and 
                    may subject you to legal action.
                  </p>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    7. Third-Party Services and Links
                  </h2>
                  <p className="leading-relaxed mb-4">
                    Our website may contain links to third-party websites, services, or resources, including 
                    payment processors. We are not responsible for the availability, accuracy, or content of 
                    such external sites or resources. Links to third-party sites do not constitute an endorsement 
                    by CRF of those sites or their content.
                  </p>
                  <p className="leading-relaxed mb-4">
                    When you use third-party payment processors (Paystack, Stripe, Monnify), your relationship 
                    with those processors is governed by their respective terms of service and privacy policies. 
                    CRF is not responsible for the actions, policies, or practices of third-party payment 
                    processors.
                  </p>
                  <p className="leading-relaxed">
                    You acknowledge and agree that CRF shall not be responsible or liable, directly or indirectly, 
                    for any damage or loss caused or alleged to be caused by or in connection with the use of or 
                    reliance on any such content, goods, or services available on or through any such third-party 
                    websites or services.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4 flex items-center gap-2">
                    <AlertCircle className="text-primary-gold" size={28} />
                    8. Limitation of Liability and Disclaimers
                  </h2>
                  <p className="leading-relaxed mb-4">
                    <strong>Disclaimer of Warranties:</strong> The website and its content are provided on an 
                    "as is" and "as available" basis. CRF makes no representations or warranties of any kind, 
                    express or implied, as to the operation of the website or the information, content, materials, 
                    or products included on the website.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Limitation of Liability:</strong> To the fullest extent permitted by applicable law, 
                    CRF shall not be liable for any indirect, incidental, special, consequential, or punitive 
                    damages resulting from your use of or inability to use the website. This includes, but is 
                    not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, 
                    even if CRF has been advised of the possibility of such damages.
                  </p>
                  <p className="leading-relaxed mb-4">
                    In no event shall CRF's total liability to you for all damages, losses, or causes of action 
                    exceed the amount you paid to us, if any, for accessing this website or making donations 
                    through the website in the twelve (12) months preceding the claim.
                  </p>
                  <p className="leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or the limitation or 
                    exclusion of liability for incidental or consequential damages. Accordingly, some of the 
                    above limitations may not apply to you.
                  </p>
                </div>

                {/* Indemnification */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    9. Indemnification
                  </h2>
                  <p className="leading-relaxed">
                    You agree to defend, indemnify, and hold harmless CRF, its officers, directors, employees, 
                    agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, 
                    including without limitation, reasonable legal and accounting fees, arising out of or in any 
                    way connected with your access to or use of the website, your violation of these Terms, or 
                    your violation of any rights of another party.
                  </p>
                </div>

                {/* Dispute Resolution */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    10. Dispute Resolution
                  </h2>
                  <p className="leading-relaxed mb-4">
                    If you have any concerns or disputes about these Terms or our services, please contact us 
                    first at contact@thechildrightsfoundation.org. We will attempt to resolve any disputes 
                    through good faith negotiations.
                  </p>
                  <p className="leading-relaxed">
                    If we are unable to resolve a dispute through negotiation, any disputes arising out of or 
                    relating to these Terms or the website shall be subject to the exclusive jurisdiction of 
                    the courts of Nigeria, and you consent to the personal jurisdiction of such courts.
                  </p>
                </div>

                {/* Modifications */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    11. Modifications to Terms
                  </h2>
                  <p className="leading-relaxed mb-4">
                    CRF reserves the right to modify these Terms of Service at any time. We will notify users 
                    of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Posting the new Terms on this page</li>
                    <li>Updating the "Last Updated" date at the top of this page</li>
                    <li>Sending an email notification to registered users, if applicable</li>
                  </ul>
                  <p className="leading-relaxed">
                    Your continued use of the website after any such changes constitutes your acceptance of the 
                    new Terms. If you do not agree to the modified Terms, you must stop using the website.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    12. Governing Law and Jurisdiction
                  </h2>
                  <p className="leading-relaxed mb-4">
                    These Terms and conditions are governed by and construed in accordance with the laws of 
                    the Federal Republic of Nigeria, without regard to its conflict of law provisions.
                  </p>
                  <p className="leading-relaxed">
                    Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the 
                    courts of Nigeria. You agree to submit to the personal jurisdiction of such courts and 
                    waive any objection to venue in such courts.
                  </p>
                </div>

                {/* Severability */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    13. Severability
                  </h2>
                  <p className="leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision 
                    will be limited or eliminated to the minimum extent necessary so that these Terms will 
                    otherwise remain in full force and effect and enforceable.
                  </p>
                </div>

                {/* Entire Agreement */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    14. Entire Agreement
                  </h2>
                  <p className="leading-relaxed">
                    These Terms constitute the entire agreement between you and CRF regarding the use of the 
                    website and supersede all prior agreements and understandings, whether written or oral, 
                    relating to the subject matter hereof.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                    15. Contact Information
                  </h2>
                  <p className="leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-accent-gray p-6 rounded-lg mt-4">
                    <p className="mb-2"><strong>Email:</strong> contact@thechildrightsfoundation.org</p>
                    <p className="mb-2"><strong>Phone:</strong> +234 707 999 3916</p>
                    <p className="mb-2"><strong>Address:</strong> United Nations House, Shendam Road, Lafia, Nasarawa State, Nigeria</p>
                    <p className="mt-4 text-sm text-text-charcoal/80">
                      For donation-related inquiries or payment issues, please include your transaction reference 
                      number or receipt in your communication.
                    </p>
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

