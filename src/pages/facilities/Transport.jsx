import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import {
  Bus, Shield, Clock, MapPin, CheckCircle2, ArrowRight,
  Gauge, Phone, Heart, Flame, Wind, Smile, Music, Lightbulb, Thermometer
} from 'lucide-react'
import transportImg from '../../assets/Facilties/1.jpg'
import transportRightImg from '../../assets/rightimages/1.jpg'

const getTransportItemIcon = (name) => {
  const n = name.toLowerCase()
  if (n.includes('gps')) return MapPin
  if (n.includes('speed')) return Gauge
  if (n.includes('emergency')) return Phone
  if (n.includes('first aid')) return Heart
  if (n.includes('fire')) return Flame
  if (n.includes('seat belt')) return Shield
  if (n.includes('air-conditioned')) return Wind
  if (n.includes('seating')) return Smile
  if (n.includes('audio')) return Music
  if (n.includes('light')) return Lightbulb
  if (n.includes('temperature')) return Thermometer
  return Bus
}

export default function Transport() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>Transport - Brindavan Schools</title>
      </Helmet>

      <PageHero
        title="Transport"
        subtitle="Safe and reliable school transport services with GPS tracking and professional drivers."
        backgroundImage={transportImg}
        variant="gold"
        fullOpacity={true}
      />

      {/* ── Split Section ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="transport-grid">
          <style>{`@media(max-width:768px){.transport-grid{grid-template-columns:1fr!important;}}`}</style>
          
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src={transportRightImg} alt="Transport" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#fff', borderRadius: '16px', padding: '16px 24px', border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>100%</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Safety Guaranteed</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Reliable Commute</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', marginBottom: '20px' }}>
              Safe School <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Transportation</span>
            </h2>
            <p style={{ color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>Our modern fleet is equipped with GPS real-time tracking and speed governors, ensuring a worry-free daily commute for students across Palamaner.</p>
            
            {['GPS real-time tracking', 'Certified professional drivers', 'Speed governor controlled', 'First aid & emergency kits', 'Wide route coverage'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { label: 'Modern Fleet', desc: 'Well-maintained buses with comfortable seating and safety gear.' },
              { label: 'Safety First', desc: 'Comprehensive protocols including GPS and emergency support.' },
              { label: 'Punctual Service', desc: 'Consistent pickup and drop-off timings every single day.' },
              { label: 'Wide Coverage', desc: 'Extensive routes spanning Palamaner and surrounding areas.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', border: '1px solid #f0f0f0', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}