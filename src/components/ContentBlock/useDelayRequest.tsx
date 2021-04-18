import { useState, useEffect } from 'react';

export const useDelayRequest = (value: string, delay: number) => {
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
