import React from 'react';
import { useLanguageContext } from '../contexts';
import '../styles/WorkedWith.css';

const WorkedWith = () => {
  const { t } = useLanguageContext();

  const companies = [
    { name: 'Fundación Juan XXIII', logo: '/assets/fundacionlogo.png' },
    { name: 'P Crea Bailing', logo: '/assets/pcrebailing.png' },
    { name: 'Municipalidad de Los Ángeles', logo: '/assets/munilosangeles.svg' }
  ];

  return (
    <section className="worked-with-section">
      <div className="worked-with-container">
        <h2 className="worked-with-title">
          {t('worked_with') || 'Worked with'}
        </h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* Primera copia */}
            {companies.map((company, index) => (
              <div key={`company-1-${index}`} className="carousel-item">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
            {/* Segunda copia para efecto infinito */}
            {companies.map((company, index) => (
              <div key={`company-2-${index}`} className="carousel-item">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
            {/* Tercera copia para efecto infinito */}
            {companies.map((company, index) => (
              <div key={`company-3-${index}`} className="carousel-item">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
