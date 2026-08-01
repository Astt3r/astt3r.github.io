import React, { useEffect, useState } from 'react';
import '../styles/BootScreen.css';

const BootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    const skip = () => onComplete();
    window.addEventListener('keydown', skip);
    window.addEventListener('click', skip);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen" role="button" tabIndex={0} aria-label="Skip boot screen">
      <div className="boot-content">
        <div className="boot-header">
          <div className="boot-title">astt3r.sys</div>
          <div className="boot-version">Portfolio OS v2.0</div>
        </div>
        
        <div className="boot-info">
          <div className="boot-line">Initializing portfolio system...</div>
          <div className="boot-line">Loading components: React, Router, Contexts</div>
          <div className="boot-line">Checking dependencies... OK</div>
          <div className="boot-line">Starting retro interface...</div>
        </div>

        <div className="boot-progress-container">
          <div className="boot-progress-bar">
            <div 
              className="boot-progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="boot-progress-text">{progress}%</div>
        </div>

        <div className="boot-footer">
          <span className="blink">█</span> Press any key to continue...
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
