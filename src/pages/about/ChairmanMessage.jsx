import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { ArrowRight, Quote, GraduationCap, Award } from 'lucide-react'

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

const leaders = [
  {
    image: '/images/gallery/Chairman.png',
    name: 'S. Chandra Sekhar',
    title: 'Chairman, Brindavan School',
    credentials: [
      { icon: GraduationCap, text: 'M.Sc. Physics, S.V. University' },
      { icon: Award,         text: '8+ Years in Education' },
    ],
    message: "S. Chandra Sekhar is the Chairman of Brindavan School, bringing over eight years of extensive experience in the education sector. He holds an M.Sc. in Physics from S.V. University and has served in a variety of educational roles, including Physical Science Teacher, IIT Physics Faculty, High School In-Charge, and Vice Principal. Throughout his career, Mr. Sekhar has demonstrated a commitment to academic excellence, innovative teaching methods, and holistic student development. His leadership at Brindavan School is driven by a vision to cultivate both intellectual growth and personal character in students.",
    accentColor: '#FF6347',
    iconColor: '#FF6347',
    cardBg: '#FFF8F6',
    cardBorder: '#FFCFC4',
  },
  {
    image: '/images/gallery/founder.png',
    name: 'Mr. M. Mahesh Babu',
    title: 'Correspondent, Brindavan School',
    credentials: [
      { icon: GraduationCap, text: 'M.Sc.Ed Physics — Integrated Dual Degree Program' },
      { icon: Award,         text: 'RIE (NCERT), Mysore · Since 2019' },
    ],
    message: "Mr. M. Mahesh Babu, M.Sc.Ed (Physics), B.Ed, is a passionate educationist and dynamic academic leader with extensive experience in teaching, school administration, and curriculum planning. A graduate of the Regional Institute of Education (NCERT), Mysore, he has been serving in the field of education since 2019. He worked as PGT Physics Faculty, Vice Principal, and presently serves as Principal at SR Vidyanikethan International School, Gadwal. Known for his innovative teaching methods, leadership skills, and student-friendly approach, he has organized numerous teacher training programmes, workshops, and academic development activities. He has also served as Deputy Chief Superintendent for CBSE Grade X Examinations and contributed actively to school development, curriculum implementation, and student mentoring. Fluent in English, Hindi, Telugu, and Kannada, Mr. Mahesh Babu strongly believes in holistic education that nurtures academic excellence, character, confidence, and leadership among students.",
    accentColor: '#1a3a6b',
    iconColor: '#1a3a6b',
    cardBg: '#EEF3FB',
    cardBorder: '#B8CFF0',
  },
]

export default function ChairmanMessage() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .leader-cards-row {
          display: flex;
          gap: 28px;
          align-items: stretch;
        }
        .leader-card {
          flex: 1;
          min-width: 0;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .leader-cards-row { flex-direction: column; }
        }
      `}</style>

      <PageHero
        title="Leadership Messages"
        subtitle="Visionary guidance shaping the future of Brindavan School."
        backgroundImage="/images/gallery/faculty.png"
        variant="pink"
      />

      {/* ── Side-by-Side Cards ── */}
      <section style={{ padding: '60px 24px 80px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>From Our Leaders</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700, color: '#011E3A', margin: 0
            }}>Words of Wisdom</h2>
          </motion.div>

          {/* Cards */}
          <div className="leader-cards-row">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                className="leader-card"
                style={{
                  background: leader.cardBg,
                  border: `1.5px solid ${leader.cardBorder}`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
              >
                {/* ── Photo grid top — centered portrait ── */}
                <div style={{
                  background: leader.cardBg,
                  padding: '40px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderBottom: `1px solid ${leader.cardBorder}`,
                }}>
                  {/* Photo */}
                  <div style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
                    border: `2px solid ${leader.cardBorder}`,
                  }}>
                    <img
                      src={leader.image}
                      alt={leader.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.45rem', fontWeight: 700,
                    color: '#011E3A', margin: '0 0 5px'
                  }}>{leader.name}</h3>

                  {/* Role */}
                  <p style={{
                    fontSize: '0.95rem', color: leader.accentColor,
                    fontStyle: 'italic', fontWeight: 500,
                    margin: '0 0 20px'
                  }}>{leader.title}</p>

                  {/* Divider */}
                  <div style={{ width: '100%', height: '1px', background: leader.cardBorder, marginBottom: '18px' }} />

                  {/* Credentials */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                    {leader.credentials.map((cred, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '9px', fontSize: '0.88rem', color: '#302f2f', fontWeight: 400
                      }}>
                        <cred.icon size={16} style={{ color: leader.iconColor, flexShrink: 0 }} />
                        <span>{cred.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Message ── */}
                <div style={{ padding: '28px 30px 34px', flex: 1 }}>
                  <p style={{
                    fontSize: '0.96rem', color: '#302f2f',
                    lineHeight: 1.85, margin: 0, textAlign: 'justify'
                  }}>
                    {leader.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Quote ── */}
      <section style={{ padding: '72px 24px', background: '#FFFFFF', textAlign: 'center' }}>
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
              fontSize: 'clamp(1.35rem, 3vw, 1.9rem)',
              fontStyle: 'italic', color: '#011E3A',
              lineHeight: 1.65, margin: '0 0 22px'
            }}>
              "Cultivating both intellectual growth and personal character — this is the promise we make to every child who walks through our doors."
            </p>
            <div style={{ width: '36px', height: '2px', background: '#FF6347', borderRadius: '2px', margin: '0 auto 16px' }} />
            <p style={{ color: '#555', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
              S. Chandra Sekhar &amp; Mr. M. Mahesh Babu
            </p>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#F9FAFB', textAlign: 'center' }}>
        <div style={{
          maxWidth: '680px', margin: '0 auto',
          background: '#FFF8F6',
          border: '1.5px solid #FFCFC4',
          boxShadow: '0 4px 32px rgba(255,99,71,0.08)',
          padding: '60px 40px', borderRadius: '24px'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Get Started</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
            fontWeight: 700, color: '#011E3A', marginBottom: '14px', lineHeight: 1.25
          }}>Join the Brindavan Legacy</h2>
          <p style={{ color: '#302f2f', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.75 }}>
            Start your child's journey in an institution built on vision, values, and a commitment to excellence.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px'
            }}>
              Start Your Child's Journey <ArrowRight size={17} />
            </Link>
            <Link to="/contact" style={{
              border: '1.5px solid #FFCFC4', color: '#011E3A', background: '#fff',
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