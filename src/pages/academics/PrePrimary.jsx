import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Smile, Heart, Play, BookOpen, Palette, Music } from 'lucide-react'

export default function PrePrimary() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Pre-Primary"
        subtitle="Nurturing early childhood development and creating a strong learning foundation."
      />
      
      {/* Age Group */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Age Group: 3-5 Years
            </h2>
            <p className="text-xl text-charcoal-600">
              Building strong foundations for lifelong learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Emotional Development",
                description: "Building confidence, social skills, and emotional intelligence"
              },
              {
                icon: Play,
                title: "Play-Based Learning",
                description: "Learning through fun activities and interactive games"
              },
              {
                icon: Palette,
                title: "Creative Expression",
                description: "Art, craft, and imaginative activities to spark creativity"
              },
              {
                icon: Music,
                title: "Music & Movement",
                description: "Rhythm, songs, and physical activities for holistic development"
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
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-700" />
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

      {/* Daily Activities */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Daily Learning Activities
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              A balanced routine that promotes physical, cognitive, and social development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Morning Activities</h3>
              <ul className="space-y-3">
                {["Circle Time & Songs", "Storytelling Sessions", "Free Play & Exploration", "Arts & Crafts", "Music & Movement"].map(activity => (
                  <li key={activity} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{activity}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Afternoon Activities</h3>
              <ul className="space-y-3">
                {["Outdoor Play & Sports", "Language Development", "Number Recognition", "Science Experiments", "Group Activities"].map(activity => (
                  <li key={activity} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-xl text-charcoal-600">
              What your child will achieve in our pre-primary program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Social Skills",
                outcomes: ["Making friends", "Sharing and cooperation", "Following instructions", "Expressing emotions"]
              },
              {
                title: "Cognitive Development",
                outcomes: ["Basic counting", "Color recognition", "Shape identification", "Memory games"]
              },
              {
                title: "Physical Development",
                outcomes: ["Fine motor skills", "Gross motor skills", "Hand-eye coordination", "Healthy habits"]
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
                <ul className="space-y-3">
                  {category.outcomes.map(outcome => (
                    <li key={outcome} className="flex items-center gap-3 text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-primary-900 to-secondary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Start Your Child's Educational Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Give your child the best foundation with our neuroscience-backed early childhood program.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold-500 text-primary-900 hover:bg-gold-400 font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              Apply Now
            </button>
            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Book a Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}