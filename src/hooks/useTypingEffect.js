import { useEffect, useRef } from 'react';

export const useTypingEffect = (text, speed = 50) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || !text) return;

    let i = 0;
    const element = elementRef.current;
    element.innerHTML = '';
    
    const cursor = '<span class="typing-cursor"></span>';
    
    const type = () => {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + cursor;
        i++;
        setTimeout(type, speed);
      } else {
        element.innerHTML = text + cursor;
      }
    };
    
    type();
  }, [text, speed]);

  return elementRef;
};
