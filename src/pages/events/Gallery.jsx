import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Users, Award, Calendar, Camera, ArrowRight } from 'lucide-react'
import PageHero from '../../components/PageHero'

const galleryData = [
  { title: 'Annual Day', folder: 'AnnualDay', cover: '/images/gallery/AnnualDay/28.jpg', images: ['/images/gallery/AnnualDay/5.jpg', '/images/gallery/AnnualDay/7.jpg', '/images/gallery/AnnualDay/10.jpg', '/images/gallery/AnnualDay/11.jpg', '/images/gallery/AnnualDay/12.jpg', '/images/gallery/AnnualDay/14.jpg', '/images/gallery/AnnualDay/16.jpg', '/images/gallery/AnnualDay/17.jpg', '/images/gallery/AnnualDay/18.jpg', '/images/gallery/AnnualDay/19.jpg', '/images/gallery/AnnualDay/22.jpg', '/images/gallery/AnnualDay/24.jpg', '/images/gallery/AnnualDay/26.jpg', '/images/gallery/AnnualDay/27.jpg', '/images/gallery/AnnualDay/28.jpg', '/images/gallery/AnnualDay/29.jpg'] },
  { title: 'Science Day', folder: 'ScienceDay', cover: '/images/gallery/ScienceDay/1.jpg', images: ['/images/gallery/ScienceDay/1.jpg', '/images/gallery/ScienceDay/2.jpg'] },
  { title: 'Academic Achievers', folder: 'AcademicAchivers', cover: '/images/gallery/AcademicAchivers/1.jpg', images: ['/images/gallery/AcademicAchivers/1.jpg', '/images/gallery/AcademicAchivers/2.jpg'] },
  { title: "Children's Day", folder: 'ChildrensDay', cover: '/images/gallery/ChildrensDay/1.jpg', images: ['/images/gallery/ChildrensDay/1.jpg', '/images/gallery/ChildrensDay/2.jpg'] },
  { title: 'Graduation Day', folder: 'GraduationDay', cover: '/images/gallery/GraduationDay/1.jpg', images: ['/images/gallery/GraduationDay/1.jpg', '/images/gallery/GraduationDay/2.jpg'] },
  { title: 'House Visit', folder: 'HouseVisit', cover: '/images/gallery/HouseVisit/2.jpg', images: ['/images/gallery/HouseVisit/1.jpg', '/images/gallery/HouseVisit/2.jpg'] },
  { title: 'Infrastructure', folder: 'Infrastructure', cover: '/images/gallery/Infrastructure/1.jpg', images: ['/images/gallery/Infrastructure/1.jpg', '/images/gallery/Infrastructure/2.jpg'] },
  { title: 'Campus Activities', folder: 'campus-activities', cover: '/images/gallery/campus-activities/1.jpg', images: ['/images/gallery/campus-activities/2.jpg', '/images/gallery/campus-activities/3.jpg', '/images/gallery/campus-activities/4.jpg', '/images/gallery/campus-activities/5.jpg', '/images/gallery/campus-activities/6.jpg', '/images/gallery/campus-activities/7.jpg'] },
]

const categories = [
  { icon: Users, label: 'School Events', desc: 'Celebrations, festivals, and special school programs' },
  { icon: Award, label: 'Achievements', desc: 'Academic excellence, sports victories, and competitions' },
  { icon: Calendar, label: 'Annual Functions', desc: 'Cultural programs, annual days, and graduation ceremonies' },
  { icon: Camera, label: 'Campus Life', desc: 'Daily activities, classroom moments, and student interactions' },
]

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <Helmet>
        <title>Photo Gallery | Brindavan School Palamaner</title>
        <meta name="description" content="Explore real moments from Brindavan School Palamaner including annual day celebrations, sports events, science exhibitions, classroom activities, and student achievements." />
      </Helmet>

      <PageHero
        variant="pink"
        title="Photo Gallery"
        subtitle="Capturing memorable moments and showcasing the vibrant life at Brindavan School."
        backgroundImage="/images/gallery/AnnualDay/5.jpg"
      />

      {/* Category cards */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Our Archive</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: 10 }}>What You'll Find Here</h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>Explore curated collections from every corner of school life</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {categories.map((item, i) => (
              <motion.div key={i} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: 18, padding: '32px 24px', border: '1px solid #f0f0f0', boxShadow: '0 2px 16px rgba(0,0,0,0.05)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #FF6347, #ffb347)' }} />
                <div style={{ width: 52, height: 52, background: '#FFF3F0', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '1px solid #FFD8CC' }}>
                  <item.icon size={22} style={{ color: '#FF6347' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1.2rem', fontWeight: 700, color: '#011E3A', marginBottom: 8 }}>{item.label}</h3>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ padding: '48px 0', background: '#fff', borderTop: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
          {[{ num: '500+', label: 'Photos' }, { num: '25+', label: 'Events Covered' }, { num: '8', label: 'Collections' }, { num: '100%', label: 'Digital Archive' }].map((s, i) => (
            <motion.div key={i} initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
              style={{ textAlign: 'center', padding: '24px 16px', background: '#fff', borderRadius: 16, border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#FF6347', fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
              <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>School Life</span>
              <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#011E3A', marginBottom: 10 }}>Moments That Define Us</h2>
            <p style={{ color: '#666', fontSize: '1.2rem' }}>Click any collection to explore in full</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {galleryData.map((gallery, i) => (
              <motion.div key={gallery.title} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}
                onClick={() => { if (gallery.external) { window.open(gallery.link, '_blank') } else { navigate(`/gallery/${gallery.folder}`) } }}
                style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease', position: 'relative' }}
                whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
              >
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #FF6347, #ffb347)', zIndex: 1 }} />

                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '62%', background: '#f5f5f5' }}>
                  <img src={gallery.cover} alt={gallery.title} loading="lazy"
                    onError={(e) => { e.target.style.display = 'none' }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  {/* Overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(1,30,58,0.55) 0%, transparent 60%)' }} />
                  {/* Photo count badge */}
                  <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', padding: '5px 12px', borderRadius: 40, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#FF6347', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', zIndex: 2, fontFamily: "'DM Sans', sans-serif" }}>
                    {gallery.images.length} Photos
                  </span>
                </div>

                {/* Card footer */}
                <div style={{ padding: '22px 22px 24px', background: '#fff' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#011E3A', marginBottom: 6 }}>{gallery.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 14 }}>Explore memorable moments from {gallery.title.toLowerCase()}.</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FF6347', fontFamily: "'DM Sans', sans-serif" }}>
                    View Collection
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', border: '1.5px solid #FF6347', padding: '60px 40px', borderRadius: 24 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
            <span style={{ color: '#FF6347', fontWeight: 600, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' }}>Admissions</span>
            <span style={{ height: 1, width: 24, background: '#FF6347', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 700, color: '#011E3A', marginBottom: 14, lineHeight: 1.25 }}>Join Our Learning Journey</h2>
          <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: 36, lineHeight: 1.75 }}>Discover our vibrant school community through memorable moments and celebrations. Your child's story starts here.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" style={{ background: '#FF6347', color: '#fff', fontWeight: 700, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Apply Now <ArrowRight size={17} /></Link>
            <Link to="/contact" style={{ border: '1.5px solid #e0e0e0', color: '#011E3A', fontWeight: 600, fontSize: '0.97rem', padding: '13px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Schedule Visit</Link>
          </div>
        </div>
      </section>
    </div>
  )
}