import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./portfolio/components/navbar";
import Home from "./portfolio/pages/home";
// import About from "./portfolio/pages/about";
// import Projects from "./portfolio/pages/projects";
// import Contact from "./portfolio/pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Redirect root to portfolio */}
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        
        {/* Portfolio */}
        <Route path="/portfolio" element={<Home />} />
        {/* <Route path="/portfolio/about" element={<About />} /> */}
        {/* <Route path="/portfolio/projects" element={<Projects />} /> */}
        {/* <Route path="/portfolio/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;