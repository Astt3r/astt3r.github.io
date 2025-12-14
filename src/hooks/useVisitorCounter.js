import { useState, useEffect } from 'react';

const useVisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CountAPI.xyz endpoint - crea un contador único para tu sitio
    const namespace = 'astt3r-portfolio';
    const key = 'visitors';
    const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCount(data.value);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
        setLoading(false);
      });
  }, []);

  return { count, loading };
};

export default useVisitorCounter;
