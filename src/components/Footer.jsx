import { Link } from 'react-router-dom'
import { siteData } from '../data/site'

const { school } = siteData

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-gray-300">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{height:'40px'}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f0fdf4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">B</span>
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg">{school.name}</div>
              <div className="text-primary-400 text-xs">{school.affiliation}</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5 max-w-sm">
            {school.description.slice(0, 160)}…
          </p>
          <div className="flex gap-3">
            {Object.entries(school.socials).map(([name, href]) => (
              <a key={name} href={href} className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors text-sm capitalize" aria-label={name}>
                {name[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home','About','Academics','Admissions','Gallery','Contact'].map(p => (
              <li key={p}>
                <Link to={p === 'Home' ? '/' : `/${p.toLowerCase()}`} className="hover:text-primary-400 transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-primary-400 shrink-0">📍</span>
              <span>{school.address}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-400">📞</span>
              <a href={`tel:${school.phone}`} className="hover:text-primary-400 transition-colors">{school.phone}</a>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-400">✉️</span>
              <a href={`mailto:${school.email}`} className="hover:text-primary-400 transition-colors">{school.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <span>Established {school.established} · CBSE Affiliated</span>
        </div>
      </div>
    </footer>
  )
}
