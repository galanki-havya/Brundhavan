import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import { BookOpen, Trophy, Users, Target, GraduationCap, Code, Beaker } from 'lucide-react'

export default function Secondary() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Secondary"
        subtitle="Preparing students for board examinations and fostering academic excellence."
        image={new URL("../../assets/gallery/Infrastructure/1.jpg", import.meta.url).href}
        breadcrumbs="Home / Academics / Secondary"
      />
      <motion.section className="hidden" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Secondary Education
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Preparing students for higher education and future careers with advanced learning opportunities
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
              Grades 6-10 (Age 11-15 Years)
            </h2>
            <p className="text-xl text-charcoal-600">
              Advanced curriculum with specialization options and career guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Advanced Academics",
                description: "In-depth study of core subjects with higher-level concepts"
              },
              {
                icon: Code,
                title: "Technology Integration",
                description: "Digital literacy, programming, and modern tech skills"
              },
              {
                icon: Beaker,
                title: "Science & Research",
                description: "Laboratory work, experiments, and scientific inquiry"
              },
              {
                icon: BookOpen,
                title: "Literature & Arts",
                description: "Advanced language studies and creative expression"
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

      {/* Subject Streams */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Subject Streams & Electives
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Flexible curriculum allowing students to explore their interests and strengths
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
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Core Subjects</h3>
                <ul className="space-y-3">
                  {[
                    "English Language & Literature",
                    "Mathematics (Advanced)",
                    "Physics, Chemistry, Biology",
                    "History, Geography, Civics",
                    "Hindi/Sanskrit (Second Language)"
                  ].map(subject => (
                    <li key={subject} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Science Stream</h3>
                <ul className="space-y-3">
                  {[
                    "Advanced Physics & Chemistry",
                    "Biology with Lab Work",
                    "Mathematics (Higher Level)",
                    "Computer Science",
                    "Environmental Science"
                  ].map(subject => (
                    <li key={subject} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{subject}</span>
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
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Commerce Stream</h3>
                <ul className="space-y-3">
                  {[
                    "Business Studies",
                    "Accountancy",
                    "Economics",
                    "Mathematics/Statistics",
                    "Entrepreneurship"
                  ].map(subject => (
                    <li key={subject} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">Elective Subjects</h3>
                <ul className="space-y-3">
                  {[
                    "Computer Applications",
                    "Physical Education",
                    "Fine Arts & Design",
                    "Music & Performing Arts",
                    "Foreign Languages"
                  ].map(subject => (
                    <li key={subject} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Career Guidance & Counseling
            </h2>
            <p className="text-xl text-charcoal-600">
              Helping students make informed decisions about their future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Career Assessment",
                description: "Aptitude tests and personality assessments to identify strengths",
                services: ["Career counseling sessions", "Aptitude testing", "Interest inventories", "Personality assessments"]
              },
              {
                title: "Higher Education Guidance",
                description: "Information about colleges, courses, and admission processes",
                services: ["College selection guidance", "Entrance exam preparation", "Application assistance", "Scholarship information"]
              },
              {
                title: "Skill Development",
                description: "Workshops and training for future-ready skills",
                services: ["Communication skills", "Leadership training", "Digital literacy", "Entrepreneurship programs"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.services.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Examinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Board Examination Preparation
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive preparation for State Board examinations with a strong focus on conceptual clarity and confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Preparation Strategies</h3>
              <ul className="space-y-3">
                {[
                  "Regular mock tests and practice papers",
                  "Chapter-wise revision and doubt clearing",
                  "Time management and exam techniques",
                  "Stress management and study planning"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal-700">{item}</span>
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
              <h3 className="text-2xl font-display font-semibold text-charcoal-900">Support Systems</h3>
              <ul className="space-y-3">
                {[
                  "Individual mentoring and guidance",
                  "Extra classes for difficult subjects",
                  "Study material and reference books",
                  "Parent-teacher coordination"
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}