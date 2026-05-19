import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { siteData } from '../../data/site'
import { Award, Users, BookOpen, GraduationCap, ArrowRight, Quote } from 'lucide-react'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
      <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>{children}</span>
      <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
    </div>
  )
}

export default function ChairmanMessage() {
  const { chairman } = siteData

  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Chairman's Message"
        subtitle="Visionary guidance and leadership shaping our institutional future."
        backgroundImage="/images/gallery/Chairman2.png"
        variant="pink"
      />

      {/* ── Main Section ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }}
          className="chair-grid"
        >
          <style>{`@media(max-width:768px){.chair-grid{grid-template-columns:1fr!important;}}`}</style>

          {/* Chairman Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'sticky', top: '32px' }}
          >
            <div style={{
              background: '#fff', borderRadius: '20px', padding: '32px 24px',
              textAlign: 'center', border: '1px solid #f0f0f0',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />

              <div style={{
                width: '160px', height: '160px', borderRadius: '18px',
                overflow: 'hidden', margin: '0 auto 20px',
                border: '2px solid #f0f0f0',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
              }}>
                <img src={chairman.image} alt={chairman.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.25rem', color: '#011E3A', marginBottom: '6px' }}>{chairman.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#FF6347', fontWeight: 600, marginBottom: '20px', fontStyle: 'italic' }}>{chairman.title}</p>

              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: GraduationCap, text: chairman.credentials },
                  { icon: Award,         text: '8+ Years Excellence' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '0.85rem', color: '#444' }}>
                    <item.icon size={15} style={{ color: '#FF6347', flexShrink: 0 }} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
              {[
                { icon: BookOpen,      value: 'Physics Expert',  label: 'Specialized IIT Coaching' },
                { icon: Users,         value: 'Vice Principal',  label: 'Former High School In-Charge' },
                { icon: GraduationCap, value: 'Holistic Dev.',   label: 'Character & Intellect' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    background: '#fff', borderRadius: '12px', padding: '14px 18px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    display: 'flex', alignItems: 'center', gap: '12px'
                  }}
                >
                  {/* Plain icon — no box background */}
                  <item.icon size={18} style={{ color: '#FF6347', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#011E3A', fontSize: '0.9rem' }}>{item.value}</div>
                    <div style={{ fontSize: '0.78rem', color: '#666' }}>{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <div style={{ width: '3px', height: '44px', background: '#FF6347', borderRadius: '4px', flexShrink: 0 }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.9rem', fontWeight: 700, color: '#011E3A', margin: 0 }}>About the Chairman</h2>
            </div>

            {/* Quote card */}
            <div style={{
              background: '#fff', borderRadius: '14px', padding: '22px 26px',
              border: '1px solid #f0f0f0', borderLeft: '3px solid #FF6347',
              marginBottom: '28px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
            }}>
              <Quote size={28} style={{ color: '#FF6347', opacity: 0.25, marginBottom: '10px' }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#222', lineHeight: 1.7, margin: 0 }}>
                "Cultivating both intellectual growth and personal character."
              </p>
            </div>

            {/* Message paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '40px' }}>
              {chairman.message.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, margin: 0 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '24px' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: '#011E3A', marginBottom: '4px' }}>{chairman.name}</p>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FF6347', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{chairman.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision Quote ── */}
      <section style={{ padding: '60px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontStyle: 'italic', color: '#011E3A', lineHeight: 1.45, marginBottom: '20px' }}
          >
            "Cultivating both intellectual growth and personal character."
          </motion.h2>
          <div style={{ width: '48px', height: '2.5px', background: '#FF6347', borderRadius: '4px', margin: '0 auto 20px' }} />
          <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.75 }}>
            Under the leadership of {chairman.name}, we are committed to innovative teaching methods and excellence in education.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: '24px' }}>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Join the Brindavan Legacy
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Start your child's journey in an institution built on vision, values, and a commitment to excellence.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Start Your Child's Journey <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #e0e0e0', color: '#011E3A',
              fontWeight: 600, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}