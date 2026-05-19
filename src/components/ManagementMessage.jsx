import { motion } from 'framer-motion'
import { siteData } from '../data/site'
import { Quote } from 'lucide-react'

export default function ManagementMessage() {
  const { Correspondent } = siteData
  const fallbackPhoto = '/images/gallery/founder.png'

  return (
    <section style={{
      background: '#fff',
      padding: '80px 0',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '33%', height: '100%',
        background: '#fff',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '25%', left: '-80px',
        width: 256, height: 256,
        background: 'rgba(255,99,71,0.07)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 200, height: 200,
        background: 'rgba(249,115,22,0.05)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: 48,
          alignItems: 'center',
        }}
          className="mgmt-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .mgmt-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            {/* Decorative offset frame */}
            <div style={{
              position: 'absolute',
              inset: -16,
              border: '1.5px solid rgba(255,99,71,0.2)',
              borderRadius: 20,
              transform: 'translate(8px, 8px)',
              zIndex: 0,
            }} />

            {/* Pink accent blob behind image */}
            <div style={{
              position: 'absolute',
              top: 20, left: 20,
              width: '100%', height: '100%',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(255,99,71,0.15), rgba(249,115,22,0.1))',
              zIndex: 0,
            }} />

            <div style={{
              position: 'relative',
              zIndex: 1,
              aspectRatio: '4/5',
              overflow: 'hidden',
              borderRadius: 20,
              boxShadow: '0 24px 60px rgba(255,99,71,0.14)',
              background: '#FFD8CC',
            }}>
              <img
                src={Correspondent.image || fallbackPhoto}
                alt={Correspondent.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.7s ease',
                  filter: 'grayscale(20%)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'grayscale(0%)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.filter = 'grayscale(20%)' }}
              />
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: 24,
              right: -24,
              zIndex: 2,
              background: 'linear-gradient(135deg, #FF6347, #C4391E)',
              color: '#fff',
              padding: '16px 24px',
              borderRadius: 16,
              boxShadow: '0 8px 28px rgba(255,99,71,0.35)',
              display: 'none',
            }}
              className="mgmt-badge"
            >
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#fde8f4' }}>Est. 2025</p>
              <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>Visionary Leadership</p>
            </div>
            <style>{`
              @media (min-width: 768px) { .mgmt-badge { display: block !important; } }
            `}</style>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ paddingLeft: 0 }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ height: 1, width: 48, background: 'linear-gradient(90deg, #FF6347, #f97316)' }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FF6347',
              }}>
                Correspondent's Message
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: 28,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Message from Our<br />
              <span style={{
                background: 'linear-gradient(135deg, #FF6347, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Correspondent
              </span>
            </h2>

            {/* Quote block */}
            <div style={{ position: 'relative', marginBottom: 40 }}>
              <Quote style={{
                position: 'absolute', top: -12, left: -28,
                width: 48, height: 48,
                color: '#FFD8CC',
                opacity: 0.8,
              }} />
              <div style={{
                borderLeft: '3px solid',
                borderImage: 'linear-gradient(180deg, #FF6347, #f97316) 1',
                paddingLeft: 24,
              }}>
                <p style={{
                  color: '#4b5563',
                  lineHeight: 1.85,
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  "{Correspondent.message}"
                </p>
              </div>
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                paddingTop: 28,
                borderTop: '1px solid #FFD8CC',
              }}
            >
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                color: '#1a1a2e',
              }}>
                {Correspondent.name}
              </p>
              <p style={{
                color: '#FF6347',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: 12,
                marginTop: 4,
              }}>
                {Correspondent.title}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                {['Academic Excellence', 'Innovation', 'Holistic Growth'].map((tag) => (
                  <span key={tag} style={{
                    padding: '7px 16px',
                    background: '#fff',
                    border: '1px solid #FFD8CC',
                    borderRadius: 50,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#FF6347',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 10px rgba(255,99,71,0.08)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}