import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Quote, Award, Users, Heart } from 'lucide-react'

export default function ChairmanMessage() {
  return (
    <>
      <PageHero
        title="Chairman's Message"
        subtitle="Visionary guidance and leadership shaping our institutional future."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
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
                  <div className="w-48 h-48 bg-charcoal-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-24 h-24 text-charcoal-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                    Mr. Chairman Name
                  </h3>
                  <p className="font-body text-charcoal-600 mb-4">Chairman, Brindavan School</p>
                  <div className="flex justify-center gap-2">
                    <Award className="w-5 h-5 text-gold-500" />
                    <span className="text-sm font-body text-charcoal-500">20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-charcoal-50 rounded-2xl p-8 border-l-4 border-gold-500">
                <Quote className="w-12 h-12 text-gold-500 mb-6" />
                <h2 className="font-display font-bold text-3xl text-charcoal-900 mb-6">
                  A Message to Our Brindavan Family
                </h2>
                <div className="space-y-6 text-lg font-body text-charcoal-700 leading-relaxed">
                  <p>
                    Dear Parents, Teachers, and Students,
                  </p>
                  <p>
                    It is with great pride and humility that I welcome you to Brindavan School. Over the past two decades, we have built not just an educational institution, but a community dedicated to nurturing young minds and shaping future leaders.
                  </p>
                  <p>
                    Education is not merely about acquiring knowledge; it is about developing character, fostering creativity, and instilling values that will guide our students throughout their lives. At Brindavan School, we believe in providing a holistic education that addresses the intellectual, emotional, physical, and spiritual needs of every child.
                  </p>
                  <p>
                    Our commitment to excellence is unwavering. We continuously strive to create an environment where learning is engaging, teachers are inspired, and students are empowered to reach their full potential. The success stories of our alumni stand as testament to the quality of education we provide.
                  </p>
                  <p>
                    As we look to the future, I am confident that Brindavan School will continue to be a beacon of educational excellence in Andhra Pradesh. Together, we will shape a brighter future for our children and contribute to the development of our society.
                  </p>
                  <p className="font-semibold">
                    Thank you for choosing Brindavan School. Your trust inspires us to do better every day.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-charcoal-200">
                  <p className="font-display font-bold text-charcoal-900">Mr. Chairman Name</p>
                  <p className="font-body text-charcoal-600">Chairman</p>
                </div>
              </div>

              {/* Key Achievements */}
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