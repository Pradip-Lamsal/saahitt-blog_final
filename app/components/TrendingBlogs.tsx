import React from 'react';
import Image from 'next/image';
import blogData from '../data/blogPosts.json';

/**
 * TrendingBlogs Component
 * 
 * Displays a grid of trending blog posts with images, titles, categories and dates
 */
const TrendingBlogs = () => {
  const { trendingPosts } = blogData;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4 text-[#5A3E14]">Trending Blogs</h2>
      <div className="border-t border-gray-200 mb-6"></div>
      
      {/* Responsive grid - consistent card sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trendingPosts.slice(0, 7).map((post) => (
          <div 
            key={post.id} 
            className="rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-md"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="relative h-48">
              <Image 
                src={post.image.src} 
                alt={post.image.alt} 
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <span className="mr-4">{post.category}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs; 