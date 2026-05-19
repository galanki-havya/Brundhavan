import { motion } from 'framer-motion'

const ORANGE = '#ec733a'
const NAVY = '#1a237e'

const subjects = [
  { label: 'Language', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect x="4" y="10" width="30" height="22" rx="5" stroke={n} strokeWidth="2.5" fill="none"/><path d="M8 32 L4 40 L16 34" stroke={n} strokeWidth="2.5" fill="none" strokeLinejoin="round"/><text x="11" y="27" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill={o}>A</text><rect x="28" y="18" width="30" height="22" rx="5" stroke={n} strokeWidth="2.5" fill="white"/><path d="M54 40 L58 48 L46 42" stroke={n} strokeWidth="2.5" fill="none" strokeLinejoin="round"/><text x="33" y="34" fontFamily="serif" fontSize="14" fontWeight="bold" fill={o}>文</text></svg>) },
  { label: 'Mathematics', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path d="M32 4 L60 32 L32 60 L4 32 Z" stroke={n} strokeWidth="2.5" fill="none"/><path d="M32 16 L48 32 L32 48 L16 32 Z" stroke={n} strokeWidth="2" fill="none" opacity="0.4"/><text x="18" y="28" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={o}>×</text><text x="35" y="28" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={o}>÷</text><text x="19" y="44" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={o}>+</text><text x="35" y="44" fontFamily="Georgia,serif" fontSize="12" fontWeight="bold" fill={o}>−</text></svg>) },
  { label: 'Science', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path d="M24 8 L24 28 L10 52 Q8 56 12 56 L52 56 Q56 56 54 52 L40 28 L40 8 Z" stroke={n} strokeWidth="2.5" fill="none" strokeLinejoin="round"/><line x1="20" y1="8" x2="44" y2="8" stroke={n} strokeWidth="2.5" strokeLinecap="round"/><path d="M16 46 Q32 38 48 46 L54 56 L10 56 Z" fill={o} opacity="0.15"/><circle cx="26" cy="44" r="3" fill={o} opacity="0.7"/><circle cx="36" cy="40" r="2" fill={o} opacity="0.5"/><circle cx="42" cy="46" r="2.5" fill={o} opacity="0.6"/><circle cx="10" cy="20" r="2" fill={o}/><line x1="10" y1="20" x2="24" y2="26" stroke={o} strokeWidth="1.5" opacity="0.6"/><circle cx="54" cy="20" r="2" fill={o}/><line x1="54" y1="20" x2="40" y2="26" stroke={o} strokeWidth="1.5" opacity="0.6"/></svg>) },
  { label: 'Technology', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect x="18" y="18" width="28" height="28" rx="4" stroke={n} strokeWidth="2.5" fill="none"/><text x="23" y="36" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill={o}>AI</text><line x1="24" y1="10" x2="24" y2="18" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="32" y1="10" x2="32" y2="18" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="40" y1="10" x2="40" y2="18" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="24" y1="46" x2="24" y2="54" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="32" y1="46" x2="32" y2="54" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="40" y1="46" x2="40" y2="54" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="24" x2="18" y2="24" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="32" x2="18" y2="32" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="40" x2="18" y2="40" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="46" y1="24" x2="54" y2="24" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="46" y1="32" x2="54" y2="32" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="46" y1="40" x2="54" y2="40" stroke={n} strokeWidth="2" strokeLinecap="round"/></svg>) },
  { label: 'Humanities', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><circle cx="32" cy="32" r="26" stroke={n} strokeWidth="2.5" fill="none"/><ellipse cx="32" cy="32" rx="26" ry="10" stroke={n} strokeWidth="1.5" fill="none" opacity="0.4"/><line x1="32" y1="6" x2="32" y2="58" stroke={n} strokeWidth="1.5" opacity="0.4"/><circle cx="20" cy="24" r="5" fill={o}/><path d="M12 42 Q20 34 28 42" stroke={o} strokeWidth="2" fill={o} opacity="0.85"/><circle cx="32" cy="21" r="6" fill={o}/><path d="M22 42 Q32 32 42 42" stroke={o} strokeWidth="2" fill={o}/><circle cx="44" cy="24" r="5" fill={o}/><path d="M36 42 Q44 34 52 42" stroke={o} strokeWidth="2" fill={o} opacity="0.85"/></svg>) },
  { label: 'Performing Arts', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path d="M8 16 Q8 40 28 44 Q20 48 14 46" stroke={n} strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M8 16 Q18 8 28 16 Q28 40 8 40 Z" stroke={n} strokeWidth="2.5" fill="none"/><path d="M14 30 Q18 36 24 30" stroke={n} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="14" cy="24" r="2" fill={o}/><circle cx="22" cy="22" r="2" fill={o}/><path d="M36 16 Q46 8 56 16 Q56 40 36 40 Z" stroke={n} strokeWidth="2.5" fill="none"/><path d="M56 16 Q56 40 36 44 Q44 48 50 46" stroke={n} strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M40 34 Q44 28 50 34" stroke={n} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="42" cy="24" r="2" fill={o}/><circle cx="50" cy="22" r="2" fill={o}/></svg>) },
  { label: 'Visual Arts', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect x="6" y="10" width="52" height="40" rx="4" stroke={n} strokeWidth="2.5" fill="none"/><line x1="20" y1="50" x2="14" y2="60" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="44" y1="50" x2="50" y2="60" stroke={n} strokeWidth="2" strokeLinecap="round"/><line x1="32" y1="50" x2="32" y2="60" stroke={n} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><path d="M14 42 L26 22 L38 42 Z" stroke={o} strokeWidth="1.8" fill={o} fillOpacity="0.15"/><line x1="42" y1="20" x2="42" y2="28" stroke={o} strokeWidth="2.5" strokeLinecap="round"/><line x1="38" y1="24" x2="46" y2="24" stroke={o} strokeWidth="2.5" strokeLinecap="round"/><rect x="54" y="16" width="5" height="20" rx="2" stroke={n} strokeWidth="1.5" fill="none"/><path d="M54 36 L56.5 42 L59 36 Z" fill={o}/></svg>) },
  { label: 'Sports', icon: (o, n) => (<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><circle cx="46" cy="10" r="6" fill={n}/><line x1="42" y1="16" x2="34" y2="30" stroke={n} strokeWidth="3" strokeLinecap="round"/><line x1="38" y1="22" x2="26" y2="18" stroke={n} strokeWidth="2.5" strokeLinecap="round"/><line x1="36" y1="24" x2="46" y2="28" stroke={n} strokeWidth="2.5" strokeLinecap="round"/><line x1="34" y1="30" x2="22" y2="42" stroke={n} strokeWidth="2.8" strokeLinecap="round"/><line x1="22" y1="42" x2="14" y2="38" stroke={n} strokeWidth="2.5" strokeLinecap="round"/><line x1="34" y1="30" x2="40" y2="46" stroke={n} strokeWidth="2.8" strokeLinecap="round"/><line x1="40" y1="46" x2="52" y2="44" stroke={n} strokeWidth="2.5" strokeLinecap="round"/><line x1="4" y1="28" x2="18" y2="28" stroke={o} strokeWidth="2.5" strokeLinecap="round"/><line x1="8" y1="36" x2="18" y2="36" stroke={o} strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="44" x2="20" y2="44" stroke={o} strokeWidth="1.5" strokeLinecap="round"/></svg>) },
]

export default function SubjectAreas() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <h2 className="text-center font-bold mb-14" style={{ color: '#ec733a', fontSize: 'clamp(28px, 4vw, 42px)' }}>
        Enroll Now!
      </h2>

      {/* Ticker container */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...subjects, ...subjects].map((subject, i) => (
            <div key={i} className="flex flex-col items-center min-w-[120px]">
              <div className="flex items-center justify-center" style={{ width: 64, height: 64 }}>
                {subject.icon(ORANGE, NAVY)}
              </div>
              <p className="mt-4 font-semibold text-center whitespace-nowrap" style={{ fontSize: '13.5px', color: NAVY }}>
                {subject.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}