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
    label: 'SCHOOL LIFE',
    submenu: [
      { to: '/activities', label: 'Activities' },
      { to: '/events/gallery', label: 'Events Gallery' },
      { to: '/events/annual', label: 'Annual Day' },
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
  { to: '/admissions', label: 'ADMISSIONS' },
  { to: '/contact', label: 'CONTACT' },
  { to: 'https://educampus360.com/', label: 'ERP LOGIN', external: true },
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

  // Styles defined here so they are accessible throughout the entire component
  const baseStyles = `px-3 py-2 h-10 flex items-center rounded-full font-body font-bold text-[12px] xl:text-[13px] tracking-wide transition-all duration-200 ease-out`
  const stateStyles = 'text-gray-700 hover:bg-[#EDE3D8]'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-[var(--top-banner)] left-0 w-full z-50 transition-all duration-500 bg-[#F9F6F1]/80 backdrop-blur-xl border-b border-[#E6D9CC]/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">

            {/* Logo (LEFT SIDE - expanded) */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <motion.img
                whileHover={{ scale: 1.06 }}
                src={logo}
                alt="Brindavan School Logo"
                className="h-20 w-auto object-contain"
              />

              <div className="hidden sm:block leading-tight">
                <div className="text-lg font-bold text-[#6B4226] leading-tight">
                  Brindavan
                </div>

                <div className="text-[12px] text-gray-600 font-medium tracking-wide">
                  School Palamaner
                </div>
              </div>
            </Link>

          {/* Desktop Nav (RIGHT SIDE - fills remaining space) */}
          <nav className="hidden lg:flex items-center gap-x-2 ml-auto h-10">
          {mainLinks.map(link => {
            const hasSubmenu = 'submenu' in link

            if (hasSubmenu) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`${baseStyles} ${stateStyles} flex items-center gap-1 leading-none`}>
                    {link.label}
                    <ChevronDown className="w-3 h-3 shrink-0" />
                  </button>

                  {/* Mega Dropdown Menu */}
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-50 mt-2 bg-[#FDF9F4]/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#E6DED5] overflow-hidden min-w-max"
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

            if (link.external || (link.to && !link.to?.startsWith('/'))) {
              return (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseStyles} ${stateStyles} whitespace-nowrap`}
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
                  `${baseStyles} ${
                    isActive
                      ? 'bg-[#EADBC8] text-[#6B4226]'
                      : stateStyles
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors text-charcoal-800"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden max-h-[85vh] overflow-y-auto bg-white text-gray-800 border-t border-gray-200 shadow-2xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {mainLinks.map((link) => {
                const hasSubmenu = 'submenu' in link
                const isOpen = openDropdown === link.label

                if (link.external || (link.to && !link.to?.startsWith('/'))) {
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 font-body font-bold text-sm border-b border-current/10 last:border-b-0"
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
                        className="w-full flex items-center justify-between py-3 px-2 font-bold text-sm"
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
                                className="block py-2 text-sm opacity-70 hover:opacity-100"
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
                      `py-3 px-2 font-bold text-sm border-b border-current/10 last:border-b-0 ${
                        isActive ? 'text-orange-500' : ''
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