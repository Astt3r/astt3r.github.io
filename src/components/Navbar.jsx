import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu, useTheme } from '../hooks';
import { useLanguageContext } from '../contexts';

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const { t, language, toggleLanguage, getLanguageIcon } = useLanguageContext();
  const { theme, toggleTheme, getThemeIcon } = useTheme();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('home'), section: 'home' },
    { to: '/#skills', label: t('technologies'), section: 'skills' },
    { to: '/projects', label: t('projects'), section: 'projects' },
    { to: '/contact', label: t('contact'), section: 'contact' }
  ];

  const handleLinkClick = (section) => {
    closeMenu();
    if (section === 'skills' && location.pathname === '/') {
      setTimeout(() => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="top-nav">
        <button 
          id="menuToggle" 
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <Link className="brand" to="/">
          Astt3r (´・ω・｀)
        </Link>

        <nav className="nav-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.section}>
                <Link 
                  to={link.to} 
                  onClick={() => handleLinkClick(link.section)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Control buttons in navbar */}
        <div className="navbar-controls">
          <button 
            className="navbar-btn lang-btn" 
            onClick={toggleLanguage}
            aria-label="Switch language"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {getLanguageIcon()}
          </button>
          
          <button 
            className="navbar-btn theme-btn" 
            onClick={toggleTheme}
            aria-label="Switch theme"
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {getThemeIcon()}
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      <nav id="mobileNav" className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.section}>
              <Link 
                to={link.to} 
                onClick={() => handleLinkClick(link.section)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile controls */}
        <div className="mobile-controls">
          <button 
            className="mobile-btn lang-btn" 
            onClick={() => { toggleLanguage(); closeMenu(); }}
            aria-label="Switch language"
          >
            {getLanguageIcon()} {language === 'es' ? 'English' : 'Español'}
          </button>
          
          <button 
            className="mobile-btn theme-btn" 
            onClick={() => { toggleTheme(); closeMenu(); }}
            aria-label="Switch theme"
          >
            {getThemeIcon()} {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="mobile-overlay" 
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1080
          }}
        />
      )}
    </>
  );
};

export default Navbar;
