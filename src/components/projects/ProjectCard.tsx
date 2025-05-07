import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
  };
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 ${
        isDarkMode 
          ? 'bg-dark-800 shadow-dark-700 hover:shadow-lg hover:shadow-teal-900/20' 
          : 'bg-white shadow-gray-200 hover:shadow-lg'
      }`}
      style={{ 
        animation: 'fadeInUp 0.6s ease forwards',
        animationDelay: `${delay}ms`,
        opacity: 0 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDarkMode 
            ? 'from-dark-900/90 to-transparent' 
            : 'from-gray-900/70 to-transparent'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className={`mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`px-2 py-1 text-xs rounded-md ${
                isDarkMode 
                  ? 'bg-dark-700 text-teal-400' 
                  : 'bg-gray-100 text-teal-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'text-gray-300 hover:text-teal-400 hover:bg-dark-700' 
                : 'text-gray-600 hover:text-teal-600 hover:bg-gray-100'
            }`}
            aria-label="View project"
          >
            {project.link.includes('github') ? (
              <Github className="h-5 w-5" />
            ) : (
              <ExternalLink className="h-5 w-5" />
            )}
          </a>
        </div>
      </div>
      
      {/* Animated border on hover */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
        isHovered ? 'border-teal-500' : ''
      } pointer-events-none`}></div>
    </div>
  );
};

export default ProjectCard;
