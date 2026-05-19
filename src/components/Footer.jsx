import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight, School } from 'lucide-react'
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { siteData } from '../data/site'

const { school } = siteData

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const programmes = [
    { name: 'Pre-Primary', path: '/academics/pre-primary' },
    { name: 'Primary School', path: '/academics/primary' },
    { name: 'Middle School', path: '/academics/middle' },
    { name: 'High School', path: '/academics/high' },
    { name: 'Activities', path: '/activities' },
  ]

  const socials = [
    { href: school.socials.instagram, Icon: FaInstagram, label: 'Instagram' },
    { href: school.socials.youtube, Icon: FaYoutube, label: 'YouTube' },
    { href: school.socials.whatsapp ?? '#', Icon: FaWhatsapp, label: 'WhatsApp' },
  ]

  return (
    <footer style={{ background: '#0d1117', color: '#e2e8f0', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── ACCENT BAR ── */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #7C6218, #A28225, #d4af37)' }} />

      {/* ── NEWSLETTER BAND ── */}
      <div style={{ background: '#111827', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <p style={{ fontSize: '13px', color: '#94a3b8' }}>📬 Stay updated — admissions, events &amp; school news</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            placeholder="Enter your email"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', borderRadius: '8px', padding: '8px 14px', fontSize: '12px', outline: 'none', width: '200px' }}
          />
          <button
            style={{ background: '#7C6218', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 18px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#d4af37'}
            onMouseLeave={e => e.currentTarget.style.background = '#7C6218'}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.3fr', gap: '40px', padding: '48px 40px 36px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* BRAND */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(124, 98, 24, 0.15)', border: '1px solid rgba(124, 98, 24, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <School size={18} style={{ color: '#7C6218' }} />
            </div>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{school.name}</div>
              <div style={{ fontSize: '10px', color: '#d4af37', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>{school.affiliation}</div>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#f1f3f6ff', lineHeight: 1.75, margin: '14px 0 20px', maxWidth: '240px' }}>
            A modern, values-driven institution committed to nurturing curious, confident, and compassionate learners since 2025.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7C6218'; e.currentTarget.style.borderColor = '#7C6218'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(243, 237, 237, 0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94a3b8' }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4af37', marginBottom: '18px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {quickLinks.map(link => (
              <li key={link.name}>
                <NavLink to={link.path}
                  style={({ isActive }) => ({ fontSize: '13px', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' })}
                  onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                >
                  <ArrowRight size={11} style={{ opacity: 0.5 }} />{link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* PROGRAMMES */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4af37', marginBottom: '18px' }}>Programmes</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {programmes.map(link => (
              <li key={link.name}>
                <NavLink to={link.path}
                  style={({ isActive }) => ({ fontSize: '13px', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' })}
                  onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                >
                  <ArrowRight size={11} style={{ opacity: 0.5 }} />{link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4af37', marginBottom: '18px' }}>Contact Us</h4>
          {[
            { Icon: MapPin, content: school.address },
            { Icon: Phone, content: <a href={`tel:${school.phone}`} style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#d4af37'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}>{school.phone}</a> },
            { Icon: Mail, content: <a href={`mailto:${school.email}`} style={{ color: '#ffffff', textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#d4af37'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}>{school.email}</a> },
          ].map(({ Icon, content }, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(124, 98, 24, 0.12)', border: '1px solid rgba(124, 98, 24, 0.25)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} style={{ color: '#d4af37' }} />
              </div>
              <div style={{ fontSize: '12.5px', color: '#ffffff', lineHeight: 1.6 }}>{content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '0 40px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', flexWrap: 'wrap', gap: '8px', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(t => (
            <a key={t} href="#" style={{ fontSize: '12px', color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
            >{t}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}