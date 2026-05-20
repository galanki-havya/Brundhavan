import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'

const { school } = siteData

const contactCards = [
  { icon: MapPin, label: 'Visit Us',     bg: '#FFF8F6', border: '#FFCFC4', iconBg: '#FFF0EC', iconColor: '#FF6347' },
  { icon: Phone,  label: 'Call Us',      bg: '#EEF3FB', border: '#B8CFF0', iconBg: '#E4EDFA', iconColor: '#1a3a6b' },
  { icon: Mail,   label: 'Email Us',     bg: '#FFFBEE', border: '#F5DFA0', iconBg: '#FFF5D6', iconColor: '#B8860B' },
  { icon: Clock,  label: 'Office Hours', bg: '#F0FAF4', border: '#A8DDB8', iconBg: '#E2F5EA', iconColor: '#2E7D4F' },
]

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4 flex flex-col gap-[5px]">
        <div className="h-[3px] w-full rounded-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.25) 10%, rgba(236,115,58,0.85) 40%, #ec733a 50%, rgba(236,115,58,0.85) 60%, rgba(236,115,58,0.25) 90%, transparent 100%)' }} />
      </div>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const contactData = [
    { val: school.address, link: null },
    { val: school.phone,   link: `tel:${school.phone}` },
    { val: school.email,   link: `mailto:${school.email}`, customClass: 'block truncate whitespace-nowrap overflow-hidden' },
    { val: 'Mon–Sat: 8AM–4PM', link: null },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.target)
    try {
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT_ID", { method: "POST", body: formData, headers: { 'Accept': 'application/json' } })
      if (response.ok) setStatus('success')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className="min-h-screen" style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>
      <Helmet><title>Contact Us - Brindavan School</title></Helmet>
      <PageHero backgroundImage="/images/gallery/contact3.jpg" />

      {/* ── Contact Cards ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {contactCards.map((card, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={{ background: card.bg, padding: '32px 24px', borderRadius: '20px', border: `1.5px solid ${card.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ width: '48px', height: '48px', background: card.iconBg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: `1px solid ${card.border}` }}>
                  <card.icon size={22} style={{ color: card.iconColor }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#011E3A', marginBottom: '8px', fontSize: '1rem' }}>{card.label}</h3>
                {contactData[i].link ? (
                  <a href={contactData[i].link} title={contactData[i].val} className={contactData[i].customClass || ''} style={{ color: card.iconColor, fontSize: '0.9rem', textDecoration: 'none' }}>
                    {contactData[i].val}
                  </a>
                ) : (
                  <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{contactData[i].val}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Form Section ── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div style={{ background: '#FFF8F6', padding: '40px', borderRadius: '32px', border: '1.5px solid #FFCFC4', boxShadow: '0 4px 32px rgba(255,99,71,0.06)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>Send us a message</h2>
            <p style={{ color: '#666', marginBottom: '28px', fontSize: '0.95rem' }}>We usually respond within 24 hours.</p>

            {status === 'success' ? (
              <div style={{ height: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: '#F0FAF4', color: '#2E7D4F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '1.5rem' }}>✓</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: '#011E3A' }}>Message Received!</h3>
                <p style={{ color: '#666' }}>Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input required name="name" placeholder="Full Name" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: '#fff', border: '1.5px solid #FFCFC4', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <input required name="phone" placeholder="Phone" style={{ padding: '14px 16px', borderRadius: '12px', background: '#fff', border: '1.5px solid #FFCFC4', outline: 'none', fontSize: '0.95rem' }} />
                  <input required name="email" type="email" placeholder="Email" style={{ padding: '14px 16px', borderRadius: '12px', background: '#fff', border: '1.5px solid #FFCFC4', outline: 'none', fontSize: '0.95rem' }} />
                </div>
                <textarea required name="message" rows={4} placeholder="Your message..." style={{ padding: '14px 16px', borderRadius: '12px', background: '#fff', border: '1.5px solid #FFCFC4', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }} />
                <button type="submit" disabled={status === 'submitting'} style={{ background: '#FF6347', color: '#fff', padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1.5px solid #FFCFC4' }}>
            <iframe src={school.mapSrc} style={{ width: '100%', height: '500px', border: 0, display: 'block' }} allowFullScreen loading="lazy" />
          </div>
        </div>
      </section>

      <ClearDivider />

      <section style={{ padding: '64px 24px', textAlign: 'center', background: '#F9FAFB' }}>
        <Link to="/admissions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#011E3A', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.97rem', textDecoration: 'none' }}>
          Start Your Application <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  )
}