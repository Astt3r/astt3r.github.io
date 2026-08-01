import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { useLanguageContext } from '../contexts';
import { getCounterApiUrl } from '../config/counterapi.config';
import folderIcon from '../assets/icons/folder_open.png';
import programIcon from '../assets/icons/program.png';
import mailIcon from '../assets/icons/mail.png';
import worldIcon from '../assets/icons/world.png';
import toolsIcon from '../assets/icons/tools.png';
import clockIcon from '../assets/icons/clock.png';
import briefcaseIcon from '../assets/icons/briefcase.png';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguageContext();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [visitCount, setVisitCount] = useState('...');

  useEffect(() => {
    let isSubscribed = true;
    
    const fetchVisitCount = async (shouldIncrement = false) => {
      try {
        // Determinar si incrementar o solo leer
        const endpoint = shouldIncrement ? 'up' : '';
        const response = await fetch(getCounterApiUrl(endpoint), {
          method: 'GET'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        if (isSubscribed) {
          setVisitCount(result.data?.up_count || 0);
        }
      } catch (error) {
        console.error('Error fetching visit count:', error);
        if (isSubscribed) {
          setVisitCount('--');
        }
      }
    };

    // Verificar si ya visitó en esta sesión
    const hasVisited = sessionStorage.getItem('portfolio_visited');
    
    if (!hasVisited) {
      // Primera visita en esta sesión: incrementar contador
      sessionStorage.setItem('portfolio_visited', 'true');
      fetchVisitCount(true);
    } else {
      // Ya visitó en esta sesión: solo leer el contador
      fetchVisitCount(false);
    }
    
    return () => {
      isSubscribed = false;
    };
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
          <a
            href="/assets/cv/Alejandro-Robles-CV.pdf"
            download="Alejandro-Robles-CV.pdf"
            className="task-button cv-task-button"
            onClick={() => setStartMenuOpen(false)}
          >
            <img src={briefcaseIcon} alt="" className="task-icon" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
            <span className="task-label">{t('download_cv') || 'CV'}</span>
          </a>
        </div>

        {/* System Tray */}
        <div className="system-tray">
          <div 
            className="tray-counter"
            title={language === 'es' ? `Visitas totales: ${visitCount}` : `Total visits: ${visitCount}`}
          >
            <img src={worldIcon} alt="" className="counter-icon" style={{ width: '14px', height: '14px', imageRendering: 'pixelated' }} />
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
              <a
                href="/assets/cv/Alejandro-Robles-CV.pdf"
                download="Alejandro-Robles-CV.pdf"
                className="start-menu-item"
                onClick={() => setStartMenuOpen(false)}
              >
                <img src={briefcaseIcon} alt="" className="start-menu-icon" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
                <span>{t('download_cv') || 'Download CV'}</span>
              </a>
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
