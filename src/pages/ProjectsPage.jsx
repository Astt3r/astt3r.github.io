import React from 'react';
import { projectsData } from '../data';
import { useLanguageContext } from '../contexts';

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, links, badge, mainIcon, isPlayable, isDownloadable } = project;
  
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
          
          {isDownloadable && (
            <div style={{marginTop: '10px', display: 'flex', gap: '8px'}}>
              <a 
                href={links.download} 
                download
                style={{
                  background: 'linear-gradient(90deg,#4CAF50,#45a049)',
                  color: '#fff',
                  padding: '5px 14px',
                  borderRadius: '7px',
                  fontSize: '13px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px #0002',
                  transition: '.18s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                📥 Download App
              </a>
              {links.github && (
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
              )}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

const ProjectsPage = () => {
  const { t } = useLanguageContext();

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
        <div className="projects-section">
          <h2 className="section-title">{t('completed_projects') || 'Completed'}</h2>
          <div className="projects-grid">
            {projectsData.completed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        {projectsData.inProgress && projectsData.inProgress.length > 0 ? (
          <div className="projects-section">
            <h2 className="section-title">{t('in_progress_projects') || 'Currently in Development'}</h2>
            <div className="projects-grid">
              {projectsData.inProgress.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
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
