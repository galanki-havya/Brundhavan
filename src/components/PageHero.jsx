export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-[#3B2416] via-[#5C3A21] to-[#2A1A12] pt-24 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[#EAD7C5] text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  )
}