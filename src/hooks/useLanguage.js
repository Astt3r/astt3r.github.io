import { useState, useEffect } from 'react';
import { translations } from '../data';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getLanguageIcon = () => {
    return language === 'es' ? '🇺🇸' : '🇪🇸';
  };

  return { language, toggleLanguage, t, getLanguageIcon };
};
