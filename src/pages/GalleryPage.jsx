import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { siteData } from '../data/site'

const { galleryImages } = siteData
const categories = ['All', ...Array.from(new Set(galleryImages.map(i => i.category)))]

function PageBanner({ title, subtitle }) {
  return (
    <div className="relative bg-charcoal-900 pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 to-primary-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-subheading text-primary-400">{subtitle}</p>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">{title}</h1>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? galleryImages : galleryImages.filter(i => i.category === filter)

  return (
    <>
      <PageBanner title="Photo Gallery" subtitle="Campus Life & Events" />

      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                    <span className="text-xs text-primary-300 font-body font-medium uppercase tracking-wider">{img.category}</span>
                    <span className="text-white font-body text-sm">{img.alt}</span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-2xl max-h-[80vh] object-contain" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-body font-medium">{lightbox.alt}</p>
                  <p className="text-primary-400 text-sm font-body">{lightbox.category}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
