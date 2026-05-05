import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, BookOpen } from 'lucide-react'
import CountUp from './CountUp'
import { siteData } from '../data/site'

const { stats } = siteData

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary-900 via-secondary-800 to-primary-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Building Strong Foundations
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Building trust through honest positioning and quality education
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  {/\d/.test(stat.value) ? (
                    <>
                      <CountUp to={parseInt(stat.value.replace(/[^0-9]/g, ''))} />
                      {stat.value.includes('+') && '+'}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-primary-200 font-body text-sm font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
