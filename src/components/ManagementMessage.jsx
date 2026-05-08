import { motion } from 'framer-motion'
import { siteData } from '../data/site'

const { chairman, principal } = siteData

export default function ManagementMessage() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-700">
            Management Message
          </p>

          <h2 className="mt-4 text-4xl font-display font-bold text-charcoal-900">
            Leadership Message from Brundavan Management
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-charcoal-600 leading-relaxed">
            A shared vision for value-driven education, safety, and strong academic foundations for every student.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {[chairman, principal].map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gold-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">

                {/* Avatar */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 text-white text-xl font-bold shadow-md">
                  {leader.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-gold-700">
                    {leader.title}
                  </p>
                </div>

              </div>

              {/* Message */}
              <p className="mt-6 text-charcoal-600 leading-relaxed">
                {leader.message}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
