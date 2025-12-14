import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { useLanguageContext } from '../contexts';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguageContext();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Contador global con CountAPI - usando el contador personalizado
    const fetchVisitCount = async () => {
      try {
        // Usar el slug del contador creado en CounterAPI
        const response = await fetch('https://api.countapi.xyz/hit/alejandro-robles-team/first-counter-2112');
        const data = await response.json();
        setVisitCount(data.value || 0);
      } catch (error) {
        console.error('Error fetching visit count:', error);
        // Fallback: mostrar 0 si falla
        setVisitCount(0);
      }
    };

    fetchVisitCount();
  }, []);

  const navLinks = [
    { to: '/', label: t('home'), icon: '🏠' },
    { to: '/projects', label: t('projects'), icon: '💾' },
    { to: '/contact', label: t('contact'), icon: '📧' }
  ];

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return (
    <>
      {/* Windows 95 Taskbar */}
      <header className="taskbar">
        {/* Start Button */}
        <button 
          className="start-button"
          onClick={toggleStartMenu}
          aria-label="Start Menu"
        >
          <span className="start-logo"></span>
          <span className="start-text">Start</span>
        </button>

        {/* Task buttons (active pages) */}
        <div className="task-buttons">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`task-button ${
                location.pathname === link.to ? 'active' : ''
              }`}
              onClick={() => setStartMenuOpen(false)}
            >
              <span className="task-icon">{link.icon}</span>
              <span className="task-label">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* System Tray */}
        <div className="system-tray">
          <div 
            className="tray-counter"
            title={language === 'es' ? `Visitas totales: ${visitCount}` : `Total visits: ${visitCount}`}
          >
            <span className="counter-icon">👁️</span>
            <span className="counter-value">{visitCount}</span>
          </div>

          <button 
            className="tray-button" 
            onClick={toggleLanguage}
            aria-label="Switch language"
            title={language === 'es' ? 'English' : 'Español'}
          >
            {language === 'es' ? 'ES' : 'EN'}
          </button>
          
          <button 
            className="tray-button" 
            onClick={toggleTheme}
            aria-label="Switch theme"
            title={theme === 'dark' ? 'Light' : 'Dark'}
          >
            {theme === 'dark' ? '☀' : '🌙'}
          </button>

          <div className="tray-clock">
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </header>

      {/* Start Menu */}
      {startMenuOpen && (
        <>
          <div className="start-menu">
            <div className="start-menu-sidebar">
              <span className="start-menu-title">Windows<span style={{fontSize: '20px', fontWeight: 'normal'}}>95</span></span>
            </div>
            <div className="start-menu-content">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  className="start-menu-item"
                  onClick={() => {
                    navigate(link.to);
                    setStartMenuOpen(false);
                  }}
                >
                  <span className="start-menu-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
              <div className="start-menu-separator" />
              <button
                className="start-menu-item"
                onClick={() => {
                  toggleLanguage();
                  setStartMenuOpen(false);
                }}
              >
                <span className="start-menu-icon">🌐</span>
                <span>{language === 'es' ? 'Switch to English' : 'Cambiar a Español'}</span>
              </button>
              <button
                className="start-menu-item"
                onClick={() => {
                  toggleTheme();
                  setStartMenuOpen(false);
                }}
              >
                <span className="start-menu-icon">{theme === 'dark' ? '☀' : '🌙'}</span>
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
          <div 
            className="start-menu-overlay"
            onClick={() => setStartMenuOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
