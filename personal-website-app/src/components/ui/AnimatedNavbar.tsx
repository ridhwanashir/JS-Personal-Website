import React from 'react';
import Image from 'next/image';
import { AnimationState } from '../../hooks/useScrollAnimations';

interface AnimatedNavbarProps {
  animations: AnimationState;
}

export function AnimatedNavbar({ animations }: AnimatedNavbarProps) {
  // Calculate navbar visibility based on logo transition progress
  const navbarOpacity = Math.max(0, Math.min(1, animations.logoTransition));
  const navbarTransform = `translateY(${(1 - animations.logoTransition) * -100}px)`;
  
  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-out"
      style={{
        opacity: navbarOpacity,
        transform: navbarTransform,
        backgroundColor: `rgba(255, 255, 255, ${navbarOpacity * 0.95})`,
        backdropFilter: navbarOpacity > 0.1 ? 'blur(10px)' : 'none',
        // borderBottom: navbarOpacity > 0.1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:h-20">
          {/* Logo in navbar center */}
          <div className="flex items-center">
            <Image
              src="/ridhwan-logo.png"
              alt="Ridhwan Nashir Logo"
              width={40}
              height={40}
              className="w-8 h-auto sm:w-10 sm:h-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}