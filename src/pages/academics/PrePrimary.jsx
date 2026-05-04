import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Smile, Heart, Play, BookOpen, Palette, Music } from 'lucide-react'

export default function PrePrimary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <PageHero
        title="Pre-Primary"
        subtitle="Nurturing early childhood development and creating a strong learning foundation."
        image="https://images.unsplash.com/photo-1503454537706-e86b3a0a5b83?w=1200&q=80"
        breadcrumbs="Home / Academics / Pre-Primary"
      />
      <motion.section className="hidden" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Pre-Primary Program
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Nurturing young minds with love, creativity, and foundational learning experiences
          </motion.p>
        </div>
      </motion.section>

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

      {/* Daily Activities */}
      <section className="py-16 bg-white">
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
    </div>
  )
}