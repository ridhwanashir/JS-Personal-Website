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

export default function Home() {
  const {
    animations,
    scrollLockState: { isTypewriterComplete, hasStartedTyping },
    refs: { heroRef, profileRef, experienceRef, worksRef, projectsRef }
  } = useScrollAnimations();

  // Experience data with proper typing
  interface Experience {
    logo: string;
    company: string;
    duration: string;
    role: string;
    location: string;
  }
  
  const experiences: Experience[] = [
    { 
      logo: "/axrail_logo.png",
      company: "Axrail Pte Ltd",
      duration: "Jan 2020 - Present",
      role: "AI/Data Engineer",
      location: "Kuala Lumpur, Malaysia"
    },
    { 
      logo: "/techbros_logo.png",
      company: "Techbros Gmbh",
      duration: "Mar 2018 - Dec 2019",
      role: "Data Science Intern",
      location: "Dusseldorf, Germany"
    },
    { 
      logo: "/telkom_university_logo.png",
      company: "Telkom University",
      duration: "Mar 2018 - Dec 2019",
      role: "Lecturer Assistant",
      location: "Bandung, Indonesia"
    },
    { 
      logo: "/metrodata_logo.png",
      company: "PT Metrodata Electronics, Tbk.",
      duration: "Apr 2024 - Current",
      role: "Technical Consultant",
      location: "Jakarta, Indonesia"
    },
  ];
  return (
    <main className="flex flex-col items-center relative bg-white">
      {/* Animated Navbar - appears on scroll */}
      <AnimatedNavbar animations={animations} />
      
      {/* Scroll Lock Indicator */}
      <ScrollLockIndicator 
        hasStartedTyping={hasStartedTyping}
        isTypewriterComplete={isTypewriterComplete}
      />

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} animations={animations} />

      {/* Profile Section */}
      <ProfileSection 
        profileRef={profileRef}
        animations={animations}
        isTypewriterComplete={isTypewriterComplete}
      />

      {/* Experiences Section */}
      <ExperienceSection experienceRef={experienceRef} animations={animations} />

      {/* Works Section */}
      <WorksSection worksRef={worksRef} animations={animations} />

      {/* Featured Projects and Certifications Section */}
      <ProjectsSection projectsRef={projectsRef} animations={animations} />

      {/* Skills Section */}
      <SkillsSection />
    </main>
  );
}

