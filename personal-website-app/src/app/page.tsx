'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'react-feather';

export default function Home() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Refs for section elements
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation state
  const [animations, setAnimations] = useState({
    backgroundTransition: 0,
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
      
      // Background transition (hero to profile)
      const transitionStart = heroHeight * 0.7;
      const transitionEnd = profileTop + profileHeight * 0.3;
      const backgroundProgress = Math.max(0, Math.min(1, 
        (currentScrollY - transitionStart) / (transitionEnd - transitionStart)
      ));
      
      // Profile text animation
      const textStart = profileTop - window.innerHeight * 0.3;
      const textEnd = profileTop + profileHeight * 0.5;
      const textProgress = Math.max(0, Math.min(1,
        (currentScrollY - textStart) / (textEnd - textStart)
      ));
      
      // Section visibility checks
      const windowHeight = window.innerHeight;
      const experienceVisible = currentScrollY + windowHeight > experienceTop + 200;
      const worksVisible = currentScrollY + windowHeight > worksTop + 200;
      const projectsVisible = currentScrollY + windowHeight > projectsTop + 200;
      const certificationsVisible = currentScrollY + windowHeight > projectsTop + 400;
      
      setAnimations({
        backgroundTransition: backgroundProgress,
        profileTextProgress: textProgress,
        experienceVisible,
        worksVisible,
        projectsVisible,
        certificationsVisible
      });
    };

    if (isClient) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    }
    
    return () => {
      if (isClient) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isClient]);
  
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

  // Function to move to the next card
  const nextCard = () => {
    setCurrentCard((prev: number) => (prev + 1) % experiences.length);
  };

  // Function to move to the previous card
  const prevCard = () => {
    setCurrentCard((prev: number) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <main className="flex flex-col items-center relative">
      {/* Animated background overlay for transition */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(rgba(0,0,0,${animations.backgroundTransition * 0.3}), rgba(0,0,0,${animations.backgroundTransition * 0.3})), url('/background_2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: animations.backgroundTransition,
          transition: 'opacity 0.1s ease-out'
        }}
      />

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-cover bg-center relative z-10" 
        style={{ 
          backgroundImage: "url('/background_1.png')",
          opacity: 1 - animations.backgroundTransition * 0.7
        }}
      >
        {/* Logo and Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8">
          <Image
            src="/ridhwan-logo.png"
            alt="Logo of Ridhwan Nashir"
            width={200}
            height={200}
            priority
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-auto lg:h-auto"
            style={{
              maxWidth: '100%',
            }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mt-4 sm:mt-6 md:mt-8 text-center">Ridhwan Nashir</h1>
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-center px-4">
            Software Engineer <span className="mx-1 sm:mx-2 hidden sm:inline">•</span><br className="sm:hidden" /> Solution Architect <span className="mx-1 sm:mx-2 hidden sm:inline">•</span><br className="sm:hidden" /> Explorer
          </h2>
        </div>
      </div>

      {/* Profile Section */}
      <div ref={profileRef} className="w-full bg-white relative z-10">
        <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
          {/* Small logo at the top */}
          <Image
            src="/ridhwan-logo.png"
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-10 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12"
          />
          <div className="flex flex-col lg:flex-row h-full py-16 lg:py-0">
            {/* Profile Image */}
            <div className="w-full lg:w-1/3 relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <Image
                src="/background_2.png"
                alt="Ridhwan Nashir"
                width={400}
                height={500}
                style={{objectFit:"cover"}}
                className="relative lg:absolute bottom-0 w-64 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-full max-w-full object-center"
              />
            </div>
            {/* Profile Description */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8 flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="text-center lg:text-left lg:pr-12">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans leading-tight">
                  {/* Row 1 */}
                  <div className="overflow-hidden">
                    <span 
                      className="inline-block transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, 
                          black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 0) * 100))}%, 
                          #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 0) * 100))}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Data-driven Software Engineer
                    </span>
                  </div>
                  <br />
                  
                  {/* Row 2 */}
                  <div className="overflow-hidden">
                    <span 
                      className="inline-block transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, 
                          black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 1) * 100))}%, 
                          #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 1) * 100))}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      with a passion for machine learning,
                    </span>
                  </div>
                  <br />
                  
                  {/* Row 3 */}
                  <div className="overflow-hidden">
                    <span 
                      className="inline-block transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, 
                          black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 2) * 100))}%, 
                          #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 2) * 100))}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      always seeking new challenges to apply
                    </span>
                  </div>
                  <br />
                  
                  {/* Row 4 */}
                  <div className="overflow-hidden">
                    <span 
                      className="inline-block transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, 
                          black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 3) * 100))}%, 
                          #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 3) * 100))}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      skills and knowledge to solve real-world
                    </span>
                  </div>
                  <br />
                  
                  {/* Row 5 */}
                  <div className="overflow-hidden">
                    <span 
                      className="inline-block transition-all duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, 
                          black ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 4) * 100))}%, 
                          #d1d5db ${Math.max(0, Math.min(100, (animations.profileTextProgress * 5 - 4) * 100))}%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      problems.
                    </span>
                  </div>
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

      {/* Experiences Section */}
      <div ref={experienceRef} className="w-full bg-white relative z-10">
        <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
          <Image
            src="/ridhwan-logo.png"
            alt="Small logo"
            width={50}
            height={50}
            className={`absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 transition-all duration-1000 ${
              animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          />
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-8 sm:mb-12 font-poppins absolute top-16 sm:top-24 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-200 ${
            animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>Experiences</h2>
          <div className="flex h-full items-center py-16 sm:py-0">
            <div className="flex justify-center items-center w-full">
              <button 
                onClick={prevCard} 
                className={`hidden sm:flex mx-2 lg:mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-all duration-1000 delay-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  animations.experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                aria-label="Previous experience"
                type="button"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              
              {/* Experience cards */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 overflow-hidden w-full max-w-4xl">
                {/* Mobile: show only current card, Desktop: show 3 cards */}
                <div className={`block sm:hidden w-full transition-all duration-1000 delay-600 ${
                  animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  {(() => {
                    const exp = experiences[currentCard];
                    return (
                      <div className="w-full h-80 bg-white rounded-lg shadow-md flex flex-col transition-transform duration-700 ease-in-out transform mx-auto max-w-sm hover:scale-105">
                        <div className="h-2/5 p-4 flex items-center justify-center bg-white-100 rounded-t-lg">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={100}
                            height={150}
                            style={{objectFit:"contain"}}
                            className="max-w-full max-h-full"
                          />
                        </div>
                        <div className="h-3/5 p-4 flex flex-col justify-between bg-black text-white">
                          <h2 className="text-lg font-semibold" style={{ color: "white" }}>{exp.company}</h2>
                          <p className="text-xs text-center">{exp.duration}</p>
                          <p className="text-base font-medium text-center">{exp.role}</p>
                          <p className="text-xs text-center">{exp.location}</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                {/* Desktop: show 3 cards */}
                <div className="hidden sm:flex space-x-4">
                  {[0, 1, 2].map((offset) => {
                    const index = (currentCard + offset) % experiences.length;
                    const exp = experiences[index];
                    return (
                      <div 
                        key={index} 
                        className={`w-64 h-96 bg-white rounded-lg shadow-md flex flex-col transition-all duration-1000 ease-out hover:scale-105 ${
                          animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                        style={{
                          transitionDelay: `${600 + offset * 200}ms`
                        }}
                      >
                        <div className="h-2/5 p-4 flex items-center justify-center bg-white-100 rounded-t-lg">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={100}
                            height={150}
                            style={{objectFit:"contain"}}
                            className="max-w-full max-h-full"
                          />
                        </div>
                        <div className="h-3/5 p-4 flex flex-col justify-between bg-black text-white">
                          <h2 className="text-xl font-semibold" style={{ color: "white" }}>{exp.company}</h2>
                          <p className="text-sm text-center">{exp.duration}</p>
                          <p className="text-lg font-medium text-center">{exp.role}</p>
                          <p className="text-sm text-center">{exp.location}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={nextCard} 
                className={`hidden sm:flex mx-2 lg:mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-all duration-1000 delay-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  animations.experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                aria-label="Next experience"
                type="button"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Mobile navigation */}
          <div className={`flex sm:hidden justify-center space-x-4 absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
            animations.experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={prevCard} 
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous experience"
              type="button"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button 
              onClick={nextCard} 
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next experience"
              type="button"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div ref={worksRef} className="w-full min-h-screen bg-black relative z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-8 sm:mb-12 font-poppins absolute top-16 sm:top-24 left-1/2 transform -translate-x-1/2 text-white px-4 transition-all duration-1000 ${
          animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>Works</h2>
        <div className="flex flex-col sm:flex-row h-3/4 w-full absolute bottom-0">
          <div className={`relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0 transition-all duration-1000 ${
            animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_data_ml_bg.png" alt="Data and Machine Learning background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            {/* Transparent overlay with text */}
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Data & ML</p>
            </div>
          </div>
          <div className={`relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0 transition-all duration-1000 ${
            animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_design_bg.png" alt="Design and Art background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Designs & Art</p>
            </div>
          </div>
          <div className={`relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0 transition-all duration-1000 ${
            animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_software_bg.png" alt="Software Engineering background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Software Engineering</p>
            </div>
          </div>
          <div className={`relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0 transition-all duration-1000 ${
            animations.worksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_research_bg.png" alt="Research and Blogs background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Research and Blogs</p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Projects and Certifications Section */}
      <div ref={projectsRef} className="w-full min-h-screen bg-black relative flex flex-col items-center px-4 sm:px-6 lg:px-8 z-10">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-16 sm:mt-24 text-white text-center transition-all duration-1000 ${
          animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>Featured Projects</h2>
        <div className="flex flex-col sm:flex-row w-full max-w-6xl relative mt-8 sm:mt-0 mb-8 sm:mb-0">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className={`relative flex-1 flex items-center justify-center overflow-hidden m-2 mt-4 sm:mt-8 min-h-[150px] sm:min-h-[200px] transition-all duration-1000 ${
                animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="w-full bg-white duration-500 ease-in-out transform hover:scale-110">
                <Image src="/under_construction.jpeg" alt="Project under construction" className="w-full object-cover" width={500} height={300} />
              </div>
            </div>
          ))}
          <div className={`flex-1 flex flex-col items-center justify-center mt-4 sm:mt-8 border border-gray-800 bg-black p-4 group relative m-2 min-h-[150px] sm:min-h-[200px] transition-all duration-1000 ${
            animations.projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <div
              className="transform transition-transform duration-500 group-hover:rotate-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <p className="mt-2 text-white text-xs sm:text-sm text-center">
              Your project
            </p>
            <div className="absolute -top-6 sm:-top-8 right-0 flex items-center space-x-2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs sm:text-sm underline decoration-transparent hover:decoration-white transition"
              >
                See All Projects
              </a>
              <ExternalLink color="white" size={14}/>
            </div>
          </div>
        </div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-8 sm:mt-12 text-white text-center transition-all duration-1000 ${
          animations.certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-6xl relative mt-4 sm:mt-8 mb-8">
          {[
            { src: "/certifications-microsoft-ai.webp", alt: "Microsoft Azure AI Fundamentals certification", title: "Microsoft Azure", subtitle: "AI Fundamentals", date: "Issued Jun 2024" },
            { src: "/certifications-aws-sa.png", alt: "AWS Solution Architect certification", title: "AWS", subtitle: "Solution Architect", date: "Issued Apr 2024" },
            { src: "/certifications-google-data.png", alt: "Google Data Analytics certification", title: "Google", subtitle: "Data Analytics", date: "Issued Feb 2023" },
            { src: "/certifications-tensorflow.png", alt: "TensorFlow Developer certification", title: "TensorFlow", subtitle: "Developer", date: "Issued Jul 2022" },
            { src: "/certifications-google-data.png", alt: "Google Python Automation certification", title: "Google", subtitle: "Python Automation", date: "Issued Mar 2022" },
            { src: "/certifications-imperial-college-ml.png", alt: "Imperial College Mathematics for Machine Learning certification", title: "Mathematics for Machine Learning", subtitle: "", date: "Issued Mar 2022" }
          ].map((cert, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center bg-transparent transition-all duration-1000 ${
                animations.certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image src={cert.src} alt={cert.alt} className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
              <p className="text-xs sm:text-sm text-center text-white mt-2">{cert.title}</p>
              {cert.subtitle && <p className="text-xs sm:text-sm text-center text-white">{cert.subtitle}</p>}
              <p className="text-xs text-center text-gray-500 font-thin">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Section */}
      <div className="w-full min-h-screen bg-black relative z-10">
        <div className="flex flex-col md:flex-row h-full border-white border-2">
          <div className="flex-1 border-gray-500 border-2 min-h-[300px] md:min-h-0">
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
            <div className="flex-1 border-gray-500 border-2 hover:scale-110 duration-500">
              <Image src="/interactive_skills_bg.png" alt="Interactive skills background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full border-white border-2">
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
            <div className="flex-1 border-gray-500 border-2 hover:scale-110 duration-500">
              <Image src="/interactive_interests_bg.png" alt="Interactive interests background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
          </div>
          <div className="flex-1 border-gray-500 border-2 min-h-[300px] md:min-h-0">
          </div>
        </div>
      </div>  
    </main>
  );
}

