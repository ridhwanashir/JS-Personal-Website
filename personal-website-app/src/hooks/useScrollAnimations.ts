import { useState, useEffect, useRef, RefObject } from 'react';

export interface AnimationState {
  backgroundTransition: number;
  logoTransition: number;
  profileTextProgress: number;
  experienceVisible: boolean;
  worksVisible: boolean;
  projectsVisible: boolean;
  certificationsVisible: boolean;
}

export interface ScrollRefs {
  heroRef: RefObject<HTMLDivElement>;
  profileRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  worksRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

export interface ScrollLockState {
  isTypewriterComplete: boolean;
  hasStartedTyping: boolean;
  scrollLocked: boolean;
}

export function useScrollAnimations() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  
  // Create refs
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const [animations, setAnimations] = useState<AnimationState>({
    backgroundTransition: 0,
    logoTransition: 0,
    profileTextProgress: 0,
    experienceVisible: false,
    worksVisible: false,
    projectsVisible: false,
    certificationsVisible: false
  });

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate section positions
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const profileTop = profileRef.current?.offsetTop || 0;
      const profileHeight = profileRef.current?.offsetHeight || 0;
      const experienceTop = experienceRef.current?.offsetTop || 0;
      const worksTop = worksRef.current?.offsetTop || 0;
      const projectsTop = projectsRef.current?.offsetTop || 0;
      
      // Background transition (hero to profile) - parallax fade out
      const transitionStart = heroHeight * 0.2; // Start fading at 20% of the doubled height
      const transitionEnd = heroHeight * 0.8; // End fade at 80% of the doubled height
      const backgroundProgress = Math.max(0, Math.min(1, 
        (currentScrollY - transitionStart) / (transitionEnd - transitionStart)
      ));
      
      // Logo transition from hero to navbar - starts when approaching profile section
      const logoTransitionStart = heroHeight * 0.6; // Start logo transition at 60% of hero height
      const logoTransitionEnd = heroHeight * 0.95; // Complete transition at 95% of hero height
      const logoProgress = Math.max(0, Math.min(1,
        (currentScrollY - logoTransitionStart) / (logoTransitionEnd - logoTransitionStart)
      ));
      
      // Profile text animation
      const textStart = profileTop - window.innerHeight * 0.3;
      const textEnd = profileTop + profileHeight * 0.5;
      const textProgress = Math.max(0, Math.min(1,
        (currentScrollY - textStart) / (textEnd - textStart)
      ));
      
      // Check if typing has started
      if (textProgress > 0 && !hasStartedTyping) {
        setHasStartedTyping(true);
        setScrollLocked(true);
      }
      
      // Prevent further scrolling once typing starts but before completion
      if (hasStartedTyping && !isTypewriterComplete && textProgress < 1) {
        const maxAllowedScroll = textEnd;
        if (currentScrollY > maxAllowedScroll) {
          window.scrollTo(0, maxAllowedScroll);
          return;
        }
      }
      
      // Section visibility checks
      const windowHeight = window.innerHeight;
      const experienceVisible = currentScrollY + windowHeight > experienceTop + 200;
      const worksVisible = currentScrollY + windowHeight > worksTop + 200;
      const projectsVisible = currentScrollY + windowHeight > projectsTop + 200;
      const certificationsVisible = currentScrollY + windowHeight > projectsTop + 400;
      
      setAnimations({
        backgroundTransition: backgroundProgress,
        logoTransition: logoProgress,
        profileTextProgress: textProgress,
        experienceVisible,
        worksVisible,
        projectsVisible,
        certificationsVisible
      });
    };

    // Prevent scroll only during typing phase
    const preventScroll = (e: Event) => {
      if (hasStartedTyping && !isTypewriterComplete) {
        const currentScrollY = window.scrollY;
        const profileTop = profileRef.current?.offsetTop || 0;
        const profileHeight = profileRef.current?.offsetHeight || 0;
        const textEnd = profileTop + profileHeight * 0.5;
        
        if (currentScrollY > textEnd) {
          e.preventDefault();
          return false;
        }
      }
    };

    if (isClient) {
      window.addEventListener('scroll', handleScroll);
      
      if (hasStartedTyping && !isTypewriterComplete) {
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
        window.addEventListener('keydown', (e) => {
          if (['ArrowDown', 'PageDown', 'End', ' '].includes(e.key)) {
            preventScroll(e);
          }
        });
      }
      
      handleScroll();
    }
    
    return () => {
      if (isClient) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      }
    };
  }, [isClient, hasStartedTyping, isTypewriterComplete]);

  // Effect to handle typewriter completion
  useEffect(() => {
    const isAnimationComplete = animations.profileTextProgress * 5 >= 4.5;
    
    if (isAnimationComplete && !isTypewriterComplete) {
      setIsTypewriterComplete(true);
      setScrollLocked(false);
    }
  }, [animations.profileTextProgress, isTypewriterComplete]);

  return {
    animations,
    scrollLockState: {
      isTypewriterComplete,
      hasStartedTyping,
      scrollLocked
    },
    refs: {
      heroRef,
      profileRef,
      experienceRef,
      worksRef,
      projectsRef
    },
    scrollY
  };
}