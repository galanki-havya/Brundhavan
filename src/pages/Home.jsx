import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import { siteData } from '../data/site'

const { school } = siteData

export default function Home() {
  return (
    <>
      <Hero
        title="Brundavan School"
        subtitle="Nurturing Excellence, Inspiring Futures"
      />

      {/* About Preview */}
      <Section className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=85"
                  alt="Brundavan students"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-3xl border border-white/10 bg-gray-900/70 px-5 py-4 shadow-2xl backdrop-blur-xl">
                  <div className="text-3xl font-display font-black text-white">Est. {school.established}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-300 mt-1">Trusted by Families</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="section-subheading"
              >
                Welcome to Brundavan
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="section-heading"
              >
                A Legacy of Learning & Leadership
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-body text-gray-600 leading-relaxed mb-4"
              >
                {school.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-body text-gray-600 leading-relaxed mb-8"
              >
                With over 20 years of experience, Brundavan School has established itself as a trusted educational institution in Palamaner, Chittoor, committed to delivering quality education with a focus on academic excellence and student development.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about" className="btn-primary group">
                  Our Story
                  <motion.svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
                <Link to="/academics" className="btn-outline group">
                  Explore Academics
                  <motion.svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Facilities />
      <Gallery />

      {/* Events Section */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-subheading">School Life</p>
            <h2 className="section-heading">Latest Events</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto">
              Join us in celebrating creativity, achievement, and community spirit throughout the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Annual Day',
                desc: 'Celebrating talent and creativity through cultural performances and achievements.',
                link: '/events'
              },
              {
                icon: '🏃',
                title: 'Sports Meet',
                desc: 'Encouraging fitness and teamwork through exciting athletic competitions.',
                link: '/events'
              },
              {
                icon: '🧪',
                title: 'Science Fair',
                desc: 'Innovation and discovery through student-led science projects and experiments.',
                link: '/events'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group hover:bg-white"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  {event.desc}
                </p>
                <Link
                  to={event.link}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-body font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/events"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Testimonials />

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Admissions Open – 2025–26
          </h2>
          <p className="font-body text-primary-100 mb-8 max-w-xl mx-auto">
            Secure your child's future at one of Andhra Pradesh's most respected institutions. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Contact Admissions Office
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
