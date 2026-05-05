import { motion } from 'framer-motion'
import Section from '../components/Section'
import { siteData } from '../data/site'
import { Link } from 'react-router-dom'

const { school, vision, mission, chairman, principal } = siteData

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=90"
          alt="School campus"
          className="absolute w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.target.src = '/images/hero-poster.jpg';
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold">About Brundavan</h1>
          <p className="mt-3 text-xl text-white/90">Our Heritage & Vision</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=85"
                alt="Brundavan students"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/hero-poster.jpg';
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p className="text-gold-500 font-semibold text-sm tracking-wide uppercase mb-2">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                  20+ Years of Quality Education
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in {school.established}, Brundavan School has been a trusted name in education for over 20 years. Today, we are home to over 1,500 students and a dedicated team of 85+ experienced educators committed to academic excellence and holistic development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a CBSE-affiliated school, we offer a comprehensive curriculum with a focus on academics, sports, and extracurricular activities. Our commitment is to provide quality education with a personal touch, ensuring every student reaches their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold text-sm tracking-wide uppercase mb-3">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Vision & Mission</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">{vision}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{mission}</p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🏆', label: 'Excellence' },
              { icon: '🤝', label: 'Integrity' },
              { icon: '💡', label: 'Innovation' },
              { icon: '🌱', label: 'Growth' },
            ].map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <div className="font-display font-bold text-gray-900">{value.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold text-sm tracking-wide uppercase mb-3">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Messages from Our Leaders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { ...chairman, color: 'primary' },
              { ...principal, color: 'gold' },
            ].map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${leader.color}-600 flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0`}>
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-gray-900">{leader.name}</h3>
                    <p className={`text-${leader.color}-600 font-semibold text-sm`}>{leader.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">{leader.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Join Brundavan?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Experience education that transforms lives and builds futures.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-display font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            Explore Admissions
          </Link>
        </div>
      </section>
    </div>
  )
}
