import { useState, useEffect } from 'react';
import { translations } from '../data';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
  });

  useEffect(() => {
    // Solo guardamos en localStorage si no lo hicimos en toggleLanguage
    if (localStorage.getItem('language') !== language) {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Guardamos inmediatamente
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getLanguageIcon = () => {
    return language === 'es' ? '🇺🇸' : '🇪🇸';
  };

  return { language, toggleLanguage, t, getLanguageIcon };
};
