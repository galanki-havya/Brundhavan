import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Trophy, Award, Medal, Star, ArrowRight } from 'lucide-react'

const achievements = [
  { year: '2025', title: 'Foundation Year Excellence Setup', category: 'Institution Building', description: 'Established modern infrastructure, State Board alignment, and digital classrooms.', icon: Trophy },
  { year: '2025', title: 'Modern Learning Environment', category: 'Educational Innovation', description: 'Created smart classrooms with advanced teaching methodologies.', icon: Award },
  { year: '2025', title: 'Community Engagement Initiative', category: 'Social Impact', description: 'Built strong parent-school partnerships and outreach programs.', icon: Medal },
  { year: '2025', title: 'Digital Infrastructure Setup', category: 'Technology Integration', description: 'Implemented modern learning platforms and digital systems.', icon: Star },
]

const stats = [
  { label: 'Foundation Year', value: '2025', emoji: '🏆' },
  { label: 'Infrastructure', value: 'Modern', emoji: '🏫' },
  { label: 'Learning System', value: 'Smart', emoji: '📘' },
  { label: 'Programs', value: 'Active', emoji: '🤝' },
]

export default function Achievements() {
  return (
    <div style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Our Achievements"
        subtitle="Building excellence through innovation, discipline, and modern education."
        backgroundImage="/images/gallery/AcademicAchivers/2.jpg"
        variant="pink"
      />

      {/* ── Stats ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Journey</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Achievement Highlights</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>Key milestones that define our journey of excellence</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {stats.map((item, i) => (
              <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '20px', padding: '32px 24px', border: '1px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.08)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.emoji}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#ec4899', marginBottom: '6px' }}>{item.value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', color: '#6b5c6e', fontWeight: 500 }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Milestones ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Our Milestones</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>Growth through continuous improvement and commitment</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {achievements.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px', alignItems: 'flex-start' }}
              >
                {/* Icon */}
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'linear-gradient(135deg, #ec4899, #f472b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 8px 24px rgba(236,72,153,0.25)' }}>
                  <a.icon size={28} style={{ color: '#fff' }} />
                </div>

                {/* Card */}
                <div style={{ background: '#fff', borderRadius: '20px', padding: '28px 32px', border: '1px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.07)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <span style={{ background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)', color: '#ec4899', border: '1px solid #f9a8d4', padding: '4px 14px', borderRadius: '50px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700 }}>{a.year}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#6b5c6e', fontWeight: 500 }}>{a.category}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '8px' }}>{a.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Outlook Cards ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Looking Ahead</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>Our vision for the future of Brindavan School</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Academic Excellence', items: ['State Board top results', 'Competitive exam preparation', 'Olympiad participation', 'Scholarship programs'] },
              { title: 'Infrastructure Growth', items: ['Expanded digital classrooms', 'New sports facilities', 'Enhanced science labs', 'Library expansion'] },
              { title: 'Community Impact', items: ['Parent engagement programs', 'Alumni network', 'Community outreach', 'Teacher development'] },
            ].map((cat, i) => (
              <motion.div key={cat.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '20px', padding: '32px 28px', border: '1px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '20px' }}>{cat.title}</h3>
                {cat.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #fce7f3', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#3d2c40' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Be Part of Our Journey</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Every achievement starts with a single step. Join Brindavan School and be part of a growing legacy of excellence.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{ background: '#fff', color: '#be185d', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Join Now <ArrowRight size={17} /></Link>
            <Link to="/about/overview" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Learn More</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}