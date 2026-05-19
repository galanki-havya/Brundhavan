import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Trophy, Award, Medal, Star, ArrowRight } from 'lucide-react'

const achievements = [
  { year: '2025', title: 'Foundation Year Excellence Setup',  category: 'Institution Building',     description: 'Established modern infrastructure, State Board alignment, and digital classrooms.', icon: Trophy },
  { year: '2025', title: 'Modern Learning Environment',       category: 'Educational Innovation',   description: 'Created smart classrooms with advanced teaching methodologies.',                  icon: Award  },
  { year: '2025', title: 'Community Engagement Initiative',   category: 'Social Impact',            description: 'Built strong parent-school partnerships and outreach programs.',                  icon: Medal  },
  { year: '2025', title: 'Digital Infrastructure Setup',      category: 'Technology Integration',   description: 'Implemented modern learning platforms and digital systems.',                      icon: Star   },
]

const stats = [
  { label: 'Foundation Year', value: '2025',   emoji: '🏆' },
  { label: 'Infrastructure',  value: 'Modern', emoji: '🏫' },
  { label: 'Learning System', value: 'Smart',  emoji: '📘' },
  { label: 'Programs',        value: 'Active', emoji: '🤝' },
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

export default function Achievements() {
  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Our Achievements"
        subtitle="Building excellence through innovation, discipline, and modern education."
        backgroundImage="/images/gallery/AcademicAchivers/2.jpg"
      />

      {/* ── Stats ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <SectionLabel>Our Journey</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>
              Achievement Highlights
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Key milestones that define our journey of excellence</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {stats.map((item, i) => (
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
                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{item.emoji}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#FF6347', marginBottom: '6px' }}>{item.value}</div>
                <div style={{ fontSize: '0.88rem', color: '#666', fontWeight: 500 }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Milestones ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <SectionLabel>Milestones</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>
              Our Milestones
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Growth through continuous improvement and commitment</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {achievements.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px', alignItems: 'flex-start' }}
              >
                {/* Icon — plain white box, just orange icon */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: '#fff', border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <a.icon size={24} style={{ color: '#FF6347' }} />
                </div>

                {/* Card */}
                <div style={{
                  background: '#fff', borderRadius: '16px', padding: '24px 28px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{
                      background: '#fff', color: '#FF6347',
                      border: '1px solid #FF6347',
                      padding: '3px 12px', borderRadius: '50px',
                      fontSize: '0.78rem', fontWeight: 700
                    }}>{a.year}</span>
                    <span style={{ fontSize: '0.82rem', color: '#888', fontWeight: 500 }}>{a.category}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{a.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Outlook ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <SectionLabel>Looking Ahead</SectionLabel>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>
              Looking Ahead
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Our vision for the future of Brindavan School</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Academic Excellence',  items: ['State Board top results', 'Competitive exam preparation', 'Olympiad participation', 'Scholarship programs'] },
              { title: 'Infrastructure Growth', items: ['Expanded digital classrooms', 'New sports facilities', 'Enhanced science labs', 'Library expansion'] },
              { title: 'Community Impact',      items: ['Parent engagement programs', 'Alumni network', 'Community outreach', 'Teacher development'] },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: '18px', padding: '32px 28px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '18px' }}>{cat.title}</h3>
                {cat.items.map(item => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '9px 0', borderBottom: '1px solid #f5f5f5',
                    fontSize: '0.9rem', color: '#333'
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF6347', flexShrink: 0 }} />
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
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Be Part of Our Journey
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Every achievement starts with a single step. Join Brindavan School and be part of a growing legacy of excellence.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Join Now <ArrowRight size={17} />
            </Link>
            <Link to="/about/overview" style={{
              border: '1.5px solid #e0e0e0', color: '#011E3A',
              fontWeight: 600, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}