import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, StarfieldCanvas, DesktopIcons, BootScreen } from './components';
import { HomePage, ProjectsPage, ContactPage } from './pages';
import MaintenancePage from './pages/MaintenancePage';
import { LanguageProvider } from './contexts';
import { initSmoothScrolling } from './utils';
import './App.css';

// ⚠️ MODO MANTENIMIENTO ⚠️
// Cambia esto a 'true' para activar la página de mantenimiento
// Cambia esto a 'false' para mostrar el portfolio normal
const MAINTENANCE_MODE = false;

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Skip initialization if in maintenance  mode
    if (MAINTENANCE_MODE) return;

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

  // Mostrar pantalla de inicio primero
  if (isBooting) {
    return <BootScreen onComplete={() => setIsBooting(false)} />;
  }

  // Si está en modo mantenimiento, mostrar solo la página de mantenimiento
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          {/* Starfield background */}
          <StarfieldCanvas />
          
          {/* Desktop Icons */}
          <DesktopIcons />
          
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
