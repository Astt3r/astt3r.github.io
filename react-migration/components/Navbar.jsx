import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="top-nav">
        {/* Mobile hamburger button */}
        <button 
          id="menuToggle" 
          aria-label="Abrir menú"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Brand/Logo */}
        <a className="brand" href="astt3r-page.html">
          Astt3r (´・ω・｀)
        </a>

        {/* Desktop navigation links */}
        <nav className="nav-links">
          <ul>
            <li><a href="astt3r-page.html">Home</a></li>
            <li><a href="astt3r-page.html#skills">Technologies</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Mobile sliding panel */}
      <nav 
        id="mobileNav" 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <ul>
          <li><a href="astt3r-page.html" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="astt3r-page.html#skills" onClick={closeMobileMenu}>Technologies</a></li>
          <li><a href="projects.html" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="contact.html" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
        
        <button 
          id="themeToggleIcon" 
          className="theme-icon" 
          aria-label="Switch theme"
        >
          🌙
        </button>
        
        {/* Theme toggle info bubble */}
        <div id="themeBubble" className="bubble-hint">
          Want to use light theme?<br />Tap here
        </div>
      </nav>
    </>
  );
};

export default Navbar;
