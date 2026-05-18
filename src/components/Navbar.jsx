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
    ],
  },

  {
    label: 'SCHOOL LIFE',
    submenu: [
      { to: '/academic-approaches', label: 'Academic Approaches' },
      { to: '/events/gallery', label: 'Co-Curricular' },
      { to: '/events/annual', label: 'Communication & Public Speaking' },
      { to: '/events/sports', label: 'Festival Fun' },
    ],
  },

  {
    label: 'FACILITIES',
    submenu: [
      { to: '/facilities/smart-classrooms', label: 'Smart Classrooms' },
      { to: '/facilities/labs', label: 'Labs' },
      { to: '/facilities/transport', label: 'Transport' },
      { to: '/facilities/sports', label: 'Sports' },
    ],
  },

  {
    label: 'INFRASTRUCTURE',
    submenu: [
      { to: '/infrastructure/campus', label: 'Campus Overview' },
      { to: '/infrastructure/safety', label: 'Safety & Security' },
      { to: '/infrastructure/digital', label: 'Digital Learning' },
    ],
  },

  { to: '/admissions', label: 'ADMISSIONS' },
  { to: '/contact', label: 'CONTACT' },

  {
    to: 'https://educampus360.com/',
    label: 'ERP LOGIN',
    external: true,
  },
]

const navText = '#1B3A8A'
const pink = '#E91E8C'
const pinkDark = '#BE185D'
const orange = '#F97316'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed top-[var(--top-banner)] left-0 w-full z-50
          backdrop-blur-xl
          border-b
          transition-all duration-500
          ${
            scrolled
              ? 'py-2 bg-white/92 shadow-[0_10px_40px_rgba(233,30,140,0.12)]'
              : 'py-4 bg-white/75 shadow-[0_8px_30px_rgba(233,30,140,0.08)]'
          }
        `}
        style={{
          borderColor: 'rgba(233,30,140,0.12)',
        }}
      >
        {/* Top Accent */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{
            background:
              'linear-gradient(to right, #E91E8C, #F97316, #E91E8C)',
          }}
        />

        {/* Soft Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <motion.img
                src={logo}
                alt="Brindavan School Logo"
                className="h-20 w-auto object-contain"
                whileHover={{
                  scale: 1.05,
                  filter:
                    'drop-shadow(0px 8px 18px rgba(233,30,140,0.35))',
                }}
                transition={{ duration: 0.25 }}
              />

              <div className="hidden sm:block leading-tight">
                <h2
                  className="text-lg font-bold"
                  style={{ color: navText }}
                >
                  Brindavan
                </h2>

                <p
                  className="text-[12px] font-semibold tracking-wide"
                  style={{ color: pink }}
                >
                  School Palamaner
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-auto">

              {mainLinks.map((link) => {
                const hasSubmenu = !!link.submenu

                /* -----------------------------------------
                   DROPDOWN MENU
                ----------------------------------------- */
                if (hasSubmenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="relative px-4 py-2 rounded-full flex items-center gap-1 text-[13px] font-bold transition-all duration-300"
                        style={{
                          color:
                            openDropdown === link.label
                              ? pink
                              : navText,
                        }}
                      >
                        {link.label}

                        <motion.div
                          animate={{
                            rotate:
                              openDropdown === link.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>

                        {openDropdown === link.label && (
                          <motion.span
                            layoutId="navbar-pill"
                            className="absolute inset-0 rounded-full -z-10"
                            style={{
                              background:
                                'linear-gradient(135deg, #FFF0F7, #FFF7ED)',
                              border:
                                '1px solid rgba(233,30,140,0.18)',
                            }}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.96,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 8,
                              scale: 0.96,
                            }}
                            transition={{ duration: 0.22 }}
                            className="absolute top-full left-0 mt-3 min-w-[240px] overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl"
                            style={{
                              border:
                                '1px solid rgba(233,30,140,0.12)',
                            }}
                          >
                            <div
                              className="h-[2px]"
                              style={{
                                background:
                                  'linear-gradient(90deg, #E91E8C, #F97316)',
                              }}
                            />

                            <div className="p-2">
                              {link.submenu.map((item, index) => (
                                <motion.div
                                  key={item.to}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: index * 0.04,
                                  }}
                                >
                                  <Link
                                    to={item.to}
                                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                                    style={{ color: navText }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background =
                                        'linear-gradient(135deg, #FFF0F7, #FFF7ED)'
                                      e.currentTarget.style.color = pink
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background =
                                        'transparent'
                                      e.currentTarget.style.color = navText
                                    }}
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

                /* -----------------------------------------
                   ERP LOGIN BUTTON
                ----------------------------------------- */
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 px-5 py-2 rounded-full text-white text-[13px] font-bold transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          'linear-gradient(135deg, #E91E8C, #F97316)',
                        boxShadow:
                          '0 6px 20px rgba(233,30,140,0.28)',
                      }}
                    >
                      {link.label}
                    </a>
                  )
                }

                /* -----------------------------------------
                   NORMAL NAV LINKS
                ----------------------------------------- */
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className="relative px-4 py-2 text-[13px] font-bold"
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className="relative z-10 transition-colors duration-300"
                          style={{
                            color: isActive ? pink : navText,
                          }}
                        >
                          {link.label}
                        </span>

                        {isActive && (
                          <motion.span
                            layoutId="navbar-pill"
                            className="absolute inset-0 rounded-full"
                            style={{
                              background:
                                'linear-gradient(135deg, #FFF0F7, #FFF7ED)',
                              border:
                                '1px solid rgba(233,30,140,0.18)',
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 500,
                              damping: 35,
                            }}
                          />
                        )}

                        {!isActive && (
                          <span
                            className="absolute left-4 bottom-1 h-[2px] w-0 group-hover:w-[calc(100%-2rem)] transition-all duration-300"
                            style={{
                              background:
                                'linear-gradient(90deg, #E91E8C, #F97316)',
                            }}
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
              className="lg:hidden p-2 rounded-xl"
              style={{ color: pink }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
              style={{
                borderColor: 'rgba(233,30,140,0.12)',
              }}
            >
              <div
                className="h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, #E91E8C, #F97316)',
                }}
              />

              <nav className="px-4 py-4 flex flex-col gap-2">

                {mainLinks.map((link) => {
                  const hasSubmenu = !!link.submenu
                  const isOpen = openDropdown === link.label

                  if (link.external) {
                    return (
                      <a
                        key={link.label}
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-xl text-white font-bold text-sm"
                        style={{
                          background:
                            'linear-gradient(135deg, #E91E8C, #F97316)',
                        }}
                      >
                        {link.label}
                      </a>
                    )
                  }

                  if (hasSubmenu) {
                    return (
                      <div
                        key={link.label}
                        className="border-b pb-2"
                        style={{
                          borderColor:
                            'rgba(233,30,140,0.10)',
                        }}
                      >
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              isOpen ? null : link.label
                            )
                          }
                          className="w-full flex items-center justify-between py-3 text-sm font-bold"
                          style={{
                            color: isOpen ? pink : navText,
                          }}
                        >
                          {link.label}

                          <motion.div
                            animate={{
                              rotate: isOpen ? 180 : 0,
                            }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: 'auto',
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              className="overflow-hidden pl-4 space-y-1"
                            >
                              {link.submenu.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setOpenDropdown(null)
                                  }}
                                  className="block py-2 text-sm transition-colors duration-200"
                                  style={{ color: pink }}
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
                      className="py-3 text-sm font-bold border-b"
                      style={({ isActive }) => ({
                        color: isActive ? pink : navText,
                        borderColor:
                          'rgba(233,30,140,0.10)',
                      })}
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
    </>
  )
}