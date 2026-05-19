import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { 
  Trophy, 
  Users, 
  Star, 
  Dumbbell, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Award,
  Zap,
  Target,
  Flame,
  Crown,
  Heart,
  Music,
  Smile
} from 'lucide-react'
import sportsImg from '../../assets/Facilties/4.jpg'
import sportsRightImg from '../../assets/rightimages/4.png'

const getSportsItemIcon = (name) => {
  const n = name.toLowerCase()
  if (n.includes('cricket')) return Award
  if (n.includes('volleyball')) return Target
  if (n.includes('kabaddi')) return Users
  if (n.includes('badminton')) return Trophy
  if (n.includes('running') || n.includes('track')) return Flame
  if (n.includes('calisthenics') || n.includes('fitness') || n.includes('drill')) return Dumbbell

  if (n.includes('table tennis')) return Activity
  if (n.includes('carrom')) return Target
  if (n.includes('chess')) return Crown
  if (n.includes('yoga') || n.includes('meditation')) return Heart
  if (n.includes('gymnastics') || n.includes('stretching')) return Dumbbell
  if (n.includes('acoustic') || n.includes('play room')) return Music

  return Trophy
}

export default function Sports() {
  return (
    <div
      className="min-h-screen"
      style={{ background: '#fff', fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      <Helmet>
        <title>Sports & Physical Education - Brindavan Schools</title>
        <meta name="description" content="Explore physical development, indoor & outdoor sports fields, athletics programs, and trained coaching staff at Brindavan." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <PageHero
        title="Sports"
        subtitle="Spacious playground, indoor & outdoor sports courts, and trained PE coaches supporting physical wellness."
        backgroundImage={sportsImg}
        variant="gold"
        fullOpacity={true}
        objectPosition="object-center"
        showOverlay={false}
      />

      {/* ── Split Section ── */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-x-[60px]">

          {/* Row 1: Badge & Heading */}
          <div className="lg:col-start-2 lg:row-start-1">
            <span style={{ display: 'inline-block', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Physical Development</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', lineHeight: 1.2 }}>
              Building Character{' '}<span style={{ color: '#d4af37' }}>Through Sports</span>
            </h2>
          </div>

          {/* Row 2: Content (Paragraphs & Checklist) */}
          <div className="lg:col-start-2 lg:row-start-2" style={{ marginTop: '20px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '12px' }}>
              We strongly believe that a healthy body houses a healthy mind. Our sports curriculum is designed to identify and nurture athletic talents while instilling discipline, sportsmanship, and teamwork.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '28px' }}>
              From expansive outdoor fields to safe, dedicated play areas, Brindavan School offers the ideal physical layout for students to enjoy games, develop agility, and participate in inter-school competitions.
            </p>
            {['Large outdoor playground and physical training fields', 'Dedicated courts for volleyball, kabaddi, and badminton', 'Indoor games section (chess, carrom, table tennis)', 'Professional physical education (PE) instructors', 'Regular sports events and inter-school team preparation'].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#5C470E' }}>
                <CheckCircle2 size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} /><span>{point}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Image (Left side on desktop, bottom on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-start-1 lg:row-start-2 lg:row-span-1 lg:self-stretch"
            style={{ position: 'relative', marginTop: '20px', width: '100%', height: '100%', padding: '16px' }}
          >
            {/* Top-Left Offset L-Border */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', borderTop: '4px solid #7C6218', borderLeft: '8px solid #7C6218', borderTopLeftRadius: '24px', pointerEvents: 'none' }} />

            {/* Bottom-Right Offset L-Border */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '120px', height: '120px', borderBottom: '8px solid #7C6218', borderRight: '4px solid #7C6218', borderBottomRightRadius: '24px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '360px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 50px rgba(124, 98, 24, 0.15)' }}>
              <img
                src={sportsRightImg}
                alt="Sports Fields"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Premium Floating Badge matching screenshot style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ position: 'absolute', bottom: 0, right: 0, background: '#fff', borderTopLeftRadius: '20px', padding: '20px 24px', boxShadow: '-5px -5px 30px rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(124, 98, 24, 0.1)', borderTop: '1px solid rgba(124, 98, 24, 0.1)', textAlign: 'center', zIndex: 10 }}
              >
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#7C6218', fontFamily: "'Playfair Display', serif", lineHeight: '1' }}>100%</div>
                <div style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', fontFamily: "'DM Sans', sans-serif", letterSpacing: '1px', marginTop: '6px', textTransform: 'uppercase' }}>Active Lifestyle</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Row 3: Buttons */}
          <div className="lg:col-start-2 lg:row-start-3" style={{ marginTop: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#7C6218', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 6px 24px rgba(124, 98, 24, 0.25)' }}>Tour Sports Fields <ArrowRight size={18} /></Link>
              <Link to="/facilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid #7C6218', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '14px 28px', borderRadius: '50px', textDecoration: 'none' }}>All Facilities</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#fdfcf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Sports Program</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem' }}>Encouraging collaboration and competitive excellence</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: Trophy, title: 'Competitive Edge', description: 'Coaching teams for regional and inter-school tournaments across sports.' },
              { icon: Users, title: 'Inclusive Play', description: 'Ensuring every student participates in physical training activities daily.' },
              { icon: Star, title: 'Skill Guided', description: 'Focused instruction for rules, strategy, and advanced physical agility.' },
              { icon: Dumbbell, title: 'Modern Gear', description: 'Premium sports equipment and protective gear for a safe playing experience.' }
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '24px', padding: '32px 28px', boxShadow: '0 15px 35px rgba(124, 98, 24, 0.05)', border: '1px solid rgba(212, 175, 55, 0.12)' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1.5px solid rgba(212, 175, 55, 0.15)' }}>
                  <item.icon size={24} style={{ color: '#7C6218' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#7C6218', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sports Dual Column ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#7C6218', marginBottom: '12px' }}>Curriculum & Activities</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748b', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>A balanced approach to outdoor physical education and brain-enriching indoor play</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Outdoor Sports & Games', items: ['Cricket Net Practice & Pitch', 'Volleyball Court', 'Kabaddi Sand Court', 'Badminton Court', 'Running Tracks (100m, 200m)', 'Daily Calisthenics & Fitness Drills'], accent: '#7C6218' },
              { title: 'Indoor Sports & Board Games', items: ['Table Tennis Arena', 'Carrom Boards (Multiple setups)', 'Chess Arenas', 'Yoga & Meditation center', 'Gymnastics & Stretching mats', 'Acoustic Indoor Play Rooms'], accent: '#d4af37' }
            ].map((col, ci) => (
              <motion.div key={col.title} initial={{ opacity: 0, x: ci === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '24px', padding: '36px 32px', border: '1.5px solid rgba(212, 175, 55, 0.12)', boxShadow: '0 10px 30px rgba(124, 98, 24, 0.03)' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#7C6218', marginBottom: '24px', paddingBottom: '16px', borderBottom: `2px solid ${col.accent}`, display: 'inline-block' }}>{col.title}</h3>
                <div style={{ marginTop: '8px' }}>
                  {col.items.map(item => {
                    const ItemIcon = getSportsItemIcon(item)
                    return (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)', fontFamily: "'DM Sans', sans-serif", color: '#5C470E', fontSize: '0.95rem' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `${col.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <ItemIcon size={16} style={{ color: col.accent }} />
                        </div>
                        <span>{item}</span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #7C6218 0%, #B8860B 50%, #5C470E 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Fostering Athletic Excellence</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '36px', lineHeight: 1.7 }}>Give your child access to extensive playgrounds, dedicated play stations, and top coaching to help them grow healthy and strong.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission-form" style={{ background: '#fff', color: '#7C6218', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '2px solid rgba(255,255,255,0.8)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.97rem', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}