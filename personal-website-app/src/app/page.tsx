'use client';

import React, { useState } from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { HeroSection } from '../components/sections/HeroSection';
import { ProfileSection } from '../components/sections/ProfileSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { WorksSection } from '../components/sections/WorksSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { AnimatedNavbar } from '../components/ui/AnimatedNavbar';
import { LoadingScreen } from '../components/LoadingScreen';
import { Footer } from '../components/Footer';
import { EXPERIENCES } from '../constants/data';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  const {
    animations,
    refs: { heroRef, profileRef, experienceRef, worksRef, projectsRef, contactRef }
  } = useScrollAnimations();

  return (
    <>
      {/* Loading Screen - only on initial load */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      
      <main className={`flex flex-col items-center relative bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Animated Navbar - appears on scroll */}
        <AnimatedNavbar animations={animations} />
        
        {/* Hero Section */}
        <HeroSection heroRef={heroRef} animations={animations} />

        {/* Profile Section */}
        <ProfileSection 
          profileRef={profileRef}
          animations={animations}
        />

        {/* Experiences Section */}
        <ExperienceSection 
          experienceRef={experienceRef} 
          experiences={EXPERIENCES}
          animations={animations}
        />

        {/* Works Section */}
        <WorksSection worksRef={worksRef} />

        {/* Featured Projects and Certifications Section */}
        <ProjectsSection projectsRef={projectsRef} animations={animations} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection contactRef={contactRef} animations={animations} />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

