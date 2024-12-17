import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from './Projects';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../context/ThemeContext';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 m-4 modal-scroll ${
        theme === 'light'
          ? 'bg-[#f5f5ed]/95'
          : 'bg-gray-900/90'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors group ${
            theme === 'light'
              ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Project Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {project.title}
              </span>
            </h2>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    theme === 'light'
                      ? 'bg-blue-50/50 text-blue-600 border-blue-200'
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          {project.image && (
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* README Content */}
          <div className={`markdown-content space-y-6 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className={`text-3xl font-bold mb-6 ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className={`text-2xl font-semibold mt-8 mb-4 ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className={`text-xl font-medium mt-6 mb-3 ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>{children}</h3>
                ),
                p: ({ children }) => (
                  <p className={`mb-4 leading-relaxed ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}>{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 ml-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className={
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }>{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className={`font-semibold ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>{children}</strong>
                ),
              }}
            >
              {project.readme}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
