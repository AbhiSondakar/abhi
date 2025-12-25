import React, { useEffect } from 'react';
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

    // Parallax effect for hero image
    lenis.on('scroll', ({ scroll }) => {
      const heroImage = document.getElementById('hero-image-container');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scroll * 0.2}px)`;
      }
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Interactive background gradient
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${xPercent}%`);
      document.body.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize scroll animations on route change
  useEffect(() => {
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
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
