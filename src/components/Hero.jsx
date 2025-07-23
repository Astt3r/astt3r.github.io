import React from 'react';
import { useChileClock, useLanguage } from '../hooks';

const Hero = () => {
  const chileTime = useChileClock();
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero">
      <img 
        className="hero-avatar" 
        src="/assets/avatar.png" 
        alt="Avatar de Alejandro Robles" 
      />
      
      <h1 className="hero-title">
        <span className="nickname">/Astt3r/</span>
      </h1>
      
      <h1 className="hero-title">Alejandro Robles</h1>
      
      <h2 className="hero-sub">
        {t('hero_subtitle')}
      </h2>

      {/* Badges */}
      <div className="badges">
        <span className="badge">📅 24y</span>
        <span className="badge" id="clClock">
          {chileTime || '🇨🇱 --:--'}
        </span>
        <span className="badge">💻 {t('pronouns') || 'Él/He'}</span>
        <span className="badge">🧠 INTJ</span>
      </div>

      {/* About section */}
      <div className="about-box">
        <h3>{t('about_title')}</h3>
        <p>
          {t('about_text')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
