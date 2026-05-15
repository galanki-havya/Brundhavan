export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-[#F8F3ED] via-[#FDFBF8] to-[#F3E7DA] pt-24 pb-12 border-b border-[#E7D3BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#3B2416] mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-gray-600 text-lg max-w-2xl">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  )
}