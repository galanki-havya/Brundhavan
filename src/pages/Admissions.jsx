import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'
import { CheckCircle2, ArrowRight, FileText, ClipboardList, UserCheck, GraduationCap } from 'lucide-react'

const { admissionSteps, programs, school } = siteData

const stepIcons = [FileText, ClipboardList, UserCheck, GraduationCap]

export default function Admissions() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#fff',
        fontFamily: "'Playfair Display', 'Georgia', serif"
      }}
    >
      <Helmet>
        <title>Admissions - Brindavan School | State Board Admissions 2026</title>
        <meta name="description" content="Apply for admission to Brindavan School, the leading State Board school in Palamaner. Admissions open for 2026-27 with modern facilities and holistic education." />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ── Hero ── */}
      <PageHero
        title="Join Brindavan School"
        subtitle="Admissions open for 2026–27. Begin your child's journey towards excellence today."
        variant="pink"
        backgroundImage="/images/gallery/HouseVisit/5.jpg"
      />

      {/* ── Split Section: Image Left, Text Right ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #ec4899, #f9a8d4)',
                zIndex: 0
              }}
            />
            <img
              src="/images/gallery/HouseVisit/1.jpg"
              alt="Students at Brindavan School"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
                boxShadow: '0 24px 60px rgba(236,72,153,0.2)'
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                zIndex: 2,
                background: '#fff',
                borderRadius: '16px',
                padding: '16px 24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#ec4899', fontFamily: "'Playfair Display', serif" }}>
                2026–27
              </div>
              <div style={{ fontSize: '13px', color: '#6b5c6e', fontWeight: 500 }}>
                Admissions Open
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              style={{
                display: 'inline-block',
                color: '#ec4899',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              Why Brindavan
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a2e',
                lineHeight: 1.2,
                marginBottom: '20px'
              }}
            >
              A School That{' '}
              <span style={{ color: '#ec4899' }}>Shapes Futures</span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1rem',
                color: '#6b5c6e',
                lineHeight: 1.8,
                marginBottom: '28px'
              }}
            >
              Brindavan School blends academic rigour with holistic development — nurturing curious,
              confident, and compassionate young minds. Our State Board curriculum is enriched with
              modern facilities, experienced faculty, and a culture of values.
            </p>

            {[
              'State Board curriculum with holistic enrichment',
              'Experienced and caring teaching faculty',
              'Smart classrooms & modern infrastructure',
              'Strong focus on sports, arts & life skills',
              'Safe, inclusive, and nurturing campus environment'
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  color: '#3d2c40'
                }}
              >
                <CheckCircle2 size={20} style={{ color: '#ec4899', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '32px' }}
            >
              <Link
                to="/admission-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ec4899',
                  color: '#fff',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(236,72,153,0.35)',
                  transition: 'all 0.3s ease'
                }}
              >
                Apply Online Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Stats ── */}
      <section style={{ padding: '64px 0', background: '#fff'}}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { value: '4.9/5', label: 'Trusted by Parents', detail: 'Google review rating for school and admissions support' },
              { value: '24 hrs', label: 'Rapid Response', detail: 'Admission enquiries are answered quickly by our team' },
              { value: 'Values +', label: 'Academics', detail: 'Balanced education with discipline, sports & extracurriculars' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  border: '1px solid #fce7f3',
                  boxShadow: '0 4px 24px rgba(236,72,153,0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: 'linear-gradient(90deg, #ec4899, #f9a8d4)'
                }} />
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#ec4899',
                  marginBottom: '6px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  color: '#1a1a2e',
                  fontSize: '1rem',
                  marginBottom: '8px'
                }}>
                  {item.label}
                </div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.88rem',
                  color: '#6b5c6e',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admission Steps ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <span style={{
              display: 'inline-block', color: '#ec4899',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'
            }}>
              How to Apply
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#1a1a2e', marginBottom: '12px'
            }}>
              Simple 4-Step Process
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>
              From enquiry to enrolment — we've made it easy
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', position: 'relative' }}>
            {admissionSteps.map((step, i) => {
              const Icon = stepIcons[i] || FileText
              return (
                <motion.div
                  key={step.step}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '32px 24px 28px',
                    border: '1.5px solid #fce7f3',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: '0.85rem'
                  }}>
                    {step.step}
                  </div>

                  <div style={{
                    width: '52px', height: '52px',
                    background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1.5px solid #f9a8d4'
                  }}>
                    <Icon size={24} style={{ color: '#ec4899' }} />
                  </div>

                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem', fontWeight: 700,
                    color: '#1a1a2e', marginBottom: '10px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#6b5c6e', fontSize: '0.9rem', lineHeight: 1.7, margin: 0
                  }}>
                    {step.desc}
                  </p>

                  {/* Connector arrow */}
                  {i < admissionSteps.length - 1 && (
                    <div style={{
                      display: 'none',
                      position: 'absolute', top: '50%', right: '-14px',
                      transform: 'translateY(-50%)',
                      color: '#ec4899', fontSize: '1.4rem', zIndex: 10
                    }}
                      className="lg-arrow"
                    >→</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Eligibility Criteria ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <span style={{
              display: 'inline-block', color: '#ec4899',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'
            }}>
              Who Can Apply
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#1a1a2e'
            }}>
              Eligibility Criteria
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {programs.map((prog, i) => (
              <motion.div
                key={prog.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  border: '1px solid #fce7f3',
                  boxShadow: '0 4px 16px rgba(236,72,153,0.07)',
                  display: 'flex', gap: '16px', alignItems: 'flex-start'
                }}
              >
                <div style={{
                  flexShrink: 0, width: '42px', height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ec4899, #f472b6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: '0.9rem'
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1a1a2e', marginBottom: '4px' }}>
                    {prog.level}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#ec4899', fontWeight: 600, marginBottom: '6px' }}>
                    {prog.age}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#6b5c6e', lineHeight: 1.5 }}>
                    Age proof, previous school records, parent ID required at registration.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Documents Required */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1.5px solid #fce7f3',
              boxShadow: '0 4px 24px rgba(236,72,153,0.08)'
            }}
          >
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700,
              color: '#1a1a2e', marginBottom: '24px',
              paddingBottom: '14px',
              borderBottom: '2px solid #ec4899',
              display: 'inline-block'
            }}>
              Documents Required
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginTop: '8px' }}>
              {[
                'Birth Certificate',
                "Child's Aadhaar Card",
                'Previous Academic Records',
                'Transfer Certificate',
                'Parent/Guardian ID Proof',
                'Passport Size Photographs (4)',
                'Residential Address Proof',
                'Medical Fitness Certificate',
                'Caste Certificate (if applicable)',
              ].map(doc => (
                <div
                  key={doc}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem', color: '#3d2c40',
                    padding: '8px 0',
                    borderBottom: '1px solid #fce7f3'
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899', flexShrink: 0 }} />
                  {doc}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Apply Now CTA ── */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              fontWeight: 800, color: '#fff',
              marginBottom: '16px', lineHeight: 1.2
            }}
          >
            Ready to Begin Your Child's Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7
            }}
          >
            Start the admission process today. Fill our official online application form and secure your child's seat at Brindavan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/admission-form"
              style={{
                background: '#fff', color: '#be185d',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: '0.97rem',
                padding: '14px 32px', borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}
            >
              Apply Online <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              style={{
                border: '2px solid rgba(255,255,255,0.8)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, fontSize: '0.97rem',
                padding: '14px 32px', borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}
            >
              Contact Admissions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}