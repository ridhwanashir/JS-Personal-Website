import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'react-feather';
import { CERTIFICATIONS, POSTS } from '../../constants/data';
import { AnimationState } from '../../hooks/useScrollAnimations';

// Filter only projects from POSTS
const PROJECTS = POSTS.filter(post => post.type === 'project');

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function ProjectsSection({ projectsRef, animations }: ProjectsSectionProps) {
  const handleProjectClick = (projectId: string) => {
    window.location.href = `/playground?post=${projectId}`;
  };

  const scrollToContact = () => {
    const offset = 60 // scroll 100px before the absolute bottom
    const { scrollHeight, clientHeight } = document.documentElement
    const targetPosition = scrollHeight - clientHeight - offset

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
  return (
    <div ref={projectsRef} className="w-full min-h-screen bg-black relative flex flex-col items-center px-4 sm:px-6 lg:px-8 z-10">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-16 sm:mt-24 text-white text-center transition-all duration-1000 ${
        animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        Featured Projects
      </h2>
      
      <div className="flex flex-col sm:flex-row w-full max-w-6xl relative mt-8 sm:mt-0 mb-8 sm:mb-0">
        {/* "See All Projects" link - responsive positioning */}
        <div className="absolute -bottom-6 right-2 sm:bottom-auto sm:left-auto sm:-top-0 sm:right-2 flex items-center space-x-2 z-10">
          <a
            href="/playground"
            className="text-white text-xs sm:text-sm hover:underline transition-all duration-300"
          >
            See All Projects
          </a>
          <ExternalLink color="white" size={14}/>
        </div>
        
        {/* Mobile: Show only first project */}
        {PROJECTS.length > 0 && (
          <div className="block sm:hidden w-full">
            <div 
              className={`relative w-full overflow-hidden transition-all duration-1000 cursor-pointer border border-white/10 ${
                animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
              onClick={() => handleProjectClick(PROJECTS[0].id)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={PROJECTS[0].image} 
                  alt={PROJECTS[0].title} 
                  className="w-full h-full object-cover" 
                  fill
                  sizes="100vw"
                />
                {/* Gradient blend */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              
              {/* Content Section */}
              <div className="bg-black/80 backdrop-blur-sm p-4">
                {/* Status Badge */}
                {PROJECTS[0].status && (
                  <span className="inline-block px-2 py-1 bg-white/10 border border-white/20 text-white/70 text-xs font-light mb-3">
                    {PROJECTS[0].status}
                  </span>
                )}
                
                <h3 className="text-white text-lg font-medium mb-2">{PROJECTS[0].title}</h3>
                <p className="text-white/60 text-sm mb-3">{PROJECTS[0].subtitle}</p>
                
                {/* Technologies */}
                {PROJECTS[0].technologies && (
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS[0].technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/50 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Desktop: Show all three projects + Your project */}
        <div className="hidden sm:flex w-full gap-4">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`relative flex-1 overflow-hidden transition-all duration-1000 cursor-pointer group mt-8 border border-white/10 hover:border-white/20 ${
                animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Image Section - Top */}
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle gradient at bottom of image to blend into content */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              
              {/* Content Section - Bottom */}
              <div className="relative bg-black/80 backdrop-blur-sm p-4 lg:p-5">
                {/* Status Badge */}
                {project.status && (
                  <span className="inline-block px-2 py-1 bg-white/10 border border-white/20 text-white/70 text-xs font-light mb-3">
                    {project.status}
                  </span>
                )}
                
                {/* Title */}
                <h3 className="text-white text-base lg:text-lg font-medium mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
                  {project.subtitle}
                </p>
                
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/50 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-white/40 text-xs self-center">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Your project item */}
          <div 
            onClick={scrollToContact}
            className={`flex-1 flex flex-col items-center justify-center mt-8 bg-white/5 backdrop-blur-sm border border-white/10 p-4 group relative min-h-[280px] lg:min-h-[320px] transition-all duration-1000 cursor-pointer hover:bg-white/10 hover:border-white/20 ${
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
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <p className="mt-4 text-white/70 text-sm text-center group-hover:text-white transition-colors">
              Your project
            </p>
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
            <p className="text-xs sm:text-sm text-center text-white font-thin">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}