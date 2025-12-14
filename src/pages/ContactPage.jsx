import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguageContext } from '../contexts';

const ContactPage = () => {
  const { t } = useLanguageContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Configuración de EmailJS
    const serviceId = 'service_f89ej28';
    const templateId = 'template_1t4vdk8';
    const publicKey = '8AvHiDIzoam6TfTl5';

    // Estos son los datos que se enviarán al template
    const templateParams = {
      from_name: formData.name,        // Nombre del usuario
      from_email: formData.email,      // Email del usuario
      to_email: 'alejano2000@gmail.com', // Tu email (donde llegarán los mensajes)
      message: formData.message,       // Mensaje del usuario
      reply_to: formData.email        // Para responder directamente 
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('¡Mensaje enviado exitosamente! Te responderé pronto.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error al enviar el mensaje. Por favor, intenta de nuevo o contacta directamente por email.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main>
      <section id="contact" className="contact-section">
        <div className="container">
          <h1>{t('contact_title') || 'Contacto'}</h1>
          
          
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t('contact_info_title') || 'Mis medios de contacto'}</h2>
              <p>
                {t('contact_intro') || 'Estos son mis medios de contacto disponibles. ¡No dudes en escribirme!'}
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
                
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : (t('form_submit') || 'Enviar Mensaje')}
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
