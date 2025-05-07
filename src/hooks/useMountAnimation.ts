import { useState, useEffect } from 'react';

export const useMountAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow for the component to render first
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return { isVisible };
};
