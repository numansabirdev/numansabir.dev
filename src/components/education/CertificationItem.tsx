import React from 'react';
import { Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CertificationItemProps {
  certification: {
    title: string;
    courses: string[];
  };
  index: number;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ certification, index }) => {
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
      <div className="flex items-start">
        <div className={`p-2 rounded-md mr-3 ${
          isDarkMode ? 'bg-dark-600 text-teal-400' : 'bg-teal-50 text-teal-600'
        }`}>
          <Award className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{certification.title}</h4>
          
          {certification.courses.length > 0 && (
            <ul className={`mt-2 list-disc pl-5 space-y-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {certification.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationItem;
