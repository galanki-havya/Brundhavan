import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../../components/PageHero'

const COMMUNICATION = [
  { id: 'assembly', title: 'Assembly', subtitle: 'Morning Assembly', image: '/src/assets/ASSEMBLY/AS1.png', accentDark: '#1E40AF', bgDown: '#EFF6FF', description: 'Daily morning assemblies cultivating discipline, national pride, thought of the day, and confident public expression before peers.', gallery: ['/src/assets/ASSEMBLY/AS1.png', '/src/assets/ASSEMBLY/AS2.png', '/src/assets/ASSEMBLY/AS3.png', '/src/assets/ASSEMBLY/AS4.png', '/src/assets/ASSEMBLY/AS5.png', '/src/assets/ASSEMBLY/AS6.png', '/src/assets/ASSEMBLY/AS7.png'] },
  { id: 'seminor', title: 'Senior Programmes', subtitle: 'Senior Leadership', image: '/src/assets/SEMINOR/S1.png', accentDark: '#065F46', bgDown: '#E6F4EA', description: 'Advanced public speaking, debate, elocution, and leadership forums designed for senior students to master articulate communication.', gallery: ['/src/assets/SEMINOR/S1.png', '/src/assets/SEMINOR/S2.png', '/src/assets/SEMINOR/S3.png', '/src/assets/SEMINOR/S4.png', '/src/assets/SEMINOR/S5.png', '/src/assets/SEMINOR/S6.png', '/src/assets/SEMINOR/S7.png'] },
]

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey) }
  }, [image, onClose])
  if (!image) return null
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, background: 'rgba(1,30,58,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '2rem' }}>
      <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 36, cursor: 'pointer', lineHeight: 1 }}>×</button>
      <img src={image} alt="Enlarged view" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }} />
    </div>
  )
}

function ProgramCard({ item, onClick }) {
  return (
    <motion.article
      initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
      onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      role="button" tabIndex={0}
      whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
      style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${item.accentDark}, #FF6347)`, zIndex: 1 }} />
      <div style={{ position: 'relative', width: '100%', paddingTop: '62%', overflow: 'hidden', background: item.bgDown }}>
        <img src={item.image} alt={item.title} loading="lazy" onError={(e) => { e.target.style.display = 'none' }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <span style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', padding: '5px 12px', borderRadius: 40, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: item.accentDark, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', zIndex: 2, fontFamily: "'DM Sans', sans-serif" }}>{item.subtitle}</span>
      </div>
      <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: item.bgDown }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: 8 }}>{item.title}</h3>
        <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.65, flexGrow: 1, fontFamily: "'DM Sans', sans-serif" }}>{item.description}</p>
        <div style={{ marginTop: 18, height: 2, width: 36, background: item.accentDark, borderRadius: 4 }} />
        <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.accentDark, fontFamily: "'DM Sans', sans-serif" }}>
          View Gallery
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </div>
      </div>
    </motion.article>
  )
}

function GalleryView({ item, onBack, onLightbox }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])
  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ padding: '56px 24px 32px', borderBottom: '1px solid #f0f0f0', maxWidth: 1200, margin: '0 auto' }}>
        <button onClick={onBack} style={{ background: '#fff', border: '1.5px solid #e0e0e0', color: '#011E3A', padding: '10px 22px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>← Back to Programmes</button>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ height: 1, width: 24, background: item.accentDark, display: 'inline-block' }} />
          <span style={{ color: item.accentDark, fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>{item.subtitle}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 38px)', color: '#011E3A', fontWeight: 700 }}>{item.title} Gallery</h1>
        <p style={{ color: '#666', fontSize: 14, marginTop: 4 }}>{item.gallery.length} images in this collection</p>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        {item.gallery.length > 0 ? (
          <div style={{ columns: '3 280px', columnGap: '1.5rem' }}>
            {item.gallery.map((src, i) => (
              <div key={i} onClick={() => onLightbox(src)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onLightbox(src) }}
                style={{ breakInside: 'avoid', marginBottom: '1.5rem', borderRadius: 14, overflow: 'hidden', border: `1.5px solid ${item.bgDown}`, cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <img src={src} alt={`${item.title} ${i + 1}`} loading="lazy" onError={(e) => { e.target.style.display = 'none' }} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: '#888' }}><p>Gallery images are currently being compiled.</p></div>
        )}
      </div>
    </div>
  )
}

export default function CommunicationPublicSpeaking() {
  const [selected, setSelected] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {selected ? (
        <GalleryView item={selected} onBack={() => setSelected(null)} onLightbox={setLightbox} />
      ) : (
        <>
          <PageHero title="Communication & Public Speaking" subtitle="Empowering every student with the voice, confidence, and clarity to lead, inspire, and articulate ideas that matter." variant="pink" backgroundImage="/images/gallery/overview.png" />

          {/* Split intro */}
          <section style={{ background: '#fff', padding: '80px 0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="ps-split">
              <style>{`@media(max-width:768px){.ps-split{grid-template-columns:1fr!important;}}`}</style>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
                <img src="/src/assets/ASSEMBLY/AS1.png" alt="Communication at Brindavan" onError={e => { e.currentTarget.src = '/images/gallery/overview.png' }}
                  style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 20, display: 'block', border: '1px solid #f0f0f0', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }} />
                <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 2, background: '#fff', borderRadius: 16, padding: '16px 24px', border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>Daily</div>
                  <div style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>Morning Assembly</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Voice & Expression</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: 20 }}>
                  Finding Their{' '}
                  <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Voice with Confidence</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: 12 }}>
                  Communication is the cornerstone of leadership. At Brindavan, every student is given structured opportunities to speak, present, and engage — from morning assembly to senior debate forums.
                </p>
                <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: 28 }}>
                  We believe that a confident voice opens doors. Our programmes are designed to build clarity, courage, and conviction.
                </p>
                {['Daily morning assemblies with thought of the day', 'Public speaking and elocution workshops', 'Debate and leadership forums for seniors', 'Structured presentation and stage experience', 'National pride and civic awareness activities'].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14, fontSize: '0.95rem', color: '#222' }}>
                    <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: 2 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Cards */}
          <section style={{ padding: '0 0 80px' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Programmes</span>
                  <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: 10 }}>Communication Programmes</h2>
                <p style={{ color: '#666', fontSize: '1rem' }}>Click any programme to explore the full gallery</p>
              </motion.div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {COMMUNICATION.map((item, i) => (
                  <motion.div key={item.id} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                    <ProgramCard item={item} onClick={() => setSelected(item)} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '0 24px 80px', textAlign: 'center' }}>
            <div style={{ maxWidth: 680, margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: 24 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
                <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: 14, lineHeight: 1.25 }}>Help Your Child Find Their Voice</h2>
              <p style={{ color: '#555', fontSize: '1rem', marginBottom: 36, lineHeight: 1.75 }}>Enrol at Brindavan and give your child the platform to speak with confidence, lead with clarity, and inspire with purpose.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/admissions" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Apply Now <ArrowRight size={17} /></Link>
                <Link to="/contact" style={{ border: '1.5px solid #e0e0e0', color: '#011E3A', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Contact Us</Link>
              </div>
            </div>
          </section>
        </>
      )}
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  )
}