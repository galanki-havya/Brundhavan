import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Calendar, Music, Trophy, Users } from 'lucide-react'

export default function Annual() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Annual Events - Brindavan Schools</title>
        <meta name="description" content="Explore annual events, cultural programs, sports meets, and celebrations at Brindavan School." />
      </Helmet>
      <PageHero
        pageKey="annual"
        title="Annual Events"
        subtitle="Celebrating achievements, culture, and community through memorable annual traditions"
        image="/images/gallery/AnnualDay/2.jpg"
        breadcrumbs="Home / Events / Annual"
      />

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

      {/* Event Gallery Preview */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Moments From Our Annual Events
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Glimpses of celebrations, competitions, performances, and memorable school experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Annual Day',
                image: '/images/gallery/AnnualDay/1.jpg'
              },
              {
                title: 'Cultural Activities',
                image: '/images/gallery/ChildrensDay/1.jpg'
              },
              {
                title: 'Sports Meet',
                image: '/images/gallery/ScienceDay/1.jpg'
              },
              {
                title: 'Parent Teacher Meeting',
                image: '/images/gallery/HouseVisit/1.jpg'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl shadow-lg bg-white"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-72 object-cover brightness-[0.92] transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#5C3A21] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B5E3C] transition-all duration-300 shadow-lg"
            >
              View Full Gallery
            </a>
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
            Join Our Annual Celebrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Experience our vibrant school culture and community events throughout the year.
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
            <Link to="/contact" className="border border-white px-8 py-4 rounded-full hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}