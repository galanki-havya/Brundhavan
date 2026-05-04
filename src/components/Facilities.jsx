import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Microscope, Music, Gamepad2 } from 'lucide-react'
import Section from './Section'
import Card from './Card'
import { siteData } from '../data/site'

const { facilities } = siteData

const icons = [BookOpen, Users, Trophy, Microscope, Music, Gamepad2]

export default function Facilities() {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subheading">Our Campus</p>
          <h2 className="section-heading">World-Class Facilities</h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto">
            Every space on our campus is thoughtfully designed to inspire learning, creativity, and healthy growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => {
            const Icon = icons[i] || BookOpen
            return (
              <Card key={f.title} delay={i * 0.1} className="p-8 group relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 group-hover:from-primary-600 group-hover:to-primary-700 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                  className="font-display font-bold text-xl text-charcoal-900 mb-3 group-hover:text-primary-700 transition-colors"
                >
                  {f.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                  className="font-body text-gray-600 text-sm leading-relaxed"
                >
                  {f.desc}
                </motion.p>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
