import React from 'react';
import { AccordionExperience } from '../AccordionExperience';
import { Experience } from '../../../types/global';

interface ExperienceSectionProps {
  experienceRef: React.RefObject<HTMLDivElement>;
  experiences: Experience[];
}

export function ExperienceSection({ experienceRef, experiences }: ExperienceSectionProps) {
  return (
    <div ref={experienceRef} className="w-full bg-black relative z-10">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)'
        }}
      />
      
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-start w-full relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white text-center sm:text-left mb-4">
            Experience
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-light text-center sm:text-left max-w-2xl">
            A journey through roles that shaped my expertise in AI, cloud architecture, and data engineering.
          </p>
        </div>
        
        {/* Accordion Experience Cards */}
        <AccordionExperience 
          experiences={experiences}
          className="max-w-4xl"
        />

        {/* Timeline indicator on the left - desktop only */}
        <div className="hidden lg:block absolute left-8 top-48 bottom-24 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
      </div>
    </div>
  );
}