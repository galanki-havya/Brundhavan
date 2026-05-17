import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useRef, useEffect, useState } from 'react'

import { Play, ArrowRight, Palette, Trophy, Music, Leaf, GraduationCap, Users, Star, BookOpen } from 'lucide-react'
import sportsImg from '/images/gallery/Sports.jpg'
import artsImg   from '/images/gallery/Doctor.jpg'
import musicImg  from '/images/gallery/AnnualDay/1.jpg'
import ecoImg    from '/images/gallery/ChildrensDay/1.jpg'

import Hero             from '../components/Hero'
import WhyBrindavan     from '../components/WhyBrindavan'
import SubjectAreas     from '../components/SubjectAreas'
import LogoMeaning      from '../components/LogoMeaning'
import ManagementMessage from '../components/ManagementMessage'
import Facilities       from '../components/Facilities'
import Gallery          from '../components/Gallery'
import Testimonials     from '../components/Testimonials'
import Section          from '../components/Section'
import GlobalBackground from '../components/GlobalBackground'

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

// ── Data ───────────────────────────────────────────────────────────────────
const featuredVideos = [
  { id: "dQw4w9WgXcQ", title: "Annual Day Highlights" },
  { id: "dQw4w9WgXcQ", title: "Campus Tour 2026"      },
  { id: "dQw4w9WgXcQ", title: "Student Achievements"  },
]

const featuredActivities = [
  {
    icon: Trophy,
    label: 'Sports Meet 2026',
    tag: 'Sports Championship',
    desc: 'Students showcased teamwork, discipline, and athletic excellence through exciting indoor and outdoor sports competitions.',
    accent: 'from-[#FFE8D9] to-[#FFD6B8]',
    iconColor: '#E63946',
    image: sportsImg,
  },
  {
    icon: Palette,
    label: 'Doctors Day Celebration',
    tag: 'Special Celebration',
    desc: 'Students honored healthcare heroes through roleplay activities, awareness programs, and creative presentations.',
    accent: 'from-[#E7E3FF] to-[#D5CCFF]',
    iconColor: '#8B5CF6',
    image: artsImg,
  },
  {
    icon: Music,
    label: 'Annual Day Fest',
    tag: 'Cultural Event',
    desc: 'A grand celebration filled with dance, music, drama, and student performances that brought the entire campus alive.',
    accent: 'from-[#FFF4CC] to-[#FFE799]',
    iconColor: '#C89B3C',
    image: musicImg,
  },
  {
    icon: Leaf,
    label: "Children's Day Fun",
    tag: 'Student Celebration',
    desc: 'A joyful day of games, performances, fun activities, and memorable moments dedicated to our beloved students.',
    accent: 'from-[#DCFCE7] to-[#BBF7D0]',
    iconColor: '#22C55E',
    image: ecoImg,
  },
]

const petalColors = [
  '#E63946','#F28C28','#F4C430',
  '#22C55E','#14B8A6','#42A5F5',
  '#8B5CF6','#EC4899','#84CC16',
]

// Stats with raw numeric values for counter animation
const statsData = [
  {
    raw: 2025,
    suffix: '',
    label: 'Founded',
    icon: Star,
  },
  {
    raw: 350,
    suffix: '+',
    label: 'Young Learners',
    icon: Users,
  },
  {
    raw: 25,
    suffix: '+',
    label: 'Expert Faculty',
    icon: GraduationCap,
  },
  {
    raw: 12,
    suffix: '+',
    label: 'Modern Facilities',
    icon: BookOpen,
  },
]

// Scrolling announcement ticker items
const announcements = [
  '🎓 Admissions Open for 2026–27 — Apply Now',
  '🏆 Brindavan Students Win District Science Olympiad',
  '📅 Annual Day Celebrations — Save the Date',
  '🌿 New Eco Club Activities Starting This Month',
  '📖 Board Exam Results: 100% Pass Rate Achieved',
  '🎵 Cultural Fest Registration Now Open',
]

// ── Animated stat card ─────────────────────────────────────────────────────
function StatCard({ raw, suffix, label, icon: Icon, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(raw, 1600, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
        style={{ background: 'rgba(27,58,138,0.10)' }}
      >
        <Icon size={22} style={{ color: '#1B3A8A' }} />
      </div>
      <div
        className="text-3xl md:text-4xl font-display font-bold"
        style={{
          background: 'linear-gradient(135deg, #9A6B1F, #D4A940)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-widest font-body text-[#1B3A8A] opacity-60 mt-1">
        {label}
      </div>
    </motion.div>
  )
}

// ── Thin section divider ───────────────────────────────────────────────────
function GoldDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <GlobalBackground>
      <>
        <Helmet>
          <title>Brindavan School | Best State Board School in Palamaner</title>
          <meta name="description"
            content="Brindavan School — Palamaner's leading State Board school. Academic excellence, holistic development, and values-driven education. Admissions open 2026–27." />
          <meta property="og:title"   content="Brindavan School | Palamaner" />
          <meta property="og:description" content="Admissions open for 2026–27. Join Brindavan School — excellence, values, and 100% board results." />
          <meta property="og:type"    content="website" />
          <meta name="theme-color"    content="#1B3A8A" />
        </Helmet>

        {/* ── ANNOUNCEMENT TICKER ── */}
        <div
          className="relative overflow-hidden py-2 z-40"
          style={{ background: '#1B3A8A' }}
        >
          {/* Left + right fade masks */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #1B3A8A, transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #1B3A8A, transparent)' }} />

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {/* Duplicate for seamless loop */}
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="text-[12px] font-body font-medium text-white/90 flex-shrink-0">
                {item}
                <span className="mx-6 text-[#C89B3C] opacity-60">◆</span>
              </span>
            ))}
          </motion.div>
        </div>

        <Hero />

        {/* ── KEY STATS STRIP — right after hero ── */}
        <section className="relative py-10 bg-white/90 backdrop-blur-md border-y border-primary-100/40">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-100/40">
              {statsData.map((s, i) => (
                <StatCard key={s.label} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        <WhyBrindavan />
        <SubjectAreas />

        <GoldDivider />

        {/* ── YOUTUBE SECTION ── */}
        <Section className="bg-background/80 backdrop-blur-sm py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="text-left">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-secondary-500 font-bold uppercase tracking-[0.22em] text-sm mb-2"
                >
                  Watch Us In Action
                </motion.p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800">
                  Life at Brindavan
                </h2>
              </div>
              <a
                href="https://www.youtube.com/@brindavanschool-p7m"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-blue"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="font-bold text-sm">Subscribe</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="
                    aspect-video rounded-[24px] overflow-hidden
                    bg-white border border-primary-100 shadow-card
                    group-hover:shadow-[0_10px_30px_rgba(27,58,138,0.15)]
                    transition-all duration-300
                  ">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 px-2">
                    <Play size={16} className="text-secondary-500 shrink-0" />
                    <h3 className="font-bold text-primary-700 tracking-tight">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <GoldDivider />

        {/* ── ACTIVITIES SECTION ── */}
        <Section className="bg-background/70 backdrop-blur-sm py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <p className="text-secondary-500 font-bold uppercase tracking-[0.22em] text-sm mb-2">
                  Beyond the Classroom
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800">
                  Celebrating Learning &amp; Growth
                </h2>
                <p className="mt-3 text-primary-600/70 font-body max-w-lg">
                  Every event, every club, every stage moment shapes who your child becomes.
                </p>
              </div>
              <Link
                to="/activities"
                className="group flex items-center gap-2 bg-primary-600 text-white px-7 py-3.5 rounded-full hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-blue font-bold text-sm flex-shrink-0"
              >
                All Activities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredActivities.map((activity, i) => {
                const Icon = activity.icon
                return (
                  <motion.div
                    key={activity.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -10 }}
                    className={`group relative overflow-hidden rounded-[30px] bg-gradient-to-br ${activity.accent} border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500`}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.18em] text-primary-700 shadow-sm">
                          {activity.tag}
                        </span>
                      </div>
                    </div>

                    <div className="relative p-6">
                      <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/20 blur-3xl rounded-full pointer-events-none" />
                      <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/75 backdrop-blur-md flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={26} style={{ color: activity.iconColor }} />
                      </div>
                      <h3 className="relative z-10 font-display font-bold text-xl text-[#1B3A78] mb-2 leading-tight">
                        {activity.label}
                      </h3>
                      <p className="relative z-10 text-[#4A5565] text-[14px] leading-relaxed">
                        {activity.desc}
                      </p>
                      <div className="mt-5 h-[3px] w-14 rounded-full bg-gradient-to-r from-primary-600 to-secondary-400 group-hover:w-24 transition-all duration-500" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        <GoldDivider />

        <LogoMeaning />

        <GoldDivider />

        <ManagementMessage />

        <GoldDivider />

        <Facilities />

        <GoldDivider />

        <div className="bg-white/70 backdrop-blur-sm">
          <Gallery />
          <Testimonials />
        </div>

        <GoldDivider />

        {/* ── PREMIUM CTA SECTION ── */}
        <section className="relative overflow-hidden py-14">

          <div className="absolute inset-0 bg-[#E8F0FE]" />

          {/* Depth orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#1B3A8A] opacity-[0.09] blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-[#C89B3C] opacity-[0.12] blur-3xl" />
          </div>

          {/* Petal orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-4    left-[5%]   w-20 h-20 rounded-full bg-[#E63946] opacity-[0.12] blur-2xl" />
            <div className="absolute top-8    left-[20%]  w-16 h-16 rounded-full bg-[#22C55E] opacity-[0.12] blur-2xl" />
            <div className="absolute top-3    right-[16%] w-20 h-20 rounded-full bg-[#F28C28] opacity-[0.12] blur-2xl" />
            <div className="absolute top-10   right-[5%]  w-16 h-16 rounded-full bg-[#8B5CF6] opacity-[0.12] blur-2xl" />
            <div className="absolute bottom-4 left-[8%]   w-20 h-20 rounded-full bg-[#42A5F5] opacity-[0.13] blur-2xl" />
            <div className="absolute bottom-3 right-[10%] w-20 h-20 rounded-full bg-[#EC4899] opacity-[0.11] blur-2xl" />
            <div className="absolute bottom-8 left-[44%]  w-16 h-16 rounded-full bg-[#F4C430] opacity-[0.12] blur-2xl" />
          </div>

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, #1B3A8A 1px, transparent 1px)',
            backgroundSize: '34px 34px',
            opacity: 0.06,
          }} />

          {/* Gold top line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-80" />

          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* LEFT */}
                <div className="flex-1 text-left">
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C89B3C]" />
                    <p className="uppercase tracking-[0.26em] text-[#B8862F] text-[10px] font-bold">
                      Vidya Dadathi Vinayam
                    </p>
                    <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#C89B3C]" />
                  </div>

                  <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#1B3A8A]/25 bg-[#1B3A8A]/08 text-[#1B3A8A] text-[11px] font-bold uppercase tracking-widest">
                    Admissions Open 2026–27
                  </div>

                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight text-[#0A1F4E]">
                    Join the{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #9A6B1F 0%, #D4A940 50%, #B8862F 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Brindavan
                    </span>{' '}
                    Family
                  </h2>

                  <p className="text-base md:text-lg text-[#1B3A8A] mb-6 leading-relaxed font-body opacity-75 max-w-lg">
                    Empowering young minds through academic excellence,
                    holistic development, and values-driven education.
                  </p>

                  <div className="flex items-center gap-2.5">
                    {petalColors.map((color, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-8">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                    {statsData.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-display font-bold" style={{
                          background: 'linear-gradient(135deg, #9A6B1F, #D4A940)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                          {stat.raw.toLocaleString()}{stat.suffix}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest font-body text-[#1B3A8A] opacity-60 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                    <Link
                      to="/admissions"
                      className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #C89B3C, #D4A940)',
                        color: '#0A1F4E',
                        boxShadow: '0 8px 24px rgba(200,155,60,0.32)',
                      }}
                    >
                      Apply Now
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: '#1B3A8A',
                        color: 'white',
                        boxShadow: '0 8px 24px rgba(27,58,138,0.22)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#0F2560' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#1B3A8A' }}
                    >
                      Visit Campus
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Gold bottom line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent opacity-80" />
        </section>

      </>
    </GlobalBackground>
  )
}