import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks';
import { useLanguageContext } from '../contexts';

const ThemeToggle = () => {
  const { theme, toggleTheme, getThemeIcon } = useTheme();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 3000);
    const hideTimer = setTimeout(() => setShowHint(false), 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const closeHint = () => {
    setShowHint(false);
  };

  return (
    <>
      <button 
        className="theme-icon" 
        onClick={toggleTheme}
        aria-label="Switch theme"
      >
        {getThemeIcon()}
      </button>
      
      <div className={`bubble-hint ${showHint ? 'visible' : ''}`}>
        <button className="hint-close" onClick={closeHint} aria-label="Close hint">
          ×
        </button>
        {theme === 'dark' 
          ? 'Want to use light theme?\nTap here'
          : 'Want to use dark theme?\nTap here'
        }
      </div>
    </>
  );
};

const LanguageToggle = () => {
  const { language, toggleLanguage, getLanguageIcon } = useLanguageContext();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 4000);
    const hideTimer = setTimeout(() => setShowHint(false), 9000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const closeHint = () => {
    setShowHint(false);
  };

  return (
    <>
      <button 
        className="lang-icon" 
        onClick={toggleLanguage}
        aria-label="Switch language"
      >
        {getLanguageIcon()}
      </button>
      
      <div className={`lang-bubble-hint ${showHint ? 'visible' : ''}`}>
        <button className="hint-close" onClick={closeHint} aria-label="Close hint">
          ×
        </button>
        {language === 'es' 
          ? 'Switch to English?\nTap here'
          : 'Cambiar a Español?\nToca aquí'
        }
      </div>
    </>
  );
};

const FloatingControls = () => {
  return (
    <>
      <ThemeToggle />
      <LanguageToggle />
    </>
  );
};

export default FloatingControls;
