import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Bus, Shield, Clock, MapPin } from 'lucide-react'

export default function Transport() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Helmet>
        <title>Transport - Brindavan Schools</title>
        <meta name="description" content="Safe and reliable school transport services with GPS tracking and professional drivers." />
      </Helmet>
      <PageHero
        pageKey="transport"
        title="Transport"
        subtitle="Safe and reliable school transport services with GPS tracking and professional drivers."
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / Facilities / Transport"
      />
      
      {/* Transport Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bus,
                title: "Modern Fleet",
                description: "Well-maintained buses with latest safety features and comfortable seating"
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "GPS tracking, trained drivers, and comprehensive safety protocols"
              },
              {
                icon: Clock,
                title: "Punctual Service",
                description: "Reliable pickup and drop-off timings with minimal delays"
              },
              {
                icon: MapPin,
                title: "Wide Coverage",
                description: "Extensive route network covering the entire Palamaner area"
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

      {/* Safety & Comfort */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Safety & Comfort Features
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive measures ensuring the highest standards of student safety and comfort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Safety Measures</h3>
              <ul className="space-y-3">
                {["GPS Tracking System", "Speed Governors", "Emergency Communication", "First Aid Kits", "Fire Extinguishers", "Seat Belts"].map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{feature}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Comfort Features</h3>
              <ul className="space-y-3">
                {["Air-conditioned Buses", "Comfortable Seating", "Audio Entertainment", "Reading Lights", "Clean Interiors", "Temperature Control"].map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Routes & Timings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Route Information
            </h2>
            <p className="text-xl text-charcoal-600">
              Comprehensive coverage with multiple routes and flexible timings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Route Coverage",
                details: ["Palamaner Town", "Nearby Villages", "Residential Areas", "Commercial Zones", "Industrial Areas"]
              },
              {
                title: "Timings",
                details: ["Morning Pickup: 7:00 AM - 8:30 AM", "Evening Drop-off: 2:00 PM - 4:00 PM", "Flexible Scheduling", "Holiday Services"]
              },
              {
                title: "Additional Services",
                details: ["Special Needs Transport", "Medical Emergency Support", "Weather Contingency", "Route Optimization"]
              }
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-6">
                  {info.title}
                </h3>
                <ul className="space-y-2">
                  {info.details.map(detail => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
 
    </div>
  )
}