import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import WhatsAppButton from '../components/WhatsAppButton'
import { siteData } from '../data/site'

const { school } = siteData

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Best CBSE School in Palamaner, Chittoor | Brindavan School Admissions 2026</title>
        <meta 
          name="description" 
          content="Brundavan School - Best CBSE school in Palamaner, Andhra Pradesh. Modern campus, expert faculty, quality education. Admissions open 2026-27." 
        />
        <meta 
          name="keywords" 
          content="best school in Palamaner, top school in Palamaner, CBSE school Palamaner, best school in Chittoor, Brundavan School Palamaner, CBSE schools Andhra Pradesh, modern school Palamaner, admissions open 2026" 
        />

        {/* Open Graph (for WhatsApp, Facebook) */}
        <meta property="og:title" content="Brundavan School - Best CBSE School in Palamaner" />
        <meta property="og:description" content="Join Brundavan School for academic excellence, modern campus, and holistic growth." />
        <meta property="og:image" content="/images/hero-poster.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brundavan School - CBSE Excellence" />
        <meta name="twitter:description" content="Top CBSE school in Palamaner with modern education and facilities." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://brindavanschool.in/" />
        
        {/* Robots Meta */}
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Brindavan School",
            "url": "https://brindavanschool.in",
            "logo": "https://brindavanschool.in/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Palamaner",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8919498070",
              "contactType": "Admissions"
            }
          })}
        </script>
      </Helmet>

      <Hero
        title="Best CBSE School in Palamaner"
        subtitle="Admissions Open 2026–27 | Limited Seats Available"
        ctaText="Apply Now"
        ctaLink="/admissions"
      />


      {/* Results Section (HIGH CONVERSION) */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-subheading"
          >
            Academic Excellence
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading"
          >
            Our Future Achievers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mb-12"
          >
            Building a strong foundation for top ranks, success, and bright futures.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                name: "Top Performance Focus",
                desc: "Strong academic foundation for future IIT/NEET aspirants",
              },
              {
                name: "Concept-Based Learning",
                desc: "Deep understanding instead of rote learning",
              },
              {
                name: "Individual Attention",
                desc: "Every child gets personalized guidance",
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="font-bold text-xl mb-3 text-primary-700">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
            
          </div>

          <div className="mt-12 text-sm text-gray-500">
            CBSE Curriculum • Limited Seats • Individual Attention • Result-Oriented Learning
          </div>

        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Why Choose Brundavan School?
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "Experienced Faculty",
              "Modern Classrooms",
              "Strong Discipline",
              "Focus on Results"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-primary-700">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>

      {/* About Preview */}
      <Section className="bg-gradient-to-br from-background to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full -translate-y-32 translate-x-32 opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=90&auto=format&fit=crop"
                  alt="Brundavan students"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-poster.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-3xl border border-white/20 bg-black/40 px-5 py-4 shadow-xl backdrop-blur-lg">
                  <div className="text-3xl font-display font-black text-white">Est. {school.established}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-300 mt-1">Trusted by Families</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="section-subheading"
              >
                Welcome to Brundavan
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="section-heading"
              >
                A Legacy of Learning & Leadership
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-body text-gray-600 leading-relaxed mb-4"
              >
                {school.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-body text-gray-600 leading-relaxed mb-8"
              >
                Brindavan School is designed to deliver metro-city level education in Palamaner, combining discipline, innovation, and academic excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about" className="btn-primary group">
                  Our Story
                  <motion.svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
                <Link to="/academics" className="btn-outline group">
                  Explore Academics
                  <motion.svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Facilities />
      <Gallery />

      {/* Events Section */}
      <Section className="bg-gradient-to-br from-background to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-subheading">School Life</p>
            <h2 className="section-heading">Latest Events</h2>
            <p className="text-gray-500 font-body max-w-xl mx-auto">
              Join us in celebrating creativity, achievement, and community spirit throughout the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Annual Day',
                desc: 'Celebrating talent and creativity through cultural performances and achievements.',
                link: '/events'
              },
              {
                icon: '🏃',
                title: 'Sports Meet',
                desc: 'Encouraging fitness and teamwork through exciting athletic competitions.',
                link: '/events'
              },
              {
                icon: '🧪',
                title: 'Science Fair',
                desc: 'Innovation and discovery through student-led science projects and experiments.',
                link: '/events'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-xl hover:bg-white transition-all duration-300 group border border-white/20"
              >
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                  {event.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-gray-600 mb-6 leading-relaxed">
                  {event.desc}
                </p>
                <Link
                  to={event.link}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-gold-400 font-body font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/events"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Testimonials />

      {/* CTA Band */}
      <section className="bg-primary-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-secondary-800 to-primary-900 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight"
          >
            Admissions Closing Soon for 2026–27
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Only limited seats available. Secure your child's admission before slots fill.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black hover:scale-105 hover:shadow-2xl font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
            >
              Apply Now
            </Link>
            <a
              href="https://wa.me/918919498070?text=Hi%20I%20want%20admission%20details%20for%202026-27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 hover:scale-105 hover:shadow-2xl font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
            >
              Book Campus Visit
            </Link>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  )
}
