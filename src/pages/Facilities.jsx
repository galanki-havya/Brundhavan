import { motion } from 'framer-motion'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'
import { Link } from 'react-router-dom'
import { 
  Beaker, 
  Monitor, 
  BookOpen, 
  Waves, 
  Palette, 
  Trophy, 
  Shield, 
  Leaf, 
  Bus 
} from 'lucide-react'

const { facilities } = siteData

const themes = [
  // 🔬 Science Laboratories (Teal / Cyan)
  {
    accent: '#008080',
    bgColor: '#f2f9f9',
    border: '1px solid rgba(0, 128, 128, 0.15)',
    shadowColor: 'rgba(0, 128, 128, 0.12)'
  },
  // 💻 Digital Learning Center (Bronze / Main Logo)
  {
    accent: '#7C6218',
    bgColor: '#faf8f2',
    border: '1px solid rgba(124, 98, 24, 0.15)',
    shadowColor: 'rgba(124, 98, 24, 0.12)'
  },
  // 📚 Resource Library (Emerald Green)
  {
    accent: '#1E824C',
    bgColor: '#f3faf5',
    border: '1px solid rgba(30, 130, 76, 0.15)',
    shadowColor: 'rgba(30, 130, 76, 0.12)'
  },
  // 🏊 Aquatic Complex (Vibrant Amber / Gold)
  {
    accent: '#d4af37',
    bgColor: '#fdfbf2',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    shadowColor: 'rgba(212, 175, 55, 0.12)'
  },
  // 🎨 Arts & Creativity Studio (Crimson Red)
  {
    accent: '#A82424',
    bgColor: '#faf3f3',
    border: '1px solid rgba(168, 36, 36, 0.15)',
    shadowColor: 'rgba(168, 36, 36, 0.12)'
  },
  // ⚽ Sports Complex (Warm Orange)
  {
    accent: '#E67E22',
    bgColor: '#fdf7f2',
    border: '1px solid rgba(230, 126, 34, 0.15)',
    shadowColor: 'rgba(230, 126, 34, 0.12)'
  }
]

const facilityIcons = [
  Beaker,       // Science Laboratories
  Monitor,      // Digital Learning Center
  BookOpen,     // Resource Library
  Waves,        // Aquatic Complex
  Palette,      // Arts & Creativity Studio
  Trophy        // Sports Complex
]

const highlights = [
  { icon: Shield, title: 'Safe & Secure', desc: 'CCTV surveillance, trained staff, and emergency protocols' },
  { icon: Monitor, title: 'Digital Campus', desc: 'Smart classrooms with interactive boards and online learning tools' },
  { icon: Leaf, title: 'Green Environment', desc: 'Spacious grounds with gardens and outdoor learning spaces' },
  { icon: Bus, title: 'Transport Fleet', desc: 'Well-maintained school buses with GPS tracking' }
]

export default function Facilities() {
  return (
    <div style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      {/* Hero */}
      <PageHero
        title="Facilities"
        subtitle="World-class infrastructure designed for holistic development and modern learning."
        backgroundImage="/images/gallery/overview.png"
        variant="gold"
        fullOpacity={true}
        showOverlay={false}
        objectPosition="object-center"
      />

      {/* Facilities Grid */}
      <Section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p style={{ color: '#d4af37', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>Infrastructure</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#7C6218', leadingHeight: 1.2 }}>
              Designed for Excellence
            </h2>
            <p style={{ marginTop: '20px', fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', color: '#64748b', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Brindavan School is equipped with state-of-the-art facilities to support academic excellence, physical development, and creative expression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => {
              const theme = themes[i % themes.length]
              const IconComponent = facilityIcons[i % facilityIcons.length]
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ background: theme.bgColor, borderRadius: '24px', border: theme.border, boxShadow: '0 10px 25px rgba(124, 98, 24, 0.02)', padding: '28px 24px', transition: 'all 0.3s ease' }}
                  className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div 
                    style={{ width: '46px', height: '46px', background: theme.accent, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: `0 6px 15px ${theme.shadowColor}`, color: '#fff' }} 
                    className="group-hover:scale-105 transition-transform duration-300"
                  >
                    <IconComponent size={20} style={{ color: '#fff' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#7C6218', marginBottom: '10px' }}>{facility.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '0.88rem', lineHeight: 1.55 }}>{facility.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section style={{ background: '#fdfcf0', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#7C6218', textAlign: 'center', marginBottom: '64px' }}>
            Campus Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="/images/gallery/Infrastructure/3.jpg"
              alt="Campus"
              style={{ borderRadius: '24px', boxShadow: '0 24px 60px rgba(124, 98, 24, 0.12)', width: '100%', height: '420px', objectFit: 'cover' }}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ background: '#fff', borderRadius: '20px', padding: '24px', border: '1px solid rgba(212, 175, 55, 0.12)', boxShadow: '0 10px 30px rgba(124, 98, 24, 0.03)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(124, 98, 24, 0.08)', border: '1px solid rgba(124, 98, 24, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={22} style={{ color: '#7C6218' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#7C6218', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #7C6218 0%, #A28225 50%, #B8860B 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
            Experience Our Campus
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7, maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Schedule a campus visit and see our world-class facilities firsthand.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  )
}
