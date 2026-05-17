import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import EventCard from '../components/EventCard'
import { activitiesData } from '../data/activitiesData'

// ── Single premium baby pink accent theme for all activity cards
const activityThemes = [
  {
    bg:     'bg-white',
    border: 'border-[#F5D6DC]',
    title:  'text-primary-900',
    accent: 'bg-[#E8A0B0]',
    glow:   'hover:shadow-[0_18px_40px_rgba(232,160,176,0.22)]',
  },
]

const getTheme = () => activityThemes[0]

export default function SchoolActivities() {
  const [selectedMonth, setSelectedMonth] = useState('All')

  const activities = Object.values(activitiesData)

  const months = [
    'All', 'January', 'February', 'June', 'July',
    'August', 'September', 'October', 'November', 'December', 'Quarterly',
  ]

  const filteredActivities =
    selectedMonth === 'All'
      ? activities
      : activities.filter(a => a.date === selectedMonth)

  const whyCards = [
    {
      dotClass: 'bg-primary-700',
      title: 'Cultural Awareness',
      desc: 'Students explore traditions, diversity, and global cultures through immersive events.',
    },
    {
      dotClass: 'bg-[#E8A0B0]',
      title: 'Holistic Development',
      desc: 'Creativity, leadership, teamwork, and confidence are nurtured every single day.',
    },
    {
      dotClass: 'bg-primary-500',
      title: 'Community Engagement',
      desc: 'Strong bonds between students, teachers, parents, and the wider community.',
    },
    {
      dotClass: 'bg-[#F2BEC8]',
      title: 'National Pride',
      desc: 'Respect and pride for our nation through meaningful, heartfelt celebrations.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <PageHero
        variant="pink"
        title="School Activities & Events"
        subtitle="Exploring beyond academics with enriching cultural, sports, and community activities."
      />

      {/* ── ACTIVITIES SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-white via-[#FDF6F8] to-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4788A] font-bold uppercase tracking-[0.22em] text-sm mb-3">
              Beyond the Classroom
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Celebrating Learning &amp; Growth
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto font-body leading-relaxed">
              Our school activities and events foster holistic development, cultural awareness,
              and strong community values.
            </p>
          </motion.div>

          {/* ── FILTER BUTTONS ── */}
          <div className="mb-10 flex flex-wrap gap-3 justify-center">
            {months.map(month => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`
                  px-5 py-2.5 rounded-full
                  font-semibold text-sm tracking-wide
                  transition-all duration-300
                  border
                  ${selectedMonth === month
                    ? 'bg-[#E8A0B0] text-white border-[#E8A0B0] shadow-lg shadow-[#E8A0B0]/30 scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#E8A0B0] hover:text-[#D4788A]'
                  }
                `}
              >
                {month}
              </button>
            ))}
          </div>

          {/* ── ACTIVITY CARDS GRID ── */}
          <div className="
            grid md:grid-cols-2 lg:grid-cols-3 gap-8
            p-6 rounded-3xl
            bg-gradient-to-br from-[#FDF0F3] via-[#FEF5F7] to-[#FDF0F3]
            border border-[#F5D6DC]
            shadow-[0_10px_40px_rgba(232,160,176,0.10)]
          ">
            {filteredActivities.map((activity, index) => {
              const theme = getTheme()

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    group rounded-3xl
                    border ${theme.border}
                    ${theme.bg}
                    shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                    ${theme.glow}
                    hover:-translate-y-2
                    transition-all duration-500
                    overflow-hidden
                    backdrop-blur-xl
                  `}
                >
                  {/* Baby pink accent top border */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#E8A0B0] via-[#F2BEC8] to-[#E8A0B0]" />

                  {activity.title && (
                    <div className="px-5 pt-5 pb-1">
                      <h3 className={`text-lg font-display font-bold ${theme.title}`}>
                        {activity.title}
                      </h3>
                    </div>
                  )}
                  <EventCard {...activity} />
                </motion.div>
              )
            })}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600 text-lg font-body">
                No activities scheduled for {selectedMonth}. Check back soon!
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── WHY WE CELEBRATE ── */}
      <section className="py-20 bg-gradient-to-b from-[#FDF6F8] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#D4788A] font-bold uppercase tracking-[0.22em] text-sm mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Why We Celebrate
            </h2>
            <p className="text-primary-600 font-body max-w-xl mx-auto leading-relaxed">
              Every event at Brindavan builds character, confidence, and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white rounded-2xl p-6
                  border border-[#F5D6DC]
                  shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                  hover:shadow-[0_12px_30px_rgba(232,160,176,0.15)]
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 ${item.dotClass}`} />
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-primary-600 font-body leading-relaxed pl-6">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white">

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#E8A0B0] blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#F2BEC8] blur-3xl rounded-full" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.28em] text-[#F2BEC8] text-xs font-bold mb-4">
              Let Your Child Shine
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 leading-tight">
              Every Talent Deserves{' '}
              <span className="text-[#F2BEC8]">A Platform</span>
            </h2>
            <p className="text-primary-100 font-body text-lg mb-10 leading-relaxed">
              Enrol your child and watch them discover who they truly are —
              inside and beyond the classroom.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/admissions"
                className="
                  px-10 py-4 rounded-full
                  bg-[#E8A0B0] text-white
                  font-bold tracking-wide
                  hover:bg-[#F2BEC8] hover:text-primary-900
                  transition-all duration-300
                  shadow-lg shadow-[#E8A0B0]/40 hover:scale-105
                "
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="
                  px-10 py-4 rounded-full
                  border border-white/30 bg-white/10 backdrop-blur-md
                  text-white font-semibold
                  hover:bg-white hover:text-primary-700
                  transition-all duration-300
                "
              >
                Visit Campus
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}