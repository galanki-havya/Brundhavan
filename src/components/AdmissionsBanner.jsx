import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

export default function AdmissionsBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-[#4E2F1B] via-[#5C3A21] to-[#4E2F1B] text-white shadow-md overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[var(--top-banner)] flex items-center justify-between gap-6">

        {/* LEFT: Ticker (NOW FULL LEFT) */}
        <div className="flex items-center gap-4 flex-1 overflow-hidden">

          <div className="whitespace-nowrap animate-marquee text-[11px] sm:text-xs md:text-sm tracking-wide font-medium text-white/90">
            <span className="text-white font-semibold">🎓 Admissions Open 2026–27</span>
            <span className="mx-3 text-white/40">•</span>
            State Board School in Palamaner
            <span className="mx-3 text-white/40">•</span>
            Smart Classrooms • Labs • Sports Facilities
            <span className="mx-3 text-white/40">•</span>
            Transport Available
            <span className="mx-3 text-white/40">•</span>
            Limited Seats — Apply Early
          </div>

        </div>

        {/* RIGHT: Contact + CTA */}
        <div className="flex items-center gap-5 shrink-0">

          {/* Contact */}
          <div className="hidden md:flex items-center gap-3 text-[11px] sm:text-xs text-white/80">
            <a href="tel:+919121914631" className="flex items-center gap-1 hover:text-white transition">
              <Phone className="w-3 h-3" />
              +91 91219 14631
            </a>

            <span className="text-white/30">|</span>

            <a href="mailto:brindavanschool334@gmai.com" className="flex items-center gap-1 hover:text-white transition">
              <Mail className="w-3 h-3" />
              brindavanschool334@gmai.com
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to="/admissions"
            className="bg-[#C89B3C] hover:bg-[#b3872f] active:scale-95 text-black text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all shadow-sm whitespace-nowrap"
          >
            Apply Now →
          </Link>

        </div>
      </div>
    </div>
  )
}