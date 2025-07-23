export const themeUtils = {
  applyTheme: (theme) => {
    document.body.className = theme === 'light' ? 'light starfield' : 'starfield';
  },
  
  getStoredTheme: () => {
    return localStorage.getItem('theme') || 'dark';
  },
  
  setStoredTheme: (theme) => {
    localStorage.setItem('theme', theme);
  }
};
