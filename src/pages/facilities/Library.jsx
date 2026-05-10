import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { Book, Search, Users, Clock } from 'lucide-react'

export default function Library() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Library"
        subtitle="A rich library hub supporting State Board study material, reading habits, and research projects."
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / Facilities / Library"
      />
      <motion.section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            School Library
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            A comprehensive knowledge hub fostering reading habits and research skills
          </motion.p>
        </div>
      </motion.section>

      {/* Library Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Book,
                title: "Extensive Collection",
                description: "Thousands of books across all subjects and age groups"
              },
              {
                icon: Search,
                title: "Digital Catalog",
                description: "Online search system for quick book location and availability"
              },
              {
                icon: Users,
                title: "Reading Programs",
                description: "Regular reading sessions and literary activities"
              },
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Flexible timing to accommodate different schedules"
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

      {/* Collection Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Diverse resources catering to academic needs and personal development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Academic Resources</h3>
              <ul className="space-y-3">
                {["Textbooks & Reference Books", "Encyclopedias & Dictionaries", "Subject-specific Journals", "Educational Magazines", "Research Papers", "Competitive Exam Books"].map(resource => (
                  <li key={resource} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{resource}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">General Reading</h3>
              <ul className="space-y-3">
                {["Fiction & Literature", "Biographies & Memoirs", "Science & Technology", "History & Culture", "Art & Music", "Children's Books"].map(category => (
                  <li key={category} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{category}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Library Services
            </h2>
            <p className="text-xl text-charcoal-600">
              Comprehensive support for research, learning, and personal growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research Support",
                services: ["Reference assistance", "Database access", "Internet research", "Citation guidance"]
              },
              {
                title: "Reading Programs",
                services: ["Book clubs", "Author visits", "Reading challenges", "Literary discussions"]
              },
              {
                title: "Digital Services",
                services: ["Online catalog", "E-books access", "Audiobooks", "Educational videos"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.services.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {item}
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