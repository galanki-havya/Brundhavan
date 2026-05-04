export default function Logo({ scrolled }) {
  return (
    <div className={`h-10 w-10 rounded-lg flex items-center justify-center font-display font-black text-lg transition-all duration-300 ${
      scrolled 
        ? 'bg-primary-600 text-white' 
        : 'bg-white/20 text-white border border-white/30'
    }`}>
      B
    </div>
  )
}
