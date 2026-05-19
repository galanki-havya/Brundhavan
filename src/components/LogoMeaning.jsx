import { motion } from 'framer-motion'

const logo = '/logo.png'

// ── DATA ─────────────────────────────────────────────────────────────────────

const intelligences = [
  { short: 'Words & Language',   icon: '📚', color: '#C9A84C' },
  { short: 'Numbers & Logic',    icon: '🔢', color: '#3B82F6' },
  { short: 'Space & Sight',      icon: '🧭', color: '#22C55E' },
  { short: 'Body & Movement',    icon: '🤸', color: '#FF6347' },
  { short: 'Sound & Rhythm',     icon: '🎵', color: '#F59E0B' },
  { short: 'People & Empathy',   icon: '🤝', color: '#0EA5E9' },
  { short: 'Self & Reflection',  icon: '🪞', color: '#8B5CF6' },
  { short: 'Nature & Patterns',  icon: '🌿', color: '#10B981' },
  { short: 'Meaning & Purpose',  icon: '✨', color: '#FF6347' },
]

const logoElements = [
  { color: '#E63946', icon: '🔥', label: 'The Flame',
    desc: 'Symbolises the eternal pursuit of knowledge and the burning spirit of inquiry — igniting curiosity in every child.' },
  { color: '#C9A84C', icon: '📖', label: 'The Open Book',
    desc: 'Represents academic excellence, intellectual curiosity, and a lifelong love of learning that extends beyond the classroom.' },
  { color: '#22C55E', icon: '🌳', label: 'The Banyan Tree',
    desc: 'Rooted in rich Indian heritage, it stands for enduring strength, shelter, and a deeply nurturing school community.' },
  { color: '#FF6347', icon: '🌸', label: 'The Nine Petals',
    desc: "Nine petals mirror Howard Gardner's nine intelligences — every child's unique genius recognised and celebrated." },
  { color: '#C9A84C', icon: '⭕', label: 'The Gold Ring',
    desc: 'A circle of unity, wholeness, and the unbreakable bond between school, student, family, and community.' },
]

const coreValues = [
  { color: '#E63946', text: 'Discipline with compassion' },
  { color: '#C9A84C', text: 'Academic rigour with creativity' },
  { color: '#FF6347', text: 'Community, character, and confidence' },
]

const fadeUp    = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
const fadeLeft  = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }
const fadeRight = { hidden: { opacity: 0, x:  20 }, visible: { opacity: 1, x: 0 } }

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function LogoMeaning() {
  return (
    <section style={{
      background: '#fff',
      padding: '80px 24px 100px',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        .lm-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }

        .lm-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 28px;
          align-items: start;
          max-width: 1060px;
          margin: 0 auto;
        }
        @media (max-width: 920px) {
          .lm-grid { grid-template-columns: 1fr; }
        }

        .lm-left-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 24px;
          padding: 32px 24px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }

        .intel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 100%;
        }

        .intel-pill {
          border-radius: 14px;
          padding: 12px 8px;
          border: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 84px;
          text-align: center;
          transition: transform .25s ease, box-shadow .25s ease;
          cursor: default;
        }
        .intel-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .el-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 16px 18px;
          transition: transform .25s ease, box-shadow .25s ease;
          cursor: default;
        }
        .el-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.07);
        }

        .lm-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
          margin: 18px 0;
        }

        @keyframes spinCW  { to { transform: rotate( 360deg); } }
        @keyframes spinCCW { to { transform: rotate(-360deg); } }

        .cv-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 10px;
          background: #fff
          border: 1px solid rgba(0,0,0,0.06);
        }
      `}</style>

      {/* subtle ambient orbs */}
      <div className="lm-orb" style={{ width:340, height:340, top:-80,  left:-60,  background:'rgba(201,168,76,0.06)' }} />
      <div className="lm-orb" style={{ width:280, height:280, bottom:-60, right:-40, background:'rgba(255,99,71,0.05)' }} />

      {/* ══ HEADING ══ */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.55 }}
        style={{ textAlign:'center', marginBottom:52, position:'relative', zIndex:1 }}
      >
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:12 }}>
          <div style={{ width:24, height:1, background:'#FF6347', opacity:.5 }} />
          <span style={{
            fontSize:10, fontWeight:600, letterSpacing:'3px',
            textTransform:'uppercase', color:'#FF6347',
          }}>Our Identity</span>
          <div style={{ width:24, height:1, background:'#FF6347', opacity:.5 }} />
        </div>

        <h2 style={{
          fontFamily:"'Cormorant Garamond', serif",
          fontSize:'clamp(1.9rem,3.5vw,2.8rem)',
          fontWeight:700, color:'#1A1612',
          lineHeight:1.12, letterSpacing:'-0.02em',
          margin:'0 0 12px',
        }}>
          Meaning Behind the{' '}
          <em style={{ fontStyle:'italic', color:'#C9A84C' }}>Logo</em>
        </h2>

        <p style={{
          fontSize:14, fontWeight:300, color:'#7A6A5A',
          maxWidth:480, margin:'0 auto', lineHeight:1.8,
        }}>
          Every element in the Brindavan School logo tells a story — of values, vision,
          and the future we shape for each extraordinary child.
        </p>
      </motion.div>

      {/* ══ MAIN GRID ══ */}
      <div className="lm-grid" style={{ position:'relative', zIndex:1 }}>

        {/* ── LEFT: Logo + Intelligences ── */}
        <motion.div
          variants={fadeLeft} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="lm-left-card"
        >
          {/* pink + gold top stripe */}
          <div style={{
            position:'absolute', top:0, left:0, right:0, height:3,
            background:'linear-gradient(90deg, #FF6347, #C9A84C)',
            borderRadius:'24px 24px 0 0',
          }} />

          {/* Logo orbit */}
          <div style={{ position:'relative', marginBottom:18, marginTop:8 }}>
            <div style={{
              position:'absolute', inset:-16,
              borderRadius:'50%',
              border:'1.5px dashed rgba(201,168,76,0.28)',
              animation:'spinCW 28s linear infinite',
            }} />
            <div style={{
              position:'absolute', inset:-4,
              borderRadius:'50%',
              border:'1px solid rgba(255,99,71,0.15)',
              animation:'spinCCW 20s linear infinite',
            }} />

            <motion.div
              animate={{ y:[0,-6,0] }}
              transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
              style={{
                width:160, height:160,
                borderRadius:'50%',
                background:'#fff',
                border:'2px solid rgba(255,255,255,0.9)',
                display:'flex', alignItems:'center', justifyContent:'center',
                overflow:'hidden',
                boxShadow:'0 10px 36px rgba(0,0,0,0.09), 0 0 0 1px rgba(201,168,76,0.1)',
              }}
            >
              <img
                src={logo} alt="Brindavan School Logo"
                style={{ width:136, height:136, objectFit:'contain',
                  filter:'drop-shadow(0 3px 8px rgba(0,0,0,0.10))' }}
              />
            </motion.div>
          </div>

          {/* Name plate */}
          <div style={{ textAlign:'center', marginBottom:4 }}>
            <p style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontSize:20, fontWeight:700,
              color:'#1A1612', letterSpacing:'-0.01em',
              margin:'0 0 3px',
            }}>Brindavan School</p>
            <p style={{
              fontSize:9, fontWeight:600, color:'#C9A84C',
              letterSpacing:'0.22em', textTransform:'uppercase',
            }}>Est. in Excellence</p>
          </div>

          <div className="lm-rule" />

          {/* Intelligences header */}
          <div style={{ textAlign:'center', marginBottom:14 }}>
            <span style={{
              display:'inline-block',
              background:'rgba(255,99,71,0.07)',
              color:'#FF6347',
              border:'1px solid rgba(255,99,71,0.18)',
              borderRadius:100,
              fontSize:9, fontWeight:600,
              letterSpacing:'2px', textTransform:'uppercase',
              padding:'4px 12px', marginBottom:8,
            }}>Howard Gardner's Framework</span>
            <h3 style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontSize:16, fontWeight:700,
              color:'#1A1612', margin:0,
            }}>Nine Intelligences We Nurture</h3>
          </div>

          {/* 3×3 grid */}
          <div className="intel-grid">
            {intelligences.map((item, i) => (
              <motion.div
                key={i}
                className="intel-pill"
                initial={{ opacity:0, y:8 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.04, duration:0.4 }}
                style={{
                  background: `${item.color}09`,
                  borderColor: `${item.color}20`,
                }}
              >
                <div style={{ fontSize:18, marginBottom:4 }}>{item.icon}</div>
                <p style={{
                  fontSize:9, fontWeight:600, color:item.color,
                  letterSpacing:'0.1em', textTransform:'uppercase',
                  marginBottom:2,
                }}>0{i+1}</p>
                <p style={{
                  fontSize:9.5, fontWeight:600,
                  color:'#1A1612', lineHeight:1.3,
                }}>{item.short}</p>
              </motion.div>
            ))}
          </div>

          <div className="lm-rule" />

          {/* Gardner quote — pink left border */}
          <blockquote style={{
            borderLeft:'2px solid #FF6347',
            paddingLeft:14,
            fontFamily:"'Cormorant Garamond', serif",
            fontStyle:'italic',
            fontSize:'0.97rem', color:'#3D332A',
            lineHeight:1.6, margin:0, width:'100%',
          }}>
            "Intelligence is not a static capacity — it is a rich set of abilities
            to solve problems and create products valued within a culture."
          </blockquote>
        </motion.div>

        {/* ── RIGHT: Logo elements + Values + Promise ── */}
        <motion.div
          variants={fadeRight} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ display:'flex', flexDirection:'column', gap:12 }}
        >
          {/* Right heading */}
          <div style={{ marginBottom:6 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:7, marginBottom:10 }}>
              <div style={{
                width:18, height:18, borderRadius:6,
                background:'rgba(255,99,71,0.09)',
                border:'1px solid rgba(255,99,71,0.22)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'#FF6347' }} />
              </div>
              <span style={{
                fontSize:10, fontWeight:600, letterSpacing:'2.5px',
                textTransform:'uppercase', color:'#FF6347',
              }}>Symbol Decoded</span>
            </div>

            <h3 style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontSize:'clamp(1.4rem,2.2vw,1.9rem)',
              fontWeight:700, color:'#1A1612',
              letterSpacing:'-0.02em', lineHeight:1.15, margin:'0 0 10px',
            }}>
              What Every Element{' '}
              <em style={{ fontStyle:'italic', color:'#C9A84C' }}>Truly Means</em>
            </h3>
            <p style={{
              fontSize:13, fontWeight:300, color:'#7A6A5A',
              lineHeight:1.75, maxWidth:400,
            }}>
              Five deliberate symbols chosen to reflect the school's deepest
              commitments to knowledge, heritage, and individual potential.
            </p>
          </div>

          {/* Logo element cards */}
          {logoElements.map((el, i) => (
            <motion.div
              key={el.label}
              className="el-card"
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.06, duration:0.4 }}
              style={{ borderLeft:`3px solid ${el.color}` }}
            >
              <div style={{
                width:40, height:40, borderRadius:12,
                background:`${el.color}10`,
                border:`1px solid ${el.color}28`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:18, flexShrink:0,
              }}>
                {el.icon}
              </div>

              <div style={{ flex:1 }}>
                <p style={{
                  fontSize:13, fontWeight:600, color:'#1A1612',
                  marginBottom:4, letterSpacing:'-0.01em',
                }}>{el.label}</p>
                <p style={{
                  fontSize:12.5, color:'#7A6A5A', lineHeight:1.65,
                }}>{el.desc}</p>
              </div>

              <div style={{
                width:7, height:7, borderRadius:'50%',
                background:el.color, flexShrink:0,
                marginTop:4, alignSelf:'flex-start', opacity:.65,
              }} />
            </motion.div>
          ))}

          {/* Core values */}
          <motion.div
            initial={{ opacity:0, y:10 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.38, duration:0.45 }}
            style={{
              background:'#fff',
              border:'1px solid rgba(201,168,76,0.18)',
              borderTop:'2px solid #C9A84C',
              borderRadius:18,
              padding:'18px 20px',
              boxShadow:'0 4px 16px rgba(201,168,76,0.06)',
            }}
          >
            <div style={{ display:'flex', alignItems:'center', gap:9, marginBottom:14 }}>
              <div style={{
                width:26, height:26, borderRadius:8,
                background:'rgba(201,168,76,0.1)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:13,
              }}>⭐</div>
              <p style={{
                fontFamily:"'Cormorant Garamond', serif",
                fontSize:16, fontWeight:700,
                color:'#1A1612', margin:0,
              }}>Core Values</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
              {coreValues.map(v => (
                <div key={v.text} className="cv-row">
                  <div style={{
                    width:8, height:8, borderRadius:'50%',
                    background:v.color, flexShrink:0,
                  }} />
                  <p style={{
                    fontSize:12.5, fontWeight:500, color:'#3D332A',
                  }}>{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brindavan Promise — dark card */}
          <motion.div
            initial={{ opacity:0, y:10 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.46, duration:0.45 }}
            style={{
              background:'#1A1612',
              borderRadius:18,
              padding:'22px 22px',
              position:'relative', overflow:'hidden',
            }}
          >
            {/* gold glow */}
            <div style={{
              position:'absolute', top:-30, right:-30,
              width:130, height:130, borderRadius:'50%',
              background:'rgba(201,168,76,0.12)', filter:'blur(36px)',
              pointerEvents:'none',
            }} />
            {/* pink glow */}
            <div style={{
              position:'absolute', bottom:-24, left:-24,
              width:100, height:100, borderRadius:'50%',
              background:'rgba(255,99,71,0.10)', filter:'blur(28px)',
              pointerEvents:'none',
            }} />

            <div style={{
              display:'inline-flex', alignItems:'center', gap:6, marginBottom:10,
              position:'relative', zIndex:1,
            }}>
              <div style={{
                width:20, height:1,
                background:'linear-gradient(90deg,#FF6347,#C9A84C)',
              }} />
              <span style={{
                fontSize:9, fontWeight:600, letterSpacing:'2.5px',
                textTransform:'uppercase', color:'#C9A84C',
              }}>The Brindavan Promise</span>
            </div>

            <p style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontStyle:'italic',
              fontSize:'1.05rem', fontWeight:500,
              color:'rgba(255,255,255,0.88)',
              lineHeight:1.6, margin:0,
              position:'relative', zIndex:1,
            }}>
              "This logo is not just a design — it represents our commitment to shaping
              responsible individuals with strong character and{' '}
              <span style={{ color:'#E8C97A' }}>modern skills</span>."
            </p>

            {/* pink + gold bottom accent */}
            <div style={{
              marginTop:16, height:1,
              background:'linear-gradient(90deg, rgba(255,99,71,0.4), rgba(201,168,76,0.4), transparent)',
              position:'relative', zIndex:1,
            }} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}