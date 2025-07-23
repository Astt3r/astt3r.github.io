import React, { useEffect } from 'react';

const StarfieldCanvas = () => {
  useEffect(() => {
    // Create starfield effect
    const canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 200;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const theme = document.body.classList.contains('light') ? 'light' : 'dark';
      
      stars.forEach(star => {
        // Move stars
        star.y += star.speed;
        
        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw star
        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        if (theme === 'light') {
          // NieR theme: golden particles
          ctx.fillStyle = '#c9a961';
        } else {
          // Galaxy theme: warm colors
          const colors = ['#D95030', '#AB4455', '#4D596F'];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      id="starfield-canvas" 
      className="starfield-canvas"
    />
  );
};

export default StarfieldCanvas;
