import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'

const mainLinks = [
  { to: '/', label: 'HOME' },
  {
    label: 'ABOUT US',
    submenu: [
      { to: '/about/overview', label: 'Overview' },
      { to: '/about/vision-mission', label: 'Vision & Mission' },
      { to: '/about/chairman', label: 'Management Message' },
      { to: '/about/achievements', label: 'Achievements' },
    ]
  },
  {
    label: 'ACADEMICS',
    submenu: [
      { to: '/academics/curriculum', label: 'Curriculum' },
      { to: '/academics/methodology', label: 'Teaching Methodology' },
      { to: '/academics/pre-primary', label: 'Pre-Primary' },
      { to: '/academics/primary', label: 'Primary' },
      { to: '/academics/secondary', label: 'Secondary' },
    ]
  },
  {
    label: 'FACILITIES',
    submenu: [
      { to: '/facilities/smart-classrooms', label: 'Smart Classrooms' },
      { to: '/facilities/labs', label: 'Labs' },
      { to: '/facilities/library', label: 'Library' },
      { to: '/facilities/transport', label: 'Transport' },
      { to: '/facilities/sports', label: 'Sports' },
    ]
  },
  {
    label: 'INFRASTRUCTURE',
    submenu: [
      { to: '/infrastructure/campus', label: 'Campus Overview' },
      { to: '/infrastructure/safety', label: 'Safety & Security' },
      { to: '/infrastructure/digital', label: 'Digital Learning' },
    ]
  },
  {
    label: 'EVENTS',
    submenu: [
      { to: '/events/gallery', label: 'Gallery' },
      { to: '/events/annual', label: 'Annual Events' },
      { to: '/events/news', label: 'News & Updates' },
    ]
  },
  { to: '/admissions', label: 'ADMISSIONS' },
  { to: '/contact', label: 'CONTACT' },
  { to: 'https://educampus360.com/', label: 'ERP LOGIN' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-[40px] left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-black/60 backdrop-blur-lg'
      } h-[var(--top-navbar-mobile)] md:h-[var(--top-navbar-desktop)]`}
    >
      {/* Gradient overlay for better contrast over video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-0"></div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={logo}
            alt="Brundavan School Logo"
            className="h-10 w-auto"
          />
          <div>
            <div className={`font-display font-bold text-lg leading-tight transition-colors ${
              scrolled ? 'text-charcoal-900' : 'text-white drop-shadow-md'
            }`}>
              Brundavan
            </div>
            <div className={`text-xs font-body transition-colors ${
              scrolled ? 'text-charcoal-500' : 'text-white/80 drop-shadow-sm'
            }`}>
              School
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainLinks.map(link => {
            const hasSubmenu = 'submenu' in link

            if (hasSubmenu) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`relative px-3 md:px-4 py-2 rounded-full font-body font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-1 ${
                    scrolled
                      ? 'text-charcoal-800 hover:text-[#8B5E3C] hover:bg-[#F7F3EE]'
                      : 'text-white drop-shadow-lg hover:text-white hover:bg-white/10'
                  }`}>
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {/* Mega Dropdown Menu */}
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden min-w-max"
                      >
                        <div className="p-2">
                          {link.submenu.map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                to={item.to}
                                className="block px-4 py-3 text-charcoal-800 hover:bg-[#F7F3EE] hover:text-[#8B5E3C] font-body text-sm transition-all duration-300 rounded-lg hover:shadow-md"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 text-white bg-red-600 hover:bg-red-700 shadow-md"
                >
                  {link.label}
                </a>
              )
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 md:px-4 py-2 rounded-full font-body font-medium text-sm md:text-base transition-all duration-300 ${
                    isActive
                      ? scrolled ? 'text-[#8B5E3C] bg-[#F7F3EE]' : 'text-gold-400 bg-white/10'
                      : scrolled
                      ? 'text-charcoal-800 hover:text-[#8B5E3C] hover:bg-[#F7F3EE]'
                      : 'text-white drop-shadow-lg hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-charcoal-800' : 'text-white'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden max-h-[85vh] overflow-y-auto ${
              scrolled
                ? 'bg-white/95 text-charcoal-800 border-t border-charcoal-200'
                : 'bg-primary-900/95 text-white border-t border-primary-800/50'
            } backdrop-blur-xl shadow-2xl`}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {mainLinks.map((link) => {
                const hasSubmenu = 'submenu' in link
                const isOpen = openDropdown === link.label

                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 font-body font-semibold text-sm text-red-500 border-b border-current/10 hover:text-red-600 transition"
                    >
                      {link.label}
                    </a>
                  )
                }

                if (hasSubmenu) {
                  return (
                    <div key={link.label} className="border-b border-current/10 last:border-b-0">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        className="w-full flex items-center justify-between py-3 font-medium text-sm"
                      >
                        {link.label}
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pb-2 space-y-1"
                          >
                            {link.submenu.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-current/70 hover:text-gold-500"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `py-3 font-medium text-sm border-b border-current/10 last:border-b-0 ${
                        isActive ? 'text-gold-500' : 'text-current/90'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

