import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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
      { to: '/events/academic-approach', label: 'Academic Approaches' },
      { to: '/events/co-curricular', label: 'Co-Curricular' },
      { to: '/events/communication-public-speaking', label: 'Communication & Public Speaking' },
      { to: '/events/festival-fun', label: 'Festival Fun' },

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

// Pure Light Theme Custom Palette
const LIGHT_BG = '#ffffff'          // Forced solid white background
const DARK_SURFACE = '#111827'     // Sleek slate container surface for popups/dropdowns
const ACCENT_ORANGE = '#EA580C'    // Primary active/highlight orange tint
const ACCENT_MUTED = '#6B7280'     // Subdued slate gray for secondary labels
const TEXT_DARK = '#111827'        // High-contrast deep gray for primary links text
const BORDER_LIGHT = 'rgba(0, 0, 0, 0.06)'

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@400;500;600&display=swap');

  /* Modern Boxed Square/Capsule Nav Items */
  .nav-item-wrapper {
    display: flex;
    align-items: center;
    padding: 0 2px;
  }

  .nav-link-item, .dropdown-btn, .erp-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: ${TEXT_DARK};
    padding: 8px 16px;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 6px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  /* Hover & Active States inside a sharp solid box layout */
  .nav-link-item:hover, .dropdown-btn:hover, .erp-link:hover {
    color: ${ACCENT_ORANGE};
    background: rgba(234, 88, 12, 0.06);
    border-color: rgba(234, 88, 12, 0.12);
  }

  .nav-link-item.active-link, 
  .dropdown-btn.active-branch {
    color: #ffffff !important;
    background: ${ACCENT_ORANGE} !important;
    border-color: ${ACCENT_ORANGE};
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(234, 88, 12, 0.2);
  }

  /* Exact Sharp Box Dropdown Window from Reference Setup */
  .dropdown-item {
    display: block;
    padding: 10px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 400;
    color: #374151;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.18s ease;
    white-space: nowrap;
    border-left: 3px solid transparent;
  }
  
  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.04);
    color: ${ACCENT_ORANGE};
    border-left-color: ${ACCENT_ORANGE};
    padding-left: 20px;
  }

  .dropdown-item.sub-active {
    background: rgba(234, 88, 12, 0.1);
    color: ${ACCENT_ORANGE};
    font-weight: 500;
    border-left-color: ${ACCENT_ORANGE};
  }

  .school-name {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: 19px;
    color: ${TEXT_DARK};
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  .school-tagline {
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${ACCENT_ORANGE};
    margin-top: 2px;
  }

  /* Mobile Layout Overhauls */
  .mobile-link, .mobile-erp-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${TEXT_DARK};
    padding: 14px 20px;
    display: block;
    border-bottom: 1px solid ${BORDER_LIGHT};
    text-decoration: none;
    transition: all 0.2s;
  }
  .mobile-link:hover, .mobile-erp-link:hover { 
    color: ${ACCENT_ORANGE}; 
    background: rgba(234, 88, 12, 0.04); 
  }

  .mobile-sub-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: ${ACCENT_MUTED};
    padding: 11px 20px 11px 36px;
    display: block;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.02);
  }
  .mobile-sub-link.active { 
    color: ${ACCENT_ORANGE}; 
    font-weight: 500; 
    background: rgba(234, 88, 12, 0.04); 
  }

  .mobile-section-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${TEXT_DARK};
    padding: 14px 20px;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    border-bottom: 1px solid ${BORDER_LIGHT};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .desktop-nav { display: none !important; }
    .hamburger-btn { display: flex !important; }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)
  const location = useLocation()

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
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  const isBranchActive = (link) => {
    if (link.to === '/') return location.pathname === '/'
    if (link.to) return location.pathname === link.to
    if (link.submenu) {
      return link.submenu.some(item => location.pathname === item.to)
    }
    return false
  }

  return (
    <>
      <style>{customStyles}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 'var(--top-banner, 0)',
          left: 0,
          width: '100%',
          zIndex: 50,
          background: LIGHT_BG,
          borderBottom: `1px solid ${BORDER_LIGHT}`,
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.04)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Accent Branding Top Ribbon */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, #F97316 100%)` }} />

        <div style={{
          maxWidth: 1340,
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
              style={{ height: 56, width: 'auto', objectFit: 'contain' }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="school-name">BRINDAVAN</span>
              <span className="school-tagline">School Palamaner</span>
            </div>
          </Link>

          {/* Desktop Links Container */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }} className="desktop-nav">
            {mainLinks.map((link) => {
              if (link.external) {
                return (
                  <div className="nav-item-wrapper" key={link.label}>
                    <a href={link.to} target="_blank" rel="noopener noreferrer" className="erp-link">
                      {link.label}
                    </a>
                  </div>
                )
              }

              if (link.submenu) {
                const isHovered = openDropdown === link.label
                const isActive = isBranchActive(link)
                
                return (
                  <div
                    className="nav-item-wrapper"
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className={`dropdown-btn ${isActive ? 'active-branch' : ''}`}>
                      {link.label}
                      <motion.span
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    {/* Desktop Dropdown Box Wrapper */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 4px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#ffffff',
                            borderRadius: 6,
                            border: '1px solid rgba(0,0,0,0.08)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.07)',
                            padding: '6px',
                            minWidth: 240,
                            zIndex: 100,
                          }}
                        >
                          {link.submenu.map((item) => {
                            const isSubActive = location.pathname === item.to
                            return (
                              <Link 
                                key={item.to} 
                                to={item.to} 
                                className={`dropdown-item ${isSubActive ? 'sub-active' : ''}`}
                              >
                                {item.label}
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <div className="nav-item-wrapper" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `nav-link-item${isActive ? ' active-link' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </div>
              )
            })}
          </nav>

          {/* Mobile Menu Toggle button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              background: 'rgba(0,0,0,0.02)',
              border: `1px solid ${BORDER_LIGHT}`,
              borderRadius: 6,
              cursor: 'pointer',
              color: TEXT_DARK,
            }}
            className="hamburger-btn"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex' }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Dropdown Panel Drawer - Preserved White Fill */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', borderTop: `1px solid ${BORDER_LIGHT}`, background: LIGHT_BG }}
            >
              <div style={{ paddingBottom: 16, maxHeight: 'calc(100vh - 84px)', overflowY: 'auto' }}>
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
                          className="mobile-section-btn"
                          style={{ color: isOpen ? ACCENT_ORANGE : TEXT_DARK }}
                          onClick={() => setMobileExpanded(isOpen ? null : link.label)}
                        >
                          {link.label}
                          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'flex' }}>
                            <ChevronDown size={15} color={isOpen ? ACCENT_ORANGE : ACCENT_MUTED} />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ overflow: 'hidden', background: 'rgba(0,0,0,0.015)' }}
                            >
                              {link.submenu.map((item) => {
                                const isSubActive = location.pathname === item.to
                                return (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`mobile-sub-link ${isSubActive ? 'active' : ''}`}
                                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                  >
                                    {item.label}
                                  </Link>
                                )
                              })}
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
                      style={({ isActive }) => ({ color: isActive ? ACCENT_ORANGE : TEXT_DARK, fontWeight: isActive ? '600' : '500' })}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}