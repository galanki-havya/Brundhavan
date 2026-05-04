import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { siteData } from '../data/site'

const { testimonials } = siteData

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <Section className="bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-subheading">Voices</p>
          <h2 className="section-heading">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-card flex flex-col gap-6"
            >
              <div className="text-5xl text-primary-200 font-display leading-none">"</div>
              <p className="font-body text-charcoal-800 text-lg leading-relaxed -mt-4">
                {testimonials[active].quote}
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-display font-bold text-lg">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-charcoal-900">{testimonials[active].name}</div>
                  <div className="text-sm text-gray-500 font-body">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector cards */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-2xl transition-all duration-300 border-2 ${
                  active === i
                    ? 'bg-white border-primary-500 shadow-card'
                    : 'bg-white/60 border-transparent hover:border-primary-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display transition-colors ${
                    active === i ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-charcoal-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500 font-body">{t.role}</div>
                  </div>
                </div>
                {active === i && (
                  <p className="mt-2 text-xs text-gray-600 font-body line-clamp-2">{t.quote}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
