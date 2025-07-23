/**
 * Theme management utilities
 */

/**
 * Get system theme preference
 * @returns {string} 'dark' or 'light'
 */
export const getSystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

/**
 * Get saved theme from localStorage
 * @returns {string|null} Saved theme or null
 */
export const getSavedTheme = () => {
  return localStorage.getItem('theme');
};

/**
 * Save theme to localStorage
 * @param {string} theme - Theme to save ('light' or 'dark')
 */
export const saveTheme = (theme) => {
  localStorage.setItem('theme', theme);
};

/**
 * Apply theme to document body
 * @param {string} theme - Theme to apply ('light' or 'dark')
 */
export const applyTheme = (theme) => {
  document.body.classList.toggle('light', theme === 'light');
};

/**
 * Get theme icon based on current theme
 * @param {string} theme - Current theme
 * @returns {string} Emoji icon for theme toggle
 */
export const getThemeIcon = (theme) => {
  return theme === 'light' ? '🌙' : '☀️';
};

/**
 * Check if hint was already shown to user
 * @returns {boolean} True if hint was shown before
 */
export const wasHintShown = () => {
  return localStorage.getItem('theme_hint_shown') === 'true';
};

/**
 * Mark hint as shown
 */
export const markHintAsShown = () => {
  localStorage.setItem('theme_hint_shown', 'true');
};
