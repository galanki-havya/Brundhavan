import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { siteData } from '../data/site'

const { programs } = siteData

function PageBanner({ title, subtitle }) {
  return (
    <div className="relative bg-charcoal-900 pt-32 pb-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 to-primary-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-subheading text-primary-400">{subtitle}</p>
        <h1 className="font-display font-black text-4xl md:text-5xl text-white">{title}</h1>
      </div>
    </div>
  )
}

const activities = [
  { icon: '🏏', name: 'Cricket' }, { icon: '🏀', name: 'Basketball' },
  { icon: '🎭', name: 'Drama & Theatre' }, { icon: '🎵', name: 'Music' },
  { icon: '🎨', name: 'Fine Arts' }, { icon: '🤖', name: 'Robotics Club' },
  { icon: '📸', name: 'Photography' }, { icon: '🌿', name: 'Eco Club' },
  { icon: '💬', name: 'Debate' }, { icon: '🔭', name: 'Astronomy' },
  { icon: '📚', name: 'Book Club' }, { icon: '💃', name: 'Classical Dance' },
]

export default function Academics() {
  return (
    <>
      <PageBanner title="Academics at Brundavan" subtitle="Curriculum & Programmes" />

      {/* Curriculum Overview */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">Our Approach</p>
              <h2 className="section-heading">A Curriculum Built for Tomorrow</h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Brundavan School follows a comprehensive English Medium curriculum designed to provide quality education. Our approach integrates concept-based learning, practical activities, and experiential learning to ensure students develop strong academic fundamentals.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                We go beyond textbooks. Our students engage in cross-disciplinary projects, STEM challenges, social outreach, and leadership programmes that build real-world competence alongside board-exam readiness.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'NEP 2020 Aligned', icon: '✅' },
                  { label: 'Activity-Based Learning', icon: '🔬' },
                  { label: 'Digital Classrooms', icon: '💻' },
                  { label: 'Bilingual Support', icon: '🌐' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 bg-primary-50 rounded-xl p-3">
                    <span>{item.icon}</span>
                    <span className="font-body text-sm font-medium text-charcoal-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=85"
                alt="Library"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Programs */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subheading">Grade-Wise</p>
            <h2 className="section-heading">Academic Programmes</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto">
              Tailored learning journeys for every stage of a child's development.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.level}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white font-display font-black text-xl shadow-md`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display font-bold text-xl text-charcoal-900">{prog.level}</h3>
                    <span className="text-xs font-body font-medium bg-primary-100 text-primary-700 px-3 py-1 rounded-full">{prog.age}</span>
                  </div>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Co-curricular */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subheading">Beyond the Classroom</p>
            <h2 className="section-heading">Co-Curricular Activities</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto">
              We believe a well-rounded education goes far beyond academics. Explore 30+ clubs and activity programmes.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {activities.map((act, i) => (
              <motion.div
                key={act.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="bg-primary-50 hover:bg-primary-100 rounded-2xl p-4 text-center transition-colors cursor-default"
              >
                <div className="text-3xl mb-2">{act.icon}</div>
                <div className="font-body text-xs font-medium text-charcoal-800">{act.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
