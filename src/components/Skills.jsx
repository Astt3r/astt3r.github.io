import React from 'react';
import { skillsData, certificationsData, languagesData } from '../data';
import { useLanguageContext } from '../contexts';
import RetroWindow from './RetroWindow';
import cdIcon from '../assets/icons/cd_drive.png';
import worldIcon from '../assets/icons/world.png';

const TechCard = ({ icon, name, customIcon }) => (
  <button 
    className="retro-button tech-card-retro"
    title={`${name}`}
  >
    {customIcon ? (
      <img src={customIcon} style={{width: '18px', height: '18px'}} alt={`${name} logo`} />
    ) : (
      <i className={icon}></i>
    )}
    <span>{name}</span>
  </button>
);

const SkillBox = ({ title, icon, skills, exeName }) => (
  <div style={{ marginBottom: '32px' }}>
    <RetroWindow 
      title={`${exeName}.exe - ${title}`}
      showClose={false}
      width="640px"
      style={{ maxWidth: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '12px' }}>
        <div style={{ 
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '15px',
          fontWeight: 'bold',
          color: 'var(--accent)'
        }}>
          <i className={icon} style={{ fontSize: '20px' }}></i>
          <span>{title}</span>
        </div>
        <div className="retro-well" style={{ padding: '12px' }}>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <TechCard 
                key={index} 
                icon={skill.icon} 
                name={skill.name}
                customIcon={skill.customIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </RetroWindow>
  </div>
);

const CertificationsBox = () => (
  <div style={{ marginBottom: '32px' }}>
    <RetroWindow
      title="Certifications.exe - Achievements"
      showClose={false}
      width="640px"
      style={{ maxWidth: '100%', margin: '0 auto' }}
    >
      <div style={{ padding: '12px' }}>
        <div className="retro-well" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {certificationsData.map((cert, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
              <img src={cdIcon} alt="" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
              <span>{cert}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0 2px', paddingTop: '8px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {languagesData.map((lang, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                <img src={worldIcon} alt="" style={{ width: '14px', height: '14px', imageRendering: 'pixelated' }} />
                <strong>{lang.name}:</strong>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RetroWindow>
  </div>
);

const Skills = () => {
  const { t } = useLanguageContext();

  const skillSections = [
    {
      title: t('frontend_title'),
      icon: 'devicon-bash-plain',
      skills: skillsData.languages,
      exeName: 'Languages'
    },
    {
      title: t('frameworks_title'),
      icon: 'devicon-react-original',
      skills: skillsData.frameworks,
      exeName: 'Frameworks'
    },
    {
      title: t('database_cloud_title'),
      icon: 'devicon-mysql-plain',
      skills: skillsData.database,
      exeName: 'Database'
    },
    {
      title: t('tools_title'),
      icon: 'devicon-docker-plain',
      skills: skillsData.tools,
      exeName: 'DevTools'
    }
  ];

  return (
    <section id="skills" style={{ 
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        fontSize: '36px'
      }}>
        {t('skills_title')}
      </h1>
      
      <div style={{ width: '100%', maxWidth: '680px' }}>
        {skillSections.map((section, index) => (
          <SkillBox
            key={index}
            title={section.title}
            icon={section.icon}
            skills={section.skills}
            exeName={section.exeName}
          />
        ))}
        <CertificationsBox />
      </div>
    </section>
  );
};

export default Skills;
