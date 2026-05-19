import { Link } from 'react-router-dom'
import { Phone, Mail, Sparkles } from 'lucide-react'

export default function AdmissionsBanner() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-[100]
        overflow-hidden
      "
      style={{
        background: 'linear-gradient(90deg, #fff0f7 0%, #ffffff 40%, #fff0f7 100%)',
        borderBottom: '1px solid rgba(255,99,71,0.2)',
        boxShadow: '0 4px 32px rgba(255,99,71,0.13)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* ── Top gradient stripe — bolder pink ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
        background: 'linear-gradient(90deg, #C4391E 0%, #FF6347 35%, #FF8C6B 60%, #FF6347 80%, #C4391E 100%)',
      }} />

      {/* ── Pink glow wash across the whole bar ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(255,99,71,0.06) 0%, rgba(255,255,255,0) 50%, rgba(255,99,71,0.06) 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Orb left ── */}
      <div style={{
        position: 'absolute', top: -20, left: -10,
        width: 120, height: 120, borderRadius: '50%',
        background: 'rgba(255,99,71,0.18)',
        filter: 'blur(36px)', pointerEvents: 'none',
      }} />

      {/* ── Orb right ── */}
      <div style={{
        position: 'absolute', top: -16, right: -10,
        width: 140, height: 140, borderRadius: '50%',
        background: 'rgba(196,57,30,0.13)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .banner-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        .banner-marquee:hover { animation-play-state: paused; }

        .banner-sep {
          margin: 0 14px;
          color: rgba(255,99,71,0.45);
          font-size: 11px;
        }

        .apply-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #C4391E 0%, #FF6347 50%, #FF8C6B 100%);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 20px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 6px 20px rgba(255,99,71,0.45), 0 2px 8px rgba(196,57,30,0.3);
          letter-spacing: 0.02em;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .apply-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 10px 28px rgba(255,99,71,0.55), 0 4px 12px rgba(196,57,30,0.35);
        }
        .apply-btn:active { transform: scale(0.97); }
        .apply-btn .shine {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: translateX(-120%);
          transition: transform 1s ease;
        }
        .apply-btn:hover .shine { transform: translateX(120%); }

        .contact-link {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 500;
          color: #6b5c6e;
          text-decoration: none;
          transition: color .2s ease;
        }
        .contact-link:hover { color: #FF6347; }
        .contact-link svg { width: 13px; height: 13px; }

        @media (max-width: 640px) {
          .banner-contacts { display: none !important; }
        }
      `}</style>

      {/* ── INNER ROW ── */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 16px',
        height: 'var(--top-banner, 44px)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 16,
        position: 'relative', zIndex: 10,
      }}>

        {/* ── LEFT: scrolling marquee ── */}
        <div style={{ flex: 1, overflow: 'hidden', minWidth: 0 }}>
          <div className="banner-marquee" style={{
            fontSize: 12, fontWeight: 500,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {/* duplicate for seamless loop */}
            {[0, 1].map(dupe => (
              <span key={dupe} style={{ display: 'inline-flex', alignItems: 'center' }}>

                <span style={{
                  color: '#FF6347', fontWeight: 800, fontSize: 12.5,
                  background: 'rgba(255,99,71,0.09)',
                  border: '1px solid rgba(255,99,71,0.25)',
                  borderRadius: 100,
                  padding: '1px 10px',
                  marginRight: 6,
                }}>🎓 Admissions Open 2026–27</span>

                <span className="banner-sep">◆</span>

                <span style={{ color: '#3D332A' }}>Best State Board School in Palamaner</span>

                <span className="banner-sep">◆</span>

                <span style={{ color: '#3D332A' }}>Smart Classrooms · Labs · Sports Facilities</span>

                <span className="banner-sep">◆</span>

                <span style={{ color: '#3D332A' }}>Transport Available</span>

                <span className="banner-sep">◆</span>

                <span style={{
                  color: '#C4391E', fontWeight: 700, fontSize: 12.5,
                  background: 'rgba(196,57,30,0.07)',
                  border: '1px solid rgba(196,57,30,0.2)',
                  borderRadius: 100,
                  padding: '1px 10px',
                  marginRight: 6,
                }}>⚡ Limited Seats — Apply Early</span>

                <span className="banner-sep">◆</span>

              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: contacts + CTA ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 16, flexShrink: 0,
        }}>

          {/* contact links */}
          <div className="banner-contacts" style={{
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <a href="tel:+919121914631" className="contact-link">
              <Phone />
              +91 91219 14631
            </a>
            <div style={{ width: 1, height: 14, background: 'rgba(255,99,71,0.3)' }} />
            <a href="mailto:brindavanschool334@gmail.com" className="contact-link">
              <Mail />
              brindavanschool334@gmail.com
            </a>
          </div>

          {/* CTA */}
          <Link to="/admissions" className="apply-btn">
            <div className="shine" />
            <span style={{ position: 'relative', zIndex: 1 }}>Apply Now →</span>
          </Link>

        </div>
      </div>

      {/* ── Bottom pink hairline ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,99,71,0.35), transparent)',
      }} />
    </div>
  )
}