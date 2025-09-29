import React from 'react';
import Image from 'next/image';

interface SkillsSectionProps {
  className?: string;
}

export function SkillsSection({ className = '' }: SkillsSectionProps) {
  return (
    <div className={`w-full min-h-screen bg-black relative z-10 flex flex-col ${className}`}>
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Small logo at the top */}
        {/* <Image
          src="/ridhwan-logo.png"
          alt="Small logo"
          width={50}
          height={50}
          className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12"
        /> */}
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-12 text-white font-poppins">
          Skills & Interests
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Skills Section */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl sm:text-2xl text-white font-light text-center">Technical Skills</h3>
            <div className="relative w-full aspect-square max-w-md overflow-hidden rounded-lg group">
              <Image 
                src="/interactive_skills_bg.png" 
                alt="Interactive skills background" 
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-lg font-medium mb-2">Click to explore</p>
                  <p className="text-sm opacity-80">Interactive skills map</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests Section */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl sm:text-2xl text-white font-light text-center">Personal Interests</h3>
            <div className="relative w-full aspect-square max-w-md overflow-hidden rounded-lg group">
              <Image 
                src="/interactive_interests_bg.png" 
                alt="Interactive interests background" 
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-lg font-medium mb-2">Click to explore</p>
                  <p className="text-sm opacity-80">Interactive interests map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}