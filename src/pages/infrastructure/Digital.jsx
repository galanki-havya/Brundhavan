import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Laptop,
  Globe,
  Database,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function Digital() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#fff',
        fontFamily: "'Playfair Display', 'Georgia', serif"
      }}
    >
      <Helmet>
        <title>Digital Learning - Brindavan Schools</title>
        <meta
          name="description"
          content="Cutting-edge digital infrastructure supporting modern education and future-ready skills."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ── Hero ── */}
      <PageHero
        title="Digital Learning"
        subtitle="Cutting-edge digital infrastructure supporting modern education and future-ready skills."
        variant="pink"
        backgroundImage="/images/gallery/Academic.png"
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
            {/* Pink accent frame */}
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
              src="/images/gallery/computer.jpg"
              alt="Digital Learning at Brindavan"
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
            {/* Floating badge */}
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
                  color: '#ec4899',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                100+
              </div>
              <div style={{ fontSize: '13px', color: '#6b5c6e', fontWeight: 500 }}>
                Digital Devices
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
              Our Technology
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
              Learning Powered by{' '}
              <span style={{ color: '#ec4899' }}>Technology</span>
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
              At Brindavan, we believe the future belongs to those who are digitally fluent.
              Our smart classrooms, computer labs, and connected ecosystem equip every
              student with the tools and mindset to thrive in a technology-driven world.
            </p>

            {[
              'Smart classrooms with interactive whiteboards',
              'High-speed broadband across the entire campus',
              'Dedicated coding & robotics lab',
              'Digital library and e-learning platforms',
              'BYOD-friendly learning environment'
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
                  style={{ color: '#ec4899', flexShrink: 0, marginTop: '2px' }}
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
                Explore Admissions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Digital Features Cards ── */}
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
              Digital Capabilities
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>
              Every tool built to empower the next generation of leaders
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
              {
                icon: Laptop,
                title: 'Computer Labs',
                description: 'State-of-the-art computer laboratories with the latest hardware and software for hands-on learning.'
              },
              {
                icon: Globe,
                title: 'Internet Connectivity',
                description: 'High-speed broadband internet enabling online learning, research, and global collaboration.'
              },
              {
                icon: Database,
                title: 'Digital Resources',
                description: 'Access to online libraries, educational platforms, and curated digital content for every subject.'
              },
              {
                icon: Smartphone,
                title: 'Mobile Learning',
                description: 'BYOD programs and mobile applications for flexible, on-the-go enhanced learning experiences.'
              }
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
                  boxShadow: '0 4px 24px rgba(236,72,153,0.08)',
                  border: '1px solid #fce7f3'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    border: '1.5px solid #f9a8d4'
                  }}
                >
                  <item.icon size={24} style={{ color: '#ec4899' }} />
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

      {/* ── Technology Infrastructure: Two Column Lists ── */}
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
              Technology Infrastructure
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
              Modern digital infrastructure supporting 21st-century learning methodologies
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Hardware */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1.5px solid #fce7f3'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1a1a2e',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '2px solid #ec4899',
                  display: 'inline-block'
                }}
              >
                Hardware
              </h3>
              <div style={{ marginTop: '8px' }}>
                {[
                  'High-performance Computers',
                  'Interactive Whiteboards',
                  'Student Tablets',
                  'Audio-Visual Equipment',
                  'Printers & Scanners',
                  'Networking Infrastructure'
                ].map(item => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid #fce7f3',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#3d2c40',
                      fontSize: '0.95rem'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1.5px solid #fce7f3'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#1a1a2e',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '2px solid #f472b6',
                  display: 'inline-block'
                }}
              >
                Software & Platforms
              </h3>
              <div style={{ marginTop: '8px' }}>
                {[
                  'Educational Software',
                  'Learning Management System',
                  'Digital Assessment Tools',
                  'Creative Applications',
                  'Programming Environments',
                  'Online Collaboration Tools'
                ].map(item => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: '1px solid #fce7f3',
                      fontFamily: "'DM Sans', sans-serif",
                      color: '#3d2c40',
                      fontSize: '0.95rem'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f472b6', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Digital Learning Programs ── */}
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
              Digital Learning Initiatives
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem' }}>
              Innovative programs leveraging technology for enhanced learning outcomes
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                title: 'STEM Education',
                initiatives: ['Coding & Programming', 'Robotics Workshops', '3D Design & Printing', 'Virtual Science Labs']
              },
              {
                title: 'Digital Literacy',
                initiatives: ['Internet Safety', 'Digital Citizenship', 'Information Research', 'Online Communication']
              },
              {
                title: 'Future Skills',
                initiatives: ['AI & Machine Learning', 'Data Analysis', 'Digital Design', 'Entrepreneurship Tools']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
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
                {/* Top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #ec4899, #f9a8d4)'
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    marginBottom: '20px'
                  }}
                >
                  {category.title}
                </h3>
                <div>
                  {category.initiatives.map(initiative => (
                    <div
                      key={initiative}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 0',
                        borderBottom: '1px solid #fce7f3',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.9rem',
                        color: '#3d2c40'
                      }}
                    >
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899', flexShrink: 0 }} />
                      {initiative}
                    </div>
                  ))}
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
              fontWeight: 800,
              color: '#fff',
              marginBottom: '16px',
              lineHeight: 1.2
            }}
          >
            Prepare Your Child for a Digital Future
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
            Give your child access to world-class digital education and the skills they need to lead tomorrow.
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
                color: '#be185d',
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
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}