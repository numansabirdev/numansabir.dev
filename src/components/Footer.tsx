import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/numansabirdev',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/thenumansabir',
      label: 'LinkedIn'
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:numansabir.dev@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-dark-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>Numan </span>
              <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Sabir</span>
            </a>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-teal-400 hover:bg-dark-700' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'
                }`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p className="flex items-center justify-center">
              © {currentYear} Numan Sabir. All rights reserved. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500" /> and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;