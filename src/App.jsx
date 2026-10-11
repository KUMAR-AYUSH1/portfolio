import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import {ProjectPart} from "./home.jsx"; 
import Skill from "./skill.jsx";
import About from "./about.jsx";
import HeaderP from "./headerP.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Contact } from "./about.jsx";
function Home_page() {
  return (
    <div className="bg-black space-y-12">
      <HeaderP />
      <Home />
      <ProjectPart />
      <Skill />
      <Contact/>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_page />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
