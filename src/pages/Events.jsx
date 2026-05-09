import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const events = [
  {
    title: "Annual Day Celebration",
    desc: "A grand celebration showcasing student talents through cultural performances, music, and dance. A memorable event that brings together the entire school community.",
    date: "January",
    icon: "🎭"
  },
  {
    title: "Sports Day",
    desc: "Encouraging teamwork and fitness through exciting athletic competitions. Students participate in various track and field events, fostering sportsmanship and physical health.",
    date: "December",
    icon: "🏃"
  },
  {
    title: "Science Exhibition",
    desc: "Students present innovative projects and experiments to demonstrate scientific thinking. A platform for young minds to explore and showcase their creativity in science.",
    date: "August",
    icon: "🧪"
  },
  {
    title: "Cultural Fest",
    desc: "A vibrant event celebrating creativity, art, and cultural diversity. Students from different grades participate in various cultural activities and performances.",
    date: "October",
    icon: "🎨"
  },
  {
    title: "Independence Day",
    desc: "Celebrating our nation's freedom with patriotic songs, dances, and speeches. Students learn about the importance of national pride and unity.",
    date: "August 15",
    icon: "🇮🇳"
  },
  {
    title: "Republic Day",
    desc: "Honoring the Constitution of India with parades, cultural programs, and educational activities that teach the values of democracy and citizenship.",
    date: "January 26",
    icon: "🏛️"
  }
]

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Events & Activities"
        subtitle="Celebrating creativity, sports, and innovation through memorable school events."
        image={new URL("../../assets/gallery/Infrastructure/1.jpg", import.meta.url).href}
        breadcrumbs="Home / Events"
      />

      {/* Events Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
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
              Annual Events Calendar
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              At Brindavan School, events play a vital role in nurturing creativity, confidence, and leadership among students. Our annual calendar features a variety of celebrations that bring our community together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:bg-white"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-body font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Info */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6"
          >
            Why Events Matter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            School events are more than celebrations—they're opportunities for learning, growth, and building lasting memories. Each event is carefully designed to develop different aspects of a student's personality and skills.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Teamwork',
                desc: 'Events teach collaboration and working together towards common goals.'
              },
              {
                icon: '🎯',
                title: 'Leadership',
                desc: 'Students learn to take initiative and lead in various activities.'
              },
              {
                icon: '🌟',
                title: 'Confidence',
                desc: 'Performing and participating builds self-esteem and public speaking skills.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}