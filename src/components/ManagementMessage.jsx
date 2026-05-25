import { motion } from 'framer-motion'
import { siteData } from '../data/site'
import { GraduationCap, Briefcase, Award, School } from 'lucide-react'

export default function ManagementMessage() {
  const { Correspondent } = siteData
  const fallbackPhoto = '/images/gallery/founder.png'
  const signatureImage = '/images/gallery/signature.png'

  const tags = [
    { label: 'Academic Excellence', color: 'bg-[#FFF4F2] text-[#FF6347] border-[#FF6347]/30' },
    { label: 'Innovation', color: 'bg-emerald-50 text-emerald-700 border-emerald-300' },
    { label: 'Holistic Growth', color: 'bg-blue-50 text-blue-700 border-blue-300' },
    { label: 'Student Mentoring', color: 'bg-purple-50 text-purple-700 border-purple-300' },
  ]

  const achievements = [
    {
      icon: <Briefcase className="w-3.5 h-3.5" />,
      accent: '#FF6347', bg: 'bg-[#FFF4F2]', border: 'border-[#FF6347]/25',
      iconBg: 'bg-[#FF6347]/10', iconColor: 'text-[#FF6347]',
      title: 'Principal — International School',
      sub: 'SR Vidyanikethan International School, Gadwal',
    },
    {
      icon: <School className="w-3.5 h-3.5" />,
      accent: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-200',
      iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600',
      title: '50+ CBSE Workshops Conducted',
      sub: 'Teacher Training Programs (2019–2025)',
    },
    {
      icon: <Award className="w-3.5 h-3.5" />,
      accent: '#2563EB', bg: 'bg-blue-50', border: 'border-blue-200',
      iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
      title: 'NEET Examinations Conducted',
      sub: 'Under NTA Guidelines',
    },
    {
      icon: <Award className="w-3.5 h-3.5" />,
      accent: '#D97706', bg: 'bg-amber-50', border: 'border-amber-200',
      iconBg: 'bg-amber-100', iconColor: 'text-amber-600',
      title: 'NAS Observer — Govt. of India',
      sub: 'National Achievement Survey',
    },
    {
      icon: <Briefcase className="w-3.5 h-3.5" />,
      accent: '#7C3AED', bg: 'bg-purple-50', border: 'border-purple-200',
      iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
      title: 'Deputy Chief Superintendent',
      sub: 'CBSE Term-1 & Grade X Boards (2021–2025)',
    },
  ]

  return (
    <section className="relative bg-[#F9FAFB] py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#011E3A 1px, transparent 1px), linear-gradient(90deg, #011E3A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-5 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#FF6347]" />
            <span className="text-[#FF6347] text-[9px] font-bold tracking-[4px] uppercase">Leadership</span>
            <div className="h-px w-8 bg-[#FF6347]" />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#011E3A] leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Message from Our{' '}
            <span className="text-[#FF6347] font-normal italic">CEO & Correspondent</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
        >
          <div className="h-1 w-full bg-gradient-to-r from-[#FF6347] via-[#f5a623] to-[#011E3A]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-[#011E3A] flex-shrink-0"
                style={{ height: '320px' }}
              >
                <img
                  src={Correspondent?.image || fallbackPhoto}
                  alt={Correspondent?.name || 'Mr. M. Mahesh Babu'}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011E3A] via-[#011E3A]/10 to-transparent" />
                <div className="absolute top-3 left-3 right-3 z-10">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[8px] font-bold tracking-[1.5px] uppercase"
                    style={{
                      background: 'rgba(1,30,58,0.78)',
                      border: '1px solid rgba(255,99,71,0.45)',
                      color: '#FFB199',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <Briefcase className="w-2.5 h-2.5" />
                    {Correspondent?.title || 'CEO & Correspondent'}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 px-4 py-3 z-10">
                  <div className="w-5 h-[2px] bg-[#FF6347] mb-1.5 rounded-full" />
                  <p className="text-white text-[15px] font-bold leading-snug" style={{ fontFamily: "'Georgia', serif" }}>
                    {Correspondent?.name || 'Mr. M. Mahesh Babu'}
                  </p>
                  <p className="flex items-center gap-1.5 text-[#FF9B85] text-[9px] font-semibold tracking-[2px] uppercase mt-0.5">
                    <GraduationCap className="w-3 h-3" />
                    {Correspondent?.qualification || 'M.Sc.Ed Physics · Integrated Dual Degree'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-[#F9FAFB] border-t border-slate-100 p-3"
              >
                <p className="text-[#FF6347] text-[8px] font-bold tracking-[3px] uppercase mb-2">
                  Achievements & Roles
                </p>
                <div className="flex flex-col gap-1.5">
                  {achievements.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.05 * i }}
                      className={`relative flex items-center gap-2 px-2.5 py-2 rounded-lg border ${item.bg} ${item.border} overflow-hidden`}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: item.accent }} />
                      <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ml-1 ${item.iconBg} ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11.5px] font-bold leading-tight" style={{ color: '#0F172A', fontFamily: "'Georgia', serif" }}>
                          {item.title}
                        </p>
                        <p className="text-[10px] leading-tight mt-0.5 font-medium" style={{ color: '#475569' }}>
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 flex flex-col p-5 lg:px-8 lg:py-6"
            >
              <div>
                <div
                  className="text-[56px] text-[#FF6347]/10 leading-none select-none -mb-2 -ml-1"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  "
                </div>
                <p
                  className="text-[#FF6347] text-[12px] font-semibold mb-2 tracking-wide"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Dear Students,
                </p>
                <div
                  className="text-[#1C2B3A] text-[13px] leading-[1.85] space-y-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  <p>
                    Every one of you carries within you an extraordinary spark — a unique potential
                    that the world is waiting to witness. At Brindavan School, we believe education
                    is not merely the transfer of knowledge; it is the awakening of curiosity, the
                    building of character, and the cultivation of courage to dream beyond boundaries.
                  </p>
                  <p>
                    As you walk through these halls each day, remember that your journey here is far
                    greater than marks on a paper. It is about discovering who you are, learning how
                    to think, and growing into the person you are destined to become. Embrace every
                    challenge as an opportunity, every failure as a lesson, and every success as a
                    responsibility to lift others alongside you.
                  </p>
                  <p>
                    We are committed to standing beside you — as mentors, as guides, and as
                    believers in your potential. The values you build today will be the foundation
                    of the leader you become tomorrow.
                  </p>
                </div>
                <p
                  className="mt-4 text-[#011E3A] text-[12.5px] font-semibold italic"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Dream boldly. Work sincerely. Grow with purpose.
                </p>
              </div>

              <div className="mt-5">
                <div className="mb-3 h-px bg-slate-100" />
                <div className="mb-3 -ml-12">
                  <img 
                    src={signatureImage} 
                    alt="Signature" 
                    className="w-[190px] h-[52px] object-contain" 
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p
                      className="text-[#011E3A] text-[14px] font-bold leading-snug"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {Correspondent?.name || 'Mr. M. Mahesh Babu'}
                    </p>
                    <p className="text-[#FF6347] text-[9px] font-semibold tracking-[2px] uppercase mt-0.5">
                      {Correspondent?.title || 'CEO & Correspondent'}
                    </p>
                    <p className="text-slate-600 text-[11px] mt-0.5 tracking-wide font-medium">
                      Brindavan School, Palamaner
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-2.5 py-1 rounded-full text-[9.5px] font-bold border tracking-wide ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}