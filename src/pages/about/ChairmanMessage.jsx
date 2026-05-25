import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { ArrowRight, Quote, GraduationCap } from 'lucide-react'
import { siteData } from '../../data/site'

function ClearDivider() {
  return (
    <div className="w-full flex justify-center py-1" style={{ background: 'inherit' }}>
      <div className="w-full max-w-9xl px-4">
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.15) 10%, rgba(236,115,58,0.5) 40%, rgba(236,115,58,0.7) 50%, rgba(236,115,58,0.5) 60%, rgba(236,115,58,0.15) 90%, transparent 100%)',
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
  credentials: [{ icon: GraduationCap, text: 'M.Sc. Physics, S.V. University' }],

  message:
    'S. Chandra Sekhar is the Chairman of Brindavan School, bringing over eight years of extensive experience in the education sector. He holds an M.Sc. in Physics from S.V. University and has served in a variety of educational roles, including Physical Science Teacher, IIT Physics Faculty, High School In-Charge, and Vice Principal.',

  message2:
    'Throughout his career, Mr. Sekhar has demonstrated a commitment to academic excellence, innovative teaching methods, and holistic student development. His leadership at Brindavan School is driven by a vision to cultivate both intellectual growth and personal character in students.',

  quote:
    'Cultivating both intellectual growth and personal character — this is the promise we make to every child who walks through our doors.',
}

const correspondentParagraphs = [
  'Welcome to Brindavan School. We believe education is not only about academic excellence, but also about shaping responsible, confident, and compassionate individuals prepared to lead the future with integrity and wisdom. Our vision is to inspire every child to discover their unique potential and grow into a globally competent citizen rooted in strong values.',

  'Guided by the philosophy of "Education with Ethics & Traditions," we blend modern learning with discipline, creativity, innovation, and cultural values. Through dedicated educators, advanced teaching methodologies, and holistic development opportunities, we empower students with leadership qualities, emotional intelligence, critical thinking, and a lifelong passion for learning.',

  'At Brindavan School, we strive to build an institution that inspires excellence, character, and purpose. As CEO & Correspondent, I warmly invite you to become a part of the Brindavan family and join us in shaping a brighter and more meaningful future for the next generation.',
]

export default function ChairmanMessage() {
  const { Correspondent } = siteData
  const fallbackPhoto = '/images/gallery/founder.png'

  return (
    <div
      style={{
        background: '#F9FAFB',
        fontFamily: "'DM Sans', sans-serif",
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(circle at top left, rgba(255,99,71,0.035), transparent 28%)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .person-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: stretch;
        }

        .person-photo-col {
          position: relative;
          background: #011E3A;
          overflow: hidden;
        }

        .chairman-photo {
          aspect-ratio: 1 / 1;
        }

        .correspondent-grid {
          grid-template-columns: 34% 66%;
        }

        .correspondent-photo {
          min-height: 640px;
          max-height: 640px;
        }

        .person-msg-col {
          padding: 34px 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .message-paragraph {
          margin: 0 0 18px;
          color: #374151;
          line-height: 1.95;
          font-size: 0.93rem;
          text-align: justify;
        }

        .cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .person-grid,
          .correspondent-grid {
            grid-template-columns: 1fr;
          }

          .person-photo-col {
            aspect-ratio: 1 / 1 !important;
            min-height: unset !important;
            max-height: unset !important;
            width: 100%;
          }

          .correspondent-photo {
            aspect-ratio: 4 / 3 !important;
            min-height: unset !important;
            max-height: unset !important;
          }

          .person-msg-col {
            padding: 24px 20px;
          }

          .quote-section {
            padding: 54px 20px !important;
          }

          .cta-section {
            padding: 50px 16px !important;
          }

          .cta-inner {
            padding: 38px 22px !important;
          }

          .section1,
          .section2 {
            padding: 34px 16px !important;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .cta-buttons a {
            justify-content: center !important;
          }
        }
      `}</style>

      <PageHero
        title="Message From Leadership"
        subtitle="Guiding Brindavan School with vision, values, and excellence."
        backgroundImage="/images/gallery/faculty.png"
        variant="pink"
      />

      {/* SECTION 1 */}
      <section
        className="section1"
        style={{
          padding: '48px 24px',
          background: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
              }}
            >
              <span style={{ height: 1, width: 28, background: '#FF6347' }} />

              <span
                style={{
                  color: '#FF6347',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                From Our Leader
              </span>

              <span style={{ height: 1, width: 28, background: '#FF6347' }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.7rem, 5vw, 2.3rem)',
                color: '#011E3A',
                margin: 0,
              }}
            >
              Chairman’s{' '}
              <span
                style={{
                  color: '#FF6347',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Message
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(1,30,58,0.08)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 6px 24px rgba(2,22,56,0.05)',
            }}
          >
            <div
              style={{
                height: '3px',
                background:
                  'linear-gradient(90deg, #FF6347, #f5a623, #011E3A)',
              }}
            />

            <div className="person-grid">
              <div className="person-photo-col chairman-photo">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(1,30,58,0.88) 0%, rgba(1,30,58,0.15) 45%, transparent 70%)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    zIndex: 2,
                  }}
                >
                  {chairman.credentials.map((cred, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 7,
                        background: 'rgba(1,30,58,0.68)',
                        border: '1px solid rgba(255,99,71,0.25)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      <cred.icon size={12} style={{ color: '#FFB199' }} />

                      <span
                        style={{
                          color: '#FFE2D7',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                        }}
                      >
                        {cred.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '22px',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 2,
                      background: '#FF6347',
                      marginBottom: 10,
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#FFFFFF',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      margin: '0 0 4px',
                    }}
                  >
                    {chairman.name}
                  </p>

                  <p
                    style={{
                      color: '#FFB199',
                      fontSize: '0.72rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {chairman.title}
                  </p>
                </div>
              </div>

              <div className="person-msg-col">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '58px',
                    color: 'rgba(255,99,71,0.06)',
                    lineHeight: 1,
                    marginBottom: '-10px',
                  }}
                >
                  "
                </div>

                <p className="message-paragraph">{chairman.message}</p>
                <p className="message-paragraph">{chairman.message2}</p>

                <div
                  style={{
                    marginTop: '12px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#011E3A',
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {chairman.name}
                  </p>

                  <p
                    style={{
                      color: '#FF6347',
                      fontSize: '0.72rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      margin: '5px 0 0',
                      fontWeight: 600,
                    }}
                  >
                    {chairman.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* SECTION 2 */}
      <section
        className="section2"
        style={{
          padding: '48px 24px',
          background: '#F8FAFC',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
              }}
            >
              <span style={{ height: 1, width: 28, background: '#FF6347' }} />

              <span
                style={{
                  color: '#FF6347',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                From the Correspondent
              </span>

              <span style={{ height: 1, width: 28, background: '#FF6347' }} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.7rem, 5vw, 2.3rem)',
                color: '#011E3A',
                margin: 0,
              }}
            >
              CEO & Correspondent’s{' '}
              <span
                style={{
                  color: '#FF6347',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Message
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(1,30,58,0.08)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 6px 24px rgba(2,22,56,0.05)',
            }}
          >
            <div
              style={{
                height: '3px',
                background:
                  'linear-gradient(90deg, #FF6347, #f5a623, #011E3A)',
              }}
            />

            <div className="person-grid correspondent-grid">
              <div className="person-photo-col correspondent-photo">
                <img
                  src={Correspondent?.image || fallbackPhoto}
                  alt={Correspondent?.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(1,30,58,0.92) 0%, rgba(1,30,58,0.15) 45%, transparent 70%)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      background: 'rgba(1,30,58,0.68)',
                      border: '1px solid rgba(255,99,71,0.25)',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <GraduationCap size={12} style={{ color: '#FFB199' }} />

                    <span
                      style={{
                        color: '#FFE2D7',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                      }}
                    >
                      {Correspondent?.qualification ||
                        'M.Sc.Ed Physics · Integrated Dual Degree'}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '22px',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 2,
                      background: '#FF6347',
                      marginBottom: 10,
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#FFFFFF',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      margin: '0 0 4px',
                    }}
                  >
                    {Correspondent?.name}
                  </p>

                  <p
                    style={{
                      color: '#FFB199',
                      fontSize: '0.72rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {Correspondent?.title}
                  </p>
                </div>
              </div>

              <div className="person-msg-col">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '58px',
                    color: 'rgba(255,99,71,0.06)',
                    lineHeight: 1,
                    marginBottom: '-10px',
                  }}
                >
                  "
                </div>

                {correspondentParagraphs.map((paragraph, index) => (
                  <p key={index} className="message-paragraph">
                    {paragraph}
                  </p>
                ))}

                <div
                  style={{
                    marginTop: '10px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#011E3A',
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {Correspondent?.name}
                  </p>

                  <p
                    style={{
                      color: '#FF6347',
                      fontSize: '0.72rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      margin: '5px 0 0',
                      fontWeight: 600,
                    }}
                  >
                    {Correspondent?.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* QUOTE SECTION */}
      <section
        className="quote-section"
        style={{
          padding: '70px 24px',
          background: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top, rgba(255,99,71,0.03), transparent 65%)',
          }}
        />

        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          <Quote
            size={28}
            style={{
              color: '#FF6347',
              opacity: 0.35,
              marginBottom: 22,
            }}
          />

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.9rem)',
              lineHeight: 1.75,
              color: '#011E3A',
              fontStyle: 'italic',
              fontWeight: 600,
              marginBottom: '30px',
            }}
          >
            "{chairman.quote}"
          </p>

          <div
            style={{
              width: '42px',
              height: '2px',
              background: 'linear-gradient(90deg, #FF6347, #f5a623)',
              margin: '0 auto 14px',
            }}
          />

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: '#011E3A',
              margin: 0,
            }}
          >
            {chairman.name}
          </p>

          <p
            style={{
              color: '#FF6347',
              fontSize: '0.72rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '6px',
              fontWeight: 600,
            }}
          >
            {chairman.title}
          </p>
        </div>
      </section>

      <ClearDivider />

      {/* CTA SECTION */}
      <section
        className="cta-section"
        style={{
          padding: '64px 24px',
          background: '#F8FAFC',
          textAlign: 'center',
        }}
      >
        <div
          className="cta-inner"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,244,241,0.96))',
            border: '1px solid rgba(255,99,71,0.1)',
            boxShadow: '0 6px 24px rgba(2,22,56,0.05)',
            padding: '58px 48px',
            borderRadius: '32px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <span style={{ height: 1, width: 24, background: '#FF6347' }} />

            <span
              style={{
                color: '#FF6347',
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              Get Started
            </span>

            <span style={{ height: 1, width: 24, background: '#FF6347' }} />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.3rem)',
              color: '#011E3A',
              marginBottom: '14px',
            }}
          >
            Join the Brindavan Legacy
          </h2>

          <p
            style={{
              color: '#4A5568',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '540px',
              margin: '0 auto 34px',
            }}
          >
            Start your child’s journey in an institution built on vision,
            values, and a commitment to excellence.
          </p>

          <div className="cta-buttons">
            <Link
              to="/admissions"
              style={{
                background: 'linear-gradient(135deg, #FF6347, #ff7b5c)',
                color: '#fff',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(255,99,71,0.18)',
              }}
            >
              Start Your Child’s Journey
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                border: '1px solid rgba(1,30,58,0.1)',
                color: '#011E3A',
                background: '#fff',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}