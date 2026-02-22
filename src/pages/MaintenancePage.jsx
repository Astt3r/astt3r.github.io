import React from 'react';
import '../styles/BootScreen.css';

const MaintenancePage = () => {
  return (
    <div className="boot-screen">
      {/* Sleeping Oneko Cat */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '60px',
        width: '32px',
        height: '32px',
        backgroundImage: 'url("data:image/gif;base64,R0lGODlhIAAgAKIAAAAAAP///wAAAP8AAP//AAAA/wD//////yH5BAEKAAYALAAAAAAIAAQAAAM0WLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6CwA7")',
        backgroundSize: '320px 320px',
        backgroundPosition: '-64px 0px',
        imageRendering: 'pixelated',
        opacity: 0.9
      }}></div>

      <div className="boot-content">
        <div className="boot-header">
          <div className="boot-title">⚠ MAINTENANCE MODE ⚠</div>
          <div className="boot-version">astt3r.sys - Portfolio OS v2.0</div>
        </div>
        
        <div className="boot-info">
          <div className="boot-line">═══════════════════════════════════════════════════════════════</div>
          <div className="boot-line" style={{ marginTop: '1rem', marginBottom: '1rem' }}></div>
          <div className="boot-line">  Sistema temporalmente fuera de servicio</div>
          <div className="boot-line">  System temporarily out of service</div>
          <div className="boot-line" style={{ marginTop: '1rem', marginBottom: '1rem' }}></div>
          <div className="boot-line">  Se están realizando tareas de mantenimiento y mejoras.</div>
          <div className="boot-line">  Maintenance and improvements are being performed.</div>
          <div className="boot-line" style={{ marginTop: '1rem', marginBottom: '1rem' }}></div>
          <div className="boot-line">═══════════════════════════════════════════════════════════════</div>
        </div>

        <div className="boot-progress-container">
          <div className="boot-progress-bar">
            <div 
              className="boot-progress-fill" 
              style={{ 
                width: '45%',
                background: '#ffaa00',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
          </div>
          <div className="boot-progress-text">Maintenance in progress...</div>
        </div>

        <div className="boot-footer">
          <span className="blink">█</span> Por favor, vuelve pronto / Please come back soon
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
