import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Microscope, Music, Gamepad2 } from 'lucide-react'
import Section from './Section'
import { siteData } from '../data/site'

const { facilities } = siteData

const icons = [BookOpen, Users, Trophy, Microscope, Music, Gamepad2]

const cardGradients = [
  'from-[#FFE8D9] to-[#FFD6B8]', // orange
  'from-[#E7E3FF] to-[#D5CCFF]', // purple
  'from-[#D9F0FF] to-[#BFE3FF]', // blue
  'from-[#FFE0EC] to-[#FFC7DB]', // pink
  'from-[#FFF4CC] to-[#FFE799]', // yellow
  'from-[#DCFCE7] to-[#BBF7D0]', // green
]

export default function Facilities() {
  // Background: cream → soft royal blue tint — premium international-school feel
  return (
    <Section className="bg-gradient-to-br from-[#FFFDF9] via-[#F8F4EE] to-[#EEF4FF] relative overflow-hidden">
      {/* Ambient background glows — kept from original, toned to match new palette */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full -translate-y-32 translate-x-32 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E4FA3]/08 rounded-full translate-y-24 -translate-x-24 opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subheading">Our Campus</p>
          <h2 className="section-heading">World-Class Facilities</h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto">
            Every space on our campus is thoughtfully designed to inspire learning, creativity, and healthy growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => {
            const Icon = icons[i] || BookOpen
            const gradient = cardGradients[i % cardGradients.length]

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`
                  relative overflow-hidden rounded-[28px]
                  bg-gradient-to-br ${gradient}
                  border border-white/50
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]
                  transition-all duration-500
                  group
                `}
              >
                {/* Decorative glow orb — top-right corner */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 blur-3xl rounded-full pointer-events-none" />

                {/* Icon */}
                <div
                  className="
                    relative z-10
                    w-16 h-16 rounded-2xl
                    bg-white/70 backdrop-blur-md
                    flex items-center justify-center
                    shadow-lg
                    mb-6
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <Icon className="w-8 h-8 text-[#244C9D]" />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative z-10
                    font-display font-bold
                    text-2xl
                    text-[#1B3A78]
                    mb-3
                    tracking-tight
                  "
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative z-10
                    font-body
                    text-[#4A5565]
                    text-[15px]
                    leading-relaxed
                  "
                >
                  {f.desc}
                </p>

                {/* Bottom shine line */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    h-[2px]
                    bg-gradient-to-r
                    from-transparent
                    via-white/80
                    to-transparent
                    pointer-events-none
                  "
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}