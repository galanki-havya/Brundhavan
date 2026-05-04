import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Building, Trees, ParkingSquare, Wifi } from 'lucide-react'

export default function Campus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <PageHero
        title="Campus Overview"
        subtitle="A modern, well-planned campus designed for an optimal learning environment."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
        breadcrumbs="Home / Infrastructure / Campus"
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
              { number: "50,000", label: "Sq. Ft. Campus Area", suffix: "sq ft" },
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
    </div>
  )
}