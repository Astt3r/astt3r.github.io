import React from 'react';
import '../App.css';

/**
 * Componente de ventana estilo Windows 95 con tema personalizado
 * Mantiene la paleta de colores del portfolio (burdeos/rojo sobre negro)
 */
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
            onClick={() => console.log('Minimize clicked')}
            aria-label="Minimize"
          >
            –
          </button>
          <button 
            className="retro-button retro-window-button"
            onClick={() => console.log('Maximize clicked')}
            aria-label="Maximize"
          >
            □
          </button>
          <button 
            className="retro-button retro-window-button"
            onClick={onClose || (() => console.log('Close clicked'))}
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
