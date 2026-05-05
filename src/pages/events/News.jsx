import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Newspaper, TrendingUp, Award, Users } from 'lucide-react'

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-gold-50">
      {/* Hero Section */}
      <Helmet>
        <title>Brundavan School News</title>
        <meta name="description" content="Stay updated with the latest happenings, achievements, and announcements from Brundavan School." />
      </Helmet>
      <PageHero
        title="School News"
        subtitle="Stay updated with the latest happenings, achievements, and announcements from Brundavan School."
        image="https://images.unsplash.com/photo-1444027714806-8a027fb24d77?w=1200&q=80"
        breadcrumbs="Home / Events / News"
      />

      {/* News Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Newspaper,
                title: "Latest Updates",
                description: "Current announcements and important school news"
              },
              {
                icon: Award,
                title: "Achievements",
                description: "Student and staff accomplishments and recognitions"
              },
              {
                icon: TrendingUp,
                title: "School Progress",
                description: "Development updates and new initiatives"
              },
              {
                icon: Users,
                title: "Community News",
                description: "Events, activities, and community engagement"
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
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold-600" />
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

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Highlighting our most important news and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Board Results",
                description: "Students achieve outstanding results in board examinations with multiple distinctions",
                category: "Achievements"
              },
              {
                title: "New Science Laboratory",
                description: "State-of-the-art science lab inaugurated with modern equipment and facilities",
                category: "Infrastructure"
              },
              {
                title: "Inter-School Competition Victory",
                description: "School team wins multiple trophies in regional science and mathematics olympiad",
                category: "Sports & Academics"
              },
              {
                title: "Community Service Initiative",
                description: "Students participate in tree plantation drive and environmental awareness programs",
                category: "Community"
              },
              {
                title: "Digital Learning Program",
                description: "Launch of comprehensive digital education platform for enhanced learning",
                category: "Technology"
              },
              {
                title: "Annual Cultural Festival",
                description: "Grand celebration showcasing diverse cultural performances and artistic talents",
                category: "Events"
              }
            ].map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-sm text-gold-600 font-medium mb-2">
                  {news.category}
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {news.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-900 mb-4">
              News & Updates
            </h2>
            <p className="text-xl text-charcoal-600">
              Our story in numbers and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "News Articles", suffix: "" },
              { number: "95%", label: "Positive Coverage", suffix: "" },
              { number: "50+", label: "Awards Won", suffix: "" },
              { number: "10,000+", label: "Community Reach", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gold-600 mb-2">
                  {stat.number}
                  {stat.suffix && <span className="text-lg text-charcoal-600">{stat.suffix}</span>}
                </div>
                <div className="text-charcoal-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-primary-900 to-secondary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Stay Updated With Our News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80"
          >
            Get the latest updates, achievements, and announcements from our vibrant school community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/admissions" className="bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
              Apply Now
            </a>
            <a href="/contact" className="border border-white px-8 py-4 rounded-full hover:bg-white/10 font-body font-semibold transition-all duration-300">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}