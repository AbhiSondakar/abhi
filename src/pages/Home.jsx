import React from 'react';
import { Link } from 'react-router-dom';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { links } from '../data/links';

const Home = () => {
  const titles = ['Aspiring Software Engineer', 'Spring Boot Backend Engineer', 'Full-Stack Developer', 'Backend Developer', 'Aspiring Data Scientist', 'AI & Machine Learning Enthusiast'];
  const typingRef = useTypingEffect(titles, 100, 50, 2000);

  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="md:w-3/5 text-center md:text-left reveal-on-scroll">
        <p className="text-xl font-semibold text-primary-accent mb-3">
          Full-Stack Engineer Building Scalable Backend Solutions
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-primary-accent">Abhishek Sondakar</span>
          <br />
          <span
            aria-label="Aspiring Software Engineer, Spring Boot Backend Engineer, Full-Stack Developer, Backend Developer, Aspiring Data Scientist, AI & Machine Learning Enthusiast"
            className="inline-block"
          >
            <span
              ref={typingRef}
              className="text-primary-accent text-xl sm:text-2xl md:text-3xl font-normal"
              suppressHydrationWarning
            ></span>
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I design and deploy reliable microservices, REST APIs, and event-driven architectures using Java and Spring Boot.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="/work"
            className="magnetic-link px-6 py-3 bg-primary-accent text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-teal-300 transition duration-300 transform hover:scale-105"
          >
            View Technical Projects
          </Link>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-link px-6 py-3 border-2 border-primary-accent text-gray-900 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="md:w-2/5 flex justify-center">
        <div className="floating-image w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-2xl border-4 border-primary-accent p-1">
          <img src="/Abhishek.jpg" alt="Professional Avatar" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Home;
