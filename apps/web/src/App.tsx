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
   fetch('http://localhost:5287/api/visit', { method: 'POST' }).catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      <div className="hidden lg:block"><Navbar /></div>
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