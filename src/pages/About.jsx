import React from 'react';
import { educationData } from '../data/educationData';
import { links } from '../data/links';

const About = () => {
    // Color classes for coursework categories
    const colorClasses = {
        data: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300',
        systems: 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300',
        ai: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
    };

    return (
        <div className="py-16 md:py-24">
            {/* About Me Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
                    About <span className="text-primary-accent">Me</span>
                </h1>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                        <span className="font-semibold text-gray-900 dark:text-white">I'm a Backend-Focused Full-Stack Engineer</span> specializing in{" "}
                        <span className="text-primary-accent font-medium">Java, Spring Boot, and microservices architecture</span>. I design and build RESTful APIs, distributed systems, and scalable backend services that handle real-world complexity—authentication, data persistence, and system integration.
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                        My approach centers on writing <span className="font-medium text-gray-900 dark:text-white">clean, maintainable code</span> that solves actual problems. I focus on solid API design, thoughtful database modeling, and building services that are easy to extend and debug. I also have experience integrating LLM APIs into backend applications, including prompt engineering and orchestration. On the frontend, I work with <span className="text-primary-accent">React</span> when full-stack ownership is needed.
                    </p>

                    <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                        <span className="font-semibold text-primary-accent">I'm currently seeking Backend Engineer or Full-Stack Engineer roles</span> where I can contribute to production systems, collaborate with experienced teams, and continue growing as an engineer.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <a
                            href={`mailto:${links.email}`}
                            className="inline-flex items-center px-6 py-3 bg-primary-accent text-gray-900 font-semibold rounded-xl hover:bg-teal-300 transition duration-300"
                        >
                            Get In Touch
                        </a>
                        <a
                            href={links.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border-2 border-primary-accent text-gray-900 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
                    Education
                </h2>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 reveal-on-scroll">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{educationData.degree.title}</h3>
                            <p className="text-lg text-primary-accent font-medium">{educationData.degree.specialization}</p>
                            <p className="text-gray-600 dark:text-gray-400">{educationData.degree.institution}</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="px-3 py-1 bg-primary-accent/10 text-primary-accent font-medium rounded-full text-sm">
                                CGPA: {educationData.degree.cgpa}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                {educationData.degree.duration}
                            </span>
                        </div>
                    </div>

                    {/* Core Subjects */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Core Subjects Studied:</p>
                        <div className="flex flex-wrap gap-2">
                            {educationData.coursework.map((subject, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 ${colorClasses[subject.category]} rounded-lg text-sm`}
                                >
                                    {subject.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-accent">
                    Certificates & Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
                    {educationData.certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-accent hover:shadow-lg transition-all duration-300"
                        >
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                            <p className="text-primary-accent text-sm font-medium mb-2">{cert.provider}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{cert.description}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
