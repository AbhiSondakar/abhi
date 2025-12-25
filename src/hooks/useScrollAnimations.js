import { useEffect, useRef } from 'react';

export const useScrollAnimations = () => {
  const observerRef = useRef(null);

  const initScrollAnimations = () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const animatedHeaders = document.querySelectorAll('.animated-header');

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
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observerRef.current.observe(el));
    animatedHeaders.forEach((header) => observerRef.current.observe(header));
  };

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { initScrollAnimations };
};
