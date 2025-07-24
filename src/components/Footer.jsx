import React from 'react';
import { scrollToTop } from '../utils';
import { useLanguageContext } from '../contexts';

const Footer = () => {
  const { t } = useLanguageContext();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="https://github.com/Astt3r" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/astt3r" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        
        <p>&copy; 2024 Alejandro Robles. {t('footer_text')}</p>
        
        <button 
          className="go-top-btn" 
          onClick={scrollToTop}
          aria-label={t('go_top')}
        >
          ↑ {t('go_top')}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
