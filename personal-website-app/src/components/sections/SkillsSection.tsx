import React from 'react';
import Image from 'next/image';

interface SkillsSectionProps {
  className?: string;
}

export function SkillsSection({ className = '' }: SkillsSectionProps) {
  return (
    <div className={`w-full min-h-screen bg-black relative z-10 flex flex-col ${className}`}>
      {/* Small logo at the top */}
      {/* <Image
        src="/ridhwan-logo.png"
        alt="Small logo"
        width={50}
        height={50}
        className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12"
      /> */}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mt-16 sm:mt-24 mb-8 text-white font-poppins">
        Skills and Interest
      </h2>
      
      {/* Skills Section - 2x2 Grid Layout */}
      <div className="w-full h-screen bg-black relative">
        <div className="flex h-1/2">
          {/* Top Left - Interactive Skills Tags */}
          <div className="flex-1 bg-black p-8 flex items-center justify-center relative overflow-hidden">
            {/* <div className="absolute inset-0">
              <Image 
                src="/interactive_skills_bg.png" 
                alt="Interactive skills background" 
                fill
                className="object-cover opacity-30" 
              />
            </div> */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 max-w-md">
              {/* Skill tags arranged organically */}
              <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                PROMPT ENGINEERING
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                JAVASCRIPT
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                AWS
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                GCP
              </div>
              <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                DATA ANALYSIS
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                ILLUSTRATOR
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                PYTHON
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                FIGMA
              </div>
              <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                TENSORFLOW
              </div>
            </div>
          </div>
          
          {/* Top Right - MY SKILLS with laptop */}
          <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden bg-gray-900">
            <div className="absolute inset-0 hover:scale-110 duration-500 transition-transform">
              <Image 
                src="/interactive_skills_bg.png" 
                alt="laptop background" 
                fill
                className="object-cover grayscale" 
              />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                MY <span className="text-yellow-500">SKILLS</span>
              </h3>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </div>
        </div>
        
        <div className="flex h-1/2">
          {/* Bottom Left - MY INTERESTS with landscape */}
          <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 hover:scale-110 duration-500 transition-transform">
              <Image 
                src="/interactive_interests_bg.png" 
                alt="landscape background" 
                fill
                className="object-cover" 
              />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                MY <span className="text-yellow-500">INTERESTS</span>
              </h3>
              <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Bottom Right - Interest circles */}
          <div className="flex-1 bg-black p-8 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              {/* Top row */}
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                AI/ML
              </div>
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 transform rotate-12">
                DEV OPS
              </div>
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                PRODUCT
              </div>
              
              {/* Bottom row */}
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                DESIGN
              </div>
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                UI/UX
              </div>
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                CLOUD
              </div>
              
              {/* Center bottom */}
              <div className="col-start-2 w-16 h-16 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300">
                ULM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}