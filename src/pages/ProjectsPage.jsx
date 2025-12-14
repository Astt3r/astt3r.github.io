import React from 'react';
import { projectsData } from '../data';
import { useLanguageContext } from '../contexts';
import RetroWindow from '../components/RetroWindow';
import { RetroButton } from '../components/RetroComponents';


const ProjectCard = ({ project }) => {
  const { title, description, image, tech, links, badge, mainIcon, isPlayable, isDownloadable, hasPreview } = project;
  
  return (
    <RetroWindow 
      title={title}
      showClose={false}
      className="proj-card-retro"
    >
      {/* Imagen del proyecto */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            border: '2px solid',
            borderColor: '#0f1419 var(--border) var(--border) #0f1419'
          }}
        />
        
        {/* Badge */}
        {badge && (
          <span
            className="project-badge"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: badge.color,
              color: badge.text === 'Migrating to React' ? '#222' : '#fff',
              fontSize: '11px',
              padding: '3px 8px',
              border: '1px solid rgba(0, 0, 0, 0.3)',
              fontWeight: 'bold',
              letterSpacing: '0.5px'
            }}
          >
            {badge.text}
          </span>
        )}
      </div>

      {/* Descripción */}
      <div className="retro-well" style={{ marginBottom: '12px', padding: '10px' }}>
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.5',
          margin: 0
        }}>
          {description}
        </p>
      </div>

      {/* Tecnologías con botones retro */}
      {tech && tech.length > 0 && (
        <div style={{ marginBottom: '12px' }}>
          <div className="retro-well" style={{ 
            display: 'flex', 
            gap: '6px', 
            flexWrap: 'wrap',
            padding: '8px'
          }}>
            {tech.map((technology, index) => (
              <button 
                key={index}
                className="retro-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  minWidth: 'auto'
                }}
              >
                <img 
                  src={technology.icon} 
                  alt={technology.name}
                  style={{ width: '14px', height: '14px' }}
                />
                <span>{technology.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="retro-separator" style={{ margin: '12px 0' }} />

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        {/* Botón Play si es jugable */}
        {isPlayable && links.demo && (
          <RetroButton
            onClick={() => window.open(links.demo, '_blank')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 'bold',
              flex: 1,
              minWidth: '120px',
              fontSize: '12px',
              padding: '8px 12px'
            }}
          >
            ▶ Play Online
          </RetroButton>
        )}

        {/* Botón Download si es descargable */}
        {isDownloadable && links.download && (
          <RetroButton
            onClick={() => window.open(links.download, '_blank')}
            style={{
              background: '#4CAF50',
              color: '#fff',
              fontWeight: 'bold',
              flex: 1,
              minWidth: '120px',
              fontSize: '12px',
              padding: '8px 12px'
            }}
          >
            📥 Download
          </RetroButton>
        )}

        {/* Botón Preview para landing pages */}
        {hasPreview && links.demo && !isPlayable && (
          <RetroButton
            onClick={() => window.open(links.demo, '_blank')}
            style={{
              background: 'linear-gradient(90deg,#11998e,#38ef7d)',
              color: '#fff',
              fontWeight: 'bold',
              flex: 1,
              minWidth: '120px',
              fontSize: '12px',
              padding: '8px 12px'
            }}
          >
            🌐 Preview
          </RetroButton>
        )}

        {/* Botón Code siempre disponible si existe */}
        {links.github && (
          <RetroButton
            onClick={() => window.open(links.github, '_blank')}
            style={{ 
              flex: 1, 
              minWidth: '100px', 
              fontSize: '12px', 
              padding: '8px 12px' 
            }}
          >
            📂 Code
          </RetroButton>
        )}

        {/* Fallback: si solo existe demo sin flags */}
        {!isPlayable && !isDownloadable && !hasPreview && links.demo && (
          <RetroButton
            onClick={() => window.open(links.demo, '_blank')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 'bold',
              flex: 1,
              minWidth: '120px',
              fontSize: '12px',
              padding: '8px 12px'
            }}
          >
            🔗 Visit
          </RetroButton>
        )}
      </div>
    </RetroWindow>
  );
};

const ProjectsPage = () => {
  const { t } = useLanguageContext();

  return (
    <main>
      <section className="projects-wrapper" style={{ padding: '100px 20px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img 
            src="/assets/cat computer.png" 
            alt="Cat Computer" 
            style={{
              maxWidth: '200px',
              width: '100%',
              margin: '0 auto 20px',
              display: 'block',
              imageRendering: 'pixelated'
            }}
          />
          <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>
            {t('projects') || 'Mis Proyectos'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            {t('projects_subtitle') || 'Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos.'}
          </p>
        </div>

        {/* Featured Projects */}
        {projectsData.featured && projectsData.featured.length > 0 && (
          <div className="projects-section" style={{ marginBottom: '48px' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontSize: '24px',
              marginBottom: '32px',
              color: 'var(--accent)',
              fontWeight: 'bold'
            }}>
              ⭐ {t('featured_projects') || 'Featured'}
            </h2>
            <div className="projects-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 380px))',
              gap: '24px',
              justifyContent: 'center',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {projectsData.featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects */}
        <div className="projects-section">
          <h2 style={{ 
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '32px',
            color: 'var(--accent)',
            fontWeight: 'bold'
          }}>
            ✅ {t('completed_projects') || 'Completed'}
          </h2>
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 380px))',
            gap: '24px',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projectsData.completed.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
