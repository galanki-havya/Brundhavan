import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { siteData } from '../data/site'
import logo from '../assets/logo.jpg' 

const { school } = siteData

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about/overview' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  // Updated WhatsApp URL to use the specific number
  const whatsappNumber = "919121914631"; 
  const socials = [
    { href: school.socials.instagram, Icon: FaInstagram, label: 'Instagram' },
    { href: school.socials.youtube, Icon: FaYoutube, label: 'YouTube' },
    { href: `https://wa.me/${whatsappNumber}`, Icon: FaWhatsapp, label: 'WhatsApp' },
  ]

  return (
    <footer style={{ background: 'rgb(1, 30, 58)', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── ORANGE ACCENT BAR ── */}
      <div style={{ height: '4px', background: '#ec733a' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr', gap: '60px' }}>
        
        {/* BRAND & LOGO */}
        <div>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img 
              src={logo} 
              alt="School Logo" 
              style={{ maxHeight: '100%', width: 'auto', display: 'block' }} 
            />
          </div>
          <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '24px', maxWidth: '300px' }}>
            {school.name} is a modern, values-driven institution committed to nurturing curious, confident, and compassionate learners.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" 
                style={{ color: '#fff', opacity: 0.7, transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '25px', color: '#ec733a', letterSpacing: '1px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {quickLinks.map(link => (
              <li key={link.name}>
                <NavLink to={link.path} style={{ fontSize: '14px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', opacity: 0.8, transition: '0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#ec733a' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = '#fff' }}
                >
                  <ChevronRight size={16} style={{ marginRight: '8px' }} /> {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '25px', color: '#ec733a', letterSpacing: '1px' }}>Contact Us</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px', opacity: 0.9 }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <MapPin size={20} style={{ color: '#ec733a', flexShrink: 0 }} />
              <span>{school.address}</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Phone size={20} style={{ color: '#ec733a', flexShrink: 0 }} />
              <a href={`tel:${school.phone}`} style={{ color: '#fff', textDecoration: 'none' }}>{school.phone}</a>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Mail size={20} style={{ color: '#ec733a', flexShrink: 0 }} />
              <a href={`mailto:${school.email}`} style={{ color: '#fff', textDecoration: 'none' }}>{school.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 40px', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  )
}