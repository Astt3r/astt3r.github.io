import React from 'react';
import { skillsData } from '../data';
import { useLanguageContext } from '../contexts';

const TechCard = ({ icon, name, customIcon }) => (
  <div className="tech-card">
    {customIcon ? (
      <img src={customIcon} style={{width: '18px', height: '18px'}} alt={`${name} logo`} />
    ) : (
      <i className={icon}></i>
    )}
    <span>{name}</span>
  </div>
);

const SkillBox = ({ title, icon, skills }) => (
  <div className="skill-box">
    <h2>
      <i className={icon}></i>
      <span>{title}</span>
    </h2>
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
);

const Skills = () => {
  const { t } = useLanguageContext();

  const skillSections = [
    {
      title: t('frontend_title'),
      icon: 'devicon-bash-plain',
      skills: skillsData.languages
    },
    {
      title: t('frameworks_title'),
      icon: 'devicon-react-original',
      skills: skillsData.frameworks
    },
    {
      title: t('database_cloud_title'),
      icon: 'devicon-mysql-plain',
      skills: skillsData.database
    },
    {
      title: t('tools_title'),
      icon: 'devicon-docker-plain',
      skills: skillsData.tools
    }
  ];

  return (
    <section id="skills">
      <h1>{t('skills_title')}</h1>
      
      {skillSections.map((section, index) => (
        <SkillBox
          key={index}
          title={section.title}
          icon={section.icon}
          skills={section.skills}
        />
      ))}
    </section>
  );
};

export default Skills;
