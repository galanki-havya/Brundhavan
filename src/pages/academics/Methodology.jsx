import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { BookOpen, Lightbulb, Users, Target, Brain } from 'lucide-react'

export default function Methodology() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHero
        title="Teaching Methodology"
        subtitle="Modern educational approaches and innovative strategies for student success."
        image="https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=1200&q=80"
        breadcrumbs="Home / Academics / Methodology"
      />
      
      {/* Methodology Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Inquiry-Based Learning",
                description: "Encouraging students to ask questions and explore answers through hands-on activities"
              },
              {
                icon: Lightbulb,
                title: "Project-Based Learning",
                description: "Real-world projects that develop critical thinking and problem-solving skills"
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                description: "Group activities that foster teamwork and communication skills"
              },
              {
                icon: Target,
                title: "Differentiated Instruction",
                description: "Tailored teaching methods to meet individual learning needs"
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

      {/* Teaching Methods */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Modern pedagogical methods combined with traditional values for holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "Smart boards, digital tools, and multimedia resources make learning engaging and interactive.",
                features: ["Digital Whiteboards", "Educational Apps", "Video Lessons", "Interactive Quizzes"]
              },
              {
                title: "Experiential Learning",
                description: "Learning through real-world experiences and hands-on activities.",
                features: ["Field Trips", "Science Experiments", "Art Projects", "Sports Activities"]
              },
              {
                title: "Assessment & Feedback",
                description: "Continuous assessment and personalized feedback to track progress.",
                features: ["Regular Tests", "Project Evaluations", "Parent-Teacher Meetings", "Progress Reports"]
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-charcoal-600 mb-6">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Ready to Transform Your Child's Education?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Discover our innovative teaching methods and modern learning environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold-500 text-primary-900 hover:bg-gold-400 font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              Apply Now
            </button>
            <button className="border border-white px-8 py-4 rounded-lg hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Book a Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}