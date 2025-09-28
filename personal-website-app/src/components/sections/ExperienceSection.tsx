import React from 'react';
import Image from 'next/image';
import { ModernCarousel } from '../ModernCarousel';
import { EXPERIENCES } from '../../constants/data';
import { AnimationState } from '../../hooks/useScrollAnimations';
import { Experience } from '../../../types/global';

interface ExperienceSectionProps {
  experienceRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
  experiences: Experience[];
}

export function ExperienceSection({ experienceRef, animations, experiences }: ExperienceSectionProps) {
  console.log('ExperienceSection - experiences received:', experiences); // Debug log
  
  return (
    <div ref={experienceRef} className="w-full bg-white relative z-10">
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-12 font-poppins opacity-100 translate-y-0">
          Experiences
        </h2>
        
        <div className="opacity-100 translate-y-0">
          <ModernCarousel 
            experiences={experiences}
            showIndicators={true}
            className="max-w-6xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}