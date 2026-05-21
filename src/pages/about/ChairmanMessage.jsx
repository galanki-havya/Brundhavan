import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { ArrowRight, Quote, GraduationCap } from 'lucide-react'

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

const chairman = {
  image: '/images/gallery/Chairman.png',
  name: 'S. Chandra Sekhar',
  title: 'Chairman, Brindavan School',
  credentials: [
    { icon: GraduationCap, text: 'M.Sc. Physics, S.V. University' },
  ],
  message: "S. Chandra Sekhar is the Chairman of Brindavan School, bringing over eight years of extensive experience in the education sector. He holds an M.Sc. in Physics from S.V. University and has served in a variety of educational roles, including Physical Science Teacher, IIT Physics Faculty, High School In-Charge, and Vice Principal. Throughout his career, Mr. Sekhar has demonstrated a commitment to academic excellence, innovative teaching methods, and holistic student development. His leadership at Brindavan School is driven by a vision to cultivate both intellectual growth and personal character in students.",
  quote: "Cultivating both intellectual growth and personal character — this is the promise we make to every child who walks through our doors.",
}

export default function ChairmanMessage() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .chairman-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
        }
        .chairman-photo-col {
          position: relative;
          background: #011E3A;
          min-height: 420px;
        }
        .chairman-msg-col {
          padding: 36px 38px;
          display: flex;
          flex-direction: column;
        }
        .cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .chairman-grid {
            grid-template-columns: 1fr;
          }
          .chairman-photo-col {
            min-height: 320px;
            max-height: 380px;
          }
          .chairman-msg-col {
            padding: 24px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          .cta-buttons a {
            justify-content: center !important;
          }
          .quote-section {
            padding: 48px 20px !important;
          }
          .cta-section {
            padding: 48px 16px !important;
          }
          .cta-inner {
            padding: 40px 24px !important;
          }
          .section1 {
            padding: 40px 16px 52px !important;
          }
        }
      `}</style>

      <PageHero
        title="Chairman's Message"
        subtitle="Visionary guidance shaping the future of Brindavan School."
        backgroundImage="/images/gallery/faculty.png"
        variant="pink"
      />

      {/* ── SECTION 1: Chairman Card ── */}
      <section className="section1" style={{ padding: '64px 24px 72px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '36px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 10, letterSpacing: '3.5px', textTransform: 'uppercase' }}>From Our Leader</span>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
              fontWeight: 700, color: '#011E3A', margin: 0, lineHeight: 1.2,
            }}>
              Chairman's <span style={{ fontWeight: 400, fontStyle: 'italic', color: '#FF6347' }}>Message</span>
            </h2>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E8EDF2',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 32px rgba(1,30,58,0.08)',
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #FF6347, #f5a623, #011E3A)' }} />

            <div className="chairman-grid">

              {/* LEFT: Full-bleed HD photo */}
              <div className="chairman-photo-col">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'top center',
                  }}
                />
                {/* Subtle bottom fade only for name legibility */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(1,30,58,0.88) 0%, rgba(1,30,58,0.15) 40%, transparent 65%)',
                }} />

                {/* Credential pill — top */}
                <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2 }}>
                  {chairman.credentials.map((cred, i) => (
                    <div key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      background: 'rgba(1,30,58,0.68)',
                      border: '1px solid rgba(255,99,71,0.4)',
                      borderRadius: '7px',
                      padding: '5px 11px',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <cred.icon size={12} style={{ color: '#FF9B85', flexShrink: 0 }} />
                      <span style={{ color: '#FFD5C8', fontSize: '10px', fontWeight: 500 }}>{cred.text}</span>
                    </div>
                  ))}
                </div>

                {/* Name plate — bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px', zIndex: 2 }}>
                  <div style={{ width: 28, height: 2, background: '#FF6347', borderRadius: 2, marginBottom: 10 }} />
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700,
                    margin: '0 0 4px', lineHeight: 1.2,
                  }}>{chairman.name}</p>
                  <p style={{ color: '#FF9B85', fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
                    {chairman.title}
                  </p>
                </div>
              </div>

              {/* RIGHT: Message */}
              <motion.div
                className="chairman-msg-col"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '80px', lineHeight: 1,
                  color: 'rgba(255,99,71,0.1)',
                  marginBottom: '-16px', marginLeft: '-4px',
                  userSelect: 'none',
                }}>"</div>

                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(0.9rem, 2vw, 0.97rem)',
                  color: '#1C2B3A',
                  lineHeight: 1.9, margin: 0, textAlign: 'justify',
                }}>
                  {chairman.message}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── SECTION 2: Quote ── */}
      <section className="quote-section" style={{ padding: '72px 24px', background: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our Vision</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <Quote size={36} style={{ color: '#FF6347', opacity: 0.3, margin: '0 auto 14px', display: 'block' }} />
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.15rem, 4vw, 1.9rem)',
              fontStyle: 'italic', color: '#011E3A',
              lineHeight: 1.65, margin: '0 0 22px',
            }}>
              "{chairman.quote}"
            </p>
            <div style={{ width: '36px', height: '2px', background: '#FF6347', borderRadius: '2px', margin: '0 auto 16px' }} />
            <p style={{ color: '#555', fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
              S. Chandra Sekhar — Chairman, Brindavan School
            </p>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── SECTION 3: CTA ── */}
      <section className="cta-section" style={{ padding: '80px 24px', background: '#F9FAFB', textAlign: 'center' }}>
        <div
          className="cta-inner"
          style={{
            maxWidth: '680px', margin: '0 auto',
            background: '#FFF8F6',
            border: '1.5px solid #FFCFC4',
            boxShadow: '0 4px 32px rgba(255,99,71,0.08)',
            padding: '60px 40px', borderRadius: '24px',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25,
          }}>Join the Brindavan Legacy</h2>
          <p style={{ color: '#302f2f', fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', marginBottom: '36px', lineHeight: 1.75 }}>
            Start your child's journey in an institution built on vision, values, and a commitment to excellence.
          </p>
          <div className="cta-buttons">
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              boxShadow: '0 4px 16px rgba(255,99,71,0.28)',
            }}>
              Start Your Child's Journey <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff',
              fontWeight: 600, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}