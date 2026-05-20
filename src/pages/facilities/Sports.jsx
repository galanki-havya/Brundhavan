import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { 
  Trophy, Users, Star, Dumbbell, CheckCircle2, ArrowRight,
  Activity, Award, Target, Flame, Crown, Heart, Music
} from 'lucide-react'
import sportsImg from '../../assets/Facilties/4.jpg'
import sportsRightImg from '../../assets/rightimages/4.png'

const getSportsItemIcon = (name) => {
  const n = name.toLowerCase()
  if (n.includes('cricket')) return Award
  if (n.includes('volleyball')) return Target
  if (n.includes('kabaddi')) return Users
  if (n.includes('badminton')) return Trophy
  if (n.includes('running')) return Flame
  if (n.includes('calisthenics')) return Dumbbell
  return Trophy
}

function ClearDivider() {
  return (
    <div className="w-full flex justify-center bg-[#F9FAFB] py-1">
      <div className="w-full max-w-9xl px-4 flex flex-col gap-[5px]">
        <div
          className="h-[3px] w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(236,115,58,0.25) 10%, rgba(236,115,58,0.85) 40%, #ec733a 50%, rgba(236,115,58,0.85) 60%, rgba(236,115,58,0.25) 90%, transparent 100%)',
          }}
        />
        
      </div>
    </div>
  )
}

export default function Sports() {
  return (
    <div style={{ background: '#F9FAFB', fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>Sports & Physical Education - Brindavan Schools</title>
      </Helmet>

      <PageHero
        title="Sports"
        subtitle="Spacious playground, indoor & outdoor sports courts, and trained PE coaches supporting physical wellness."
        backgroundImage={sportsImg}
        variant="gold"
        fullOpacity={true}
      />

      {/* ── Split Section ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="sports-grid">
          <style>{`@media(max-width:768px){.sports-grid{grid-template-columns:1fr!important;}}`}</style>
          
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: 'relative' }}>
            <img src={sportsRightImg} alt="Sports" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#fff', borderRadius: '16px', padding: '16px 24px', border: '1px solid #f0f0f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>100%</div>
              <div style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>Active Lifestyle</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ height: 1, width: 28, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Physical Development</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#011E3A', marginBottom: '20px' }}>
              Building Character <span style={{ color: '#FF6347', fontStyle: 'italic', fontWeight: 400 }}>Through Sports</span>
            </h2>
            {[
              'Large outdoor playground and physical training fields',
              'Dedicated courts for volleyball, kabaddi, and badminton',
              'Indoor games section (chess, carrom, table tennis)',
              'Professional physical education (PE) instructors',
              'Regular sports events and inter-school team preparation'
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', fontSize: '0.95rem', color: '#222' }}>
                <CheckCircle2 size={19} style={{ color: '#FF6347', flexShrink: 0, marginTop: '2px' }} />
                <span>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ClearDivider />

      {/* ── Feature Cards ── */}
      <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { label: 'Competitive Edge', desc: 'Coaching teams for regional and inter-school tournaments.' },
              { label: 'Inclusive Play', desc: 'Ensuring every student participates in physical training daily.' },
              { label: 'Skill Guided', desc: 'Focused instruction for rules, strategy, and agility.' },
              { label: 'Modern Gear', desc: 'Premium equipment and safety gear for all students.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', border: '1px solid #f0f0f0', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}