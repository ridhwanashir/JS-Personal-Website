'use client';

import Image from "next/image";
import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'react-feather';

export default function Home() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  
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
    <main className="flex flex-col items-center">

      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-cover bg-center" style={{ backgroundImage: "url('/background_1.png')" }}>
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
      <div className="w-full bg-white relative">
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
                className="relative lg:absolute bottom-0 w-64 h-80 sm:w-80 sm:h-96 lg:w-auto lg:h-auto max-w-full"
              />
            </div>
            {/* Profile Description */}
            <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8 flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="text-center lg:text-left lg:pr-12">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans leading-tight">
                  <span className="text-black">Data-driven Software Engineer</span><br />
                  <span className="text-black">with a passion for machine learning,</span><br />
                  <span className="text-gray-700">always seeking new challenges to apply</span><br />
                  <span className="text-gray-700">skills and knowledge to solve real-world</span><br />
                  <span className="text-gray-700">problems.</span>
                </p>
                <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 bg-black text-white font-sans font-light rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  See Curriculum Vitae
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center w-full bg-white relative px-4 sm:px-6 lg:px-8">
          <Image
            src="/ridhwan-logo.png"
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-8 sm:mb-12 font-poppins absolute top-16 sm:top-24 left-1/2 transform -translate-x-1/2">Experiences</h2>
          <div className="flex h-full items-center py-16 sm:py-0">
            <div className="flex justify-center items-center w-full">
              <button 
                onClick={prevCard} 
                className="hidden sm:flex mx-2 lg:mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Previous experience"
                type="button"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              
              {/* Experience cards */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 overflow-hidden w-full max-w-4xl">
                {/* Mobile: show only current card, Desktop: show 3 cards */}
                <div className="block sm:hidden w-full">
                  {(() => {
                    const exp = experiences[currentCard];
                    return (
                      <div className="w-full h-80 bg-white rounded-lg shadow-md flex flex-col transition-transform duration-700 ease-in-out transform mx-auto max-w-sm">
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
                      <div key={index} className="w-64 h-96 bg-white rounded-lg shadow-md flex flex-col transition-transform duration-700 ease-in-out transform">
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
                className="hidden sm:flex mx-2 lg:mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Next experience"
                type="button"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Mobile navigation */}
          <div className="flex sm:hidden justify-center space-x-4 absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
      <div className="w-full min-h-screen bg-black relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-center mb-8 sm:mb-12 font-poppins absolute top-16 sm:top-24 left-1/2 transform -translate-x-1/2 text-white px-4">Works</h2>
        <div className="flex flex-col sm:flex-row h-3/4 w-full absolute bottom-0">
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_data_ml_bg.png" alt="Data and Machine Learning background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            {/* Transparent overlay with text */}
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Data & ML</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_design_bg.png" alt="Design and Art background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Designs & Art</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/works_software_bg.png" alt="Software Engineering background" className="w-full h-full object-cover" width={500} height={300} />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-lg sm:text-xl md:text-2xl text-white z-10 text-center px-2">Software Engineering</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-0">
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
      <div className="w-full min-h-screen bg-black relative flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-16 sm:mt-24 text-white text-center">Featured Projects</h2>
        <div className="flex flex-col sm:flex-row w-full max-w-6xl relative mt-8 sm:mt-0 mb-8 sm:mb-0">
          <div className="relative flex-1 flex items-center justify-center overflow-hidden m-2 mt-4 sm:mt-8 min-h-[150px] sm:min-h-[200px]">
            <div className="w-full bg-white duration-500 ease-in-out transform hover:scale-110">
              <Image src="/under_construction.jpeg" alt="Project under construction" className="w-full object-cover" width={500} height={300} />
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden m-2 mt-4 sm:mt-8 min-h-[150px] sm:min-h-[200px]">
            <div className="w-full bg-white duration-500 ease-in-out transform hover:scale-110">
              <Image src="/under_construction.jpeg" alt="Project under construction" className="w-full object-cover" width={500} height={300} />
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden m-2 mt-4 sm:mt-8 min-h-[150px] sm:min-h-[200px]">
            <div className="w-full bg-white duration-500 ease-in-out transform hover:scale-110">
              <Image src="/under_construction.jpeg" alt="Project under construction" className="w-full object-cover" width={500} height={300} />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center mt-4 sm:mt-8 border border-gray-800 bg-black p-4 group relative m-2 min-h-[150px] sm:min-h-[200px]">
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight relative mt-8 sm:mt-12 text-white text-center">Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-6xl relative mt-4 sm:mt-8 mb-8">
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-microsoft-ai.webp" alt="Microsoft Azure AI Fundamentals certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">Microsoft Azure</p>
            <p className="text-xs sm:text-sm text-center text-white">AI Fundamentals</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Jun 2024</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-aws-sa.png" alt="AWS Solution Architect certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">AWS</p>
            <p className="text-xs sm:text-sm text-center text-white">Solution Architect</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Apr 2024</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-google-data.png" alt="Google Data Analytics certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">Google</p>
            <p className="text-xs sm:text-sm text-center text-white">Data Analytics</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Feb 2023</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-tensorflow.png" alt="TensorFlow Developer certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">TensorFlow</p>
            <p className="text-xs sm:text-sm text-center text-white">Developer</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Jul 2022</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-google-data.png" alt="Google Python Automation certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">Google</p>
            <p className="text-xs sm:text-sm text-center text-white">Python Automation</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Mar 2022</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <Image src="/certifications-imperial-college-ml.png" alt="Imperial College Mathematics for Machine Learning certification" className="h-16 sm:h-20 md:h-24 object-contain hover:scale-110 duration-500" width={96} height={96} />
            <p className="text-xs sm:text-sm text-center text-white mt-2">Mathematics for Machine Learning</p>
            <p className="text-xs text-center text-gray-500 font-thin">Issued Mar 2022</p>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="w-full min-h-screen bg-black relative">
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

