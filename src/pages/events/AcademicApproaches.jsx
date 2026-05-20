import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../../components/PageHero'

// 4-color palette rotation matching the reference pages
const PALETTE = [
  { bg: '#FFF8F6', border: 'rgba(255,207,196,0.6)', accentColor: '#FF6347', iconBg: '#FFF0EC', badgeBg: '#FF6347' },
  { bg: '#EEF3FB', border: 'rgba(184,207,240,0.6)', accentColor: '#1a3a6b', iconBg: '#E4EDFA', badgeBg: '#1a3a6b' },
  { bg: '#FFFBEE', border: 'rgba(245,223,160,0.6)', accentColor: '#B8860B', iconBg: '#FFF5D6', badgeBg: '#B8860B' },
  { bg: '#F0FAF4', border: 'rgba(168,221,184,0.6)', accentColor: '#2E7D4F', iconBg: '#E2F5EA', badgeBg: '#2E7D4F' },
]

const ACADEMICS = [
  {
    id: 'abacus',
    title: 'Abacus',
    subtitle: 'Mental Mathematics',
    image: '/src/assets/ABACUS/AB1.png',
    description: 'Enhancing concentration, spatial memory, and lightning-fast arithmetic through structured bead-counting systems.',
    gallery: [
      '/src/assets/ABACUS/AB1.png',
      '/src/assets/ABACUS/AB2.png',
      '/src/assets/ABACUS/AB3.png',
      '/src/assets/ABACUS/AB4.png',
      '/src/assets/ABACUS/AB5.png',
    ],
  },
  {
    id: 'dpt',
    title: 'DPT',
    subtitle: 'Development Programme',
    image: '/src/assets/DPT.jpeg',
    description: 'Building cognitive abilities, logical analysis, personality development, and public confidence frameworks.',
    gallery: [],
  },
  {
    id: 'iit-neet',
    title: 'IIT – NEET',
    subtitle: 'Competitive Foundation',
    image: '/src/assets/IIT NEET/IITHERO.png',
    description: 'Advanced concept frameworks targeting Olympiads, foundational engineering, and medical track preparation.',
    gallery: [
      '/src/assets/IIT NEET/IIT1.png',
      '/src/assets/IIT NEET/IIT2.png',
      '/src/assets/IIT NEET/IIT3.png',
      '/src/assets/IIT NEET/IIT4.png',
    ],
  },
  {
    id: 'science-lab',
    title: 'Science Lab',
    subtitle: 'Practical Experiments',
    image: '/src/assets/Sciencelab/S1.png',
    description: 'Hands-on chemical, physical, and bio experiments transforming dry theory into physical realizations.',
    gallery: [
      '/src/assets/Sciencelab/S1.png',
      '/src/assets/Sciencelab/S2.png',
      '/src/assets/Sciencelab/S3.png',
      '/src/assets/Sciencelab/S4.png',
      '/src/assets/Sciencelab/S5.png',
    ],
  },
  {
    id: 'biological-trips',
    title: 'Biological Trips',
    subtitle: 'Nature Study',
    image: '/src/assets/Biologicaltrips/B1.png',
    description: 'Exploration of local ecosystems and biological diversity in natural habitats.',
    gallery: [
      '/src/assets/Biologicaltrips/B1.png',
      '/src/assets/Biologicaltrips/B2.png',
      '/src/assets/Biologicaltrips/B3.png',
      '/src/assets/Biologicaltrips/B4.png',
      '/src/assets/Biologicaltrips/B5.png',
      '/src/assets/Biologicaltrips/B6.png',
      '/src/assets/Biologicaltrips/B7.png',
    ],
  },
  {
    id: 'omr',
    title: 'OMR Evaluation',
    subtitle: 'Assessment Systems',
    image: '/src/assets/OMR/M1.png',
    description: 'Familiarising pupils with modern competitive testing via automated diagnostic examinations.',
    gallery: [
      '/src/assets/OMR/M1.png',
      '/src/assets/OMR/M2.png',
      '/src/assets/OMR/M3.png',
      '/src/assets/OMR/M4.png',
      '/src/assets/OMR/M5.png',
    ],
  },
  {
    id: 'language-lab',
    title: 'Language Lab',
    subtitle: 'Communication Skills',
    image: '/src/assets/Languagelab/L1.png',
    description: 'Digital audio-linguistic tools to perfect phonetics, conversational fluency, and speech clarity.',
    gallery: [
      '/src/assets/Languagelab/L1.png',
      '/src/assets/Languagelab/L2.png',
      '/src/assets/Languagelab/L3.png',
      '/src/assets/Languagelab/L4.png',
      '/src/assets/Languagelab/L5.png',
    ],
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    subtitle: 'Digital Literacy',
    image: '/src/assets/computerlab/c1.png',
    description: 'Programming fundamentals, AI applications, web logic, and technology-driven learning models.',
    gallery: [
      '/src/assets/computerlab/c1.png',
      '/src/assets/computerlab/c2.png',
      '/src/assets/computerlab/c3.png',
      '/src/assets/computerlab/c4.png',
      '/src/assets/computerlab/c5.png',
    ],
  },
  {
    id: 'csp',
    title: 'CSP',
    subtitle: 'Community Activity',
    image: '/src/assets/CSP/CSp1.png',
    description: 'Community Service Projects moulding societal empathy, civic awareness, and cooperative peer responsibility.',
    gallery: [
      '/src/assets/CSP/CSP1.png',
      '/src/assets/CSP/CSP2.png',
      '/src/assets/CSP/CSP3.png',
      '/src/assets/CSP/CSP4.png',
      '/src/assets/CSP/CSP5.png',
    ],
  },
  {
    id: 'field-trip',
    title: 'Field Trips',
    subtitle: 'Experiential Outings',
    image: '/src/assets/Field trips/F1.png',
    description: 'Guided environmental and factory tours bridging indoor curriculum with real-world execution.',
    gallery: [
      '/src/assets/Field trips/F1.png',
      '/src/assets/Field trips/F2.png',
      '/src/assets/Field trips/f3.png',
      '/src/assets/Field trips/f4.png',
      '/src/assets/Field trips/f5.png',
      '/src/assets/Field trips/f6.png',
      '/src/assets/Field trips/f7.png',
    ],
  },
]

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4 flex flex-col gap-[5px]">
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
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
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
        style={{
          position: 'absolute', top: 24, right: 24,
          background: 'none', border: 'none',
          color: '#fff', fontSize: 36, cursor: 'pointer', lineHeight: 1,
        }}
      >×</button>
      <img
        src={image}
        alt="Enlarged view"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
      />
    </div>
  )
}

function AcademicCard({ item, palette, onClick }) {
  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      role="button"
      tabIndex={0}
      whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(0,0,0,0.10)` }}
      style={{
        background: palette.bg,
        borderRadius: 18,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${palette.border}`,
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '62%', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Subtitle badge */}
        <span style={{
          position: 'absolute', top: 14, left: 14,
          background: palette.bg,
          backdropFilter: 'blur(4px)',
          padding: '5px 12px', borderRadius: 40,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: palette.accentColor,
          border: `1px solid ${palette.border}`,
          fontFamily: "'DM Sans', sans-serif",
        }}>{item.subtitle}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.15rem', fontWeight: 700,
          color: '#011E3A', marginBottom: 8,
        }}>{item.title}</h3>
        <p style={{
          color: '#555', fontSize: '0.88rem',
          lineHeight: 1.65, flexGrow: 1,
          fontFamily: "'DM Sans', sans-serif",
          margin: 0,
        }}>{item.description}</p>
        <div style={{ marginTop: 16, height: 2, width: 32, background: palette.accentColor, borderRadius: 4 }} />
        <div style={{
          marginTop: 12,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: palette.accentColor,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          View Gallery
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
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
      {/* Hero-style header — no extra white gap, flush to top */}
      <div style={{
        background: palette.bg,
        borderBottom: `2px solid ${palette.border}`,
        padding: '40px 24px 32px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <button
            onClick={onBack}
            style={{
              background: '#fff', border: `1.5px solid ${palette.border}`,
              color: '#011E3A', padding: '10px 22px', borderRadius: 50,
              fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 24,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← Back to Frameworks
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ height: 1, width: 24, background: palette.accentColor, display: 'inline-block' }} />
            <span style={{
              color: palette.accentColor, fontWeight: 600,
              fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase',
            }}>{item.subtitle}</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 4vw, 38px)',
            color: '#011E3A', fontWeight: 700, marginBottom: 6,
          }}>{item.title}</h1>
          <p style={{ color: '#666', fontSize: 14 }}>{item.gallery.length} images in this collection</p>
        </div>
      </div>

      <ClearDivider />

      {/* Gallery grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        {item.gallery.length > 0 ? (
          <div style={{ columns: '3 280px', columnGap: '1.25rem' }}>
            {item.gallery.map((src, i) => (
              <div
                key={i}
                onClick={() => onLightbox(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onLightbox(src) }}
                aria-label={`Open ${item.title} image ${i + 1}`}
                style={{
                  breakInside: 'avoid', marginBottom: '1.25rem',
                  borderRadius: 14, overflow: 'hidden',
                  border: `1px solid ${palette.border}`,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <img
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.minHeight = '120px'
                    e.target.parentNode.style.background = '#f0f0f0'
                  }}
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
            <p>Gallery images are currently being compiled.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AcademicApproach() {
  const [selected, setSelected] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  // Find palette for selected item
  const selectedPalette = selected
    ? PALETTE[ACADEMICS.findIndex((a) => a.id === selected.id) % PALETTE.length]
    : null

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
            backgroundImage="/images/gallery/overview.png"
          />

          {/* ── Intro Split ── */}
          <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
            <div
              style={{
                maxWidth: 1200, margin: '0 auto', padding: '0 24px',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 60, alignItems: 'center',
              }}
              className="aa-split"
            >
              <style>{`@media(max-width:768px){.aa-split{grid-template-columns:1fr!important;}}`}</style>

              <motion.div
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                style={{ position: 'relative' }}
              >
                <img
                  src="/src/assets/ABACUS/AB6.png"
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
                  border: '1.5px solid #FFCFC4',
                  boxShadow: '0 8px 32px rgba(255,99,71,0.10)',
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
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: 20,
                }}>
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
                  <Link
                    to="/admissions"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#FF6347', color: '#fff', fontWeight: 600,
                      fontSize: '0.95rem', padding: '13px 28px', borderRadius: 50,
                      textDecoration: 'none',
                    }}
                  >
                    Explore Admissions <ArrowRight size={17} />
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      border: '1.5px solid #FFCFC4', color: '#011E3A',
                      fontWeight: 600, fontSize: '0.95rem', padding: '13px 28px',
                      borderRadius: 50, textDecoration: 'none',
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <ClearDivider />

          {/* ── Cards Grid ── */}
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
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 700, color: '#011E3A', marginBottom: 10,
                }}>Academic Framework & Curriculum</h2>
                <p style={{ color: '#666', fontSize: '1.2rem' }}>Click any programme to explore the full gallery</p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {ACADEMICS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <AcademicCard
                      item={item}
                      palette={PALETTE[i % PALETTE.length]}
                      onClick={() => setSelected(item)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <ClearDivider />

          {/* ── CTA ── */}
          <section style={{ padding: '80px 24px', background: '#FFFFFF', textAlign: 'center' }}>
            <div style={{
              maxWidth: 680, margin: '0 auto',
              background: '#FFF8F6',
              border: '1.5px solid #FFCFC4',
              boxShadow: '0 4px 32px rgba(255,99,71,0.08)',
              padding: '60px 40px', borderRadius: 24,
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                fontWeight: 700, color: '#011E3A', marginBottom: 14, lineHeight: 1.25,
              }}>
                Enrol in a Future-Ready Curriculum
              </h2>
              <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: 36, lineHeight: 1.75 }}>
                Give your child access to structured, innovative academic frameworks that go far beyond conventional schooling.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/admissions"
                  style={{
                    background: '#FF6347', color: '#fff', fontWeight: 700,
                    fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                >
                  Apply Now <ArrowRight size={17} />
                </Link>
                <Link
                  to="/contact"
                  style={{
                    border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff',
                    fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px',
                    borderRadius: 50, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                >
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