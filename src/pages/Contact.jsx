import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '../data/site'

const { school } = siteData

const contactItems = [
  {
    icon: '📍',
    label: 'Address',
    value: school.address,
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: school.phone,
    link: `tel:${school.phone}`,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: school.email,
    link: `mailto:${school.email}`,
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
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1200&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-gray-200"
          >
            We're here to answer your questions and help you connect with our community
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're committed to responding promptly to all inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  {item.label}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="font-body text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-body text-gray-600">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="font-body text-gray-600 mb-8">
                Have questions about admissions, curriculum, or anything else? We'd love to hear from you.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-xl text-green-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-body text-green-600">
                    Thank you for reaching out. We'll respond within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-body font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                Visit Our Campus
              </h2>
              <p className="font-body text-gray-600 mb-8">
                Located in the heart of Palamaner, our campus provides an ideal environment for learning and growth.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-xl mb-6" style={{ height: '400px' }}>
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

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  Getting Here
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>By Road:</strong> Well-connected via NH 42, 30 minutes from Chittoor</p>
                  <p><strong>By Train:</strong> Nearest railway station is Palamaner Junction (2 km)</p>
                  <p><strong>By Air:</strong> Tirupati Airport (60 km) with regular shuttle services</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
