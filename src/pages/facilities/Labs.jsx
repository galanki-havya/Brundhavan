import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { FlaskConical, Microscope, Atom, TestTube } from 'lucide-react'

export default function Labs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Laboratories"
        subtitle="Science labs designed for practical learning aligned with the State Board curriculum."
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / Facilities / Laboratories"
      />
      <motion.section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Science Laboratories
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            State-of-the-art laboratories equipped for hands-on scientific exploration and discovery
          </motion.p>
        </div>
      </motion.section>

      {/* Lab Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Chemistry Lab",
                description: "Advanced chemical analysis and experimentation facilities"
              },
              {
                icon: Microscope,
                title: "Biology Lab",
                description: "Microscopic study and biological research equipment"
              },
              {
                icon: Atom,
                title: "Physics Lab",
                description: "Mechanics, optics, and electronics experimentation"
              },
              {
                icon: TestTube,
                title: "General Science",
                description: "Integrated science experiments and demonstrations"
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
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-700" />
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

      {/* Equipment & Safety */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Laboratory Facilities
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Modern equipment and safety protocols for effective scientific learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Equipment</h3>
              <ul className="space-y-3">
                {["Digital Microscopes", "Spectrophotometers", "Centrifuges", "Incubators", "pH Meters", "Balances"].map(equipment => (
                  <li key={equipment} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{equipment}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Safety Features</h3>
              <ul className="space-y-3">
                {["Emergency Showers", "Fire Extinguishers", "First Aid Kits", "Safety Goggles", "Lab Coats", "Ventilation Systems"].map(feature => (
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

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Practical Learning Benefits
            </h2>
            <p className="text-xl text-charcoal-600">
              Hands-on experience that enhances theoretical understanding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scientific Method",
                benefits: ["Hypothesis testing", "Data collection", "Analysis skills", "Conclusion drawing"]
              },
              {
                title: "Technical Skills",
                benefits: ["Equipment handling", "Measurement accuracy", "Safety protocols", "Documentation"]
              },
              {
                title: "Critical Thinking",
                benefits: ["Problem solving", "Observation skills", "Pattern recognition", "Innovation"]
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
    </div>
  )
}