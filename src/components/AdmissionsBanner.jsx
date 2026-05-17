import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

export default function AdmissionsBanner() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-[100]
        bg-gradient-to-r
        from-primary-800
        via-primary-700
        to-primary-900
        text-white
        shadow-[0_4px_20px_rgba(13,35,72,0.25)]
        overflow-hidden
        border-b border-secondary-400/20
      "
    >
      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary-400 via-yellow-300 to-secondary-400 opacity-90" />

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[var(--top-banner)] flex items-center justify-between gap-6 relative z-10">

        {/* LEFT: Marquee */}
        <div className="flex items-center gap-4 flex-1 overflow-hidden">

          <div className="whitespace-nowrap animate-marquee text-[11px] sm:text-xs md:text-sm tracking-wide font-medium text-primary-100">

            <span className="text-secondary-300 font-semibold">
              🎓 Admissions Open 2026–27
            </span>

            <span className="mx-3 text-white/30">•</span>

            State Board School in Palamaner

            <span className="mx-3 text-white/30">•</span>

            Smart Classrooms • Labs • Sports Facilities

            <span className="mx-3 text-white/30">•</span>

            Transport Available

            <span className="mx-3 text-white/30">•</span>

            Limited Seats — Apply Early
          </div>

        </div>

        {/* RIGHT: Contact + CTA */}
        <div className="flex items-center gap-5 shrink-0">

          {/* Contact */}
          <div className="hidden md:flex items-center gap-3 text-[11px] sm:text-xs text-primary-100/90">

            <a
              href="tel:+919121914631"
              className="flex items-center gap-1 hover:text-secondary-300 transition-colors duration-300"
            >
              <Phone className="w-3 h-3" />
              +91 91219 14631
            </a>

            <span className="text-white/20">|</span>

            <a
              href="mailto:brindavanschool334@gmai.com"
              className="flex items-center gap-1 hover:text-secondary-300 transition-colors duration-300"
            >
              <Mail className="w-3 h-3" />
              brindavanschool334@gmail.com
            </a>

          </div>

          {/* CTA Button */}
          <Link
            to="/admissions"
            className="
              bg-secondary-400
              hover:bg-secondary-300
              active:scale-95
              text-primary-900
              text-xs sm:text-sm
              font-bold
              px-5 py-1.5
              rounded-full
              transition-all duration-300
              shadow-lg
              hover:shadow-secondary-400/30
              whitespace-nowrap
            "
          >
            Apply Now →
          </Link>

        </div>
      </div>
    </div>
  )
}