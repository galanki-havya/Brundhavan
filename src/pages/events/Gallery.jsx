import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Camera, Users, Award, Calendar } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <Helmet>
        <title>Brundavan School - Photo Gallery</title>
        <meta name="description" content="Capturing memorable moments and showcasing the vibrant life at Brundavan School." />
      </Helmet>
      <PageHero
        title="Photo Gallery"
        subtitle="Capturing memorable moments and showcasing the vibrant life at Brundavan School."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
        breadcrumbs="Home / Events / Gallery"
      />

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "School Events",
                description: "Celebrations, festivals, and special school programs"
              },
              {
                icon: Award,
                title: "Achievements",
                description: "Academic excellence, sports victories, and competitions"
              },
              {
                icon: Calendar,
                title: "Annual Functions",
                description: "Cultural programs, annual days, and graduation ceremonies"
              },
              {
                icon: Camera,
                title: "Campus Life",
                description: "Daily activities, classroom moments, and student interactions"
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

      {/* Featured Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Featured Moments
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Highlights from our most memorable school events and activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Day Celebration",
                description: "Students showcasing cultural performances and talents"
              },
              {
                title: "Science Exhibition",
                description: "Innovative projects and scientific discoveries by students"
              },
              {
                title: "Sports Day",
                description: "Athletic competitions and team spirit demonstrations"
              },
              {
                title: "Art & Craft Exhibition",
                description: "Creative expressions and artistic achievements"
              },
              {
                title: "Graduation Ceremony",
                description: "Celebrating academic milestones and future beginnings"
              },
              {
                title: "Community Service",
                description: "Students engaged in social welfare activities"
              }
            ].map((photo, index) => (
              <motion.div
                key={photo.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-gold-200 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-2">
                  {photo.title}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {photo.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Gallery Statistics
            </h2>
            <p className="text-xl text-charcoal-600">
              Our visual journey through the years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Photos", suffix: "" },
              { number: "50+", label: "Events Covered", suffix: "" },
              { number: "10+", label: "Years of Memories", suffix: "years" },
              { number: "100%", label: "Digital Archive", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gold-600 mb-2">
                  {stat.number}
                  {stat.suffix && <span className="text-lg text-charcoal-600">{stat.suffix}</span>}
                </div>
                <div className="text-charcoal-700 font-medium">
                  {stat.label}
                </div>
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
            Explore Our Photo Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Discover our vibrant school community through memorable moments and celebrations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
              Apply Now
            </a>
            <a href="/contact" className="border border-white px-8 py-4 rounded-full hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Schedule Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}