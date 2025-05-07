import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';
import ExperienceItem from './experience/ExperienceItem';

const Experience: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();

  const experiences = [
    {
      title: "ML/AI Engineer",
      company: "NeuroOceans AI",
      period: "Feb 2025 – Present",
      location: "Lahore, Pakistan",
      description: [
        "Developed AI/ML pipelines for multiple domains including computer vision.",
        "Built RAG chatbots and multi-agent systems for automated invoice parsing.",
        "Integrated third-party APIs to improve workflows and user experiences.",
        "Developed systems for body measurement using computer vision."
      ],
      skills: ["Computer Vision", "RAG", "Multi-agent Systems", "API Integration"]
    },
    {
      title: "ML/AI Engineer",
      company: "Zortik Technologies",
      period: "September 2024 – January 2025",
      location: "Kelowna, BC, Canada",
      description: [
        "Fine-tuned LLMs for website content classification.",
        "Built custom datasets and evaluation pipelines for code analysis tasks.",
        "Implemented RAG with LLMs to align analysis outputs with specific coding guidelines.",
        "Created Reflexion Agents for iterative reasoning in code review systems.",
        "Conducted deep research on reasoning-based AI solutions."
      ],
      skills: ["LLM Fine-tuning", "RAG", "Reflexion Agents", "Code Analysis"]
    },
    {
      title: "ML/AI Intern",
      company: "Alphabase",
      period: "May 2024 – September 2024",
      location: "Islamabad, Pakistan",
      description: [
        "Developed RAG chatbot applications using LangChain, Llama3, and FAISS.",
        "Applied machine learning techniques for predictive modeling and classification.",
        "Used Python, PyTorch, and OpenCV to build and deploy AI solutions.",
        "Integrated machine learning models into web applications using FastAPI.",
        "Performed exploratory data analysis to enhance model performance and insights."
      ],
      skills: ["LangChain", "FAISS", "PyTorch", "FastAPI"]
    },
    {
      title: "Backend Intern",
      company: "Alphabase",
      period: "Oct 2023 – Apr 2024",
      location: "Islamabad, Pakistan",
      description: [
        "Developed and maintained APIs using Node.js, Express, and Nest.js.",
        "Implemented CRUD operations and integrated third-party services to enhance functionality.",
        "Conducted unit and integration testing of APIs using Postman to ensure reliability and performance.",
        "Collaborated closely with front-end developers for seamless integration.",
        "Actively participated in code reviews to maintain high coding standards.",
        "Assisted in database design and optimization for efficient data management."
      ],
      skills: ["Node.js", "Express.js", "Nest.js", "API Development"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-800 text-gray-200' : 'bg-white text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div className={`mt-12 relative transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full 
                         bg-gradient-to-b from-teal-400 via-blue-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.title}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;