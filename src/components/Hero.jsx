import React from 'react';
import { Link } from 'react-router-dom';
import RetroWindow from './RetroWindow';
import { useChileClock } from '../hooks';
import { useLanguageContext } from '../contexts';
import calendarIcon from '../assets/icons/calendar.png';
import clockIcon from '../assets/icons/clock.png';
import notepadIcon from '../assets/icons/notepad.png';
import calculatorIcon from '../assets/icons/calculator.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = () => {
  const chileTime = useChileClock();
  const { t } = useLanguageContext();

 
  const calculateAge = () => {
    const birthDate = new Date(2000, 11, 26); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const age = calculateAge();

  return (
    <section id="hero" className="hero hero-retro">
      <div style={{ marginBottom: '24px' }}>
        <RetroWindow 
          title="Astt3r.exe - Paint"
          showClose={false}
          width="280px"
          className="paint-window"
        >
          <div style={{ 
            background: '#c0c0c0',
            padding: '3px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
          }}>
            <div style={{
              background: '#ffffff',
              minHeight: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid var(--border)',
              padding: '8px'
            }}>
              <img 
                className="hero-avatar" 
                src="/assets/avatar.png" 
                alt="Avatar de Alejandro Robles"
                style={{ 
                  display: 'block',
                  boxShadow: 'none',
                  maxWidth: '160px',
                  imageRendering: 'pixelated'
                }}
              />
            </div>
            
            <div style={{
              background: 'var(--bg-2)',
              padding: '4px 4px 2px 4px',
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
              borderTop: '2px solid var(--border)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px'
              }}>
                <div style={{
                  width: '24px',
                  height: '14px',
                  background: 'var(--accent)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  zIndex: 2
                }} />
                <div style={{
                  width: '24px',
                  height: '14px',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  marginTop: '-6px',
                  marginLeft: '6px'
                }} />
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(14, 1fr)',
                gap: '0',
                flex: 1
              }}>
                {[
                  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
                  '#808000', '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF',
                  '#FF00FF', '#FFFF80', '#00FF80', '#80FFFF', '#8080FF', '#FF0080', '#FF8040', '#804000',
                  '#004080', '#FF80FF', '#80FF80', '#808040'
                ].map((color, idx) => (
                  <div
                    key={idx}
                    style={{
                      aspectRatio: '1',
                      background: color,
                      border: '1px solid #000'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
      
      <h1 className="hero-title">
        <span className="nickname">/Astt3r/</span>
      </h1>
      
      <h1 className="hero-title">Alejandro Robles</h1>
      
      <h2 className="hero-sub">
        {t('hero_subtitle')}
      </h2>

      <div style={{ marginTop: '16px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/contact" className="retro-button">
          <img src={mailIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '6px', imageRendering: 'pixelated', verticalAlign: 'middle' }} />
          {t('contact') || 'Contact'}
        </Link>
      </div>

      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <RetroWindow 
          title="System.exe - Properties"
          showClose={false}
          width="480px"
          className="system-window"
        >
          <div className="retro-well" style={{ padding: '12px' }}>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <button className="retro-button system-badge">
                <img src={calendarIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px', imageRendering: 'pixelated' }} />
                <strong>Age:</strong>
                <span>{age}y</span>
              </button>
              <button className="retro-button system-badge">
                <img src={clockIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px', imageRendering: 'pixelated' }} />
                <strong>Time:</strong>
                <span id="clClock">
                  <img
                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1e8-1f1f1.svg"
                    alt="🇨🇱"
                    style={{ width: '14px', height: '14px', marginRight: '3px', verticalAlign: 'middle', display: 'inline' }}
                  />
                  {chileTime || '--:--'}
                </span>
              </button>
              <button className="retro-button system-badge">
                <img src={notepadIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px', imageRendering: 'pixelated' }} />
                <strong>Pronouns:</strong>
                <span>{t('pronouns') || 'Él/He'}</span>
              </button>
              <button className="retro-button system-badge">
                <img src={calculatorIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px', imageRendering: 'pixelated' }} />
                <strong>Type:</strong>
                <span>INTJ</span>
              </button>
            </div>
          </div>
        </RetroWindow>
      </div>

      <div style={{ marginTop: '24px' }}>
        <RetroWindow 
          title="AboutMe.exe - Notepad"
          showClose={false}
          width="560px"
          className="about-window"
        >
          <div className="retro-well" style={{ 
            padding: '16px',
            fontFamily: 'Courier New, monospace',
            fontSize: '13px',
            lineHeight: '1.6',
            minHeight: '120px',
            whiteSpace: 'pre-wrap'
          }}>
            <strong style={{ 
              color: 'var(--accent)',
              fontFamily: 'Pixelify Sans, sans-serif',
              fontSize: '14px',
              display: 'block',
              marginBottom: '8px'
            }}>
              {t('about_title')}
            </strong>
            <p style={{ margin: 0 }}>
              {t('about_text')}
            </p>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};

export default Hero;
