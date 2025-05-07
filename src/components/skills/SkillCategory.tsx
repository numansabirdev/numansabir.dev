import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, delay = 0 }) => {
  const { isDarkMode } = useTheme();

  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-700 ${
        isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200 shadow-sm'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold mb-6">{category}</h3>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className={`text-xs font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {skill.level}%
              </span>
            </div>
            
            <div 
              className={`h-2 w-full rounded-full ${
                isDarkMode ? 'bg-dark-700' : 'bg-gray-200'
              }`}
            >
              <div 
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 
                          transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
