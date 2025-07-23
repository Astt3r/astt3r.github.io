import { useState } from 'react';

/**
 * Custom hook for mobile menu management
 */
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu
  };
};
