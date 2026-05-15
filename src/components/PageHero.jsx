import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-[#3B2416] via-[#5C3A21] to-[#2A1A12] pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[#EAD7C5] text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <Link
          to="/admission-form"
          className="inline-flex items-center justify-center gap-2 
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white hover:text-[#3B2416]
          text-white px-6 py-3 rounded-full font-semibold
          transition-all duration-300 shadow-lg"
        >
          Apply Now →
        </Link>

      </div>
    </section>
  )
}