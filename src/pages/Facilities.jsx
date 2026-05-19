import { motion } from 'framer-motion'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'
import { Link } from 'react-router-dom'
import { Beaker, Monitor, BookOpen, Waves, Palette, Trophy, Shield, Leaf, Bus } from 'lucide-react'

const { facilities } = siteData

// Updated modern theme palette
const themes = [
  { accent: '#FF6347', bgColor: '#fff5f3', border: '1px solid #fce8e6' },
  { accent: '#011E3A', bgColor: '#f0f3f7', border: '1px solid #e1e8f0' },
  { accent: '#FF6347', bgColor: '#fff5f3', border: '1px solid #fce8e6' },
  { accent: '#011E3A', bgColor: '#f0f3f7', border: '1px solid #e1e8f0' },
  { accent: '#FF6347', bgColor: '#fff5f3', border: '1px solid #fce8e6' },
  { accent: '#011E3A', bgColor: '#f0f3f7', border: '1px solid #e1e8f0' }
]

const facilityIcons = [Beaker, Monitor, BookOpen, Waves, Palette, Trophy]
const highlights = [
  { icon: Shield, title: 'Safe & Secure', desc: 'CCTV surveillance, trained staff, and emergency protocols' },
  { icon: Monitor, title: 'Digital Campus', desc: 'Smart classrooms with interactive boards and modern tools' },
  { icon: Leaf, title: 'Green Environment', desc: 'Spacious grounds with eco-friendly learning spaces' },
  { icon: Bus, title: 'Transport Fleet', desc: 'GPS-tracked buses covering all local routes' }
]

export default function Facilities() {
  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <PageHero
        title="Facilities"
        subtitle="World-class infrastructure designed for holistic development."
        backgroundImage="/images/gallery/overview.png"
        variant="gold"
      />

      <Section style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span style={{ color: '#FF6347', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Infrastructure</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#011E3A', marginTop: '10px' }}>Designed for Excellence</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => {
              const theme = themes[i % themes.length]
              const IconComponent = facilityIcons[i % facilityIcons.length]
              return (
                <motion.div key={i} whileHover={{ y: -5 }} style={{ background: theme.bgColor, borderRadius: '20px', border: theme.border, padding: '32px' }}>
                  <div style={{ width: '50px', height: '50px', background: theme.accent, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <IconComponent size={24} style={{ color: '#fff' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#011E3A', marginBottom: '10px' }}>{facility.title}</h3>
                  <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>{facility.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section style={{ background: '#F9FAFB', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src="/images/gallery/Infrastructure/3.jpg" alt="Campus" style={{ borderRadius: '24px', width: '100%', height: '450px', objectFit: 'cover' }} />
          <div className="space-y-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#011E3A' }}>Campus Highlights</h2>
            {highlights.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #eee' }}><item.icon size={24} color="#FF6347" /></div>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#011E3A', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}