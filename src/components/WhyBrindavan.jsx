import { motion } from 'framer-motion'

// Update this to your local or absolute logo path
const logo = '/logo.png'

const features = [
  { lines: ['360 Degree', 'Teachers', 'Enrichment', 'Program'], icon: '🛡️', arcColor: '#E91E63', rotation: 0,   isLongSpoke: true,  arcTransform: 'rotate(180)' },    // Top
  { lines: ['Pastoral', 'Care'],                                icon: '🌱', arcColor: '#4CAF50', rotation: 45,  isLongSpoke: false, arcTransform: 'rotate(-45)' },   // Top-Right
  { lines: ['International', 'Standard Sports', 'Infrastructure'], icon: '🌐', arcColor: '#00BCD4', rotation: 90,  isLongSpoke: true,  arcTransform: 'rotate(-90)' },   // Right
  { lines: ['Career', 'Readiness'],                             icon: '🗼', arcColor: '#9C27B0', rotation: 135, isLongSpoke: false, arcTransform: 'rotate(135)' },  // Bottom-Right
  { lines: ['Quest for', 'Excellence'],                         icon: '🏆', arcColor: '#E91E63', rotation: 180, isLongSpoke: true,  arcTransform: 'rotate(0)' },      // Bottom
  { lines: ['Value', 'System'],                                 icon: '🤝', arcColor: '#4CAF50', rotation: 225, isLongSpoke: false, arcTransform: 'rotate(45)' },   // Bottom-Left
  { lines: ['Shaping the', 'Personality'],                      icon: '🎭', arcColor: '#00BCD4', rotation: 270, isLongSpoke: true,  arcTransform: 'rotate(90)' },    // Left
  { lines: ['Benchmarked', 'Curriculum'],                       icon: '📄', arcColor: '#9C27B0', rotation: 315, isLongSpoke: false, arcTransform: 'rotate(-135)' }, // Top-Left
]

const CX = 400
const CY = 400
const NODE_R = 56
const ICON_R = 15
const LOGO_R = 62

const SHORT_ORBIT_R = 145  
const LONG_ORBIT_R = 215

function polar(angleDeg, r, cx = CX, cy = CY) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

export default function WhyBrindavan() {
  return (
    <section
      style={{
        background: '#F9FAFB',
        padding: '40px 16px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .wb { font-family: 'DM Sans', sans-serif; }
        .wb-orbital {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        .wb-orbital svg {
          display: block;
          width: 100%;
          height: auto;
        }
        .wb-grid {
          display: none;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
          width: 100%;
          max-width: 720px;
          margin: 12px auto 0;
        }
        .wb-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid #eaeaea;
          text-align: center;
        }
        .wb-icon-box {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin: 0 auto 12px;
        }
        .wb-card-title {
          font-weight: 700; font-size: 13px;
          color: #111111; line-height: 1.4;
        }
        @media (max-width: 820px) {
          .wb-orbital { display: none; }
          .wb-grid { display: grid; }
        }
      `}</style>

      <div className="wb" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        
        {/* ── HEADER CONTENT SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 0 }}
        >
          <span style={{
            display: 'inline-block', color: '#e16e3d', fontWeight: 600,
            fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8,
          }}>
            Our Pillars
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700,
            color: '#1a1a2e', marginBottom: 6, lineHeight: 1.2,
          }}>
            Why{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ec733a, #c9612c)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Brindavan School?
            </span>
          </h2>
          <p style={{ color: '#6b5c6e', fontSize: 14, maxWidth: 480, margin: '0 auto 8px', lineHeight: 1.6 }}>
            Everything parents expect from a modern, values-driven school.
          </p>
        </motion.div>

        {/* ── DIAGRAM ORBITAL AREA ── */}
        <div className="wb-orbital">
          {/* Adjusted viewBox to tightly crop out empty padding around the circle coordinates */}
          <svg viewBox="120 120 560 560" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="logoClip">
                <circle cx={CX} cy={CY} r={LOGO_R} />
              </clipPath>
              <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.06" />
              </filter>
            </defs>

            {/* ── CENTRAL CONNECTING LINES ── */}
            {features.map((feat, i) => {
              const currentRadius = feat.isLongSpoke ? LONG_ORBIT_R : SHORT_ORBIT_R
              const pStart = polar(feat.rotation, LOGO_R + 10)
              const pEnd = polar(feat.rotation, currentRadius)
              return (
                <line
                  key={`line-${i}`}
                  x1={pStart.x} y1={pStart.y}
                  x2={pEnd.x} y2={pEnd.y}
                  stroke="#1c244b"
                  strokeWidth="1.5"
                />
              )
            })}

            {/* ── SATELLITE NODES ── */}
            {features.map((feat, i) => {
              const currentRadius = feat.isLongSpoke ? LONG_ORBIT_R : SHORT_ORBIT_R
              const { x: nx, y: ny } = polar(feat.rotation, currentRadius)
              
              const iconPos = polar(feat.rotation, currentRadius + NODE_R) 
              const dotPos = polar(feat.rotation, currentRadius - NODE_R)

              const lineH = 14
              const totalH = (feat.lines.length - 1) * lineH
              const textStartY = ny - totalH / 2

              return (
                <g key={`node-${i}`}>
                  <g transform={`translate(${nx}, ${ny})`}>
                    <circle cx="0" cy="0" r={NODE_R} fill="#ffffff" stroke="#1c244b" strokeWidth="2" filter="url(#shadow)" />
                    <path
                      d={`M ${-NODE_R} 0 A ${NODE_R} ${NODE_R} 0 0 1 ${NODE_R} 0`}
                      stroke={feat.arcColor}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      transform={feat.arcTransform} 
                    />
                  </g>

                  <circle cx={dotPos.x} cy={dotPos.y} r="4.5" fill={feat.arcColor} />

                  {feat.lines.map((line, li) => (
                    <text
                      key={li}
                      x={nx}
                      y={textStartY + li * lineH}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="11.5"
                      fontWeight="700"
                      fontFamily="'DM Sans', sans-serif"
                      fill="#111111"
                    >
                      {line}
                    </text>
                  ))}

                  <circle cx={iconPos.x} cy={iconPos.y} r={ICON_R} fill={feat.arcColor} filter="url(#shadow)" />
                  <text
                    x={iconPos.x}
                    y={iconPos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="13"
                  >
                    {feat.icon}
                  </text>
                </g>
              )
            })}

            {/* ── HUB MATRIX CENTERPIECE ── */}
            <circle cx={CX} cy={CY} r={LOGO_R + 14} fill="none" stroke="#d0d4dc" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx={CX} cy={CY} r={LOGO_R + 6} fill="#ffffff" stroke="#1c244b" strokeWidth="2.5" filter="url(#shadow)" />
            <image
              href={logo}
              x={CX - LOGO_R}
              y={CY - LOGO_R}
              width={LOGO_R * 2}
              height={LOGO_R * 2}
              clipPath="url(#logoClip)"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        </div>

        {/* ── RESPONSIVE MOBILE GRID FALLBACK LAYOUT ── */}
        <div className="wb-grid">
          {features.map((feat, i) => (
            <motion.div 
              key={i} 
              className="wb-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="wb-icon-box" style={{ background: feat.arcColor + '20', color: feat.arcColor }}>
                {feat.icon}
              </div>
              <div className="wb-card-title">
                {feat.lines.join(' ')}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}