import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Target, ShieldCheck, Lightbulb, Heart, Sprout, Users, CheckCircle2, ArrowRight } from 'lucide-react'

export default function AboutOverview() {
  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Helmet>
        <title>Best School in Palamaner | About Brindavan School</title>
        <meta name="description" content="Learn about Brindavan School, Palamaner — a modern educational institution focused on academic excellence, discipline, innovation, and holistic student development." />
      </Helmet>

      <PageHero
        title="About Brindavan School"
        subtitle="Discover our rich heritage, values, and commitment to educational excellence."
        backgroundImage="/images/gallery/overview.png"
        variant="pink"
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'
        }}
          className="about-grid"
        >
          <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <img
              src="/images/gallery/Infrastructure/4.jpg"
              alt="Brindavan School Campus"
              onError={e => { e.currentTarget.src = '/images/gallery/Infrastructure/8.jpg' }}
              style={{
                width: '100%', height: '420px', objectFit: 'cover',
                borderRadius: '20px', display: 'block',
                border: '1px solid #f0f0f0',
                boxShadow: '0 16px 48px rgba(0,0,0,0.08)'
              }}
            />
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px', zIndex: 2,
              background: '#fff', borderRadius: '16px', padding: '16px 24px',
              border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>250+</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Students Enrolled</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>
                Since May 2025
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700,
              color: '#011E3A', lineHeight: 1.2, marginBottom: '20px'
            }}>
              Modern Education for{' '}
              <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Future Leaders</span>
            </h2>

            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '12px' }}>
              Brindavan School was founded with a vision to redefine quality education in Palamaner. Built with modern infrastructure and a commitment to innovation, we create a safe, disciplined, and nurturing environment.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.85, marginBottom: '28px' }}>
              We focus on building strong academic foundations while developing character, communication skills, and self-confidence through activity-based learning.
            </p>

            {['State Board curriculum with modern methodology', 'Safe, CCTV-monitored campus environment', 'Activity-based and experiential learning', 'Strong focus on character & communication', 'Caring and qualified teaching faculty'].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}

            <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/about/vision-mission" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#FF6347', color: '#fff',
                fontWeight: 600, fontSize: '0.95rem',
                padding: '13px 28px', borderRadius: '50px', textDecoration: 'none'
              }}>
                Our Vision & Mission <ArrowRight size={17} />
              </Link>
              <Link to="/about/chairman" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1.5px solid #e0e0e0', color: '#011E3A',
                fontWeight: 600, fontSize: '0.95rem',
                padding: '13px 28px', borderRadius: '50px', textDecoration: 'none'
              }}>
                Meet Our Leaders
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Parents Choose Us ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Why Brindavan</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>
              Why Parents Choose Brindavan
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>Trusted by families across Palamaner for quality education</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { emoji: '🔒', label: 'Safe Campus', desc: 'Full CCTV coverage across the entire school campus.' },
              { emoji: '🎓', label: 'Expert Faculty', desc: 'Qualified, caring teachers dedicated to every student.' },
              { emoji: '🧩', label: 'Modern Labs', desc: 'Activity-based and hands-on experiential learning.' },
              { emoji: '⭐', label: 'Excellence', desc: 'Strong academic foundation with consistent results.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: '18px', padding: '32px 24px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  textAlign: 'center', position: 'relative', overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our DNA</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A' }}>
              Our Core Values
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Excellence', icon: Target,      desc: 'Striving for the highest standards in every student, every day.' },
              { title: 'Integrity',  icon: ShieldCheck, desc: 'Building ethical character and moral strength in young minds.' },
              { title: 'Innovation', icon: Lightbulb,   desc: 'Modern methodologies and smart classrooms for a modern world.' },
              { title: 'Community', icon: Users,        desc: 'A united family of parents, staff, and students working together.' },
              { title: 'Respect',   icon: Heart,        desc: 'Respect for self, others, and the world around us.' },
              { title: 'Growth',    icon: Sprout,       desc: 'Fostering lifelong learners, thinkers, and achievers.' },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: '18px', padding: '32px 28px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
                }}
              >
                {/* Plain icon — no background, just orange icon on white */}
                <value.icon size={30} style={{ color: '#FF6347', marginBottom: '18px' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '10px' }}>{value.title}</h3>
                <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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