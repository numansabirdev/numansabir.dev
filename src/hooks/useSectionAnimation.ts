import { useRef, useState, useEffect } from 'react';

export const useSectionAnimation = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section becomes visible, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the animation has been triggered, we don't need to observe anymore
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        // Trigger when the element is 10% in the viewport
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};