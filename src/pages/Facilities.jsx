import { motion } from 'framer-motion'
import Section from '../components/Section'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'
import { Link } from 'react-router-dom'

const { facilities } = siteData

export default function Facilities() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Facilities"
        subtitle="World-class infrastructure designed for holistic development and modern learning."
        image="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
        breadcrumbs="Home / Facilities"
      />

      {/* Facilities Grid */}
      <Section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 font-semibold text-sm tracking-wide uppercase mb-3">Infrastructure</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 leading-tight">
              Designed for Excellence
            </h2>
            <p className="mt-6 text-lg text-charcoal-700 max-w-3xl mx-auto">
              Brundavan School is equipped with state-of-the-art facilities to support academic excellence, physical development, and creative expression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <div className="bg-primary-50 h-32 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">{facility.title}</h3>
                  <p className="text-charcoal-700 leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section className="bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 text-center mb-16">
            Campus Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=85"
              alt="Campus"
              className="rounded-xl shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { title: 'Safe & Secure', desc: 'CCTV surveillance, trained staff, and emergency protocols' },
                { title: 'Digital Campus', desc: 'Smart classrooms with interactive boards and online learning tools' },
                { title: 'Green Environment', desc: 'Spacious grounds with gardens and outdoor learning spaces' },
                { title: 'Transport Fleet', desc: 'Well-maintained school buses with GPS tracking' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-display font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Experience Our Campus
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schedule a campus visit and see our world-class facilities firsthand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-display font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  )
}
