import { Link } from 'react-router-dom'

export default function PageHero({
  title,
  subtitle,
  variant = 'blue',
  backgroundImage,
  objectPosition = 'object-center',
  imageStyle = {},
  zoomOut = false,
}) {

  return (
    <section
      className="
        relative overflow-hidden
        h-[48vh] md:h-[54vh]
        flex items-center
      "
    >

      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          {zoomOut ? (
            <>
              <img
                src={backgroundImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 opacity-30"
              />

              <img
                src={backgroundImage}
                alt={title}
                className={`absolute inset-0 w-full h-full object-contain ${objectPosition}`}
                style={imageStyle}
              />
            </>
          ) : (
            <img
              src={backgroundImage}
              alt={title}
              className={`w-full h-full object-cover ${objectPosition}`}
              style={imageStyle}
            />
          )}
        </div>
      )}

      {/* Soft Gradient for readability */}
      <div
        className="
          absolute inset-0 z-[1]
          bg-gradient-to-r
          from-black/45
          via-black/15
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                bg-[#ec733a]/90
                text-white
                text-xs
                uppercase
                tracking-[0.28em]
                font-semibold
                mb-6
                shadow-xl
              "
            >
              Brindavan School
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold
                leading-[1.05]
                text-white
                drop-shadow-[0_6px_25px_rgba(0,0,0,0.7)]
              "
            >
              {title}
            </h1>

            {/* Orange Accent Line */}
            <div className="mt-5 h-[4px] w-28 rounded-full bg-[#ec733a]" />

            {/* Subtitle */}
            {subtitle && (
              <p
                className="
                  mt-6
                  text-lg md:text-xl
                  leading-relaxed
                  max-w-2xl
                  font-medium
                  text-gray-100
                  drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                "
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link
              to="/admission-form"
              className="
                group inline-flex items-center gap-3
                px-8 py-4
                rounded-full
                font-semibold
                tracking-wide
                bg-[#ec733a]
                text-white
                transition-all duration-300
                shadow-2xl
                hover:scale-105
                hover:bg-[#d9652d]
              "
            >
              Apply Now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}