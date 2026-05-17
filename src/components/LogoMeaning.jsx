import { motion } from 'framer-motion'

const logo = '/logo.png'

const intelligences = [
  { label: 'Linguistic',             icon: '📖' },
  { label: 'Logical-Mathematical',   icon: '🔢' },
  { label: 'Spatial',                icon: '🧭' },
  { label: 'Bodily-Kinesthetic',     icon: '🤸' },
  { label: 'Musical',                icon: '🎵' },
  { label: 'Interpersonal',          icon: '🤝' },
  { label: 'Intrapersonal',          icon: '🪞' },
  { label: 'Naturalistic',           icon: '🌿' },
  { label: 'Emotional Intelligence', icon: '💛' },
]

// Fix 4: Petal-spectrum pastels — maps to your logo flower colors
const intelligencePastels = [
  'rgba(239,68,68,0.08)',    // red
  'rgba(30,64,175,0.08)',    // royal blue
  'rgba(16,185,129,0.08)',   // green
  'rgba(236,72,153,0.08)',   // pink
  'rgba(234,179,8,0.08)',    // yellow
  'rgba(14,165,233,0.08)',   // sky
  'rgba(139,92,246,0.08)',   // purple
  'rgba(34,197,94,0.08)',    // lime
  'rgba(245,158,11,0.08)',   // amber
]

const logoElements = [
  {
    color: '#E63946',
    label: 'The Flame',
    desc: 'Symbolises the eternal pursuit of knowledge and the burning spirit of inquiry in every child.',
  },
  {
    color: '#C89B3C',
    label: 'The Open Book',
    desc: 'Represents academic excellence, curiosity, and a lifelong love of learning.',
  },
  {
    color: '#22C55E',
    label: 'The Banyan Tree',
    desc: 'Rooted in Indian heritage, it stands for strength, shelter, and a nurturing community.',
  },
  {
    color: '#0EA5E9',
    label: 'The Nine Petals',
    desc: "Nine petals mirror Howard Gardner's nine intelligences — every child's unique genius celebrated.",
  },
  {
    color: '#8B5CF6',
    label: 'The Gold Ring',
    desc: 'A circle of unity, wholeness, and the unbreakable bond between school, student, and family.',
  },
]

export default function LogoMeaning() {
  return (
    <section
      style={{
        // Fix 1: Remove old beige gradient → clean white + subtle royal blue radial glow
        background: `
          radial-gradient(circle at top, rgba(30,64,175,0.06) 0%, transparent 45%),
          linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
        `,
        padding: '36px 18px 42px',
        fontFamily: "'Lora', Georgia, serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');

        .lm-sans  { font-family: 'DM Sans', sans-serif; }
        .lm-serif { font-family: 'Lora', Georgia, serif; }

        .single-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 24px;
          align-items: start;
          max-width: 1120px;
          margin: 0 auto;
        }

        /* Fix 2: Remove old-paper feel → modern glass-light card */
        .premium-card {
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(226,232,240,0.8);
          box-shadow:
            0 10px 30px rgba(2,6,23,0.06),
            0 2px 10px rgba(2,6,23,0.04);
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .premium-hover:hover {
          transform: translateY(-3px);
          box-shadow:
            0 14px 28px rgba(30,64,175,0.10),
            0 6px 14px rgba(0,0,0,0.04);
          border-color: rgba(30,64,175,0.18);
        }

        @media (max-width: 900px) {
          .single-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HEADING ── */}
      <motion.div
        className="lm-sans"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 28, position: 'relative', zIndex: 1 }}
      >
        {/* Glow halo — now royal blue instead of gold */}
        <div style={{
          position: 'absolute', width: 160, height: 160,
          background: 'rgba(30,64,175,0.07)', filter: 'blur(60px)', borderRadius: '50%',
          top: -30, left: '50%', transform: 'translateX(-50%)', zIndex: 0,
        }} />
        <p style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase',
          // Eyebrow: royal blue instead of bronze
          color: '#1E3A8A',
          marginBottom: 6,
          position: 'relative', zIndex: 1,
        }}>Our Identity</p>
        <h2 className="lm-serif" style={{
          fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700,
          // Heading: deep navy instead of warm brown
          color: '#0F172A',
          lineHeight: 1.2, margin: '0 auto 8px',
          position: 'relative', zIndex: 1,
          letterSpacing: '-0.03em',
        }}>
          Meaning Behind the Logo
        </h2>
        <p style={{
          // Subtext: neutral slate, not warm beige
          color: '#475569', fontSize: 13, maxWidth: 460,
          margin: '0 auto', lineHeight: 1.6, position: 'relative', zIndex: 1,
        }}>
          Every element in the Brindavan School logo tells a story of values,
          learning, and the future we build for each child.
        </p>
      </motion.div>

      {/* ── SINGLE SCREEN LAYOUT ── */}
      <div className="single-layout" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── LEFT: Logo + Nine Intelligences ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="premium-card"
          style={{
            borderRadius: 32,
            // Fix 3: Left card top border → royal blue (was gold)
            borderTop: '4px solid #1E3A8A',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Logo circle with float animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', display: 'inline-flex', marginBottom: 14 }}
          >
            {/* Dashed ring stays gold — correct brand accent */}
            <div style={{
              position: 'absolute', inset: -10, borderRadius: '50%',
              border: '2px dashed #C89B3C', opacity: 0.45,
            }} />
            <div style={{
              width: 175,
              height: 175,
              borderRadius: '50%',
              // Inner circle: clean white, remove warm cream gradient
              background: 'linear-gradient(145deg, #ffffff 0%, #EEF4FF 100%)',
              border: '4px solid rgba(255,255,255,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              // Shadow: blue tint instead of gold
              boxShadow: '0 14px 40px rgba(30,64,175,0.14)',
              position: 'relative',
            }}>
              <img
                src={logo}
                alt="Brindavan School Logo"
                style={{
                  width: 148, height: 148, objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.10))',
                }}
              />
            </div>
          </motion.div>

          {/* School name */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <p className="lm-serif" style={{
              fontSize: 22, fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.02em', marginBottom: 4,
            }}>Brindavan School</p>
            <p className="lm-sans" style={{
              fontSize: 10,
              // Gold accent — kept for "excellence" label
              color: '#C89B3C',
              letterSpacing: '0.22em',
              textTransform: 'uppercase', fontWeight: 700,
            }}>Est. in Excellence</p>
          </div>

          {/* Nine Intelligences */}
          <div style={{ width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <p className="lm-sans" style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase',
                // Royal blue label instead of gold
                color: '#1E3A8A',
                marginBottom: 3,
              }}>Howard Gardner's Framework</p>
              <h3 className="lm-serif" style={{
                fontSize: 16, fontWeight: 700,
                color: '#0F172A',
                margin: 0,
              }}>Nine Intelligences We Nurture</h3>
            </div>

            {/* Fix 4: Each intelligence card gets its own petal pastel background */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {intelligences.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="premium-hover"
                  style={{
                    // Petal-spectrum pastel bg per card
                    background: intelligencePastels[index],
                    borderRadius: 16,
                    border: '1px solid rgba(148,163,184,0.25)',
                    padding: '11px 8px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 82,
                    cursor: 'default',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ fontSize: 16, marginBottom: 3 }}>{item.icon}</div>
                  <p className="lm-sans" style={{
                    fontSize: 9, fontWeight: 700,
                    // Number badge: royal blue instead of gold
                    color: '#1E3A8A',
                    marginBottom: 2,
                  }}>#{index + 1}</p>
                  <p className="lm-sans" style={{
                    fontSize: 10, fontWeight: 600,
                    color: '#0F172A',
                    lineHeight: 1.2,
                  }}>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Logo Element Meanings ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        >
          <h3 className="lm-serif" style={{
            fontSize: 24, letterSpacing: '-0.02em',
            fontWeight: 700,
            color: '#0F172A',
            marginBottom: 2,
          }}>What Every Element Means</h3>

          {/* Fix 5: Right-side cards — royal blue left border, color dot only for identity */}
          {logoElements.map((el, i) => (
            <motion.div
              key={el.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="premium-card premium-hover"
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
                borderRadius: 18,
                // Unified royal blue left border — avoids rainbow-card chaos
                borderLeft: '4px solid #1E3A8A',
                padding: '16px 18px',
                cursor: 'default',
              }}
            >
              {/* Color dot retains element-specific color for identity recognition */}
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: el.color, flexShrink: 0,
                marginTop: 5,
                // Softer glow so it reads as an accent, not dominant
                boxShadow: `0 2px 8px ${el.color}33`,
              }} />
              <div>
                <p className="lm-sans" style={{
                  fontSize: 13, fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: 3,
                }}>{el.label}</p>
                <p className="lm-sans" style={{
                  fontSize: 12.5,
                  color: '#475569',
                  lineHeight: 1.6,
                }}>{el.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Core Values card — white + clean border, gold dots kept */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{
              background: 'linear-gradient(135deg, rgba(238,244,255,0.95) 0%, rgba(255,248,230,0.92) 100%)',
              borderRadius: 22,
              // Royal blue + gold gradient border via box-shadow trick
              border: '1px solid rgba(30,64,175,0.15)',
              borderTop: '3px solid #C89B3C',
              padding: '18px 18px',
              boxShadow: '0 10px 30px rgba(30,64,175,0.07)',
            }}
          >
            <p className="lm-serif" style={{
              fontSize: 14, fontWeight: 700,
              color: '#0F172A',
              marginBottom: 8,
            }}>Core Values</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[
                { dot: '#E63946', text: 'Discipline with compassion' },
                { dot: '#C89B3C', text: 'Academic rigour with creativity' },
                { dot: '#22C55E', text: 'Community, character, and confidence' },
              ].map(v => (
                <div key={v.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: v.dot, flexShrink: 0,
                  }} />
                  <p className="lm-sans" style={{
                    fontSize: 12,
                    color: '#334155',
                    lineHeight: 1.4,
                  }}>{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}