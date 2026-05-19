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
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-end justify-end pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-right flex flex-col items-end"
        >

          {/* PINK BADGE */}
          <div className="inline-flex items-center gap-2 mb-4 bg-pink-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-300/40 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-200"></span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white font-bold">
              Brindavan School &bull; Palamaner
            </span>
          </div>

          {/* HEADLINE - IVORY & PINK GRADIENT */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#fdfcf0]">
            Learning Today,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-rose-300">
              Leading Tomorrow.
            </span>
          </h1>

          {/* SUBTEXT - PINK TINTED */}
          <p className="mt-2 text-xs md:text-sm text-pink-200 font-medium tracking-wide">
            Education with Ethics & Traditions
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <Link
              to="/about/overview"
              className="px-5 py-2 text-xs md:text-sm rounded-full border border-pink-400/60 bg-pink-500/10 backdrop-blur-md text-pink-100 font-semibold hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
            >
              Explore Campus
            </Link>

            <Link
              to="/admissions"
              className="px-6 py-2 text-xs md:text-sm rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold tracking-wide transition-all duration-300 shadow-lg shadow-pink-500/30 hover:brightness-110 hover:shadow-pink-500/50"
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