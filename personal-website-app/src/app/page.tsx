'use client';

import React from 'react';
import Image from "next/image";
import { ExternalLink } from 'react-feather';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { ModernCarousel } from '../components/ModernCarousel';
import { HeroSection } from '../components/sections/HeroSection';
import { ProfileSection } from '../components/sections/ProfileSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { WorksSection } from '../components/sections/WorksSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ScrollLockIndicator } from '../components/ui/ScrollLockIndicator';
import { AnimatedNavbar } from '../components/ui/AnimatedNavbar';
import { EXPERIENCES } from '../constants/data';

export default function Home() {
  const {
    animations,
    scrollLockState: { isTypewriterComplete, hasStartedTyping },
    refs: { heroRef, profileRef, experienceRef, worksRef, projectsRef }
  } = useScrollAnimations();

  return (
    <main className="flex flex-col items-center relative bg-white">
      {/* Animated Navbar - appears on scroll */}
      <AnimatedNavbar animations={animations} />
      
      {/* Scroll Lock Indicator */}
      {/* <ScrollLockIndicator 
        hasStartedTyping={hasStartedTyping}
        isTypewriterComplete={isTypewriterComplete}
      /> */}

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} animations={animations} />

      {/* Profile Section */}
      <ProfileSection 
        profileRef={profileRef}
        animations={animations}
        isTypewriterComplete={isTypewriterComplete}
      />

      {/* Experiences Section */}
      <ExperienceSection 
        experienceRef={experienceRef} 
        animations={animations}
        experiences={EXPERIENCES}
      />

      {/* Works Section */}
      <WorksSection worksRef={worksRef} animations={animations} />

      {/* Featured Projects and Certifications Section */}
      <ProjectsSection projectsRef={projectsRef} animations={animations} />

      {/* Skills Section */}
      <SkillsSection />
    </main>
  );
}

