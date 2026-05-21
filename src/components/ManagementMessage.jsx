import { motion } from 'framer-motion'
import { siteData } from '../data/site'

export default function ManagementMessage() {
  const { Correspondent } = siteData
  const fallbackPhoto = '/images/gallery/founder.png'

  const message = `Mr. M. Mahesh Babu, M.Sc.Ed (Physics), B.Ed, is a passionate educationist and dynamic academic leader with extensive experience in teaching, school administration, and curriculum planning. A graduate of the Regional Institute of Education (NCERT), Mysore, he has been serving in the field of education since 2019. He worked as PGT Physics Faculty, Vice Principal, and presently serves as Principal at SR Vidyanikethan International School, Gadwal. Known for his innovative teaching methods, leadership skills, and student-friendly approach, he has organized numerous teacher training programmes, workshops, and academic development activities. He has also served as Deputy Chief Superintendent for CBSE Grade X Examinations and contributed actively to school development, curriculum implementation, and student mentoring. Fluent in English, Hindi, Telugu, and Kannada, Mr. Mahesh Babu strongly believes in holistic education that nurtures academic excellence, character, confidence, and leadership among students.`

  const tags = ['Academic Excellence', 'Innovation', 'Holistic Growth', 'Student Mentoring']

  return (
    <section className="relative bg-[#F9FAFB] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#011E3A 1px, transparent 1px), linear-gradient(90deg, #011E3A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#FF6347]" />
            <span className="text-[#FF6347] text-[10px] font-bold tracking-[4px] uppercase">Leadership</span>
            <div className="h-px w-10 bg-[#FF6347]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#011E3A] leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Message from Our{' '}
            <span className="text-[#FF6347] font-normal italic">CEO & Correspondent</span>
          </h2>
        </motion.div>

        {/* ── MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#FF6347] via-[#f5a623] to-[#011E3A]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* ── LEFT: Full-bleed photo ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 relative min-h-[320px] lg:min-h-0 bg-[#011E3A]"
            >
              <img
                src={Correspondent?.image || fallbackPhoto}
                alt={Correspondent?.name || 'Mr. M. Mahesh Babu'}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ imageRendering: 'crisp-edges' }}
              />
              {/* Bottom fade for name overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011E3A] via-[#011E3A]/20 to-transparent" />

              {/* Credential pill — top left */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="px-3 py-1 rounded-md text-[9px] font-bold tracking-[1.5px] uppercase"
                  style={{
                    background: 'rgba(1,30,58,0.75)',
                    border: '1px solid rgba(255,99,71,0.5)',
                    color: '#FFB199',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  M.Sc.Ed Physics · Integrated Dual Degree
                </span>
              </div>

              {/* Name plate at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <div className="w-6 h-[2px] bg-[#FF6347] mb-2.5 rounded-full" />
                <p
                  className="text-white text-lg font-bold leading-snug"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {Correspondent?.name || 'Mr. M. Mahesh Babu'}
                </p>
                <p className="text-[#FF9B85] text-[10px] font-semibold tracking-[2px] uppercase mt-1">
                  {Correspondent?.title || 'CEO & Correspondent'}
                </p>
              </div>
            </motion.div>

            {/* ── RIGHT: Content ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 flex flex-col p-7 lg:p-9"
            >
              {/* Opening quote mark */}
              <div
                className="text-[72px] text-[#FF6347]/10 leading-none select-none -mb-3 -ml-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                "
              </div>

              {/* Message text */}
              <p
                className="text-[#1C2B3A] text-[14.5px] leading-[1.9] flex-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {message}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Footer: tags only */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#FF6347] text-[9px] font-bold tracking-[3px] uppercase mr-1">
                  Core Values
                </span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[10px] font-semibold text-[#011E3A] border border-[#011E3A]/12 bg-[#F0F4F8] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}