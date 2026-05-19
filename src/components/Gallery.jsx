import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Section from './Section'
import { siteData } from '../data/site'

const preview = siteData.galleryImages.slice(0, 6)

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex]   = useState(0)

  const openLightbox  = (i) => { setSelectedImage(preview[i]); setCurrentIndex(i) }
  const closeLightbox = ()  => setSelectedImage(null)

  const nextImage = () => {
    const next = (currentIndex + 1) % preview.length
    setSelectedImage(preview[next]); setCurrentIndex(next)
  }
  const prevImage = () => {
    const prev = currentIndex === 0 ? preview.length - 1 : currentIndex - 1
    setSelectedImage(preview[prev]); setCurrentIndex(prev)
  }

  return (
    <Section style={{ background: '#fdf6f9', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      {/* Decorative background circles — pink themed */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 40,  left: 40,  width: 80, height: 80, border: '2px solid #ec4899', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 160, right: 80, width: 64, height: 64, border: '2px solid #f97316', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: 80, left: '33%', width: 48, height: 48, border: '2px solid #ec4899', borderRadius: '50%' }} />
      </div>

      {/* Pink ambient glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 300, height: 300,
        background: 'rgba(236,72,153,0.07)',
        borderRadius: '50%',
        transform: 'translate(80px, -80px)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginBottom: 48,
          }}
          className="gallery-header"
        >
          <style>{`
            @media (min-width: 768px) {
              .gallery-header {
                flex-direction: row !important;
                align-items: flex-end !important;
                justify-content: space-between !important;
              }
            }
          `}</style>

          <div>
            <span style={{
              display: 'inline-block',
              color: '#ec4899',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              Campus Life
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700,
              color: '#1a1a2e',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Life at Brindavan
            </h2>
          </div>

          <Link
            to="/gallery"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1.5px solid rgba(236,72,153,0.4)',
              color: '#ec4899',
              background: 'transparent',
              padding: '10px 22px',
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
              alignSelf: 'flex-start',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff0f7'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(236,72,153,0.15)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
          >
            View Full Gallery
            <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Masonry grid */}
        <div style={{ columns: 'auto 2', gap: 16 }} className="gallery-cols">
          <style>{`
            @media (min-width: 768px) { .gallery-cols { columns: 3 !important; } }
          `}</style>

          {preview.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 24,
                marginBottom: 16,
                cursor: 'pointer',
                breakInside: 'avoid',
                border: '1px solid rgba(236,72,153,0.12)',
                background: '#fff',
                boxShadow: '0 4px 20px rgba(236,72,153,0.07)',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onClick={() => openLightbox(i)}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(236,72,153,0.18)'; e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(236,72,153,0.07)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                loading="lazy"
              />

              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(190,24,93,0.75) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-end', padding: 16,
              }}
                className="gallery-overlay"
              >
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'rgba(236,72,153,0.7)',
                  backdropFilter: 'blur(4px)',
                  padding: '4px 12px',
                  borderRadius: 50,
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                }}>
                  {img.category}
                </span>
              </div>
              <style>{`.gallery-overlay { opacity: 0 !important; } *:hover > .gallery-overlay { opacity: 1 !important; }`}</style>

              {/* Search icon overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
                className="gallery-search"
              >
                <div style={{
                  width: 52, height: 52,
                  background: 'rgba(236,72,153,0.85)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(236,72,153,0.4)',
                }}>
                  <svg style={{ width: 22, height: 22, color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <style>{`*:hover > .gallery-search { opacity: 1 !important; }`}</style>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              background: 'rgba(26,10,20,0.95)',
              backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 16,
            }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.85,    opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'relative', maxWidth: '56rem', maxHeight: '100%' }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  width: '100%', height: 'auto',
                  maxHeight: '80vh', objectFit: 'contain',
                  borderRadius: 24,
                  boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(236,72,153,0.2)',
                }}
              />

              {/* Close */}
              <button
                onClick={closeLightbox}
                style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 40, height: 40,
                  background: 'rgba(236,72,153,0.85)',
                  border: 'none', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#be185d'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,0.85)'}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                  width: 40, height: 40,
                  background: 'rgba(236,72,153,0.85)',
                  border: 'none', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#be185d'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,0.85)'}
              >
                <ChevronLeft style={{ width: 18, height: 18 }} />
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  width: 40, height: 40,
                  background: 'rgba(236,72,153,0.85)',
                  border: 'none', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#be185d'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,0.85)'}
              >
                <ChevronRight style={{ width: 18, height: 18 }} />
              </button>

              {/* Caption */}
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, textAlign: 'center' }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'rgba(236,72,153,0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 18px',
                  borderRadius: 50,
                }}>
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