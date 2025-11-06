import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Users, School, MapPin, Calendar } from 'lucide-react'

interface Stat {
  icon: typeof Users
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: Calendar, value: 20, suffix: '+', label: 'Years of Service' },
  { icon: Users, value: 10000, suffix: '+', label: 'Children Reached' },
  { icon: School, value: 50, suffix: '+', label: 'Schools Built' },
  { icon: MapPin, value: 100, suffix: '+', label: 'Communities Supported' },
]

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    motionValue.set(value)
  }, [value, motionValue, spring])

  return <span>{displayValue}{suffix}</span>
}

const ImpactStats = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-blue to-secondary-blue/90 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Making a difference in the lives of children and communities across Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary-gold bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary-gold" size={40} />
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary-gold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats

