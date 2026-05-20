import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Testimonials() {

  useEffect(() => {
    // Remove any existing script so it re-runs fresh on every mount
    const existing = document.querySelector(
      'script[src="https://featurable.com/assets/v2/masonry_default.min.js"]'
    )
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.src = 'https://featurable.com/assets/v2/masonry_default.min.js'
    script.defer = true
    script.charset = 'UTF-8'

    // Once script is loaded, dispatch a custom event some widgets listen for
    script.onload = () => {
      window.dispatchEvent(new Event('featurable:init'))
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount so next mount gets a fresh load
      const s = document.querySelector(
        'script[src="https://featurable.com/assets/v2/masonry_default.min.js"]'
      )
      if (s) s.remove()
    }
  }, [])

  return (
    <Section className="relative overflow-hidden" style={{ background: '#F9FAFB', padding: '56px 0' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 32 }}
        >
          <span style={{
            display: 'inline-block',
            color: '#ec733a',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}>
            Google Reviews
          </span>

          <h2 style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: '#1a1a2e',
            marginBottom: 10,
            lineHeight: 1.2,
          }}>
            Trusted by Parents
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#040404',
            fontSize: '1.05rem',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Hear what families across Palamaner say about their experience at Brindavan School.
          </p>
        </motion.div>

        {/* Widget Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            background: '#ffffff',
            borderRadius: 20,
            border: '1px solid #eaeaea',
            boxShadow: '0 10px 40px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.02)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Brand Accent Bar */}
          <div style={{
            height: 3,
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(90deg, #ec733a 0%, #c9612c 50%, #ec733a 100%)',
          }} />

          {/* Masonry Widget */}
          <div style={{
            padding: '12px 12px 8px',
            maxHeight: 480,
            overflowY: 'auto',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: '#e0e0e0 transparent',
          }}>
            <div
              id="featurable-bb8cb7fb-4cb9-476c-8835-3abac6531aa7"
              data-featurable-async
              style={{ width: '100%' }}
            />
          </div>

          {/* Fade-out bottom hint */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)',
            pointerEvents: 'none',
            borderRadius: '0 0 20px 20px',
          }} />
        </motion.div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 24,
          }}
        >
          {['Verified Reviews', '⭐ Highly Rated', "Parents' Choice", "Palamaner's Trusted School"].map((badge) => (
            <span key={badge} style={{
              display: 'inline-block',
              padding: '7px 16px',
              background: '#ffffff',
              border: '1px solid #eaeaea',
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: '#1a1a2e',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            }}>
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </Section>
  )
}