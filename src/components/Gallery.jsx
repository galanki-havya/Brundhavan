import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from './Section'
import { siteData } from '../data/site'

const preview = siteData.galleryImages.slice(0, 6)

export default function Gallery() {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-subheading">Campus Life</p>
            <h2 className="section-heading mb-0">Life at Brundavan</h2>
          </div>
          <Link to="/gallery" className="btn-outline self-start md:self-auto">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? 'auto' : '4/3', minHeight: i === 0 ? '400px' : '160px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-body text-sm font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
