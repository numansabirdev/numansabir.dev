import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';
import SkillCategory from './skills/SkillCategory';

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();

  const skillCategories = [
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'OpenCV', level: 75 },
        { name: 'NLTK', level: 80 },
        { name: 'FAISS', level: 70 },
        { name: 'NLP', level: 85 },
        { name: 'RAG', level: 85 },
        { name: 'LLMs', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'LlamaIndex', level: 80 },
        { name: 'Computer Vision', level: 75 },
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Nest.js', level: 70 },
        { name: 'React.js', level: 70 },
        { name: 'Vue.js', level: 65 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'JavaScript', level: 80 },
      ]
    },
    {
      category: 'Data Analysis & Databases',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 80 },
        { name: 'SciPy', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills & Tools" subtitle="My technical expertise" />
        
        <div className={`mt-12 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory 
                key={category.category}
                category={category.category}
                skills={category.skills}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;