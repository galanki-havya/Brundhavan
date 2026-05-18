import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

export default function AdmissionsBanner() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-[100]
        bg-white/95
        backdrop-blur-xl
        border-b border-pink-100
        shadow-[0_4px_25px_rgba(236,72,153,0.08)]
        overflow-hidden
      "
    >
      {/* Premium Pink Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185]" />

      {/* Soft Pink Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/70 via-white to-rose-50/60 pointer-events-none" />

      {/* Decorative Blur Orbs */}
      <div className="absolute -top-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 top-0 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[var(--top-banner)] flex items-center justify-between gap-6 relative z-10">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 flex-1 overflow-hidden">

          <div className="whitespace-nowrap animate-marquee text-[11px] sm:text-xs md:text-sm tracking-wide font-semibold text-slate-700">

            <span className="text-[#EC4899] font-bold">
              🎓 Admissions Open 2026–27
            </span>

            <span className="mx-3 text-pink-200">•</span>

            <span className="text-slate-600">
              Best State Board School in Palamaner
            </span>

            <span className="mx-3 text-pink-200">•</span>

            <span className="text-slate-600">
              Smart Classrooms • Labs • Sports Facilities
            </span>

            <span className="mx-3 text-pink-200">•</span>

            <span className="text-slate-600">
              Transport Available
            </span>

            <span className="mx-3 text-pink-200">•</span>

            <span className="text-[#F43F5E] font-bold">
              Limited Seats — Apply Early
            </span>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5 shrink-0">

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4 text-[11px] sm:text-xs">

            <a
              href="tel:+919121914631"
              className="
                flex items-center gap-1.5
                text-slate-600
                hover:text-pink-500
                transition-colors duration-300
              "
            >
              <Phone className="w-3.5 h-3.5" />
              +91 91219 14631
            </a>

            <span className="text-pink-200">|</span>

            <a
              href="mailto:brindavanschool334@gmail.com"
              className="
                flex items-center gap-1.5
                text-slate-600
                hover:text-pink-500
                transition-colors duration-300
              "
            >
              <Mail className="w-3.5 h-3.5" />
              brindavanschool334@gmail.com
            </a>

          </div>

          {/* CTA Button */}
          <Link
            to="/admissions"
            className="
              group
              relative
              overflow-hidden
              bg-gradient-to-r
              from-[#EC4899]
              via-[#F472B6]
              to-[#FB7185]
              hover:scale-105
              active:scale-95
              text-white
              text-xs sm:text-sm
              font-bold
              px-5 py-2
              rounded-full
              transition-all duration-300
              shadow-[0_10px_30px_rgba(236,72,153,0.35)]
              whitespace-nowrap
            "
          >
            <span className="relative z-10 flex items-center gap-1">
              Apply Now →
            </span>

            {/* Shine Animation */}
            <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </Link>

        </div>
      </div>
    </div>
  )
}