'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArticleCard } from '../../components/ArticleCard';
import { PostModal } from '../../components/ArticleModal';
import { POSTS } from '../../constants/data';
import { Post } from '../../../types/global';

const CATEGORIES = ['All', ...Array.from(new Set(POSTS.map(post => post.category)))];

export default function PlaygroundPage() {
  return (
    <Suspense fallback={<PlaygroundFallback />}> 
      <PlaygroundContent />
    </Suspense>
  );
}

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = CATEGORIES;

  // Handle URL parameters on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const postParam = searchParams.get('post');

    // Set category from URL
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }

    // Open specific post modal from URL
    if (postParam) {
      const post = POSTS.find(p => p.id === postParam);
      if (post) {
        setSelectedPost(post);
        setIsModalOpen(true);
      }
    }
  }, [searchParams, categories]);

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? POSTS 
    : POSTS.filter(post => post.category === selectedCategory);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300); // Wait for animation to complete
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (category === 'All') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Playground
              </h1>
              <p className="text-gray-600 mt-2">
                Explore projects, articles, experiments, and insights
              </p>
            </div>
            <a 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter/Category Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
            <span className="font-semibold">Categories:</span>
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Posts Count */}
        <div className="mb-4 text-gray-600 text-sm">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <ArticleCard
              key={post.id}
              article={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>

        {/* Empty State (if no posts) */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Posts Found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </button>
          </div>
        )}
      </main>

      {/* Post Modal */}
      <PostModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function PlaygroundFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <p className="text-gray-500">Loading playground...</p>
    </div>
  );
}
