import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteData } from '../data/site'

const { school } = siteData

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=90"
          alt="School campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/80 via-primary-900/60 to-charcoal-900/70" />
        {/* Decorative leaf pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-32 right-8 md:right-16 hidden md:flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white"
      >
        <span className="text-3xl font-display font-bold text-gold-400">26+</span>
        <span className="text-xs font-body text-white/70 text-center">Years of<br/>Excellence</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/40 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span className="text-primary-300 font-body text-sm font-medium">
            {school.affiliation}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-tight mb-6"
        >
          {school.tagline.split(',').map((part, i) => (
            <span key={i} className={i === 0 ? 'block' : 'block text-primary-400'}>
              {i === 0 ? part + ',' : part.trim()}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          {school.description.slice(0, 150)}…
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/admissions" className="btn-primary text-base py-4 px-8">
            Apply for Admission
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-300">
            Discover Our School
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-5"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
