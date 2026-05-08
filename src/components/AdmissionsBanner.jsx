import { Link } from 'react-router-dom'

export default function AdmissionsBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-[#5C3A21] via-[#6B4427] to-[#5C3A21] text-white shadow-md h-[40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3">

        <p className="text-xs sm:text-sm md:text-base font-medium text-center sm:text-left truncate">
          Admissions Open 2026–27
          <span className="hidden sm:inline"> | State Board School in Palamaneru</span>
        </p>

        <Link
          to="/admissions"
          className="bg-[#C89B3C] hover:bg-[#b3872f] active:scale-95 text-black text-xs sm:text-sm font-semibold px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
        >
          Apply Now →
        </Link>

      </div>
    </div>
  )
}
