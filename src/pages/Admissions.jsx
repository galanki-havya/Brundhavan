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
        background: '#ffffff',
        fontFamily: "'DM Sans', sans-serif"
      }}
    >
      <Helmet>
        <title>Admissions - Brindavan School | State Board Admissions 2026</title>
        <meta name="description" content="Apply for admission to Brindavan School, the leading State Board school in Palamaner. Admissions open for 2026-27 with modern facilities and holistic education." />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
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

      {/* ── Split Section ── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
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
          className="admissions-split-grid"
        >
          <style>{`
            @media(max-width:768px){
              .admissions-split-grid { grid-template-columns: 1fr !important; }
              .admissions-steps-grid { grid-template-columns: 1fr !important; }
              .admissions-programs-grid { grid-template-columns: 1fr !important; }
              .admissions-docs-grid { grid-template-columns: 1fr !important; }
              .admissions-trust-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

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
                top: '16px',
                left: '16px',
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                background: '#FFE8E2',
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
                boxShadow: '0 16px 48px rgba(0,0,0,0.08)'
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
                background: '#ffffff',
                borderRadius: '16px',
                padding: '16px 24px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>
                2026–27
              </div>
              <div style={{ fontSize: '13px', color: '#888', fontWeight: 500 }}>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>
                Why Brindavan
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#011E3A',
                lineHeight: 1.2,
                marginBottom: '20px'
              }}
            >
              A School That{' '}
              <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Shapes Futures</span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1rem',
                color: '#444',
                lineHeight: 1.85,
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
                  color: '#222'
                }}
              >
                <CheckCircle2 size={20} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
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
                  background: '#FF6347',
                  color: '#fff',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(255,99,71,0.25)',
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
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            className="admissions-trust-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}
          >
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
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '32px 28px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, #FF6347, #ffb347)'
                }} />
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#FF6347',
                  marginBottom: '6px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  color: '#011E3A',
                  fontSize: '1rem',
                  marginBottom: '8px'
                }}>
                  {item.label}
                </div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.88rem',
                  color: '#666',
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
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>How to Apply</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#011E3A', marginBottom: '12px'
            }}>
              Simple 4-Step Process
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#666', fontSize: '1.05rem' }}>
              From enquiry to enrolment — we've made it easy
            </p>
          </motion.div>

          <div
            className="admissions-steps-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}
          >
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
                    background: '#ffffff',
                    borderRadius: '18px',
                    padding: '32px 24px 28px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, #FF6347, #ffb347)'
                  }} />

                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    width: '30px', height: '30px', borderRadius: '50%',
                    background: '#FF6347',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: '0.85rem'
                  }}>
                    {step.step}
                  </div>

                  {/* Icon container — white background matching overview */}
                  <div style={{
                    width: '52px', height: '52px',
                    background: '#ffffff',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}>
                    <Icon size={24} style={{ color: '#FF6347' }} />
                  </div>

                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem', fontWeight: 700,
                    color: '#011E3A', marginBottom: '10px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#666', fontSize: '0.9rem', lineHeight: 1.7, margin: 0
                  }}>
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Eligibility Criteria ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Who Can Apply</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#011E3A'
            }}>
              Eligibility Criteria
            </h2>
          </motion.div>

          <div
            className="admissions-programs-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}
          >
            {programs.map((prog, i) => (
              <motion.div
                key={prog.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  position: 'relative', overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, #FF6347, #ffb347)'
                }} />
                <div style={{
                  flexShrink: 0, width: '42px', height: '42px',
                  borderRadius: '12px',
                  background: '#FF6347',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: '0.9rem'
                }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#011E3A', marginBottom: '4px' }}>
                    {prog.level}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#FF6347', fontWeight: 600, marginBottom: '6px' }}>
                    {prog.age}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', color: '#666', lineHeight: 1.5 }}>
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
              background: '#ffffff',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)'
            }}
          >
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem', fontWeight: 700,
              color: '#011E3A', marginBottom: '24px',
              paddingBottom: '14px',
              borderBottom: '2px solid #FF6347',
              display: 'inline-block'
            }}>
              Documents Required
            </h4>
            <div
              className="admissions-docs-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', marginTop: '8px' }}
            >
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
                    fontSize: '0.9rem', color: '#222',
                    padding: '10px 0',
                    borderBottom: '1px solid #f0f0f0'
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6347', flexShrink: 0 }} />
                  {doc}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Apply Now CTA ── */}
<section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25 }}>
            Join Our Educational Mission
          </h2>
          <p style={{ color: '#555', fontSize: '1rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Become part of Brindavan School and help your child grow in an environment built on excellence, values, and holistic development.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #e0e0e0', color: '#011E3A',
              fontWeight: 600, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}