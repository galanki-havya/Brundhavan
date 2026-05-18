import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Globe,
  ShieldCheck,
} from 'lucide-react'
import ScienceDay from '/images/gallery/ScienceDay/1.jpg'


const missionCards = [
  { icon: '📚', title: 'Academic Excellence',    desc: 'Strong conceptual learning with modern teaching methodologies and practical understanding.', from: '#FFF4DE', to: '#FFE1B5', accent: '#D97706' },
  { icon: '💪', title: 'Character Building',     desc: 'Instilling discipline, responsibility, leadership, and moral values in every student.',       from: '#E8FFF1', to: '#C9F7D8', accent: '#15803D' },
  { icon: '🎯', title: 'Holistic Development',   desc: 'Encouraging excellence in academics, sports, arts, communication, and creativity.',           from: '#F1EBFF', to: '#DDD0FF', accent: '#6D28D9' },
  { icon: '🤝', title: 'Inclusive Learning',     desc: 'Creating equal opportunities and a supportive learning environment for all students.',         from: '#FFF7E8', to: '#FCE7B7', accent: '#A16207' },
  { icon: '🔬', title: 'Innovation & Technology',desc: 'Smart classrooms and future-ready learning experiences for modern education.',                 from: '#FFE8F1', to: '#FFD0E4', accent: '#BE185D' },
  { icon: '🌍', title: 'Global Perspective',     desc: 'Preparing students to become confident and responsible global citizens.',                      from: '#E7F8FF', to: '#C9F1FF', accent: '#0369A1' },
]

const principles = [
  { icon: Heart,      title: 'Student First',          desc: 'Every decision at Brindavan is centered around the growth, happiness, and success of our students.',              bg: 'from-[#FFF1F2] to-[#FFE4E6]', color: '#E11D48' },
  { icon: ShieldCheck,title: 'Safe Environment',        desc: 'A secure and disciplined campus that gives students the confidence to learn and grow freely.',                    bg: 'from-[#EEF2FF] to-[#E0E7FF]', color: '#4338CA' },
  { icon: Globe,      title: 'Future Readiness',        desc: 'Helping students adapt to the changing world with creativity, confidence, and communication skills.',             bg: 'from-[#ECFDF5] to-[#D1FAE5]', color: '#059669' },
  { icon: Lightbulb, title: 'Continuous Innovation',   desc: 'Enhancing learning experiences with creative teaching methods and technology integration.',                       bg: 'from-[#FFF8E7] to-[#FDE68A]', color: '#B45309' },
]

export default function VisionMission() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="The values, purpose, and aspirations that guide Brindavan School toward educational excellence."
        backgroundImage="/images/gallery/ScienceDay/1.jpg"
      />

      {/* ───────────────── VISION SECTION ───────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #F5F9FF 50%, #FFF8EC 100%)' }}
      >
        {/* Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#1B3A8A] opacity-[0.08] blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#D4A843] opacity-[0.12] blur-3xl" />
        </div>

        {/* Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #1B3A8A 1px, transparent 1px)', backgroundSize: '34px 34px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF1D6] border border-[#F6D488] text-[#A36B00] text-sm font-semibold shadow-sm">
                <Eye className="w-4 h-4" />
                Our Vision
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight text-[#0F2560]">
                Inspiring Students to Become{' '}
                <span style={{ background: 'linear-gradient(135deg, #D4A843 0%, #C89B3C 50%, #A36B00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Future Leaders
                </span>
              </h2>

              <p className="text-[#475569] leading-relaxed text-lg">
                At Brindavan School, our vision is to nurture confident, compassionate, and capable learners who excel academically, embrace strong values, and contribute positively to society.
              </p>

              <p className="text-[#64748B] leading-relaxed">
                We aim to create an inspiring educational environment where students discover their true potential through innovation, creativity, discipline, and holistic development.
              </p>

              {/* Highlight Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md border border-[#E8D4A2] p-7 shadow-[0_10px_40px_rgba(15,37,96,0.08)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4A843] via-[#F0C75E] to-[#C89B3C]" />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF4D8] flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-[#C89B3C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2560] mb-2">Our Long-Term Goal</h3>
                    <p className="text-[#475569] leading-relaxed">
                      To build a generation of knowledgeable, ethical, innovative, and socially responsible individuals ready to thrive in a rapidly evolving world.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[36px] p-10 bg-gradient-to-br from-[#1B3A8A] via-[#153070] to-[#0F2560] text-white shadow-[0_25px_60px_rgba(15,37,96,0.35)]">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D4A843] opacity-20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#60A5FA] opacity-20 blur-3xl" />

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 mb-8">
                    <Eye className="w-10 h-10 text-[#F0C75E]" />
                  </div>
                  <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#D4A843] to-[#F0C75E] mb-6" />

                  {/* ✅ FIX 1: "Looking Beyond Academics" — bright gold so it's clearly visible on dark blue */}
                  <h3
                    className="text-3xl font-bold mb-5"
                    style={{
                      color: '#FFE082',
                      textShadow: '0 2px 14px rgba(255,224,130,0.35)',
                    }}
                  >
                    Looking Beyond Academics
                  </h3>

                  <p className="text-white/80 leading-relaxed text-lg">
                    Our educational philosophy goes beyond textbooks. We focus on nurturing creativity, leadership, communication skills, emotional intelligence, and confidence in every child.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-5 mt-10">
                    {[
                      ['Founded', '2025'],
                      ['Modern Campus', 'Smart Learning'],
                      ['Focus', 'Holistic Growth'],
                      ['Environment', 'Safe & Caring'],
                    ].map((item, i) => (
                      <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                        <div className="text-[#F0C75E] text-sm font-semibold mb-1">{item[0]}</div>
                        <div className="text-white text-sm">{item[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ───────────────── MISSION SECTION ───────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #10224D 0%, #0F2560 40%, #1B3A8A 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4A843] opacity-[0.12] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#60A5FA] opacity-[0.10] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 text-[#F0C75E] text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Empowering Every Child to Succeed
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
              We strive to provide a nurturing and innovative environment where every student develops academically, emotionally, socially, and ethically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[28px] p-7 border border-white/40 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                style={{ background: `linear-gradient(135deg, ${item.from} 0%, ${item.to} 100%)` }}
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/30 blur-3xl" />
                <div className="relative z-10">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: item.accent }}>{item.title}</h3>
                  <p className="text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ───────────────── CORE PRINCIPLES ───────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #FFFDF7 0%, #F6F9FF 50%, #FFF6E8 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #1B3A8A 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-block w-20 h-1 rounded-full bg-gradient-to-r from-[#D4A843] via-[#F0C75E] to-[#C89B3C] mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F2560] mb-4">Core Principles</h2>
            <p className="max-w-2xl mx-auto text-[#64748B] text-lg">
              The values that shape our educational culture and guide every learning experience at Brindavan School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative overflow-hidden rounded-[30px] bg-gradient-to-br ${item.bg} p-8 border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)]`}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center mb-6 shadow-md">
                      <Icon size={30} style={{ color: item.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2560] mb-3">{item.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* ───────────────── CTA SECTION ───────────────── */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#0F2560] via-[#153070] to-[#1B3A8A] text-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 left-0 w-[320px] h-[320px] rounded-full bg-[#D4A843] opacity-[0.18] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#60A5FA] opacity-[0.12] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#F0C75E]" />
            <p className="uppercase tracking-[0.28em] text-[#F0C75E] text-[11px] font-bold">
              Vidya Dadathi Vinayam
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#F0C75E]" />
          </div>

          {/* ✅ FIX 2: "Join Our Educational Mission" — bright white instead of default white (which was blending) */}
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            style={{
              color: '#FFF8E1',
              textShadow: '0 2px 20px rgba(255,248,225,0.25)',
            }}
          >
            Join Our Educational Mission
          </h2>

          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Become a part of Brindavan School and help your child grow in an environment built on excellence, values, innovation, and holistic learning.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D4A843 0%, #C89B3C 100%)', color: '#0F2560', boxShadow: '0 10px 30px rgba(212,168,67,0.35)' }}
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}