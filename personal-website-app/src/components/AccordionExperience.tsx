'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';
import { Experience } from '../../types/global';

interface AccordionExperienceProps {
  experiences: Experience[];
  className?: string;
  isVisible?: boolean;
}

export function AccordionExperience({ experiences, className = '', isVisible: externalVisible }: AccordionExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default
  const [internalVisible, setInternalVisible] = useState(false);
  
  // Use external visibility if provided, otherwise use internal
  const isVisible = externalVisible !== undefined ? externalVisible : internalVisible;

  useEffect(() => {
    if (externalVisible === undefined) {
      const timer = setTimeout(() => setInternalVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [externalVisible]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No experiences to display</p>
      </div>
    );
  }

  return (
    <div className={`w-full space-y-3 ${className}`}>
      {experiences.map((experience, index) => {
        const isExpanded = expandedIndex === index;
        const isFirst = index === 0;
        
        return (
          <div
            key={index}
            className={`
              relative overflow-hidden transition-all duration-500 ease-out
              ${isExpanded 
                ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl' 
                : 'bg-black/80 border border-white/5 hover:border-white/10'
              }
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{
              // Sharp edges - no rounded corners
              borderRadius: '0px',
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Collapsed Header - Always Visible */}
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-white/20 group"
              aria-expanded={isExpanded}
            >
              <div className="flex items-center justify-between gap-4">
                {/* Left: Logo + Company Info */}
                <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  {/* Company Logo */}
                  <div className={`
                    flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center
                    transition-all duration-300
                    ${isExpanded ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/10'}
                  `}>
                    {experience.companyUrl ? (
                      <a 
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block"
                      >
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={48}
                          height={48}
                          className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-90"
                      />
                    )}
                  </div>

                  {/* Company & Role */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                      <h3 className="text-white font-medium text-base sm:text-lg truncate">
                        {experience.company}
                      </h3>
                      {isFirst && (
                        <span className="hidden sm:inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm sm:text-base truncate">
                      {experience.role}
                    </p>
                  </div>
                </div>

                {/* Right: Duration + Chevron */}
                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-white/80 text-sm font-light">{experience.duration}</p>
                    <p className="text-white/40 text-xs">{experience.location}</p>
                  </div>
                  
                  {/* Expand Icon */}
                  <div className={`
                    p-2 transition-transform duration-300
                    ${isExpanded ? 'rotate-180' : 'rotate-0'}
                  `}>
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </div>
                </div>
              </div>

              {/* Mobile: Duration below */}
              <div className="sm:hidden mt-2 ml-16 sm:ml-20">
                <p className="text-white/60 text-xs">{experience.duration} • {experience.location}</p>
              </div>

              {/* Highlight Badge */}
              {experience.highlight && isExpanded && (
                <div className="mt-3 ml-16 sm:ml-20">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                    {experience.highlight}
                  </span>
                </div>
              )}
            </button>

            {/* Expanded Content */}
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-out
                ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="px-4 sm:px-6 pb-6 pt-2 ml-0 sm:ml-20">
                {/* Summary */}
                {experience.summary && (
                <p className="text-white/60 text-xs sm:text-sm leading-snug mb-4 border-l-2 border-white/20 pl-4 italic">
                    {experience.summary}
                </p>
                )}

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white/90 text-sm font-medium mb-3 uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="flex items-start gap-3 text-white/70 text-sm"
                          style={{
                            animationDelay: `${achIndex * 100}ms`
                          }}
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-white/40" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h4 className="text-white/90 text-sm font-medium mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs font-light hover:bg-white/10 hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle gradient overlay for depth */}
            {isExpanded && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)'
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
