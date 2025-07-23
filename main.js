/* ===== TEMA CLARO / OSCURO CON   // Mostrar bubble mejorado solo la primera v    // Actualizar bubble c  });

  // Detectar cambios automáticos del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Escuchar cambios de idioma para actualizar mensajes del tema
  window.addEventListener('languageChanged', (e) => {
    const { themeMessages } = e.detail;
    // Los mensajes se actualizarán automáticamente en la próxima interacción
    window.currentThemeMessages = themeMessages;
  });je contextual
    if (bubble) {
      const currentLang = localStorage.getItem('language') || 'es';
      const themeMessages = window.translations?.[currentLang]?.theme_messages;
      
      const messages = themeMessages ? {
        light: themeMessages.light_active,
        dark: themeMessages.dark_active
      } : {
        light: '☀️ Tema Claro<br>Modo claro activado',
        dark: '🌙 Tema Oscuro<br>Modo oscuro activado'
      };
      
      bubble.innerHTML = messages[newTheme];
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 4000);
    }localStorage.getItem('theme_hint_shown') && bubble) {
    const currentLang = localStorage.getItem('language') || 'es';
    const themeMessages = window.translations?.[currentLang]?.theme_messages;
    
    const messages = themeMessages ? {
      dark: themeMessages.dark_hint,
      light: themeMessages.light_hint
    } : {
      dark: '🌙 Tema Oscuro<br>Toca para cambiar al tema claro',
      light: '☀️ Tema Claro<br>Toca para cambiar al tema oscuro'
    };
    bubble.innerHTML = messages[initialTheme];LOTANTE - MEJORA    // Actualizar bubble con mensaje contextual
    if (bubble) {
      const currentLang = localStorage.getItem('language') || 'es';
      const themeMessages = window.translations?.[currentLang]?.theme_messages;
      
      const messages = themeMessages ? {
        light: themeMessages.light_active,
        dark: themeMessages.dark_active
      } : {
        light: '☀️ Tema Claro<br>Modo claro activado',
        dark: '🌙 Tema Oscuro<br>Modo oscuro activado'
      };== */
document.addEventListener('DOMContentLoaded', () => {
  const themeIcon = document.getElementById('themeToggleIcon');
  const bubble = document.getElementById('themeBubble');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;

  // Aplicar tema guardado o sistema con transición suave
  const applyTheme = (theme, animate = false) => {
    if (animate) {
      body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
      setTimeout(() => body.style.transition = '', 400);
    }
    
    if (theme === 'dark') {
      body.classList.remove('light');
      themeIcon.textContent = '☀️';
    } else {
      body.classList.add('light');
      themeIcon.textContent = '🌙';
    }
  };

  // Determinar tema inicial
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  // Mostrar bubble mejorado solo la primera vez
  if (!localStorage.getItem('theme_hint_shown') && bubble) {
    const messages = {
      dark: '� Tema Oscuro<br>Toca para cambiar al tema claro',
      light: '☀️ Tema Claro<br>Toca para cambiar al tema oscuro'
    };
    bubble.innerHTML = messages[initialTheme];
    setTimeout(() => {
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 8000);
    }, 2500);
    localStorage.setItem('theme_hint_shown', 'true');
  }

  // Cambiar tema con animación suave
  themeIcon.addEventListener('click', () => {
    const isNowLight = body.classList.toggle('light');
    const newTheme = isNowLight ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme, true);

    // Feedback visual mejorado
    themeIcon.style.transform = 'scale(1.2) rotate(180deg)';
    setTimeout(() => {
      themeIcon.style.transform = '';
    }, 300);

    // Actualizar bubble con mensaje contextual
    if (bubble) {
      const messages = {
        light: '☀️ Tema Claro activado<br>Cambiando a modo claro',
        dark: '� Tema Oscuro activado<br>Cambiando a modo oscuro'
      };
      
      bubble.innerHTML = messages[newTheme];
      bubble.classList.add('visible');
      setTimeout(() => bubble.classList.remove('visible'), 4000);
    }
  });

  // Detectar cambios automáticos del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light', true);
    }
  });
});

/* ===== STARFIELD CANVAS - TEMAS GALAXIA & NIER ===== */
class Starfield {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.nebulae = [];
    this.nierGrids = [];
    this.options = Object.assign({
      starCount: 45, // Menos estrellas para un cielo más natural
      nebulaCount: 0, // Sin nebulosas
      gridCount: 12,
      galaxyColors: ['#D95030', '#AB4455', '#4D596F', '#e6e6e8'], // Colores cálidos terrestres
      nierColors: ['#c9a961', '#d4af37', '#8b7355'],
      minSize: 0.8,
      maxSize: 2.5,
      speed: 0.02 // Movimiento más lento
    }, options);
    this.resize();
    this.initElements();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
    
    window.addEventListener('resize', () => {
      this.resize();
      this.initElements();
    });
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  }

  initElements() {
    this.initStars();
    // No inicializar nebulosas para un cielo más natural
    this.initNierGrids();
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.options.starCount; i++) {
      const brightness = Math.random();
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: this.options.minSize + brightness * (this.options.maxSize - this.options.minSize),
        speed: this.options.speed + Math.random() * 0.01,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.008 + Math.random() * 0.015,
        color: this.options.galaxyColors[Math.floor(Math.random() * this.options.galaxyColors.length)],
        brightness: 0.3 + brightness * 0.7, // Brillo variable más natural
        depth: Math.random() // Para crear sensación de profundidad
      });
    }
  }

  initNebulae() {
    this.nebulae = [];
    for (let i = 0; i < this.options.nebulaCount; i++) {
      this.nebulae.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 20 + Math.random() * 40,
        speed: this.options.speed * 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        color: this.options.galaxyColors[Math.floor(Math.random() * this.options.galaxyColors.length)]
      });
    }
  }

  initNierGrids() {
    this.nierGrids = [];
    for (let i = 0; i < this.options.gridCount; i++) {
      this.nierGrids.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 15 + Math.random() * 25,
        speed: this.options.speed * 0.8,
        life: Math.random(),
        lifeSpeed: 0.003 + Math.random() * 0.007,
        angle: Math.random() * Math.PI * 2,
        color: this.options.nierColors[Math.floor(Math.random() * this.options.nierColors.length)]
      });
    }
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.save();

    const isLight = document.body.classList.contains('light');

    if (isLight) {
      // Tema NieR: Grid geométrico minimalista
      this.renderNierElements();
    } else {
      // Tema Galaxia: Nebulosas y estrellas cósmicas
      this.renderGalacticElements();
    }

    ctx.restore();
    requestAnimationFrame(this.animate);
  }

  renderGalacticElements() {
    const ctx = this.ctx;
    
    // Solo renderizar estrellas (sin nebulosas)
    for (const star of this.stars) {
      const twinkleAlpha = star.brightness * (0.4 + 0.6 * (Math.sin(star.twinkle) * 0.5 + 0.5));
      
      ctx.globalAlpha = twinkleAlpha;
      ctx.shadowBlur = 4 + star.depth * 6; // Glow variable según profundidad
      ctx.shadowColor = star.color;
      ctx.fillStyle = star.color;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r * (0.8 + star.depth * 0.4), 0, 2 * Math.PI);
      ctx.fill();
      
      // Movimiento muy lento para simular deriva cósmica real
      star.x += star.speed * 0.3;
      star.y += star.speed * 0.1;
      star.twinkle += star.twinkleSpeed;
      
      // Reaparecer desde el otro lado
      if (star.x > window.innerWidth + 10) star.x = -10;
      if (star.y > window.innerHeight + 10) star.y = -10;
    }
  }

  renderNierElements() {
    const ctx = this.ctx;
    
    for (const grid of this.nierGrids) {
      const alpha = Math.sin(grid.life * Math.PI) * 0.6;
      
      ctx.save();
      ctx.translate(grid.x, grid.y);
      ctx.rotate(grid.angle);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = grid.color;
      ctx.lineWidth = 1;
      
      // Dibujar grid geométrico estilo NieR
      const size = grid.size;
      ctx.beginPath();
      // Líneas horizontales
      ctx.moveTo(-size/2, -size/4);
      ctx.lineTo(size/2, -size/4);
      ctx.moveTo(-size/2, 0);
      ctx.lineTo(size/2, 0);
      ctx.moveTo(-size/2, size/4);
      ctx.lineTo(size/2, size/4);
      
      // Líneas verticales
      ctx.moveTo(-size/4, -size/2);
      ctx.lineTo(-size/4, size/2);
      ctx.moveTo(0, -size/2);
      ctx.lineTo(0, size/2);
      ctx.moveTo(size/4, -size/2);
      ctx.lineTo(size/4, size/2);
      
      // Punto central
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 2, 0, 2 * Math.PI);
      
      ctx.stroke();
      ctx.restore();
      
      grid.x += grid.speed * 0.3;
      grid.y += grid.speed * 0.1;
      grid.life += grid.lifeSpeed;
      grid.angle += 0.005;
      
      if (grid.life > 1) {
        grid.life = 0;
        grid.x = Math.random() * window.innerWidth;
        grid.y = Math.random() * window.innerHeight;
      }
      
      if (grid.x > window.innerWidth + grid.size) grid.x = -grid.size;
      if (grid.y > window.innerHeight + grid.size) grid.y = -grid.size;
    }
  }
}

// ===== STARFIELD INIT & INTERACTION - MEJORADO =====
document.addEventListener('DOMContentLoaded', () => {
  // Crear el canvas si no existe
  let canvas = document.querySelector('.starfield-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = 'starfield-canvas';
    document.body.appendChild(canvas);
  }
  
  const starfield = new Starfield(canvas);

  // Actualizar starfield al cambiar tema
  const updateStarfield = () => {
    starfield.initElements(); // Usar el nuevo método
  };

  // Reactividad suavizada al mover mouse
  let reactiveTimeout;
  let isReactive = false;
  
  window.addEventListener('mousemove', (e) => {
    if (!isReactive) {
      canvas.classList.add('reactive');
      isReactive = true;
    }
    
    clearTimeout(reactiveTimeout);
    reactiveTimeout = setTimeout(() => {
      canvas.classList.remove('reactive');
      isReactive = false;
    }, 400);
  });

  // Efecto especial en tema claro al hacer click
  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('light')) {
      canvas.style.animation = 'lightParticles 3s ease-in-out';
      setTimeout(() => {
        canvas.style.animation = '';
      }, 3000);
    }
  });

  // Actualiza starfield al cambiar tema
  const themeIcon = document.getElementById('themeToggleIcon');
  if (themeIcon) {
    themeIcon.addEventListener('click', () => {
      setTimeout(updateStarfield, 100); // Delay para esperar el cambio de clase
    });
  }
  
  // Escucha cambios de prefers-color-scheme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateStarfield);
});



/* ===== UTILIDAD: habilita navegación flechas si hay +2 tarjetas ===== */
function enableArrowNavigation(container) {
  const track = container.querySelector('.carousel');
  if (!track) return;
  const items = track.children.length;
  const prev = container.querySelector('.nav-prev');
  const next = container.querySelector('.nav-next');
  const SCROLL = 320;

  if (items <= 2) {
    if (prev) prev.style.display = 'none';
    if (next) next.style.display = 'none';
    return;
  }

  if (prev) {
    prev.style.display = 'flex';
    prev.addEventListener('click', () => {
      track.scrollBy({ left: -SCROLL, behavior: 'smooth' });
    });
  }

  if (next) {
    next.style.display = 'flex';
    next.addEventListener('click', () => {
      track.scrollBy({ left: SCROLL, behavior: 'smooth' });
    });
  }
}

/* ===== MENÚ MÓVIL ===== */
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('menuToggle');
  const panel = document.getElementById('mobileNav');

  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  // Cierra menú al seguir un enlace
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => panel.classList.remove('open'));
  });
});



/* ===== EJECUCIÓN SOBRE TODOS LOS CAROUSELES EXISTENTES ===== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(enableArrowNavigation);
});
