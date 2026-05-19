import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { siteData } from '../../data/site'
import { Award, Users, BookOpen, GraduationCap, ArrowRight, Quote } from 'lucide-react'

export default function ChairmanMessage() {
  const { chairman } = siteData

  return (
    <div style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Chairman's Message"
        subtitle="Visionary guidance and leadership shaping our institutional future."
        backgroundImage="/images/gallery/Chairman2.png"
        variant="pink"
      />

      {/* ── Main Section ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'start' }}>

          {/* Chairman Profile Card */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'sticky', top: '32px' }}>
            <div style={{ background: '#fff', borderRadius: '24px', padding: '32px 24px', textAlign: 'center', border: '1.5px solid #fce7f3', boxShadow: '0 8px 32px rgba(236,72,153,0.1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />

              <div style={{ width: '160px', height: '160px', borderRadius: '20px', overflow: 'hidden', margin: '0 auto 20px', border: '3px solid #fce7f3', boxShadow: '0 8px 24px rgba(236,72,153,0.15)' }}>
                <img src={chairman.image} alt={chairman.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.3rem', color: '#1a1a2e', marginBottom: '6px' }}>{chairman.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#ec4899', fontWeight: 600, marginBottom: '20px', fontStyle: 'italic' }}>{chairman.title}</p>

              <div style={{ borderTop: '1px solid #fce7f3', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: GraduationCap, text: chairman.credentials },
                  { icon: Award, text: '8+ Years Excellence' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#3d2c40' }}>
                    <item.icon size={16} style={{ color: '#ec4899', flexShrink: 0 }} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight stats below card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
              {[
                { icon: BookOpen, value: 'Physics Expert', label: 'Specialized IIT Coaching' },
                { icon: Users, value: 'Vice Principal', label: 'Former High School In-Charge' },
                { icon: GraduationCap, value: 'Holistic Dev.', label: 'Character & Intellect' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} style={{ background: '#fff', borderRadius: '14px', padding: '14px 18px', border: '1px solid #fce7f3', boxShadow: '0 2px 12px rgba(236,72,153,0.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #f9a8d4' }}>
                    <item.icon size={18} style={{ color: '#ec4899' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a1a2e', fontSize: '0.9rem' }}>{item.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#6b5c6e' }}>{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            {/* About header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '4px', height: '48px', background: 'linear-gradient(180deg, #ec4899, #f9a8d4)', borderRadius: '4px', flexShrink: 0 }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>About the Chairman</h2>
            </div>

            {/* Quote accent */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px 28px', border: '1.5px solid #fce7f3', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
              <Quote size={32} style={{ color: '#f9a8d4', marginBottom: '12px' }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontStyle: 'italic', color: '#3d2c40', lineHeight: 1.7, margin: 0 }}>
                "Cultivating both intellectual growth and personal character."
              </p>
            </div>

            {/* Message paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {chairman.message.split('\n\n').map((para, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#6b5c6e', lineHeight: 1.8, margin: 0 }}>
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <div style={{ borderTop: '1px solid #fce7f3', paddingTop: '28px' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '4px' }}>{chairman.name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#ec4899', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{chairman.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision Quote ── */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontStyle: 'italic', color: '#1a1a2e', lineHeight: 1.4, marginBottom: '24px' }}>
            "Cultivating both intellectual growth and personal character."
          </motion.h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)', borderRadius: '4px', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Under the leadership of {chairman.name}, we are committed to innovative teaching methods and excellence in education.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Join the Brindavan Legacy</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Start your child's journey in an institution built on vision, values, and a commitment to excellence.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{ background: '#fff', color: '#be185d', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Start Your Child's Journey <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}