import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { siteData } from '../data/site'

const { school } = siteData

export default function Footer() {
  const icons = {
    facebook: Globe,
    instagram: Globe,
    youtube: Globe,
    twitter: Globe
  }

  return (
    <footer className="relative bg-gradient-to-b from-orange-50 via-amber-50 to-white text-gray-700 border-t border-orange-100">

      {/* CURVED TOP */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 md:h-24 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,0 480,140 720,80 C960,20 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#fff7ed"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-18 pb-6">

        {/* Newsletter (SMALLER) */}
        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-4 mb-6 text-center">
          <h3 className="text-gray-900 font-bold text-base mb-1">
            Stay Updated
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Get school news & admission alerts
          </p>

          <div className="flex max-w-sm mx-auto gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-lg border border-orange-200 text-xs outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Enter email"
            />
            <button className="bg-orange-500 px-3 py-2 rounded-lg text-white text-xs hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">
                  {school.name}
                </div>
                <div className="text-orange-600 text-xs">
                  {school.affiliation}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 mb-3 max-w-sm leading-relaxed">
              {school.description.split(' ').slice(0, 18).join(' ')}…
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {Object.entries(school.socials).map(([name, href]) => {
                const Icon = icons[name] || Globe

                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center transition"
                  >
                    <Icon className="w-3 h-3 text-orange-600" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-2 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs">
              {['Home', 'About', 'Academics', 'Admissions', 'Gallery', 'Contact'].map(p => (
                <li key={p}>
                  <NavLink
                    to={p === 'Home' ? '/' : `/${p.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-medium"
                        : "hover:text-orange-500 transition"
                    }
                  >
                    {p}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-2 text-sm">
              Contact
            </h4>

            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                {school.address}
              </li>

              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                {school.phone}
              </li>

              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                {school.email}
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-orange-100 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 text-[11px] text-gray-500 flex flex-col sm:flex-row justify-between">
          <span>© {new Date().getFullYear()} {school.name}</span>
          <span>Established {school.established}</span>
        </div>
      </div>
    </footer>
  )
}