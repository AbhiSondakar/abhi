import React from 'react';
import { links } from '../data/links';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 flex items-center justify-center min-h-[80vh]"
    >
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Get In <span className="text-primary-accent">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Open to Backend & Full-Stack Engineering opportunities. Let's connect!
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Contact Options */}
          <div className="space-y-6">
            {/* Email */}
            <a
              href={`mailto:${links.email}`}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary-accent text-gray-900 font-semibold rounded-xl hover:bg-teal-300 transition duration-300"
            >
              <Mail className="w-5 h-5" />
              {links.email}
            </a>

            {/* Resume */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-primary-accent text-gray-900 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <hr className="flex-1 border-gray-200 dark:border-gray-700" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">Or find me on</span>
            <hr className="flex-1 border-gray-200 dark:border-gray-700" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-accent transition duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-accent transition duration-300"
            >
              <Github className="w-6 h-6" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          {/* Location */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
