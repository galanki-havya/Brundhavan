import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Monitor, BookOpen, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import smartClassroomsImg from '../../assets/Facilties/3.jpg'
import smartClassroomsRightImg from '../../assets/rightimages/3.jpg'

export default function SmartClassrooms() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Smart Classrooms"
        subtitle="Technology-enabled learning environments with interactive teaching tools and digital resources."
        backgroundImage={smartClassroomsImg}
        variant="pink"
        fullOpacity={true}
        objectPosition="object-top"
        showOverlay={false}
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', borderRadius: '20px' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', borderRadius: '20px', background: 'linear-gradient(135deg, #ec4899, #f9a8d4)', zIndex: 0 }} />
            <img src={smartClassroomsRightImg} alt="Smart Classrooms" style={{ position: 'relative', zIndex: 1, width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 24px 60px rgba(236,72,153,0.2)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 2, background: '#fff', borderRadius: '16px', padding: '16px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#ec4899', fontFamily: "'Playfair Display', serif" }}>100%</div>
              <div style={{ fontSize: '13px', color: '#6b5c6e', fontWeight: 500 }}>Interactive Rooms</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Technology-Enabled</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '20px' }}>
              Future-Ready <span style={{ color: '#ec4899' }}>Smart Classrooms</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#6b5c6e', lineHeight: 1.8, marginBottom: '12px' }}>
              Brindavan School integrates cutting-edge technology directly into the core learning experience. Our interactive classrooms replace traditional blackboards with dynamic digital displays that bring complex concepts to life.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#6b5c6e', lineHeight: 1.8, marginBottom: '28px' }}>
              By combining video animations, audio tutorials, and real-time interactive exercises, students learn actively, absorb information faster, and participate in an engaging collaborative environment.
            </p>
            {['Smart interactive whiteboards in every classroom', 'Video animations & audio-visual tutorials', 'Real-time student engagement tools', 'Digital assessments & instant feedback', 'Seamlessly integrated with the curriculum'].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#3d2c40' }}>
                <CheckCircle2 size={20} style={{ color: '#ec4899', flexShrink: 0, marginTop: '2px' }} /><span>{point}</span>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/admission-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ec4899', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 6px 24px rgba(236,72,153,0.35)' }}>Apply for Admission <ArrowRight size={18} /></Link>
              <Link to="/facilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #ec4899', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none' }}>All Facilities</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Classroom Features</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>Every tool built to make learning engaging and effective</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: Monitor, title: 'Interactive Displays', description: 'Large touch-screen displays for collaborative learning and multimedia presentations.' },
              { icon: BookOpen, title: 'Digital Content', description: 'Access to vast digital libraries, educational videos, and interactive simulations.' },
              { icon: Users, title: 'Student Engagement', description: 'Tools that promote active participation and real-time feedback from every student.' },
              { icon: Zap, title: 'Modern Technology', description: 'Latest educational software and hardware delivering 21st-century learning outcomes.' }
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '20px', padding: '32px 28px', boxShadow: '0 4px 24px rgba(236,72,153,0.08)', border: '1px solid #fce7f3' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1.5px solid #f9a8d4' }}>
                  <item.icon size={24} style={{ color: '#ec4899' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hardware & Software Two-Col ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Technology Integration</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>State-of-the-art technology seamlessly integrated into the learning process</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {[
              { title: 'Hardware', items: ['Interactive Whiteboards', 'Student Tablets', 'Audio Systems', 'Video Conferencing', 'Smart Projectors'], accent: '#ec4899' },
              { title: 'Software & Platforms', items: ['Educational Apps', 'Learning Management System', 'Digital Assessment Tools', 'Virtual Labs', 'Online Resources'], accent: '#f472b6' }
            ].map((col, ci) => (
              <motion.div key={col.title} initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '20px', padding: '36px 32px', border: '1.5px solid #fce7f3' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${col.accent}`, display: 'inline-block' }}>{col.title}</h3>
                <div style={{ marginTop: '8px' }}>
                  {col.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid #fce7f3', fontFamily: "'DM Sans', sans-serif", color: '#3d2c40', fontSize: '0.95rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.accent, flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Step Into the Classroom of Tomorrow</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Give your child access to smart, interactive classrooms that make learning exciting and effective.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#fff', color: '#be185d', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Schedule a Tour</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}