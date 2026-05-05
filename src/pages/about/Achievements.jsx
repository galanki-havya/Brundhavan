import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Trophy, Award, Medal, Star } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      year: '2025',
      title: 'Foundation Year Excellence Setup',
      category: 'Institution Building',
      description: 'Established modern infrastructure, CBSE framework alignment, and digital classrooms.',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      year: '2025',
      title: 'Modern Learning Environment',
      category: 'Educational Innovation',
      description: 'Created smart classrooms with advanced teaching methodologies and student-focused approach.',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: '2025',
      title: 'Community Engagement Initiative',
      category: 'Social Impact',
      description: 'Built strong parent-school partnerships and community outreach programs.',
      icon: Medal,
      color: 'from-green-400 to-green-600'
    },
    {
      year: '2025',
      title: 'Digital Infrastructure Setup',
      category: 'Technology Integration',
      description: 'Implemented modern learning platforms and educational technology systems.',
      icon: Star,
      color: 'from-purple-400 to-purple-600'
    }
  ]

  const stats = [
    { label: 'Foundation Year Setup', value: '2025', icon: '🏆' },
    { label: 'Modern Infrastructure', value: 'Smart', icon: '⚽' },
    { label: 'Digital Learning', value: 'Advanced', icon: '🎭' },
    { label: 'Community Programs', value: 'Active', icon: '🤝' }
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Achievements"
        subtitle="Building excellence through modern education, innovation, and community engagement."
        image="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&q=80"
        breadcrumbs="Home / About / Achievements"
      />

      <section className="hidden" style={{ display: 'none' }}>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-gray-200"
          >
            Celebrating excellence and milestones that define our legacy
          </motion.p>
        </div>
      </section>

      {/* Stats Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              Achievement Highlights
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our modern infrastructure and educational initiatives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gold-50 rounded-2xl p-8 hover:bg-gold-100 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-display font-bold text-charcoal-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-body font-semibold text-charcoal-800">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        className="py-20 bg-charcoal-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Recognition & Awards
            </h2>
            <p className="font-body text-charcoal-600">
              A timeline of our most significant achievements and recognitions
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.year}-${achievement.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </span>
                      <span className="text-sm text-charcoal-500">
                        {achievement.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
                      {achievement.title}
                    </h3>

                    <p className="text-charcoal-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Goals */}
      <motion.section
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-100 mb-8 text-lg"
          >
            Our achievements are not endpoints, but milestones in our ongoing journey to provide the best education possible
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all"
            >
              Join Our Journey
            </Link>
            <Link
              to="/about/overview"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  )
}