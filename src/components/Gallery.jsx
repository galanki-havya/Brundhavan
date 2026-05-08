import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Section from './Section'
import { siteData } from '../data/site'

const preview = siteData.galleryImages.slice(0, 6)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setSelectedImage(preview[index])
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const next = (currentIndex + 1) % preview.length
    setSelectedImage(preview[next])
    setCurrentIndex(next)
  }

  const prevImage = () => {
    const prev = currentIndex === 0 ? preview.length - 1 : currentIndex - 1
    setSelectedImage(preview[prev])
    setCurrentIndex(prev)
  }

  return (
    <Section className="bg-[#FFFAF5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#D9B38C] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-[#D9B38C] rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border-2 border-[#D9B38C] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="section-subheading">Campus Life</p>
            <h2 className="section-heading mb-0">Life at Brundavan</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 border border-[#C89B3C] text-[#5C3A21] hover:bg-[#FFF3E6] px-6 py-3 rounded-full font-medium transition-all duration-300 self-start md:self-auto group">
            View Full Gallery
            <motion.svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {preview.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E8D8C3] bg-white"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-white font-body text-sm font-medium bg-[#8B5E3C]/80 backdrop-blur-sm px-4 py-1 rounded-full"
                >
                  {img.category}
                </motion.span>
              </div>
              {/* Overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-[#8B5E3C]/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2B1B12]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-[#C89B3C]/20"
              />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-[#8B5E3C]/80 hover:bg-[#5C3A21] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#8B5E3C]/80 hover:bg-[#5C3A21] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#8B5E3C]/80 hover:bg-[#5C3A21] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white font-body text-sm bg-[#8B5E3C]/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
