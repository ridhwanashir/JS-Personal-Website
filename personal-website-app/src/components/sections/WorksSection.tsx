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
  return (
    <div ref={worksRef} className="w-full min-h-screen lg:h-screen bg-black relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-center mb-8 lg:mb-12 font-poppins absolute top-8 sm:top-16 lg:top-24 left-1/2 transform -translate-x-1/2 text-white">Works</h2>
      
      {/* Mobile and Medium: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 p-4 pt-24 sm:pt-32 md:pt-40 h-full">
        <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_data_ml} alt="background data and ml" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Data & ML</p>
          </div>
        </div>
        
        <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_design} alt="background design" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Designs</p>
          </div>
        </div>
        
        <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110">
            <Image src={worksbg_software} alt="background software" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-full">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <p className="relative text-lg sm:text-xl text-white z-10 text-center px-4">Software Engineering</p>
          </div>
        </div>
        
        <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg group">
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
      <div className="hidden lg:flex h-3/4 w-full absolute bottom-0">
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_data_ml} alt="background data and ml" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Data & ML</p>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_design} alt="background design" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Designs</p>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image src={worksbg_software} alt="background software" className="w-full h-full object-cover" />
          </div>
          <div className="relative inset-0 flex items-center justify-center w-full h-16">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <p className="relative text-2xl text-white z-10">Software Engineering</p>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
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