import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { 
  GraduationCap, Users, Award, Heart, 
  Target, ShieldCheck, Lightbulb, 
  HandshakeIcon, Star, Sprout 
} from 'lucide-react'
import Overview from '/images/gallery/overview.png'

export default function AboutOverview() {
  return (
    <>
      <Helmet>
        <title>Best School in Palamaner | About Brindavan School</title>
        <meta
          name="description"
          content="Learn about Brindavan School, Palamaner — a modern educational institution focused on academic excellence, discipline, innovation, and holistic student development."
        />
      </Helmet>

      {/* ── HERO SECTION WITH BACKGROUND ── */}
      <PageHero
        title="About Brindavan School"
        subtitle="Discover our rich heritage, values, and commitment to educational excellence."
        backgroundImage="/images/gallery/overview.png"
      />

      {/* ── MAIN ABOUT SECTION ── */}
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
                <GraduationCap className="w-4 h-4" />
                Since May 2025
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#0D1B3E' }}>
                Modern Education for <br />
                <span className="text-[#C89B3C]">Future Leaders</span>
              </h2>

              <div className="space-y-5 text-lg font-body leading-relaxed text-slate-600">
                <p>
                  Brindavan School was founded with a vision to redefine quality education in Palamaner. Built with modern infrastructure and a commitment to innovation, we create a safe, disciplined, and nurturing environment.
                </p>
                <p>
                  We focus on building strong academic foundations while developing character, communication skills, and self-confidence. With a CCTV-monitored campus and activity-based learning, we are a trusted partner in your child's growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  to="/about/vision-mission"
                  className="font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 hover:scale-105 inline-flex items-center gap-2"
                  style={{ background: '#C89B3C', color: '#0D1B3E' }}
                >
                  Our Vision & Mission
                </Link>
                <Link
                  to="/about/chairman"
                  className="px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:bg-[#1D4ED8] hover:text-white inline-flex items-center gap-2"
                  style={{ borderColor: '#1D4ED8', color: '#1D4ED8' }}
                >
                  Meet Our Leaders
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
                  src="/images/gallery/Infrastructure/4.jpg"
                  alt="Brindavan School Campus"
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
                  onError={e => { e.currentTarget.src = '/images/gallery/Infrastructure/8.jpg' }}
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
                      <Users className="w-7 h-7 text-[#1D4ED8]" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-[#0D1B3E]">250+</div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Students</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY PARENTS CHOOSE US ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Why Parents Choose Brindavan
            </h2>
            <div className="w-24 h-1.5 bg-[#C89B3C] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Safe Campus', emoji: '🔒', desc: 'Full CCTV coverage', color: '#C2410C', bg: 'linear-gradient(135deg, #FFE8D9 0%, #FFD6B8 100%)' },
              { label: 'Expert Faculty', emoji: '🎓', desc: 'Qualified & Caring', color: '#15803D', bg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)' },
              { label: 'Modern Labs', emoji: '🧩', desc: 'Activity Learning', color: '#4338CA', bg: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)' },
              { label: 'Excellence', emoji: '⭐', desc: 'Strong Academics', color: '#A16207', bg: 'linear-gradient(135deg, #FEF9C3 0%, #FDE68A 100%)' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden group transition-all"
                style={{ background: stat.bg }}
              >
                <div className="text-5xl mb-6 transform group-hover:scale-125 transition-transform duration-300">{stat.emoji}</div>
                <h4 className="text-xl font-bold mb-2" style={{ color: stat.color }}>{stat.label}</h4>
                <p className="text-slate-600 font-medium">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <p className="text-[#C89B3C] font-bold uppercase tracking-widest text-sm mb-4">Our DNA</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0D1B3E]">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Excellence', icon: Target, desc: 'Striving for the highest standards in every student.', color: '#9A3412', bg: '#FFE8D9' },
              { title: 'Integrity', icon: ShieldCheck, desc: 'Building ethical character and moral strength.', color: '#5B21B6', bg: '#E7E3FF' },
              { title: 'Innovation', icon: Lightbulb, desc: 'Modern methodologies for a modern world.', color: '#854D0E', bg: '#FEF9C3' },
              { title: 'Community', icon: Users, desc: 'A united family of parents, staff, and students.', color: '#1E40AF', bg: '#D9F0FF' },
              { title: 'Respect', icon: Heart, desc: 'Respect for self, others, and the environment.', color: '#9D174D', bg: '#FFE0EC' },
              { title: 'Growth', icon: Sprout, desc: 'Fostering lifelong learners and achievers.', color: '#14532D', bg: '#DCFCE7' },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ shadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                className="p-10 rounded-[2rem] border border-slate-100 transition-all duration-300 flex flex-col items-center text-center group"
                style={{ background: value.bg + '40' }} // Subtle background tint
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: value.color }}>{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}