import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Bus, Shield, Clock, MapPin, CheckCircle2, ArrowRight, Gauge, Phone, Heart, Flame, Wind, Smile, Music, Lightbulb, Thermometer } from 'lucide-react'
import transportImg from '../../assets/Facilties/1.jpg'
import transportRightImg from '../../assets/rightimages/1.jpg'

const featureCards = [
  { label: 'Modern Fleet',     desc: 'Well-maintained buses with comfortable seating and safety gear.',             bg: '#FFF8F6', border: '#FFCFC4' },
  { label: 'Safety First',     desc: 'Comprehensive protocols including GPS and emergency support.',                bg: '#EEF3FB', border: '#B8CFF0' },
  { label: 'Punctual Service', desc: 'Consistent pickup and drop-off timings every single day.',                   bg: '#FFFBEE', border: '#F5DFA0' },
  { label: 'Wide Coverage',    desc: 'Extensive routes spanning Palamaner and surrounding areas.',                  bg: '#F0FAF4', border: '#A8DDB8' },
]

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4 flex flex-col gap-[5px]">
        <div className="h-[3px] w-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.25) 10%, rgba(236,115,58,0.85) 40%, #ec733a 50%, rgba(236,115,58,0.85) 60%, rgba(236,115,58,0.25) 90%, transparent 100%)' }} />
      </div>
    </div>
  )
}

export default function Transport() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <Helmet><title>Transport - Brindavan Schools</title></Helmet>

      <PageHero title="Transport" subtitle="Safe and reliable school transport services with GPS tracking and professional drivers." backgroundImage={transportImg} variant="gold" fullOpacity={true} />

      {/* ── Split Section ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="transport-grid">
          <style>{`@media(max-width:768px){.transport-grid{grid-template-columns:1fr!important;}}`}</style>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src={transportRightImg} alt="Transport" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', border: '1.5px solid #FFCFC4', boxShadow: '0 16px 48px rgba(255,99,71,0.10)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#FFF8F6', borderRadius: '16px', padding: '16px 24px', border: '1.5px solid #FFCFC4', boxShadow: '0 8px 32px rgba(255,99,71,0.10)' }}>
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
              Safe School{' '}<span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Transportation</span>
            </h2>
            <p style={{ color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              Our modern fleet is equipped with GPS real-time tracking and speed governors, ensuring a worry-free daily commute for students across Palamaner.
            </p>
            {['GPS real-time tracking', 'Certified professional drivers', 'Speed governor controlled', 'First aid & emergency kits', 'Wide route coverage'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/admission-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FF6347', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none' }}>
                Apply for Admission <ArrowRight size={17} />
              </Link>
              <Link to="/facilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid #FFCFC4', color: '#011E3A', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none' }}>
                All Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Transport Highlights</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>Why Our Transport Stands Out</h2>
            <p style={{ color: '#302f2f', fontSize: '1.2rem' }}>Safety, reliability, and comfort on every route, every day</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {featureCards.map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ background: item.bg, borderRadius: '18px', padding: '32px 24px', border: `1.5px solid ${item.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#302f2f', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFF8F6', border: '1.5px solid #FFCFC4', boxShadow: '0 4px 32px rgba(255,99,71,0.08)', padding: '60px 40px', borderRadius: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Safe Journeys, Every Day
          </h2>
          <p style={{ color: '#302f2f', fontSize: '1.2rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Give your child the comfort of a safe, reliable commute so they arrive at school ready to learn.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{ border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}