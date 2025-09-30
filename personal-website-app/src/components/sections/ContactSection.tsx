import React, { useState } from 'react';
import { ExternalLink } from 'react-feather';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function ContactSection({ contactRef, animations }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    details: ''
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Any Design', 'UI/UX', 'Web Development',
    'Machine Learning', 'Prompt Engineering', 'Data Analysis',
    'Cloud Solution', 'Discussion', 'Other'
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { ...formData, interests: selectedInterests });
  };

  return (
    <div ref={contactRef} className="w-full min-h-screen bg-black relative flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side - Title and Social Links */}
        <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
          animations.contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            LET'S WORKING<br />
            TOGETHER !
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
            <a 
              href="https://linkedin.com/in/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-lg">LinkedIn</span>
              <ExternalLink size={18} />
            </a>
            <a 
              href="https://behance.net/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-lg">Behance</span>
              <ExternalLink size={18} />
            </a>
            <a 
              href="https://github.com/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-lg">GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Close Button */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-300">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>

          {/* Email */}
          <p className="text-gray-400 text-sm">
            Say Hello! - ridhwanashir@gmail.com
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`flex-1 max-w-2xl transition-all duration-1000 ${
          animations.contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-transparent border border-gray-600 rounded-3xl p-8">
            <h3 className="text-white text-xl mb-6">Tell me about yourself</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Interest Selection */}
              <div>
                <p className="text-white mb-4">What piques your interest</p>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
                        selectedInterests.includes(interest)
                          ? 'bg-yellow-500 text-black border-yellow-500'
                          : 'bg-transparent text-white border-gray-600 hover:border-yellow-500'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <p className="text-white mb-4">Can you share more about your needs?</p>
                <textarea
                  name="details"
                  placeholder="Details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-transparent border border-gray-600 text-white py-4 rounded-lg hover:border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-lg font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}