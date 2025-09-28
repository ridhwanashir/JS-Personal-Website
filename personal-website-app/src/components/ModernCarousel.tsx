'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Experience } from '../../types/global';

interface ModernCarouselProps {
  experiences: Experience[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  className?: string;
}

export function ModernCarousel({ 
  experiences, 
  autoPlay = true, 
  autoPlayInterval = 3000,
  showIndicators = true,
  className = '' 
}: ModernCarouselProps) {
  console.log('ModernCarousel - experiences received:', experiences); // Debug log
  
  // Safety check for empty or undefined experiences
  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No experiences to display</p>
      </div>
    );
  }
  
  const [currentIndex, setCurrentIndex] = useState(experiences.length); // Start at first real item (middle section)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create infinite loop by duplicating experiences
  const infiniteExperiences = [
    ...experiences, // Clone at start for backward infinite
    ...experiences, // Original items
    ...experiences  // Clone at end for forward infinite
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(experiences.length + index); // Jump to middle section
  }, [isTransitioning, experiences.length]);

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // Reset position for infinite loop without transition
      if (currentIndex >= experiences.length * 2) {
        // If we're at the end clones, jump to start of original
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            setCurrentIndex(experiences.length);
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = '';
              }
            }, 10);
          }
        }, 10);
      } else if (currentIndex < experiences.length) {
        // If we're at the start clones, jump to end of original
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            setCurrentIndex(experiences.length * 2 - 1);
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = '';
              }
            }, 10);
          }
        }, 10);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, experiences.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || isTransitioning) return;
    
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, isPaused, isTransitioning]);

  // Get actual current index for indicators (0-based from original array)
  const getActualIndex = () => {
    const actualIndex = currentIndex % experiences.length;
    return actualIndex;
  };

  return (
    <div 
      className={`relative w-full ${className}`} 
      role="region" 
      aria-label="Experience carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Mobile: Single card view */}
        <div className="block sm:hidden">
          <div className="overflow-hidden">
            <div 
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {infiniteExperiences.map((exp, index) => {
                // Calculate if this card represents the currently active experience
                const actualExperienceIndex = index % experiences.length;
                const currentActualIndex = currentIndex % experiences.length;
                const isActiveCard = actualExperienceIndex === currentActualIndex && Math.floor(index / experiences.length) === Math.floor(currentIndex / experiences.length);
                
                return (
                  <div key={`mobile-${index}`} className="w-full flex-shrink-0 px-4">
                    <ExperienceCard 
                      experience={exp} 
                      isActive={isActiveCard}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Multiple cards view (3 cards visible) */}
        <div className="hidden sm:block">
          <div className="relative overflow-hidden">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50"
              aria-label="Previous experience"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50"
              aria-label="Next experience"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>

            {/* Cards Container */}
            <div className="px-16">
              <div 
                ref={containerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex - 1) * (100/3)}%)`,
                }}
              >
                {infiniteExperiences.map((exp, index) => {
                  // Calculate if this card represents the currently active experience
                  const actualExperienceIndex = index % experiences.length;
                  const currentActualIndex = currentIndex % experiences.length;
                  const isActiveCard = actualExperienceIndex === currentActualIndex && Math.floor(index / experiences.length) === Math.floor(currentIndex / experiences.length);
                  
                  return (
                    <div key={`desktop-${index}`} className="flex-shrink-0 px-3" style={{ width: `${100/3}%` }}>
                      <ExperienceCard 
                        experience={exp} 
                        isActive={isActiveCard}
                        onClick={() => {
                          const actualIndex = index % experiences.length;
                          goToSlide(actualIndex);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex sm:hidden justify-center space-x-4 mt-6">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50"
          aria-label="Previous experience"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50"
          aria-label="Next experience"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center space-x-3 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                index === getActualIndex()
                  ? 'w-8 h-3 bg-blue-600' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
          <div 
            className={`bg-blue-600 h-1 rounded-full transition-all duration-100 ${
              isPaused ? 'w-full' : 'w-0'
            }`}
            style={{
              animation: isPaused ? 'none' : `progress ${autoPlayInterval}ms linear infinite`
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

function ExperienceCard({ experience, isActive = false, onClick, className = '' }: ExperienceCardProps) {
  return (
    <article 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group min-h-[24rem] sm:h-80 flex flex-col ${className}`}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {/* Company Logo Section */}
      <div className="h-28 sm:h-32 bg-gray-50 flex items-center justify-center p-3 sm:p-4 group-hover:bg-gray-100 transition-colors duration-300 flex-shrink-0">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={120}
          height={80}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Experience Details */}
      <div className={`p-4 sm:p-6 text-white transition-all duration-300 flex-1 flex flex-col justify-center ${
        isActive ? 'bg-black' : 'bg-gray-800 group-hover:bg-gray-700'
      }`}>
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-center leading-tight min-h-[2.5rem] sm:min-h-[3.5rem] flex items-center justify-center px-1">{experience.company}</h3>
        <p className="text-xs sm:text-sm text-center mb-2 sm:mb-3 opacity-90">{experience.duration}</p>
        <p className="text-sm sm:text-base font-medium text-center mb-2 min-h-[1.2rem] sm:min-h-[1.5rem] flex items-center justify-center">{experience.role}</p>
        <p className="text-xs sm:text-sm text-center opacity-80">{experience.location}</p>
      </div>
    </article>
  );
}