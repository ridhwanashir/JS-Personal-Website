'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
      {/* Logo */}
      <div className={`mb-8 transition-all duration-500 ${isFading ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <Image
          src="/ridhwan-logo.png"
          alt="Logo of Ridhwan Nashir"
          width={150}
          height={150}
          priority
          className="w-32 h-auto md:w-40"
        />
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
