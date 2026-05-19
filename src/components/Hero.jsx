import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* RAW HD VIDEO ONLY */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* LIGHT BOTTOM VIGNETTE FOR SUTBLE DEPTH */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

    </section>
  )
}