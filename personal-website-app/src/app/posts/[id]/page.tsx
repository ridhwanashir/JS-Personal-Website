'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { POSTS } from '../../../constants/data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;
  const [isLoaded, setIsLoaded] = useState(false);
  
  const post = POSTS.find(p => p.id === postId);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-white transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header with back button */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-500 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => router.push('/playground')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go back to playground"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-500">{post.type === 'project' ? 'Project' : 'Article'}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className={`relative w-full h-[50vh] mt-16 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Content */}
      <article className={`max-w-3xl mx-auto px-6 -mt-20 relative z-10 transition-all duration-500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          {post.subtitle}
        </p>

        {/* Technologies (for projects) */}
        {post.technologies && post.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
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
        <hr className="border-gray-200 mb-8" />

        {/* Markdown Content */}
        <div className="prose prose-lg prose-gray max-w-none mb-16">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom image rendering for Medium-like inline images
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={src || ''}
                      alt={alt || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {alt && (
                    <figcaption className="text-center text-sm text-gray-500 mt-2">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              ),
              // Custom heading styles
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>
              ),
              // Custom paragraph
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
              ),
              // Custom blockquote for Medium-like pull quotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-black pl-6 py-2 my-8 italic text-xl text-gray-700">
                  {children}
                </blockquote>
              ),
              // Custom list styling
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-2 mb-6">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">{children}</li>
              ),
              // Custom link styling
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              // Custom code block
              code: ({ className, children }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                    {children}
                  </code>
                );
              },
              // Strong/bold text
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
              // Emphasis/italic text
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mb-16">
          <button
            onClick={() => router.push('/playground')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </button>
        </footer>
      </article>
    </div>
  );
}
