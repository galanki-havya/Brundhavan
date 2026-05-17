import { motion } from 'framer-motion'

const subjects = [
  {
    label: 'Language',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Speech bubble left */}
        <rect x="4" y="10" width="30" height="22" rx="5" stroke={c} strokeWidth="2.5" fill="none"/>
        <path d="M8 32 L4 40 L16 34" stroke={c} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        {/* A letter */}
        <text x="11" y="27" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill={a}>A</text>
        {/* Speech bubble right overlapping */}
        <rect x="28" y="18" width="30" height="22" rx="5" stroke={c} strokeWidth="2.5" fill="white"/>
        <path d="M54 40 L58 48 L46 42" stroke={c} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        {/* Chinese character */}
        <text x="33" y="34" fontFamily="serif" fontSize="14" fontWeight="bold" fill={a}>文</text>
      </svg>
    ),
  },
  {
    label: 'Mathematics',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Diamond shape */}
        <path d="M32 4 L60 32 L32 60 L4 32 Z" stroke={c} strokeWidth="2.5" fill="none"/>
        {/* Inner diamond */}
        <path d="M32 16 L48 32 L32 48 L16 32 Z" stroke={c} strokeWidth="2" fill="none" opacity="0.4"/>
        {/* Symbols */}
        <text x="18" y="28" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={a}>×</text>
        <text x="35" y="28" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={a}>÷</text>
        <text x="19" y="44" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill={a}>+</text>
        <text x="35" y="44" fontFamily="Georgia,serif" fontSize="12" fontWeight="bold" fill={a}>−</text>
      </svg>
    ),
  },
  {
    label: 'Science',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Flask body */}
        <path d="M24 8 L24 28 L10 52 Q8 56 12 56 L52 56 Q56 56 54 52 L40 28 L40 8 Z"
          stroke={c} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        {/* Flask neck top */}
        <line x1="20" y1="8" x2="44" y2="8" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Liquid */}
        <path d="M16 46 Q32 38 48 46 L54 56 L10 56 Z" fill={a} opacity="0.25"/>
        {/* Bubbles */}
        <circle cx="26" cy="44" r="3" fill={a} opacity="0.7"/>
        <circle cx="36" cy="40" r="2" fill={a} opacity="0.5"/>
        <circle cx="42" cy="46" r="2.5" fill={a} opacity="0.6"/>
        {/* Circuit dots on side */}
        <circle cx="10" cy="20" r="2" fill={a}/>
        <line x1="10" y1="20" x2="24" y2="26" stroke={a} strokeWidth="1.5" opacity="0.6"/>
        <circle cx="54" cy="20" r="2" fill={a}/>
        <line x1="54" y1="20" x2="40" y2="26" stroke={a} strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    label: 'Technology',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Chip square */}
        <rect x="18" y="18" width="28" height="28" rx="4" stroke={c} strokeWidth="2.5" fill="none"/>
        {/* AI text */}
        <text x="23" y="36" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill={a}>AI</text>
        {/* Pins top */}
        <line x1="24" y1="10" x2="24" y2="18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="10" x2="32" y2="18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="40" y1="10" x2="40" y2="18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        {/* Pins bottom */}
        <line x1="24" y1="46" x2="24" y2="54" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="46" x2="32" y2="54" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="40" y1="46" x2="40" y2="54" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        {/* Pins left */}
        <line x1="10" y1="24" x2="18" y2="24" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="32" x2="18" y2="32" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="40" x2="18" y2="40" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        {/* Pins right */}
        <line x1="46" y1="24" x2="54" y2="24" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="46" y1="32" x2="54" y2="32" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="46" y1="40" x2="54" y2="40" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Humanities',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Globe circle */}
        <circle cx="32" cy="32" r="26" stroke={c} strokeWidth="2.5" fill="none"/>
        {/* Latitude lines */}
        <ellipse cx="32" cy="32" rx="26" ry="10" stroke={c} strokeWidth="1.5" fill="none" opacity="0.4"/>
        {/* Meridian */}
        <line x1="32" y1="6" x2="32" y2="58" stroke={c} strokeWidth="1.5" opacity="0.4"/>
        {/* Three people silhouettes */}
        {/* Left person */}
        <circle cx="20" cy="24" r="5" fill={a}/>
        <path d="M12 42 Q20 34 28 42" stroke={a} strokeWidth="2" fill={a} opacity="0.85"/>
        {/* Middle person (bigger) */}
        <circle cx="32" cy="21" r="6" fill={a}/>
        <path d="M22 42 Q32 32 42 42" stroke={a} strokeWidth="2" fill={a}/>
        {/* Right person */}
        <circle cx="44" cy="24" r="5" fill={a}/>
        <path d="M36 42 Q44 34 52 42" stroke={a} strokeWidth="2" fill={a} opacity="0.85"/>
      </svg>
    ),
  },
  {
    label: 'Performing-Arts',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Happy mask */}
        <path d="M8 16 Q8 40 28 44 Q20 48 14 46" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M8 16 Q18 8 28 16 Q28 40 8 40 Z" stroke={c} strokeWidth="2.5" fill="none"/>
        {/* Happy mouth */}
        <path d="M14 30 Q18 36 24 30" stroke={c} strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Happy eye */}
        <circle cx="14" cy="24" r="2" fill={a}/>
        <circle cx="22" cy="22" r="2" fill={a}/>
        {/* Sad mask */}
        <path d="M36 16 Q46 8 56 16 Q56 40 36 40 Z" stroke={c} strokeWidth="2.5" fill="none"/>
        <path d="M56 16 Q56 40 36 44 Q44 48 50 46" stroke={c} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Sad mouth */}
        <path d="M40 34 Q44 28 50 34" stroke={c} strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Sad eyes */}
        <circle cx="42" cy="24" r="2" fill={a}/>
        <circle cx="50" cy="22" r="2" fill={a}/>
      </svg>
    ),
  },
  {
    label: 'Visual-Arts',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Canvas/board frame */}
        <rect x="6" y="10" width="52" height="40" rx="4" stroke={c} strokeWidth="2.5" fill="none"/>
        {/* Easel legs */}
        <line x1="20" y1="50" x2="14" y2="60" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="44" y1="50" x2="50" y2="60" stroke={c} strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="50" x2="32" y2="60" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        {/* Painting — simple shapes inside */}
        {/* Mountain / triangle */}
        <path d="M14 42 L26 22 L38 42 Z" stroke={a} strokeWidth="1.8" fill={a} fillOpacity="0.15"/>
        {/* Plus signs / brushstrokes */}
        <line x1="42" y1="20" x2="42" y2="28" stroke={a} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="38" y1="24" x2="46" y2="24" stroke={a} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Pencil on side */}
        <rect x="54" y="16" width="5" height="20" rx="2" stroke={c} strokeWidth="1.5" fill="none"/>
        <path d="M54 36 L56.5 42 L59 36 Z" fill={a}/>
      </svg>
    ),
  },
  {
    label: 'Sports',
    color: '#1a237e',
    accent: '#E8630A',
    icon: (c, a) => (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="54">
        {/* Running figure */}
        {/* Head */}
        <circle cx="46" cy="10" r="6" fill={c}/>
        {/* Body */}
        <line x1="42" y1="16" x2="34" y2="30" stroke={c} strokeWidth="3" strokeLinecap="round"/>
        {/* Front arm */}
        <line x1="38" y1="22" x2="26" y2="18" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Back arm */}
        <line x1="36" y1="24" x2="46" y2="28" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Front leg */}
        <line x1="34" y1="30" x2="22" y2="42" stroke={c} strokeWidth="2.8" strokeLinecap="round"/>
        <line x1="22" y1="42" x2="14" y2="38" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Back leg */}
        <line x1="34" y1="30" x2="40" y2="46" stroke={c} strokeWidth="2.8" strokeLinecap="round"/>
        <line x1="40" y1="46" x2="52" y2="44" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Speed lines */}
        <line x1="4" y1="28" x2="18" y2="28" stroke={a} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="8" y1="36" x2="18" y2="36" stroke={a} strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="44" x2="20" y2="44" stroke={a} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function SubjectAreas() {
  return (
    <section style={{
      background: '#fff',
      padding: '64px 16px 72px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .sa-serif { font-family: 'Playfair Display', Georgia, serif; }
        .sa-sans  { font-family: 'DM Sans', sans-serif; }
        .sa-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 28px 16px 20px;
          border-radius: 20px;
          border: 1.5px solid #eef0f8;
          background: #fff;
          cursor: default;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          position: relative;
          overflow: hidden;
        }
        .sa-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f0f2ff 0%, #fff 60%);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 20px;
        }
        .sa-card:hover::before { opacity: 1; }
        .sa-card:hover {
          border-color: #1a237e44;
          box-shadow: 0 12px 36px rgba(26,35,126,0.12);
          transform: translateY(-5px);
        }
        .sa-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 14px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .sa-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 560px) {
          .sa-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
      `}</style>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <p className="sa-sans" style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#E8630A', marginBottom: 8,
        }}>Curriculum</p>
        <h2 className="sa-serif" style={{
          fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700,
          color: '#1a1a2e', lineHeight: 1.2, marginBottom: 10,
        }}>Areas of Learning</h2>
        <p className="sa-sans" style={{
          color: '#64748b', fontSize: 14, maxWidth: 460, margin: '0 auto', lineHeight: 1.7,
        }}>
          A holistic curriculum designed to develop every dimension of a child's potential.
        </p>
      </motion.div>

      {/* Icon Grid */}
      <div className="sa-grid">
        {subjects.map((subject, i) => (
          <motion.div
            key={subject.label}
            className="sa-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <div style={{ position: 'relative', zIndex: 1, marginBottom: 12 }}>
              {subject.icon(subject.color, subject.accent)}
            </div>
            <p className="sa-sans" style={{
              fontSize: 12, fontWeight: 700, color: '#1a237e',
              textAlign: 'center', lineHeight: 1.3,
              position: 'relative', zIndex: 1,
            }}>
              {subject.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
