import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteData } from '../data/site'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black -mt-24 md:-mt-28">

      {/* VIDEO BACKGROUND */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/gallery/Infrastructure/1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-6 md:px-16 text-white">

          {/* SMALL TAG */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-widest uppercase text-[#8B5E3C] mb-4"
          >
            Since 2025 • Palamaner
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Shaping Future <span className="text-[#8B5E3C]">Leaders</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            Best State Board School in Palamaner
          </motion.h2>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              to="/admissions"
              className="px-7 py-3 bg-[#8B5E3C] text-white font-semibold rounded-full hover:opacity-90 transition shadow-lg"
            >
              Apply Now
            </Link>

            <Link
              to="/about/overview"
              className="px-7 py-3 border border-white/40 text-white rounded-full hover:bg-white hover:text-black transition"
            >
              Explore School
            </Link>

          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
