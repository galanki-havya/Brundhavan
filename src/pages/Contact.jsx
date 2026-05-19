import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
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
    border: '1.5px solid #fce7f3',
    background: '#fff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: '#3d2c40',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      <Helmet>
        <title>Contact Us - Brindavan Schools</title>
        <meta name="description" content="Get in touch with Brindavan School. We're here to answer your questions." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <PageHero
        title="Get In Touch"
        subtitle="We're here to answer your questions and help you connect with our community."
        variant="pink"
      />

      {/* ── Contact Info Cards ── */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Reach Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Contact Information</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '1.05rem', maxWidth: '450px', margin: '0 auto' }}>Reach out to us through any of these channels — we respond quickly.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {contactItems.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ background: '#fff', borderRadius: '20px', padding: '28px 24px', border: '1px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.07)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #ec4899, #f9a8d4)' }} />
                <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #fce7f3, #fdf2f8)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', border: '1.5px solid #f9a8d4' }}>
                  <item.icon size={20} style={{ color: '#ec4899' }} />
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1a1a2e', fontSize: '1rem', marginBottom: '8px' }}>{item.label}</div>
                {item.link ? (
                  <a href={item.link} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#ec4899', textDecoration: 'none', fontWeight: 500 }}>{item.value}</a>
                ) : (
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#6b5c6e', margin: 0, lineHeight: 1.5 }}>{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section style={{ padding: '80px 0', background: '#fff'}}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Send a Message</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '32px' }}>We'd Love to Hear from You</h2>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: '#fff', borderRadius: '20px', padding: '48px 32px', textAlign: 'center', border: '1.5px solid #fce7f3', boxShadow: '0 4px 24px rgba(236,72,153,0.08)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e', fontSize: '0.95rem' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
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
                    onFocus={e => e.target.style.borderColor = '#ec4899'}
                    onBlur={e => e.target.style.borderColor = '#fce7f3'}
                  />
                ))}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message *"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#ec4899'}
                  onBlur={e => e.target.style.borderColor = '#fce7f3'}
                />
                <button
                  type="submit"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#ec4899', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '1rem', padding: '16px 32px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 24px rgba(236,72,153,0.35)', marginTop: '8px' }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', color: '#ec4899', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Find Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '32px' }}>Visit Our Campus</h2>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(236,72,153,0.12)', border: '1.5px solid #fce7f3', marginBottom: '24px' }}>
              {school?.mapSrc ? (
                <iframe src={school.mapSrc} width="100%" height="380" style={{ border: 0, display: 'block' }} loading="lazy" />
              ) : (
                <div style={{ height: '380px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif", color: '#6b5c6e' }}>No map configured</div>
              )}
            </div>

            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1px solid #fce7f3', boxShadow: '0 4px 16px rgba(236,72,153,0.06)' }}>
              {[
                { label: 'By Road', value: 'NH 42' },
                { label: 'By Train', value: 'Palamaner Junction' },
                { label: 'By Air', value: 'Tirupati Airport' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid #fce7f3', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#3d2c40' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899', flexShrink: 0 }} />
                  <strong style={{ color: '#1a1a2e', minWidth: '80px' }}>{item.label}:</strong>
                  <span style={{ color: '#6b5c6e' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Ready to Take the Next Step?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Schedule a campus visit or start your admission enquiry today.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${school.phone}`} style={{ background: '#fff', color: '#be185d', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Call Now <ArrowRight size={17} /></a>
            <a href={`mailto:${school.email}`} style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Send an Email</a>
          </motion.div>
        </div>
      </section>

      {/* Floating Call Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 50 }}>
        <a href={`tel:${school.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #ec4899, #be185d)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.95rem', padding: '14px 24px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(236,72,153,0.4)' }}>
          <Phone size={18} /> Call Now
        </a>
      </div>
    </div>
  )
}