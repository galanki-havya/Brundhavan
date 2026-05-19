import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom' // <-- Added this missing import
import PageHero from '../components/PageHero'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'
import { siteData } from '../data/site'

const { school } = siteData

const contactItems = [
  { icon: MapPin, label: 'Address', value: school.address, link: null },
  { icon: Phone, label: 'Phone', value: school.phone, link: `tel:${school.phone}` },
  { icon: Mail, label: 'Email', value: school.email, link: `mailto:${school.email}` },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sat: 8:00 AM – 4:00 PM', link: null },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid #e8e8e8',
    background: '#ffffff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: '#222',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: '#ffffff', fontFamily: "'DM Sans', sans-serif" }}
    >
      <Helmet>
        <title>Contact Us - Brindavan Schools</title>
        <meta name="description" content="Get in touch with Brindavan School. We're here to answer your questions." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        @media(max-width:768px){
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .contact-form-map-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <PageHero

        backgroundImage="/images/gallery/contact2.jpg"
      />

      {/* ── Contact Info Cards ── */}
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
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Reach Us</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700, color: '#011E3A', marginBottom: '12px'
            }}>
              Contact Information
            </h2>
          </motion.div>

          <div
            className="contact-info-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  padding: '28px 24px',
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
                  width: '44px', height: '44px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <item.icon size={20} style={{ color: '#FF6347' }} />
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, color: '#011E3A',
                  fontSize: '1rem', marginBottom: '8px'
                }}>
                  {item.label}
                </div>
                {item.link ? (
                  <a href={item.link} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem', color: '#FF6347',
                    textDecoration: 'none', fontWeight: 500
                  }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem', color: '#666',
                    margin: 0, lineHeight: 1.5
                  }}>
                    {item.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div
          className="contact-form-map-grid"
          style={{
            maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '48px', alignItems: 'start'
          }}
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem', fontWeight: 700,
              color: '#011E3A', marginBottom: '32px'
            }}>
              We'd Love to <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Hear from You</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: '#ffffff', borderRadius: '20px',
                  padding: '48px 32px', textAlign: 'center',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: '#011E3A', marginBottom: '8px'
                }}>
                  Message Sent!
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'name', placeholder: 'Full Name *', type: 'text' },
                  { name: 'phone', placeholder: 'Phone Number *', type: 'tel' },
                  { name: 'email', placeholder: 'Email Address *', type: 'email' },
                  { name: 'subject', placeholder: 'Subject', type: 'text' },
                ].map(field => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={inputStyle}
                  />
                ))}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message *"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#FF6347', color: '#fff',
                    fontWeight: 700, padding: '16px 32px', borderRadius: '50px',
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem', fontWeight: 700,
              color: '#011E3A', marginBottom: '32px'
            }}>
              Visit Our <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Campus</span>
            </h2>

            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
              border: '1px solid #f0f0f0', marginBottom: '24px'
            }}>
              {school?.mapSrc && (
                <iframe
                  src={school.mapSrc}
                  width="100%" height="380"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: '24px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#011E3A', marginBottom: '20px' }}>
            Join Our Educational Mission
          </h2>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{
              background: '#FF6347', color: '#fff',
              fontWeight: 700, padding: '13px 32px', borderRadius: '50px', textDecoration: 'none'
            }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}