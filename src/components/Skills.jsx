import React from 'react';
import { skillsData } from '../data';
import { useLanguageContext } from '../contexts';
import RetroWindow from './RetroWindow';

const TechCard = ({ icon, name, customIcon }) => (
  <button 
    className="retro-button tech-card-retro"
    onClick={() => console.log(`Clicked on ${name}`)}
    title={`Click to learn more about ${name}`}
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
      </div>
    </section>
  );
};

export default Skills;
