import React from 'react';
import Image from 'next/image';
import { Article } from '../../types/global';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
      onClick={onClick}
    >
      {/* Article Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {article.subtitle}
        </p>

        <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-2">
          Read More
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}
