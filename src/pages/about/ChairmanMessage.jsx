import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Quote, Award, Users, Heart } from 'lucide-react'

const founderPhoto = '/images/gallery/founder.png'

export default function ChairmanMessage() {
  return (
    <>
      <PageHero
        pageKey="chairman"
        title="Chairman's Message"
        subtitle="Visionary guidance and leadership shaping our institutional future."
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / About / Chairman's Message"
      />
      {/* Chairman Message */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Chairman Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="bg-gold-50 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold-300 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                      src={founderPhoto}
                      alt="M Mahesh Babu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                    M Mahesh Babu
                  </h3>
                  <p className="font-body text-charcoal-600 mb-4">Founder & CEO, Brindavan School</p>
                  <div className="flex justify-center gap-2">
                    <Award className="w-5 h-5 text-gold-500" />
                    <span className="text-sm font-body text-charcoal-500">20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="lg:col-span-2"
            >

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">

                {/* Header */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-1.5 h-8 bg-gold-500 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900">
                  About the Chairman
                </h2>
              </motion.div>

              {/* Paragraphs with reading effect */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.18,
                    },
                  },
                }}
                className="space-y-5 text-base md:text-lg text-charcoal-700 leading-relaxed"
              >

                {[
                  `Mr. M. Mahesh Babu, M.Sc.Ed (Physics), B.Ed, is a passionate educationist, visionary leader, and dedicated academic administrator with rich experience in teaching, school leadership, curriculum planning, and institutional development.`,

                  `He completed his integrated M.Sc.Ed in Physics from the prestigious Regional Institute of Education (NCERT), Mysore, securing an impressive CGPA of 8.2. He completed his Higher Secondary Education at Madhu Junior College, Palamaner.`,

                  `Since 2019, he has served in the field of education starting as PGT Physics Faculty at SR Vidyanikethan International School, where he contributed to conceptual learning, classroom innovation, and student mentoring.`,

                  `He later served as Vice Principal (2022–2024) and Principal (2024 onwards), strengthening academic systems, discipline frameworks, and teacher development programs.`,

                  `He has contributed to CBSE examination management and organized 50+ teacher training programs and 25+ workshops.`,

                  `He has held multiple roles including Chrysalis Coordinator, CCA Coordinator, NAS Observer, and Science Fair Coordinator.`,

                  `His achievements include top academic ranks, CTET qualification, leadership roles, and strong involvement in sports.`,

                  `Fluent in English, Hindi, Telugu, and Kannada, he continues to inspire students and educators through value-based education.`,
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      },
                    }}
                    className="transition-colors duration-300 hover:text-charcoal-900"
                  >
                    {text}
                  </motion.p>
                ))}

              </motion.div>

              {/* Signature */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <p className="font-bold text-charcoal-900">M. Mahesh Babu</p>
                <p className="text-sm text-charcoal-600">Founder & Correspondent</p>
              </motion.div>

              </div>

              {/* Key Achievements */}
              <div className="mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: Award,
                      title: 'Excellence Awards',
                      value: '15+',
                      desc: 'Regional & State Awards'
                    },
                    {
                      icon: Users,
                      title: 'Alumni Network',
                      value: '5000+',
                      desc: 'Successful Graduates'
                    },
                    {
                      icon: Heart,
                      title: 'Community Impact',
                      value: '20+',
                      desc: 'Years of Service'
                    }
                  ].map((achievement, index) => (
                    <div key={achievement.title} className="bg-white rounded-xl p-6 shadow-lg text-center">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="w-6 h-6 text-gold-600" />
                      </div>
                      <div className="text-2xl font-display font-bold text-charcoal-900 mb-1">{achievement.value}</div>
                      <div className="text-sm font-body font-semibold text-charcoal-800 mb-1">{achievement.title}</div>
                      <div className="text-xs font-body text-charcoal-500">{achievement.desc}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision for Future */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-charcoal-50"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-6"
          >
            Our Vision for the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-charcoal-600 mb-12 text-lg leading-relaxed"
          >
            Under the guidance of our Chairman, Brindavan School continues to evolve and adapt to meet the changing needs of education while maintaining our core values of excellence, integrity, and innovation.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Learning Revolution',
                desc: 'Integrating cutting-edge technology with traditional teaching methods to create immersive learning experiences.',
                icon: '💻'
              },
              {
                title: 'Global Citizenship',
                desc: 'Preparing students to be responsible global citizens with cultural awareness and environmental consciousness.',
                icon: '🌍'
              }
            ].map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">{vision.icon}</div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
                  {vision.title}
                </h3>
                <p className="font-body text-charcoal-600 leading-relaxed">
                  {vision.desc}
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
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-800"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-white mb-6"
          >
            Be Part of Our Legacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-primary-100 mb-8 text-lg"
          >
            Join thousands of families who have entrusted their children's future to Brindavan School
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg inline-block">
              Apply for Admission
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}