import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, MessageSquare, Database, TestTube, Palette, Wrench, Bot } from 'lucide-react';

const WorkAndSkills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      <section id="projects" className="py-12">
        <h2 className="animated-header text-4xl font-bold text-center mb-12 text-primary-accent">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          <div className="project-card reveal-on-scroll w-full md:w-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-accent/40 transition-all duration-500 relative border border-gray-200 dark:border-gray-700 group hover:-translate-y-2 flex flex-col">
            <img
              src="https://placehold.co/600x400/0d9488/ffffff?text=MARS-Botics+AI+Agent"
              alt="AI Mail Agent"
              className="w-full h-56 object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">MARS-Botics (Mail Agent)</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                An advanced Gmail Assistant automating business email processing, context retrieval, and smart replies.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-6 ml-4 space-y-1">
                <li>Backend built with Spring Boot and PostgreSQL.</li>
                <li>AI-powered context management using Gemini/LLaMA models.</li>
                <li>Employed VectorDB for efficient semantic search of documents.</li>
              </ul>
              <Link
                to="/project/mars-botics"
                className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition duration-300 mt-auto"
              >
                Know More &rarr;
              </Link>
            </div>
          </div>

          <div
            className="project-card reveal-on-scroll w-full md:w-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-accent/40 transition-all duration-500 relative border border-gray-200 dark:border-gray-700 group hover:-translate-y-2 flex flex-col"
            style={{ transitionDelay: '150ms' }}
          >
            <img
              src="https://placehold.co/600x400/0d9488/ffffff?text=NLIDB"
              alt="NLP Powered Conversational Assistant to Database"
              className="w-full h-56 object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">NLP Powered Conversational Assistant to Database</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                A system that translates natural language questions into SQL queries for easier database interaction.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-6 ml-4 space-y-1">
                <li>Natural Language Processing for query understanding.</li>
                <li>Machine learning for query pattern recognition.</li>
                <li>SQL generation with database schema awareness.</li>
              </ul>
              <Link
                to="/project/nlidb"
                className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition duration-300 mt-auto"
              >
                Know More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-gray-100/50 dark:bg-gray-800/20 py-20 border-t border-b border-gray-200 dark:border-gray-700 mt-12">
        <h2 className="animated-header text-4xl font-bold text-center mb-4 text-primary-accent">Technical Skills</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Focus: Backend systems, API development, and scalable service architecture
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Backend Development */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Cog className="w-6 h-6 text-teal-500" /> Backend Development
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Java, Spring Boot, Spring Security
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                REST API Design & Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Microservices Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Authentication (JWT, OAuth2)
              </li>
            </ul>
          </div>

          {/* Messaging & Streaming */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-red-500" /> Messaging & Streaming
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Apache Kafka
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                RabbitMQ
              </li>
            </ul>
          </div>

          {/* Databases & Caching */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Database className="w-6 h-6 text-indigo-500" /> Databases & Caching
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                PostgreSQL, MySQL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Redis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Spring Data JPA, Hibernate
              </li>
            </ul>
          </div>

          {/* Testing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <TestTube className="w-6 h-6 text-yellow-500" /> Testing
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                JUnit
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                Integration Testing
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Palette className="w-6 h-6 text-blue-500" /> Frontend
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                React, JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                HTML, CSS
              </li>
            </ul>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-6 h-6 text-green-500" /> DevOps & Tools
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Docker
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Git, GitHub Actions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Postman, Swagger
              </li>
            </ul>
          </div>

          {/* AI/ML (Integration) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll md:col-span-2 lg:col-span-3">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-purple-500" /> AI/ML <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Integration & Orchestration)</span>
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 md:flex md:flex-wrap md:gap-x-8 md:gap-y-2 md:space-y-0">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                LLM API integration (OpenAI, Gemini, DeepSeek)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Prompt engineering & orchestration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Embeddings & vector search
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkAndSkills;
