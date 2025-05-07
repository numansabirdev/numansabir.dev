import React from 'react';
import { BriefcaseIcon, MapPinIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
  };
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const { isDarkMode } = useTheme();
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full 
                     bg-gradient-to-r from-teal-400 to-blue-500 border-4 border-white dark:border-dark-800"
           style={{ top: `calc(${index * 100}% + ${index * 50}px + 1.5rem)` }}></div>

      {/* Content */}
      <div className="md:w-1/2 ml-6 md:ml-0 md:px-8 pb-8 md:pb-0 relative">
        {/* Mobile timeline */}
        <div className="absolute top-0 left-0 w-0.5 h-full 
                       bg-gradient-to-b from-teal-400 to-blue-500 md:hidden"></div>
        <div className="absolute top-0 left-0 transform -translate-x-1/2 w-4 h-4 rounded-full 
                       bg-gradient-to-r from-teal-400 to-blue-500 border-4 border-white dark:border-dark-800 
                       md:hidden"></div>

        {/* Card content */}
        <div className={`p-6 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-1 
                       border ${
                         isDarkMode 
                           ? 'bg-dark-700 border-dark-600 hover:shadow-teal-900/20' 
                           : 'bg-white border-gray-200 hover:shadow-lg'
                       }`}>
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <h4 className={`text-lg font-medium ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>{experience.company}</h4>
            </div>
            <span className={`text-sm px-3 py-1 rounded-full 
                          ${isDarkMode ? 'bg-dark-600 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {experience.period}
            </span>
          </div>

          <div className={`flex items-center mb-4 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>

          <ul className="list-disc pl-5 mb-4 space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span 
                key={skill} 
                className={`px-2 py-1 text-xs rounded-md ${
                  isDarkMode 
                    ? 'bg-dark-600 text-teal-400' 
                    : 'bg-teal-50 text-teal-700 border border-teal-200'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
