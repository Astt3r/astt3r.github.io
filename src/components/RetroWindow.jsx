import React, { useState } from 'react';
import '../App.css';

const RetroWindow = ({
  title = "Window",
  children,
  className = "",
  onClose,
  showClose = false,
  width = "auto",
  height = "auto"
}) => {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const handleClose = () => {
    setClosed(true);
    if (onClose) onClose();
  };

  return (
    <div
      className={`retro-card ${maximized ? 'retro-card-maximized' : ''} ${className}`}
      style={{
        maxWidth: maximized ? '100%' : width,
        height: minimized ? 'auto' : height
      }}
    >
      <div className="retro-titlebar">
        <span>{title}</span>
        <div style={{ display: 'flex', gap: '1px' }}>
          <button
            type="button"
            className="retro-button retro-window-button"
            aria-label={minimized ? 'Restore' : 'Minimize'}
            aria-pressed={minimized}
            onClick={() => setMinimized((prev) => !prev)}
          >
            –
          </button>
          <button
            type="button"
            className="retro-button retro-window-button"
            aria-label={maximized ? 'Restore' : 'Maximize'}
            aria-pressed={maximized}
            onClick={() => setMaximized((prev) => !prev)}
          >
            □
          </button>
          {showClose && (
            <button
              type="button"
              className="retro-button retro-window-button"
              aria-label="Close"
              onClick={handleClose}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {!minimized && (
        <div className="retro-well">
          {children}
        </div>
      )}
    </div>
  );
};

export default RetroWindow;
