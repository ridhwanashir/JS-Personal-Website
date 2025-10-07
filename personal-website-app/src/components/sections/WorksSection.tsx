import React from 'react';
import Image from 'next/image';
import worksbg_data_ml from "../../../public/works_data_ml_bg.png";
import worksbg_design from "../../../public/works_design_bg.png";
import worksbg_software from "../../../public/works_software_bg.png";
import worksbg_research from "../../../public/works_research_bg.png";
import { AnimationState } from '../../hooks/useScrollAnimations';

interface WorksSectionProps {
  worksRef: React.RefObject<HTMLDivElement>;
  animations: AnimationState;
}

export function WorksSection({ worksRef, animations }: WorksSectionProps) {
  const companyLogos = [
    { src: '/logo_dana_2.png', alt: 'Dana Indonesia' },
    { src: '/logo_gys.webp', alt: 'Garuda Yamato Steel' },
    { src: '/logo_haleon_2.png', alt: 'Haleon' },
    { src: '/logo_kemenkeu.png', alt: 'Kementrian Keuangan' },
    { src: '/axrail_logo.png', alt: 'Axrail' },
  ];

  const handleWorkItemClick = () => {
    window.open('https://drive.google.com/file/d/1wA1Ez_wumMSTN6vje7AkpI8qvFUO1iLJ/view?usp=sharing', '_blank');
  };

  return (
    <div ref={worksRef} className="w-full min-h-[120vh] lg:min-h-[130vh] bg-black relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-center mb-8 lg:mb-12 font-poppins absolute top-8 sm:top-16 lg:top-24 left-1/2 transform -translate-x-1/2 text-white">Works</h2>
      
      {/* Company Logos Animation Section - Above the works */}
      <div className="absolute top-32 sm:top-40 lg:top-48 w-full z-20">
        <h3 className="text-lg sm:text-l lg:text-xl font-light text-center mb-6 sm:mb-8 text-white">
          Worked on Projects with
        </h3>
        
        <div className="relative overflow-hidden mb-8 sm:mb-12 lg:mb-16">
          {/* Fade overlay for smooth edges */}
          <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Scrolling logos container */}
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {companyLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8 sm:mx-12 lg:mx-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="h-12 sm:h-16 lg:h-20 w-40 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8 sm:mx-12 lg:mx-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="h-12 sm:h-16 lg:h-20 w-40 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile and Medium: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 p-4 pt-80 sm:pt-96 md:pt-96 pb-0">
        <div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_data_ml} alt="background data and ml" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Data & ML</p>
          </div>
        </div>
        
        <div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_design} alt="background design" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Designs</p>
          </div>
        </div>
        
        <div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_software} alt="background software" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Software Engineering</p>
          </div>
        </div>
        
        <div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_research} alt="background research" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Research and Blogs</p>
          </div>
        </div>
      </div>

      {/* Large screens: Original horizontal layout */}
      <div className="hidden lg:flex h-3/5 w-full absolute top-80 pt-20">
        <div 
          className="relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_data_ml} alt="background data and ml" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Data & ML</p>
          </div>
        </div>
        <div 
          className="relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_design} alt="background design" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Designs</p>
          </div>
        </div>
        <div 
          className="relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_software} alt="background software" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Software Engineering</p>
          </div>
        </div>
        <div 
          className="relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleWorkItemClick}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_research} alt="background research" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Research and Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
}