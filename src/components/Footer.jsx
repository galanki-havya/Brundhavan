import { NavLink } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { siteData } from '../data/site'

const { school } = siteData

export default function Footer() {
  const icons = {
    instagram: FaInstagram,
    youtube: FaYoutube,
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#3B2416] via-[#5C3A21] to-[#2A1A12] text-white border-t border-[#8B5E3C]/40">

      {/* TOP CURVE */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
          <path
            d="M0,80 C240,0 480,140 720,80 C960,20 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#3B2416"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-10 md:pt-14 pb-8 md:pb-10">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">

          {/* BRAND SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#5C3A21] rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-[#EAD7C5] font-bold">B</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  {school.name}
                </h3>
                <p className="text-[#EAD7C5] text-xs font-medium">
                  {school.affiliation}
                </p>
              </div>
            </div>

            <p className="text-[#D8C2AF] leading-relaxed mb-3 text-sm">
              {school.description.split(' ').slice(0, 22).join(' ')}…
            </p>

            <p className="text-[#CBB3A0] mb-5 text-xs">
              Empowering students with discipline, knowledge, and values for a better future.
            </p>

            {/* SOCIAL */}
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
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-md"
                  >
                    <Icon className="w-4 h-4 text-[#F3E4D4]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[#EAD7C5] font-semibold mb-4 text-sm md:text-base">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-sm transition group ${
                        isActive
                          ? 'text-[#F3E4D4] font-semibold'
                          : 'text-[#D8C2AF] hover:text-[#EAD7C5]'
                      }`
                    }
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-60 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[#EAD7C5] font-semibold mb-4 text-sm md:text-base">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm text-[#D8C2AF]">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#EAD7C5] shrink-0 mt-1" />
                <span>{school.address}</span>
              </li>

              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#EAD7C5] shrink-0" />
                <a href={`tel:${school.phone}`} className="hover:text-[#EAD7C5]">
                  {school.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#EAD7C5] shrink-0" />
                <a href={`mailto:${school.email}`} className="hover:text-[#EAD7C5]">
                  {school.email}
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* ================= NEWSLETTER CTA ================= */}
        <div className="mt-8 bg-white border border-gold-100 rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <h4 className="text-charcoal-900 font-bold">
              Stay Connected with Us
            </h4>
            <p className="text-sm text-charcoal-500">
              Get admission updates, events, and school news
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              placeholder="Enter email address"
              className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-gold-100 text-sm focus:ring-2 focus:ring-gold-400 outline-none"
            />
            <button className="bg-primary-700 hover:bg-primary-800 text-white px-5 py-2 rounded-lg text-sm transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR (DARK PREMIUM) ================= */}
      <div className="border-t border-white/10 bg-[#2A1A12]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5 flex flex-col sm:flex-row justify-between text-xs md:text-sm text-[#CBB3A0]">

          <span>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </span>

          <span className="mt-1 sm:mt-0 text-[#A88974]">
            Designed for excellence in education
          </span>

        </div>
      </div>
    </footer>
  )
}