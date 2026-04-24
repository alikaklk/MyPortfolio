
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectsPage/Projects";
import Contact from "./pages/ContactPage/Contact";

export default function App() {
  

  return (
    <BrowserRouter>
      <div className="hidden lg:block"><Navbar /></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}