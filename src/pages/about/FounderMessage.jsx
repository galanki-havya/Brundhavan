import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Award, Users, Heart } from 'lucide-react'

export default function FounderMessage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Founder’s Message - Brundavan School Palamaner"
        subtitle="A vision to create future leaders with discipline, excellence, and values"
        image="https://images.unsplash.com/photo-1573417039-2095-b2a3f6e6a3?w=1200&q=90&auto=format&fit=crop"
        breadcrumbs="Home / About / Founder Message"
      />

      {/* MAIN SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1507003211162-0f4da02e1734?w=800&q=90"
                  alt="Founder of Brundavan School Palamaner"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-poster.jpg'
                  }}
                />

                {/* Founder Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-charcoal-900">
                        Founder
                      </div>
                      <div className="text-sm text-charcoal-500">
                        Educational Visionary
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >

              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900">
                Our Founder’s Vision
              </h2>

              <p className="text-charcoal-600 leading-relaxed">
                “Education is not just about marks — it is about shaping character,
                discipline, confidence, and future success.”
              </p>

              <p className="text-charcoal-600 leading-relaxed">
                Brundavan School, established on May 22, 2025, was founded with a
                strong vision to bring world-class education to Palamaner.
                Our mission is to provide students with the same quality education
                found in top cities, right here in our local community.
              </p>

              <p className="text-charcoal-600 leading-relaxed">
                We focus on academic excellence, personal development, and preparing
                students for competitive exams and real-world challenges through
                modern teaching methodologies and structured learning.
              </p>

              {/* COMMITMENT BOX */}
              <div className="bg-primary-50 rounded-2xl p-6 border-l-4 border-primary-300">

                <h3 className="text-xl font-semibold text-primary-800 mb-4">
                  Our Commitment
                </h3>

                <ul className="space-y-4">

                  <li className="flex gap-3">
                    <Heart className="w-5 h-5 text-gold-500 mt-1" />
                    <span className="text-primary-700">
                      Quality education with modern teaching methods
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <Users className="w-5 h-5 text-gold-500 mt-1" />
                    <span className="text-primary-700">
                      Individual attention for every student
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <Award className="w-5 h-5 text-gold-500 mt-1" />
                    <span className="text-primary-700">
                      Advanced infrastructure & smart learning environment
                    </span>
                  </li>

                </ul>

              </div>

            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Admissions Open 2026–27
          </h2>

          <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
            Join Brundavan School – one of the fastest growing schools in Palamaner,
            committed to excellence in education, discipline, and student success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/admissions"
              className="bg-gold-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gold-500 hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-full hover:bg-primary-700 hover:text-white transition-all duration-300"
            >
              Book Campus Visit
            </Link>

          </div>
        </div>
      </motion.section>
    </>
  )
}