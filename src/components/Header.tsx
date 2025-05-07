import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? `${isDarkMode ? 'bg-dark-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm shadow-sm'}` 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>Numan </span>
              <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Sabir</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition hover:text-teal-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex space-x-4 items-center pl-6 border-l border-gray-300 dark:border-gray-700">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-teal-400 hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-teal-400 hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden space-x-4 items-center">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-teal-400' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleMenu}
              type="button"
              className={`p-1.5 rounded-full ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-dark-900 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="h-full flex flex-col py-8 px-4 overflow-y-auto">
          <div className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-lg font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-teal-400 hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;