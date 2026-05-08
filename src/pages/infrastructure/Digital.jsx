import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Laptop, Globe, Database, Smartphone } from 'lucide-react'

export default function Digital() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Digital Learning"
        subtitle="Cutting-edge digital infrastructure supporting modern education and future-ready skills."
        image="https://images.unsplash.com/photo-1517694712202-14819c9cb5c4?w=1200&q=80"
        breadcrumbs="Home / Infrastructure / Digital Learning"
      />

      {/* Digital Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Laptop,
                title: "Computer Labs",
                description: "State-of-the-art computer laboratories with latest hardware and software"
              },
              {
                icon: Globe,
                title: "Internet Connectivity",
                description: "High-speed broadband internet enabling online learning and research"
              },
              {
                icon: Database,
                title: "Digital Resources",
                description: "Access to online libraries, educational platforms, and digital content"
              },
              {
                icon: Smartphone,
                title: "Mobile Learning",
                description: "BYOD programs and mobile applications for enhanced learning"
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

      {/* Technology Infrastructure */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Technology Infrastructure
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Modern digital infrastructure supporting 21st-century learning methodologies
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
                {["High-performance Computers", "Interactive Whiteboards", "Student Tablets", "Audio-Visual Equipment", "Printers & Scanners", "Networking Infrastructure"].map(hardware => (
                  <li key={hardware} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{hardware}</span>
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
                {["Educational Software", "Learning Management System", "Digital Assessment Tools", "Creative Applications", "Programming Environments", "Online Collaboration Tools"].map(software => (
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

      {/* Digital Learning Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Digital Learning Initiatives
            </h2>
            <p className="text-xl text-charcoal-600">
              Innovative programs leveraging technology for enhanced learning outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "STEM Education",
                initiatives: ["Coding & Programming", "Robotics Workshops", "3D Design & Printing", "Virtual Science Labs"]
              },
              {
                title: "Digital Literacy",
                initiatives: ["Internet Safety", "Digital Citizenship", "Information Research", "Online Communication"]
              },
              {
                title: "Future Skills",
                initiatives: ["AI & Machine Learning", "Data Analysis", "Digital Design", "Entrepreneurship Tools"]
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
                  {category.initiatives.map(initiative => (
                    <li key={initiative} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {initiative}
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