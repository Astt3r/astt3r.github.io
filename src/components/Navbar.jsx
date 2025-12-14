import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { useLanguageContext } from '../contexts';
import folderIcon from '../assets/icons/folder_open.png';
import programIcon from '../assets/icons/program.png';
import mailIcon from '../assets/icons/mail.png';
import worldIcon from '../assets/icons/world.png';
import toolsIcon from '../assets/icons/tools.png';
import clockIcon from '../assets/icons/clock.png';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguageContext();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/astt3r-portfolio/visits', {
          method: 'GET',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setVisitCount(data.value || 0);
      } catch (error) {
        console.error('Error fetching visit count:', error);
        const localCount = localStorage.getItem('fallbackVisitCount') || '0';
        const newCount = parseInt(localCount) + 1;
        localStorage.setItem('fallbackVisitCount', newCount.toString());
        setVisitCount(newCount);
      }
    };

    fetchVisitCount();
  }, []);

  const navLinks = [
    { to: '/', label: t('home'), icon: folderIcon },
    { to: '/projects', label: t('projects'), icon: programIcon },
    { to: '/contact', label: t('contact'), icon: mailIcon }
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
              <img src={link.icon} alt="" className="task-icon" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
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
                  <img src={link.icon} alt="" className="start-menu-icon" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
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
                <img src={worldIcon} alt="" className="start-menu-icon" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
                <span>{language === 'es' ? 'Switch to English' : 'Cambiar a Español'}</span>
              </button>
              <button
                className="start-menu-item"
                onClick={() => {
                  toggleTheme();
                  setStartMenuOpen(false);
                }}
              >
                <img 
                  src={theme === 'dark' ? toolsIcon : clockIcon} 
                  alt="" 
                  className="start-menu-icon" 
                  style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} 
                />
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
