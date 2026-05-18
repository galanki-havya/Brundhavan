import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Monitor, BookOpen, Users, Zap } from 'lucide-react'
import smartClassroomsImg from '../../assets/Facilties/3.jpg'
import smartClassroomsRightImg from '../../assets/rightimages/3.jpg'

export default function SmartClassrooms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Smart Classrooms"
        subtitle="Technology-enabled learning environments with interactive teaching tools and digital resources."
        backgroundImage={smartClassroomsImg}
        fullOpacity={true}
        objectPosition="object-top"
        showOverlay={false}
      />

      {/* ── MAIN INTRODUCTION SECTION ── */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #EEF6FF 0%, #FFF8EE 50%, #F0FFF4 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm"
                style={{ background: '#DBEAFE', color: '#1D4ED8' }}
              >
                <Monitor className="w-4 h-4" />
                Technology-Enabled
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#0D1B3E' }}>
                Future-Ready <br />
                Interactive <span className="text-[#C89B3C]">Smart Classrooms</span>
              </h2>

              <div className="space-y-5 text-lg font-body leading-relaxed text-slate-600">
                <p>
                  Brindavan School integrates cutting-edge technology directly into the core learning experience. Our interactive classrooms replace traditional blackboards with dynamic digital displays that bring complex concepts to life.
                </p>
                <p>
                  By combining video animations, audio tutorials, and real-time interactive exercises, our students learn actively and absorb information faster, making education engaging, collaborative, and highly effective.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  to="/admission-form"
                  className="font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 hover:scale-105 inline-flex items-center gap-2"
                  style={{ background: '#C89B3C', color: '#0D1B3E' }}
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/facilities"
                  className="px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:bg-[#1D4ED8] hover:text-white inline-flex items-center gap-2"
                  style={{ borderColor: '#1D4ED8', color: '#1D4ED8' }}
                >
                  All Facilities
                </Link>
              </div>
            </motion.div>

            {/* Right: Interactive Image Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-[#C89B3C] rounded-[2rem] rotate-3 group-hover:rotate-1 transition-transform duration-500" />
                <img
                  src={smartClassroomsRightImg}
                  alt="Smart Classrooms"
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
                />
                
                {/* Floating Stat Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 z-20 bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] flex items-center justify-center">
                      <Monitor className="w-7 h-7 text-[#1D4ED8]" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-[#0D1B3E]">100%</div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Interactive Rooms</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Interactive Displays",
                description: "Large touch-screen displays for collaborative learning and multimedia presentations"
              },
              {
                icon: BookOpen,
                title: "Digital Content",
                description: "Access to vast digital libraries, educational videos, and interactive simulations"
              },
              {
                icon: Users,
                title: "Student Engagement",
                description: "Tools that promote active participation and real-time feedback"
              },
              {
                icon: Zap,
                title: "Modern Technology",
                description: "Latest educational software and hardware for 21st-century learning"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Technology Integration
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              State-of-the-art technology seamlessly integrated into the learning process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Hardware</h3>
              <ul className="space-y-3">
                {["Interactive Whiteboards", "Student Tablets", "Audio Systems", "Video Conferencing", "Smart Projectors"].map(tech => (
                  <li key={tech} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Software & Platforms</h3>
              <ul className="space-y-3">
                {["Educational Apps", "Learning Management System", "Digital Assessment Tools", "Virtual Labs", "Online Resources"].map(software => (
                  <li key={software} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{software}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}