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
        
        <div className="crypto-addresses">
          <p><strong>ETH:</strong> <span className="crypto-addr">0x874264741b35189Bcd44e636eC1131bD92cefc5F</span></p>
          <p><strong>BTC:</strong> <span className="crypto-addr">bc1q9muzx5ahkzs89kq2en6yygc83rcxly7lsnauh5</span></p>
        </div>
        
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
