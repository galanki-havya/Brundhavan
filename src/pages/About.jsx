import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { siteData } from '../data/site'

const { school, vision, mission, chairman, principal } = siteData

function PageBanner({ title, subtitle }) {
  return (
    <div className="relative bg-charcoal-900 pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 to-primary-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="section-subheading text-primary-400"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-4xl md:text-5xl text-white"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageBanner title="About Brundavan School" subtitle="Our Story" />

      {/* Overview */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">Who We Are</p>
              <h2 className="section-heading">20+ Years of Quality Education</h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Founded in {school.established}, Brundavan School has been a trusted name in education for over 20 years. Today, we are home to over 1,500 students and a dedicated team of 85+ experienced educators committed to academic excellence and holistic development.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                As an English Medium school, we offer a comprehensive curriculum with a focus on academics, sports, and extracurricular activities. Our commitment is to provide quality education with a personal touch, ensuring every student reaches their full potential.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                With modern facilities and a supportive learning environment, Brundavan School is dedicated to building confident, capable learners ready for the challenges of tomorrow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-card row-span-2">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="Students learning" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&q=80" alt="Science lab" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&q=80" alt="Sports" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subheading">Our Purpose</p>
            <h2 className="section-heading">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🌟</div>
              <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-4">Our Vision</h3>
              <p className="font-body text-gray-600 leading-relaxed">{vision}</p>
            </Card>
            <Card className="p-8">
              <div className="w-14 h-14 bg-gold-400/20 rounded-2xl flex items-center justify-center mb-6 text-2xl">🎯</div>
              <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-4">Our Mission</h3>
              <p className="font-body text-gray-600 leading-relaxed">{mission}</p>
            </Card>
          </div>

          {/* Values */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏆', label: 'Excellence' },
              { icon: '🤝', label: 'Integrity' },
              { icon: '💡', label: 'Innovation' },
              { icon: '🌱', label: 'Growth' },
            ].map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 text-center shadow-card"
              >
                <div className="text-3xl mb-2">{v.icon}</div>
                <div className="font-display font-semibold text-charcoal-900">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Messages */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subheading">Leadership</p>
            <h2 className="section-heading">Messages from Our Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[chairman, principal].map((leader, i) => (
              <Card key={leader.name} delay={i * 0.15} className="p-8 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-display font-bold text-xl">
                    {leader.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <div className="font-display font-bold text-charcoal-900 text-lg">{leader.name}</div>
                    <div className="text-primary-600 font-body text-sm font-medium">{leader.title}</div>
                  </div>
                </div>
                <div className="text-3xl text-primary-200 font-display leading-none">"</div>
                <p className="font-body text-gray-600 leading-relaxed -mt-4">{leader.message}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
