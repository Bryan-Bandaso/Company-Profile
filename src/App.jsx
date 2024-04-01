import React from 'react';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import MissionPage from './pages/Mission';
import VisionPage from './pages/Vision';
import ServicesPage from './pages/Services';
import ProjectPage from './pages/Project';
import TeamPage from './pages/Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import WelcomingPage from './pages/Welcoming';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/welcoming" element={<WelcomingPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
