import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=90",
    title: "A New Era of Education",
    subtitle: "Founded 2025 - Modern learning for future leaders"
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&q=90",
    title: "Excellence in Education",
    subtitle: "Expert faculty, smart classrooms, proven results"
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=90",
    title: "Future-Ready Learning",
    subtitle: "Modern campus, innovative teaching, holistic growth"
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
    >

      {/* VIDEO BACKGROUND */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-0"></div>

      {/* Left Content (Netflix Style) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-6 md:px-16 text-white">

          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight tracking-tight text-white"
          >
            {slides[index].title.includes('Future') ? (
              <>
                Shaping Future <span className="text-gold">Leaders</span>
              </>
            ) : slides[index].title.includes('Excellence') ? (
              <>
                Excellence in <span className="text-gold">Education</span>
              </>
            ) : (
              <>
                Holistic <span className="text-gold">Development</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gold-200 mb-6"
          >
            Leading State Board School in Palamaner
          </motion.p>

          <motion.p
            key={slides[index].subtitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            {slides[index].subtitle}
          </motion.p>

          {/* School Stats */}
          <div className="flex gap-8 mt-8 text-white animate-fade-in">
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-gold-400">2025</p>
              <p className="text-sm text-gray-300 font-body">Founded</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-gold-400">1000+</p>
              <p className="text-sm text-gray-300 font-body">Student Capacity</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-gold-400">100%</p>
              <p className="text-sm text-gray-300 font-body">Result Focus</p>
            </div>
          </div>

          {/* Premium Buttons */}
          <div className="mt-12 flex gap-4">
            <Link
              to="/admissions"
              className="btn-primary bg-gold-400 text-black font-body font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-gold-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              ▶ Apply Now
            </Link>

            <Link
              to="/about/overview"
              className="btn-outline border-2 border-white/50 text-white backdrop-blur-md font-body font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient (Netflix feel) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-10 flex gap-2 z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 w-8 cursor-pointer transition-all duration-300 ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}