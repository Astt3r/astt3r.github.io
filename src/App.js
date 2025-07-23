import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, FloatingControls, StarfieldCanvas } from './components';
import { HomePage, ProjectsPage, ContactPage } from './pages';
import { initSmoothScrolling } from './utils';
import { useLanguage } from './hooks';
import './App.css';

function App() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScrolling();
    
    // Add oneko script for cat animation
    const onekoScript = document.createElement('script');
    onekoScript.src = '/oneko.js';
    onekoScript.async = true;
    document.head.appendChild(onekoScript);

    return () => {
      cleanup();
      // Clean up oneko script if needed
      const existingScript = document.querySelector('script[src="/oneko.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '' : ''}>
      <div className="App" key={language}>
        {/* Starfield background */}
        <StarfieldCanvas />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating controls */}
        <FloatingControls />
      </div>
    </Router>
  );
}

export default App;
