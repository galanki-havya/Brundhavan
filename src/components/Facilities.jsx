import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Microscope, Music, Gamepad2 } from 'lucide-react'
import Section from './Section'
import { siteData } from '../data/site'

const { facilities } = siteData
const icons = [BookOpen, Users, Trophy, Microscope, Music, Gamepad2]

export default function Facilities() {
  return (
    <Section className="relative py-24 bg-slate-50/50 overflow-hidden font-sans">
      
      {/* Brand Subtle Architectural Glow Background overlays */}
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
          <span className="inline-block text-[#ea580c] font-bold text-xs sm:text-sm tracking-[2px] uppercase mb-3">
            Our Campus Infrastructure
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011E3A] tracking-tight mb-4">
            World-Class Facilities
          </h2>

          <div className="w-12 h-1 bg-[#ea580c] mx-auto mb-5 rounded-full" />

          <p className="text-slate-700 text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Every space on our campus is thoughtfully designed to inspire premium learning, creativity, and structural growth.
          </p>
        </motion.div>

        {/* Glassmorphism Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => {
            const Icon = icons[i] || BookOpen

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative backdrop-blur-md bg-white/75 rounded-2xl border border-white/60 p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#ea580c]/40 hover:bg-white/90 hover:shadow-xl hover:shadow-[#011E3A]/5"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(1, 30, 58, 0.03)',
                }}
              >
                {/* Micro-interaction top line focus border */}
                <div 
                  className="absolute top-0 left-0 h-[3px] w-0 bg-[#ea580c] transition-all duration-300 ease-in-out group-hover:w-full rounded-t-2xl" 
                />

                {/* Glass Inner Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#011E3A]/[0.06] backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#011E3A] group-hover:scale-105">
                  <Icon className="w-5 h-5 text-[#011E3A] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Brighter, Highly Visible Headers */}
                <h3 className="font-bold text-lg xl:text-xl text-[#011E3A] tracking-tight mb-3">
                  {f.title}
                </h3>

                {/* Deepened Slate Text for Crisp Contrast */}
                <p className="text-slate-600 text-[14.5px] leading-relaxed font-medium transition-colors duration-300 group-hover:text-slate-700">
                  {f.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </Section>
  )
}