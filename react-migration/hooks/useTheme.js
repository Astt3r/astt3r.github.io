import { useState, useEffect } from 'react';

/**
 * Custom hook for theme management (light/dark mode)
 * Manages localStorage and system preference detection
 */
export const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme or system preference
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Apply theme to body
    document.body.classList.toggle('light', initialTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('light', newTheme === 'light');
  };

  const getThemeIcon = () => {
    return theme === 'light' ? '🌙' : '☀️';
  };

  return {
    theme,
    toggleTheme,
    getThemeIcon,
    isLight: theme === 'light'
  };
};
