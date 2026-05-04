import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'   // ✅ correct path

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ✅ Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Brundavan School Logo"
            className="h-10 w-auto"
          />

          <div>
            <div
              className={`font-display font-bold text-lg leading-tight transition-colors ${
                scrolled ? 'text-charcoal-900' : 'text-white'
              }`}
            >
              Brundavan School
            </div>
            <div
              className={`text-xs font-body transition-colors ${
                scrolled ? 'text-primary-600' : 'text-primary-300'
              }`}
            >
              Nurturing Excellence
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-body font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-sm'
                    : scrolled
                    ? 'text-charcoal-800 hover:bg-primary-50 hover:text-primary-700'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="ml-3 btn-primary text-sm py-2 px-5"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? 'text-charcoal-800' : 'text-white'
          }`}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 ${mobileOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block h-0.5 ${mobileOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block h-0.5 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'bg-black' : 'bg-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-charcoal-800 hover:bg-primary-50"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
