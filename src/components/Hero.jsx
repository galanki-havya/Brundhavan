import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* RAW HD VIDEO */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none">
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
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-end justify-end pb-28 md:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-right flex flex-col items-end"
        >

          {/* PINK BADGE */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[#FF6347]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFBDAA]/40 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBDAA]"></span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white font-bold">
              Brindavan School &bull; Palamaner
            </span>
          </div>

          {/* HEADLINE - IVORY & PINK GRADIENT */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#fdfcf0]">
            Learning Today,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6347] via-[#FF8C6B] to-[#FFBDAA]">
              Leading Tomorrow.
            </span>
          </h1>

          {/* SUBTEXT - PINK TINTED */}
          <p className="mt-2 text-xs md:text-sm text-[#FFBDAA] font-medium tracking-wide">
            Education with Ethics & Traditions
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <Link
              to="/about/overview"
              className="px-5 py-2 text-xs md:text-sm rounded-full border border-[#FF6347]/60 bg-[#FF6347]/10 backdrop-blur-md text-[#FFD8CC] font-semibold hover:bg-[#FF6347] hover:text-white hover:border-[#FF6347] transition-all duration-300"
            >
              Explore Campus
            </Link>

            <Link
              to="/admissions"
              className="px-6 py-2 text-xs md:text-sm rounded-full bg-gradient-to-r from-[#FF6347] to-[#C4391E] text-white font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#FF6347]/30 hover:brightness-110 hover:shadow-[#FF6347]/50"
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