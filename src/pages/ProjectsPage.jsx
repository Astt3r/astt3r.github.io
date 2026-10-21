import React from 'react';
import { projectsData } from '../data';
import { useLanguageContext } from '../contexts';
import RetroWindow from '../components/RetroWindow';
import MeatKlawBanner from '../components/MeatKlawBanner';
import { RetroButton } from '../components/RetroComponents';
import worldIcon from '../assets/icons/world.png';
import recycleFullIcon from '../assets/icons/recycle_bin_full.png';


const ProjectCard = ({ project }) => {
  const { title, description, image, tech, links, badge, isPlayable, isDownloadable, hasPreview } = project;
  
  return (
    <RetroWindow 
      title={title}
      showClose={false}
      className="proj-card-retro"
    >
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

      <div className="retro-well" style={{ marginBottom: '12px', padding: '10px' }}>
        <p style={{ 
          fontSize: '13px', 
          lineHeight: '1.5',
          margin: 0
        }}>
          {description}
        </p>
      </div>

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
            <img src={worldIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px', imageRendering: 'pixelated' }} />
            Preview
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          {/* Cat Image with Paint style */}
          <div style={{ maxWidth: '280px', width: '100%' }}>
            <RetroWindow 
              title="CatViewer.exe - Paint"
              showClose={false}
              className="paint-window"
            >
              <div style={{ 
                background: '#c0c0c0',
                padding: '3px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0'
              }}>
                <div style={{
                  background: '#ffffff',
                  minHeight: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '2px solid var(--border)',
                  padding: '8px'
                }}>
                  <img 
                    src="/assets/cat computer.png" 
                    alt="Cat Computer" 
                    style={{
                      maxWidth: '100%',
                      width: '200px',
                      display: 'block',
                      imageRendering: 'pixelated',
                      boxShadow: 'none'
                    }}
                  />
                </div>
                
                <div style={{
                  background: 'var(--bg-2)',
                  padding: '4px',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                  borderTop: '2px solid var(--border)',
                  fontSize: '11px'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: 'var(--accent)',
                    border: '1px solid var(--border)'
                  }}></div>
                  <span>200x200</span>
                </div>
              </div>
            </RetroWindow>
          </div>

          {/* Projects Title Window */}
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <RetroWindow 
              title="Projects.exe"
              showClose={false}
            >
              <div style={{ padding: '20px', textAlign: 'center', background: 'var(--bg)' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--accent)', fontWeight: 'bold' }}>
                  {t('projects') || 'Mis Proyectos'}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', margin: 0 }}>
                  {t('projects_subtitle') || 'Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta juegos.'}
                </p>
              </div>
            </RetroWindow>
          </div>
        </div>

        {/* Main Project: el banner entero es el boton hacia itch.io */}
        {projectsData.main && (
          <div className="projects-section" style={{ marginBottom: '48px', maxWidth: '960px', margin: '0 auto 48px' }}>
            <MeatKlawBanner href={projectsData.main.links.demo} />
          </div>
        )}

        {/* Featured Projects */}
        {projectsData.featured && projectsData.featured.length > 0 && (
          <div className="projects-section" style={{ marginBottom: '48px' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontSize: '24px',
              marginBottom: '32px',
              color: 'var(--accent)',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <img src={recycleFullIcon} alt="" style={{ width: '20px', height: '20px', imageRendering: 'pixelated' }} />
              {t('featured_projects') || 'Featured'}
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
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <img src={recycleFullIcon} alt="" style={{ width: '20px', height: '20px', imageRendering: 'pixelated' }} />
            {t('completed_projects') || 'Completed'}
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
