/**
 * Smooth scroll to element by selector
 * @param {string} selector - CSS selector for target element
 */
export const smoothScrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Handle anchor link clicks with smooth scrolling
 * @param {Event} event - Click event
 */
export const handleAnchorClick = (event) => {
  const href = event.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    event.preventDefault();
    smoothScrollTo(href);
  }
};

/**
 * Add smooth scrolling to all anchor links on page
 */
export const initSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', handleAnchorClick);
  });
};

/**
 * Remove smooth scrolling event listeners (cleanup)
 */
export const cleanupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.removeEventListener('click', handleAnchorClick);
  });
};
