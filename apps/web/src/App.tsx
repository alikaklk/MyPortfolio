import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import VisitorMap from "./pages/VisitorPage/VisitorMap";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";

export default function App() {
  useEffect(() => {
    const registerGlobalVisit = async () => {
      try {
        if (!sessionStorage.getItem('vMap_registered')) {
          // CORS ve 429 hatasını aşmak için ipinfo.io kullanıyoruz
          const geoRes = await fetch('https://ipinfo.io/json?token=7563847e11409e'); // Bu ücretsiz bir token örneğidir
          const geoData = await geoRes.json();

          if (geoData.loc) {
            const [lat, lon] = geoData.loc.split(',');
            await fetch('http://localhost:5001/api/visit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                lat: parseFloat(lat), 
                lon: parseFloat(lon), 
                city: geoData.city 
              })
            });
            sessionStorage.setItem('vMap_registered', 'true');
          }
        }
      } catch (e) {}
    };
    registerGlobalVisit();
  }, []);

  return (
    <BrowserRouter>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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