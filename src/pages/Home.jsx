import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useRef, useEffect, useState } from 'react'

import {
  Play,
  ArrowRight,
  Palette,
  Trophy,
  Music,
  Leaf,
  GraduationCap,
  Users,
  Star,
  BookOpen,
} from 'lucide-react'

import sportsImg from '/images/gallery/Sports.jpg'
import artsImg from '/images/gallery/Doctor.jpg'
import musicImg from '/images/gallery/AnnualDay/1.jpg'
import ecoImg from '/images/gallery/ChildrensDay/1.jpg'

import Hero from '../components/Hero'
import WhyBrindavan from '../components/WhyBrindavan'
import SubjectAreas from '../components/SubjectAreas'
import LogoMeaning from '../components/LogoMeaning'
import ManagementMessage from '../components/ManagementMessage'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import GlobalBackground from '../components/GlobalBackground'

// ── COLOR TOKENS ─────────────────────────────────────────────────────────
// Primary Pink:   #FF6347  (hot pink — hero highlight, CTAs, badges)
// Pink Light:     #FF8C6B  (soft pink — backgrounds, tints)
// Pink Deep:      #C4391E  (deep rose — hover states)
// Coral/Orange:   #F97316  (warm accent)
// Navy:           #1B3A8A  (text, headings)
// Gold:           #C89B3C  (dividers, subtle accents)

// ── Animated Counter Hook ────────────────────────────────────────────────
function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const step = target / (duration / 16)

    const timer = setInterval(() => {
      start += step

      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

// ── Featured Videos ──────────────────────────────────────────────────────
const featuredVideos = [
  { id: 'AlEJrXOaJgA', title: 'Annual Day Highlights' },
  { id: 'rk4-FFGeTeQ', title: 'Campus Tour 2026' },
  { id: 'TyVtsefUtRc', title: 'Student Achievements' },
]

// ── Activities ───────────────────────────────────────────────────────────
const featuredActivities = [
  {
    icon: Trophy,
    label: 'Sports Meet 2026',
    tag: 'Sports Championship',
    desc: 'Students showcased teamwork, discipline, and athletic excellence through exciting indoor and outdoor sports competitions.',
    accent: 'from-[#FFF3F0] to-[#FFD6EC]',
    iconColor: '#FF6347',
    tagBg: 'bg-[#FF6347]',
    image: sportsImg,
  },
  {
    icon: Palette,
    label: 'Doctors Day Celebration',
    tag: 'Special Celebration',
    desc: 'Students honored healthcare heroes through roleplay activities, awareness programs, and creative presentations.',
    accent: 'from-[#FFF5F0] to-[#FFE0CC]',
    iconColor: '#F97316',
    tagBg: 'bg-[#F97316]',
    image: artsImg,
  },
  {
    icon: Music,
    label: 'Annual Day Fest',
    tag: 'Cultural Event',
    desc: 'A grand celebration filled with dance, music, drama, and student performances that brought the entire campus alive.',
    accent: 'from-[#FFF3F0] to-[#F9C8E3]',
    iconColor: '#FF6347',
    tagBg: 'bg-[#FF6347]',
    image: musicImg,
  },
  {
    icon: Leaf,
    label: "Children's Day Fun",
    tag: 'Student Celebration',
    desc: 'A joyful day of games, performances, fun activities, and memorable moments dedicated to our beloved students.',
    accent: 'from-[#FFF5F0] to-[#FFDDD4]',
    iconColor: '#F97316',
    tagBg: 'bg-[#F97316]',
    image: ecoImg,
  },
]

// ── Stats ────────────────────────────────────────────────────────────────
const statsData = [
  { raw: 2025, suffix: '', label: 'Founded', icon: Star },
  { raw: 350, suffix: '+', label: 'Young Learners', icon: Users },
  { raw: 25, suffix: '+', label: 'Expert Faculty', icon: GraduationCap },
  { raw: 12, suffix: '+', label: 'Modern Facilities', icon: BookOpen },
]

// ── Announcement Ticker ─────────────────────────────────────────────────
const announcements = [
  '🎓 Admissions Open for 2026–27 — Apply Now',
  '🏆 Brindavan Students Win District Science Olympiad',
  '📅 Annual Day Celebrations — Save the Date',
  '🌿 New Eco Club Activities Starting This Month',
  '📖 Board Exam Results: 100% Pass Rate Achieved',
  '🎵 Cultural Fest Registration Now Open',
]

// ── Animated Stat Card ──────────────────────────────────────────────────
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
      {/* Icon circle with pink gradient ring */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFF3F0] to-[#FFD6EC] flex items-center justify-center mb-4 shadow-md ring-2 ring-[#FF8C6B]/30">
        <Icon size={26} style={{ color: '#FF6347' }} />
      </div>

      <div
        className="text-3xl md:text-4xl font-display font-bold"
        style={{
          background: 'linear-gradient(135deg, #FF6347 0%, #F97316 60%, #C89B3C 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>

      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#1B3A8A]/70 mt-2">
        {label}
      </div>
    </motion.div>
  )
}

// ── Pink Divider ────────────────────────────────────────────────────────
function PinkDivider() {
  return (
    <div className="relative h-[2px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6347]/35 to-transparent" />
    </div>
  )
}

// ── Section Label ───────────────────────────────────────────────────────
function SectionLabel({ color = '#FF6347', children }) {
  return (
    <p
      className="uppercase tracking-[0.28em] text-sm font-bold mb-2 flex items-center gap-2"
      style={{ color }}
    >
      <span
        className="inline-block w-6 h-[2px] rounded-full"
        style={{ background: color }}
      />
      {children}
    </p>
  )
}

// ── HOME PAGE ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <GlobalBackground>
      <>
        <Helmet>
          <title>Brindavan School | Best State Board School in Palamaner</title>
          <meta
            name="description"
            content="Brindavan School — Palamaner's leading State Board school. Academic excellence, holistic development, and values-driven education."
          />
          <meta property="og:title" content="Brindavan School | Palamaner" />
          <meta property="og:description" content="Admissions open for 2026–27. Join Brindavan School." />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#FF6347" />
        </Helmet>

        {/* ── ANNOUNCEMENT TICKER ───────────────────────── */}
        <div
          className="relative overflow-hidden py-2 z-40"
          style={{ background: 'linear-gradient(90deg, #C4391E 0%, #FF6347 50%, #F97316 100%)' }}
        >
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #C4391E, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #F97316, transparent)' }}
          />

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="text-[12px] font-medium text-white/95 flex-shrink-0">
                {item}
                <span className="mx-6 text-white/50">◆</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── HERO ─────────────────────────────────────── */}
        <Hero />

        {/* ── STATS ────────────────────────────────────── */}
        <section className="relative py-14 bg-white border-y border-[#FFD8CC]/60">
          {/* Subtle pink blob top-left */}
          <div
            className="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(circle, #FF6347, transparent 70%)' }}
          />
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((s, i) => (
                <StatCard key={s.label} {...s} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <PinkDivider />

        {/* ── MAIN SECTIONS ───────────────────────────── */}
        <WhyBrindavan />
        <SubjectAreas />

        <PinkDivider />

        {/* ── YOUTUBE SECTION ─────────────────────────── */}
        <Section className="py-24 bg-gradient-to-b from-white to-[#FFF5FA] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
              <div>
                <SectionLabel color="#FF6347">Watch Us In Action</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A]">
                  Life at Brindavan
                </h2>
              </div>

              <a
                href="https://www.youtube.com/@brindavanschool-p7m"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-200 flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #FF6347 0%, #F97316 100%)',
                }}
              >
                <Play size={16} />
                Subscribe
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-video overflow-hidden rounded-[28px] bg-white border-2 border-[#FFD8CC] shadow-xl shadow-red-100">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-2 px-2">
                    <Play size={16} style={{ color: '#FF6347' }} />
                    <h3 className="font-bold text-[#1B3A8A]">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <PinkDivider />

        {/* ── ACTIVITIES ───────────────────────────────── */}
        <Section className="py-24 bg-gradient-to-b from-[#FFF8F6] to-white backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
              <div>
                <SectionLabel color="#FF6347">Beyond the Classroom</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A]">
                  Celebrating Learning & Growth
                </h2>
                <p className="mt-4 text-[#475569] max-w-xl">
                  Every event, every club, every stage moment shapes who your child becomes.
                </p>
              </div>

              <Link
                to="/activities"
                className="group text-white px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-orange-200"
                style={{ background: 'linear-gradient(135deg, #FF6347 0%, #C4391E 100%)' }}
              >
                All Activities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
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
                    className={`group relative overflow-hidden rounded-[32px] bg-gradient-to-br ${activity.accent} border-2 border-[#FFD8CC]/60 shadow-[0_15px_40px_rgba(255,99,71,0.10)]`}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full ${activity.tagBg} text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg`}>
                          {activity.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
                        style={{ background: 'linear-gradient(135deg, #FFF0F7, #FFD6EC)' }}
                      >
                        <Icon size={26} style={{ color: activity.iconColor }} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0F172A] mb-3">{activity.label}</h3>

                      <p className="text-[#475569] text-[14px] leading-relaxed">{activity.desc}</p>

                      {/* Pink animated underline bar */}
                      <div
                        className="mt-6 h-[3px] w-14 rounded-full group-hover:w-24 transition-all duration-500"
                        style={{ background: 'linear-gradient(90deg, #FF6347, #F97316)' }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        <PinkDivider />

        <LogoMeaning />

        <PinkDivider />

        <ManagementMessage />

        <PinkDivider />

        <Facilities />

        <PinkDivider />

        <div
          className="bg-white"
        >
          <Gallery />
          <Testimonials />
        </div>

      </>
    </GlobalBackground>
  )
}