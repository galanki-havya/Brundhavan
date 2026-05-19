import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

export default function AdmissionsBanner() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-[100] overflow-hidden"
      style={{
        background: '#011E3A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* ── Simple Single-Color Thin Top Stripe ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: 3,
        background: '#ea580c',
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
          margin: 0 16px;
          color: rgba(255, 255, 255, 0.3);
          font-size: 11px;
        }
        
        /* CLEAN, NORMAL ACCENT BUTTON STYLE */
        .apply-btn {
          background: #ea580c;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease;
          letter-spacing: 0.02em;
          white-space: nowrap;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .apply-btn:hover {
          background: #f97316;
        }
        .apply-btn:active {
          transform: scale(0.98);
        }
        
        .contact-link {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500;
          color: #cbd5e1;
          text-decoration: none;
          transition: color .2s ease;
        }
        .contact-link:hover { color: #ffffff; }
        .contact-link svg { width: 14px; height: 14px; color: #ea580c; }
        
        @media (max-width: 640px) {
          .banner-contacts { display: none !important; }
        }
      `}</style>

      {/* ── Main Content Container ── */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 16px',
        height: 'var(--top-banner, 56px)', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        gap: 16, position: 'relative', zIndex: 10,
      }}>
        
        {/* Scrolling Marquee Side */}
        <div style={{ flex: 1, overflow: 'hidden', minWidth: 0 }}>
          <div className="banner-marquee" style={{ fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
            {[0, 1].map(dupe => (
              <span key={dupe} style={{ display: 'inline-flex', alignItems: 'center' }}>
                
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Admissions Open 2026–27</span>
                
                <span className="banner-sep">◆</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Best State Board School in Palamaner</span>
                
                <span className="banner-sep">◆</span>
                <span style={{ color: '#cbd5e1' }}>Smart Classrooms · Labs · Sports Facilities</span>
                
                <span className="banner-sep">◆</span>
                <span style={{ color: '#cbd5e1' }}>Transport Available</span>
                
                <span className="banner-sep">◆</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Limited Seats — Apply Early</span>
                
                <span className="banner-sep">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls & Contact Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <div className="banner-contacts" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="tel:+919121914631" className="contact-link">
              <Phone /> +91 91219 14631
            </a>
            <div style={{ width: 1, height: 14, background: 'rgba(255, 255, 255, 0.15)' }} />
            <a href="mailto:brindavanschool334@gmail.com" className="contact-link">
              <Mail /> brindavanschool334@gmail.com
            </a>
          </div>

          <Link to="/admissions" className="apply-btn">
            Apply Now →
          </Link>
        </div>

      </div>
    </div>
  )
}