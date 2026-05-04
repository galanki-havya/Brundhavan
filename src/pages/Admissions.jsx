import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { siteData } from '../data/site'

const { admissionSteps, programs, school } = siteData

function PageBanner({ title, subtitle }) {
  return (
    <div className="relative bg-charcoal-900 pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 to-primary-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-subheading text-primary-400">{subtitle}</p>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">{title}</h1>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', grade: '', parent: '', phone: '', email: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner title="Join Brundavan School" subtitle="Admissions" />

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subheading">How to Apply</p>
            <h2 className="section-heading">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, i) => (
              <Card key={step.step} delay={i * 0.1} className="p-6 relative overflow-visible">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-display font-bold shadow-md">
                  {step.step}
                </div>
                <div className="pt-6">
                  <h3 className="font-display font-bold text-lg text-charcoal-900 mb-2">{step.title}</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-primary-300 text-xl z-10">→</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subheading">Who Can Apply</p>
            <h2 className="section-heading">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-card flex gap-4 items-start"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white font-display font-bold text-sm`}>
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-semibold text-charcoal-900 mb-0.5">{prog.level}</div>
                  <div className="text-xs text-primary-600 font-body font-medium mb-1">{prog.age}</div>
                  <div className="text-xs text-gray-500 font-body">
                    Age proof, previous school records, parent ID required at time of registration.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-card">
            <h4 className="font-display font-bold text-charcoal-900 mb-3">Documents Required</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'Birth Certificate', "Child's Aadhaar Card", 'Previous Academic Records',
                'Transfer Certificate', 'Parent/Guardian ID Proof', 'Passport Size Photographs (4)',
                'Residential Address Proof', 'Medical Fitness Certificate', 'Caste Certificate (if applicable)',
              ].map(doc => (
                <li key={doc} className="flex items-center gap-2 font-body text-sm text-gray-600">
                  <span className="text-primary-500">✓</span> {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Apply Now Form */}
      <Section className="bg-white" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-subheading">Ready to Begin?</p>
            <h2 className="section-heading">Apply Now</h2>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-50 border border-primary-200 rounded-3xl p-10 text-center"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-2xl text-primary-700 mb-2">
                Enquiry Received!
              </h3>
              <p className="font-body text-gray-600">
                Thank you for your interest in Brundavan School. We'll get in touch with you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 shadow-card flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Student's Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Applying for Grade *</label>
                  <select name="grade" value={form.grade} onChange={handleChange} required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  >
                    <option value="">Select Grade</option>
                    {['Nursery','LKG','UKG','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11 – Science','Grade 11 – Commerce','Grade 11 – Humanities','Grade 12 – Science','Grade 12 – Commerce','Grade 12 – Humanities'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Parent / Guardian Name *</label>
                  <input name="parent" value={form.parent} onChange={handleChange} required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    placeholder="Parent's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required type="tel"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-charcoal-800 mb-1">Additional Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white resize-none"
                  placeholder="Any specific queries or information you'd like to share..."
                />
              </div>
              <button type="submit" className="btn-primary justify-center py-4 text-base">
                Submit Admission Enquiry
              </button>
              <p className="text-xs text-center text-gray-400 font-body">
                By submitting, you agree to be contacted by our admissions team. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
