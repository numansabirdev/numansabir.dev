import React from 'react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface EducationItemProps {
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
  };
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, index }) => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`p-5 rounded-lg ${
        isDarkMode ? 'bg-dark-700' : 'bg-gray-50'
      } border ${
        isDarkMode ? 'border-dark-600' : 'border-gray-200'
      } shadow-sm transition-transform duration-300 hover:-translate-y-1`}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <h4 className="text-xl font-semibold">{education.institution}</h4>
      <h5 className={`text-lg mb-2 ${
        isDarkMode ? 'text-teal-400' : 'text-teal-600'
      }`}>{education.degree}</h5>
      
      <div className={`flex items-center mb-3 text-sm ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <Calendar className="h-4 w-4 mr-1" />
        <span>{education.period}</span>
      </div>
      
      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
        {education.description}
      </p>
    </div>
  );
};

export default EducationItem;
