import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Calendar, Music, Trophy, Users } from 'lucide-react'

export default function Annual() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7FB] via-[#FFFDFD] to-[#FFF4F8]">

      <Helmet>
        <title>Annual Events - Brindavan Schools</title>
        <meta name="description" content="Explore annual events, cultural programs, sports meets, and celebrations at Brindavan School." />
      </Helmet>

      <PageHero
        variant="pink"
        title="Annual Events"
        subtitle="Celebrating achievements, culture, and community through memorable annual traditions."
        backgroundImage="/images/gallery/Assembly.png"
      />

      {/* ── EVENT CATEGORY CARDS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D94680] font-bold uppercase tracking-[0.22em] text-xs mb-3">
              Our Traditions
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#7A284B] mb-4">
              Signature Annual Events
            </h2>
            <p className="text-[#7C6A74] text-lg max-w-2xl mx-auto leading-relaxed">
              Every year we come together to celebrate learning, culture, sport, and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                icon: Calendar,
                title: 'Annual Day',
                description: 'Grand celebration of the academic year with cultural performances and prize distribution.',
              },
              {
                icon: Music,
                title: 'Cultural Festival',
                description: 'Showcasing diverse cultural traditions and the artistic talents of every student.',
              },
              {
                icon: Trophy,
                title: 'Sports Meet',
                description: 'Annual sports competitions that build teamwork, fitness, and a spirit of excellence.',
              },
              {
                icon: Users,
                title: 'Parent-Teacher Meet',
                description: 'Collaborative sessions that strengthen the bond between families and educators.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  bg-white/80 backdrop-blur-xl
                  border border-[#F6D6E6]
                  rounded-[32px]
                  p-7
                  shadow-[0_10px_40px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_18px_50px_rgba(236,72,153,0.18)]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                {/* Pink top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8A0B0] via-[#F2BEC8] to-[#E8A0B0] rounded-t-[32px]" />

                <div className="w-14 h-14 bg-gradient-to-br from-[#FFE4EF] to-[#FFD3E2] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <item.icon className="w-7 h-7 text-[#D94680]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#7A284B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7C6A74] leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8FC] via-[#FFFDFE] to-[#FFF1F7] relative overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-rose-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D94680] font-bold uppercase tracking-[0.22em] text-xs mb-3">
              Visual Memories
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#7A284B] mb-4">
              Moments From Our Annual Events
            </h2>
            <p className="text-[#7C6A74] text-lg max-w-3xl mx-auto leading-relaxed">
              Glimpses of celebrations, competitions, performances, and memorable school experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { title: 'Annual Day',            image: '/images/gallery/AnnualDay/1.jpg' },
              { title: 'Cultural Activities',   image: '/images/gallery/ChildrensDay/1.jpg' },
              { title: 'Sports Meet',           image: '/images/gallery/ScienceDay/1.jpg' },
              { title: 'Parent Teacher Meet',   image: '/images/gallery/HouseVisit/1.jpg' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  group cursor-pointer
                  overflow-hidden rounded-[28px]
                  bg-white/70 backdrop-blur-xl
                  border border-[#F7D9E6]
                  shadow-[0_10px_35px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_20px_55px_rgba(236,72,153,0.18)]
                  hover:-translate-y-3
                  transition-all duration-500
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-64 object-cover brightness-[0.92] group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0F24]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-white text-lg font-display font-bold drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="
                inline-flex items-center gap-2
                bg-[#D94680] text-white
                px-10 py-4 rounded-full
                font-semibold tracking-wide
                hover:bg-[#A3376B]
                transition-all duration-300
                shadow-lg shadow-[#E8A0B0]/40
                hover:scale-105
              "
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* ── EVENT HIGHLIGHTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D94680] font-bold uppercase tracking-[0.22em] text-xs mb-3">
              What Happens
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#7A284B] mb-4">
              Event Highlights
            </h2>
            <p className="text-[#7C6A74] text-lg max-w-3xl mx-auto leading-relaxed">
              Signature events that define our school culture and community spirit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-br from-[#FFF0F5] to-white
                border border-[#F5D6DC]
                rounded-[30px] p-8
                shadow-[0_8px_30px_rgba(232,160,176,0.12)]
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFE4EF] to-[#FFD3E2] rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#D94680]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#7A284B]">
                  Annual Day Celebrations
                </h3>
              </div>
              <ul className="space-y-3">
                {['Cultural Performances', 'Prize Distribution', 'Student Achievements', 'Community Participation', 'Entertainment Programs', 'Memorable Speeches'].map(event => (
                  <li key={event} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#E8A0B0] rounded-full flex-shrink-0" />
                    <span className="text-[#7C6A74]">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-br from-[#FFF0F5] to-white
                border border-[#F5D6DC]
                rounded-[30px] p-8
                shadow-[0_8px_30px_rgba(232,160,176,0.12)]
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FFE4EF] to-[#FFD3E2] rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[#D94680]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#7A284B]">
                  Sports &amp; Cultural Events
                </h3>
              </div>
              <ul className="space-y-3">
                {['Inter-House Competitions', 'Traditional Dance & Music', 'Drama & Theater', 'Art Exhibitions', 'Debates & Quiz', 'Community Service Projects'].map(event => (
                  <li key={event} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                    <span className="text-[#7C6A74]">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── EVENT IMPACT ── */}
      <section className="py-20 bg-gradient-to-b from-[#FFF8FC] to-[#FFF4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D94680] font-bold uppercase tracking-[0.22em] text-xs mb-3">
              Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#7A284B] mb-4">
              Event Impact &amp; Learning
            </h2>
            <p className="text-[#7C6A74] text-lg max-w-2xl mx-auto leading-relaxed">
              How our annual events contribute to holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: 'Cultural Appreciation',
                benefits: ['Understanding diversity', 'Artistic expression', 'Cultural heritage', 'Creative confidence'],
              },
              {
                icon: Users,
                title: 'Social Skills',
                benefits: ['Team collaboration', 'Leadership development', 'Public speaking', 'Community engagement'],
              },
              {
                icon: Trophy,
                title: 'Personal Growth',
                benefits: ['Self-confidence building', 'Achievement recognition', 'Goal setting', 'Resilience development'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
                  group
                  bg-white/80 backdrop-blur-xl
                  border border-[#F6D6E6]
                  rounded-[30px] p-8
                  shadow-[0_10px_35px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_18px_45px_rgba(236,72,153,0.15)]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFE4EF] to-[#FFD3E2] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <category.icon className="w-6 h-6 text-[#D94680]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#7A284B] mb-5">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-[#7C6A74]">
                      <div className="w-2 h-2 bg-[#E8A0B0] rounded-full flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#7A284B] via-[#A3376B] to-[#D94680] text-white">

        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-pink-300/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-rose-200/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="uppercase tracking-[0.28em] text-[#F2BEC8] text-xs font-bold mb-4">
            Be Part Of It
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight"
          >
            Join Our Annual{' '}
            <span className="text-[#F2BEC8]">Celebrations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-white/80 text-lg leading-relaxed"
          >
            Experience our vibrant school culture and community events throughout the year.
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
              className="
                bg-white text-[#C2417A]
                hover:bg-[#FFF1F7]
                font-semibold
                px-10 py-4 rounded-full
                transition-all duration-300
                shadow-[0_10px_30px_rgba(255,255,255,0.18)]
                hover:scale-105
              "
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="
                border border-white/40
                bg-white/10 backdrop-blur-xl
                px-10 py-4 rounded-full
                hover:bg-white hover:text-[#C2417A]
                font-semibold
                transition-all duration-300
              "
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}