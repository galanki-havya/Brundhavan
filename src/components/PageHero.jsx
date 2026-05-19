import { Link } from 'react-router-dom'

export default function PageHero({
  title,
  subtitle,
  variant = 'blue',
  backgroundImage,
}) {
  const isPink = variant === 'pink'

  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20
      ${isPink ? 'bg-[#7A284B]' : 'bg-primary-900'}`}
    >
      {/* ── IMAGE BACKGROUND LAYER ── */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      )}

      {/* Decorative Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-1">
        <div
          className={`absolute top-[-80px] left-[10%] w-[26rem] h-[26rem] blur-3xl rounded-full
          ${isPink ? 'bg-[#F8B8D0]' : 'bg-secondary-500'}`}
        />
        <div
          className={`absolute bottom-[-120px] right-[5%] w-[30rem] h-[30rem] blur-3xl rounded-full
          ${isPink ? 'bg-[#F4A7BB]' : 'bg-primary-400'}`}
        />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px] z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          {/* Left Content */}
          <div className="max-w-3xl">
            <div
              className={`
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                text-xs uppercase tracking-[0.25em]
                font-semibold mb-5
                backdrop-blur-md border
                ${isPink
                  ? 'bg-black/40 border-white/20 text-white'
                  : 'bg-black/40 border-white/20 text-white'
                }
              `}
            >
              Brindavan School
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
              style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.95), 0px 0px 30px rgba(0,0,0,0.8)' }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-5 text-lg md:text-xl leading-relaxed max-w-2xl font-medium
                ${isPink ? 'text-white' : 'text-white'}`}
                style={{ textShadow: '1px 1px 8px rgba(0,0,0,0.95), 0px 0px 20px rgba(0,0,0,0.8)' }}
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
                inline-flex items-center gap-3
                px-7 py-4 rounded-full
                font-semibold tracking-wide
                transition-all duration-300
                shadow-2xl hover:scale-105
                backdrop-blur-xl border
                ${isPink
                  ? 'bg-white/15 border-white/20 text-white hover:bg-white hover:text-[#C2417A]'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary-800'
                }
              `}
            >
              Apply Now
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}