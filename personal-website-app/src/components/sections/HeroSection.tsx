import React from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function HeroSection({ heroRef, animations }: HeroSectionProps) {
  // Calculate logo transition values for smooth movement to navbar
  const logoScale = 1 - animations.logoTransition * 0.8; // Scale from 1 to 0.2 (smaller for navbar)
  const logoOpacity = Math.max(0, 1 - animations.logoTransition); // Fade out as it transitions to navbar
  
  // Position calculations for logo transition to navbar center
  const startY = 50; // Center of viewport (percentage)
  const endY = 10; // Navbar position (percentage, h-16 = 4rem = 64px ≈ 10vh)
  const logoTopPosition = startY - (startY - endY) * animations.logoTransition;
  
  return (
    <>
      {/* Fixed parallax background */}
      <div
        className="fixed inset-0 w-full h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/background_1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: Math.max(0, 1 - animations.backgroundTransition * 2) // Ensure complete fade to 0
        }}
      />

      {/* Transitioning Logo - Fixed position for smooth animation to navbar */}
      <div
        className="fixed left-1/2 transform -translate-x-1/2 z-50"
        style={{
          top: `${logoTopPosition-15}vh`,
          transition: 'all 0.1s ease-out',
          // opacity: logoOpacity
        }}
      >
        <Image
          src="/ridhwan-logo.png"
          alt="Logo of Ridhwan Nashir"
          width={200}
          height={200}
          priority
          className="transition-all duration-300 ease-out"
          style={{
            width: `${200 * logoScale}px`,
            // height: `${200 * logoScale}px`,
            transform: `scale(${logoScale})`
          }}
        />
      </div>

      {/* Hero content section - now twice as tall */}
      <div
        ref={heroRef}
        className="w-full h-[200vh] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 relative z-10"
      >
        {/* Scroll Indicator - positioned at bottom of viewport with fade effect */}
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40"
          style={{
            opacity: Math.max(0, 1 - animations.backgroundTransition * 3),
            transition: 'opacity 0.3s ease-out'
          }}
        >
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
        {/* Text Content Only - Logo is now handled by fixed transitioning logo above */}
        <div
          // className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-300 ease-out"
          className="fixed top-0 left-0 w-full  flex flex-col items-center justify-center transform -translate-x-1/3 z-50"

          style={{
            opacity: Math.max(0, 1 - animations.backgroundTransition * 2),
            // opacity: logoOpacity,
            transition: 'all 0.1s ease-out',
            top: `${logoTopPosition-20}vh`,
            transform: `translateY(${animations.backgroundTransition * 30}px)`
        // style={{
        //   opacity: logoOpacity
        // }}
          }}
        >
          {/* Spacer for logo space */}
          <div className="h-32 sm:h-40 md:h-48 lg:h-52"></div>
          
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mt-4 sm:mt-6 md:mt-8 text-center transition-all duration-300 ease-out"
            style={{
              opacity: 1 - animations.backgroundTransition * 1.3,
              transform: `translateY(${animations.backgroundTransition * 20}px)`
            }}
          >
            Ridhwan Nashir
          </h1>
          <h2
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-center px-4 transition-all duration-300 ease-out"
            style={{
              opacity: 1 - animations.backgroundTransition * 1.4,
              transform: `translateY(${animations.backgroundTransition * 25}px)`
            }}
          >
            Software Engineer <span className="mx-1 sm:mx-2 hidden sm:inline">•</span>
            <br className="sm:hidden" /> Solution Architect <span className="mx-1 sm:mx-2 hidden sm:inline">•</span>
            <br className="sm:hidden" /> Explorer
          </h2>
        </div>
      </div>
    </>
  );
}