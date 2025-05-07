import React from 'react';
import { MapPin, Mail, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-800 text-gray-200' : 'bg-white text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className={`md:col-span-2 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-4">
              I'm an <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>ML/AI Engineer</span> passionate about building intelligent solutions
            </h3>
            
            <div className="space-y-4 text-base">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                I'm an ML/AI Engineer passionate about learning and applying the principles of Machine Learning and 
                Artificial Intelligence. My work revolves around contributing to innovative projects that leverage 
                data science to develop and deploy AI-driven solutions.
              </p>
              
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                I specialize in predictive modeling, natural language processing (NLP), and computer vision, and I'm 
                always eager to explore new technologies and methodologies.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">I'm currently focused on:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Mastering NLP techniques and building advanced LLM applications
                  </li>
                  <li className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Solving reasoning challenges with AI agents
                  </li>
                  <li className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Developing RAG (Retrieval-Augmented Generation) systems
                  </li>
                  <li className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Creating computer vision applications for body measurement
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className={`rounded-xl p-6 border ${
              isDarkMode ? 'bg-dark-700 border-dark-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className={`h-5 w-5 mt-1 mr-3 flex-shrink-0 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className={`h-5 w-5 mt-1 mr-3 flex-shrink-0 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:numansabir.dev@gmail.com" 
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      numansabir.dev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className={`h-5 w-5 mt-1 mr-3 flex-shrink-0 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`} />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/thenumansabir" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      linkedin.com/in/thenumansabir
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Ask me about</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI Solutions', 'LLMs', 'Backend Systems', 'AI Agents'].map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-dark-600 text-gray-200' 
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;