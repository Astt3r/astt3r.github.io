import React from 'react';

const TechCard = ({ icon, name, isImg = false, imgSrc = '', imgStyle = {} }) => {
  return (
    <div className="tech-card">
      {isImg ? (
        <img 
          src={imgSrc} 
          style={imgStyle} 
          alt={`${name} logo`}
        />
      ) : (
        <i className={icon}></i>
      )}
      <span>{name}</span>
    </div>
  );
};

const SkillBox = ({ title, icon, children }) => {
  return (
    <div className="skill-box">
      <h2><i className={icon}></i> {title}</h2>
      <div className="skill-grid">
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>

      {/* Languages */}
      <SkillBox title="Languages" icon="devicon-bash-plain">
        <TechCard icon="devicon-html5-plain colored" name="HTML" />
        <TechCard icon="devicon-css3-plain colored" name="CSS" />
        <TechCard icon="devicon-javascript-plain colored" name="JavaScript" />
        <TechCard icon="devicon-php-plain colored" name="PHP" />
        <TechCard icon="devicon-python-plain colored" name="Python" />
        <TechCard icon="devicon-csharp-plain colored" name="C#" />
        <TechCard icon="devicon-mysql-plain colored" name="SQL" />
        <TechCard icon="devicon-bash-plain colored" name="Bash" />
        <TechCard icon="devicon-typescript-plain colored" name="TypeScript" />
        <TechCard icon="devicon-java-plain colored" name="Java" />
      </SkillBox>

      {/* Frameworks */}
      <SkillBox title="Frameworks" icon="devicon-react-original">
        <TechCard icon="devicon-react-original colored" name="React" />
        <TechCard 
          isImg 
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
          imgStyle={{width: '18px', height: '18px'}}
          name="Unity" 
        />
        <TechCard icon="devicon-godot-plain colored" name="Godot" />
        <TechCard icon="devicon-bootstrap-plain colored" name="Bootstrap" />
        <TechCard icon="devicon-nodejs-plain colored" name="Node.js" />
        <TechCard icon="devicon-express-original colored" name="Express.js" />
        <TechCard icon="devicon-jquery-plain colored" name="jQuery" />
      </SkillBox>

      {/* Database and Cloud */}
      <SkillBox title="DataBase and Cloud" icon="devicon-mysql-plain">
        <TechCard icon="devicon-mysql-plain colored" name="MySQL" />
        <TechCard icon="devicon-microsoftsqlserver-plain colored" name="SQL Server" />
        <TechCard icon="devicon-amazonwebservices-plain-wordmark colored" name="AWS" />
        <TechCard icon="devicon-azure-plain colored" name="Azure" />
      </SkillBox>

      {/* Tools */}
      <SkillBox title="Tools" icon="devicon-docker-plain">
        <TechCard icon="devicon-git-plain colored" name="Git" />
        <TechCard icon="devicon-github-original colored" name="GitHub" />
        <TechCard icon="devicon-docker-plain colored" name="Docker" />
        <TechCard 
          isImg 
          imgSrc="https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg"
          imgStyle={{width: '18px', height: '18px'}}
          name="Cisco Packet Tracer" 
        />
        <TechCard icon="devicon-latex-original colored" name="LaTeX / Overleaf" />
        <TechCard 
          isImg 
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg"
          imgStyle={{width: '18px', height: '18px'}}
          name="Excel VBA" 
        />
      </SkillBox>
    </section>
  );
};

export default Skills;
