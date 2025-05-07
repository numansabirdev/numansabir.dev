import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSectionAnimation } from '../hooks/useSectionAnimation';
import { SectionTitle } from './common/SectionTitle';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { ref, isVisible } = useSectionAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'numansabir.dev@gmail.com',
      link: 'mailto:numansabir.dev@gmail.com',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'thenumansabir',
      link: 'https://www.linkedin.com/in/thenumansabir',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'numansabirdev',
      link: 'https://github.com/numansabirdev',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 ${isDarkMode ? 'bg-dark-900 text-gray-200' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Get in touch" />
        
        <div className={`mt-12 grid md:grid-cols-2 gap-8 items-start transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Contact Form */}
          <div className={`rounded-lg shadow-sm p-6 md:p-8 ${
            isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            {isSubmitted ? (
              <div className={`p-4 rounded-md mb-6 ${
                isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-50 text-teal-700'
              }`}>
                <p className="font-medium">Your message has been sent!</p>
                <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md transition-colors ${
                      isDarkMode 
                        ? 'bg-dark-700 border-dark-600 focus:border-teal-500 text-white' 
                        : 'bg-white border-gray-300 focus:border-teal-500 text-gray-900'
                    } border focus:outline-none focus:ring-1 focus:ring-teal-500`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md transition-colors ${
                      isDarkMode 
                        ? 'bg-dark-700 border-dark-600 focus:border-teal-500 text-white' 
                        : 'bg-white border-gray-300 focus:border-teal-500 text-gray-900'
                    } border focus:outline-none focus:ring-1 focus:ring-teal-500`}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md transition-colors ${
                      isDarkMode 
                        ? 'bg-dark-700 border-dark-600 focus:border-teal-500 text-white' 
                        : 'bg-white border-gray-300 focus:border-teal-500 text-gray-900'
                    } border focus:outline-none focus:ring-1 focus:ring-teal-500`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-medium transition-all shadow-lg hover:shadow-xl ${
                    isDarkMode 
                      ? 'bg-teal-600 hover:bg-teal-700' 
                      : 'bg-teal-600 hover:bg-teal-700'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 transform'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className={`flex items-start p-4 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-dark-800 hover:bg-dark-700 border border-dark-700' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`p-3 rounded-full mr-4 ${
                    isDarkMode 
                      ? 'bg-dark-700 text-teal-400' 
                      : 'bg-teal-50 text-teal-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <a 
                      href={item.link} 
                      className={`hover:underline ${
                        isDarkMode ? 'text-teal-400' : 'text-teal-600'
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`mt-8 p-6 rounded-lg ${
              isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'
            }`}>
              <h4 className="text-xl font-semibold mb-3">Let's connect!</h4>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Whether you're looking for an ML/AI Engineer or want to discuss collaboration opportunities,
                I'm open to new connections and projects. Reach out and let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;