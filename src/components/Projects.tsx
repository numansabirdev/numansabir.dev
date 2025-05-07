import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';
import ProjectCard from './projects/ProjectCard';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();

  const projects = [
    {
      title: "Smart Surveillance (FYP)",
      description: "AI-Empowered Threat Detection and Prevention System. Advanced security solution using computer vision and machine learning for real-time threat detection.",
      technologies: ["Computer Vision", "TensorFlow", "OpenCV", "Python"],
      link: "https://youtu.be/gmiEBf7xvVw",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "RAG Application using LangChain",
      description: "A Retrieval-Augmented Generation chatbot for intelligent document retrieval and processing. Integrates LangChain with vector databases for enhanced question answering.",
      technologies: ["LangChain", "FAISS", "LLMs", "Python"],
      link: "https://github.com/numansabirdev/RAG-Application-using-LangChain",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Salary Predictions of Data Professionals",
      description: "Predictive modeling for data profession salary prediction. Uses machine learning to analyze market trends and predict competitive compensation.",
      technologies: ["Scikit-learn", "Pandas", "NumPy", "Data Visualization"],
      link: "https://github.com/numansabirdev/Salary-Predictions-of-Data-Professions",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Fastag Fraud Detection System",
      description: "A system leveraging ML classification techniques for fraud detection in transportation payment systems. Identifies suspicious activities using machine learning algorithms.",
      technologies: ["Classification Models", "Pandas", "Matplotlib", "Scikit-learn"],
      link: "https://github.com/numansabirdev/Fastag-Fraud-Detection-System",
      image: "https://images.pexels.com/photos/6612371/pexels-photo-6612371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Spam Message Classification",
      description: "NLP-based system to classify spam messages. Uses text classification techniques to filter unwanted communications.",
      technologies: ["NLP", "NLTK", "Scikit-learn", "TF-IDF"],
      link: "https://github.com/numansabirdev/Spam-Message-Classification",
      image: "https://images.pexels.com/photos/8470859/pexels-photo-8470859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Heart Failure Prediction",
      description: "Predictive modeling using Exploratory Data Analysis (EDA) to identify heart failure risks. Medical application of machine learning for preventive healthcare.",
      technologies: ["Exploratory Data Analysis", "PyTorch", "Pandas", "Healthcare ML"],
      link: "https://github.com/numansabirdev/Heart-Failure-Prediction-EDA",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="My recent work" />
        
        <div className={`mt-12 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;