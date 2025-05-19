import React from 'react';
import Image from 'next/image';
import { Flame } from 'lucide-react';
import imageData from '../data/images.json';

/**
 * MustRead Component
 * 
 * Displays a featured blog post with the "Must Read" heading
 */
const MustRead = () => {
  const { featuredPost } = imageData;

  return (
    <div className="mt-20 mb-10">
      {/* Section header with icon */}
      <div className="flex items-center mb-8">
        <Flame size={32} strokeWidth={3} className="text-amber-500 mr-2" />
        <h2 className="text-2xl font-bold text-[#5A3E14]">Must Read</h2>
      </div>

      {/* Featured post card */}
      <div className="bg-amber-50 rounded-xl p-6 mb-8 transition-transform duration-300 hover:shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Post image */}
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden h-60 md:h-full relative">
              <Image 
                src={featuredPost.image.src} 
                alt={featuredPost.image.alt} 
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Post content */}
          <div className="md:w-2/3">
            <div className="text-gray-600 mb-2">{featuredPost.category}</div>
            <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
            <p className="text-gray-700 mb-6">
              {featuredPost.content}
            </p>
            
            {/* Social sharing and view count */}
            <div className="flex items-center">
              <button className="mr-4 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </button>
              <span className="text-gray-600 ml-auto">{featuredPost.views} Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-amber-600"></div>
        <div className="w-2 h-2 rounded-full bg-amber-300"></div>
        <div className="w-2 h-2 rounded-full bg-amber-300"></div>
        <div className="w-2 h-2 rounded-full bg-amber-300"></div>
      </div>
    </div>
  );
};

export default MustRead; 