import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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

// Shared base for non-NavLink items (dropdowns, external, ERP)
// NavLinks get their own className for the underline pattern
const baseStyles = `px-3 py-2 h-10 flex items-center rounded-full font-body font-bold text-[12px] xl:text-[13px] tracking-wide transition-all duration-200 ease-out`
const stateStyles = 'text-primary-700 hover:bg-primary-50'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  // useLocation causes NavLink re-render on route change,
  // ensuring layoutId animation triggers on every navigation
  const location = useLocation()

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
      // Upgrade 1: scroll shrink + stronger blur/opacity when scrolled
      // py shrinks, bg becomes slightly more opaque for readability
      className={`
        fixed top-[var(--top-banner)] left-0 w-full z-50
        transition-all duration-500 ease-out
        backdrop-blur-xl
        border-b border-primary-100/60
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        ${scrolled
          ? 'py-1.5 bg-background/85'   // scrolled: tighter + more opaque
          : 'py-4   bg-background/70'   // resting: airy floating glass
        }
      `}
    >
      {/* Upgrade 6: top accent line — Royal Blue → Gold → Royal Blue, opacity-90 */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-600 via-secondary-400 to-primary-600 opacity-90" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">

            {/* Logo — Upgrade 5: blue drop-shadow glow on hover */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <motion.img
                src={logo}
                alt="Brindavan School Logo"
                className="h-20 w-auto object-contain"
                whileHover={{
                  scale: 1.08,
                  filter: "drop-shadow(0px 6px 12px rgba(30,79,163,0.25))",
                }}
                transition={{ duration: 0.2 }}
              />
              <div className="hidden sm:block leading-tight">
                <div className="text-lg font-bold text-primary-800 leading-tight">
                  Brindavan
                </div>
                <div className="text-[12px] text-primary-500 font-medium tracking-wide">
                  School Palamaner
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-x-1 ml-auto h-10">
              {mainLinks.map(link => {
                const hasSubmenu = 'submenu' in link

                // ── Dropdown trigger ──────────────────────────────────────
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
                        <motion.span
                          animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3 h-3 shrink-0" />
                        </motion.span>
                      </button>

                      {/* Upgrade 3: premium dropdown — deeper y entry, scale, stronger shadow */}
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0,  scale: 1    }}
                            exit={  { opacity: 0, y: 10,  scale: 0.96 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="
                              absolute top-full left-0 z-50 mt-3
                              bg-white/95 backdrop-blur-xl
                              rounded-2xl shadow-2xl
                              border border-primary-100
                              overflow-hidden min-w-max
                            "
                          >
                            <div className="p-2">
                              {link.submenu.map((item, i) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0  }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {/* Upgrade 4: dropdown item hover */}
                                  <Link
                                    to={item.to}
                                    className="
                                      block px-4 py-3
                                      text-primary-800
                                      hover:bg-primary-50
                                      hover:text-primary-700
                                      font-body text-sm
                                      transition-all duration-300
                                      rounded-lg
                                    "
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

                // ── External link (ERP LOGIN etc.) ────────────────────────
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

                // ── NavLink — Marigold-style sliding pill indicator ──────
                // layoutId="navbar-indicator" is the key:
                //   Framer Motion tracks ONE shared element across all NavLinks.
                //   When the active route changes, the pill smoothly springs
                //   from the old active item to the new one — no JS position
                //   math needed, the layout engine handles it automatically.
                //
                // Hover: gold underline still grows (non-active items)
                // Active: pill slides in via spring, label lifts to z-10
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className="relative group px-3 py-2 h-10 flex items-center font-body font-bold text-[12px] xl:text-[13px] tracking-wide transition-colors duration-200"
                  >
                    {({ isActive }) => (
                      <>
                        {/* Label — z-10 so it sits above the pill */}
                        <span className={`relative z-10 ${isActive ? 'text-primary-800' : 'text-primary-700'}`}>
                          {link.label}
                        </span>

                        {/* Sliding pill — shared layoutId, springs between active links */}
                        {isActive && (
                          <motion.span
                            layoutId="navbar-indicator"
                            className="
                              absolute inset-0 rounded-full
                              bg-primary-50 border border-primary-200
                              z-0
                            "
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }}
                          />
                        )}

                        {/* Hover underline — gold, only on inactive items */}
                        {!isActive && (
                          <span className="
                            absolute left-3 bottom-0.5 h-[2px] w-0
                            bg-secondary-400
                            group-hover:w-[calc(100%-1.5rem)]
                            transition-all duration-300 ease-out
                            rounded-full
                          " />
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
              className="lg:hidden p-2 rounded-lg transition-colors text-primary-800"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0   }}
                  exit={  { opacity: 0, rotate: 90   }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

          </div>
        </div>
      </div>

      {/* Mobile Menu — unchanged from previous version */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={  { opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden max-h-[85vh] overflow-y-auto bg-white text-primary-800 border-t border-primary-100 shadow-2xl"
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
                      className="py-3 px-2 font-body font-bold text-sm text-primary-700 border-b border-primary-100 last:border-b-0"
                    >
                      {link.label}
                    </a>
                  )
                }

                if (hasSubmenu) {
                  return (
                    <div key={link.label} className="border-b border-primary-100 last:border-b-0">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        className="w-full flex items-center justify-between py-3 px-2 font-bold text-sm text-primary-800"
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
                            exit={  { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pb-2 space-y-1"
                          >
                            {link.submenu.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-primary-600 hover:text-primary-800 transition-colors"
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
                      `py-3 px-2 font-bold text-sm border-b border-primary-100 last:border-b-0 ${
                        isActive ? 'text-primary-700' : 'text-primary-800'
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