import React from 'react';
import '../App.css';

const RetroWindow = ({ 
  title = "Window", 
  children, 
  className = "",
  onClose,
  showClose = true,
  width = "auto",
  height = "auto"
}) => {
  return (
    <div 
      className={`retro-card ${className}`}
      style={{ 
        maxWidth: width,
        height: height
      }}
    >
      <div className="retro-titlebar">
        <span>{title}</span>
        <div style={{ display: 'flex', gap: '1px' }}>
          <button 
            className="retro-button retro-window-button"
            aria-label="Minimize"
          >
            –
          </button>
          <button 
            className="retro-button retro-window-button"
            aria-label="Maximize"
          >
            □
          </button>
          <button 
            className="retro-button retro-window-button"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="retro-well">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
