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

import sportsImg from '/images/gallery/cocircullar.png'
import artsImg from '/images/gallery/Doctor.jpg'
import musicImg from '/images/gallery/AnnualDay/19.jpg'
import ecoImg from '/images/gallery/ChildrensDay/1.jpg'

import Hero from '../components/Hero'
import WhyBrindavan from '../components/WhyBrindavan'
import SubjectAreas from '../components/SubjectAreas'
import LogoMeaning from '../components/LogoMeaning'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import GlobalBackground from '../components/GlobalBackground'

// ── Thick Bold Divider ───────────────────────────────────────
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

// ── Data ────────────────────────────────────────────────────────────────
const featuredVideos = [
  { id: 'AlEJrXOaJgA', title: 'Annual Day Highlights' },
  { id: 'rk4-FFGeTeQ', title: 'Campus Tour 2026' },
  { id: 'TyVtsefUtRc', title: 'Student Achievements' },
]

const featuredActivities = [
  { icon: Trophy, label: 'Sports Meet 2026', tag: 'Sports Championship', desc: 'Students showcased teamwork, discipline, and athletic excellence.', iconColor: '#ec733a', tagBg: 'bg-[#ec733a]', image: sportsImg },
  { icon: Palette, label: 'Doctors Day Celebration', tag: 'Special Celebration', desc: 'Students honored healthcare heroes through creative presentations.', iconColor: '#F97316', tagBg: 'bg-[#F97316]', image: artsImg },
  { icon: Music, label: 'Annual Day Fest', tag: 'Cultural Event', desc: 'A grand celebration filled with dance, music, and drama.', iconColor: '#ec733a', tagBg: 'bg-[#ec733a]', image: musicImg },
  { icon: Leaf, label: "Children's Day Fun", tag: 'Student Celebration', desc: 'A joyful day of games, performances, and memorable moments.', iconColor: '#F97316', tagBg: 'bg-[#F97316]', image: ecoImg },
]

const statsData = [
  { raw: 2025, suffix: '', label: 'Founded', icon: Star },
  { raw: 350, suffix: '+', label: 'Young Learners', icon: Users },
  { raw: 25, suffix: '+', label: 'Expert Faculty', icon: GraduationCap },
  { raw: 12, suffix: '+', label: 'Modern Facilities', icon: BookOpen },
]

const PALETTE = [
  { bg: '#FFF8F6', border: '#FFCFC4', accentColor: '#FF6347', iconBg: '#FFF0EC' },
  { bg: '#EEF3FB', border: '#B8CFF0', accentColor: '#1a3a6b', iconBg: '#E4EDFA' },
  { bg: '#FFFBEE', border: '#F5DFA0', accentColor: '#B8860B', iconBg: '#FFF5D6' },
  { bg: '#F0FAF4', border: '#A8DDB8', accentColor: '#2E7D4F', iconBg: '#E2F5EA' },
]

// ── Sub-Components ────────────────────────────────────────────────────────
function StatCard({ raw, suffix, label, icon: Icon, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(raw, 1600, inView)

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.5 }} className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#F9FAFB] flex items-center justify-center mb-4 shadow-md border border-gray-100">
        <Icon size={26} style={{ color: '#ec733a' }} />
      </div>
      <div className="text-3xl md:text-4xl font-display font-bold" style={{ background: 'linear-gradient(135deg, #ec733a 0%, #F97316 60%, #C89B3C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#1B3A8A]/70 mt-2">{label}</div>
    </motion.div>
  )
}

function SectionLabel({ color = '#ec733a', children }) {
  return (
    <p className="uppercase tracking-[0.28em] text-sm font-bold mb-2 flex items-center gap-2" style={{ color }}>
      <span className="inline-block w-6 h-[2px] rounded-full" style={{ background: color }} />
      {children}
    </p>
  )
}

// ── HOME PAGE ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <GlobalBackground>
      <Helmet>
        <title>Brindavan School | Best State Board School in Palamaner</title>
      </Helmet>

      <Hero />

      <section className="relative py-14 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      <ClearDivider />
      <WhyBrindavan />
      <ClearDivider />

      <SubjectAreas />
      <ClearDivider />

      <Section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
            <div>
              <SectionLabel color="#ec733a">Watch Us In Action</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A]">Life at Brindavan</h2>
            </div>
            <a
              href="https://www.youtube.com/@brindavanschool-p7m?si=qTI0VlwfEjU79hoy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation()
                window.open(
                  'https://www.youtube.com/@brindavanschool-p7m?si=qTI0VlwfEjU79hoy',
                  '_blank'
                )
              }} className="text-white px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #ec733a 0%, #F97316 100%)' }}>
              <Play size={16} /> Subscribe
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-video overflow-hidden rounded-[28px] bg-[#F9FAFB] border border-gray-200 shadow-md">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allowFullScreen />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <ClearDivider />


<Section className="py-24 bg-[#FFFFFF]">
  <div className="max-w-7xl mx-auto px-4">
    <div className="mb-14">
      <SectionLabel color="#ec733a">Beyond the Classroom</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A]">
        Celebrating Learning & Growth
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {featuredActivities.map((activity, i) => {
        const palette = PALETTE[i % PALETTE.length]
        return (
          <motion.div
            key={activity.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative overflow-hidden flex flex-col rounded-[18px] transition-all duration-300"
            style={{
              background: palette.bg,
              border: `1px solid ${palette.border}`,
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            }}
          >
            <div className="relative h-56 overflow-hidden" style={{ background: palette.iconBg }}>
              <img
                src={activity.image}
                alt={activity.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span style={{
                  background: palette.bg,
                  padding: '4px 12px', borderRadius: 40,
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: palette.accentColor,
                  border: `1px solid ${palette.border}`,
                }}>
                  {activity.tag}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                style={{ background: palette.iconBg }}
              >
                <activity.icon size={26} style={{ color: palette.accentColor }} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{activity.label}</h3>
              <p className="text-[#302f2f] text-[14px] leading-relaxed flex-grow">{activity.desc}</p>
              <div
                className="mt-5 rounded-full"
                style={{ height: 2, width: 28, background: palette.accentColor }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  </div>
</Section>
      <ClearDivider />
      <LogoMeaning />
      <ClearDivider />
      <Facilities />
      <ClearDivider />
      <div className="bg-[#F9FAFB]">
        <Gallery />
        <ClearDivider />
        <Testimonials />
      </div>
    </GlobalBackground>
  )
}