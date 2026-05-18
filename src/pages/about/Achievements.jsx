import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Trophy, Award, Medal, Star } from 'lucide-react'

export default function Achievements() {

  const achievements = [
    {
      year: '2025',
      title: 'Foundation Year Excellence Setup',
      category: 'Institution Building',
      description: 'Established modern infrastructure, State Board alignment, and digital classrooms.',
      icon: Trophy,
      color: 'from-[#C89B3C] to-[#8B5E3C]'
    },
    {
      year: '2025',
      title: 'Modern Learning Environment',
      category: 'Educational Innovation',
      description: 'Created smart classrooms with advanced teaching methodologies.',
      icon: Award,
      color: 'from-[#8B5E3C] to-[#6F452B]'
    },
    {
      year: '2025',
      title: 'Community Engagement Initiative',
      category: 'Social Impact',
      description: 'Built strong parent-school partnerships and outreach programs.',
      icon: Medal,
      color: 'from-[#C89B3C] to-[#A8742F]'
    },
    {
      year: '2025',
      title: 'Digital Infrastructure Setup',
      category: 'Technology Integration',
      description: 'Implemented modern learning platforms and digital systems.',
      icon: Star,
      color: 'from-[#8B5E3C] to-[#C89B3C]'
    }
  ]

  const stats = [
    { label: 'Foundation Year', value: '2025', icon: '🏆' },
    { label: 'Infrastructure', value: 'Modern', icon: '🏫' },
    { label: 'Learning System', value: 'Smart', icon: '📘' },
    { label: 'Programs', value: 'Active', icon: '🤝' }
  ]

  return (
    <>
      <PageHero
        title="Our Achievements"
        subtitle="Building excellence through innovation, discipline, and modern education."
        backgroundImage="/images/gallery/AcademicAchivers/2.jpg"
      />

      {/* STATS */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
            Achievement Highlights
          </h2>

          <p className="text-charcoal-600 mb-12">
            Key milestones that define our journey
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#E7D9C7] rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xl font-bold text-[#3A2618]">
                  {item.value}
                </div>
                <div className="text-sm text-[#5F5147]">
                  {item.label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-[#F4EEE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#3A2618]">
              Our Milestones
            </h2>
            <p className="text-[#5F5147] mt-2">
              Growth through continuous improvement
            </p>
          </div>

          <div className="space-y-10">

            {achievements.map((a, index) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                  <a.icon className="w-10 h-10" />
                </div>

                {/* Card */}
                <div className="bg-white border border-[#E7D9C7] rounded-2xl p-8 shadow-sm hover:shadow-xl transition w-full">

                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#F3E4D4] text-[#8B5E3C] px-3 py-1 rounded-full text-sm font-semibold">
                      {a.year}
                    </span>
                    <span className="text-sm text-[#5F5147]">
                      {a.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#3A2618] mb-2">
                    {a.title}
                  </h3>

                  <p className="text-[#5F5147]">
                    {a.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3A2618] text-white text-center">

        <h2 className="text-3xl font-bold mb-3">
          Be Part of Our Journey
        </h2>

        <p className="text-[#E7D9C7] mb-6">
          Every achievement starts with a single step
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/admissions"
            className="bg-[#C89B3C] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8862f] transition"
          >
            Join Now
          </Link>

          <Link
            to="/about/overview"
            className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Learn More
          </Link>

        </div>
      </section>

    </>
  )
}