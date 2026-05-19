import { motion } from 'framer-motion'
import { siteData } from '../data/site'
import { Quote } from 'lucide-react'

export default function ManagementMessage() {
  const { Correspondent } = siteData
  const fallbackPhoto = '/images/gallery/founder.png'

  return (
    <section className="relative bg-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">

      {/* Soft ambient glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6347]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ee530b]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="h-px w-7 bg-[#FF6347]" />
            <span className="text-[#FF6347] font-semibold text-[11px] tracking-[3px] uppercase">
              Leadership
            </span>
            <span className="h-px w-7 bg-[#FF6347]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#011E3A] tracking-tight">
            Message from Our{' '}
            <span className="italic font-serif font-normal text-[#FF6347]">Correspondent</span>
          </h2>
        </motion.div>

        {/* ── MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ── LEFT: Photo ── */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-[#FFF4F2] to-[#FFF8F0] flex items-center justify-center p-8 lg:p-10">

              {/* Decorative top bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6347] via-[#ee530b] to-[#011E3A]" />

              <div className="relative w-full max-w-[260px]">
                {/* Offset decorative border */}
                <div className="absolute inset-0 border-2 border-[#FF6347]/20 rounded-2xl translate-x-3 translate-y-3 z-0" />

                {/* Photo container */}
                <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-lg shadow-[#FF6347]/10 bg-[#FFD8CC]">
                  <img
                    src={Correspondent.image || fallbackPhoto}
                    alt={Correspondent.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Name badge */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-[#011E3A] text-white px-4 py-2.5 rounded-xl shadow-lg shadow-[#011E3A]/20">
                  <p className="font-semibold text-[13px] text-white leading-tight">{Correspondent.name}</p>
                  <p className="text-[#ee530b] text-[10px] font-medium tracking-wider uppercase mt-0.5">
                    {Correspondent.title}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between"
            >

              {/* Quote block */}
              <div className="relative">
                <Quote
                  size={40}
                  className="absolute -top-2 -left-2 text-[#FF6347]/10"
                  strokeWidth={1.5}
                />
                <div className="border-l-[3px] border-[#FF6347] pl-6 mt-4">
                  <p className="text-[#111111] text-[16.5px] leading-[1.95] font-normal italic font-serif">
                    "{Correspondent.message}"
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-100" />

              {/* Signature area */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#FF6347]/10 flex items-center justify-center text-lg">
                    ✍️
                  </div>
                  <div>
                    <p className="text-[#011E3A] font-bold text-[17px] leading-tight">
                      {Correspondent.name}
                    </p>
                    <p className="text-[#FF6347] text-[11px] font-semibold tracking-widest uppercase mt-0.5">
                      {Correspondent.title}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['Academic Excellence', 'Innovation', 'Holistic Growth'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-black-50 border border-black-200 rounded-full text-[11px] font-semibold text-slate-500 tracking-wide uppercase hover:border-[#FF6347]/30 hover:text-[#FF6347] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-7 h-0.5 w-16 bg-gradient-to-r from-[#FF6347] to-[#ee530b] rounded-full" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}