import { motion } from "framer-motion"

export default function VideoHero({
  title,
  subtitle,
  video,
  poster
}) {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* VIDEO BACKGROUND - Desktop */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
      >
        <source src={video} type="video/mp4" />
      </motion.video>

      {/* IMAGE FALLBACK - Mobile */}
      <div className="block md:hidden absolute inset-0">
        <img
          src={poster}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 text-white">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

    </div>
  )
}