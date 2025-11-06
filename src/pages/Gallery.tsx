import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - replace with actual images
  const categories = [
    {
      name: 'Schools',
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        url: `https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&sig=${i}`,
        title: `School Project ${i + 1}`,
      })),
    },
    {
      name: 'Events',
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 7,
        url: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&sig=${i}`,
        title: `Event ${i + 1}`,
      })),
    },
    {
      name: 'Fieldwork',
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 13,
        url: `https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop&sig=${i}`,
        title: `Fieldwork ${i + 1}`,
      })),
    },
    {
      name: 'Aisha Cares',
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 19,
        url: `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&sig=${i}`,
        title: `Aisha Cares Event ${i + 1}`,
      })),
    },
  ]

  const allImages = categories.flatMap(cat => cat.images)

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            A visual journey through our programs, projects, and impact
          </motion.p>
        </div>
      </section>

      {/* Gallery by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-heading font-bold text-secondary-blue mb-8 text-center">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imgIndex) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: imgIndex * 0.05 }}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image.id)}
                    data-aos="fade-up"
                    data-aos-delay={imgIndex * 50}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        {image.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
              >
                <X size={24} />
              </button>
              <img
                src={allImages.find(img => img.id === selectedImage)?.url}
                alt={allImages.find(img => img.id === selectedImage)?.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <p className="font-semibold">
                  {allImages.find(img => img.id === selectedImage)?.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery

