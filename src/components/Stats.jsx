import { motion } from 'framer-motion'
import { siteData } from '../data/site'

const { stats } = siteData

export default function Stats() {
  return (
    <section className="bg-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-primary-200 font-body text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
