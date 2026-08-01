import React from 'react';
import { useLanguageContext } from '../contexts';
import RetroWindow from '../components/RetroWindow';
import mailIcon from '../assets/icons/mail.png';
import discordIcon from '../assets/icons/discord.png';
import briefcaseIcon from '../assets/icons/briefcase.png';
import folderIcon from '../assets/icons/folder_open.png';

const ContactPage = () => {
  const { t } = useLanguageContext();

  const contacts = [
    {
      name: 'Email',
      icon: mailIcon,
      value: 'alejano2000@gmail.com',
      link: 'mailto:alejano2000@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Discord',
      icon: discordIcon,
      value: '@astt3r',
      link: 'https://discord.com/users/348587853746520064',
      color: '#5865F2'
    },
    {
      name: 'LinkedIn',
      icon: briefcaseIcon,
      link: 'https://www.linkedin.com/in/alejandro-robles-9279992b2/',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: folderIcon,
      value: '@astt3r',
      link: 'https://github.com/astt3r',
      color: '#6e5494'
    }
  ];

  return (
    <main>
      <section id="contact" className="contact-section" style={{
        padding: '80px 24px 40px',
        minHeight: '100vh'
      }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{
            textAlign: 'center',
            fontSize: '32px',
            marginBottom: '48px',
            color: 'var(--accent)',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <img src={mailIcon} alt="" style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }} />
            {t('contact_title') || 'Contacto'}
          </h1>

          <RetroWindow
            title="Contacts.exe - Address Book"
            showClose={false}
            width="100%"
          >
            <div style={{ padding: '20px' }}>
              <div style={{
                marginBottom: '16px',
                padding: '12px',
                background: 'var(--bg)',
                border: '2px solid var(--border)',
                borderRadius: '4px'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <img src={mailIcon} alt="" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
                  {t('contact_intro') || '¡Estos son mis medios de contacto! No dudes en escribirme.'}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gap: '12px'
              }}>
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px',
                      background: 'var(--bg)',
                      border: '2px solid var(--border)',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = contact.color;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '3px 3px 8px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.2)';
                    }}
                  >
                    <img src={contact.icon} alt="" style={{ width: '24px', height: '24px', imageRendering: 'pixelated' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: contact.color
                      }}>
                        {contact.name}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        marginTop: '2px'
                      }}>
                        {contact.value}
                      </div>
                    </div>
                    <span style={{ fontSize: '18px', opacity: 0.6 }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </RetroWindow>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
