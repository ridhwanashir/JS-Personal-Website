import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'react-feather';
import { CERTIFICATIONS } from '../../constants/data';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function ProjectsSection({ projectsRef, animations }: ProjectsSectionProps) {
  return (
    <div ref={projectsRef} className="w-full min-h-screen bg-black relative flex flex-col items-center px-4 sm:px-6 lg:px-8 z-10">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-16 sm:mt-24 text-white text-center transition-all duration-1000 ${
        animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        Featured Projects
      </h2>
      
      <div className="flex flex-col sm:flex-row w-full max-w-6xl relative mt-8 sm:mt-0 mb-8 sm:mb-0">
        {[0, 1, 2].map((index) => (
          <div 
            key={index}
            className={`relative flex-1 flex items-center justify-center overflow-hidden m-2 mt-4 sm:mt-8 min-h-[150px] sm:min-h-[200px] transition-all duration-1000 ${
              animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${200 + index * 200}ms` }}
          >
            <div className="w-full bg-white duration-500 ease-in-out transform hover:scale-110">
              <Image 
                src="/under_construction.jpeg" 
                alt="Project under construction" 
                className="w-full object-cover" 
                width={500} 
                height={300} 
              />
            </div>
          </div>
        ))}
        
        <div className={`flex-1 flex flex-col items-center justify-center mt-4 sm:mt-8 border border-gray-800 bg-black p-4 group relative m-2 min-h-[150px] sm:min-h-[200px] transition-all duration-1000 ${
          animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="transform transition-transform duration-500 group-hover:rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <p className="mt-2 text-white text-xs sm:text-sm text-center">
              Your project
            </p>
            <div className="absolute -top-6 sm:-top-8 right-0 flex items-center space-x-2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs sm:text-sm underline decoration-transparent hover:decoration-white transition"
              >
                See All Projects
              </a>
              <ExternalLink color="white" size={14}/>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-8 sm:mt-12 text-white text-center transition-all duration-1000 ${
        animations.certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        Certifications
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-6xl relative mt-4 sm:mt-8 mb-8">
        {CERTIFICATIONS.map((cert, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center bg-transparent transition-all duration-1000 ${
              animations.certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Image 
              src={cert.src} 
              alt={cert.alt} 
              className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" 
              width={96} 
              height={96} 
            />
            <p className="text-xs sm:text-sm text-center text-white mt-2">{cert.title}</p>
            {cert.subtitle && <p className="text-xs sm:text-sm text-center text-white">{cert.subtitle}</p>}
            <p className="text-xs text-center text-gray-500 font-thin">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}