import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // Eklendi
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import About from "../../web/src/pages/AboutPage/About";
import Skills from "../../web/src/pages/SkillsPage/Skills";
import Projects from "../../web/src/pages/ProjectsPage/Projects";
import Contact from "../../web/src/pages/ContactPage/Contact";
import VisitorMap from "./pages/VisitorPage/VisitorMap";

export default function App() {
  
  // Ziyaretçi Kayıt Sistemi (Global)
  useEffect(() => {
    const registerGlobalVisit = async () => {
      try {
        // Tarayıcı oturumu boyunca sadece bir kez kayıt atması için kontrol
        if (!sessionStorage.getItem('vMap_registered')) {
          const geoRes = await fetch('http://ip-api.com/json/');
          const geoData = await geoRes.json();

          if (geoData.lat && geoData.lon) {
            await fetch('http://localhost:5001/api/visit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                lat: geoData.lat, 
                lon: geoData.lon, 
                city: geoData.city 
              })
            });
            sessionStorage.setItem('vMap_registered', 'true');
          }
        }
      } catch (e) {
        console.log("Ziyaret kaydı yapılamadı (Backend kapalı olabilir).");
      }
    };

    registerGlobalVisit();
  }, []);

  return (
    <BrowserRouter>
      <link rel="shortcut icon" href="/apps/images/favicon.ico" type="image/x-icon" />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/visitor" element={<VisitorMap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}