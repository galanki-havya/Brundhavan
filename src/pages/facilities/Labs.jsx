import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { FlaskConical, Microscope, Atom, TestTube } from 'lucide-react'
import labsImg from '../../assets/Facilties/2.jpg'
import labsRightImg from '../../assets/rightimages/2.jpg'

export default function Labs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Laboratories"
        subtitle="Science labs designed for practical learning aligned with the State Board curriculum."
        backgroundImage={labsImg}
        fullOpacity={true}
        objectPosition="object-top"
        showOverlay={false}
      />

      {/* ── MAIN INTRODUCTION SECTION ── */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #EEF6FF 0%, #FFF8EE 50%, #F0FFF4 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm"
                style={{ background: '#DBEAFE', color: '#1D4ED8' }}
              >
                <FlaskConical className="w-4 h-4" />
                Hands-on Science
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#0D1B3E' }}>
                Advanced <br />
                Scientific <span className="text-[#C89B3C]">Laboratories</span>
              </h2>

              <div className="space-y-5 text-lg font-body leading-relaxed text-slate-600">
                <p>
                  Brindavan School maintains advanced, fully equipped science laboratories designed to promote practical, experiential learning. We believe that true scientific understanding comes from observation, experimentation, and critical analysis.
                </p>
                <p>
                  Our laboratories are designed to facilitate hands-on learning across Physics, Chemistry, and Biology, allowing students to bridge the gap between classroom theory and real-world natural phenomena in a safe, fully supervised setting.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  to="/admission-form"
                  className="font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#C89B3C]/20 hover:scale-105 inline-flex items-center gap-2"
                  style={{ background: '#C89B3C', color: '#0D1B3E' }}
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/facilities"
                  className="px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 hover:bg-[#1D4ED8] hover:text-white inline-flex items-center gap-2"
                  style={{ borderColor: '#1D4ED8', color: '#1D4ED8' }}
                >
                  All Facilities
                </Link>
              </div>
            </motion.div>

            {/* Right: Interactive Image Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-[#C89B3C] rounded-[2rem] rotate-3 group-hover:rotate-1 transition-transform duration-500" />
                <img
                  src={labsRightImg}
                  alt="Science Labs"
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
                />
                
                {/* Floating Stat Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 z-20 bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] flex items-center justify-center">
                      <FlaskConical className="w-7 h-7 text-[#1D4ED8]" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-[#0D1B3E]">100%</div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Hands-on Learning</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

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