import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-blue via-secondary-blue to-primary-gold text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      {/* Background image placeholder - replace with actual image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920')] bg-cover bg-center z-0"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Developing the Child Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 text-primary-gold font-semibold"
          >
            for a Better Tomorrow
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/donate" className="btn-primary inline-flex items-center space-x-2">
              <span>Donate Now</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/get-involved" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue inline-flex items-center space-x-2">
              <span>Get Involved</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

