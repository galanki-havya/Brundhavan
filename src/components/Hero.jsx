import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: 'translateZ(0)',          
          willChange: 'transform',            
          WebkitBackfaceVisibility: 'hidden',  
          backfaceVisibility: 'hidden',
          imageRendering: 'auto',
          WebkitTransform: 'translate3d(0,0,0)', 
        }}
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 40%), linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%)',
        }}
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
      </div>

    </section>
  )
}