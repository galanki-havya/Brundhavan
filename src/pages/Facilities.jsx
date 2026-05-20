import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Microscope, Music, Gamepad2 } from 'lucide-react'
import Section from '../components/Section'
import { siteData } from '../data/site'

const { facilities } = siteData
const icons = [BookOpen, Users, Trophy, Microscope, Music, Gamepad2]

// 4-colour rotating palette — mirrors Academic Approach
const PALETTE = [
  { bg: '#FFF8F6', border: '#FFCFC4', accentColor: '#FF6347', iconBg: '#FFF0EC', iconHoverBg: '#FF6347' },
  { bg: '#EEF3FB', border: '#B8CFF0', accentColor: '#1a3a6b', iconBg: '#E4EDFA', iconHoverBg: '#1a3a6b' },
  { bg: '#FFFBEE', border: '#F5DFA0', accentColor: '#B8860B', iconBg: '#FFF5D6', iconHoverBg: '#B8860B' },
  { bg: '#F0FAF4', border: '#A8DDB8', accentColor: '#2E7D4F', iconBg: '#E2F5EA', iconHoverBg: '#2E7D4F' },
]

export default function Facilities() {
  return (
    <Section className="relative py-24 bg-slate-50/50 overflow-hidden font-sans">

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#011E3A]/[0.04] rounded-full translate-x-1/4 -translate-y-1/4 blur-[120px] pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#ea580c]/[0.04] rounded-full -translate-x-1/4 translate-y-1/4 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span className="text-[#FF6347] font-bold text-xs sm:text-sm tracking-[3px] uppercase">
              Our Campus Infrastructure
            </span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011E3A] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class Facilities
          </h2>

          <div className="w-12 h-1 bg-[#FF6347] mx-auto mb-5 rounded-full" />

          <p className="text-slate-700 text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Every space on our campus is thoughtfully designed to inspire premium learning, creativity, and structural growth.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => {
            const Icon = icons[i] || BookOpen
            const palette = PALETTE[i % PALETTE.length]

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[18px] flex flex-col transition-all duration-300"
                style={{
                  background: palette.bg,
                  border: `1px solid ${palette.border}`,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  padding: '28px 24px 24px',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{ background: palette.iconBg }}
                  onMouseEnter={e => e.currentTarget.style.background = palette.iconHoverBg}
                  onMouseLeave={e => e.currentTarget.style.background = palette.iconBg}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: palette.accentColor }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-lg xl:text-xl text-[#011E3A] tracking-tight mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-[14.5px] leading-relaxed font-medium flex-grow">
                  {f.desc}
                </p>

                {/* Accent line */}
                <div
                  className="mt-5 rounded-full"
                  style={{ height: 2, width: 28, background: palette.accentColor }}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </Section>
  )
}