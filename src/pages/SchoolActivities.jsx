import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import EventCard from '../components/EventCard'
import { activitiesData } from '../data/activitiesData'

export default function SchoolActivities() {
  const [selectedMonth, setSelectedMonth] = useState('All')

  const activities = Object.values(activitiesData)

  const months = ['All', 'January', 'February', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Quarterly']
  const categories = ['All', 'Cultural', 'National', 'Academic', 'Sports', 'Wellness', 'Celebration', 'Awareness', 'Community']

  const filteredActivities = selectedMonth === 'All'
    ? activities
    : activities.filter(a => a.date === selectedMonth)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="School Activities & Events"
        subtitle="Exploring beyond academics with enriching cultural, sports, and community activities."
      />

      {/* Activities Section */}
      <section className="py-16 bg-[#f6f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Celebrating Learning & Growth
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Our school activities and events foster holistic development, cultural awareness, and community values.
            </p>
          </motion.div>

          {/* Month Filter */}
          <div className="mb-10 flex flex-wrap gap-3 justify-center">
            {months.map(month => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedMonth === month
                    ? 'bg-gold-600 text-white'
                    : 'bg-white text-charcoal-700 border border-gray-200 hover:border-gold-400'
                }`}
              >
                {month}
              </button>
            ))}
          </div>

          {/* Activity Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard {...activity} />
              </motion.div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal-600 text-lg">
                No activities scheduled for {selectedMonth}. Check back soon!
              </p>
            </div>
          )}

        </div>
      </section>

      {/* About Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Why We Celebrate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cultural Awareness',
                desc: 'Students learn and celebrate diverse cultures, traditions, and values from around the world.'
              },
              {
                title: 'Holistic Development',
                desc: 'Beyond academics, we foster creativity, leadership, teamwork, and confidence in students.'
              },
              {
                title: 'Community Engagement',
                desc: 'Activities strengthen bonds between students, teachers, parents, and the community.'
              },
              {
                title: 'National Pride',
                desc: 'We instill patriotism and respect for our nation through meaningful celebrations.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f9f3ec] rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-700 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
