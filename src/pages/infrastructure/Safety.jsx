import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Shield, Eye, AlertTriangle, Heart,
  CheckCircle2, ArrowRight, Lock, Bell, Users, Activity
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function Safety() {
  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Helmet>
        <title>Safety & Security - Brindavan School</title>
        <meta name="description" content="Comprehensive safety measures ensuring a secure learning environment for all students at Brindavan School, Palamaner." />
      </Helmet>

      <PageHero
        title="Safety & Security"
        subtitle="Comprehensive safety measures ensuring a secure learning environment for all students."
        variant="pink"
        backgroundImage="/images/gallery/HouseVisit/2.jpg"
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'
        }} className="safety-grid">
          <style>{`@media(max-width:768px){.safety-grid{grid-template-columns:1fr!important;}}`}</style>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <img
              src="/images/gallery/Republic.jpg"
              alt="Safety & Security at Brindavan"
              style={{
                width: '100%', height: '420px', objectFit: 'cover',
                borderRadius: '20px', display: 'block',
                border: '1px solid #f0f0f0',
                boxShadow: '0 16px 48px rgba(0,0,0,0.08)'
              }}
            />
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2,
              background: '#fff', borderRadius: '16px', padding: '16px 24px',
              border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>24/7</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Active Monitoring</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>
                Our Commitment
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700,
              color: '#011E3A', lineHeight: 1.2, marginBottom: '20px'
            }}>
              Your Child's Safety is Our{' '}
              <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Top Priority</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '12px' }}>
              At Brindavan, we have built a multi-layered safety ecosystem that gives parents absolute peace of mind. From AI-powered surveillance to trained medical staff, every measure is in place.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              We believe a safe campus is the foundation of great learning — when children feel secure, they thrive.
            </p>

            {[
              'AI-powered 24/7 surveillance across all campus areas',
              'Gated entry with controlled access',
              'Trained security personnel round the clock',
              'On-site medical facility with qualified nurse',
              'Real-time parent communication & emergency alerts'
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}

            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/admissions" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#FF6347', color: '#fff',
                fontWeight: 600, fontSize: '0.95rem',
                padding: '13px 28px', borderRadius: '50px', textDecoration: 'none'
              }}>
                Secure Your Child's Future <ArrowRight size={17} />
              </Link>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1.5px solid #e0e0e0', color: '#011E3A',
                fontWeight: 600, fontSize: '0.95rem',
                padding: '13px 28px', borderRadius: '50px', textDecoration: 'none'
              }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Safety at a Glance Cards ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Safety Systems</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>
              Safety at a Glance
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Every system designed to protect what matters most</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { emoji: '🛡️', label: 'AI-Assisted Security', desc: 'AI-powered surveillance with real-time monitoring and intelligent threat detection.' },
              { emoji: '📷', label: 'CCTV Coverage', desc: 'Comprehensive cameras covering classrooms, corridors, entry points, and playgrounds.' },
              { emoji: '🚨', label: 'Emergency Response', desc: 'Rapid response systems for medical and safety emergencies with trained staff.' },
              { emoji: '❤️', label: 'Health & Wellness', desc: 'On-site medical facility, health monitoring, and a dedicated student counsellor.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: '18px', padding: '32px 24px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  textAlign: 'center', position: 'relative', overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security Infrastructure ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Infrastructure</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A' }}>
              Security Infrastructure
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Physical Security',
                icon: Lock,
                items: ['Perimeter Fencing', 'Gated Entry Points', 'Security Guards', 'Access Control', 'Visitor Management', 'Emergency Exits']
              },
              {
                title: 'Digital Security',
                icon: Eye,
                items: ['CCTV Surveillance', 'Intrusion Detection', 'Access Control Systems', 'Emergency Alarms', 'Communication Systems', 'Digital Monitoring']
              },
              {
                title: 'Safety Education',
                icon: Users,
                items: ['Stranger Danger Awareness', 'Road Safety Education', 'Cyber Safety', 'Fire Safety Drills', 'First Aid Training', 'Mental Health Awareness']
              },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: '18px', padding: '32px 28px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #FF6347' }}>
                  <col.icon size={20} style={{ color: '#FF6347' }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#011E3A', margin: 0 }}>{col.title}</h3>
                </div>
                {col.items.map((item, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '10px 0', borderBottom: '1px solid #f5f5f5',
                    fontSize: '0.93rem', color: '#333'
                  }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF6347', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Experience Our Advanced Safety Systems
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '36px', lineHeight: 1.75 }}>
            AI-powered security and comprehensive safety protocols for complete peace of mind. Come see our campus for yourself.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Secure Your Child's Future <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #e0e0e0', color: '#011E3A',
              fontWeight: 600, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}