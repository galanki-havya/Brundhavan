import { motion } from 'framer-motion'
import { siteData } from '../data/site'
const founderPhoto = '/images/gallery/founder.png'

const { chairman } = siteData

export default function ManagementMessage() {
  return (
    <section className="py-16 bg-[#f4ede4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">
            Message from Our Founder
          </h2>
          <p className="mt-2 text-charcoal-600">
            Leadership built on discipline, excellence, and holistic education.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

          {/* PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <img
              src={chairman.image || founderPhoto}
              alt={chairman.name}
              className="w-20 h-20 rounded-full object-cover border border-gray-200"
            />

            <div>
              <h3 className="text-xl font-bold text-charcoal-900">
                {chairman.name}
              </h3>
              <p className="text-sm text-gold-700 font-medium">
                {chairman.title}
              </p>
              <p className="text-xs text-charcoal-500">
                Founder & Correspondent
              </p>
            </div>
          </motion.div>

          {/* QUOTE */}
          <div className="mt-5 border-l-4 border-gold-400 pl-3 text-sm italic text-charcoal-600">
            “Education is not just preparation for life — it is life itself.”
          </div>

          {/* MESSAGE WITH READING EFFECT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.18
                }
              }
            }}
            className="mt-5 text-charcoal-700 text-base leading-relaxed space-y-3"
          >
            {(chairman.message || '').split('. ').map((line, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                    filter: "blur(4px)"
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                {line.trim()}{line.trim().endsWith('.') ? '' : '.'}
              </motion.p>
            ))}
          </motion.div>

          {/* SIGNATURE */}
          <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-charcoal-800">
            <p className="font-semibold">{chairman.name}</p>
            <p className="text-charcoal-500 text-xs">
              Founder & Correspondent
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}