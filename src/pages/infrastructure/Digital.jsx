import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Laptop, Globe, Database, Smartphone, CheckCircle2, ArrowRight, Code2, BookOpen, Cpu, Wifi } from 'lucide-react'
import PageHero from '../../components/PageHero'

const featureCards = [
  { emoji: '💻', label: 'Computer Labs',      desc: 'State-of-the-art labs with the latest hardware and software for hands-on learning.',             bg: '#FFF8F6', border: '#FFCFC4' },
  { emoji: '🌐', label: 'Internet Access',    desc: 'High-speed broadband enabling online learning, research, and global collaboration.',             bg: '#EEF3FB', border: '#B8CFF0' },
  { emoji: '📚', label: 'Digital Resources',  desc: 'Access to online libraries, educational platforms, and curated content for every subject.',      bg: '#FFFBEE', border: '#F5DFA0' },
  { emoji: '📱', label: 'Mobile Learning',    desc: 'BYOD programs and mobile apps for flexible, on-the-go enhanced learning experiences.',           bg: '#F0FAF4', border: '#A8DDB8' },
]

const techCols = [
  {
    title: 'Hardware', icon: Cpu,
    bg: '#FFF8F6', border: '#FFCFC4', iconColor: '#FF6347', dotColor: '#FF6347', dividerColor: '#FFCFC4',
    items: ['High-performance Computers', 'Interactive Whiteboards', 'Student Tablets', 'Audio-Visual Equipment', 'Printers & Scanners', 'Networking Infrastructure']
  },
  {
    title: 'Software & Platforms', icon: Code2,
    bg: '#EEF3FB', border: '#B8CFF0', iconColor: '#1a3a6b', dotColor: '#1a3a6b', dividerColor: '#B8CFF0',
    items: ['Educational Software', 'Learning Management System', 'Digital Assessment Tools', 'Creative Applications', 'Programming Environments', 'Online Collaboration Tools']
  },
  {
    title: 'STEM Programs', icon: BookOpen,
    bg: '#FFFBEE', border: '#F5DFA0', iconColor: '#B8860B', dotColor: '#B8860B', dividerColor: '#F5DFA0',
    items: ['Coding & Programming', 'Robotics Workshops', '3D Design & Printing', 'Virtual Science Labs', 'AI & Machine Learning', 'Data Analysis Basics']
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

export default function Digital() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Helmet>
        <title>Digital Learning - Brindavan School</title>
        <meta name="description" content="Cutting-edge digital infrastructure supporting modern education and future-ready skills at Brindavan School, Palamaner." />
      </Helmet>

      <PageHero title="Digital Learning" subtitle="Cutting-edge digital infrastructure supporting modern education and future-ready skills." variant="pink" backgroundImage="/images/gallery/Academic.png" />

      {/* ── Split Section ── */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid">
          <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src="/images/gallery/computer.jpg" alt="Digital Learning at Brindavan" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block', border: '1.5px solid #FFCFC4', boxShadow: '0 16px 48px rgba(255,99,71,0.10)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2, background: '#FFF8F6', borderRadius: '16px', padding: '16px 24px', border: '1.5px solid #FFCFC4', boxShadow: '0 8px 32px rgba(255,99,71,0.10)' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>100+</div>
              <div style={{ fontSize: '13px', color: '#302f2f', fontWeight: 500 }}>Digital Devices</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our Technology</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: '20px' }}>
              Learning Powered by{' '}<span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Technology</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#302f2f', lineHeight: 1.85, marginBottom: '12px' }}>
              At Brindavan, we believe the future belongs to those who are digitally fluent. Our smart classrooms, computer labs, and connected ecosystem equip every student with the tools and mindset to thrive.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#302f2f', lineHeight: 1.85, marginBottom: '28px' }}>
              From coding workshops to digital libraries, every resource is designed to spark curiosity and build skills that go far beyond the classroom.
            </p>
            {['Smart classrooms with interactive whiteboards', 'High-speed broadband across the entire campus', 'Dedicated coding & robotics lab', 'Digital library and e-learning platforms', 'BYOD-friendly learning environment'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#302f2f' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FF6347', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none' }}>
                Explore Admissions <ArrowRight size={17} />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1.5px solid #FFCFC4', color: '#011E3A', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Digital Capabilities Cards ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>What We Offer</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>Digital Capabilities</h2>
            <p style={{ color: '#302f2f', fontSize: '1.2rem' }}>Every tool built to empower the next generation of leaders</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {featureCards.map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ background: item.bg, borderRadius: '18px', padding: '32px 24px', border: `1.5px solid ${item.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#302f2f', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Technology Infrastructure ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Infrastructure</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A' }}>Technology Infrastructure</h2>
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
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: `1px solid ${col.dividerColor}`, fontSize: '0.93rem', color: '#302f2f' }}>
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
            Prepare Your Child for a Digital Future
          </h2>
          <p style={{ color: '#302f2f', fontSize: '1.2rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Give your child access to world-class digital education and the skills they need to lead tomorrow.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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