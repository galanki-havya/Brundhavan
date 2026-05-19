import { Link } from 'react-router-dom'

export default function PageHero({
  title,
  subtitle,
  variant = 'blue',
  backgroundImage,
  fullOpacity = false,
  objectPosition = 'object-center',
  showOverlay = true,
}) {
  const isPink = variant === 'pink'
  const overlayOpacity = fullOpacity ? 'bg-black/1' : 'bg-black/2'

  return (
    <section
      className={`
        relative overflow-hidden
        min-h-[38vh]
        flex items-center
        pt-36 md:pt-44
        pb-20
        ${isPink ? 'bg-[#7A284B]' : 'bg-primary-900'}
      `}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className={`w-full h-full object-cover ${objectPosition}`}
          />

          {/* Dark Overlay */}
          {showOverlay && (
            <div className={`absolute inset-0 ${overlayOpacity}`} />
          )}
        </div>
      )}

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <div
          className={`
            absolute top-[-120px] left-[8%]
            w-[28rem] h-[28rem]
            rounded-full blur-3xl opacity-20
            ${isPink ? 'bg-pink-300' : 'bg-secondary-400'}
          `}
        />

        <div
          className={`
            absolute bottom-[-150px] right-[5%]
            w-[30rem] h-[30rem]
            rounded-full blur-3xl opacity-20
            ${isPink ? 'bg-rose-300' : 'bg-primary-400'}
          `}
        />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.05] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left Side */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-[0.3em] font-semibold mb-6 shadow-lg">
              Brindavan School
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-bold
                leading-tight
                text-white
              "
              style={{
                textShadow:
                  '0 4px 20px rgba(0,0,0,0.9)',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="
                  mt-6
                  text-lg md:text-xl
                  text-gray-200
                  leading-relaxed
                  max-w-2xl
                "
                style={{
                  textShadow:
                    '0 2px 12px rgba(0,0,0,0.9)',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link
              to="/admission-form"
              className={`
                group inline-flex items-center gap-3
                px-8 py-4
                rounded-full
                font-semibold tracking-wide
                border border-white/20
                backdrop-blur-xl
                transition-all duration-300
                shadow-2xl
                hover:scale-105
                hover:shadow-white/20
                ${
                  isPink
                    ? 'bg-white text-[#C2417A] hover:bg-pink-50'
                    : 'bg-white text-primary-900 hover:bg-gray-100'
                }
              `}
            >
              Apply Now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent z-[2]" />
    </section>
  )
}