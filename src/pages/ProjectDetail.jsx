import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';
import ImageGallery from '../components/ImageGallery';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="p-20 text-center text-red-500">
        Project details not found for ID: {projectId}.
      </div>
    );
  }

  const techBadges = project.tech.map((tech, index) => (
    <span key={index} className="bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full text-sm font-medium">
      {tech}
    </span>
  ));

  const roleItems = Array.isArray(project.role) ? project.role : [project.role];
  const outcomeItems = Array.isArray(project.outcome) ? project.outcome : [project.outcome];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/work"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-accent transition duration-300 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Title */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h1>
      </header>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">

        {/* Problem */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Problem</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{project.problem}</p>
        </section>

        {/* Solution */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solution</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{project.solution}</p>
        </section>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech</h2>
          <div className="flex flex-wrap gap-2">{techBadges}</div>
        </section>

        {/* My Role */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">My Role</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {roleItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome / Impact */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Outcome / Impact</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {outcomeItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <section className="mb-8 border-t pt-6 border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.liveDemo && project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-accent text-gray-900 font-medium rounded-lg hover:bg-teal-300 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </section>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="border-t pt-8 border-gray-200 dark:border-gray-700">
            <ImageGallery images={project.screenshots} title="Screenshots" />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
