import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import {
  Monitor,
  BookOpen,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Tablet,
  Volume2,
  Video,
  Tv,
  Grid,
  ClipboardList,
  FileSpreadsheet,
  Beaker,
  Globe
} from 'lucide-react'
import smartClassroomsImg from '../../assets/Facilties/3.jpg'
import smartClassroomsRightImg from '../../assets/rightimages/3.jpg'

const getSmartItemIcon = (name) => {
  const n = name.toLowerCase()
  if (n.includes('whiteboard')) return Monitor
  if (n.includes('tablet')) return Tablet
  if (n.includes('audio') || n.includes('sound')) return Volume2
  if (n.includes('video') || n.includes('conference')) return Video
  if (n.includes('projector')) return Tv
  if (n.includes('app')) return Grid
  if (n.includes('management') || n.includes('system') || n.includes('lms')) return ClipboardList
  if (n.includes('assessment') || n.includes('quiz')) return FileSpreadsheet
  if (n.includes('virtual lab') || n.includes('simulation')) return Beaker
  if (n.includes('online resource') || n.includes('internet') || n.includes('web')) return Globe
  return Monitor
}

export default function SmartClassrooms() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <PageHero
        title="Smart Classrooms"
        subtitle="Technology-enabled learning environments with interactive teaching tools and digital resources."
        backgroundImage={smartClassroomsImg}
        variant="gold"
        fullOpacity={true}
        objectPosition="object-top"
        showOverlay={false}
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-x-[60px]">

          {/* Row 1: Badge & Heading */}
          <div className="lg:col-start-2 lg:row-start-1">
            <span style={{ display: 'inline-block', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Technology-Enabled</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', lineHeight: 1.2 }}>
              Future-Ready <span style={{ color: '#d4af37' }}>Smart Classrooms</span>
            </h2>
          </div>

          {/* Row 2: Content (Paragraphs & Checklist) */}
          <div className="lg:col-start-2 lg:row-start-2" style={{ marginTop: '20px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '12px' }}>
              Brindavan School integrates cutting-edge technology directly into the core learning experience. Our interactive classrooms replace traditional blackboards with dynamic digital displays that bring complex concepts to life.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '28px' }}>
              By combining video animations, audio tutorials, and real-time interactive exercises, students learn actively, absorb information faster, and participate in an engaging collaborative environment.
            </p>
            {['Smart interactive whiteboards in every classroom', 'Video animations & audio-visual tutorials', 'Real-time student engagement tools', 'Digital assessments & instant feedback', 'Seamlessly integrated with the curriculum'].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#5C470E' }}>
                <CheckCircle2 size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} /><span>{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Image (Left side on desktop, bottom on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-start-1 lg:row-start-2 lg:row-span-1 lg:self-stretch"
            style={{ position: 'relative', marginTop: '20px', width: '100%', height: '100%', padding: '16px' }}
          >
            {/* Top-Left Offset L-Border */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', borderTop: '4px solid #7C6218', borderLeft: '8px solid #7C6218', borderTopLeftRadius: '24px', pointerEvents: 'none' }} />

            {/* Bottom-Right Offset L-Border */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '120px', height: '120px', borderBottom: '8px solid #7C6218', borderRight: '4px solid #7C6218', borderBottomRightRadius: '24px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '360px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 50px rgba(124, 98, 24, 0.15)' }}>
              <img
                src={smartClassroomsRightImg}
                alt="Smart Classrooms"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Premium Floating Badge matching screenshot style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ position: 'absolute', bottom: 0, right: 0, background: '#fff', borderTopLeftRadius: '20px', padding: '20px 24px', boxShadow: '-5px -5px 30px rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(124, 98, 24, 0.1)', borderTop: '1px solid rgba(124, 98, 24, 0.1)', textAlign: 'center', zIndex: 10 }}
              >
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#7C6218', fontFamily: "'Playfair Display', serif", lineHeight: '1' }}>100%</div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', fontFamily: "'DM Sans', sans-serif", letterSpacing: '1px', marginTop: '6px', textTransform: 'uppercase' }}>Interactive Rooms</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Row 3: Buttons */}
          <div className="lg:col-start-2 lg:row-start-3" style={{ marginTop: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/admission-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#7C6218', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 6px 24px rgba(124, 98, 24, 0.25)' }}>Apply for Admission <ArrowRight size={18} /></Link>
              <Link to="/facilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #7C6218', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none' }}>All Facilities</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#fdfcf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Classroom Features</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem' }}>Every tool built to make learning engaging and effective</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: Monitor, title: 'Interactive Displays', description: 'Large touch-screen displays for collaborative learning and multimedia presentations.' },
              { icon: BookOpen, title: 'Digital Content', description: 'Access to vast digital libraries, educational videos, and interactive simulations.' },
              { icon: Users, title: 'Student Engagement', description: 'Tools that promote active participation and real-time feedback from every student.' },
              { icon: Zap, title: 'Modern Technology', description: 'Latest educational software and hardware delivering 21st-century learning outcomes.' }
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '24px', padding: '32px 28px', boxShadow: '0 15px 35px rgba(124, 98, 24, 0.05)', border: '1px solid rgba(212, 175, 55, 0.12)' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1.5px solid rgba(212, 175, 55, 0.15)' }}>
                  <item.icon size={24} style={{ color: '#7C6218' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#7C6218', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hardware & Software Two-Col ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Technology Integration</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>State-of-the-art technology seamlessly integrated into the learning process</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Hardware', items: ['Interactive Whiteboards', 'Student Tablets', 'Audio Systems', 'Video Conferencing', 'Smart Projectors'], accent: '#7C6218' },
              { title: 'Software & Platforms', items: ['Educational Apps', 'Learning Management System', 'Digital Assessment Tools', 'Virtual Labs', 'Online Resources'], accent: '#d4af37' }
            ].map((col, ci) => (
              <motion.div key={col.title} initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '24px', padding: '36px 32px', border: '1.5px solid rgba(212, 175, 55, 0.12)', boxShadow: '0 10px 30px rgba(124, 98, 24, 0.03)' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#7C6218', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${col.accent}`, display: 'inline-block' }}>{col.title}</h3>
                <div style={{ marginTop: '8px' }}>
                  {col.items.map(item => {
                    const ItemIcon = getSmartItemIcon(item)
                    return (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)', fontFamily: "'DM Sans', sans-serif", color: '#5C470E', fontSize: '0.95rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `${col.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <ItemIcon size={16} style={{ color: col.accent }} />
                        </div>
                        <span>{item}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #7C6218 0%, #A28225 50%, #B8860B 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Step Into the Classroom of Tomorrow</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Give your child access to smart, interactive classrooms that make learning exciting and effective.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#fff', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Schedule a Tour</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}