import React from 'react';
import { ArrowDown, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useMountAnimation } from '../hooks/useMountAnimation';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { isVisible } = useMountAnimation();

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 
        ${isDarkMode ? 'bg-dark-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-3xl" />
        <div className="absolute left-0 bottom-10 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-sm font-mono mb-6">
              <span className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                &gt; Hello World! I'm
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Numan Sabir
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 gradient-text">
              ML/AI Engineer
            </h2>
            <p className={`text-lg max-w-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building intelligent solutions using Machine Learning and 
              Artificial Intelligence. Specialized in NLP, computer vision, 
              and multi-agent AI systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className={`inline-flex items-center px-6 py-3 rounded-md text-white font-medium transition-all
                  ${isDarkMode 
                    ? 'bg-teal-600 hover:bg-teal-700' 
                    : 'bg-teal-600 hover:bg-teal-700'} 
                  shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform`}
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all
                  ${isDarkMode 
                    ? 'bg-dark-800 text-gray-200 hover:bg-dark-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'} 
                  shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform border border-gray-200 dark:border-gray-700`}
              >
                View Projects
              </a>
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="p-1 rounded-full bg-gradient-to-r from-teal-400 to-purple-500">
                <div className={`rounded-full p-12 ${isDarkMode ? 'bg-dark-800' : 'bg-white'}`}>
                  <Cpu size={120} className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 opacity-30 blur-xl -z-10"></div>
              
              {/* Animated floating elements */}
              <div className="absolute top-5 right-5 animate-float-slow">
                <div className={`h-6 w-6 rounded-md ${isDarkMode ? 'bg-purple-500/40' : 'bg-purple-500/60'}`}></div>
              </div>
              <div className="absolute bottom-10 left-0 animate-float">
                <div className={`h-4 w-4 rounded-full ${isDarkMode ? 'bg-teal-400/40' : 'bg-teal-500/60'}`}></div>
              </div>
              <div className="absolute top-1/2 left-0 animate-pulse">
                <div className={`h-2 w-10 rounded-full ${isDarkMode ? 'bg-blue-500/40' : 'bg-blue-500/60'}`}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <span className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll Down</span>
          <ArrowDown className={`h-5 w-5 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;