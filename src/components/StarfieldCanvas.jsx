import React, { useEffect } from 'react';

const StarfieldCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('starfield-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 200;
    const pixelSize = 4;


    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numStars; i++) {
      const gridX = Math.floor(Math.random() * (canvas.width / pixelSize));
      const gridY = Math.floor(Math.random() * (canvas.height / pixelSize));
      
      stars.push({
        x: gridX * pixelSize,
        y: gridY * pixelSize,
        size: pixelSize,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const theme = document.body.classList.contains('light') ? 'light' : 'dark';
      
      stars.forEach(star => {
        star.y += star.speed;
        
        if (star.y > canvas.height) {
          star.y = 0;
          const gridX = Math.floor(Math.random() * (canvas.width / pixelSize));
          star.x = gridX * pixelSize;
        }
        
        const gridX = Math.round(star.x / pixelSize) * pixelSize;
        const gridY = Math.round(star.y / pixelSize) * pixelSize;
        
        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        if (theme === 'light') {
          ctx.fillStyle = '#c9a961';
        } else {
          const colors = ['#D95030', '#AB4455', '#4D596F'];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        }
        
        ctx.fillRect(gridX, gridY, pixelSize, pixelSize);
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
