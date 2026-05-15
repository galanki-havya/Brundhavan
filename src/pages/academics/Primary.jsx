import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { BookOpen, Users, Target, Award, Calculator, Globe, Microscope } from 'lucide-react'

export default function Primary() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Primary"
        subtitle="Building strong foundations in core subjects and developing essential life skills."
      />
      <motion.section className="hidden" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Primary Education
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Building strong foundations in core subjects and developing essential life skills
          </motion.p>
        </div>
      </motion.section>

      {/* Age Group */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Grades 1-5 (Age 6-10 Years)
            </h2>
            <p className="text-xl text-charcoal-600">
              Comprehensive learning across all core subjects with emphasis on conceptual understanding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Language Arts",
                description: "Reading, writing, comprehension, and communication skills"
              },
              {
                icon: Calculator,
                title: "Mathematics",
                description: "Numbers, operations, geometry, and problem-solving"
              },
              {
                icon: Globe,
                title: "Social Studies",
                description: "History, geography, civics, and cultural understanding"
              },
              {
                icon: Microscope,
                title: "Science",
                description: "Basic concepts in physics, chemistry, and biology"
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

      {/* Curriculum Focus */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Curriculum Focus Areas
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive learning that goes beyond textbooks to develop well-rounded individuals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Academic Excellence</h3>
                <ul className="space-y-3">
                  {[
                    "Conceptual understanding over rote learning",
                    "Regular assessments and feedback",
                    "Individual attention for struggling students",
                    "Advanced learning opportunities for gifted students"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Skill Development</h3>
                <ul className="space-y-3">
                  {[
                    "Critical thinking and problem-solving",
                    "Research and presentation skills",
                    "Digital literacy and computer skills",
                    "Public speaking and confidence building"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Co-Curricular Activities</h3>
                <ul className="space-y-3">
                  {[
                    "Art, music, and dance classes",
                    "Sports and physical education",
                    "Debate and drama clubs",
                    "Environmental awareness programs"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Character Building</h3>
                <ul className="space-y-3">
                  {[
                    "Values education and ethics",
                    "Leadership development programs",
                    "Community service initiatives",
                    "Cultural and moral education"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Assessment & Evaluation
            </h2>
            <p className="text-xl text-charcoal-600">
              Comprehensive evaluation methods to track progress and provide feedback
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Continuous Assessment",
                description: "Regular quizzes, assignments, and class participation",
                methods: ["Daily class work", "Weekly quizzes", "Monthly tests", "Project work"]
              },
              {
                title: "Formative Assessment",
                description: "Ongoing feedback to improve learning",
                methods: ["Peer reviews", "Self-assessment", "Teacher feedback", "Portfolio assessment"]
              },
              {
                title: "Summative Assessment",
                description: "Comprehensive evaluation at term end",
                methods: ["Term examinations", "Practical assessments", "Oral presentations", "Final projects"]
              }
            ].map((assessment, index) => (
              <motion.div
                key={assessment.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">
                  {assessment.title}
                </h3>
                <p className="text-charcoal-600 mb-6">
                  {assessment.description}
                </p>
                <ul className="space-y-2">
                  {assessment.methods.map(method => (
                    <li key={method} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {method}
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