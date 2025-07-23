import React from 'react';

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2024 Alejandro Robles / Astt3r. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/astt3r" target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
        </ul>
        <button 
          id="goTopBtn" 
          className="go-top-btn" 
          onClick={goToTop}
          aria-label="Go to top"
        >
          ↑ Go to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
