import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight, GraduationCap } from 'lucide-react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { siteData } from '../data/site'

const { school } = siteData

export default function Footer() {
  const icons = {
    instagram: FaInstagram,
    youtube:   FaYoutube,
  }

  const quickLinks = [
    { name: 'Home',       path: '/' },
    { name: 'About',      path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery',    path: '/gallery' },
    { name: 'Contact',    path: '/contact' },
  ]

  const programmes = [
    { name: 'Pre-Primary',    path: '/academics/pre-primary' },
    { name: 'Primary School', path: '/academics/primary' },
    { name: 'Middle School',  path: '/academics/middle' },
    { name: 'High School',    path: '/academics/high' },
    { name: 'Activities',     path: '/activities' },
  ]

  return (
    <footer className="relative text-white" style={{ background: 'linear-gradient(180deg, #1a0a14 0%, #0f0508 50%, #070205 100%)' }}>

      {/* ── TOP WAVE ── */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
          <path d="M0,40 C360,0 720,60 1080,20 C1260,5 1380,35 1440,25 L1440,0 L0,0 Z" fill="#1a0a14" />
        </svg>
      </div>

      {/* ── NEWSLETTER BAND ── */}
      <div className="relative z-10 border-b border-[#ec4899]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-medium" style={{ color: '#f9a8d4' }}>
            📬 Stay updated — admissions, events &amp; school news
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              placeholder="Enter your email"
              className="flex-1 sm:w-56 px-3 py-2 rounded-lg border bg-white text-slate-800 placeholder:text-slate-400 text-xs outline-none transition"
              style={{ borderColor: 'rgba(236,72,153,0.35)' }}
              onFocus={e => (e.target.style.boxShadow = '0 0 0 2px rgba(236,72,153,0.35)')}
              onBlur={e => (e.target.style.boxShadow = 'none')}
            />
            <button
              className="text-white font-semibold px-4 py-2 rounded-lg text-xs transition-all duration-300 flex-shrink-0 hover:scale-105 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', boxShadow: '0 4px 15px rgba(236,72,153,0.35)' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(236,72,153,0.3)' }}>
                <GraduationCap className="w-4.5 h-4.5" style={{ color: '#ec4899' }} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">{school.name}</h3>
                <p className="text-[10px] font-medium tracking-wide" style={{ color: '#f9a8d4', opacity: 0.7 }}>{school.affiliation}</p>
              </div>
            </div>

            <p className="leading-relaxed mb-4 text-xs" style={{ color: 'rgba(249,168,212,0.55)' }}>
              {school.description.split(' ').slice(0, 20).join(' ')}…
            </p>

            <div className="flex gap-2">
              {Object.entries(school.socials).map(([name, href]) => {
                const Icon = icons[name]
                if (!Icon) return null
                return (
                  <a
                    key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.25)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #ec4899, #be185d)'; e.currentTarget.style.border = '1px solid transparent'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(236,72,153,0.4)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(236,72,153,0.12)'; e.currentTarget.style.border = '1px solid rgba(236,72,153,0.25)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#ec4899' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `flex items-center gap-1.5 text-xs transition-all duration-200 group ${isActive ? 'font-semibold' : ''}`}
                    style={({ isActive }) => ({ color: isActive ? '#ec4899' : 'rgba(249,168,212,0.55)' })}
                    onMouseEnter={e => { if (!e.currentTarget.classList.contains('font-semibold')) e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { if (!e.currentTarget.classList.contains('font-semibold')) e.currentTarget.style.color = 'rgba(249,168,212,0.55)' }}
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: '#ec4899' }} />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMMES */}
          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#ec4899' }}>Programmes</h4>
            <ul className="space-y-2">
              {programmes.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `flex items-center gap-1.5 text-xs transition-all duration-200 group ${isActive ? 'font-semibold' : ''}`}
                    style={({ isActive }) => ({ color: isActive ? '#ec4899' : 'rgba(249,168,212,0.55)' })}
                    onMouseEnter={e => { if (!e.currentTarget.classList.contains('font-semibold')) e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { if (!e.currentTarget.classList.contains('font-semibold')) e.currentTarget.style.color = 'rgba(249,168,212,0.55)' }}
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: '#f472b6' }} />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-3 text-xs uppercase tracking-[0.18em]" style={{ color: '#ec4899' }}>Contact Us</h4>
            <ul className="space-y-3 text-xs" style={{ color: 'rgba(249,168,212,0.55)' }}>
              <li className="flex gap-2.5">
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(236,72,153,0.15)' }}>
                  <MapPin className="w-3 h-3" style={{ color: '#ec4899' }} />
                </div>
                <span className="leading-relaxed">{school.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236,72,153,0.15)' }}>
                  <Phone className="w-3 h-3" style={{ color: '#ec4899' }} />
                </div>
                <a href={`tel:${school.phone}`} className="transition-colors duration-200 hover:text-white">{school.phone}</a>
              </li>
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(236,72,153,0.15)' }}>
                  <Mail className="w-3 h-3" style={{ color: '#ec4899' }} />
                </div>
                <a href={`mailto:${school.email}`} className="transition-colors duration-200 hover:text-white break-all">{school.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="mt-7 pt-4 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-[11px]"
          style={{ borderTop: '1px solid rgba(236,72,153,0.2)', color: 'rgba(249,168,212,0.3)' }}
        >
          <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <span style={{ color: 'rgba(249,168,212,0.2)' }}>Designed for excellence in education</span>
        </div>
      </div>
    </footer>
  )
}