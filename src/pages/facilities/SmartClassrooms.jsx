import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import {
  Monitor, BookOpen, Users, Zap, CheckCircle2, ArrowRight,
  Tablet, Volume2, Video, Tv, Grid, ClipboardList,
  FileSpreadsheet, Beaker, Globe, Lock, Eye
} from 'lucide-react'
import smartClassroomsImg from '../../assets/Facilties/3.jpg'
import smartClassroomsRightImg from '../../assets/rightimages/3.jpg'

const featureCards = [
  { emoji: '🖥️', label: 'Interactive Displays', desc: 'Large touch-screen displays for collaborative learning and multimedia presentations.', bg: '#FFF8F6', border: '#FFCFC4' },
  { emoji: '📚', label: 'Digital Content',      desc: 'Access to vast digital libraries, educational videos, and interactive simulations.',  bg: '#EEF3FB', border: '#B8CFF0' },
  { emoji: '👥', label: 'Student Engagement',   desc: 'Tools that promote active participation and real-time feedback from every student.',    bg: '#FFFBEE', border: '#F5DFA0' },
  { emoji: '⚡', label: 'Modern Technology',    desc: 'Latest educational software and hardware delivering 21st-century learning outcomes.',   bg: '#F0FAF4', border: '#A8DDB8' },
]

const techCols = [
  {
    title: 'Hardware', icon: Monitor,
    bg: '#FFF8F6', border: '#FFCFC4', iconColor: '#FF6347', dotColor: '#FF6347', dividerColor: '#FFCFC4',
    items: ['Interactive Whiteboards', 'Student Tablets', 'Audio Systems', 'Video Conferencing', 'Smart Projectors']
  },
  {
    title: 'Software & Platforms', icon: Grid,
    bg: '#EEF3FB', border: '#B8CFF0', iconColor: '#1a3a6b', dotColor: '#1a3a6b', dividerColor: '#B8CFF0',
    items: ['Educational Apps', 'Learning Management System', 'Digital Assessment Tools', 'Virtual Labs', 'Online Resources']
  },
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

export default function SmartClassrooms() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <PageHero
        title="Smart Classrooms"
        subtitle="Technology-enabled learning environments with interactive teaching tools and digital resources."
        backgroundImage={smartClassroomsImg}
        variant="gold" fullOpacity={true} objectPosition="object-top" showOverlay={false}
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="sc-grid">
          <style>{`@media(max-width:768px){.sc-grid{grid-template-columns:1fr!important;}}`}</style>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src={smartClassroomsRightImg} alt="Smart Classrooms" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block', border: '1.5px solid #FFCFC4', boxShadow: '0 16px 48px rgba(255,99,71,0.10)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2, background: '#FFF8F6', borderRadius: '16px', padding: '16px 24px', border: '1.5px solid #FFCFC4', boxShadow: '0 8px 32px rgba(255,99,71,0.10)' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>100%</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Interactive Rooms</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Technology-Enabled</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: '20px' }}>
              Future-Ready{' '}<span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Smart Classrooms</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '12px' }}>
              Brindavan School integrates cutting-edge technology directly into the core learning experience. Our interactive classrooms replace traditional blackboards with dynamic digital displays that bring complex concepts to life.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              By combining video animations, audio tutorials, and real-time interactive exercises, students learn actively, absorb information faster, and participate in an engaging collaborative environment.
            </p>
            {['Smart interactive whiteboards in every classroom', 'Video animations & audio-visual tutorials', 'Real-time student engagement tools', 'Digital assessments & instant feedback', 'Seamlessly integrated with the curriculum'].map((point, i) => (
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
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Classroom Features</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>Classroom Features</h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Every tool built to make learning engaging and effective</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {featureCards.map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ background: item.bg, borderRadius: '18px', padding: '32px 24px', border: `1.5px solid ${item.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Technology Integration ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Technology</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A' }}>Technology Integration</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {techCols.map((col, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: col.bg, borderRadius: '18px', padding: '32px 28px', border: `1.5px solid ${col.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${col.border}` }}>
                  <col.icon size={20} style={{ color: col.iconColor }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#011E3A', margin: 0 }}>{col.title}</h3>
                </div>
                {col.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: `1px solid ${col.dividerColor}`, fontSize: '0.93rem', color: '#333' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: col.dotColor, flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#F9FAFB', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFF8F6', border: '1.5px solid #FFCFC4', boxShadow: '0 4px 32px rgba(255,99,71,0.08)', padding: '60px 40px', borderRadius: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Step Into the Classroom of Tomorrow
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Give your child access to smart, interactive classrooms that make learning exciting and effective.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{ border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Schedule a Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}