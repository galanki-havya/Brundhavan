import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Testimonials() {

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    )
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <Section className="relative overflow-hidden" style={{ background: '#F9FAFB', padding: '80px 0' }}>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          {/* Eyebrow */}
          <span style={{
            display: 'inline-block',
            color: '#ec733a',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Google Reviews
          </span>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: '#1a1a2e',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Trusted by Parents
          </h2>

          {/* Subtext */}
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
            borderRadius: 24,
            border: '1px solid #eaeaea',
            boxShadow: '0 10px 40px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.02)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top Brand Accent Bar */}
          <div style={{
            height: 3,
            background: 'linear-gradient(90deg, #ec733a 0%, #c9612c 50%, #ec733a 100%)',
          }} />

          <div style={{ padding: '24px', height: 480 }}>
            <div
              className="elfsight-app-75563d1d-8bee-49ea-a810-45ec7f513f02 w-full h-full"
              data-elfsight-app-lazy
            />
          </div>
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
            gap: 12,
            marginTop: 32,
          }}
        >
          {['Verified Reviews', '⭐ Highly Rated', "Parents' Choice", "Palamaner's Trusted School"].map((badge) => (
            <span key={badge} style={{
              display: 'inline-block',
              padding: '8px 18px',
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