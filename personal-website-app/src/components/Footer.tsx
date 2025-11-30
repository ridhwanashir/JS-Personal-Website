'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
          © {currentYear} Ridhwan Nashir. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/playground"
            className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-300 flex items-center gap-2"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
              />
            </svg>
            Playground
          </Link>
          <a 
            href="https://github.com/ridhwanashir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/ridhwanashir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
