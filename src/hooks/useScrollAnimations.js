import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimations = () => {
  const observerRef = useRef(null);

  // Wrap in useCallback to prevent re-creation on every render
  // This makes it safe to use in dependency arrays
  const initScrollAnimations = useCallback(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const animatedHeaders = document.querySelectorAll('.animated-header');

    // Disconnect previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animated-header')) {
              const header = entry.target;
              if (!header.classList.contains('is-visible')) {
                const text = header.textContent;
                header.innerHTML = '';
                header.classList.add('reveal-text-wrapper');
                text.split('').forEach((char, index) => {
                  const span = document.createElement('span');
                  span.textContent = char === ' ' ? '\u00A0' : char;
                  span.style.transitionDelay = `${index * 30}ms`;
                  header.appendChild(span);
                });
              }
            }
            entry.target.classList.add('is-visible');
            // Unobserve after animation to prevent re-triggering
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observerRef.current.observe(el));
    animatedHeaders.forEach((header) => observerRef.current.observe(header));
  }, []); // Empty dependency array - function logic doesn't depend on external values

  useEffect(() => {
    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { initScrollAnimations };
};
