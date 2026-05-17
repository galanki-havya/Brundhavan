import { motion } from 'framer-motion'

// ─── LOGO CONFIGURATION ──────────────────────────────────────────────────────
const logo = '/logo.png' 

// ─── FEATURES DATA ────────────────────────────────────────────────────────────
const features = [
  { lines: ['Academic', 'Excellence'],            icon: '🎓', arcColor: '#E63946' },
  { lines: ['Pastoral', 'Care'],                    icon: '💛', arcColor: '#22C55E' },
  { lines: ['International', 'Standard Sports'],    icon: '⚽', arcColor: '#0EA5E9' },
  { lines: ['Career', 'Readiness'],                 icon: '🚀', arcColor: '#8B5CF6' },
  { lines: ['Quest for', 'Excellence'],             icon: '🏆', arcColor: '#E63946' },
  { lines: ['Value', 'System'],                     icon: '🌱', arcColor: '#22C55E' },
  { lines: ['Benchmarked', 'Curriculum'],           icon: '📚', arcColor: '#8B5CF6' },
  { lines: ['Shaping the', 'Personality'],          icon: '🌟', arcColor: '#0EA5E9' },
]

// ─── SVG CONSTANTS ──────────────────────────────────────────────────────────
const CX      = 360   
const CY      = 350   
const ORBIT_R = 220   
const NODE_R  = 58    
const ICON_R  = 14    
const LOGO_R  = 76    

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function polar(angleDeg, r, cx = CX, cy = CY) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = polar(startDeg, r, cx, cy)
  const e = polar(endDeg,   r, cx, cy)
  const large = endDeg - startDeg > 180 ? 1 : 0
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`
}

export default function WhyBrindavan() {
  const angleStep = 360 / features.length

  return (
    // ADJUSTED: padding-bottom reduced to 20px
    <section style={{ background: '#f7f7f7', padding: '60px 16px 20px', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700;800&display=swap');
        .wb { font-family:'Inter',sans-serif; }
        .wb-orbital { display:flex; justify-content:center; overflow:hidden; }
        .wb-orbital svg { display:block; max-width:100%; height:auto; }
        .wb-grid { display:none; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:12px; max-width:720px; margin:0 auto; }
        .wb-card { background:#fff; border-radius:16px; padding:18px; box-shadow:0 2px 12px rgba(0,0,0,.07); border:1px solid #eee; transition:box-shadow .25s,transform .25s; }
        .wb-card:hover { box-shadow:0 8px 24px rgba(0,0,0,.13); transform:translateY(-3px); }
        .wb-icon-box { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:8px; }
        .wb-card-title { font-weight:700;font-size:13px;color:#1a1a2e;line-height:1.4; }
        @media(max-width:820px){ .wb-orbital{display:none;} .wb-grid{display:grid;} }
      `}</style>

      <div className="wb">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 8 }} 
        >
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#1a1a2e',
            marginBottom: 8,
            lineHeight: 1.2,
          }}>
            Why <span style={{ color: '#E6963A' }}>Brindavan School?</span>
          </h2>
          <p style={{ color: '#605d5d', fontSize: 14, maxWidth: 480, margin: '0 auto' }}>
            Everything parents expect from a modern international school.
          </p>
        </motion.div>

        <div className="wb-orbital">
          <motion.svg
            // ADJUSTED: Height and ViewBox Y-range reduced to 580
            viewBox="0 70 720 580" 
            width="720"
            height="580"
            xmlns="http://www.w3.org/2000/svg"
            style={{ maxWidth: '100%', height: 'auto' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <defs>
              <clipPath id="logoClip">
                <circle cx={CX} cy={CY} r={LOGO_R} />
              </clipPath>
            </defs>

            <circle cx={CX} cy={CY} r={ORBIT_R}
              stroke="#475569" strokeWidth="1.2" strokeDasharray="4 7" fill="none" opacity="0.4" />

            {features.map((_, i) => {
              const angle = i * angleStep
              const tip   = polar(angle, ORBIT_R - NODE_R - 3)
              return (
                <line key={i}
                  x1={CX} y1={CY} x2={tip.x} y2={tip.y}
                  stroke="#191b1d" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
              )
            })}

            <circle cx={CX} cy={CY} r={LOGO_R + 3} fill="white" />
            <image
              href={logo}
              x={CX - LOGO_R}
              y={CY - LOGO_R}
              width={LOGO_R * 2}
              height={LOGO_R * 2}
              clipPath="url(#logoClip)"
              preserveAspectRatio="xMidYMid meet"
            />

            {features.map((feat, i) => {
              const angle            = i * angleStep
              const { x: nx, y: ny } = polar(angle, ORBIT_R)
              const arcStart         = angle - 60
              const arcEnd           = angle + 60
              const iconPos          = polar(angle, ORBIT_R + NODE_R - 3)
              const dotPos           = polar(angle, ORBIT_R - NODE_R)

              const { lines } = feat
              const lineH      = 12
              const totalH     = (lines.length - 1) * lineH
              const textStartY = ny - totalH / 2

              return (
                <g key={i}>
                  <circle cx={dotPos.x} cy={dotPos.y} r="4" fill={feat.arcColor} />
                  <circle cx={nx} cy={ny} r={NODE_R} fill="white" stroke="#1a1a2e" strokeWidth="2" />
                  
                  <path d={arcPath(nx, ny, NODE_R, arcStart, arcEnd)}
                    stroke={feat.arcColor} strokeWidth="6" fill="none" strokeLinecap="round" />
                  <path d={arcPath(nx, ny, NODE_R, arcEnd + 18, arcEnd + 52)}
                    stroke={feat.arcColor} strokeWidth="4" opacity="0.28" fill="none" strokeLinecap="round" />
                  <path d={arcPath(nx, ny, NODE_R, arcStart - 52, arcStart - 18)}
                    stroke={feat.arcColor} strokeWidth="4" opacity="0.28" fill="none" strokeLinecap="round" />

                  {lines.map((line, li) => (
                    <text key={li}
                      x={nx}
                      y={textStartY + li * lineH}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="9.5"
                      fontWeight="600"
                      fontFamily="'Inter', sans-serif"
                      fill="#1a1a2e"
                    >{line}</text>
                  ))}

                  <circle cx={iconPos.x} cy={iconPos.y} r={ICON_R} fill={feat.arcColor} />
                  <text
                    x={iconPos.x} y={iconPos.y}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize="12"
                  >{feat.icon}</text>
                </g>
              )
            })}
          </motion.svg>
        </div>

        <div className="wb-grid">
          {features.map((feat, i) => (
            <motion.div key={i} className="wb-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="wb-icon-box" style={{ background: feat.arcColor + '22' }}>
                {feat.icon}
              </div>
              <div className="wb-card-title">{feat.lines.join(' ')}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}