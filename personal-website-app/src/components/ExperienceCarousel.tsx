'use client';

import Image from "next/image";
import { Experience } from "../../types/global";
import { ChevronLeft, ChevronRight } from 'react-feather';

interface ExperienceCarouselProps {
  experiences: Experience[];
  currentCard: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function ExperienceCarousel({ experiences, currentCard, onNext, onPrevious }: ExperienceCarouselProps) {
  return (
    <section className="w-full bg-white relative" aria-labelledby="experiences-heading">
      <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
        <Image
          src="/ridhwan-logo.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <h2 
          id="experiences-heading"
          className="text-4xl font-extralight text-center mb-12 font-poppins absolute top-24 left-1/2 transform -translate-x-1/2"
        >
          Experiences
        </h2>
        <div className="flex h-full items-center">
          <div className="flex justify-center items-center w-full">
            <button 
              onClick={onPrevious} 
              className="mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous experience"
              type="button"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            
            <div className="flex space-x-4 overflow-hidden" role="region" aria-label="Experience cards">
              {[0, 1, 2].map((offset) => {
                const index = (currentCard + offset) % experiences.length;
                const exp = experiences[index];
                return (
                  <article 
                    key={index} 
                    className="w-64 h-96 bg-white rounded-lg shadow-md flex flex-col transition-transform duration-700 ease-in-out transform"
                  >
                    <div className="h-2/5 p-4 flex items-center justify-center bg-gray-50 rounded-t-lg">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={100}
                        height={150}
                        style={{objectFit:"contain"}}
                      />
                    </div>
                    <div className="h-3/5 p-4 flex flex-col justify-between bg-black text-white">
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-sm text-center">{exp.duration}</p>
                      <p className="text-lg font-medium text-center">{exp.role}</p>
                      <p className="text-sm text-center">{exp.location}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <button 
              onClick={onNext} 
              className="mx-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next experience"
              type="button"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}