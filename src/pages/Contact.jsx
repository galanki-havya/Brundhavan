import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'

const { school } = siteData

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

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.target)
    
    try {
      const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT_ID", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Helmet><title>Contact Us - Brindavan School</title></Helmet>
      <PageHero backgroundImage="/images/gallery/contact2.jpg" />

      {/* ── Contact Grid ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: 'Visit Us', val: school.address, link: null },
              { icon: Phone, label: 'Call Us', val: school.phone, link: `tel:${school.phone}` },
              { 
                icon: Mail, 
                label: 'Email Us', 
                val: school.email, 
                link: `mailto:${school.email}`, 
                // Forces single line and adds ellipsis if too long
                customClass: 'block truncate whitespace-nowrap overflow-hidden' 
              },
              { icon: Clock, label: 'Office Hours', val: 'Mon–Sat: 8AM–4PM', link: null },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="w-12 h-12 bg-[#FFF5F0] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-[#ec733a]" size={24} />
                </div>
                <h3 className="font-bold text-[#1B3A8A] mb-2">{item.label}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    title={item.val} 
                    className={`text-[#ec733a] hover:underline ${item.customClass || ''}`}
                  >
                    {item.val}
                  </a>
                ) : (
                  <p className="text-[#475569] text-sm leading-relaxed">{item.val}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Form Section ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-[#011E3A] mb-2">Send us a message</h2>
            <p className="text-[#666] mb-8">We usually respond within 24 hours.</p>
            
            {status === 'success' ? (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                <h3 className="text-xl font-bold">Message Received!</h3>
                <p>Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required name="name" placeholder="Full Name" className="w-full p-4 rounded-xl bg-[#F9FAFB] border border-gray-200 outline-none" />
                <div className="grid grid-cols-2 gap-4">
                  <input required name="phone" placeholder="Phone" className="w-full p-4 rounded-xl bg-[#F9FAFB] border border-gray-200 outline-none" />
                  <input required name="email" type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-[#F9FAFB] border border-gray-200 outline-none" />
                </div>
                <textarea required name="message" rows={4} placeholder="Your message..." className="w-full p-4 rounded-xl bg-[#F9FAFB] border border-gray-200 outline-none" />
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#ec733a] text-white py-4 rounded-xl font-bold hover:bg-[#d6652f] transition-colors">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="relative overflow-hidden rounded-[32px] shadow-lg border-4 border-white">
            <iframe src={school.mapSrc} className="w-full h-[500px]" style={{ border: 0 }} allowFullScreen loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <Link to="/admissions" className="inline-flex items-center gap-2 bg-[#1B3A8A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152d6a] transition-all">
          Start Your Application <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  )
}