import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Shield, Eye, AlertTriangle, Heart } from 'lucide-react'

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <Helmet>
        <title>Safety & Security - Brundavan Schools</title>
        <meta name="description" content="Comprehensive safety measures ensuring a secure learning environment for all students." />
      </Helmet>
      <PageHero
        title="Safety & Security"
        subtitle="Comprehensive safety measures ensuring a secure learning environment for all students."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
        breadcrumbs="Home / Infrastructure / Safety"
      />

      {/* Safety Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "AI-Assisted 24/7 Security",
                description: "AI-powered surveillance system with real-time monitoring and intelligent threat detection"
              },
              {
                icon: Eye,
                title: "CCTV Coverage",
                description: "Comprehensive camera network covering all campus areas"
              },
              {
                icon: AlertTriangle,
                title: "Emergency Response",
                description: "Rapid response systems for medical and safety emergencies"
              },
              {
                icon: Heart,
                title: "Health & Wellness",
                description: "Medical facilities and health monitoring programs"
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

      {/* Security Measures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Security Infrastructure
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Multi-layered security systems protecting students, staff, and campus facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Physical Security</h3>
              <ul className="space-y-3">
                {["Perimeter Fencing", "Gated Entry Points", "Security Guards", "Access Control", "Visitor Management", "Emergency Exits"].map(measure => (
                  <li key={measure} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-charcoal-700">{measure}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Digital Security</h3>
              <ul className="space-y-3">
                {["CCTV Surveillance", "Intrusion Detection", "Access Control Systems", "Emergency Alarms", "Communication Systems", "Digital Monitoring"].map(measure => (
                  <li key={measure} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-charcoal-700">{measure}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Safety Education Programs
            </h2>
            <p className="text-xl text-charcoal-600">
              Comprehensive safety education integrated into the curriculum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Safety",
                programs: ["Stranger danger awareness", "Road safety education", "Cyber safety", "Personal hygiene"]
              },
              {
                title: "Emergency Preparedness",
                programs: ["Fire safety drills", "Earthquake preparedness", "First aid training", "Evacuation procedures"]
              },
              {
                title: "Health & Wellness",
                programs: ["Nutrition education", "Mental health awareness", "Physical fitness", "Healthy lifestyle habits"]
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
                  {category.programs.map(program => (
                    <li key={program} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {program}
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
            Experience Our Advanced Safety Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            AI-powered security and comprehensive safety protocols for complete peace of mind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
              Secure Your Child's Safety
            </a>
            <a href="/contact" className="border border-white px-8 py-4 rounded-full hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Schedule Safety Tour
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}