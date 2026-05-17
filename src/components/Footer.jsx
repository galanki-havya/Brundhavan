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
    <footer className="relative bg-gradient-to-b from-[#0D1B3E] via-[#142252] to-[#0A1328] text-white">

      {/* ── TOP WAVE ── */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
          <path
            d="M0,40 C360,0 720,60 1080,20 C1260,5 1380,35 1440,25 L1440,0 L0,0 Z"
            fill="#0D1B3E"
          />
        </svg>
      </div>

      {/* ── NEWSLETTER BAND (top of footer, above columns) ── */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-blue-100/70 font-medium">
            📬 Stay updated — admissions, events &amp; school news
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              placeholder="Enter your email"
              className="
                flex-1 sm:w-56 px-3 py-2
                rounded-lg border border-white/20
                bg-white text-slate-800 placeholder:text-slate-400
                text-xs focus:ring-2 focus:ring-[#E8A0B0]/50 outline-none
                transition
              "
            />
            <button className="
              bg-[#E8A0B0] hover:bg-[#D94680]
              text-white font-semibold
              px-4 py-2 rounded-lg text-xs
              transition-all duration-300
              flex-shrink-0
            ">
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
              <div className="w-9 h-9 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4.5 h-4.5 text-[#E8A0B0]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm leading-tight">
                  {school.name}
                </h3>
                <p className="text-blue-200/60 text-[10px] font-medium tracking-wide">
                  {school.affiliation}
                </p>
              </div>
            </div>

            <p className="text-blue-100/55 leading-relaxed mb-4 text-xs">
              {school.description.split(' ').slice(0, 20).join(' ')}…
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {Object.entries(school.socials).map(([name, href]) => {
                const Icon = icons[name]
                if (!Icon) return null
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="
                      w-8 h-8 rounded-full
                      bg-white/10 border border-white/10
                      hover:bg-[#E8A0B0] hover:border-[#E8A0B0]
                      flex items-center justify-center
                      transition-all duration-300
                    "
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white/90 font-semibold mb-3 text-xs uppercase tracking-[0.18em]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 text-xs transition-all duration-200 group ${
                        isActive
                          ? 'text-[#E8A0B0] font-semibold'
                          : 'text-blue-100/55 hover:text-white'
                      }`
                    }
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMMES */}
          <div>
            <h4 className="text-white/90 font-semibold mb-3 text-xs uppercase tracking-[0.18em]">
              Programmes
            </h4>
            <ul className="space-y-2">
              {programmes.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 text-xs transition-all duration-200 group ${
                        isActive
                          ? 'text-[#E8A0B0] font-semibold'
                          : 'text-blue-100/55 hover:text-white'
                      }`
                    }
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white/90 font-semibold mb-3 text-xs uppercase tracking-[0.18em]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-blue-100/55">
              <li className="flex gap-2.5">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#E8A0B0]" />
                </div>
                <span className="leading-relaxed">{school.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-[#E8A0B0]" />
                </div>
                <a href={`tel:${school.phone}`} className="hover:text-white transition-colors duration-200">
                  {school.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 text-[#E8A0B0]" />
                </div>
                <a href={`mailto:${school.email}`} className="hover:text-white transition-colors duration-200 break-all">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-7 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-[11px] text-blue-100/35">
          <span>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </span>
          <span className="text-blue-100/25">
            Designed for excellence in education
          </span>
        </div>

      </div>
    </footer>
  )
}