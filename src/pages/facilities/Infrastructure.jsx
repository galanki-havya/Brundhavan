import { motion } from 'framer-motion'

export default function Infrastructure() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            World-Class Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg text-gray-200"
          >
            Modern facilities designed to support academic excellence and holistic development
          </motion.p>
        </div>
      </section>

      {/* Infrastructure Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Brundavan School provides a modern and student-friendly campus designed to support academic excellence and holistic development. Our infrastructure combines safety, innovation, and comfort to create an ideal learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '🏫',
                title: 'Spacious Classrooms',
                desc: 'Well-ventilated and digitally equipped classrooms ensure an engaging and interactive learning experience for every student.'
              },
              {
                icon: '🧪',
                title: 'Science & Computer Labs',
                desc: 'Advanced laboratories encourage practical learning and innovation among students through hands-on experimentation.'
              },
              {
                icon: '📚',
                title: 'Library',
                desc: 'A well-stocked library with diverse resources fosters reading habits and research skills essential for lifelong learning.'
              },
              {
                icon: '⚽',
                title: 'Sports Facilities',
                desc: 'Dedicated playgrounds and indoor sports areas promote physical fitness, teamwork, and healthy competition.'
              },
              {
                icon: '🚌',
                title: 'Transport',
                desc: 'Safe and reliable transport system with GPS tracking ensures student security during daily commutes.'
              },
              {
                icon: '💻',
                title: 'Smart Classrooms',
                desc: 'Technology-enabled teaching enhances understanding through visual aids and interactive learning methods.'
              }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  {facility.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl mb-6"
          >
            Experience Our Campus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Schedule a campus tour to see our world-class facilities in person and discover why Brundavan School is the perfect choice for your child's education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-50 px-8 py-3 rounded-full font-body font-semibold shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="/gallery"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-full font-body font-semibold transition-all duration-300"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}