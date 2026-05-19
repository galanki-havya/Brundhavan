import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Microscope, Music, Gamepad2 } from 'lucide-react'
import Section from './Section'
import { siteData } from '../data/site'

const { facilities } = siteData

const icons = [BookOpen, Users, Trophy, Microscope, Music, Gamepad2]

// Pink-family card gradients — consistent with site's pink theme
const cardGradients = [
  { from: '#fff0f7', to: '#ffe4f2' },  // deep pink
  { from: '#FFFFFF', to: '#FFD8CC' },  // soft pink
  { from: '#fff4ed', to: '#ffe8d6' },  // peach/orange
  { from: '#fff0f7', to: '#ffd6eb' },  // hot pink
  { from: '#FFFFFF', to: '#FFD8CC' },  // soft pink
  { from: '#fff4ed', to: '#ffe0cc' },  // warm peach
]

export default function Facilities() {
  return (
    <Section style={{
      background: 'linear-gradient(135deg, #FFFFFF 0%, #fff 50%, #FFFFFF 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 384, height: 384,
        background: 'rgba(255,99,71,0.07)',
        borderRadius: '50%',
        transform: 'translate(128px, -128px)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: 320, height: 320,
        background: 'rgba(249,115,22,0.05)',
        borderRadius: '50%',
        transform: 'translate(-96px, 96px)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .fac-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.6);
          padding: 32px;
          transition: box-shadow 0.4s, transform 0.4s;
          box-shadow: 0 10px 40px rgba(255,99,71,0.07);
        }
        .fac-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 52px rgba(255,99,71,0.14);
        }
        .fac-card-icon {
          position: relative;
          z-index: 1;
          width: 64px; height: 64px;
          border-radius: 18px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(255,99,71,0.15);
          margin-bottom: 24px;
          transition: transform 0.3s;
        }
        .fac-card:hover .fac-card-icon { transform: scale(1.1); }
      `}</style>

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{
            display: 'inline-block',
            color: '#FF6347',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Our Campus
          </span>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: '#1a1a2e',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            World-Class Facilities
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#6b5c6e',
            fontSize: '1rem',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Every space on our campus is thoughtfully designed to inspire learning, creativity, and healthy growth.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {facilities.map((f, i) => {
            const Icon = icons[i] || BookOpen
            const grad = cardGradients[i % cardGradients.length]

            return (
              <motion.div
                key={f.title}
                className="fac-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: `linear-gradient(135deg, ${grad.from} 0%, ${grad.to} 100%)`,
                }}
              >
                {/* Shine orb */}
                <div style={{
                  position: 'absolute',
                  top: -40, right: -40,
                  width: 128, height: 128,
                  background: 'rgba(255,255,255,0.35)',
                  borderRadius: '50%',
                  filter: 'blur(24px)',
                  pointerEvents: 'none',
                }} />

                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: 'linear-gradient(90deg, #FF6347, #f97316)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
                  className="fac-top-line"
                />
                <style>{`.fac-card:hover .fac-top-line { opacity: 1 !important; }`}</style>

                <div className="fac-card-icon">
                  <Icon style={{ width: 28, height: 28, color: '#FF6347' }} />
                </div>

                <h3 style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: '#1a1a2e',
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}>
                  {f.title}
                </h3>

                <p style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#6b5c6e',
                  fontSize: 15,
                  lineHeight: 1.7,
                }}>
                  {f.desc}
                </p>

                {/* Bottom shine */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  pointerEvents: 'none',
                }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}