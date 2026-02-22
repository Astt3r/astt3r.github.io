import { useState, useEffect } from 'react';
import { getCounterApiUrl } from '../config/counterapi.config';

const useVisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // CounterAPI.dev endpoint - incrementa y obtiene el contador
    const url = getCounterApiUrl('up');

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        setCount(result.data?.up_count || 0);
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
