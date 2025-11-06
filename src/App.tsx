import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

