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
        {showClose && (
          <button 
            className="retro-button"
            onClick={onClose}
            style={{ 
              padding: '2px 8px',
              fontSize: '12px',
              minWidth: 'auto'
            }}
          >
            ✕
          </button>
        )}
      </div>
      <div className="retro-well">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
