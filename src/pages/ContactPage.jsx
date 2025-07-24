import React, { useState } from 'react';
import { useLanguageContext } from '../contexts';

const ContactPage = () => {
  const { t } = useLanguageContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensaje enviado! (En desarrollo)');
  };

  return (
    <main>
      <section id="contact" className="contact-section">
        <div className="container">
          <h1>{t('contact_title') || 'Contacto'}</h1>
          
          
          <div className="contact-content">
            <div className="contact-info">
              <h2>¡Hablemos!</h2>
              <p>
                {t('contact_intro') || '¡Me encanta conectar con otros desarrolladores y colaborar en proyectos interesantes! Si tienes algún proyecto emocionante, una oportunidad laboral o simplemente quieres charlar, no dudes en contactarme.'}
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="icon">📧</i>
                  <div>
                    <h3>Gmail</h3>
                    <a href="mailto:alejano2000@gmail.com">alejano2000@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <i className="icon">💬</i>
                  <div>
                    <h3>Discord</h3>
                    <a href="https://discord.gg/REWh3TGj" target="_blank" rel="noopener noreferrer">
                      Mándame un DM
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <i className="icon">💼</i>
                  <div>
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/alejandro-robles-9279992b2/" target="_blank" rel="noopener noreferrer">
                      Perfil LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <i className="icon">🐱</i>
                  <div>
                    <h3>GitHub</h3>
                    <a href="https://github.com/Astt3r" target="_blank" rel="noopener noreferrer">
                      github.com/Astt3r
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>{t('contact_form_title') || 'Envíame un mensaje'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('form_name') || 'Nombre'}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('form_email') || 'Email'}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('form_message') || 'Mensaje'}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  {t('form_submit') || 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
