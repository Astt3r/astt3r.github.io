import React from 'react';
import RetroWindow from './RetroWindow';
import { RetroButton } from './RetroComponents';
import '../App.css';

/**
 * Tarjeta de proyecto con estilo Windows 95
 * Versión retro de ProjectCard que mantiene la paleta de colores del portfolio
 */
const RetroProjectCard = ({ project }) => {
  const { 
    title, 
    description, 
    image, 
    tech, 
    links, 
    badge, 
    isPlayable, 
    isDownloadable, 
    hasPreview 
  } = project;
  
  return (
    <RetroWindow 
      title={title}
      showClose={false}
      width="100%"
    >
      {/* Imagen del proyecto */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            border: '2px solid',
            borderColor: '#0f1419 var(--border) var(--border) #0f1419',
            boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        />
        
        {/* Badge estilo Windows 95 */}
        {badge && (
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: badge.color,
              color: badge.text === 'Migrating to React' ? '#222' : '#fff',
              fontSize: '11px',
              padding: '3px 8px',
              border: '1px solid rgba(0, 0, 0, 0.3)',
              boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
              fontWeight: 'bold',
              letterSpacing: '0.5px'
            }}
          >
            {badge.text}
          </div>
        )}
      </div>

      {/* Descripción */}
      <div className="retro-well" style={{ marginBottom: '12px', padding: '8px' }}>
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.5',
          margin: 0,
          color: 'var(--text)'
        }}>
          {description}
        </p>
      </div>

      {/* Tecnologías */}
      {tech && tech.length > 0 && (
        <div style={{ marginBottom: '12px' }}>
          <div 
            style={{ 
              fontSize: '12px', 
              fontWeight: 'bold',
              marginBottom: '6px',
              color: 'var(--accent)'
            }}
          >
            TECNOLOGÍAS:
          </div>
          <div 
            className="retro-well"
            style={{ 
              display: 'flex', 
              gap: '6px', 
              flexWrap: 'wrap',
              padding: '8px'
            }}
          >
            {tech.map((technology, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  padding: '3px 6px',
                  fontSize: '11px',
                  boxShadow: '1px 1px 0 rgba(0, 0, 0, 0.2)'
                }}
              >
                {technology.icon && (
                  <img 
                    src={technology.icon} 
                    alt={technology.name}
                    style={{ width: '14px', height: '14px' }}
                  />
                )}
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="retro-separator" />

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {isPlayable && links.demo && (
          <>
            <RetroButton
              onClick={() => window.open(links.demo, '_blank')}
              style={{
                background: 'var(--accent)',
                color: 'var(--bg)',
                fontWeight: 'bold',
                flex: 1,
                minWidth: '120px'
              }}
            >
              ▶ Play Online
            </RetroButton>
            {links.github && (
              <RetroButton
                onClick={() => window.open(links.github, '_blank')}
                style={{ flex: 1, minWidth: '100px' }}
              >
                📁 Code
              </RetroButton>
            )}
          </>
        )}

        {isDownloadable && links.download && (
          <RetroButton
            onClick={() => window.open(links.download, '_blank')}
            style={{
              background: '#4CAF50',
              color: '#fff',
              fontWeight: 'bold',
              flex: 1,
              minWidth: '120px'
            }}
          >
            💾 Download
          </RetroButton>
        )}

        {hasPreview && links.preview && (
          <RetroButton
            onClick={() => window.open(links.preview, '_blank')}
            style={{ flex: 1, minWidth: '100px' }}
          >
            👁 Preview
          </RetroButton>
        )}

        {!isPlayable && !isDownloadable && links.github && (
          <RetroButton
            onClick={() => window.open(links.github, '_blank')}
            style={{ flex: 1 }}
          >
            📂 View Repository
          </RetroButton>
        )}

        {!isPlayable && !isDownloadable && !links.github && links.demo && (
          <RetroButton
            onClick={() => window.open(links.demo, '_blank')}
            style={{ flex: 1 }}
          >
            🔗 View Project
          </RetroButton>
        )}
      </div>
    </RetroWindow>
  );
};

export default RetroProjectCard;
