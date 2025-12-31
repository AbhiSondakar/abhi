import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkAndSkills from './pages/WorkAndSkills';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Lenis from 'lenis';

function AppContent() {
  const { initScrollAnimations } = useScrollAnimations();
  const location = useLocation();

  // Refs to prevent memory leaks and optimize performance
  const rafIdRef = useRef(null);
  const heroImageRef = useRef(null);
  const mouseRafIdRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Cache hero image element reference to avoid querying DOM on every scroll
    heroImageRef.current = document.getElementById('hero-image-container');

    // Parallax effect for hero image
    lenis.on('scroll', ({ scroll }) => {
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scroll * 0.2}px)`;
      }
    });

    // RAF loop with proper cleanup
    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    // Interactive background gradient - throttled with RAF
    const handleMouseMove = (e) => {
      // Cancel previous RAF if it hasn't executed yet
      if (mouseRafIdRef.current !== null) {
        return;
      }

      mouseRafIdRef.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', `${xPercent}%`);
        document.body.style.setProperty('--mouse-y', `${yPercent}%`);
        mouseRafIdRef.current = null;
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cancel animation frame to prevent memory leak
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (mouseRafIdRef.current) {
        cancelAnimationFrame(mouseRafIdRef.current);
      }
      lenis.destroy();
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize scroll animations on route change - using useLayoutEffect for DOM-ready guarantee
  useLayoutEffect(() => {
    // Use requestAnimationFrame to ensure DOM is painted
    const rafId = requestAnimationFrame(() => {
      initScrollAnimations();
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname, initScrollAnimations]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col transition-colors duration-500 min-h-screen">
      <Header />
      <main className="content-container flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkAndSkills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
