import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 -mt-24 md:-mt-28">

      {/* RAW HD VIDEO */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENT BOTTOM-RIGHT ALIGNED */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-end justify-end pb-16 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-right flex flex-col items-end"
        >
          
          {/* ROYAL BLUE BADGE */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[#002b5c]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#c5a059]/30 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#fdfcf0] font-bold">
              Brindavan School &bull; Palamaner
            </span>
          </div>

          {/* HEADLINE - IVORY CREAM & METALLIC GOLD */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#fdfcf0]">
            Learning Today,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b8860b]">
              Leading Tomorrow.
            </span>
          </h1>

          {/* SUBTEXT - MUTED IVORY */}
          <p className="mt-2 text-xs md:text-sm text-[#fdfcf0]/80 font-medium tracking-wide">
            Education with Ethics & Traditions
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <Link
              to="/about/overview"
              className="px-5 py-2 text-xs md:text-sm rounded-full border border-[#fdfcf0]/30 bg-white/5 backdrop-blur-md text-[#fdfcf0] font-semibold hover:bg-[#fdfcf0] hover:text-[#002b5c] transition-all duration-300"
            >
              Explore Campus
            </Link>

            <Link
              to="/admissions"
              className="px-6 py-2 text-xs md:text-sm rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#002b5c] font-bold tracking-wide transition-all duration-300 shadow-lg hover:brightness-110"
            >
              Apply Online
            </Link>
          </div>

        </motion.div>
      </div>

      {/* LIGHT BOTTOM VIGNETTE */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

    </section>
  )
}