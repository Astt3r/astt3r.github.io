import { useState, useCallback } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggleMenu, closeMenu };
};
