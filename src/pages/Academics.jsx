import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { siteData } from '../data/site'

const { programs } = siteData

export default function Academics() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Academics"
        subtitle="Empowering students through innovative learning methodologies and comprehensive educational programs."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350"
        breadcrumbs="Home / Academics"
      />
      {/* Curriculum Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  State Board Curriculum Excellence
                </h2>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  Brindavan School follows the State Board curriculum, recognized for its balanced emphasis on academics, values, and practical learning. Our program combines strong foundations with modern methodology tailored for local students.
                </p>
                <p className="font-body text-gray-600 leading-relaxed mb-8">
                  We emphasize conceptual understanding, critical thinking, and practical application of knowledge. Our experienced faculty uses innovative teaching methods including project-based learning, digital tools, and real-world problem-solving activities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <span className="font-body font-medium text-gray-800">State Board Accredited</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="font-body font-medium text-gray-800">NEP 2020 Aligned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💻</span>
                    <span className="font-body font-medium text-gray-800">Digital Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌟</span>
                    <span className="font-body font-medium text-gray-800">Holistic Development</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=85"
                alt="Academic Excellence"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Academic Programmes */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Academic Programmes
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational pathways designed for every stage of development, from early childhood to strong secondary school preparation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-display font-bold text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-body font-medium bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                      {program.age}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {program.level}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {program.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Teaching Approach */}
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Innovative methodologies that engage, inspire, and empower every student to reach their full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: 'Concept-Based Learning',
                desc: 'Focus on understanding core concepts rather than rote memorization, building strong foundations for lifelong learning.'
              },
              {
                icon: '🔬',
                title: 'Hands-On Experimentation',
                desc: 'Practical learning through science labs, projects, and real-world applications that make education engaging and memorable.'
              },
              {
                icon: '🤝',
                title: 'Collaborative Learning',
                desc: 'Group activities and peer learning that develop communication skills, teamwork, and social responsibility.'
              }
            ].map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {approach.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  {approach.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {approach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Subjects */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Core Subjects
            </h2>
            <p className="font-body text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering essential knowledge areas with modern teaching methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🔢', name: 'Mathematics', desc: 'Problem-solving & logical thinking' },
              { icon: '🧪', name: 'Science', desc: 'Physics, Chemistry & Biology' },
              { icon: '📖', name: 'English', desc: 'Language & Literature' },
              { icon: '🌍', name: 'Social Studies', desc: 'History, Geography & Civics' },
              { icon: '🎨', name: 'Arts', desc: 'Visual & Performing Arts' },
              { icon: '🎵', name: 'Music', desc: 'Classical & Contemporary' },
              { icon: '⚽', name: 'Physical Education', desc: 'Sports & Fitness' },
              { icon: '💻', name: 'Computer Science', desc: 'Digital Literacy & Coding' }
            ].map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {subject.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {subject.name}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {subject.desc}
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
            Ready to Explore Academic Excellence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Join our community of learners where academic achievement meets personal growth. Discover how our comprehensive curriculum and dedicated faculty can help your child thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-50 px-8 py-3 rounded-full font-body font-semibold shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-full font-body font-semibold transition-all duration-300"
            >
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
