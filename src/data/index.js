export const translations = {
  es: {
    // Navigation
    home: "Inicio",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    
    // Hero section
    hero_subtitle: "Software Engineer & Indie Game Developer",
    download_cv: "Descargar CV",

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
    footer_text: "Hecho por Astt3r",
    go_top: "Ir arriba",
    
    // Projects page
    projects_subtitle: "Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos indie.",
    featured_projects: "Destacados",
    completed_projects: "Completados",

    // Hero badges
    pronouns: "Él/He",
    
    // Worked with section
    worked_with: "He trabajado con",
    
    // Contact page
    contact_title: "Contacto",
    contact_subtitle: "¡Hablemos! Me encanta conectar con otros desarrolladores y colaborar en proyectos interesantes.",
    contact_info_title: "Mis medios de contacto",
    contact_intro: "Estos son mis medios de contacto disponibles. ¡No dudes en escribirme!",
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
    download_cv: "Download CV",

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
    footer_text: "Made by Astt3r",
    go_top: "Go to top",
    
    // Projects page
    projects_subtitle: "A collection of projects I've worked on, from web applications to games.",
    featured_projects: "Featured",
    completed_projects: "Completed",

    // Hero badges
    pronouns: "He/Him",
    
    // Worked with section
    worked_with: "Worked with",
    
    // Contact page
    contact_title: "Contact",
    contact_subtitle: "Let's talk! I love connecting with other developers and collaborating on interesting projects.",
    contact_info_title: "My contact methods",
    contact_intro: "These are my available contact methods. Don't hesitate to reach out!",
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
    { icon: "excel-vba-icon", name: "Excel VBA", customIcon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg" }
  ]
};

export const certificationsData = [
  "AWS Academy Cloud Foundations",
  "Desarrollo Web Moderno",
  "JavaScript ES6+",
  "CSS Grid & Flexbox"
];

export const languagesData = [
  { name: "Español", level: "Native" },
  { name: "English", level: "B2" }
];

export const experienceData = [
  {
    id: 1,
    company: "Fundación Juan XXIII",
    logo: "/assets/fundacionlogo.png",
    role: "Full Stack Developer (Freelance)",
    period: "Aug 2025 — Present",
    achievements: [
      "Designed and built an institutional web platform for a network of 9 schools, end-to-end from requirements to production deploy.",
      "Built a custom CMS with role-based access and a WYSIWYG editor to centralize content management.",
      "Deployed and maintained the app on Netlify/Render with a decoupled, reusable React frontend."
    ]
  },
  {
    id: 2,
    company: "PC Rebailing",
    logo: "/assets/pcrebailing.png",
    role: "Software Developer (.NET)",
    period: "Aug 2025 — Oct 2025",
    achievements: [
      "Built a POS system with C#, WPF and MySQL tailored to the company's internal processes.",
      "Designed the relational database for inventory and sales.",
      "Extended existing functionality with React.js components and ran functional tests before production releases."
    ]
  },
  {
    id: 3,
    company: "Municipalidad de Los Ángeles",
    logo: "/assets/munilosangeles.svg",
    role: "Software Engineering Intern",
    period: "Jan 2025 — Feb 2025",
    achievements: [
      "Built a pharmaceutical stock management system that cut critical-stock lookup time by ~40%.",
      "Digitized administrative processes with dashboards and tracking tools.",
      "Also taught Computer Science within the commune's school system as part of the same role."
    ]
  }
];

export const projectsData = {
  featured: [
    {
      id: 1,
      title: "Fundación Juan XXIII",
      description: "Institutional web platform for a network of 9 schools, built end-to-end from requirements to production deploy. Includes a custom CMS with role-based access and a WYSIWYG editor so non-technical staff can manage content themselves.",
      image: "/assets/Animation.gif",
      tech: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ],
      links: {
        demo: "https://fjxiii-preview.netlify.app/",
        github: "https://github.com/Astt3r/fjuanxxiii"
      },
      badge: {
        text: "CMS Platform",
        color: "linear-gradient(90deg,#11998e,#38ef7d)"
      },
      mainIcon: "devicon-react-original colored",
      hasPreview: true
    },
    {
      id: 2,
      title: "Junta Transparente",
      description: "Community management platform for neighborhood boards to publish budgets and fund allocations, making local spending easy to search and audit for residents. Rebuilt as a decoupled SPA with a Node.js REST API and JWT authentication. Originally my final degree project (Ingeniería en Ejecución Informática).",
      image: "/assets/juntatransparente.png",
      tech: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ],
      links: {
        demo: "https://junta-app-production.up.railway.app/",
        github: "https://github.com/fit-dran/juntatransparente"
      },
      badge: {
        text: "Live Demo",
        color: "linear-gradient(90deg,#11998e,#38ef7d)"
      },
      mainIcon: "devicon-react-original colored",
      hasPreview: true
    },
    {
      id: 3,
      title: "Blind Hero",
      description: "Arcade platform minigame about finding trophies.",
      image: "/assets/blindhero.png",
      tech: [
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
      ],
      links: {
        demo: "https://arxenical.itch.io/blind-hero",
        download: "https://arxenical.itch.io/blind-hero"
      },
      badge: {
        text: "Game Jam",
        color: "linear-gradient(90deg,#6a11cb,#2575fc)"
      },
      mainIcon: "devicon-unity-original colored",
      isDownloadable: true
    }
  ],
  
  completed: [
    {
      id: 4,
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
      id: 5,
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
    }
  ]
};
