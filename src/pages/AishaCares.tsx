import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Heart, GraduationCap, Award, Quote, ArrowRight, BookOpen, Sparkles, Target } from 'lucide-react'

const AishaCares = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Big Sister, Little Sister',
      description: 'A mentorship program connecting experienced women with young women, creating a supportive network for growth and development.',
    },
    {
      icon: GraduationCap,
      title: 'University Tours',
      description: 'Engaging with university students to provide mentorship, career guidance, and support for their academic and personal development.',
      link: '/university-tours',
    },
    {
      icon: Heart,
      title: 'Annual Women\'s Conference',
      description: 'A gathering of women from across Northern Nigeria to share experiences, learn, and build networks for empowerment.',
    },
    {
      icon: Award,
      title: 'Leadership Training',
      description: 'Providing skills and knowledge to help young women become leaders in their communities and professions.',
    },
  ]

  const testimonials = [
    {
      quote: 'The Aisha Cares Initiative changed my life. Through the mentorship program, I gained confidence and clarity about my future.',
      author: 'Amina M.',
      role: 'University Student',
    },
    {
      quote: 'Being a Big Sister has been incredibly rewarding. I love being able to support and guide young women on their journey.',
      author: 'Fatima K.',
      role: 'Mentor',
    },
    {
      quote: 'The annual conference was inspiring. I met so many amazing women and learned valuable skills that I now use in my career.',
      author: 'Zainab A.',
      role: 'Young Professional',
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
            Aisha Cares Initiative
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Empowering Young Women Across Northern Nigeria
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
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
              <h2 className="text-4xl font-heading font-bold text-secondary-blue mb-6">
                About the Initiative
              </h2>
              <p className="text-lg text-text-charcoal leading-relaxed mb-6">
                Founded by the Executive Director, Aisha Abdullahi Adamu, the Aisha Cares Initiative 
                is a special program dedicated to empowering young women across Northern Nigeria. 
                The initiative is driven by the "Big Sister, Little Sister" concept, creating safe 
                spaces for women to share stories, gain skills, and build supportive networks.
              </p>
              <p className="text-lg text-text-charcoal leading-relaxed">
                Through mentorship, education, and advocacy, we work to break down barriers and 
                create opportunities for young women to thrive. Our programs focus on leadership 
                development, career guidance, reproductive health education, and creating platforms 
                for women's voices to be heard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
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
              Program Highlights
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              const content = (
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
                  <div className="bg-primary-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-primary-gold" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary-blue mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-text-charcoal leading-relaxed mb-4">
                    {highlight.description}
                  </p>
                  {highlight.link && (
                    <Link
                      to={highlight.link}
                      className="text-primary-gold font-semibold hover:underline inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </motion.div>
              )
              return highlight.link ? (
                <Link key={index} to={highlight.link} className="block">
                  {content}
                </Link>
              ) : (
                content
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-accent-gray p-8 rounded-lg"
              data-aos="fade-right"
            >
              <h3 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-text-charcoal leading-relaxed">
                To empower young women through mentorship, education, and support, creating a 
                generation of confident, capable leaders who will drive positive change in their 
                communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary-gold bg-opacity-10 p-8 rounded-lg"
              data-aos="fade-left"
            >
              <h3 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-text-charcoal leading-relaxed">
                A Northern Nigeria where every young woman has access to mentorship, education, 
                and opportunities to reach her full potential, contributing to a more equitable 
                and prosperous society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Participants Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Quote className="text-primary-gold mb-4" size={32} />
                <p className="text-text-charcoal italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-secondary-blue">{testimonial.author}</p>
                  <p className="text-primary-gold text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bridge Section */}
      <section className="section-padding bg-secondary-blue text-white">
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
                About The Bridge
              </h2>
              <p className="text-xl text-white/90 italic mb-2">
                "Celebrating Our Passage on the Bridge."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
              data-aos="fade-up"
            >
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                The Bridge by Aisha is more than an event – it is a movement of women, stories, mentorship, and legacy. 
                Founded by Aisha Abdullahi Adamu, The Bridge creates an intimate and elegant space where women come together 
                to share real stories of growth, resilience, motherhood, career, identity, and legacy.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                From its first edition in 2024, The Bridge has evolved into a luxury society brunch experience, blending 
                soulful storytelling, mentorship, and intentional community-building. Every detail—from the curated guest 
                list to the rituals like the Bridge Toast and Memory Bridge Wall—is designed to celebrate the journeys of 
                women as they cross from one season of life to another.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 p-6 rounded-lg"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary-gold">Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  To build an intergenerational sisterhood where women are empowered to honor their journeys, share their 
                  stories, receive mentorship, and shape new legacies of strength, elegance, and leadership.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 p-6 rounded-lg"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary-gold">Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  Through storytelling, mentorship, and carefully curated experiences, The Bridge inspires women to embrace 
                  transitions with courage, clarity, and confidence, while building a community that transcends events and 
                  lives on as a legacy network.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
              data-aos="fade-up"
            >
              <h3 className="text-3xl font-heading font-bold mb-6 text-center">Core Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: 'Storytelling',
                    description: 'Real, raw, and powerful narratives from women across generations.',
                  },
                  {
                    icon: Users,
                    title: 'Mentorship',
                    description: 'Formal and informal mentorship programs connecting emerging leaders with seasoned icons.',
                  },
                  {
                    icon: Heart,
                    title: 'Intimacy',
                    description: 'A private, elegant, and intentional setting with a carefully selected guest list.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Tradition',
                    description: 'Rituals like the Bridge Toast, keepsake gifts, and the evolving annual theme.',
                  },
                  {
                    icon: Users,
                    title: 'Community',
                    description: 'Formation of the Bridge Sisters alumni network, designed to sustain bonds beyond the brunch.',
                  },
                  {
                    icon: Target,
                    title: 'Legacy',
                    description: 'Expansion into mentorship programs, retreats, scholarships, and archival projects.',
                  },
                ].map((element, index) => {
                  const Icon = element.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/10 p-5 rounded-lg"
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <Icon className="text-primary-gold mb-3" size={32} />
                      <h4 className="text-xl font-heading font-bold mb-2">{element.title}</h4>
                      <p className="text-white/90 text-sm">{element.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-white/10 p-8 rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary-gold">Impact</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                The Bridge has already inspired hundreds of women across Nigeria, with ripple effects reaching global 
                communities. By curating spaces of authenticity, excellence, and mentorship, The Bridge positions itself 
                as Africa's pioneering luxury storytelling brunch with a vision for long-term legacy and global chapters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-gold text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Join the Aisha Cares Initiative
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a young woman looking for mentorship or an experienced woman ready to 
              become a Big Sister, we welcome you to join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-involved" className="btn-primary bg-white text-secondary-blue hover:bg-accent-gray inline-block">
                Get Involved
              </Link>
              <a href="mailto:aishacares@thechildrightsfoundation.org" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue inline-block">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AishaCares

