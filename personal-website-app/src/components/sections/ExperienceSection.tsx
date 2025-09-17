import React from 'react';
import Image from 'next/image';
import { ModernCarousel } from '../ModernCarousel';
import { EXPERIENCES } from '../../constants/data';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ExperienceSectionProps {
  experienceRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function ExperienceSection({ experienceRef, animations }: ExperienceSectionProps) {
  return (
    <div ref={experienceRef} className="w-full bg-white relative z-10">
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
        <Image
          src="/ridhwan-logo.png"
          alt="Small logo"
          width={50}
          height={50}
          className={`absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 transition-all duration-1000 ${
            animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        />
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-12 font-poppins transition-all duration-1000 delay-200 ${
          animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Experiences
        </h2>
        
        <div className={`transition-all duration-1000 delay-400 ${
          animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <ModernCarousel 
            experiences={EXPERIENCES}
            showIndicators={true}
            className="max-w-6xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}