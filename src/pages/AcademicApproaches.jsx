import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from "../components/PageHero";
// 4-colour brand palette — mirrors Digital / Safety / Admissions / Contact
const PALETTE = [
  { bg: '#FFF8F6', border: '#FFCFC4', accentColor: '#FF6347', iconBg: '#FFF0EC' },
  { bg: '#EEF3FB', border: '#B8CFF0', accentColor: '#1a3a6b', iconBg: '#E4EDFA' },
  { bg: '#FFFBEE', border: '#F5DFA0', accentColor: '#B8860B', iconBg: '#FFF5D6' },
  { bg: '#F0FAF4', border: '#A8DDB8', accentColor: '#2E7D4F', iconBg: '#E2F5EA' },
]

const ACADEMICS = [
  {
    id: 'abacus',
    title: 'Abacus',
    subtitle: 'Mental Mathematics',
    image: '/images/gallery/Infrastructure/7.jpg',
    description: 'Enhancing concentration, spatial memory, and lightning-fast arithmetic through structured bead-counting systems.',
    gallery: [
      '/images/gallery/ABACUS/AB4.png',
      '/images/gallery/ABACUS/AB6.png',
    ],
  },
  
  {
    id: 'iit-neet',
    title: 'IIT - NEET',
    subtitle: 'Competitive Foundation',
    image: '/images/gallery/IIT NEET/IIT2.png',
    description: 'Advanced concept frameworks targeting Olympiads, foundational engineering, and medical track preparation.',
    gallery: [
      '/images/gallery/IIT NEET/IIT1.png',
      '/images/gallery/IIT NEET/IIT3.png',
      '/images/gallery/IIT NEET/IIT4.png',
      '/images/gallery/IIT NEET/IIT5.png',
    ],
  },
  {
    id: 'science-lab',
    title: 'Science Lab',
    subtitle: 'Practical Experiments',
    image: '/images/gallery/Sciencelab/S1.png',
    description: 'Hands-on chemical, physical, and bio experiments transforming dry theory into physical realizations.',
    gallery: [
      '/images/gallery/Sciencelab/S1.png',
      '/images/gallery/Sciencelab/S2.png',
      '/images/gallery/Sciencelab/S3.png',
      '/images/gallery/Sciencelab/S4.png',
      '/images/gallery/Sciencelab/S5.png',
    ],
  },
  {
    id: 'biological-trips',
    title: 'Biological Trips',
    subtitle: 'Nature Study',
    image: '/images/gallery/Biologicaltrips/B1.png',
    description: 'Exploration of local ecosystems and biological diversity in natural habitats.',
    gallery: [
      '/images/gallery/Biologicaltrips/B1.png',
      '/images/gallery/Biologicaltrips/B2.png',
      '/images/gallery/Biologicaltrips/B3.png',
      '/images/gallery/Biologicaltrips/B4.png',
      '/images/gallery/Biologicaltrips/B5.png',

    ],
  },
  {
    id: 'omr',
    title: 'OMR Evaluation',
    subtitle: 'Assessment Systems',
    image: '/images/gallery/omr/M1.png',
    description: 'Familiarising pupils with modern competitive testing via automated diagnostic examinations.',
    gallery: [
      '/images/gallery/omr/M1.png',
      '/images/gallery/omr/M2.png',
      '/images/gallery/omr/M3.png',

    ],
  },
  {
    id: 'language-lab',
    title: 'Language Lab',
    subtitle: 'Communication Skills',
    image: '/images/gallery/Languagelab/L1.png',
    description: 'Digital audio-linguistic tools to perfect phonetics, conversational fluency, and speech clarity.',
    gallery: [
      '/images/gallery/Languagelab/L1.png',
      '/images/gallery/Languagelab/L2.png',
      '/images/gallery/Languagelab/L3.png',
      '/images/gallery/Languagelab/L4.png',
      '/images/gallery/Languagelab/L5.png',
    ],
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    subtitle: 'Digital Literacy',
    image: '/images/gallery/computerlab/c1.png',
    description: 'Programming fundamentals, AI applications, web logic, and technology-driven learning models.',
    gallery: [
      '/images/gallery/computerlab/c1.png',
      '/images/gallery/computerlab/c2.png',
      '/images/gallery/computerlab/c3.png',
      '/images/gallery/computerlab/c4.png',
      '/images/gallery/computerlab/c5.png',
    ],
  },
  {
    id: 'csp',
    title: 'CSP',
    subtitle: 'Community Activity',
    image: '/images/gallery/CSP/CSP1.png',
    description: 'Community Service Projects moulding societal empathy, civic awareness, and cooperative peer responsibility.',
    gallery: [
      '/images/gallery/CSP/CSP1.png',
      '/images/gallery/CSP/CSP3.png',
      '/images/gallery/CSP/CSP4.png',

    ],
  },
  {
    id: 'field-trip',
    title: 'Field Trips',
    subtitle: 'Experiential Outings',
    image: '/images/gallery/Field trips/F1.png',
    description: 'Guided environmental and factory tours bridging indoor curriculum with real-world execution.',
    gallery: [
      '/images/gallery/Field trips/F1.png',
      '/images/gallery/Field trips/F2.png',
      '/images/gallery/Field trips/f3.png',
      '/images/gallery/Field trips/f4.png',
      '/images/gallery/Field trips/f5.png',
      '/images/gallery/Field trips/f6.png',
      '/images/gallery/Field trips/f7.png',
    ],
  },
]

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4">
        <div
          className="h-[3px] w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.25) 10%, rgba(236,115,58,0.85) 40%, #ec733a 50%, rgba(236,115,58,0.85) 60%, rgba(236,115,58,0.25) 90%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [image, onClose])

  if (!image) return null
  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(1,30,58,0.96)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999, padding: '2rem',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 36, cursor: 'pointer', lineHeight: 1 }}
      >x</button>
      <img
        src={image}
        alt="Enlarged view"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
      />
    </div>
  )
}

function AcademicCard({ item, palette, index, onClick }) {
  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      role="button"
      tabIndex={0}
      whileHover={{ y: -6 }}
      style={{
        background: palette.bg,
        borderRadius: 18,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${palette.border}`,
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ position: 'relative', width: '100%', paddingTop: '62%', overflow: 'hidden', background: palette.iconBg }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          background: palette.bg,
          padding: '4px 12px', borderRadius: 40,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: palette.accentColor,
          border: `1px solid ${palette.border}`,
          fontFamily: "'DM Sans', sans-serif",
          zIndex: 2,
        }}>{item.subtitle}</span>
      </div>

      <div style={{ padding: '22px 20px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1.2rem', fontWeight: 700, color: '#011E3A', marginBottom: 8 }}>
          {item.title}
        </h3>
        <p style={{ color: '#302f2f', fontSize: '0.95rem', lineHeight: 1.65, flexGrow: 1, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>
          {item.description}
        </p>
        <div style={{ marginTop: 16, height: 2, width: 28, background: palette.accentColor, borderRadius: 4 }} />
        <div style={{
          marginTop: 10,
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: palette.accentColor, fontFamily: "'DM Sans', sans-serif",
        }}>
          View Gallery
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </motion.article>
  )
}

function GalleryView({ item, palette, onBack, onLightbox }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
      <div style={{ background: palette.bg, borderBottom: `1.5px solid ${palette.border}`, padding: '36px 24px 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <button
            onClick={onBack}
            style={{
              background: '#fff', border: `1.5px solid ${palette.border}`,
              color: '#011E3A', padding: '9px 20px', borderRadius: 50,
              fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Back to Frameworks
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ height: 1, width: 20, background: palette.accentColor, display: 'inline-block' }} />
            <span style={{ color: palette.accentColor, fontWeight: 600, fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase' }}>
              {item.subtitle}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 4vw, 36px)', color: '#011E3A', fontWeight: 700, marginBottom: 4 }}>
            {item.title}
          </h1>
          <p style={{ color: '#302f2f', fontSize: 15 }}>{item.gallery.length} images in this collection</p>
        </div>
      </div>

      <ClearDivider />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 24px 80px' }}>
        {item.gallery.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.2rem'
          }}>
            {item.gallery.map((src, i) => (
              <div
                key={i}
                onClick={() => onLightbox(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onLightbox(src) }}
                aria-label={`Open ${item.title} image ${i + 1}`}
                style={{
                  breakInside: 'avoid', marginBottom: '1.1.2rem',
                  borderRadius: 12, overflow: 'hidden',
                  border: `1px solid ${palette.border}`,
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.09)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)' }}
              >
                <img
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.minHeight = '100px'; e.target.parentNode.style.background = '#f0f0f0' }}
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center', padding: '5rem 0', color: '#888',
            background: palette.bg, borderRadius: 18,
            border: `1px solid ${palette.border}`,
          }}>
            <p style={{ fontSize: 15 }}>Gallery images are currently being compiled.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AcademicApproach() {
  const [selected, setSelected] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const selectedIndex = selected ? ACADEMICS.findIndex((a) => a.id === selected.id) : -1
  const selectedPalette = selectedIndex >= 0 ? PALETTE[selectedIndex % PALETTE.length] : null

  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {selected ? (
        <GalleryView
          item={selected}
          palette={selectedPalette}
          onBack={() => setSelected(null)}
          onLightbox={setLightbox}
        />
      ) : (
        <>
          <PageHero
            title="Academic Frameworks"
            subtitle="Explore student life tracks, practical labs, learning programmes, and structured evaluations."
            variant="pink"
            backgroundImage="/images/gallery/heroforschoollife/academicshero.png"
          />

          <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
            <div
              style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}
              className="aa-split"
            >
              <style>{`@media(max-width:768px){.aa-split{grid-template-columns:1fr!important;}}`}</style>

              <motion.div
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{ position: 'relative' }}
              >
                <img
                  src="/images/gallery/Biologicaltrips/B1.png"
                  alt="Academic Approach"
                  onError={(e) => { e.currentTarget.src = '/images/gallery/overview.png' }}
                  style={{
                    width: '100%', height: 420, objectFit: 'cover',
                    borderRadius: 20, display: 'block',
                    border: '1.5px solid #FFCFC4',
                    boxShadow: '0 16px 48px rgba(255,99,71,0.10)',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: -20, right: -20, zIndex: 2,
                  background: '#FFF8F6', borderRadius: 16, padding: '16px 24px',
                  border: '1.5px solid #FFCFC4', boxShadow: '0 8px 32px rgba(255,99,71,0.10)',
                }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>10+</div>
                  <div style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>Learning Programmes</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our Curriculum</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: 20 }}>
                  Beyond Textbooks,{' '}
                  <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Beyond Boundaries</span>
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: 12 }}>
                  At Brindavan, academic excellence extends well beyond the classroom. Every programme is designed to build real-world skills alongside strong theoretical foundations.
                </p>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.85, marginBottom: 28 }}>
                  From Abacus to IIT-NEET preparation, our structured approach prepares students for life's challenges with confidence.
                </p>
                {[
                  'Abacus-based mental arithmetic training',
                  'IIT-NEET competitive exam foundation',
                  'Hands-on Science and Language Labs',
                  'OMR-based evaluation systems',
                  'Community Service Projects (CSP)',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14, fontSize: '0.95rem', color: '#222' }}>
                    <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: 2 }} />
                    <span>{point}</span>
                  </div>
                ))}
                <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link to="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF6347', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: 50, textDecoration: 'none' }}>
                    Explore Admissions <ArrowRight size={17} />
                  </Link>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1.5px solid #FFCFC4', color: '#011E3A', fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px', borderRadius: 50, textDecoration: 'none' }}>
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <ClearDivider />

          <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: 52 }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Curricular Models</span>
                  <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: 10 }}>
                  Academic Framework & Curriculum
                </h2>
                <p style={{ color: '#302f2f', fontSize: '1.2rem' }}>Click any programme to explore the full gallery</p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '20px' }}>
                {ACADEMICS.map((item, i) => (
                  <AcademicCard
                    key={item.id}
                    item={item}
                    palette={PALETTE[i % PALETTE.length]}
                    index={i}
                    onClick={() => setSelected(item)}
                  />
                ))}
              </div>
            </div>
          </section>

          <ClearDivider />

          <section style={{ padding: '80px 24px', background: '#FFFFFF', textAlign: 'center' }}>
            <div style={{
              maxWidth: 680, margin: '0 auto',
              background: '#FFF8F6', border: '1.5px solid #FFCFC4',
              boxShadow: '0 4px 32px rgba(255,99,71,0.08)',
              padding: '60px 40px', borderRadius: 24,
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: 14, lineHeight: 1.25 }}>
                Enrol in a Future-Ready Curriculum
              </h2>
              <p style={{ color: '#302f2f', fontSize: '1.2rem', marginBottom: 36, lineHeight: 1.75 }}>
                Give your child access to structured, innovative academic frameworks that go far beyond conventional schooling.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/admissions" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Apply Now <ArrowRight size={17} />
                </Link>
                <Link to="/contact" style={{ border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  )
}