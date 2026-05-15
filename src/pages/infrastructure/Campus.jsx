import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Building, Trees, ParkingSquare, Wifi } from 'lucide-react'

export default function Campus() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Helmet>
        <title>Campus Overview - Brindavan Schools</title>
        <meta name="description" content="A modern, well-planned campus designed for an optimal learning environment." />
      </Helmet>
      <PageHero
        title="Campus Overview"
        subtitle="A modern, well-planned campus designed for an optimal learning environment."
      />

      {/* Campus Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Modern Architecture",
                description: "Contemporary building design with ample natural light and ventilation"
              },
              {
                icon: Trees,
                title: "Green Spaces",
                description: "Landscaped gardens and recreational areas for outdoor activities"
              },
              {
                icon: ParkingSquare,
                title: "Parking Facilities",
                description: "Dedicated parking for staff, visitors, and school transport"
              },
              {
                icon: Wifi,
                title: "Wi-Fi Coverage",
                description: "Campus-wide high-speed internet for digital learning"
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

      {/* Campus Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive infrastructure supporting academic excellence and student development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Academic Buildings</h3>
              <ul className="space-y-3">
                {["Primary Wing", "Secondary Wing", "Science Block", "Computer Lab", "Library Building", "Administrative Block"].map(facility => (
                  <li key={facility} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{facility}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Recreational Areas</h3>
              <ul className="space-y-3">
                {["Sports Ground", "Basketball Court", "Playground", "Auditorium", "Open Amphitheater", "Garden Areas"].map(area => (
                  <li key={area} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Campus Statistics
            </h2>
            <p className="text-xl text-charcoal-600">
              Numbers that reflect our commitment to quality education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50,000 sq ft", label: "Campus Area", suffix: "" },
              { number: "25", label: "Classrooms", suffix: "" },
              { number: "8", label: "Specialized Labs", suffix: "" },
              { number: "5", label: "Sports Facilities", suffix: "" }
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
            Visit Our Modern Campus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Experience world-class infrastructure and learning environment in person.
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
              Schedule Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}