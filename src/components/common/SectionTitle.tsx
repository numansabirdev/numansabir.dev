import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
        {title}
        {/* Underline accent */}
        <span className={`absolute bottom-0 left-0 right-0 h-1 ${
          isDarkMode ? 'bg-teal-500' : 'bg-teal-500'
        } transform translate-y-2`}></span>
      </h2>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4`}>{subtitle}</p>
    </div>
  );
};
