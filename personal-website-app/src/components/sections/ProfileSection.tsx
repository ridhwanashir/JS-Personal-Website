import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface ProfileSectionProps {
  profileRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
  isTypewriterComplete: boolean;
}

export function ProfileSection({ profileRef, animations, isTypewriterComplete }: ProfileSectionProps) {
  // State to track screen size for responsive positioning
  const [screenSize, setScreenSize] = useState('mobile');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('large');
      } else if (width >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('mobile');
      }
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Position calculations for text transition - only within this section
  // animations.profileTextProgress goes from 0 to 1 as user scrolls through ProfileSection
  const startY = 60; // Start position when entering ProfileSection (percentage)
  const endY = 40; // End position when leaving ProfileSection (percentage)  
  
  // NEW APPROACH: Use transform instead of position switching to avoid jumps
  const lockThreshold = 0.08; // Lock at 8% progress for good balance
  
  // Calculate Y transform instead of top position
  let yTransform;
  if (animations.profileTextProgress <= lockThreshold) {
    // Phase 1: Normal movement (0% to 8%) - moves up significantly
    const progress = animations.profileTextProgress / lockThreshold;
    yTransform = -20 * progress; // Move up 20vh in first 8%
  } else {
    // Phase 2: Locked with slow drift (8% to 100%) - long sticky period
    const remainingProgress = (animations.profileTextProgress - lockThreshold) / (1 - lockThreshold);
    yTransform = -20 - (2 * remainingProgress); // Continue moving slowly another 8vh over 92% of scroll
  }
  
  // Use sticky positioning instead of fixed to avoid context switching
  const shouldUseSticky = animations.profileTextProgress > 0.05; // Start sticky positioning early

  // Calculate fade-out effect when sticky is about to exit
  const fadeThreshold = 0.90; // Start fading at 85% progress
  let contentOpacity = 1;
  
  if (animations.profileTextProgress > fadeThreshold) {
    // Fade out in the last 15% of scroll (85% to 100%)
    const fadeProgress = (animations.profileTextProgress - fadeThreshold) / (1 - fadeThreshold);
    contentOpacity = 1.15 - fadeProgress; // Fade from 1 to 0
  }

  // Responsive top offset based on screen size
  const getTopOffset = () => {
    switch (screenSize) {
      case 'large':  // ≥1024px (desktop)
        return 8.5;
      case 'medium': // 768px-1023px (tablet)
        return 34;   // Medium value between mobile and desktop
      case 'mobile': // <768px (mobile)
        return 26;
      default:
        return 26;
    }
  };
  
  const topOffset = getTopOffset();

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
    <div ref={profileRef} className="w-full h-[250vh] bg-white relative z-10">
    {/* <div ref={profileRef} className="w-full h-[200vh] bg-white relative z-10 border border-gray-300 rounded-lg"> */}
      <div 
        className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white px-4 sm:px-6 lg:px-8"
        style={{
          position: shouldUseSticky ? 'sticky' : 'relative',
          top: shouldUseSticky ? '23vh' : 'auto',
          transform: `translateY(${yTransform}vh)`,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
          zIndex: shouldUseSticky ? 30 : 'auto',
          opacity: contentOpacity
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
              <a 
                href="https://drive.google.com/file/d/1rNrhDI4Mxer8JgnHt7RwZh58V1WkdCHL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 sm:mt-8 px-4 sm:px-6 py-2 bg-black text-white font-sans font-light rounded-full hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base transform"
                style={{
                  opacity: Math.max(0, Math.min(1, animations.profileTextProgress * 2 - 0.5)),
                  transform: `translateY(${Math.max(0, (1 - animations.profileTextProgress * 2) * 20)}px)`
                }}
              >
                See Curriculum Vitae
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}