import React from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ProfileSectionProps {
  profileRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
  isTypewriterComplete: boolean;
}

export function ProfileSection({ profileRef, animations, isTypewriterComplete }: ProfileSectionProps) {
  // Position calculations for text transition - only within this section
  // animations.profileTextProgress goes from 0 to 1 as user scrolls through ProfileSection
  const startY = 60; // Start position when entering ProfileSection (percentage)
  const endY = 40; // End position when leaving ProfileSection (percentage)  
  const textTopPosition = startY - (startY - endY) * animations.profileTextProgress;
  
  // Add threshold to prevent abrupt position change
  const shouldUseFixedPosition = animations.profileTextProgress > 0.1; // Start fixed positioning after 10% progress

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
    <div ref={profileRef} className="w-full h-[200vh] bg-white relative z-10">
    {/* <div ref={profileRef} className="w-full h-[200vh] bg-white relative z-10 border border-gray-300 rounded-lg"> */}
      <div 
        className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8"
        style={{
          position: shouldUseFixedPosition ? 'fixed' : 'relative',
          top: shouldUseFixedPosition ? `${textTopPosition+9}vh` : 'auto',
          left: shouldUseFixedPosition ? '50%' : 'auto',
          right: shouldUseFixedPosition ? 'auto' : 'auto',
          // transition: 'all 0.1s ease-out',
          transform: shouldUseFixedPosition ? `translate(-50%, -50%)` : 'none',
          zIndex: shouldUseFixedPosition ? 30 : 'auto',
          width: shouldUseFixedPosition ? '100%' : 'auto',
          maxWidth: shouldUseFixedPosition ? '1280px' : 'auto'
        }}
      >
        {/* Logo is now handled by HeroSection's transitioning logo */}
        <div className="flex flex-col lg:flex-row h-full py-20 lg:py-16">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 relative order-2 lg:order-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/studio-photo-edited.webp"
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
              <div 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans leading-tight">
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}