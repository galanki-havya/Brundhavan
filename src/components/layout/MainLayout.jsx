import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AdmissionsBanner from '../AdmissionsBanner'
import GlobalBackground from '../GlobalBackground'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }, [pathname])

  return (
    <GlobalBackground>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-transparent">
        <header>
          <AdmissionsBanner />
          <Navbar />
        </header>

        <main id="main-content" role="main" className="page-offset flex-grow w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </GlobalBackground>
  )
}
