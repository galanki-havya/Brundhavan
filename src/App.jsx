import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import SchoolActivities from './pages/SchoolActivities'
import ActivityDetail from './pages/ActivityDetail'
import Facilities from './pages/Facilities'
import Admissions from './pages/Admissions'
import AdmissionForm from './pages/AdmissionForm'
import Gallery from './pages/events/Gallery'
import GalleryDetail from './pages/events/GalleryDetail'
import AlbumPage from './pages/gallery/AlbumPage'
import GalleryDetails from './pages/gallery/GalleryDetails'
import Contact from './pages/Contact'
import Infrastructure from './pages/Infrastructure'
import WhatsAppButton from './components/WhatsAppButton'

// About subpages
import Overview from './pages/about/Overview'
import VisionMission from './pages/about/VisionMission'
import ChairmanMessage from './pages/about/ChairmanMessage'
import Achievements from './pages/about/Achievements'

// Academics subpages
import Curriculum from './pages/academics/Curriculum'
import Methodology from './pages/academics/Methodology'
import PrePrimary from './pages/academics/PrePrimary'
import Primary from './pages/academics/Primary'
import Secondary from './pages/academics/Secondary'

// Facilities subpages
import SmartClassrooms from './pages/facilities/SmartClassrooms'
import Labs from './pages/facilities/Labs'
import Library from './pages/facilities/Library'
import Transport from './pages/facilities/Transport'
import Sports from './pages/facilities/Sports'

// Infrastructure subpages
import Campus from './pages/infrastructure/Campus'
import Safety from './pages/infrastructure/Safety'
import Digital from './pages/infrastructure/Digital'

// Events subpages
import EventsGallery from './pages/events/Gallery'
import Annual from './pages/events/Annual'
import News from './pages/events/News'
import GlobalBackground from './components/GlobalBackground'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <GlobalBackground>
      <HashRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/chairman" element={<ChairmanMessage />} />
            <Route path="/about/achievements" element={<Achievements />} />
            <Route path="/school-life" element={<SchoolActivities />} />
            <Route path="/activities" element={<SchoolActivities />} />
            <Route path="/activity/:id" element={<ActivityDetail />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/facilities/smart-classrooms" element={<SmartClassrooms />} />
            <Route path="/facilities/labs" element={<Labs />} />
            <Route path="/facilities/library" element={<Library />} />
            <Route path="/facilities/transport" element={<Transport />} />
            <Route path="/facilities/sports" element={<Sports />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/infrastructure/campus" element={<Campus />} />
            <Route path="/infrastructure/safety" element={<Safety />} />
            <Route path="/infrastructure/digital" element={<Digital />} />
            <Route path="/events" element={<Navigate to="/activities" replace />} />
            <Route path="/events/gallery" element={<EventsGallery />} />
            <Route path="/events/annual" element={<Annual />} />
            <Route path="/events/news" element={<News />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admission-form" element={<AdmissionForm />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:folder" element={<GalleryDetail />} />
            <Route path="/gallery/:slug" element={<AlbumPage />} />
            <Route path="/gallery/:category" element={<GalleryDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </GlobalBackground>
  )
}
