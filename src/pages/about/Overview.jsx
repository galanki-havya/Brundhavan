import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { GraduationCap, Users, Award, Heart } from 'lucide-react'

export default function AboutOverview() {
  return (
    <>
      <PageHero
        title="About Brundavan School"
        subtitle="Discover our rich heritage, values, and commitment to educational excellence."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
        breadcrumbs="Home / About / Overview"
      />
      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-body font-semibold"
              >
                <GraduationCap className="w-4 h-4" />
                Established 2003
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display font-bold text-3xl md:text-4xl text-charcoal-900"
              >
                Nurturing Excellence Since 2003
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-body text-charcoal-600 leading-relaxed"
              >
                Brundavan School has been a cornerstone of quality education in Palamaner, Chittoor district. Founded with a vision to provide holistic education, we have grown from a small institution to one of the most respected schools in Andhra Pradesh.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-body text-charcoal-600 leading-relaxed"
              >
                Our commitment to academic excellence, character development, and innovative teaching methodologies has made us a preferred choice for parents seeking comprehensive education for their children.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about/vision-mission" className="btn-primary">
                  Our Vision & Mission
                </Link>
                <Link to="/about/leadership" className="btn-outline">
                  Meet Our Leaders
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=85"
                  alt="Brundavan School campus"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-charcoal-900">1000+</div>
                      <div className="text-sm font-body text-charcoal-500">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-charcoal-50"
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
              Our Impact in Numbers
            </h2>
            <p className="font-body text-charcoal-600 max-w-2xl mx-auto">
              Two decades of excellence reflected in our achievements and community impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Students', value: '1000+', desc: 'Enrolled students' },
              { icon: GraduationCap, label: 'Teachers', value: '50+', desc: 'Qualified faculty' },
              { icon: Award, label: 'Years', value: '20+', desc: 'Years of excellence' },
              { icon: Heart, label: 'Families', value: '2000+', desc: 'Happy families' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold-600" />
                </div>
                <div className="text-3xl font-display font-bold text-charcoal-900 mb-2">{stat.value}</div>
                <div className="text-lg font-body font-semibold text-charcoal-800 mb-1">{stat.label}</div>
                <div className="text-sm font-body text-charcoal-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
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
              Our Core Values
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              These principles guide everything we do at Brundavan School, shaping the character and future of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                desc: 'Striving for the highest standards in academics, character, and personal development.',
                icon: '🎯'
              },
              {
                title: 'Integrity',
                desc: 'Building strong moral character and ethical decision-making in all aspects of life.',
                icon: '🛡️'
              },
              {
                title: 'Innovation',
                desc: 'Embracing new teaching methodologies and technologies to enhance learning.',
                icon: '💡'
              },
              {
                title: 'Community',
                desc: 'Fostering a supportive environment where students, teachers, and parents work together.',
                icon: '🤝'
              },
              {
                title: 'Respect',
                desc: 'Teaching respect for self, others, and the environment through words and actions.',
                icon: '🙏'
              },
              {
                title: 'Growth',
                desc: 'Encouraging continuous learning and personal development throughout life.',
                icon: '🌱'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="font-body text-charcoal-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}