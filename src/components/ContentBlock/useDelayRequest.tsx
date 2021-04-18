import { useState, useEffect } from 'react';

export const useDelayRequest = (value: string | null, delay = 1000) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setCurrentValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return currentValue;
};
