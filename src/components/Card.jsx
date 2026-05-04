import { motion } from 'framer-motion'

export default function Card({ children, className = '', delay = 0, glassmorphism = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`card overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        glassmorphism
          ? 'bg-white/10 backdrop-blur-md border border-white/20'
          : 'bg-white'
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
