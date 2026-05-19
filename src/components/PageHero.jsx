import { Link } from 'react-router-dom'

export default function PageHero({
  title,
  subtitle,
  variant = 'blue',
  backgroundImage,
  fullOpacity = false,
  objectPosition = 'object-center',
  showOverlay = true,
  imageStyle = {},
  zoomOut = false,
}) {
  const isPink = variant === 'pink'
  const isGold = variant === 'gold'
  const overlayOpacity = fullOpacity ? 'bg-black/1' : 'bg-black/2'

  let bgColor = 'bg-primary-900'
  if (isPink) bgColor = 'bg-[#7A284B]'
  if (isGold) bgColor = 'bg-[#7C6218]' // Rich Deep Gold

  return (
    <section
      className={`
        relative overflow-hidden
        min-h-[38vh]
        flex items-center
        pt-36 md:pt-44
        pb-20
        ${bgColor}
      `}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          {zoomOut ? (
            <>
              {/* Blurred background backdrop */}
              <img
                src={backgroundImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-40"
              />
              {/* Fully zoomed-out uncropped main image */}
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

          {/* Dark Overlay */}
          {showOverlay && (
            <div className={`absolute inset-0 ${overlayOpacity}`} />
          )}
        </div>
      )}

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
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="
                  mt-6
                  text-lg md:text-xl
                  text-white
                  leading-relaxed
                  max-w-2xl
                "
                style={{ opacity: 0.8 }}
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
                ${isPink
                  ? 'bg-white text-[#C2417A] hover:bg-pink-50'
                  : isGold
                  ? 'bg-white text-[#7C6218] hover:bg-amber-50'
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

    </section>
  )
}