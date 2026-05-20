import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Heart, Globe, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react'

// Brand palette from logo
const missionCards = [
  { icon: '📚', title: 'Academic Excellence',     desc: 'Strong conceptual learning with modern teaching methodologies and practical understanding.',
    bg: '#FFF8F6', border: '#FFCFC4' },
  { icon: '💪', title: 'Character Building',      desc: 'Instilling discipline, responsibility, leadership, and moral values in every student.',
    bg: '#EEF3FB', border: '#B8CFF0' },
  { icon: '🎯', title: 'Holistic Development',    desc: 'Encouraging excellence in academics, sports, arts, communication, and creativity.',
    bg: '#FFFBEE', border: '#F5DFA0' },
  { icon: '🤝', title: 'Inclusive Learning',      desc: 'Creating equal opportunities and a supportive learning environment for all students.',
    bg: '#F0FAF4', border: '#A8DDB8' },
  { icon: '🔬', title: 'Innovation & Technology', desc: 'Smart classrooms and future-ready learning experiences for modern education.',
    bg: '#FEF0F5', border: '#F5B8D0' },
  { icon: '🌍', title: 'Global Perspective',      desc: 'Preparing students to become confident and responsible global citizens.',
    bg: '#F3EEFF', border: '#C9B3F5' },
]

const principles = [
  { icon: Heart,       title: 'Student First',         desc: 'Every decision at Brindavan is centered around the growth, happiness, and success of our students.',
    bg: '#FFF8F6', border: '#FFCFC4', iconColor: '#FF6347' },
  { icon: ShieldCheck, title: 'Safe Environment',      desc: 'A secure and disciplined campus that gives students the confidence to learn and grow freely.',
    bg: '#EEF3FB', border: '#B8CFF0', iconColor: '#1a3a6b' },
  { icon: Globe,       title: 'Future Readiness',      desc: 'Helping students adapt to the changing world with creativity, confidence, and communication skills.',
    bg: '#FFFBEE', border: '#F5DFA0', iconColor: '#B8860B' },
  { icon: Lightbulb,  title: 'Continuous Innovation', desc: 'Enhancing learning experiences with creative teaching methods and technology integration.',
    bg: '#F0FAF4', border: '#A8DDB8', iconColor: '#2E7D4F' },
]

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
      <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>{children}</span>
      <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
    </div>
  )
}

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4 flex flex-col gap-[5px]">
        <div
          className="h-[3px] w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.25) 10%, rgba(236,115,58,0.85) 40%, #ec733a 50%, rgba(236,115,58,0.85) 60%, rgba(236,115,58,0.25) 90%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}

export default function VisionMission() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Vision & Mission"
        subtitle="The values, purpose, and aspirations that guide Brindavan School toward educational excellence."
        backgroundImage="/images/gallery/ScienceDay/1.jpg"
        variant="pink"
      />

      {/* ── Vision Split Section ── */}
      <section style={{ background: '#F9FAFB', padding: '80px 0' }}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
          className="vm-grid"
        >
          <style>{`@media(max-width:768px){.vm-grid{grid-template-columns:1fr!important;}}`}</style>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <img
              src="/images/gallery/ScienceDay/1.jpg"
              alt="Vision at Brindavan"
              style={{
                width: '100%', height: '420px', objectFit: 'cover',
                borderRadius: '20px', display: 'block',
                border: '1.5px solid #FFCFC4',
                boxShadow: '0 16px 48px rgba(255,99,71,0.10)'
              }}
            />
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2,
              background: '#FFF8F6', borderRadius: '16px', padding: '16px 24px',
              border: '1.5px solid #FFCFC4',
              boxShadow: '0 8px 32px rgba(255,99,71,0.10)',
            }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>2025</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Founded</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our Vision</span>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: '20px' }}>
              Inspiring Students to Become{' '}
              <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Future Leaders</span>
            </h2>

            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: '12px' }}>
              At Brindavan School, our vision is to nurture confident, compassionate, and capable learners who excel academically, embrace strong values, and contribute positively to society.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              We aim to create an inspiring educational environment where students discover their true potential through innovation, creativity, discipline, and holistic development.
            </p>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{
                background: '#FFF8F6', borderRadius: '14px', padding: '22px 24px',
                border: '1.5px solid #FFCFC4',
                marginBottom: '28px', boxShadow: '0 2px 16px rgba(255,99,71,0.07)'
              }}
            >
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#011E3A', fontSize: '1.2rem', marginBottom: '8px' }}>Our Long-Term Goal</h4>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>To build a generation of knowledgeable, ethical, innovative, and socially responsible individuals ready to thrive in a rapidly evolving world.</p>
            </motion.div>

            <Link to="/admissions" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FF6347', color: '#fff',
              fontWeight: 600, fontSize: '0.95rem',
              padding: '13px 28px', borderRadius: '50px', textDecoration: 'none'
            }}>
              Apply Now <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Mission Cards ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <SectionLabel>Our Mission</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '12px' }}>
              Empowering Every Child to Succeed
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              We strive to provide a nurturing and innovative environment where every student develops academically, emotionally, socially, and ethically.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {missionCards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{
                  background: item.bg,
                  borderRadius: '18px',
                  padding: '32px 28px',
                  border: `1.5px solid ${item.border}`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1.2rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#302f2f', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Core Principles ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <SectionLabel>Our Principles</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '12px' }}>
              Core Principles
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              The values that shape our educational culture and guide every learning experience.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {principles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{
                  background: item.bg,
                  borderRadius: '18px',
                  padding: '32px 28px',
                  border: `1.5px solid ${item.border}`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <item.icon size={28} style={{ color: item.iconColor, marginBottom: '18px', display: 'block' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#302f2f', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF', textAlign: 'center' }}>
        <div style={{
          maxWidth: '680px', margin: '0 auto',
          background: '#FFF8F6',
          border: '1.5px solid #FFCFC4',
          boxShadow: '0 4px 32px rgba(255,99,71,0.08)',
          padding: '60px 40px', borderRadius: '24px'
        }}>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Join Our Educational Mission
          </h2>
          <p style={{ color: '#302f2f', fontSize: '1.2rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Become part of Brindavan School and help your child grow in an environment built on excellence, values, innovation, and holistic learning.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #FFCFC4', color: '#011E3A',
              background: '#fff',
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