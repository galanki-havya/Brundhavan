import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=90",
    title: "Shaping Future Leaders",
    subtitle: "Inspiring young minds for tomorrow"
  },
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&q=90",
    title: "Excellence in Education",
    subtitle: "Building strong academic foundations"
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=90",
    title: "Holistic Development",
    subtitle: "Academics, sports & creativity combined"
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
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          alt="hero"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Left Content (Netflix Style) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-6 md:px-16 text-white">

          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {slides[index].title}
          </motion.h1>

          <motion.p
            key={slides[index].subtitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            {slides[index].subtitle}
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              to="/admissions"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              ▶ Apply Now
            </Link>

            <Link
              to="/about/overview"
              className="bg-gray-600/70 px-6 py-3 rounded-md font-semibold hover:bg-gray-500 transition"
            >
              More Info
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