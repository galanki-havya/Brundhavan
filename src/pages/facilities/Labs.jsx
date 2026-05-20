import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import {
  Beaker, Shield, Compass, Lightbulb, CheckCircle2, ArrowRight,
  Microscope, FlaskConical, Dna, Atom, Scale, UserCheck,
  Wifi, Cpu, Languages, Code, BatteryCharging, Library
} from 'lucide-react'
import labsImg from '../../assets/Facilties/2.jpg'
import labsRightImg from '../../assets/rightimages/2.jpg'

const featureCards = [
  { emoji: '🧪', label: 'Science Lab',         desc: 'Advanced workspaces for Physics, Chemistry, and Biology experiments.',          bg: '#FFF8F6', border: '#FFCFC4' },
  { emoji: '🛡️', label: 'Safety Protocols',    desc: 'Comprehensive safety measures, ventilation, and emergency first-aid stations.', bg: '#EEF3FB', border: '#B8CFF0' },
  { emoji: '🧭', label: 'Inquiry Guided',       desc: 'Experiment-driven coursework that promotes observation and critical deduction.', bg: '#FFFBEE', border: '#F5DFA0' },
  { emoji: '💡', label: 'Digital Integration',  desc: 'Modern IT hardware to support computational research and database access.',      bg: '#F0FAF4', border: '#A8DDB8' },
]

const labCols = [
  {
    title: 'Integrated Science Lab', icon: Beaker,
    bg: '#FFF8F6', border: '#FFCFC4', iconColor: '#FF6347', dotColor: '#FF6347', dividerColor: '#FFCFC4',
    items: ['Microscopes & Slides', 'Chemical Reagents & Apparatus', 'Specimens & Biological Models', 'Physics Optics & Electric Kits', 'Weighing Scales & Measurement Tools', 'Laboratory Assistants always present']
  },
  {
    title: 'Computer & Language Lab', icon: Cpu,
    bg: '#EEF3FB', border: '#B8CFF0', iconColor: '#1a3a6b', dotColor: '#1a3a6b', dividerColor: '#B8CFF0',
    items: ['High-speed Internet & Networked PCs', 'Modern Operating Systems & Software', 'Language Learning interactive tools', 'Programming platforms (Python, Scratch)', 'Power backup & safe computer tables', 'Digital reference library tools']
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

export default function Labs() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Helmet>
        <title>Science & Computer Laboratories - Brindavan Schools</title>
        <meta name="description" content="Explore our advanced Science and Computer Laboratories supporting hands-on experimentation and digital literacy." />
      </Helmet>

      <PageHero
        title="Laboratories"
        subtitle="Advanced Science and Computer labs designed to support hands-on experimentation, curiosity, and research."
        backgroundImage={labsImg} variant="gold" fullOpacity={true} objectPosition="object-center" showOverlay={false}
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="labs-grid">
          <style>{`@media(max-width:768px){.labs-grid{grid-template-columns:1fr!important;}}`}</style>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src={labsRightImg} alt="Science Laboratories" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block', border: '1.5px solid #FFCFC4', boxShadow: '0 16px 48px rgba(255,99,71,0.10)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2, background: '#FFF8F6', borderRadius: '16px', padding: '16px 24px', border: '1.5px solid #FFCFC4', boxShadow: '0 8px 32px rgba(255,99,71,0.10)' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>100%</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Practical Learning</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Experiential Learning</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: '20px' }}>
              Where Scientific Inquiry{' '}<span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Comes to Life</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: '12px' }}>
              At Brindavan School, we believe that science is best learned by doing. Our spacious and fully equipped laboratories provide students with the perfect space to test hypotheses, conduct research, and explore the natural world.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              With dedicated stations for Physics, Chemistry, and Biology, alongside a state-of-the-art Computer Lab, we integrate theory with practice to foster critical thinking and mathematical precision.
            </p>
            {['Fully equipped Physics, Chemistry, and Biology sections', 'Individual workbenches with modern instruments', 'Strict safety protocols and dedicated assistants', 'Computer lab with high-speed internet access', 'Aligned with State Board and competitive exam studies'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}
            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FF6347', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none' }}>
                Schedule a Visit <ArrowRight size={17} />
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
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Lab Highlights</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>Laboratory Features</h2>
            <p style={{ color: '#302f2f', fontSize: '1.2rem' }}>Fostering academic excellence through rigorous investigation</p>
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

      {/* ── Labs Dual Column ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Facilities</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A' }}>Explore Our Facilities</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {labCols.map((col, i) => (
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
            Encouraging the Scientists of Tomorrow
          </h2>
          <p style={{ color: '#302f2f', fontSize: '1.2rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Give your child access to spacious, safe, and modern laboratory resources that turn questions into direct understanding.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{ border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}