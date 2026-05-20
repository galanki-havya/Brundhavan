import { motion } from 'framer-motion'

const logo = '/logo.png'

// ── DATA ─────────────────────────────────────────────────────────────────────

const intelligences = [
  { short: 'Words & Language',   icon: '📚', color: '#ee530b' },
  { short: 'Numbers & Logic',    icon: '🔢', color: '#3B82F6' },
  { short: 'Space & Sight',      icon: '🧭', color: '#22C55E' },
  { short: 'Body & Movement',    icon: '🤸', color: '#FF6347' },
  { short: 'Sound & Rhythm',     icon: '🎵', color: '#F59E0B' },
  { short: 'People & Empathy',   icon: '🤝', color: '#0EA5E9' },
  { short: 'Self & Reflection',  icon: '🪞', color: '#8B5CF6' },
  { short: 'Nature & Patterns',  icon: '🌿', color: '#10B981' },
  { short: 'Meaning & Purpose',  icon: '✨', color: '#FF6347' },
]

const logoElements = [
  { color: '#E63946', icon: '🔥', label: 'The Flame',
    desc: 'Symbolises the eternal pursuit of knowledge and the burning spirit of inquiry — igniting curiosity in every child.' },
  { color: '#ee530b', icon: '📖', label: 'The Open Book',
    desc: 'Represents academic excellence, intellectual curiosity, and a lifelong love of learning beyond the classroom.' },
  { color: '#22C55E', icon: '🌳', label: 'The Banyan Tree',
    desc: 'Rooted in rich Indian heritage, it stands for enduring strength, shelter, and a deeply nurturing school community.' },
  { color: '#FF6347', icon: '🌸', label: 'The Nine Petals',
    desc: "Nine petals mirror Howard Gardner's nine intelligences — every child's unique genius recognised and celebrated." },
  { color: '#ee530b', icon: '⭕', label: 'The Gold Ring',
    desc: 'A circle of unity, wholeness, and the unbreakable bond between school, student, family, and community.' },
]

const coreValues = [
  { color: '#E63946', text: 'Discipline with compassion' },
  { color: '#ee530b', text: 'Academic rigour with creativity' },
  { color: '#FF6347', text: 'Community, character, and confidence' },
]

// ── ANIMATIONS ────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } }
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function LogoMeaning() {
  return (
    <section className="relative bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">

      {/* Soft ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ee530b]/[0.025] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FF6347]/[0.03] rounded-full translate-x-1/4 translate-y-1/4 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ══ HEADER ══ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-px w-7 bg-[#FF6347]" />
            <span className="text-[#FF6347] font-semibold text-[13px] tracking-[3px] uppercase">
              Our Identity
            </span>
            <span className="h-px w-7 bg-[#FF6347]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#011E3A] tracking-tight mb-3">
            Meaning Behind the{' '}
            <span className="italic font-serif font-normal text-[#ee530b]">
              Logo
            </span>
          </h2>

          <p className="text-black text-[16px] leading-relaxed font-normal max-w-xl mx-auto">
            Every element in the Brindavan School logo tells a story — of values, vision,
            and the future we shape for each extraordinary child.
          </p>
        </motion.div>

        {/* ══ MAIN GRID ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT PANEL (5 cols) ── */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">

            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-white border border-black/10 rounded-2xl p-7 shadow-lg shadow-black/10 flex flex-col items-center overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6347] via-[#ee530b] to-[#011E3A]" />

              <div className="relative w-44 h-44 my-3 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#ee530b]/25 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-black/10 bg-black/5" />

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-32 h-32 rounded-full bg-white border border-black/10 shadow-lg flex items-center justify-center p-3 z-10"
                >
                  <img
                    src={logo}
                    alt="Brindavan School Logo"
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </motion.div>
              </div>

              <div className="text-center mt-2 mb-1">
                <h3 className="text-xl font-bold text-[#011E3A] tracking-tight">Brindavan School</h3>
                <p className="text-[#ee530b] font-medium text-[11px] tracking-[3.5px] uppercase mt-1">Est. in Excellence</p>
              </div>
            </motion.div>

            {/* Nine Intelligences */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/10"
              style={{ border: '2px solid #ee530b' }}
            >
              <div className="text-center mb-5">
                <span className="inline-block bg-[#FF6347]/8 text-[#FF6347] border border-[#FF6347]/30 rounded-full text-[11px] font-semibold tracking-wider uppercase px-3 py-1 mb-2">
                  Howard Gardner's Framework
                </span>
                <h4 className="text-2xl font-bold text-[#011E3A]">Nine Intelligences We Nurture</h4>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-2.5"
              >
                {intelligences.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group relative bg-slate-50 hover:bg-white rounded-xl p-2.5 flex flex-col items-center justify-center min-h-[96px] text-center transition-all duration-200 cursor-pointer hover:shadow-md"
                    style={{ border: `1.5px solid ${item.color}40` }}
                  >
                    {/* Number badge */}
                    <div
                      className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {i + 1}
                    </div>

                    <div className="text-xl mb-1.5 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <span className="text-[12px] font-semibold text-[#011E3A] leading-tight group-hover:text-[#ee530b] transition-colors duration-200">
                      {item.short}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>

          </div>

          {/* ── RIGHT PANEL (7 cols) ── */}
          <div className="lg:col-span-7 space-y-5">

            {/* Context header card */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-lg shadow-black/10">
              <div className="inline-flex items-center gap-2 bg-[#011E3A]/5 text-[#011E3A] rounded-xl px-3 py-1.5 mb-4 border border-[#011E3A]/8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6347]" />
                <span className="text-[12px] font-semibold tracking-widest uppercase">Symbol Decoded</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#011E3A] tracking-tight mb-2">
                What Every Element{' '}
                <span className="italic font-serif font-normal text-[#ee530b]">Truly Means</span>
              </h3>
              <p className="text-black text-[15px] leading-relaxed font-normal max-w-xl">
                Five deliberate symbols chosen to reflect the school's deepest commitments to global knowledge, rich Indian heritage, and unlocking individual creative potential.
              </p>
            </div>

            {/* Element cards */}
            <div className="space-y-3">
              {logoElements.map((el, i) => (
                <motion.div
                  key={el.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 80 }}
                  whileHover={{ x: 5 }}
                  className="group bg-white border border-black/10 rounded-xl p-4 flex gap-4 items-start transition-all duration-300 hover:shadow-md shadow-sm"
                  style={{ borderLeft: `3px solid ${el.color}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: `${el.color}12`, border: `1px solid ${el.color}20` }}
                  >
                    {el.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[16px] font-semibold text-[#011E3A] tracking-tight mb-1 group-hover:text-[#ee530b] transition-colors duration-200">
                      {el.label}
                    </h4>
                    <p className="text-black text-[14.5px] leading-relaxed font-normal">
                      {el.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}