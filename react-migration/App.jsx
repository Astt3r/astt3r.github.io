import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Hooks
import { useTheme } from './hooks/useTheme';
import { useChileClock } from './hooks/useChileClock';

// Utils
import { initSmoothScrolling, cleanupSmoothScrolling } from './utils/scrollUtils';

const App = () => {
  const { theme, toggleTheme, getThemeIcon } = useTheme();
  const chileTime = useChileClock();

  useEffect(() => {
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();

    // Cleanup function
    return () => {
      cleanupSmoothScrolling();
    };
  }, []);

  // Update clock display
  useEffect(() => {
    const clockElement = document.getElementById('clClock');
    if (clockElement) {
      clockElement.textContent = chileTime;
    }
  }, [chileTime]);

  return (
    <div className="App">
      <body className="starfield">
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
        </main>

        <Footer />
        
        {/* Scripts can be moved to useEffect hooks or separate components */}
        {/* oneko.js would be imported as a module or added via useEffect */}
      </body>
    </div>
  );
};

export default App;
