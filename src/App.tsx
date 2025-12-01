import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import AishaCares from './pages/AishaCares'
import ProjectsImpact from './pages/ProjectsImpact'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Resources from './pages/Resources'
import UniversityTours from './pages/UniversityTours'
import FAQ from './pages/FAQ'
import TermsOfService from './pages/TermsOfService'
import PaymentSuccess from './pages/PaymentSuccess'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/aisha-cares" element={<AishaCares />} />
          <Route path="/projects-impact" element={<ProjectsImpact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/university-tours" element={<UniversityTours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/donate/success" element={<PaymentSuccess />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App

