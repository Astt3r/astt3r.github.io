import React, { useState } from 'react';
import { useLanguageContext } from '../contexts';
import RetroWindow from './RetroWindow';
import { experienceData } from '../data';
import '../styles/WorkedWith.css';

const WorkedWith = () => {
  const { t } = useLanguageContext();
  const [selectedId, setSelectedId] = useState(experienceData[0].id);

  const selected = experienceData.find((exp) => exp.id === selectedId) || experienceData[0];

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
                  {[1, 2, 3].map((rep) =>
                    experienceData.map((exp) => (
                      <button
                        key={`company-${rep}-${exp.id}`}
                        type="button"
                        className={`carousel-item ${selected.id === exp.id ? 'carousel-item-active' : ''}`}
                        onClick={() => setSelectedId(exp.id)}
                        aria-label={exp.company}
                      >
                        <img src={exp.logo} alt={exp.company} />
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="retro-well experience-detail" style={{ marginTop: '12px', padding: '14px' }}>
              <div className="experience-detail-header">
                <strong>{selected.role}</strong>
                <span className="experience-detail-period">{selected.period}</span>
              </div>
              <div className="experience-detail-company">{selected.company}</div>
              <ul className="experience-detail-list">
                {selected.achievements.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};

export default WorkedWith;
