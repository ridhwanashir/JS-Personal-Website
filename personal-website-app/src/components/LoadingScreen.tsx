'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 80 ? Math.random() * 15 + 5 : Math.random() * 5 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Start fade out animation
      setTimeout(() => {
        setIsFading(true);
      }, 200);
      
      // Complete loading
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 700);
    }
  }, [progress, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo/Name */}
      <div className={`mb-8 transition-all duration-500 ${isFading ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <h1 className="text-4xl md:text-5xl font-extralight text-black tracking-wider">
          RIDHWAN
        </h1>
        <p className="text-center text-sm text-gray-500 tracking-widest mt-2">
          NASHIR
        </p>
      </div>

      {/* Loading bar */}
      <div className="w-48 md:w-64 h-0.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <p className="mt-4 text-xs text-gray-400 tracking-widest">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
