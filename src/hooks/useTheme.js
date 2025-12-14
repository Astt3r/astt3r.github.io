import { useState, useEffect } from 'react';
import toolsIcon from '../assets/icons/tools.png';
import clockIcon from '../assets/icons/clock.png';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light starfield' : 'starfield';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const getThemeIcon = () => {
    return theme === 'light' ? (
      <img src={clockIcon} alt="Dark mode" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
    ) : (
      <img src={toolsIcon} alt="Light mode" style={{ width: '16px', height: '16px', imageRendering: 'pixelated' }} />
    );
  };

  return { theme, toggleTheme, getThemeIcon };
};
