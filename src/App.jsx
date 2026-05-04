import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import GalleryPage from './pages/GalleryPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
