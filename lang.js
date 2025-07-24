/* ===============================================
   SISTEMA DE INTERNACIONALIZACIÓN (i18n)
   Español ↔ Inglés
   =============================================== */

const translations = {
  es: {
    // Navbar
    home: "Inicio",
    projects: "Proyectos", 
    technologies: "Tecnologías",
    contact: "Contacto",
    astt3r_page: "Astt3r Page",

    // Hero Section
    hero_subtitle: "Software Engineer & Game Developer",
    badges: {
      student: "Estudiante",
      chile: "Chile 🇨🇱",
      fullstack: "Full Stack"
    },
    about_title: "Sobre mí",
    about_text: "Soy un ingeniero de software apasionado por el desarrollo de software y la creación de juegos indie. Me gusta combinar lógica, creatividad y pixel art para dar vida a ideas originales. Siempre busco aprender nuevas tecnologías y asumir desafíos que impulsen mi crecimiento profesional y personal.",

    // Skills
    skills_title: "Tecnologías y Habilidades",
    frontend_title: "Lenguajes",
    backend_title: "Frameworks", 
    tools_title: "Herramientas",
    learning_title: "Base de Datos y Cloud",

    // Theme messages
    theme_messages: {
      dark_hint: "🌙 Tema Oscuro<br>Toca para cambiar al tema claro",
      light_hint: "☀️ Tema Claro<br>Toca para cambiar al tema oscuro",
      dark_active: "🌙 Tema Oscuro<br>Modo oscuro activado",
      light_active: "☀️ Tema Claro<br>Modo claro activado"
    },

    // Language messages
    lang_messages: {
      es_hint: "🇪🇸 Español<br>Cambiar a inglés",
      en_hint: "🇺🇸 English<br>Switch to Spanish",
      es_active: "🇪🇸 Español<br>Idioma cambiado",
      en_active: "🇺🇸 English<br>Language changed"
    },

    // Footer
    footer_text: "Todos los derechos reservados.",
    go_top: "↑ Ir arriba",

    // Contact page
    contact_title: "Contacto",
    contact_subtitle: "Estos son mis medios de contacto disponibles. ¡No dudes en escribirme!",
    contact_info_title: "Mis medios de contacto",
    github_card: "GitHub",
    discord_card: "Discord", 
    linkedin_card: "LinkedIn",
    linkedin_profile: "Perfil LinkedIn",
    form_name: "Nombre",
    form_email: "Email", 
    form_message: "Mensaje",
    form_submit: "Enviar mensaje",

    // Projects page
    projects_title: "Mis Proyectos",
    projects_subtitle: "Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos.",
    under_construction: "🚧 Sección en construcción 🚧",
    construction_text: "Esta página estará disponible pronto con todos mis proyectos.",

    // Technologies page
    tech_title: "Tecnologías",
    tech_subtitle: "Las herramientas y tecnologías que uso en mi día a día como desarrollador."
  },

  en: {
    // Navbar
    home: "Home",
    projects: "Projects",
    technologies: "Technologies", 
    contact: "Contact",
    astt3r_page: "Astt3r Page",

    // Hero Section
    hero_subtitle: "Software Engineer & Game Developer",
    badges: {
      student: "Student",
      chile: "Chile 🇨🇱", 
      fullstack: "Full Stack"
    },
    about_title: "About me",
    about_text: "I am a software engineer passionate about software development and indie game creation. I enjoy combining logic, creativity, and pixel art to bring original ideas to life. I am always looking to learn new technologies and take on challenges that drive my professional and personal growth.",

    // Skills
    skills_title: "Technologies & Skills",
    frontend_title: "Languages",
    backend_title: "Frameworks",
    tools_title: "Tools", 
    learning_title: "Database & Cloud",

    // Theme messages
    theme_messages: {
      dark_hint: "🌙 Dark Theme<br>Tap to switch to light theme",
      light_hint: "☀️ Light Theme<br>Tap to switch to dark theme", 
      dark_active: "🌙 Dark Theme<br>Dark mode activated",
      light_active: "☀️ Light Theme<br>Light mode activated"
    },

    // Language messages
    lang_messages: {
      es_hint: "🇪🇸 Español<br>Cambiar a inglés",
      en_hint: "🇺🇸 English<br>Switch to Spanish",
      es_active: "🇪🇸 Español<br>Idioma cambiado", 
      en_active: "🇺🇸 English<br>Language changed"
    },

    // Footer
    footer_text: "All rights reserved.",
    go_top: "↑ Go to top",

    // Contact page
    contact_title: "Contact",
    contact_subtitle: "These are my available contact methods. Don't hesitate to reach out!",
    contact_info_title: "My contact methods",
    github_card: "GitHub",
    discord_card: "Discord",
    linkedin_card: "LinkedIn", 
    linkedin_profile: "LinkedIn Profile",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message", 
    form_submit: "Send message",

    // Projects page
    projects_title: "My Projects",
    projects_subtitle: "A collection of projects I've worked on, from web applications to games.",
    under_construction: "🚧 Under Construction 🚧",
    construction_text: "This page will be available soon with all my projects.",

    // Technologies page
    tech_title: "Technologies",
    tech_subtitle: "The tools and technologies I use in my daily work as a developer."
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'es';
    this.init();
  }

  init() {
    this.createLanguageButton();
    this.createLanguageBubble();
    this.applyLanguage(this.currentLang);
    this.setupLanguageToggle();
  }

  createLanguageButton() {
    const langIcon = document.createElement('button');
    langIcon.className = 'lang-icon';
    langIcon.setAttribute('aria-label', 'Toggle language');
    langIcon.innerHTML = this.currentLang === 'es' ? '🇪🇸' : '🇺🇸';
    
    // Posicionar encima del botón de tema
    document.body.appendChild(langIcon);
    
    return langIcon;
  }

  createLanguageBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'lang-bubble-hint';
    bubble.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bubble);
    return bubble;
  }

  setupLanguageToggle() {
    const langIcon = document.querySelector('.lang-icon');
    const bubble = document.querySelector('.lang-bubble-hint');

    // Mostrar bubble inicial si es la primera visita
    if (!localStorage.getItem('lang_hint_shown') && bubble) {
      const messages = translations[this.currentLang].lang_messages;
      const hintKey = this.currentLang === 'es' ? 'es_hint' : 'en_hint';
      bubble.innerHTML = messages[hintKey];
      
      setTimeout(() => {
        bubble.classList.add('visible');
        setTimeout(() => bubble.classList.remove('visible'), 4000);
      }, 3000);
      
      localStorage.setItem('lang_hint_shown', 'true');
    }

    // Event listener para cambiar idioma
    langIcon.addEventListener('click', () => {
      const newLang = this.currentLang === 'es' ? 'en' : 'es';
      this.switchLanguage(newLang);

      // Animación del botón
      langIcon.style.transform = 'scale(1.2) rotate(180deg)';
      setTimeout(() => {
        langIcon.style.transform = '';
      }, 300);

      // Mostrar bubble de confirmación
      if (bubble) {
        const messages = translations[newLang].lang_messages;
        const activeKey = newLang === 'es' ? 'es_active' : 'en_active';
        bubble.innerHTML = messages[activeKey];
        bubble.classList.add('visible');
        setTimeout(() => bubble.classList.remove('visible'), 3000);
      }
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar icono del botón
    const langIcon = document.querySelector('.lang-icon');
    if (langIcon) {
      langIcon.innerHTML = lang === 'es' ? '🇪🇸' : '🇺🇸';
    }

    this.applyLanguage(lang);
    
    // Actualizar también los mensajes del tema
    this.updateThemeMessages();
  }

  applyLanguage(lang) {
    const t = translations[lang];
    
    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getNestedProperty(t, key);
      
      if (translation) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else if (element.tagName === 'INPUT' && element.placeholder) {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Actualizar title del documento
    if (document.querySelector('title')) {
      const pageTitle = document.querySelector('h1')?.textContent || 'Astt3r';
      document.title = lang === 'es' ? `${pageTitle} | Desarrollador Full Stack` : `${pageTitle} | Full Stack Developer`;
    }
  }

  updateThemeMessages() {
    // Esta función actualizará los mensajes del tema en el idioma actual
    const themeMessages = translations[this.currentLang].theme_messages;
    
    // Disparar evento personalizado para que main.js actualice sus mensajes
    const event = new CustomEvent('languageChanged', { 
      detail: { lang: this.currentLang, themeMessages } 
    });
    window.dispatchEvent(event);
  }

  getNestedProperty(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  // Método para obtener traducciones desde otros scripts
  t(key) {
    return this.getNestedProperty(translations[this.currentLang], key);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.langManager = new LanguageManager();
});

// Hacer disponible globalmente para otros scripts
window.translations = translations;
