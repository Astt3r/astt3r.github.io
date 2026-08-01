import React from 'react';
import { scrollToTop } from '../utils';
import { useLanguageContext } from '../contexts';

const Footer = () => {
  const { t } = useLanguageContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="retro-footer">
      <div className="retro-footer-content">
        <div className="footer-section">
          <div className="footer-well">
            <strong style={{ color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>Quick Links</strong>
            <div className="footer-links-grid">
              <a href="https://github.com/Astt3r" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/alejandro-robles-9279992b2/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Alejandro Robles. {t('footer_text')}</p>
        </div>
        
        <button 
          className="retro-button go-top-btn" 
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
