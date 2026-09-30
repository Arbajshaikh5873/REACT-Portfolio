import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Services from './components/Services';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Noise texture overlay for premium feel */}
      <div className="noise-overlay" />

      {/* Custom animated cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <Marquee />

      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <Services />

      <div className="section-divider" />
      <Projects />

      <div className="section-divider" />
      <Experience />

      <div className="section-divider" />
      <Contact />

      <BackToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
