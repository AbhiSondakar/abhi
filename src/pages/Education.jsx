import React from 'react';
import { links } from '../data/links';

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="animated-header text-5xl font-extrabold text-center mb-16 text-primary-accent">Academic Profile & Achievements</h2>

      <section id="education-details" className="mb-16">
        <h3 className="animated-header text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Formal Education</h3>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 mx-auto max-w-3xl reveal-on-scroll">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-3xl font-bold text-primary-accent mb-1">Bachelor of Engineering</h4>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">Computer Science (AI and ML)</p>
            </div>
            <span className="text-sm font-bold text-primary-accent bg-primary-accent/10 dark:bg-primary-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
              Aug 2023 - Jun 2027 (Expected)
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Global Academy of Technology, Bengaluru</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-md font-medium text-gray-500 dark:text-gray-400 border-t pt-4 border-gray-200 dark:border-gray-700">
            <span className="inline-flex items-center">
              <span className="text-2xl mr-2 text-yellow-500">⭐</span>
              CGPA: 8.25
            </span>
            <span className="inline-flex items-center">
              <span className="text-2xl mr-2 text-red-500">🧠</span>
              Specialization in AI/ML
            </span>
          </div>
        </div>
      </section>

      <section id="core-subjects" className="mb-20">
        <h3 className="animated-header text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Core Subjects Studied</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto reveal-on-scroll">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-lg text-sm font-medium text-center">
            Data Structures and Algorithms (DSA)
          </span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-lg text-sm font-medium text-center">
            Database Management Systems (DBMS)
          </span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-lg text-sm font-medium text-center">
            Data Analysis
          </span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-lg text-sm font-medium text-center">
            Data Warehouse and Data Mining
          </span>
          <span className="px-4 py-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-lg text-sm font-medium text-center">
            Operating Systems (OS)
          </span>
          <span className="px-4 py-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-lg text-sm font-medium text-center">
            Computer Networking
          </span>
          <span className="px-4 py-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-lg text-sm font-medium text-center">
            Software Engineering
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium text-center">
            Artificial Intelligence (AI)
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium text-center">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-lg text-sm font-medium text-center">
            Web Development
          </span>
        </div>
      </section>

      <section id="certificates" className="mb-20">
        <h3 className="animated-header text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Certificates & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href={links.certificates.javaProgramming}
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal-on-scroll"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-primary-accent/30 transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Programming Using Java</h4>
              <p className="text-primary-accent text-sm font-medium mb-3">Infosys Springboard</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Completed Infosys Springboard’s Java course; built sample applications demonstrating OOP, collections, and exception handling.              </p>
            </div>
          </a>

          <a
            href={links.certificates.datascience}
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal-on-scroll"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-primary-accent/30 transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Science</h4>
              <p className="text-primary-accent text-sm font-medium mb-3">Cisco</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Completed Cisco’s Data Science course; performed EDA and visualization on real datasets to drive insights.              </p>
            </div>
          </a>

          <a
            href={links.certificates.docker}
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-primary-accent/30 transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Docker</h4>
              <p className="text-primary-accent text-sm font-medium mb-3">Simplilearn</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Learned Docker fundamentals; created reproducible container deployments and Dockerfiles for demo apps.              </p>
            </div>
          </a>
          <a
              href={links.certificates.machineLearning}
              target="_blank"
              rel="noopener noreferrer"
              className="block reveal-on-scroll"
              style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-primary-accent/30 transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-primary-accent text-sm font-medium mb-3">Infosys Springboard</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Completed ML foundation module—trained and evaluated models for standard prediction tasks and documented performance metrics.              </p>
            </div>
          </a>

          <a
            href={links.certificates.networkingBasics}
            target="_blank"
            rel="noopener noreferrer"
            className="block reveal-on-scroll"
            style={{ transitionDelay: '450ms' }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-primary-accent/30 transition-shadow duration-300 h-full">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Computer Networking Basics</h4>
              <p className="text-primary-accent text-sm font-medium mb-3">Cisco</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Completed Cisco networking basics; applied concepts in simulated labs covering OSI/TCP-IP and addressing.              </p>
            </div>
          </a>
        </div>
      </section>

      <section id="languages">
        <h3 className="animated-header text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Languages</h3>
        <div className="flex flex-wrap justify-center gap-6 max-w-xl mx-auto reveal-on-scroll">
          <span className="px-6 py-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-lg font-semibold shadow-md">
            🇬🇧 English
          </span>
          <span className="px-6 py-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded-full text-lg font-semibold shadow-md">
            🇮🇳 Hindi
          </span>
          <span className="px-6 py-3 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-lg font-semibold shadow-md">
            🇮🇳 Kannada
          </span>
        </div>
      </section>
    </div>
  );
};

export default Education;
