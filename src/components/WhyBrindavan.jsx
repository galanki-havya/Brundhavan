import { motion } from 'framer-motion'

const logo = '/logo.png'

const features = [
  { lines: ['Academic', 'Excellence'], icon: '🎓', arcColor: '#47c8ff9e' },
  { lines: ['Pastoral', 'Care'], icon: '💛', arcColor: '#f97316' },
  { lines: ['International', 'Standard Sports'], icon: '⚽', arcColor: '#FF6347' },
  { lines: ['Career', 'Readiness'], icon: '🚀', arcColor: '#f97316' },
  { lines: ['Quest for', 'Excellence'], icon: '🏆', arcColor: '#FF6347' },
  { lines: ['Value', 'System'], icon: '🌱', arcColor: '#f97316' },
  { lines: ['Benchmarked', 'Curriculum'], icon: '📚', arcColor: '#FF6347' },
  { lines: ['Shaping the', 'Personality'], icon: '🌟', arcColor: '#f97316' },
]

const CX = 360
const CY = 350
const ORBIT_R = 220
const NODE_R = 58
const ICON_R = 14
const LOGO_R = 76

function polar(angleDeg, r, cx = CX, cy = CY) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = polar(startDeg, r, cx, cy)
  const e = polar(endDeg, r, cx, cy)
  const large = endDeg - startDeg > 180 ? 1 : 0

  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`
}

export default function WhyBrindavan() {
  const angleStep = 360 / features.length

  return (
    <section
      style={{
        background: '#fff',
        padding: '60px 16px 20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 320,
          height: 320,
          background: 'rgba(255,99,71,0.07)',
          borderRadius: '50%',
          transform: 'translate(100px, -80px)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 260,
          height: 260,
          background: 'rgba(249,115,22,0.05)',
          borderRadius: '50%',
          transform: 'translate(-80px, 80px)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .wb {
          font-family: 'DM Sans', sans-serif;
        }

        .wb-orbital {
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .wb-orbital svg {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .wb-grid {
          display: none;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
          max-width: 720px;
          margin: 0 auto;
        }

        .wb-card {
          background: #fff;
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 2px 12px rgba(255,99,71,0.08);
          border: 1px solid #FFBDAA;
          transition: box-shadow .25s, transform .25s;
        }

        .wb-card:hover {
          box-shadow: 0 8px 24px rgba(255,99,71,0.16);
          transform: translateY(-3px);
        }

        .wb-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 8px;
        }

        .wb-card-title {
          font-weight: 700;
          font-size: 13px;
          color: #1a1a2e;
          line-height: 1.4;
        }

        @media (max-width: 820px) {
          .wb-orbital {
            display: none;
          }

          .wb-grid {
            display: grid;
          }
        }
      `}</style>

      <div className="wb" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              color: '#FF6347',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Our Pillars
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: '#1a1a2e',
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            Why{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #FF6347, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Brindavan School?
            </span>
          </h2>

          <p
            style={{
              color: '#6b5c6e',
              fontSize: 14,
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Everything parents expect from a modern,
            values-driven school.
          </p>
        </motion.div>

        {/* Orbital SVG */}
        <div className="wb-orbital">
          <motion.svg
            viewBox="0 70 720 580"
            width="720"
            height="580"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <defs>
              <clipPath id="logoClip">
                <circle
                  cx={CX}
                  cy={CY}
                  r={LOGO_R}
                />
              </clipPath>

              <radialGradient
                id="centerGlow"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop
                  offset="0%"
                  stopColor="#FF6347"
                  stopOpacity="0.12"
                />

                <stop
                  offset="100%"
                  stopColor="#FF6347"
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>

            {/* Center Glow */}
            <circle
              cx={CX}
              cy={CY}
              r={LOGO_R + 48}
              fill="url(#centerGlow)"
            />

            {/* Orbit Ring */}
            <circle
              cx={CX}
              cy={CY}
              r={ORBIT_R}
              stroke="#C4391E"
              strokeWidth="2"
              strokeDasharray="5 6"
              fill="none"
              opacity="0.65"
            />

            {/* Spoke Lines */}
            {features.map((_, i) => {
              const angle = i * angleStep
              const tip = polar(angle, ORBIT_R - NODE_R - 3)

              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={tip.x}
                  y2={tip.y}
                  stroke="#9C2D15"
                  strokeWidth="1.8"
                  strokeDasharray="4 5"
                  opacity="0.55"
                />
              )
            })}

            {/* Center Logo */}
            <circle
              cx={CX}
              cy={CY}
              r={LOGO_R + 3}
              fill="white"
            />

            <circle
              cx={CX}
              cy={CY}
              r={LOGO_R + 3}
              fill="none"
              stroke="#FF6347"
              strokeWidth="3"
              opacity="0.7"
            />

            <image
              href={logo}
              x={CX - LOGO_R}
              y={CY - LOGO_R}
              width={LOGO_R * 2}
              height={LOGO_R * 2}
              clipPath="url(#logoClip)"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Feature Nodes */}
            {features.map((feat, i) => {
              const angle = i * angleStep

              const { x: nx, y: ny } = polar(
                angle,
                ORBIT_R
              )

              const arcStart = angle - 60
              const arcEnd = angle + 60

              const iconPos = polar(
                angle,
                ORBIT_R + NODE_R - 3
              )

              const dotPos = polar(
                angle,
                ORBIT_R - NODE_R
              )

              const lineH = 12
              const totalH =
                (feat.lines.length - 1) * lineH

              const textStartY =
                ny - totalH / 2

              return (
                <g key={i}>
                  {/* Inner Dot */}
                  <circle
                    cx={dotPos.x}
                    cy={dotPos.y}
                    r="4"
                    fill={feat.arcColor}
                  />

                  {/* Node Circle */}
                  <circle
                    cx={nx}
                    cy={ny}
                    r={NODE_R}
                    fill="white"
                    stroke="#FFBDAA"
                    strokeWidth="2.5"
                  />

                  {/* Main Arc */}
                  <path
                    d={arcPath(
                      nx,
                      ny,
                      NODE_R,
                      arcStart,
                      arcEnd
                    )}
                    stroke={feat.arcColor}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.95"
                  />

                  {/* Fade Arc Right */}
                  <path
                    d={arcPath(
                      nx,
                      ny,
                      NODE_R,
                      arcEnd + 18,
                      arcEnd + 52
                    )}
                    stroke={feat.arcColor}
                    strokeWidth="4"
                    opacity="0.4"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Fade Arc Left */}
                  <path
                    d={arcPath(
                      nx,
                      ny,
                      NODE_R,
                      arcStart - 52,
                      arcStart - 18
                    )}
                    stroke={feat.arcColor}
                    strokeWidth="4"
                    opacity="0.4"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Text */}
                  {feat.lines.map((line, li) => (
                    <text
                      key={li}
                      x={nx}
                      y={textStartY + li * lineH}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="9.5"
                      fontWeight="600"
                      fontFamily="'DM Sans', sans-serif"
                      fill="#1a1a2e"
                    >
                      {line}
                    </text>
                  ))}

                  {/* Icon Circle */}
                  <circle
                    cx={iconPos.x}
                    cy={iconPos.y}
                    r={ICON_R}
                    fill={feat.arcColor}
                  />

                  <text
                    x={iconPos.x}
                    y={iconPos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="12"
                  >
                    {feat.icon}
                  </text>
                </g>
              )
            })}
          </motion.svg>
        </div>

        {/* Mobile Grid */}
        <div className="wb-grid">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="wb-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
              }}
            >
              <div
                className="wb-icon-box"
                style={{
                  background:
                    feat.arcColor + '18',
                }}
              >
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