import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { BookOpen, Target, Users, Award } from 'lucide-react'

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <PageHero
        title="Curriculum"
        subtitle="Comprehensive CBSE curriculum with modern teaching methodologies and practical applications."
        image="https://images.unsplash.com/photo-1427504494785-cdda0e4d9700?w=1200&q=80"
        breadcrumbs="Home / Academics / Curriculum"
      />
      <motion.section className="hidden" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Curriculum
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Comprehensive educational framework designed to nurture young minds and prepare them for future success
          </motion.p>
        </div>
      </motion.section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Holistic Learning",
                description: "Balanced approach combining academics, arts, and physical education"
              },
              {
                icon: Target,
                title: "Skill Development",
                description: "Focus on critical thinking, problem-solving, and creativity"
              },
              {
                icon: Users,
                title: "Individual Attention",
                description: "Personalized learning plans for each student's unique needs"
              },
              {
                icon: Award,
                title: "Excellence Focus",
                description: "Commitment to academic excellence and character development"
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

      {/* Curriculum Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Curriculum Framework
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Our curriculum is designed to meet international standards while incorporating local cultural values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Core Subjects</h3>
              <ul className="space-y-3">
                {["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Science"].map(subject => (
                  <li key={subject} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{subject}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Co-Curricular Activities</h3>
              <ul className="space-y-3">
                {["Art & Craft", "Music & Dance", "Physical Education", "Drama & Theater", "Debate & Public Speaking", "Environmental Studies"].map(activity => (
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
    </div>
  )
}