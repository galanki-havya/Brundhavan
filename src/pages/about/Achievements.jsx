import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Trophy, Award, Medal, Star, Target, TrendingUp } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      year: '2023',
      title: 'State Level Excellence Award',
      category: 'Academic Achievement',
      description: 'Recognized for outstanding academic performance and innovative teaching methods.',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      year: '2023',
      title: 'Best School in District',
      category: 'Overall Performance',
      description: 'Awarded for comprehensive excellence in academics, sports, and extracurricular activities.',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: '2022',
      title: 'Sports Championship',
      category: 'Athletics',
      description: 'District champions in basketball and state finalists in athletics.',
      icon: Medal,
      color: 'from-green-400 to-green-600'
    },
    {
      year: '2022',
      title: 'Cultural Excellence',
      category: 'Arts & Culture',
      description: 'Multiple awards in inter-school cultural competitions and performing arts.',
      icon: Star,
      color: 'from-purple-400 to-purple-600'
    },
    {
      year: '2021',
      title: 'Digital Learning Initiative',
      category: 'Innovation',
      description: 'Pioneered advanced digital learning platforms and smart classroom technology.',
      icon: Target,
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      year: '2021',
      title: 'Community Service Award',
      category: 'Social Impact',
      description: 'Recognized for extensive community service and environmental conservation efforts.',
      icon: TrendingUp,
      color: 'from-emerald-400 to-emerald-600'
    }
  ]

  const stats = [
    { label: 'State Rank Holders', value: '25+', icon: '🏆' },
    { label: 'Sports Championships', value: '15+', icon: '⚽' },
    { label: 'Cultural Awards', value: '30+', icon: '🎭' },
    { label: 'Community Projects', value: '50+', icon: '🤝' }
  ]

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Achievements"
        subtitle="Celebrating excellence, awards, and milestones that define our legacy."
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              Achievement Highlights
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in the numerous accolades and recognitions we have received over the years
            </p>
          </motion.div>

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
                <div className="text-3xl font-display font-bold text-charcoal-900 mb-2">{stat.value}</div>
                <div className="text-sm font-body font-semibold text-charcoal-800">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Timeline */}
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              A timeline of our most significant achievements and recognitions
            </p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.year}-${achievement.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-body font-semibold">
                        {achievement.year}
                      </span>
                      <span className="text-sm font-body text-charcoal-500">{achievement.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="font-body text-charcoal-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Timeline line */}
                <div className="hidden md:block w-px h-24 bg-gradient-to-b from-gold-400 to-gold-600"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Student Achievements */}
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
              Student Excellence
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Our students consistently excel in academics, sports, arts, and leadership, bringing pride to our school community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Excellence',
                achievements: [
                  '25+ State Rank Holders (2022-2023)',
                  '95% Average Pass Percentage',
                  'Multiple District Toppers',
                  'CBSE 100% Results'
                ],
                icon: '📚',
                color: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Sports Achievements',
                achievements: [
                  'District Basketball Champions',
                  'State Athletics Finalists',
                  'Inter-School Football Winners',
                  'Individual Sport Medals'
                ],
                icon: '🏆',
                color: 'from-green-400 to-green-600'
              },
              {
                title: 'Arts & Culture',
                achievements: [
                  'State Level Dance Competition Winners',
                  'Inter-School Music Festival Champions',
                  'Theater & Drama Awards',
                  'Art Exhibition Recognitions'
                ],
                icon: '🎨',
                color: 'from-purple-400 to-purple-600'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-body text-charcoal-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Goals */}
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
            Continuing the Legacy of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-primary-100 mb-8 text-lg"
          >
            Our achievements are not endpoints, but milestones in our ongoing journey to provide the best education possible
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
              Join Our Legacy
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