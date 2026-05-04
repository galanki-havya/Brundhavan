import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Calendar, Music, Trophy, Users } from 'lucide-react'

export default function Annual() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Annual Events
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Celebrating achievements, culture, and community through memorable annual traditions
          </motion.p>
        </div>
      </motion.section>

      {/* Annual Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Annual Day",
                description: "Grand celebration of academic year with cultural performances"
              },
              {
                icon: Music,
                title: "Cultural Festival",
                description: "Showcasing diverse cultural traditions and artistic talents"
              },
              {
                icon: Trophy,
                title: "Sports Meet",
                description: "Annual sports competitions and athletic achievements"
              },
              {
                icon: Users,
                title: "Parent-Teacher Meet",
                description: "Interactive sessions between parents, teachers, and students"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Signature events that define our school culture and community spirit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Annual Day Celebrations</h3>
              <ul className="space-y-3">
                {["Cultural Performances", "Prize Distribution", "Student Achievements", "Community Participation", "Entertainment Programs", "Memorable Speeches"].map(event => (
                  <li key={event} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Sports & Cultural Events</h3>
              <ul className="space-y-3">
                {["Inter-House Competitions", "Traditional Dance & Music", "Drama & Theater", "Art Exhibitions", "Debates & Quiz", "Community Service Projects"].map(event => (
                  <li key={event} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Event Impact & Learning
            </h2>
            <p className="text-xl text-charcoal-600">
              How our annual events contribute to holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Appreciation",
                benefits: ["Understanding diversity", "Artistic expression", "Cultural heritage", "Creative confidence"]
              },
              {
                title: "Social Skills",
                benefits: ["Team collaboration", "Leadership development", "Public speaking", "Community engagement"]
              },
              {
                title: "Personal Growth",
                benefits: ["Self-confidence building", "Achievement recognition", "Goal setting", "Resilience development"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}