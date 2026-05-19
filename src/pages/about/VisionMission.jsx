import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Target, Eye, Heart, Lightbulb, ArrowRight, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react'

const missionCards = [
  { icon: '📚', title: 'Academic Excellence',     desc: 'Strong conceptual learning with modern teaching methodologies and practical understanding.' },
  { icon: '💪', title: 'Character Building',      desc: 'Instilling discipline, responsibility, leadership, and moral values in every student.' },
  { icon: '🎯', title: 'Holistic Development',    desc: 'Encouraging excellence in academics, sports, arts, communication, and creativity.' },
  { icon: '🤝', title: 'Inclusive Learning',      desc: 'Creating equal opportunities and a supportive learning environment for all students.' },
  { icon: '🔬', title: 'Innovation & Technology', desc: 'Smart classrooms and future-ready learning experiences for modern education.' },
  { icon: '🌍', title: 'Global Perspective',      desc: 'Preparing students to become confident and responsible global citizens.' },
]

const principles = [
  { icon: Heart,       title: 'Student First',       desc: 'Every decision at Brindavan is centered around the growth, happiness, and success of our students.' },
  { icon: ShieldCheck, title: 'Safe Environment',    desc: 'A secure and disciplined campus that gives students the confidence to learn and grow freely.' },
  { icon: Globe,       title: 'Future Readiness',    desc: 'Helping students adapt to the changing world with creativity, confidence, and communication skills.' },
  { icon: Lightbulb,  title: 'Continuous Innovation',desc: 'Enhancing learning experiences with creative teaching methods and technology integration.' },
]

export default function VisionMission() {
  return (
    <div style={{ background: '#fdf6f9', fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Vision & Mission"
        subtitle="The values, purpose, and aspirations that guide Brindavan School toward educational excellence."
        backgroundImage="/images/gallery/ScienceDay/1.jpg"
        variant="pink"
      />

      {/* ── Vision Split Section ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

          {/* Image / Vision Card Side */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', borderRadius: '20px', background: 'linear-gradient(135deg, #ec4899, #f9a8d4)', zIndex: 0 }} />
            <img
              src="/images/gallery/ScienceDay/1.jpg"
              alt="Vision at Brindavan"
              style={{ position: 'relative', zIndex: 1, width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 24px 60px rgba(236,72,153,0.2)' }}
            />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2, background: '#fff', borderRadius: '16px', padding: '16px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#ec4899', fontFamily: "'Playfair Display', serif" }}>2025</div>
              <div style={{ fontSize: '13px', color: '#6b5c6e', fontWeight: 500 }}>Founded</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Vision</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '20px' }}>
              Inspiring Students to Become{' '}<span style={{ color: '#ec4899' }}>Future Leaders</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#6b5c6e', lineHeight: 1.8, marginBottom: '12px' }}>
              At Brindavan School, our vision is to nurture confident, compassionate, and capable learners who excel academically, embrace strong values, and contribute positively to society.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#6b5c6e', lineHeight: 1.8, marginBottom: '28px' }}>
              We aim to create an inspiring educational environment where students discover their true potential through innovation, creativity, discipline, and holistic development.
            </p>

            {/* Highlight card */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ background: '#fdf6f9', borderRadius: '16px', padding: '24px', border: '1.5px solid #fce7f3', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a1a2e', fontSize: '1rem', marginBottom: '8px' }}>Our Long-Term Goal</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#6b5c6e', lineHeight: 1.6, margin: 0 }}>To build a generation of knowledgeable, ethical, innovative, and socially responsible individuals ready to thrive in a rapidly evolving world.</p>
            </motion.div>

            <Link to="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ec4899', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 6px 24px rgba(236,72,153,0.35)' }}>
              Apply Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Cards ── */}
      <section style={{ padding: '80px 0', background: '#fdf6f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Mission</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Empowering Every Child to Succeed</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>We strive to provide a nurturing and innovative environment where every student develops academically, emotionally, socially, and ethically.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {missionCards.map((item, i) => (
              <motion.div key={i} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '20px', padding: '32px 28px', border: '1px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.08)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Principles Two-Col ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Core Principles</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>The values that shape our educational culture and guide every learning experience.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {principles.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: '#fdf6f9', borderRadius: '20px', padding: '32px 28px', border: '1.5px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.07)' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1.5px solid #f9a8d4' }}>
                  <item.icon size={24} style={{ color: '#ec4899' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Join Our Educational Mission</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Become part of Brindavan School and help your child grow in an environment built on excellence, values, innovation, and holistic learning.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{ background: '#fff', color: '#be185d', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}