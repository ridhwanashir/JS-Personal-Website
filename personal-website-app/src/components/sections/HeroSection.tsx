import React from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function HeroSection({ heroRef, animations }: HeroSectionProps) {
  // Detect mobile for different behaviors
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate logo transition values for smooth movement to navbar
  // Final size should match navbar logo: w-8 (32px) on mobile, w-10 (40px) on sm+
  const startSize = 200;
  const endSizeDesktop = 40; // w-10 
  const logoScale = 1 - animations.logoTransition * (1 - endSizeDesktop / startSize); // Scale from 1 to 0.2
  const logoOpacity = Math.max(0, 1 - animations.logoTransition); // Fade out as it transitions to navbar
  
  // Position calculations for logo transition to navbar center
  const startY = 50; // Center of viewport (percentage)
  const endY = 21.5; // Navbar center position (h-16 = 64px, center at 32px ≈ 8vh)
  const logoTopPosition = startY - (startY - endY) * animations.logoTransition;
  
  return (
    <>
      {/* Background wrapper with gradient fade edges */}
      <div className={`${isMobile ? 'absolute' : 'fixed'} inset-0 w-full h-screen z-0`}>
        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))'
          }}
        />
        
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/background_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isMobile 
              ? Math.max(0, 1 - animations.backgroundTransition * 3)
              : Math.max(0, 1 - animations.backgroundTransition * 2)
          }}
        />
        
        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))'
          }}
        />
      </div>

      {/* Transitioning Logo - Fixed on desktop, static on mobile */}
      <div
        className={`${isMobile ? 'absolute' : 'fixed'} left-1/2 transform -translate-x-1/2 z-50`}
        style={{
          top: isMobile ? '30vh' : `${logoTopPosition - 20}vh`,
          transition: isMobile ? 'none' : 'all 0.1s ease-out',
          opacity: isMobile 
            ? Math.max(0, 1 - animations.backgroundTransition * 3)
            : (animations.logoTransition < 0.95 ? logoOpacity : 0)
        }}
      >
        <Image
          src="/ridhwan-logo.png"
          alt="Logo of Ridhwan Nashir"
          width={200}
          height={200}
          priority
          className="transition-all duration-100 ease-out"
          style={{
            width: `${startSize * logoScale - 10}px`,
            height: 'auto', // Maintain aspect ratio
            transform: `scale(1)` // Remove additional scaling since we're sizing with width
          }}
        />
      </div>

      {/* Scroll Indicator - positioned at bottom of viewport with fade effect */}
      <div 
        className={`${isMobile ? 'fixed' : 'fixed'} bottom-8 left-0 right-0 flex justify-center animate-bounce z-40`}
        style={{
          opacity: isMobile ? Math.max(0, 1 - animations.backgroundTransition * 200) : Math.max(0, 1 - animations.backgroundTransition * 3),
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

      {/* Hero content section - now twice as tall */}
      <div
        ref={heroRef}
        className={`w-full ${isMobile ? 'h-screen' : 'h-[200vh]'} flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 relative z-10`}
      >
        {/* Text Content Only - Logo is now handled by fixed transitioning logo above */}
        <div
          className={`${isMobile ? 'absolute pt-20' : 'fixed'} left-0 w-full flex flex-col items-center justify-center z-30`}
          style={{
            opacity: isMobile 
              ? Math.max(0, 1 - animations.backgroundTransition * 3)
              : Math.max(0, 1 - animations.backgroundTransition * 2),
            transition: isMobile ? 'none' : 'all 0.1s ease-out',
            top: isMobile ? '42vh' : `${logoTopPosition + 2}vh`,
            transform: isMobile ? 'none' : `translateY(${animations.backgroundTransition * 30}px)`
          }}
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mt-4 sm:mt-6 md:mt-8 text-center transition-all duration-300 ease-out"
            style={{
              opacity: isMobile ? 1 : 1 - animations.backgroundTransition * 1.3,
              transform: isMobile ? 'none' : `translateY(${animations.backgroundTransition * 20}px)`
            }}
          >
            Ridhwan Nashir
          </h1>
          <h2
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-center px-4 transition-all duration-300 ease-out"
            style={{
              opacity: isMobile ? 1 : 1 - animations.backgroundTransition * 1.4,
              transform: isMobile ? 'none' : `translateY(${animations.backgroundTransition * 25}px)`
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