// ===== INTERACCIONES TEMÁTICAS - GALAXIA & NIER =====

// Exploding tags con efectos temáticos
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', (e) => {
    const isLight = document.body.classList.contains('light');
    
    // Crear partículas temáticas
    createThemeParticles(e.clientX, e.clientY, isLight);
    
    tag.classList.add('explode');
    setTimeout(() => tag.remove(), 400);
  });
});

// Crear partículas según el tema
function createThemeParticles(x, y, isLight) {
  const particleCount = 8;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = isLight ? 'nier-particle' : 'galaxy-particle';
    
    // Posicionamiento
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    
    // Estilos temáticos
    if (isLight) {
      // Partículas NieR: geométricas y doradas
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = '#c9a961';
      particle.style.transform = 'rotate(45deg)';
    } else {
      // Partículas Galaxia Cálida: brillantes y terrestres
      particle.style.width = '3px';
      particle.style.height = '3px';
      particle.style.background = ['#D95030', '#AB4455', '#4D596F'][Math.floor(Math.random() * 3)];
      particle.style.borderRadius = '50%';
      particle.style.boxShadow = `0 0 6px currentColor`;
    }
    
    document.body.appendChild(particle);
    
    // Animación de dispersión
    const angle = (i / particleCount) * Math.PI * 2;
    const distance = 50 + Math.random() * 30;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    
    particle.animate([
      { 
        transform: `translate(0, 0) scale(1) ${isLight ? 'rotate(45deg)' : ''}`,
        opacity: 1 
      },
      { 
        transform: `translate(${endX - x}px, ${endY - y}px) scale(0) ${isLight ? 'rotate(405deg)' : ''}`,
        opacity: 0 
      }
    ], {
      duration: 800,
      easing: 'ease-out'
    }).onfinish = () => particle.remove();
  }
}

// --- Botón de caos mejorado ---
document.getElementById('chaosButton')?.addEventListener('click', () => {
  const cards = document.querySelectorAll('.tech-card');
  const isLight = document.body.classList.contains('light');
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fall');
      
      // Efecto temático al caer
      if (isLight) {
        card.style.filter = 'sepia(0.3) saturate(1.2)';
      } else {
        card.style.filter = 'brightness(1.2) drop-shadow(0 0 8px #D95030)';
      }
      
      makeDraggable(card);
    }, index * 100);
  });
  
  // Efecto de pantalla según tema
  createScreenEffect(isLight);
});

// Efecto de pantalla completa
function createScreenEffect(isLight) {
  const effect = document.createElement('div');
  effect.style.position = 'fixed';
  effect.style.inset = '0';
  effect.style.pointerEvents = 'none';
  effect.style.zIndex = '9998';
  
  if (isLight) {
    // Efecto NieR: grid scan
    effect.style.background = `
      linear-gradient(90deg, transparent 98%, rgba(201, 169, 97, 0.3) 100%),
      linear-gradient(rgba(201, 169, 97, 0.1) 1px, transparent 1px)
    `;
    effect.style.backgroundSize = '20px 100%, 100% 20px';
  } else {
    // Efecto Galaxia Cálida: ondas terrestres
    effect.style.background = `
      radial-gradient(ellipse at center, 
        rgba(217, 80, 48, 0.1) 0%, 
        rgba(171, 68, 85, 0.05) 50%, 
        transparent 100%)
    `;
  }
  
  document.body.appendChild(effect);
  
  effect.animate([
    { opacity: 0, transform: 'scale(0.5)' },
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(1.2)' }
  ], {
    duration: 1000,
    easing: 'ease-out'
  }).onfinish = () => effect.remove();
}

// --- Draggable mejorado con efectos temáticos ---
function makeDraggable(element) {
  let offsetX, offsetY, isDragging = false;

  element.addEventListener('mousedown', e => {
    isDragging = true;
    element.style.transition = 'none';
    element.style.zIndex = '1000';
    
    // Efecto al agarrar
    const isLight = document.body.classList.contains('light');
    if (isLight) {
      element.style.transform = 'scale(1.05) rotate(2deg)';
      element.style.filter = 'sepia(0.4) contrast(1.1)';
    } else {
      element.style.transform = 'scale(1.05) rotate(-2deg)';
      element.style.filter = 'brightness(1.3) drop-shadow(0 0 12px #AB4455)';
    }
    
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    
    // Restablecer efectos
    element.style.transform = '';
    element.style.filter = '';
    element.style.cursor = 'grab';
    element.style.zIndex = '';
    
    // Pequeño efecto de "aterrizaje"
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
      element.style.transform = '';
      setTimeout(() => element.style.transition = '', 300);
    }, 150);
  });
}
