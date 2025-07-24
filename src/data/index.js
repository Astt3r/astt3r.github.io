export const translations = {
  es: {
    // Navigation
    home: "Inicio",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    
    // Hero section
    hero_subtitle: "Software Engineer & Indie Game Developer",
    
    // About section
    about_title: "🧑‍💻 Sobre mí",
    about_text: "Soy un ingeniero de software apasionado por el desarrollo de software y la creación de juegos indie. Me gusta combinar lógica, creatividad y pixel art para dar vida a ideas originales. Siempre busco aprender nuevas tecnologías y asumir desafíos que impulsen mi crecimiento profesional y personal.",
    
    // Skills section
    skills_title: "Skills",
    frontend_title: "Lenguajes",
    frameworks_title: "Frameworks",
    database_cloud_title: "Database & Cloud",
    tools_title: "Herramientas",
    
    // Footer
    footer_text: "Hecho con ❤️ por Astt3r usando React",
    go_top: "Ir arriba",
    
    // Projects page
    projects_subtitle: "Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos.",
    completed_projects: "Completados",
    in_progress_projects: "En Desarrollo",
    preparing_new_projects: "Preparando nuevos proyectos",
    focused_on_current: "Estoy enfocado en perfeccionar los proyectos actuales y planificando las próximas creaciones.",
    stay_tuned: "¡Mantente atento a futuras actualizaciones!",
    carousel_infinite: "Carrusel infinito en movimiento",
    single_project: "Proyecto único",
    swipe_to_navigate: "Desliza para navegar",
    
    // Hero badges
    pronouns: "Él/He",
    
    // Contact page
    contact_title: "Contacto",
    contact_subtitle: "¡Hablemos! Me encanta conectar con otros desarrolladores y colaborar en proyectos interesantes.",
    contact_intro: "¡Me encanta conectar con otros desarrolladores y colaborar en proyectos interesantes! Si tienes algún proyecto emocionante, una oportunidad laboral o simplemente quieres charlar sobre tecnología y videojuegos, no dudes en contactarme.",
    contact_form_title: "Envíame un mensaje",
    form_name: "Nombre",
    form_email: "Email", 
    form_message: "Mensaje",
    form_submit: "Enviar Mensaje"
  },
  
  en: {
    // Navigation
    home: "Home",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    
    // Hero section
    hero_subtitle: "Software Engineer & Indie Game Developer",
    
    // About section
    about_title: "🧑‍💻 About me",
    about_text: "I am a software engineer passionate about software development and indie game creation. I enjoy combining logic, creativity, and pixel art to bring original ideas to life. I'm always looking to learn new technologies and take on challenges that drive my professional and personal growth.",
    
    // Skills section
    skills_title: "Skills",
    frontend_title: "Languages",
    frameworks_title: "Frameworks",
    database_cloud_title: "Database & Cloud",
    tools_title: "Tools",
    
    // Footer
    footer_text: "Made with ❤️ by Astt3r using React",
    go_top: "Go to top",
    
    // Projects page
    projects_subtitle: "A collection of projects I've worked on, from web applications to games.",
    completed_projects: "Completed",
    in_progress_projects: "Currently in Development",
    preparing_new_projects: "Preparing new projects",
    focused_on_current: "I'm focused on perfecting current projects and planning next creations.",
    stay_tuned: "Stay tuned for future updates!",
    carousel_infinite: "Infinite carousel in motion",
    single_project: "Single project",
    swipe_to_navigate: "Swipe to navigate",
    
    // Hero badges
    pronouns: "He/Him",
    
    // Contact page
    contact_title: "Contact",
    contact_subtitle: "Let's talk! I love connecting with other developers and collaborating on interesting projects.",
    contact_intro: "I love connecting with other developers and collaborating on interesting projects! If you have an exciting project, a job opportunity or just want to chat about technology and video games, don't hesitate to contact me.",
    contact_form_title: "Send me a message",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message", 
    form_submit: "Send Message"
  }
};

export const skillsData = {
  languages: [
    { icon: "devicon-html5-plain colored", name: "HTML" },
    { icon: "devicon-css3-plain colored", name: "CSS" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-php-plain colored", name: "PHP" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-csharp-plain colored", name: "C#" },
    { icon: "devicon-mysql-plain colored", name: "SQL" },
    { icon: "devicon-bash-plain colored", name: "Bash" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-java-plain colored", name: "Java" }
  ],
  
  frameworks: [
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-unity-original", name: "Unity" },
    { icon: "devicon-godot-plain colored", name: "Godot" },
    { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-express-original colored", name: "Express.js" },
    { icon: "devicon-jquery-plain colored", name: "jQuery" }
  ],
  
  database: [
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-microsoftsqlserver-plain colored", name: "SQL Server" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },
    { icon: "devicon-azure-plain colored", name: "Azure" }
  ],
  
  tools: [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "cisco-icon", name: "Cisco Packet Tracer", customIcon: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
    { icon: "devicon-latex-original colored", name: "LaTeX / Overleaf" },
    { icon: "excel-vba-icon", name: "Excel VBA", customIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" }
  ]
};

export const projectsData = {
  completed: [
    {
      id: 1,
      title: "Junta Transparente",
      description: "Neighborhood board data viewer and public allocations. Part of my graduation project.",
      image: "/assets/juntatransparente.png",
      tech: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      links: {
        github: "https://github.com/fit-dran/juntatransparente"
      },
      badge: {
        text: "Open Source",
        color: "rgba(0,0,0,0.65)"
      },
      mainIcon: "devicon-react-original colored"
    },
    {
      id: 2,
      title: "Blind Hero",
      description: "Arcade platform minigame using RigidBody2D for fast-paced mechanics.",
      image: "/assets/blindhero.png",
      tech: [
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
      ],
      links: {
        demo: "https://arxenical.itch.io/blind-hero"
      },
      badge: {
        text: "Game Jam",
        color: "linear-gradient(90deg,#6a11cb,#2575fc)"
      },
      mainIcon: "devicon-unity-original colored"
    },
    {
      id: 3,
      title: "JSTetris",
      description: "Classic Tetris clone made with JavaScript, HTML5 Canvas, and CSS. Playable in browser.",
      image: "/assets/Screenshot_Tetris.png",
      tech: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ],
      links: {
        demo: "https://astt3r.github.io/JSTetris/",
        github: "https://github.com/Astt3r/JSTetris"
      },
      badge: {
        text: "Playable",
        color: "linear-gradient(90deg,#ff512f,#dd2476)"
      },
      mainIcon: "devicon-javascript-plain colored",
      isPlayable: true
    },
    {
      id: 4,
      title: "Portfolio migration to React",
      description: "Successfully migrated this portfolio from vanilla HTML/CSS/JS to React with improved architecture, component-based development, and modern features.",
      image: "/assets/portfolio-react.png",
      tech: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React Router", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      links: {
        demo: "https://astt3r.github.io",
        github: "https://github.com/Astt3r/astt3r.github.io"
      },
      badge: {
        text: "Live Site",
        color: "linear-gradient(90deg,#61dafb,#20232a)"
      },
      mainIcon: "devicon-react-original colored"
    },
    
  ],
  
  inProgress: [
    {
      id: 5,
      title: "Community Platform",
      description: "Enhanced fork of JuntaTransparente for my thesis project. Modern Laravel + React platform for neighborhood association management with advanced features, improved UI/UX, and comprehensive community administration tools.",
      image: "/assets/communityplatform.png", // Imagen del proyecto (make sure this file exists in the public/assets folder)
      tech: [
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Inertia.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
      ],
      links: {
        github: "https://github.com/Astt3r/CommunityPlatform"
      },
      badge: {
        text: "Thesis Project",
        color: "linear-gradient(90deg,#667eea,#764ba2)"
      },
      mainIcon: "devicon-laravel-plain colored"
    }
  ]
};
