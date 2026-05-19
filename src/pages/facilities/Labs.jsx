import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { 
  Beaker, 
  Shield, 
  Compass, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Microscope,
  FlaskConical,
  Dna,
  Atom,
  Scale,
  UserCheck,
  Wifi,
  Cpu,
  Languages,
  Code,
  BatteryCharging,
  Library
} from 'lucide-react'
import labsImg from '../../assets/Facilties/2.jpg'
import labsRightImg from '../../assets/rightimages/2.jpg'

const getLabItemIcon = (name) => {
  const n = name.toLowerCase()
  if (n.includes('microscope')) return Microscope
  if (n.includes('chemical') || n.includes('reagent')) return FlaskConical
  if (n.includes('specimen') || n.includes('biological')) return Dna
  if (n.includes('physics') || n.includes('optics') || n.includes('electric')) return Atom
  if (n.includes('scale') || n.includes('weighing') || n.includes('measure')) return Scale
  if (n.includes('assistant') || n.includes('staff')) return UserCheck
  
  if (n.includes('internet') || n.includes('network')) return Wifi
  if (n.includes('operating') || n.includes('software')) return Cpu
  if (n.includes('language')) return Languages
  if (n.includes('programming') || n.includes('python')) return Code
  if (n.includes('power') || n.includes('backup')) return BatteryCharging
  if (n.includes('reference') || n.includes('digital library')) return Library

  return Beaker
}

export default function Labs() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      <Helmet>
        <title>Science & Computer Laboratories - Brindavan Schools</title>
        <meta name="description" content="Explore our advanced Science and Computer Laboratories supporting hands-on experimentation and digital literacy." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <PageHero
        title="Laboratories"
        subtitle="Advanced Science and Computer labs designed to support hands-on experimentation, curiosity, and research."
        backgroundImage={labsImg}
        variant="gold"
        fullOpacity={true}
        objectPosition="object-center"
        showOverlay={false}
      />


      {/* ── Split Section ── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-x-[60px]">

          {/* Row 1: Badge & Heading */}
          <div className="lg:col-start-2 lg:row-start-1">
            <span style={{ display: 'inline-block', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Experiential Learning</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', lineHeight: 1.2 }}>
              Where Scientific Inquiry{' '}<span style={{ color: '#d4af37' }}>Comes to Life</span>
            </h2>
          </div>

          {/* Row 2: Content (Paragraphs & Checklist) */}
          <div className="lg:col-start-2 lg:row-start-2" style={{ marginTop: '20px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '12px' }}>
              At Brindavan School, we believe that science is best learned by doing. Our spacious and fully equipped laboratories provide students with the perfect space to test hypotheses, conduct research, and explore the natural world.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '28px' }}>
              With dedicated stations for Physics, Chemistry, and Biology, alongside a state-of-the-art Computer Lab, we integrate theory with practice to foster critical thinking and mathematical precision.
            </p>
            {['Fully equipped Physics, Chemistry, and Biology sections', 'Individual workbenches with modern instruments', 'Strict safety protocols and dedicated assistants', 'Computer lab with high-speed internet access', 'Aligned with State Board and competitive exam studies'].map((point, i) => (
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
                src={labsRightImg}
                alt="Science Laboratories"
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
                <div style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', fontFamily: "'DM Sans', sans-serif", letterSpacing: '1px', marginTop: '6px', textTransform: 'uppercase' }}>Practical Learning</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Row 3: Buttons */}
          <div className="lg:col-start-2 lg:row-start-3" style={{ marginTop: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#7C6218', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 6px 24px rgba(124, 98, 24, 0.25)' }}>Schedule a Visit <ArrowRight size={18} /></Link>
              <Link to="/facilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #7C6218', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none' }}>All Facilities</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#fdfcf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Laboratory Features</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem' }}>Fostering academic excellence through rigorous investigation</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: Beaker, title: 'Science Lab', description: 'Advanced workspaces for Physics, Chemistry, and Biology experiments.' },
              { icon: Shield, title: 'Safety Protocols', description: 'Comprehensive safety measures, ventilation, and emergency first-aid stations.' },
              { icon: Compass, title: 'Inquiry Guided', description: 'Experiment-driven coursework that promotes observation and critical deduction.' },
              { icon: Lightbulb, title: 'Digital Integration', description: 'Modern IT hardware to support computational research and database access.' }
            ].map((item, index) => {
              const colors = [
                {
                  bg: '#e6f5f5', // Soft Crisp Teal
                  border: '1.5px solid rgba(0, 128, 128, 0.35)',
                  iconBg: 'linear-gradient(135deg, rgba(0, 128, 128, 0.12), rgba(0, 128, 128, 0.03))',
                  iconBorder: '1.5px solid rgba(0, 128, 128, 0.25)',
                  iconColor: '#008080'
                },
                {
                  bg: '#f4effa', // Soft Lavender Purple
                  border: '1.5px solid rgba(138, 43, 226, 0.35)',
                  iconBg: 'linear-gradient(135deg, rgba(138, 43, 226, 0.12), rgba(138, 43, 226, 0.03))',
                  iconBorder: '1.5px solid rgba(138, 43, 226, 0.25)',
                  iconColor: '#8A2BE2'
                },
                {
                  bg: '#e8f7ee', // Soft Mint Green
                  border: '1.5px solid rgba(30, 130, 76, 0.35)',
                  iconBg: 'linear-gradient(135deg, rgba(30, 130, 76, 0.12), rgba(30, 130, 76, 0.03))',
                  iconBorder: '1.5px solid rgba(30, 130, 76, 0.25)',
                  iconColor: '#1E824C'
                },
                {
                  bg: '#fdf3e7', // Soft Peach Orange
                  border: '1.5px solid rgba(230, 126, 34, 0.35)',
                  iconBg: 'linear-gradient(135deg, rgba(230, 126, 34, 0.12), rgba(230, 126, 34, 0.03))',
                  iconBorder: '1.5px solid rgba(230, 126, 34, 0.25)',
                  iconColor: '#E67E22'
                }
              ][index % 4]

              return (
                <motion.div
                  key={item.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    background: colors.bg,
                    borderRadius: '24px',
                    padding: '32px 28px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    border: colors.border
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '52px',
                      height: '52px',
                      background: colors.iconBg,
                      borderRadius: '16px',
                      marginBottom: '20px',
                      border: colors.iconBorder
                    }}
                  >
                    <item.icon size={24} style={{ color: colors.iconColor }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#7C6218', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Labs Dual Column ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Explore Our Facilities</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>Specialized learning setups built for scientific training and technical skills</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Integrated Science Lab', items: ['Microscopes & Slides', 'Chemical Reagents & Apparatus', 'Specimens & Biological Models', 'Physics Optics & Electric Kits', 'Weighing Scales & Measurement Tools', 'Laboratory Assistants always present'], accent: '#7C6218' },
              { title: 'Computer & Language Lab', items: ['High-speed Internet & Networked PCs', 'Modern Operating Systems & Software', 'Language Learning interactive tools', 'Programming platforms (Python, scratch)', 'Power backup & safe computer tables', 'Digital reference library tools'], accent: '#d4af37' }
            ].map((col, ci) => (
              <motion.div key={col.title} initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '24px', padding: '36px 32px', border: '1.5px solid rgba(212, 175, 55, 0.12)', boxShadow: '0 10px 30px rgba(124, 98, 24, 0.03)' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#7C6218', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${col.accent}`, display: 'inline-block' }}>{col.title}</h3>
                <div style={{ marginTop: '8px' }}>
                  {col.items.map(item => {
                    const ItemIcon = getLabItemIcon(item)
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
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #7C6218 0%, #B8860B 50%, #5C470E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Encouraging the Scientists of Tomorrow</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Give your child access to spacious, safe, and modern laboratory resources that turn questions into direct understanding.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#fff', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}