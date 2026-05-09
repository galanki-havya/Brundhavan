import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Monitor, BookOpen, Users, Zap } from 'lucide-react'

export default function SmartClassrooms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Smart Classrooms"
        subtitle="Technology-enabled learning environments with interactive teaching tools and digital resources."
        image={new URL("../../assets/gallery/Infrastructure/1.jpg", import.meta.url).href}
        breadcrumbs="Home / Facilities / Smart Classrooms"
      />
      <motion.section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Smart Classrooms
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Interactive learning environments powered by cutting-edge technology for enhanced educational experiences
          </motion.p>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Interactive Displays",
                description: "Large touch-screen displays for collaborative learning and multimedia presentations"
              },
              {
                icon: BookOpen,
                title: "Digital Content",
                description: "Access to vast digital libraries, educational videos, and interactive simulations"
              },
              {
                icon: Users,
                title: "Student Engagement",
                description: "Tools that promote active participation and real-time feedback"
              },
              {
                icon: Zap,
                title: "Modern Technology",
                description: "Latest educational software and hardware for 21st-century learning"
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

      {/* Technology Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Technology Integration
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              State-of-the-art technology seamlessly integrated into the learning process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Hardware</h3>
              <ul className="space-y-3">
                {["Interactive Whiteboards", "Student Tablets", "Audio Systems", "Video Conferencing", "Smart Projectors"].map(tech => (
                  <li key={tech} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{tech}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Software & Platforms</h3>
              <ul className="space-y-3">
                {["Educational Apps", "Learning Management System", "Digital Assessment Tools", "Virtual Labs", "Online Resources"].map(software => (
                  <li key={software} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{software}</span>
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