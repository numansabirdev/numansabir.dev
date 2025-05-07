import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';
import EducationItem from './education/EducationItem';
import CertificationItem from './education/CertificationItem';

const Education: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();

  const education = [
    {
      institution: "Stanford University",
      degree: "Machine Learning Specialization Course",
      period: "2024 – 2025",
      description: "Intensive specialization in advanced machine learning techniques and applications."
    },
    {
      institution: "COMSATS University Islamabad",
      degree: "BS (Software Engineering)",
      period: "2019 – 2023",
      description: "Comprehensive software engineering program with focus on modern development practices."
    },
    {
      institution: "Zero To Mastery Academy",
      degree: "Complete Python Developer in 2022: Zero to Mastery",
      period: "September 2022 – February 2023",
      description: "Intensive Python development course covering advanced programming concepts."
    },
    {
      institution: "Superior College",
      degree: "ICS (Intermediate of Computer Science)",
      period: "2017 – 2019",
      description: "Foundation in computer science principles and mathematics."
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization – deeplearning.ai",
      courses: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms",
        "Unsupervised Learning, Recommenders, Reinforcement"
      ]
    },
    {
      title: "Practical Deep Learning for Coders – Jeremy Howard",
      courses: []
    },
    {
      title: "Complete Python Developer (2022) – Zero to Mastery",
      courses: []
    },
    {
      title: "C++ Tutorial for Complete Beginners",
      courses: []
    }
  ];

  return (
    <section 
      id="education" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-800 text-gray-200' : 'bg-white text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="My academic background" />
        
        <div className={`mt-12 grid md:grid-cols-2 gap-8 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className={`inline-block w-8 h-8 rounded-full mr-3 ${
                isDarkMode ? 'bg-teal-400/20' : 'bg-teal-100'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Academic Education
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <EducationItem 
                  key={item.institution} 
                  education={item}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className={`inline-block w-8 h-8 rounded-full mr-3 ${
                isDarkMode ? 'bg-teal-400/20' : 'bg-teal-100'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Certifications & Courses
            </h3>
            
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <CertificationItem 
                  key={item.title} 
                  certification={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;