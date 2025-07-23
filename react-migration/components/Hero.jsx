import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img 
        className="hero-avatar" 
        src="assets/avatar.png" 
        alt="Avatar de Alejandro Robles" 
      />
      <h1 className="hero-title">
        <span className="nickname">/Astt3r/</span>
      </h1>
      <h1 className="hero-title">Alejandro Robles</h1>
      <h2 className="hero-sub">Software Engineer & Indie Game Developer</h2>

      {/* Badges */}
      <div className="badges">
        <span className="badge"> 24y</span>
        <span className="badge" id="clClock"> 🇨🇱 --:--</span>
        <span className="badge">💻 Él/He</span>
        <span className="badge"> INTJ</span>
      </div>

      {/* About section */}
      <div className="about-box">
        <h3>🧑‍💻 Sobre mí</h3>
        <p>
          I am a software engineer passionate about software development and indie game creation. 
          I enjoy combining logic, creativity, and pixel art to bring original ideas to life. 
          I am always looking to learn new technologies and take on challenges that drive my 
          professional and personal growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
