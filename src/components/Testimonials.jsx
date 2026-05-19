import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Testimonials() {

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <Section className="bg-white py-8 relative overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <p className="section-subheading">Google Reviews</p>
        <h2 className="section-heading">Trusted by Parents</h2>
      </motion.div>

      {/* Widget wrapper (IMPORTANT FIX) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-[#E7D9C7] p-4 md:p-6 overflow-hidden h-[420px] md:h-[480px]"
        >
          <div
            className="elfsight-app-75563d1d-8bee-49ea-a810-45ec7f513f02 w-full h-full"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>

    </Section>
  )
}
