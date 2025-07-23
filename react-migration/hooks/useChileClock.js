import { useState, useEffect } from 'react';

/**
 * Custom hook for Chile clock functionality
 * Returns formatted time string for Chile timezone
 */
export const useChileClock = () => {
  const [time, setTime] = useState('--:--');

  const updateClock = () => {
    const now = new Date();
    const opts = { hour: '2-digit', minute: '2-digit' };
    const timeString = now.toLocaleTimeString('es-CL', opts);
    setTime(`🇨🇱 ${timeString}`);
  };

  useEffect(() => {
    updateClock(); // Initial call
    const interval = setInterval(updateClock, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup
  }, []);

  return time;
};
