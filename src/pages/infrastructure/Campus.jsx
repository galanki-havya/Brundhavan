import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Building,
  Trees,
  ParkingSquare,
  Wifi,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function Campus() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#fff',
        fontFamily: "'Playfair Display', 'Georgia', serif"
      }}
    >
      <Helmet>
        <title>Campus Overview - Brindavan Schools</title>
        <meta
          name="description"
          content="A modern, well-planned campus designed for an optimal learning environment."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ── Hero via PageHero ── */}
      <PageHero
        title="A Campus Designed for Extraordinary Learners"
        subtitle="A modern, well-planned campus where every corner inspires curiosity, creativity, and growth."
        variant="pink"
        backgroundImage="/images/gallery/Infrastructure/7.jpg"
        imageOpacity={60}
      />

      {/* ── Split Section ── */}
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
                background: 'linear-gradient(135deg, #FF6347, #FFBDAA)',
                zIndex: 0
              }}
            />
            <img
              src="/images/gallery/Infrastructure/5.jpg"
              alt="Brindavan School Infrastructure"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
                boxShadow: '0 24px 60px rgba(255,99,71,0.2)'
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
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#FF6347',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                50,000
              </div>
              <div style={{ fontSize: '13px', color: '#6b5c6e', fontWeight: 500 }}>
                sq ft Campus Area
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
                color: '#FF6347',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              Our Infrastructure
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
              Built for the{' '}
              <span style={{ color: '#FF6347' }}>Future</span>{' '}
              of Education
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
              Brindavan's campus is a living, breathing ecosystem of learning.
              Our thoughtfully designed infrastructure blends modern architecture
              with green spaces to nurture every student's potential.
            </p>

            {[
              'State-of-the-art classrooms with smart technology',
              'Dedicated spaces for science, arts & sports',
              'Safe, inclusive, and eco-conscious environment',
              'Campus-wide high-speed connectivity'
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
                <CheckCircle2
                  size={20}
                  style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }}
                />
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
                to="/admissions"
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
                  boxShadow: '0 6px 24px rgba(255,99,71,0.35)',
                  transition: 'all 0.3s ease'
                }}
              >
                Schedule a Visit <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Campus Features Cards ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '12px'
              }}
            >
              Campus Highlights
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>
              Every facility crafted to inspire greatness
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { icon: Building, title: 'Modern Architecture', description: 'Contemporary design with ample natural light and ventilation for optimal learning.' },
              { icon: Trees, title: 'Green Spaces', description: 'Landscaped gardens and open recreational areas for outdoor activities and relaxation.' },
              { icon: ParkingSquare, title: 'Parking Facilities', description: 'Dedicated, organized parking for staff, visitors, and school transport vehicles.' },
              { icon: Wifi, title: 'Wi-Fi Coverage', description: 'High-speed campus-wide internet enabling seamless digital learning experiences.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: '0 4px 24px rgba(255,99,71,0.08)',
                  border: '1px solid #FFD8CC'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    background: 'linear-gradient(135deg, #FFD8CC, #FFF3F0)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1.5px solid #FFBDAA'
                  }}
                >
                  <item.icon size={24} style={{ color: '#FF6347' }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    marginBottom: '10px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#6b5c6e',
                    fontSize: '0.93rem',
                    lineHeight: 1.7,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '12px'
              }}
            >
              Campus Statistics
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>
              Numbers that reflect our commitment to quality education
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              { number: '50,000 sq ft', label: 'Campus Area' },
              { number: '25+', label: 'Classrooms' },
              { number: '8', label: 'Specialized Labs' },
              { number: '5', label: 'Sports Facilities' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  border: '1.5px solid #FFD8CC',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF6347, #FFBDAA)'
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#FF6347',
                    marginBottom: '8px'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#6b5c6e',
                    fontWeight: 500,
                    fontSize: '0.9rem'
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #C4391E 0%, #FF6347 50%, #FF8C6B 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '10%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)'
          }}
        />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.2
            }}
          >
            Come Experience Our Campus in Person
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.05rem',
              marginBottom: '36px',
              lineHeight: 1.7
            }}
          >
            Experience world-class infrastructure and a vibrant learning environment —
            see for yourself why families choose Brindavan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/admissions"
              style={{
                background: '#fff',
                color: '#C4391E',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.97rem',
                padding: '14px 32px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Apply Now <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              style={{
                border: '2px solid rgba(255,255,255,0.8)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.97rem',
                padding: '14px 32px',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Schedule Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}