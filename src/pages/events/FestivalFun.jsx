import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../../components/PageHero'

const FESTIVALS = [
  { id: 'krishnastami', title: 'Krishnashtami', subtitle: 'Joyful Celebration', image: '/src/assets/krishnaastami/k1.png', accentDark: '#1E40AF', bgDown: '#EFF6FF', description: 'Celebrating the birth of Lord Krishna with devotion, dance, dahi-handi, and joyful festivities that unite the school community.', gallery: ['/src/assets/krishnaastami/k1.png', '/src/assets/krishnaastami/k2.png', '/src/assets/krishnaastami/k3.png', '/src/assets/krishnaastami/k4.png', '/src/assets/krishnaastami/k5.png', '/src/assets/krishnaastami/k6.png'] },
  { id: 'ayudhapuja', title: 'Ayudha Puja', subtitle: 'Festive Worship', image: '/src/assets/Ayudhapuja/a1.png', accentDark: '#B45309', bgDown: '#FEF3C7', description: 'Honouring tools, books, and instruments with reverence during Ayudha Puja — a celebration of knowledge, skill, and gratitude.', gallery: ['/src/assets/Ayudhapuja/a1.png', '/src/assets/Ayudhapuja/a2.png', '/src/assets/Ayudhapuja/a3.png', '/src/assets/Ayudhapuja/a4.png'] },
  { id: 'diwali', title: 'Diwali', subtitle: 'Festival of Lights', image: '/src/assets/Diwali/d1.png', accentDark: '#C2410C', bgDown: '#FFEDD5', description: 'The festival of lights celebrated with diyas, rangoli, sweets, and cultural performances that radiate warmth and togetherness.', gallery: ['/src/assets/Diwali/d1.png', '/src/assets/Diwali/d2.png', '/src/assets/Diwali/d3.png', '/src/assets/Diwali/d4.png'] },
  { id: 'christmas', title: 'Christmas', subtitle: 'Season of Joy', image: '/src/assets/Christmas/c1.png', accentDark: '#065F46', bgDown: '#E6F4EA', description: 'Spreading the spirit of Christmas with carol singing, Secret Santa, star-making, and heartfelt celebrations of love and giving.', gallery: ['/src/assets/Christmas/c1.png', '/src/assets/Christmas/c2.png', '/src/assets/Christmas/c3.png', '/src/assets/Christmas/c4.png'] },
  { id: 'vasanthapanchami', title: 'Vasantha Panchami', subtitle: 'Spring Festival', image: '/src/assets/Vasanthapanchami/v1.png', accentDark: '#065F46', bgDown: '#F0FDF4', description: 'Welcoming spring and honouring Goddess Saraswati — the deity of learning — with prayers, yellow attire, and cultural programmes.', gallery: ['/src/assets/Vasanthapanchami/v1.png', '/src/assets/Vasanthapanchami/v2.png', '/src/assets/Vasanthapanchami/v3.png', '/src/assets/Vasanthapanchami/v4.png'] },
  { id: 'ugadi', title: 'Ugadi', subtitle: 'Telugu New Year', image: '/src/assets/Ugadi/u1.png', accentDark: '#15803D', bgDown: '#ECFDF5', description: 'Ringing in the Telugu New Year with traditional Ugadi pachadi, cultural performances, and colourful decorations full of hope.', gallery: ['/src/assets/Ugadi/u1.png', '/src/assets/Ugadi/u2.png', '/src/assets/Ugadi/u3.png', '/src/assets/Ugadi/u4.png'] },
  { id: 'ramzan', title: 'Ramzan', subtitle: 'Month of Blessings', image: '/src/assets/Ramzan/r1.png', accentDark: '#5B21B6', bgDown: '#F3E8FF', description: 'Celebrating the spirit of Ramzan with shared iftars, prayers, and inclusive activities that foster respect and unity among students.', gallery: ['/src/assets/Ramzan/r1.png', '/src/assets/Ramzan/r2.png', '/src/assets/Ramzan/r3.png'] },
  { id: 'milad-un-nabi', title: 'Milad Un Nabi', subtitle: "Prophet's Birthday", image: '/src/assets/Milad un nabi/m1.png', accentDark: '#0E7490', bgDown: '#E0F2FE', description: "Commemorating the birthday of Prophet Muhammad with prayers, poetry, and programmes that spread messages of peace and compassion.", gallery: ['/src/assets/Milad un nabi/m1.png', '/src/assets/Milad un nabi/m2.png', '/src/assets/Milad un nabi/m3.png', '/src/assets/Milad un nabi/m4.png', '/src/assets/Milad un nabi/m5.png', '/src/assets/Milad un nabi/m6.png', '/src/assets/Milad un nabi/m7.png'] },
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

function FestivalCard({ item, onClick }) {
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
        <button onClick={onBack} style={{ background: '#fff', border: '1.5px solid #e0e0e0', color: '#011E3A', padding: '10px 22px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>← Back to Festivals</button>
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

export default function FestivalFun() {
  const [selected, setSelected] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {selected ? (
        <GalleryView item={selected} onBack={() => setSelected(null)} onLightbox={setLightbox} />
      ) : (
        <>
          <PageHero title="Festival Fun" subtitle="Celebrating every festival with colour, culture, and community — because every tradition deserves to be honoured and shared." variant="pink" backgroundImage="/images/gallery/overview.png" />

          {/* Split intro */}
          <section style={{ background: '#fff', padding: '80px 0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="ff-split">
              <style>{`@media(max-width:768px){.ff-split{grid-template-columns:1fr!important;}}`}</style>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
                <img src="/src/assets/Diwali/d1.png" alt="Festivals at Brindavan" onError={e => { e.currentTarget.src = '/images/gallery/overview.png' }}
                  style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 20, display: 'block', border: '1px solid #f0f0f0', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }} />
                <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 2, background: '#fff', borderRadius: 16, padding: '16px 24px', border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>8+</div>
                  <div style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>Festivals Celebrated</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Celebrating Together</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', lineHeight: 1.2, marginBottom: 20 }}>
                  Every Culture,{' '}
                  <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Every Tradition</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: 12 }}>
                  At Brindavan, we celebrate all festivals with equal enthusiasm, fostering a deep sense of inclusivity and cultural appreciation among our students.
                </p>
                <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: 28 }}>
                  From Diwali diyas to Christmas carols, from Krishnashtami dahi-handi to Ugadi pachadi — every celebration is a learning experience.
                </p>
                {['Hindu, Islamic, and Christian festivals celebrated together', 'Cultural performances and traditional dress days', 'Craft activities tied to each festival theme', 'Community sharing and peer learning', 'Building respect for all religions and traditions'].map((point, i) => (
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
                  <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>All Celebrations</span>
                  <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: 10 }}>Our Festival Celebrations</h2>
                <p style={{ color: '#666', fontSize: '1rem' }}>Click any festival to explore the full gallery</p>
              </motion.div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {FESTIVALS.map((item, i) => (
                  <motion.div key={item.id} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
                    <FestivalCard item={item} onClick={() => setSelected(item)} />
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
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: 14, lineHeight: 1.25 }}>Be Part of Our Vibrant Community</h2>
              <p style={{ color: '#555', fontSize: '1rem', marginBottom: 36, lineHeight: 1.75 }}>Join Brindavan School and let your child experience a rich, inclusive cultural life where every tradition is celebrated with joy.</p>
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