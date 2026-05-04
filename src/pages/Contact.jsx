import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { siteData } from '../data/site'

const { school } = siteData

function PageBanner({ title, subtitle }) {
  return (
    <div className="relative bg-charcoal-900 pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 to-primary-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-subheading text-primary-400">{subtitle}</p>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">{title}</h1>
      </div>
    </div>
  )
}

const contactItems = [
  {
    icon: '📍',
    label: 'Our Address',
    value: siteData.school.address,
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: siteData.school.phone,
    link: `tel:${siteData.school.phone}`,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: siteData.school.email,
    link: `mailto:${siteData.school.email}`,
  },
  {
    icon: '🕐',
    label: 'Office Hours',
    value: 'Mon – Sat: 8:00 AM – 4:00 PM',
    link: null,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner title="Get In Touch" subtitle="Contact Us" />

      {/* Contact Info Cards */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-50 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-display font-semibold text-charcoal-900 mb-1">{item.label}</div>
                {item.link ? (
                  <a href={item.link} className="font-body text-sm text-primary-600 hover:text-primary-700 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-body text-sm text-gray-600">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <p className="section-subheading">Write to Us</p>
              <h2 className="section-heading">Send a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary-50 border border-primary-200 rounded-3xl p-10 text-center mt-4"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-xl text-primary-700 mb-2">Message Sent!</h3>
                  <p className="font-body text-gray-600 text-sm">
                    Thank you for reaching out. We'll respond within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Email *</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Subject *</label>
                    <input name="subject" value={form.subject} onChange={handleChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button type="submit" className="btn-primary justify-center py-4 text-base">
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <p className="section-subheading">Find Us</p>
              <h2 className="section-heading">Our Location</h2>
              <div className="mt-4 rounded-3xl overflow-hidden shadow-card" style={{ height: '420px' }}>
                <iframe
                  title="Brundavan School Location"
                  src={school.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 p-4 bg-primary-50 rounded-2xl">
                <p className="font-body text-sm text-gray-600 flex gap-2">
                  <span>📍</span>
                  <span>{school.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
