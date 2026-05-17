import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop
 * ───────────
 * Place this ONCE inside <BrowserRouter> (in App.jsx or main.jsx),
 * above your <Routes>. It listens for pathname changes and scrolls
 * the window back to (0, 0) instantly before the new page renders.
 *
 * No JSX output — purely a side-effect component.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()


  useEffect(() => {
    // Reset window itself
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Also reset every scrollable element in the DOM —
    // needed when GlobalBackground / MainLayout has overflow-y: auto/scroll
    const scrollables = document.querySelectorAll(
      '*:not(script):not(style)'
    )
    scrollables.forEach(el => {
      if (el.scrollTop > 0) {
        el.scrollTop = 0
      }
    })
  }, [pathname])

  return null
}
