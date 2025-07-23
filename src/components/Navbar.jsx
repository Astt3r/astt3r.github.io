import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu, useLanguage } from '../hooks';

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const { t } = useLanguage();
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
