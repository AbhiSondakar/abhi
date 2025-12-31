import { useEffect, useRef } from 'react';

/**
 * Custom hook for typing animation effect with accessibility support
 * 
 * IMPORTANT: When using this hook, wrap the element in a container with aria-label
 * containing the full text that should be announced to screen readers.
 * 
 * Example usage:
 * <div aria-label="Aspiring Software Engineer">
 *   <span ref={typingRef} aria-hidden="true" suppressHydrationWarning></span>
 * </div>
 */
export const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000) => {
  const elementRef = useRef(null);
  const currentTextIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current || !texts || texts.length === 0) return;

    const element = elementRef.current;
    const textsArray = Array.isArray(texts) ? texts : [texts];

    // Set aria-hidden on the element to hide animation from screen readers
    element.setAttribute('aria-hidden', 'true');

    // The cursor element is also hidden from screen readers
    const cursor = '<span class="typing-cursor" aria-hidden="true"></span>';

    const type = () => {
      const currentText = textsArray[currentTextIndexRef.current];
      const currentCharIndex = currentCharIndexRef.current;
      const isDeleting = isDeletingRef.current;

      if (!isDeleting && currentCharIndex < currentText.length) {
        // Typing forward
        // Using innerHTML is intentional here for the typing effect
        // React won't manage this element's children, preventing conflicts
        element.innerHTML = currentText.substring(0, currentCharIndex + 1) + cursor;
        currentCharIndexRef.current++;
        timeoutRef.current = setTimeout(type, typingSpeed);
      } else if (!isDeleting && currentCharIndex === currentText.length) {
        // Finished typing, pause before deleting
        timeoutRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, pauseTime);
      } else if (isDeleting && currentCharIndex > 0) {
        // Deleting backward
        element.innerHTML = currentText.substring(0, currentCharIndex - 1) + cursor;
        currentCharIndexRef.current--;
        timeoutRef.current = setTimeout(type, deletingSpeed);
      } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, move to next text
        isDeletingRef.current = false;
        currentTextIndexRef.current = (currentTextIndexRef.current + 1) % textsArray.length;
        timeoutRef.current = setTimeout(type, typingSpeed);
      }
    };

    // Initialize with cursor
    element.innerHTML = cursor;
    currentTextIndexRef.current = 0;
    currentCharIndexRef.current = 0;
    isDeletingRef.current = false;
    timeoutRef.current = setTimeout(type, typingSpeed);

    // Cleanup timeouts on unmount or dependency change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, typingSpeed, deletingSpeed, pauseTime]);

  return elementRef;
};
