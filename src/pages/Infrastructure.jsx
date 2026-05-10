import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Building, Shield, Laptop, ArrowRight } from 'lucide-react'

export default function Infrastructure() {
  const infrastructureLinks = [
    {
      icon: Building,
      title: "Campus Overview",
      description: "Modern campus facilities and infrastructure",
      path: "/infrastructure/campus",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Comprehensive safety measures and security systems",
      path: "/infrastructure/safety",
      color: "from-gold-500 to-gold-600"
    },
    {
      icon: Laptop,
      title: "Digital Learning",
      description: "Technology infrastructure and digital education tools",
      path: "/infrastructure/digital",
      color: "from-primary-600 to-primary-700"
    }
  ]

  return (
    <div>
      <PageHero
        title="Infrastructure"
        subtitle="A safe, modern and inspiring campus environment designed for excellence in education."
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / Infrastructure"
      />

      {/* Infrastructure Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {infrastructureLinks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={item.path} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center text-gold-600 font-medium group-hover:text-gold-700 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Every aspect of our infrastructure is designed to create an optimal environment for learning, growth, and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Modern Facilities</h3>
              <ul className="space-y-3">
                {["State-of-the-art classrooms", "Advanced science laboratories", "Digital learning centers", "Sports and recreation facilities", "Library and research spaces", "Auditorium and performance halls"].map(facility => (
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Safety & Technology</h3>
              <ul className="space-y-3">
                {["24/7 security surveillance", "Emergency response systems", "High-speed internet connectivity", "Smart classroom technology", "Health and wellness centers", "Sustainable green infrastructure"].map(feature => (
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
    </div>
  )
}