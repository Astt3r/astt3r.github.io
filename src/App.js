import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, StarfieldCanvas } from './components';
import { HomePage, ProjectsPage, ContactPage } from './pages';
import { LanguageProvider } from './contexts';
import { initSmoothScrolling } from './utils';
import './App.css';

function App() {
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
    <LanguageProvider>
      <Router basename={process.env.NODE_ENV === 'production' ? '' : ''}>
        <div className="App">
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
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
