import React from 'react';
import { useLanguageContext } from '../contexts';
import RetroWindow from './RetroWindow';
import '../styles/WorkedWith.css';

const WorkedWith = () => {
  const { t } = useLanguageContext();

  const companies = [
    { name: 'Fundación Juan XXIII', logo: '/assets/fundacionlogo.png' },
    { name: 'P Crea Bailing', logo: '/assets/pcrebailing.png' },
    { name: 'Municipalidad de Los Ángeles', logo: '/assets/munilosangeles.svg' }
  ];

  return (
    <section className="worked-with-section" style={{ padding: '40px 20px' }}>
      <div className="worked-with-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <RetroWindow 
          title="Experience.exe - Career"
          showClose={false}
          width="100%"
        >
          <div style={{ padding: '16px' }}>
            <h2 style={{ 
              textAlign: 'center',
              marginBottom: '16px',
              fontSize: '18px',
              color: 'var(--accent)',
              fontWeight: 'bold'
            }}>
              {t('worked_with') || 'Worked with'}
            </h2>
            <div className="retro-well" style={{ padding: '20px' }}>
              <div className="carousel-container">
                <div className="carousel-track">
                  {companies.map((company, index) => (
                    <div key={`company-1-${index}`} className="carousel-item">
                      <img src={company.logo} alt={company.name} />
                    </div>
                  ))}
                  {companies.map((company, index) => (
                    <div key={`company-2-${index}`} className="carousel-item">
                      <img src={company.logo} alt={company.name} />
                    </div>
                  ))}
                  {companies.map((company, index) => (
                    <div key={`company-3-${index}`} className="carousel-item">
                      <img src={company.logo} alt={company.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};

export default WorkedWith;
