import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Target, Eye, Heart, Lightbulb } from 'lucide-react'

export default function VisionMission() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Guiding principles that shape our educational philosophy and institutional purpose."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
        breadcrumbs="Home / About / Vision & Mission"
      />
      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-body font-semibold"
              >
                <Eye className="w-4 h-4" />
                Our Vision
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display font-bold text-3xl md:text-4xl text-charcoal-900"
              >
                To Be the Leading Educational Institution
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-body text-charcoal-600 leading-relaxed text-lg"
              >
                "To be recognized as Andhra Pradesh's premier educational institution, setting benchmarks in academic excellence, character development, and holistic growth, inspiring generations to become compassionate leaders and responsible global citizens."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-charcoal-50 rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-3">Our Long-term Goal</h3>
                <p className="font-body text-charcoal-600">
                  To create an environment where every student discovers their potential, develops their talents, and emerges as a confident, ethical, and successful individual ready to contribute positively to society.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl p-8 text-white">
                <Eye className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="font-display font-bold text-2xl mb-4">Looking Forward</h3>
                <p className="font-body leading-relaxed opacity-90">
                  Our vision extends beyond academics to encompass the complete development of each child's personality, preparing them for the challenges and opportunities of the 21st century.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-charcoal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-body font-semibold mb-4">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              Empowering Every Child's Potential
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Our mission is to provide a nurturing environment where students develop academically, emotionally, and socially
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Academic Excellence',
                desc: 'Deliver comprehensive education that fosters critical thinking, creativity, and academic achievement across all subjects.'
              },
              {
                icon: '💪',
                title: 'Character Development',
                desc: 'Instill values of integrity, respect, responsibility, and compassion in every student.'
              },
              {
                icon: '🎯',
                title: 'Holistic Growth',
                desc: 'Support physical, emotional, and social development through sports, arts, and community activities.'
              },
              {
                icon: '🤝',
                title: 'Inclusive Education',
                desc: 'Create an inclusive environment where every child feels valued and has equal opportunities to succeed.'
              },
              {
                icon: '🔬',
                title: 'Innovation in Learning',
                desc: 'Embrace modern teaching methodologies and technology to enhance the learning experience.'
              },
              {
                icon: '🌍',
                title: 'Global Perspective',
                desc: 'Prepare students to be responsible global citizens with awareness of cultural diversity and environmental stewardship.'
              }
            ].map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {mission.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {mission.title}
                </h3>
                <p className="font-body text-charcoal-600 leading-relaxed">
                  {mission.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Principles */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              Our Core Principles
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              These fundamental principles guide our daily operations and long-term planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Heart,
                title: 'Student-Centric Approach',
                desc: 'Every decision we make prioritizes the best interests of our students. We believe that when students succeed, the entire community benefits.',
                color: 'text-red-500'
              },
              {
                icon: Lightbulb,
                title: 'Continuous Innovation',
                desc: 'We regularly evaluate and improve our teaching methods, curriculum, and facilities to provide the best possible education.',
                color: 'text-yellow-500'
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-charcoal-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${principle.color.replace('text-', 'bg-').replace('-500', '-100')} rounded-full flex items-center justify-center mb-6`}>
                  <principle.icon className={`w-8 h-8 ${principle.color}`} />
                </div>
                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-4">
                  {principle.title}
                </h3>
                <p className="font-body text-charcoal-600 leading-relaxed text-lg">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-800"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-white mb-6"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-primary-100 mb-8 text-lg"
          >
            Be part of a community dedicated to shaping the future leaders of tomorrow
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
              Apply Now
            </Link>
            <Link to="/about/overview" className="border-2 border-white/50 text-white hover:bg-white/10 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300">
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}