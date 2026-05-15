import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { Target, Eye, Heart, Lightbulb } from 'lucide-react'

export default function VisionMission() {
  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Guiding principles that shape our educational philosophy and institutional purpose."
      />

      {/* VISION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#FAF7F2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#F3E4D4] text-[#8B5E3C] px-4 py-2 rounded-full text-sm font-semibold">
                <Eye className="w-4 h-4" />
                Our Vision
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A2618]">
                To Be a Leading Educational Institution
              </h2>

              <p className="text-[#5F5147] leading-relaxed">
                To be recognized as a premier institution that nurtures academic excellence,
                character development, and holistic growth, inspiring students to become
                responsible global citizens.
              </p>

              <div className="bg-white border border-[#E7D9C7] rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#3A2618] mb-2">
                  Our Long-term Goal
                </h3>
                <p className="text-[#5F5147]">
                  To empower every student to discover their potential and become confident,
                  ethical, and successful individuals.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-[#C89B3C] to-[#8B5E3C] rounded-2xl p-8 text-white shadow-xl">
              <Eye className="w-14 h-14 mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
              <p className="opacity-90 leading-relaxed">
                Our vision extends beyond academics to build complete personalities prepared
                for the challenges of the modern world.
              </p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#F4EEE6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-[#8B5E3C] px-4 py-2 rounded-full text-sm font-semibold border border-[#E7D9C7]">
              <Target className="w-4 h-4" />
              Our Mission
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#3A2618] mt-4">
              Empowering Every Child
            </h2>

            <p className="text-[#5F5147] max-w-3xl mx-auto mt-2">
              We aim to provide a nurturing environment where students grow academically,
              emotionally, and socially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { icon: '📚', title: 'Academic Excellence', desc: 'Strong foundation in all subjects with critical thinking.' },
              { icon: '💪', title: 'Character Development', desc: 'Values of discipline, respect, and integrity.' },
              { icon: '🎯', title: 'Holistic Growth', desc: 'Sports, arts, and co-curricular activities.' },
              { icon: '🤝', title: 'Inclusive Learning', desc: 'Equal opportunity for every child.' },
              { icon: '🔬', title: 'Innovation', desc: 'Modern teaching methods and smart learning.' },
              { icon: '🌍', title: 'Global Vision', desc: 'Preparing responsible global citizens.' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#E7D9C7] rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#3A2618] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5F5147] text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* CORE PRINCIPLES */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618]">
            Core Principles
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-[#F4EEE6] border border-[#E7D9C7] rounded-2xl p-8">
            <Heart className="text-[#C89B3C] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A2618] mb-2">
              Student-Centric Approach
            </h3>
            <p className="text-[#5F5147]">
              Every decision prioritizes student growth and well-being.
            </p>
          </div>

          <div className="bg-[#F4EEE6] border border-[#E7D9C7] rounded-2xl p-8">
            <Lightbulb className="text-[#C89B3C] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A2618] mb-2">
              Continuous Innovation
            </h3>
            <p className="text-[#5F5147]">
              Improving teaching methods and learning experience continuously.
            </p>
          </div>

        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-20 bg-[#3A2618] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-[#E7D9C7] mb-6">
          Be part of a learning community shaping the future.
        </p>

        <Link
          to="/admissions"
          className="bg-[#C89B3C] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#b8862f] transition"
        >
          Apply Now
        </Link>
      </section>
    </>
  )
}