import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import About from "../../web/src/pages/AboutPage/About";
import Skills from "../../web/src/pages/SkillsPage/Skills";
import Projects from "../../web/src/pages/ProjectsPage/Projects";
import Contact from "../../web/src/pages/ContactPage/Contact";

export default function App() {
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      
    </BrowserRouter>
  );
}