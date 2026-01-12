import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // Doğru ve temiz yol

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps/web/src/pages/About.tsx" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}