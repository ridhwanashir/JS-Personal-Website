'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Post } from '../../types/global';
import { X, Tag } from 'lucide-react';

interface PostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PostModal({ post, isOpen, onClose }: PostModalProps) {
  const router = useRouter();

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const handleReadFull = () => {
    onClose();
    router.push(`/posts/${post.id}`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {post.category}
            </span>
          </div>

          {/* Type Badge */}
          <div className="absolute top-6 right-16">
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium">
              {post.type === 'project' ? 'Project' : 'Article'}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {post.title}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6 font-medium">
            {post.subtitle}
          </p>

          {/* Technologies (for projects) */}
          {post.technologies && post.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="w-20 h-1 bg-blue-600 mb-6" />

          {/* Summary (if available) */}
          {post.summary && (
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preview</h3>
              <p className="text-gray-700 leading-relaxed">
                {post.summary}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleReadFull}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Read Full {post.type === 'project' ? 'Project' : 'Article'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep backward compatibility alias
export const ArticleModal = PostModal;
