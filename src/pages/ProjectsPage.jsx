import React, { useRef } from 'react';
import { projectsData } from '../data';
import { useLanguage } from '../hooks';

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, links, badge, mainIcon, isPlayable } = project;
  
  const cardLink = links.demo || links.github || '#';
  
  return (
    <div className="proj-card">
      <a href={cardLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
        <div style={{position: 'relative'}}>
          <img src={image} alt={title} />
          <span 
            className="project-badge"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: badge.color,
              color: badge.text === 'Migrating to React' ? '#222' : '#fff',
              fontSize: '12px',
              padding: '2px 8px',
              borderRadius: '8px',
              letterSpacing: '0.5px'
            }}
          >
            {badge.text}
          </span>
        </div>
        <div className="proj-info">
          <h3 style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            {title}
            <i className={mainIcon} style={{fontSize: '18px'}}></i>
          </h3>
          <p>{description}</p>
          <div className="proj-tech">
            {tech.map((technology, index) => (
              <div key={index} className="tech-card">
                <img src={technology.icon} alt={technology.name} />
                {technology.name}
              </div>
            ))}
          </div>
          
          {isPlayable && (
            <div style={{marginTop: '10px', display: 'flex', gap: '8px'}}>
              <a 
                href={links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="live-link"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  padding: '5px 14px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px #0002',
                  transition: '.18s'
                }}
              >
                ▶ Play Online
              </a>
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'var(--bg-2)',
                  color: 'var(--accent)',
                  padding: '5px 12px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid var(--accent)',
                  transition: '.18s'
                }}
              >
                Code
              </a>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

const ProjectCarousel = ({ title, projects, carouselId, t }) => {
  const carouselRef = useRef(null);
  const [currentTranslate, setCurrentTranslate] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [transition, setTransition] = React.useState('transform 0.5s ease-in-out');



  // Creamos un array duplicado para el efecto infinito
  const duplicatedProjects = [...projects, ...projects];
  const cardWidth = 268; // 240px card + 28px gap
  const totalWidth = cardWidth * projects.length;

  // Auto-scroll infinito cada 3 segundos
  React.useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTranslate(prev => {
        const newTranslate = prev - cardWidth;
        
        // Si hemos llegado al final del primer set, resetear sin transición
        if (Math.abs(newTranslate) >= totalWidth) {
          setTimeout(() => {
            setTransition('none');
            setCurrentTranslate(0);
            setTimeout(() => {
              setTransition('transform 0.5s ease-in-out');
            }, 50);
          }, 500);
        }
        
        return newTranslate;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length, cardWidth, totalWidth]);

  const goToNext = () => {
    if (projects.length <= 1) return;
    setIsAutoPlaying(false);
    
    setCurrentTranslate(prev => {
      const newTranslate = prev - cardWidth;
      
      if (Math.abs(newTranslate) >= totalWidth) {
        setTimeout(() => {
          setTransition('none');
          setCurrentTranslate(0);
          setTimeout(() => {
            setTransition('transform 0.5s ease-in-out');
          }, 50);
        }, 500);
      }
      
      return newTranslate;
    });
    
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrev = () => {
    if (projects.length <= 1) return;
    setIsAutoPlaying(false);
    
    setCurrentTranslate(prev => {
      let newTranslate = prev + cardWidth;
      
      // Si estamos al inicio, ir al final sin transición
      if (newTranslate > 0) {
        setTransition('none');
        newTranslate = -totalWidth + cardWidth;
        setTimeout(() => {
          setTransition('transform 0.5s ease-in-out');
        }, 50);
      }
      
      return newTranslate;
    });
    
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="carousel-container" id={carouselId}>
        {projects.length > 1 && (
          <button className="nav-btn nav-prev" onClick={goToPrev}>❮</button>
        )}
        <div 
          className={`carousel infinite-carousel ${projects.length === 1 ? 'single' : ''}`}
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(${currentTranslate}px)`,
              transition: transition,
              display: 'flex',
              gap: '28px',
            }}
          >
            {projects.length === 1 ? (
              <ProjectCard project={projects[0]} />
            ) : (
              duplicatedProjects.map((project, index) => (
                <ProjectCard 
                  key={`${project.id}-${index >= projects.length ? 'duplicate' : 'original'}`} 
                  project={project} 
                />
              ))
            )}
          </div>
        </div>
        {projects.length > 1 && (
          <button className="nav-btn nav-next" onClick={goToNext}>❯</button>
        )}
      </div>
      
      <div className="carousel-info">
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--text-muted)',
          marginTop: '12px',
          opacity: 0.7
        }}>
          {projects.length > 1 ? `↻ ${t('carousel_infinite') || 'Carrusel infinito en movimiento'}` : t('single_project') || 'Proyecto único'}
        </p>
      </div>
    </>
  );
};

const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <main>
      <section className="projects-wrapper">
        <img 
          src="/assets/cat computer.png" 
          alt="Cat Computer" 
          style={{
            maxWidth: '260px',
            width: '100%',
            margin: '22px auto 14px',
            display: 'block',
            borderRadius: '14px',
            boxShadow: '0 4px 18px #0003'
          }}
        />
        <h1>{t('projects') || 'Mis Proyectos'}</h1>
        <p style={{marginBottom: '44px', color: 'var(--text-muted)'}}>
          {t('projects_subtitle') || 'Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos.'}
        </p>

        {/* Completed Projects */}
        <ProjectCarousel 
          title={t('completed_projects') || 'Completed'}
          projects={projectsData.completed}
          carouselId="done"
          t={t}
        />

        {/* In Progress Projects */}
        {projectsData.inProgress && projectsData.inProgress.length > 0 ? (
          <ProjectCarousel 
            title={t('in_progress_projects') || 'Currently in Development'}
            projects={projectsData.inProgress}
            carouselId="in-progress"
            t={t}
          />
        ) : (
          <div className="no-projects-message">
            <h2 className="section-title">{t('in_progress_projects') || 'Currently in Development'}</h2>
            <div className="under-construction">
              <div className="warning-icon">🚀</div>
              <h3>{t('preparing_new_projects') || 'Preparando nuevos proyectos'}</h3>
              <p>{t('focused_on_current') || 'Estoy enfocado en perfeccionar los proyectos actuales y planificando las próximas creaciones.'}</p>
              <p><span className="nickname">{t('stay_tuned') || '¡Mantente atento a futuras actualizaciones!'}</span></p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProjectsPage;
