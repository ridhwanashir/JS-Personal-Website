'use client';

import React, { useState, useCallback, useEffect } from 'react';
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
  autoPlay = false, 
  autoPlayInterval = 5000,
  showIndicators = true,
  className = '' 
}: ModernCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [experiences.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [experiences.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className={`relative w-full ${className}`} role="region" aria-label="Experience carousel">
      {/* Mobile View: Single Card */}
      <div className="block sm:hidden">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 px-2">
                <ExperienceCard 
                  experience={exp} 
                  isActive={index === currentIndex}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View: Three Card Carousel */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="flex-shrink-0 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Previous experience"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 280}px)`,
                width: `${experiences.length * 280}px`
              }}
            >
              {experiences.map((exp, index) => {
                const distance = Math.abs(index - currentIndex);
                const isActive = index === currentIndex;
                const isVisible = distance <= 1;
                
                return (
                  <div 
                    key={index} 
                    className={`w-64 mx-2 transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100' : 'opacity-30'
                    } ${
                      isActive 
                        ? 'scale-105 z-20' 
                        : distance === 1 
                          ? 'scale-95 z-10' 
                          : 'scale-90 z-0'
                    }`}
                  >
                    <ExperienceCard 
                      experience={exp} 
                      isActive={isActive}
                      onClick={() => goToSlide(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="flex-shrink-0 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Next experience"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex sm:hidden justify-center space-x-4 mt-6">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50"
          aria-label="Previous experience"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50"
          aria-label="Next experience"
        >
          <ChevronRight size={20} className="text-black" />
        </button>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center space-x-2 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      )}
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
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group ${className}`}
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
      <div className="h-32 bg-gray-50 flex items-center justify-center p-4 group-hover:bg-gray-100 transition-colors duration-300">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={120}
          height={80}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Experience Details */}
      <div className={`p-6 text-white transition-all duration-300 ${
        isActive ? 'bg-black' : 'bg-gray-800 group-hover:bg-gray-700'
      }`}>
        <h3 className="text-lg font-semibold mb-2 text-center">{experience.company}</h3>
        <p className="text-sm text-center mb-3 opacity-90">{experience.duration}</p>
        <p className="text-base font-medium text-center mb-2">{experience.role}</p>
        <p className="text-sm text-center opacity-80">{experience.location}</p>
      </div>
    </article>
  );
}