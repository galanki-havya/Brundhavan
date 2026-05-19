import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const mainLinks = [
  { to: '/', label: 'Home' },
  {
    label: 'About Us',
    submenu: [
      { to: '/about/overview', label: 'Overview' },
      { to: '/about/vision-mission', label: 'Vision & Mission' },
      { to: '/about/chairman', label: 'Management Message' },
      { to: '/about/achievements', label: 'Achievements' },
    ],
  },
  {
    label: 'School Life',
    submenu: [
      { to: '/academic-approaches', label: 'Academic Approaches' },
      { to: '/events/gallery', label: 'Co-Curricular' },
      { to: '/events/annual', label: 'Communication & Public Speaking' },
      { to: '/events/annual', label: 'Festival Fun' },
    ],
  },
  {
    label: 'Facilities',
    submenu: [
      { to: '/facilities/smart-classrooms', label: 'Smart Classrooms' },
      { to: '/facilities/labs', label: 'Labs' },
      { to: '/facilities/transport', label: 'Transport' },
      { to: '/facilities/sports', label: 'Sports' },
    ],
  },
  {
    label: 'Infrastructure',
    submenu: [
      { to: '/infrastructure/safety', label: 'Safety & Security' },
      { to: '/infrastructure/digital', label: 'Digital Learning' },
    ],
  },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
  { to: 'https://educampus360.com/', label: 'ERP Login', external: true },
]

const NAVY = '#1B3A8A'
const PINK = '#E91E8C'
const ORANGE = '#F97316'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-link-item {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: ${NAVY};
          padding: 6px 14px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: linear-gradient(90deg, ${PINK}, ${ORANGE});
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          border-radius: 2px;
        }
        .nav-link-item:hover { color: ${PINK}; }
        .nav-link-item:hover::after,
        .nav-link-item.active-link::after { transform: scaleX(1); }
        .nav-link-item.active-link { color: ${PINK}; }

        .erp-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: ${NAVY};
          padding: 6px 14px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s;
        }
        .erp-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: linear-gradient(90deg, ${PINK}, ${ORANGE});
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          border-radius: 2px;
        }
        .erp-link:hover { color: ${PINK}; }
        .erp-link:hover::after { transform: scaleX(1); }

        .dropdown-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: ${NAVY};
          padding: 6px 14px;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          white-space: nowrap;
          transition: color 0.25s;
        }
        .dropdown-btn::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: linear-gradient(90deg, ${PINK}, ${ORANGE});
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          border-radius: 2px;
        }
        .dropdown-btn.open,
        .dropdown-btn:hover { color: ${PINK}; }
        .dropdown-btn.open::after,
        .dropdown-btn:hover::after { transform: scaleX(1); }

        .dropdown-item {
          display: block;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: #374151;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.18s, color 0.18s, padding-left 0.22s;
          border-left: 2px solid transparent;
          white-space: nowrap;
        }
        .dropdown-item:hover {
          background: #FFF4F9;
          color: ${PINK};
          padding-left: 24px;
          border-left-color: ${PINK};
        }

        .school-name {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 17px;
          color: ${NAVY};
          line-height: 1.1;
          letter-spacing: 0.2px;
        }
        .school-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${PINK};
          margin-top: 2px;
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(233,30,140,0.25) 20%, rgba(249,115,22,0.25) 80%, transparent);
          margin: 0 8px;
        }

        .mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${NAVY};
          padding: 13px 20px;
          display: block;
          border-bottom: 1px solid rgba(233,30,140,0.08);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-link:hover { color: ${PINK}; background: #FFF4F9; }

        .mobile-erp-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${NAVY};
          padding: 13px 20px;
          display: block;
          border-bottom: 1px solid rgba(233,30,140,0.08);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-erp-link:hover { color: ${PINK}; background: #FFF4F9; }

        .mobile-sub-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6B7280;
          padding: 10px 20px 10px 36px;
          display: block;
          text-decoration: none;
          border-bottom: 1px solid rgba(233,30,140,0.05);
          transition: color 0.2s;
        }
        .mobile-sub-link:hover { color: ${PINK}; }

        .mobile-section-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: ${NAVY};
          padding: 13px 20px;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(233,30,140,0.08);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.2s;
        }
        .mobile-section-btn.open { color: ${PINK}; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 'var(--top-banner, 0)',
          left: 0,
          width: '100%',
          zIndex: 50,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: scrolled
            ? '0 2px 24px rgba(27,58,138,0.10), 0 1px 0 rgba(233,30,140,0.08)'
            : '0 1px 0 rgba(233,30,140,0.07)',
          transition: 'box-shadow 0.4s, background 0.4s',
        }}
      >
        <div style={{ height: 3, background: `linear-gradient(90deg, ${PINK} 0%, ${ORANGE} 50%, ${PINK} 100%)` }} />

        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 80,
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <motion.img
              src={logo}
              alt="Brindavan School"
              style={{ height: 62, width: 'auto', objectFit: 'contain' }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.22 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="school-name">Brindavan</span>
              <span className="school-tagline">School Palamaner</span>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 0, marginLeft: 'auto' }} className="desktop-nav">
            {mainLinks.map((link) => {
              if (link.external) {
                return (
                  <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="erp-link">
                    {link.label}
                  </a>
                )
              }

              if (link.submenu) {
                const isOpen = openDropdown === link.label
                return (
                  <div
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className={`dropdown-btn${isOpen ? ' open' : ''}`}>
                      {link.label}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scaleY: 0.94 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: 6, scaleY: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 10px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            transformOrigin: 'top center',
                            background: '#fff',
                            borderRadius: 10,
                            boxShadow: '0 8px 40px rgba(27,58,138,0.13), 0 2px 8px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(233,30,140,0.1)',
                            minWidth: 220,
                            overflow: 'hidden',
                            zIndex: 100,
                          }}
                        >
                          <div style={{ height: 2, background: `linear-gradient(90deg, ${PINK}, ${ORANGE})` }} />
                          <div style={{
                            padding: '10px 20px 6px',
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: '1.6px',
                            textTransform: 'uppercase',
                            color: '#9CA3AF',
                          }}>
                            {link.label}
                          </div>
                          <div className="divider-line" style={{ marginBottom: 4 }} />
                          <div style={{ padding: '4px 8px 10px' }}>
                            {link.submenu.map((item, i) => (
                              <motion.div
                                key={item.to}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.18 }}
                              >
                                <Link to={item.to} className="dropdown-item">{item.label}</Link>
                              </motion.div>
                            ))}
                          </div>
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
                  className={({ isActive }) => `nav-link-item${isActive ? ' active-link' : ''}`}
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              background: 'none',
              border: `1.5px solid rgba(233,30,140,0.25)`,
              borderRadius: 8,
              cursor: 'pointer',
              color: PINK,
            }}
            className="hamburger-btn"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden', borderTop: `1px solid rgba(233,30,140,0.1)`, background: '#fff' }}
            >
              {mainLinks.map((link) => {
                if (link.external) {
                  return (
                    <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="mobile-erp-link">
                      {link.label}
                    </a>
                  )
                }

                if (link.submenu) {
                  const isOpen = mobileExpanded === link.label
                  return (
                    <div key={link.label}>
                      <button
                        className={`mobile-section-btn${isOpen ? ' open' : ''}`}
                        onClick={() => setMobileExpanded(isOpen ? null : link.label)}
                      >
                        {link.label}
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }} style={{ display: 'flex' }}>
                          <ChevronDown size={15} color={isOpen ? PINK : '#9CA3AF'} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            style={{ overflow: 'hidden', background: '#FAFAFA' }}
                          >
                            {link.submenu.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="mobile-sub-link"
                                onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
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
                    className="mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}