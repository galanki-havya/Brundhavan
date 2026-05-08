import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteData } from '../data/site'

const { school } = siteData

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: school.address,
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: school.phone,
    link: `tel:${school.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: school.email,
    link: `mailto:${school.email}`,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat: 8:00 AM – 4:00 PM',
    link: null,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

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

    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-primary-50">
      <Helmet>
        <title>Contact Us - Brundavan Schools</title>
        <meta
          name="description"
          content="Get in touch with Brundavan School. We're here to answer your questions."
        />
      </Helmet>

      <PageHero
        title="Get In Touch"
        subtitle="We're here to answer your questions and help you connect with our community"
        image="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1200&q=80"
        breadcrumbs="Home / Contact"
      />

      {/* CONTACT INFO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
            Contact Information
          </h2>
          <p className="font-body text-charcoal-600 max-w-2xl mx-auto">
            Reach out to us through any of these channels.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gold-100 hover:shadow-lg transition"
            >
              <item.icon className="w-6 h-6 text-gold-600 mb-3" />
              <h3 className="font-bold text-lg mb-2">{item.label}</h3>

              {item.link ? (
                <a
                  href={item.link}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FORM + MAP */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-gradient-to-br from-white to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div>
            <h2 className="font-bold text-3xl mb-6 text-charcoal-900">Send us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <div className="text-4xl mb-2">✅</div>
                <h3 className="font-bold text-green-700">
                  Message Sent Successfully!
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-gold-100 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 text-charcoal-800 placeholder-gray-400 transition"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl border border-gold-100 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 text-charcoal-800 placeholder-gray-400 transition"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gold-100 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 text-charcoal-800 placeholder-gray-400 transition"
                />

                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gold-100 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 text-charcoal-800 placeholder-gray-400 transition"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-xl border border-gold-100 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 text-charcoal-800 placeholder-gray-400 transition"
                />

                <button className="w-full bg-gradient-to-r from-primary-700 to-primary-900 text-white py-3 rounded-xl hover:from-primary-800 hover:to-primary-950 shadow-md hover:shadow-lg transition">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* MAP */}
          <div>
            <h2 className="font-bold text-3xl mb-6">Visit Our Campus</h2>

            <div className="h-[400px] rounded-2xl overflow-hidden shadow">
              {school?.mapSrc ? (
                <iframe
                  src={school.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-primary-50">
                  <p>No map configured</p>
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-charcoal-600">
              <p><strong>By Road:</strong> NH 42</p>
              <p><strong>By Train:</strong> Palamaner Junction</p>
              <p><strong>By Air:</strong> Tirupati Airport</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`tel:${school.phone}`}
          className="bg-gradient-to-r from-gold-500 to-gold-600 text-primary-900 font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
        >
          Call Now
        </a>
      </div>
    </div>
  )
}