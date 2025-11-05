'use client';

import React, { useState } from 'react';
import { ArticleCard } from '../../components/ArticleCard';
import { ArticleModal } from '../../components/ArticleModal';
import { ARTICLES } from '../../constants/data';
import { Article } from '../../../types/global';

export default function PlaygroundPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300); // Wait for animation to complete
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
                Explore articles, experiments, and insights
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
        {/* Filter/Category Section (Optional for future) */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="font-semibold">Categories:</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full cursor-pointer hover:bg-blue-200 transition-colors">
              All
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Machine Learning
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Cloud Computing
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => handleArticleClick(article)}
            />
          ))}
        </div>

        {/* Empty State (if no articles) */}
        {ARTICLES.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Articles Yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </main>

      {/* Article Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
