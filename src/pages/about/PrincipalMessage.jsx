import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Quote, Users, Target, Heart, GraduationCap, BookOpen } from 'lucide-react'

export default function PrincipalMessage() {
  return (
    <>
      <PageHero
        title="Principal's Message"
        subtitle="Educational philosophy and commitment to student excellence."
        image="https://images.unsplash.com/photo-1535904457992-de9ece4ffde7?w=1200&q=80"
        breadcrumbs="Home / About / Principal's Message"
      />
      {/* Principal Message */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Principal Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 bg-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-primary-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                    Dr. Principal Name
                  </h3>
                  <p className="font-body text-charcoal-600 mb-4">Principal, Brundavan School</p>
                  <div className="space-y-2 text-sm font-body text-charcoal-500">
                    <div>M.Ed., M.Phil.</div>
                    <div>15+ Years Experience</div>
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
              <div className="bg-primary-50 rounded-2xl p-8 border-l-4 border-primary-500">
                <h2 className="font-display font-bold text-3xl text-charcoal-900 mb-6">
                  Nurturing Tomorrow's Leaders Today
                </h2>
                <div className="space-y-6 text-lg font-body text-charcoal-700 leading-relaxed">
                  <p>
                    Dear Students, Parents, and Esteemed Colleagues,
                  </p>
                  <p>
                    It is my privilege to serve as the Principal of Brundavan School, an institution that has become synonymous with educational excellence in our region. Every day, I witness the incredible potential of our students and the dedication of our faculty, and it fills me with immense pride and optimism for the future.
                  </p>
                  <p>
                    At Brundavan School, we believe that education is not just about academic achievement, but about developing well-rounded individuals who are prepared to face the challenges of the modern world. Our comprehensive curriculum, combined with our focus on character development and extracurricular activities, ensures that our students receive a holistic education.
                  </p>
                  <p>
                    Our teachers are not just educators; they are mentors, guides, and role models who inspire our students to dream big and work hard to achieve their goals. The success of our alumni in various fields stands as a testament to the quality of education we provide.
                  </p>
                  <p>
                    As we continue to innovate and adapt to the changing educational landscape, our commitment to maintaining the highest standards of excellence remains unwavering. We are dedicated to creating an environment where every student can thrive academically, socially, and emotionally.
                  </p>
                  <p className="font-semibold">
                    Together, let us continue to build a brighter future for our students and our community.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-primary-200">
                  <p className="font-display font-bold text-charcoal-900">Dr. Principal Name</p>
                  <p className="font-body text-charcoal-600">Principal</p>
                </div>
              </div>

              {/* Educational Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-6">Our Educational Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: BookOpen,
                      title: 'Knowledge & Skills',
                      desc: 'Building strong academic foundation with practical skills'
                    },
                    {
                      icon: Users,
                      title: 'Character Building',
                      desc: 'Developing values, ethics, and social responsibility'
                    },
                    {
                      icon: Target,
                      title: 'Goal Setting',
                      desc: 'Teaching students to set and achieve meaningful goals'
                    },
                    {
                      icon: GraduationCap,
                      title: 'Lifelong Learning',
                      desc: 'Instilling love for learning that lasts a lifetime'
                    }
                  ].map((philosophy, index) => (
                    <div key={philosophy.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <philosophy.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-charcoal-900 mb-1">{philosophy.title}</h4>
                        <p className="text-sm font-body text-charcoal-600">{philosophy.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements & Initiatives */}
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
              Key Achievements & Initiatives
            </h2>
            <p className="font-body text-charcoal-600 max-w-3xl mx-auto">
              Under the leadership of our Principal, Brundavan School has achieved remarkable milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Academic Excellence',
                desc: 'Consistently achieving 95%+ pass rates with numerous state rank holders',
                color: 'from-yellow-400 to-yellow-600'
              },
              {
                icon: '🎨',
                title: 'Arts & Culture',
                desc: 'Award-winning performances in inter-school cultural competitions',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: '⚽',
                title: 'Sports Achievements',
                desc: 'Multiple district and state-level championships in various sports',
                color: 'from-green-400 to-green-600'
              },
              {
                icon: '🌱',
                title: 'Environmental Initiatives',
                desc: 'Leading eco-friendly programs and sustainability projects',
                color: 'from-emerald-400 to-emerald-600'
              },
              {
                icon: '🤝',
                title: 'Community Service',
                desc: 'Active participation in social welfare and community development',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: '💡',
                title: 'Innovation in Education',
                desc: 'Implementing cutting-edge teaching methodologies and technology',
                color: 'from-indigo-400 to-indigo-600'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{achievement.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="font-body text-charcoal-600 leading-relaxed">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Outlook */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-charcoal-900 mb-6"
          >
            Looking Ahead
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-charcoal-600 mb-12 text-lg leading-relaxed"
          >
            As we continue our journey of educational excellence, we remain committed to adapting to the evolving needs of our students while preserving the values that have made Brundavan School a trusted name in education.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-50 rounded-2xl p-8"
          >
            <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-4">Our Promise to Parents</h3>
            <p className="font-body text-charcoal-700 text-lg leading-relaxed mb-6">
              We promise to provide your child with an education that not only equips them with knowledge and skills, but also shapes their character and prepares them to be responsible, compassionate, and successful individuals.
            </p>
            <div className="flex justify-center">
              <Link to="/admissions" className="btn-primary">
                Join Our Community
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}