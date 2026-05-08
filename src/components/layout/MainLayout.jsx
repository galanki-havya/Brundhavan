import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AdmissionsBanner from '../AdmissionsBanner'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <AdmissionsBanner />
      <Navbar />

      <main className="page-offset flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
