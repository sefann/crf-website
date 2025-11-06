import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'CRF Launches New School Construction Project in Nasarawa',
      date: '2024-01-15',
      category: 'Projects',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      excerpt: 'Child Rights Foundation has announced the launch of a new school construction project in Nasarawa State, aiming to provide quality education to over 500 children in the region.',
    },
    {
      id: 2,
      title: 'Annual Women\'s Conference 2024: Empowering the Next Generation',
      date: '2024-02-20',
      category: 'Aisha Cares',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      excerpt: 'The Aisha Cares Initiative hosted its annual women\'s conference, bringing together over 200 women from across Northern Nigeria for a day of empowerment and networking.',
    },
    {
      id: 3,
      title: 'Partnership with UNICEF Strengthens Child Rights Advocacy',
      date: '2024-03-10',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      excerpt: 'CRF has entered into a strategic partnership with UNICEF to strengthen child rights advocacy and education programs across Africa.',
    },
    {
      id: 4,
      title: 'School Feeding Program Reaches 10,000 Children Milestone',
      date: '2024-04-05',
      category: 'Impact',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      excerpt: 'Our school feeding program has reached a significant milestone, now providing nutritious meals to over 10,000 children daily across multiple schools.',
    },
    {
      id: 5,
      title: 'University Tour 2024: Inspiring Future Leaders',
      date: '2024-05-12',
      category: 'Aisha Cares',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      excerpt: 'The Aisha Cares Initiative completed its annual university tour, visiting 5 universities and engaging with over 1,000 students on leadership and empowerment.',
    },
    {
      id: 6,
      title: 'New Reproductive Health Program Launched',
      date: '2024-06-18',
      category: 'Programs',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      excerpt: 'CRF has launched a new comprehensive reproductive health program aimed at providing education and services to adolescents and young women.',
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
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
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Stay updated with our latest news, campaigns, and event recaps
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-text-charcoal text-sm mb-3">
                    <Calendar size={16} className="text-primary-gold" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-secondary-blue mb-3">
                    {item.title}
                  </h2>
                  <p className="text-text-charcoal leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-primary-gold font-semibold hover:underline inline-flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-accent-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-4">
              Stay Updated
            </h2>
            <p className="text-text-charcoal mb-6">
              Subscribe to our newsletter to receive the latest news and updates about our programs and impact.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default News

