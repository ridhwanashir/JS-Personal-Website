import React from 'react';
import Image from 'next/image';
import { WORKS_CATEGORIES } from '../../constants/data';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface WorksSectionProps {
  worksRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function WorksSection({ worksRef, animations }: WorksSectionProps) {
  return (
    <div ref={worksRef} className="w-full min-h-screen bg-black relative z-10 flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        {/* Small logo at the top */}
        {/* <Image
          src="/ridhwan-logo.png"
          alt="Small logo"
          width={50}
          height={50}
          className={`absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 transition-all duration-1000 ${
            animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        /> */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-12 font-poppins text-white transition-all duration-1000 delay-200 ${
          animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Works
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {WORKS_CATEGORIES.map((category, index) => (
            <div 
              key={category.title}
              className={`relative group overflow-hidden rounded-lg transition-all duration-1000 ${
                animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`} 
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <Image 
                  src={category.image} 
                  alt={category.alt} 
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-lg sm:text-xl text-white font-medium text-center px-4">
                    {category.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}