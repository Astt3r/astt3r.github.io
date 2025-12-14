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
              <a href="https://linkedin.com/in/alejandrordeveloper" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-well">
            <strong style={{ color: 'var(--accent)', marginBottom: '8px', display: 'block' }}>Crypto Wallets</strong>
            <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
              <p style={{ margin: '4px 0' }}><strong>ETH:</strong> <code className="crypto-addr">0x874264741b35189Bcd44e636eC1131bD92cefc5F</code></p>
              <p style={{ margin: '4px 0' }}><strong>BTC:</strong> <code className="crypto-addr">bc1q9muzx5ahkzs89kq2en6yygc83rcxly7lsnauh5</code></p>
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
