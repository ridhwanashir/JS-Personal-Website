import React, { useState } from 'react';
import { ExternalLink } from 'react-feather';
import emailjs from '@emailjs/browser';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const interests = [
    'Design', 'UI/UX', 'Web Development',
    'Machine Learning', 'Generative AI', 'Data Analysis',
    'Cloud Solution', 'Other'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.details) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        interests: selectedInterests.join(', '),
        message: formData.details,
        to_email: 'ridhwanashir@gmail.com', // Your email
      };

      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({ name: '', email: '', interest: '', details: '' });
      setSelectedInterests([]);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      ref={contactRef} 
      className="w-full min-h-screen bg-black relative flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-20">
        
        {/* Left Side - Title and Social Links */}
        <div className={`w-full lg:flex-1 text-center lg:text-left transition-all duration-1000 ${
          animations.contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8 leading-tight">
            LET'S WORK<br />
            TOGETHER !
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8">
            <a 
              href="https://linkedin.com/in/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">LinkedIn</span>
              <ExternalLink size={18} />
            </a>
            {/* <a 
              href="https://behance.net/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">Behance</span>
              <ExternalLink size={18} />
            </a> */}
            <a 
              href="https://github.com/ridhwanashir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
            >
              <span className="text-base sm:text-lg">GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* X Button */}
          <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
            <div
              className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-100 animate-spin"
              style={{ 
                transition: 'background-color 0.3s',
                animationDuration: '4.2s'
              }}
            >
              <svg
                width="48"
                height="48"
                className="sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="2" y2="22"></line>
                <line x1="2" y1="2" x2="22" y2="22"></line>
              </svg>
            </div>
          </div>

          {/* Email */}
          <p className="text-gray-400 text-xs sm:text-sm break-words">
            Say Hello! - ridhwanashir@gmail.com
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className={`w-full lg:flex-1 lg:max-w-2xl transition-all duration-1000 ${
          animations.contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-transparent border border-gray-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-white text-lg sm:text-xl mb-4 sm:mb-6">Tell me about yourself</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border border-gray-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border border-gray-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Interest Selection */}
              <div>
                <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">What piques your interest</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 text-xs sm:text-sm ${
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
                <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">Can you share more about your needs?</p>
                <textarea
                  name="details"
                  placeholder="Details *"
                  value={formData.details}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full border py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-700 border-gray-700 text-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 border-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-transparent border-gray-600 text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-black'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : submitStatus === 'success' ? (
                  'Message Sent Successfully!'
                ) : submitStatus === 'error' ? (
                  'Failed to Send - Try Again'
                ) : (
                  'Submit'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm text-center mt-2">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center mt-2">
                  Something went wrong. Please try again or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}