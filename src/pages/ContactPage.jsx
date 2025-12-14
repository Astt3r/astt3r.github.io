import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguageContext } from '../contexts';
import RetroWindow from '../components/RetroWindow';
import { RetroInput, RetroTextarea, RetroButton } from '../components/RetroComponents';
import recycleFullIcon from '../assets/icons/recycle_bin_full.png';
import mailIcon from '../assets/icons/mail.png';
import discordIcon from '../assets/icons/discord.png';
import briefcaseIcon from '../assets/icons/briefcase.png';
import folderIcon from '../assets/icons/folder_open.png';

const ContactPage = () => {
  const { t } = useLanguageContext();
  const form = useRef();
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const result = await emailjs.sendForm(
        'service_xn4fh3r',
        'template_5y8fxx8',
        form.current,
        'wdpN3vGbALNv7KJKk'
      );

      console.log('Email sent successfully:', result.text);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ from_name: '', from_email: '', message: '' });

      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: t('contact_error') || 'Error al enviar el mensaje. Inténtalo de nuevo.'
      });
    }
  };

  const contacts = [
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
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
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

            {/* MailClient.exe - Send Message */}
            <RetroWindow 
              title="MailClient.exe - Compose"
              showClose={false}
              width="100%"
            >
              <div style={{ padding: '16px' }}>
                <form ref={form} onSubmit={handleSubmit} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: 'var(--text)'
                    }}>
                      {t('Name') || 'Nombre'}
                    </label>
                    <RetroInput
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder={t('Name') || 'Tu nombre'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: 'var(--text)'
                    }}>
                      {t('Email') || 'Email'}
                    </label>
                    <RetroInput
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder={t('Email') || 'tucorreo@ejemplo.com'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '6px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: 'var(--text)'
                    }}>
                      {t('Message') || 'Mensaje'}
                    </label>
                    <RetroTextarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('Message') || 'Escribe tu mensaje aquí...'}
                      rows={6}
                    />
                  </div>

                  <RetroButton
                    type="submit"
                    disabled={status.submitting}
                    style={{
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    {status.submitting ? '⏳ ' + (t('contact_sending') || 'Enviando...') : (t('Send') || 'Enviar mensaje')}
                  </RetroButton>

                  {status.submitted && (
                    <div style={{
                      padding: '12px',
                      background: 'var(--bg-2)',
                      border: '2px solid #4CAF50',
                      borderRadius: '4px',
                      color: '#4CAF50',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <img src={recycleFullIcon} alt="" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
                      {t('contact_success') || '¡Mensaje enviado con éxito!'}
                    </div>
                  )}

                  {status.error && (
                    <div style={{
                      padding: '12px',
                      background: 'var(--bg-2)',
                      border: '2px solid #f44336',
                      borderRadius: '4px',
                      color: '#f44336',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 'bold'
                    }}>
                      ❌ {status.error}
                    </div>
                  )}
                </form>
              </div>
            </RetroWindow>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
