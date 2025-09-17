import React from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ProfileSectionProps {
  profileRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
  isTypewriterComplete: boolean;
}

export function ProfileSection({ profileRef, animations, isTypewriterComplete }: ProfileSectionProps) {
  const textRows = [
    "Data-driven Software Engineer",
    "with a passion for machine learning,",
    "always seeking new challenges to apply",
    "skills and knowledge to solve real-world",
    "problems."
  ];

  const renderTextRow = (text: string, index: number) => (
    <div key={index} className="overflow-hidden">
      <span 
        className="inline-block transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(90deg, 
            black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - index) * 100))}%, 
            #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - index) * 100))}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {text}
      </span>
    </div>
  );

  return (
    <div ref={profileRef} className="w-full bg-white relative z-10">
      <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
        {/* Logo is now handled by HeroSection's transitioning logo */}
        <div className="flex flex-col lg:flex-row h-full py-20 lg:py-16">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 relative order-2 lg:order-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/background_2.png"
              alt="Ridhwan Nashir"
              width={400}
              height={500}
              style={{objectFit:"cover"}}
              className="relative lg:absolute bottom-0 w-64 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-full max-w-full object-center rounded-lg lg:rounded-none"
            />
          </div>
          {/* Profile Description */}
          <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8 flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="text-center lg:text-left lg:pr-12 max-w-2xl">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans leading-tight">
                {textRows.map((text, index) => (
                  <React.Fragment key={index}>
                    {renderTextRow(text, index)}
                    {index < textRows.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <button 
                className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 bg-black text-white font-sans font-light rounded-full hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base transform"
                style={{
                  opacity: Math.max(0, Math.min(1, animations.profileTextProgress * 2 - 0.5)),
                  transform: `translateY(${Math.max(0, (1 - animations.profileTextProgress * 2) * 20)}px)`
                }}
              >
                See Curriculum Vitae
              </button>
              
              {/* Scroll Indicator - appears when typewriter is complete */}
              {isTypewriterComplete && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
                  <div className="flex flex-col items-center space-y-2 text-black">
                    <p className="text-sm font-light">Scroll to explore</p>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}