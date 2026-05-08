import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { GraduationCap, Users, Award, Heart } from 'lucide-react'

export default function AboutOverview() {
  return (
    <>
      <Helmet>
        <title>Best School in Palamaner | About Brundavan School</title>
        <meta
          name="description"
          content="Learn about Brundavan School, Palamaner — a modern educational institution focused on academic excellence, discipline, innovation, and holistic student development with experienced faculty and safe learning environment."
        />
      </Helmet>
      <PageHero
        title="About Brundavan School"
        subtitle="Discover our rich heritage, values, and commitment to educational excellence."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=90&auto=format&fit=crop"
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
                className="inline-flex items-center gap-2 bg-[#F3E4D4] text-[#8B5E3C] px-4 py-2 rounded-full text-sm font-body font-semibold"
              >
                <GraduationCap className="w-4 h-4" />
                Founded 2025
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display font-bold text-3xl md:text-4xl text-[#3A2618]"
              >
                Modern Education for Future Leaders
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-body text-[#5F5147] leading-relaxed"
              >
                Brundavan School, established on May 22, 2025, was founded with a vision to redefine quality education in Palamaner. Built with modern infrastructure, experienced faculty, and a commitment to academic excellence, the school creates a safe, disciplined, and innovative learning environment for every child.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-body text-[#5F5147] leading-relaxed"
              >
                We focus on building strong academic foundations, developing character and communication skills, and fostering confidence in every student. With CCTV-monitored campus, experienced faculty, and age-appropriate activity-based learning, parents trust us to nurture their children into successful, responsible individuals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about/vision-mission" className="bg-[#C89B3C] text-black hover:bg-[#B8862F] font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2">
                  Our Vision & Mission
                </Link>
                <Link to="/about/leadership" className="border border-[#C89B3C] text-[#5C3A21] hover:bg-[#FFF3E6] px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2">
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
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
                <img
                  src="/images/about-campus.webp"
                  alt="Brundavan School Palamaner — modern campus with classrooms and learning facilities"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-poster.jpg';
                  }}
                />
                <div className="absolute -bottom-6 -left-6 bg-[#FAF7F2] border border-[#E7D9C7] rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F3E4D4] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#8B5E3C]" />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-[#3A2618]">250+</div>
                      <div className="text-sm font-body text-[#5F5147]">Students</div>
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
        className="py-20 bg-[#F4EEE6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A2618] mb-4">
              Why Parents Choose Brundavan
            </h2>
            <p className="font-body text-[#5F5147] max-w-2xl mx-auto">
              A trusted choice for quality education, safety, discipline, and holistic development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, label: 'Safe Campus', value: '🔒', desc: 'CCTV monitored' },
              { icon: GraduationCap, label: 'Experienced Faculty', value: '✓', desc: 'Qualified & caring' },
              { icon: Users, label: 'Activity Learning', value: '🎓', desc: 'Engagement focused' },
              { icon: Award, label: 'Excellence', value: '⭐', desc: 'Strong academics' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-md border border-[#E7D9C7] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.value}</div>
                <div className="text-lg font-body font-semibold text-[#3A2618] mb-1">{stat.label}</div>
                <div className="text-sm font-body text-[#5F5147]">{stat.desc}</div>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A2618] mb-4">
              Our Core Values
            </h2>
            <p className="font-body text-[#5F5147] max-w-3xl mx-auto">
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
                className="bg-[#F4EEE6] border border-[#E7D9C7] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-[#3A2618] mb-3 group-hover:text-[#8B5E3C] transition-colors">
                  {value.title}
                </h3>
                <p className="font-body text-[#5F5147] leading-relaxed">
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