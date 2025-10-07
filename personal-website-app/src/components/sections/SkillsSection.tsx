import React from 'react';
import Image from 'next/image';

interface SkillsSectionProps {
  className?: string;
}

export function SkillsSection({ className = '' }: SkillsSectionProps) {
  return (
    <div className={`w-full min-h-screen bg-black relative z-10 flex flex-col ${className}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-center mt-8 sm:mt-16 md:mt-24 mb-4 sm:mb-8 text-white font-poppins px-4">
        Skills and Interest
      </h2>
      
      {/* Skills Section - Responsive Layout */}
      <div className="w-full flex-1 bg-black relative px-4 sm:px-0">
        {/* Mobile Layout - Alternating pattern */}
        <div className="flex flex-col lg:hidden gap-6 sm:gap-8 h-full justify-center py-8">
          {/* 1. Skills Tags */}
          <div className="flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-[250px]">
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-xs sm:max-w-md">
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300">
                GENERATIVE AI
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                AZURE
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                AWS
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                GCP
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300">
                DATA SCIENCE
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                ILLUSTRATOR
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                PYTHON
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs hover:bg-white hover:text-black transition-all duration-300">
                FIGMA
              </div>
              <div className="bg-transparent border border-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300">
                TENSORFLOW
              </div>
            </div>
          </div>

          {/* 2. MY SKILLS with laptop */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-900 min-h-[200px] sm:min-h-[250px] rounded-lg mx-4">
            <div className="absolute inset-0 hover:scale-110 duration-500 transition-transform">
              <Image 
                src="/interactive_skills_bg.png" 
                alt="laptop background" 
                fill
                className="object-cover grayscale rounded-lg" 
              />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                MY <span className="text-yellow-500">SKILLS</span>
              </h3>
              <div className="w-16 sm:w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </div>

          {/* 3. Interest circles */}
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="flex flex-col items-center gap-2">
              {/* Top row - 3 circles */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  AI/ML
                </div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  DEV OPS
                </div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  PRODUCT
                </div>
              </div>
              
              {/* Middle row - 3 circles */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  DESIGN
                </div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  UI/UX
                </div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  CLOUD
                </div>
              </div>
              
              {/* Bottom center - 1 circle */}
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                  FINANCE
                </div>
              </div>
            </div>
          </div>

          {/* 4. MY INTERESTS with landscape */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden min-h-[200px] sm:min-h-[250px] rounded-lg mx-4">
            <div className="absolute inset-0 hover:scale-110 duration-500 transition-transform">
              <Image 
                src="/interactive_interests_bg.png" 
                alt="landscape background" 
                fill
                className="object-cover rounded-lg" 
              />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                MY <span className="text-yellow-500">INTERESTS</span>
              </h3>
              <div className="w-20 sm:w-32 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 2x2 Grid */}
        <div className="hidden lg:block w-full h-screen">
          <div className="flex h-1/2">
            {/* Top Left - Interactive Skills Tags */}
            <div className="flex-1 bg-black flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 max-w-md">
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  GENERATIVE AI
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  AZURE
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  AWS
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  GCP
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  DATA SCIENCE
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  ILLUSTRATOR
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
                  PYTHON
                </div>
                <div className="bg-transparent border border-white rounded-full px-4 py-2 text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
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
            <div className="flex-1 bg-black flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                {/* Top row - 3 circles */}
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    AI/ML
                  </div>
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    DEV OPS
                  </div>
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    PRODUCT
                  </div>
                </div>
                
                {/* Middle row - 3 circles */}
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    DESIGN
                  </div>
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    UI/UX
                  </div>
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    CLOUD
                  </div>
                </div>
                
                {/* Bottom center - 1 circle */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-300 text-center leading-tight">
                    FINANCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}