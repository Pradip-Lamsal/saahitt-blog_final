import React from 'react';
import Image from 'next/image';
import imageData from '../data/images.json';
import TrendingBlogs from './TrendingBlogs';
import MustRead from './MustRead';
import AllBlogs from './AllBlogs';
import ServiceCategories from './ServiceCategories';
/**
 * HeroSection Component
 * 
 * This component displays the main content of the blog homepage including:
 * - Header with text and image grid
 * - Search box
 * - Featured blog post
 * - Trending blogs section
 * - All blogs section
 */
const HeroSection = () => {
  // Get image data from JSON file
  const { galleryImages } = imageData;

  return (
    <div className="bg-white">
      {/* BLOG HEADER SECTION */}
      <div className="bg-amber-500 rounded-xl overflow-hidden mb-16">
        {/* Flex container for text and images */}
        <div className="flex flex-col md:flex-row">
          {/* Left text content */}
          <div className="p-8 md:p-12 md:w-1/2">
            <h3 className="text-xl font-semibold mb-3">Our Blogs</h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Learning resources about finding prefect Venue
            </h1>
            <p className="text-base md:text-lg">
              Welcome to our blog page, where you can explore a diverse selection of over 400 carefully curated vendors. 
              Dive into expert tips, inspiring stories, and the latest trends to make your special day truly remarkable!
            </p>
          </div>

          {/* Right image gallery - Mosaic style grid */}
          <div className="hidden md:block md:w-1/2 p-4">
            <div className="grid grid-cols-3 gap-2 h-full">
              {/* First column - 2 images */}
              <div className="flex flex-col gap-2 h-full">
                <div className="h-1/2 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[0].src} 
                    alt={galleryImages[0].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="h-1/2 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[1].src} 
                    alt={galleryImages[1].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              
              {/* Middle column - 3 images */}
              <div className="flex flex-col gap-2 h-full">
                <div className="h-1/3 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[2].src} 
                    alt={galleryImages[2].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="h-1/3 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[3].src} 
                    alt={galleryImages[3].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="h-1/3 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[4].src} 
                    alt={galleryImages[4].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              
              {/* Third column - 2 images */}
              <div className="flex flex-col gap-2 h-full">
                <div className="h-1/2 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[5].src} 
                    alt={galleryImages[5].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="h-1/2 rounded-lg overflow-hidden relative">
                  <Image 
                    src={galleryImages[6].src} 
                    alt={galleryImages[6].alt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BOX SECTION */}
      <div className="bg-white rounded-lg shadow-md p-6 mx-auto -mt-16 relative z-10 max-w-2xl bottom-12">
        <h3 className="text-center mb-4">Search the right topic for you</h3>
        {/* Search input with button */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type your topic here ..."
            className="w-full border border-amber-200 rounded-full px-6 py-3 outline-none"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* FEATURED BLOG POST SECTION */}
      <MustRead />

      {/* TRENDING BLOGS SECTION */}
      <TrendingBlogs />
      
      {/* ALL BLOGS SECTION */}
      <div className="mt-16 pt-12 border-t border-gray-600">
        <AllBlogs />
      </div>
      
      {/* SERVICE CATEGORIES SECTION */}
      <div className="mt-12">
        <ServiceCategories />
      </div>
    </div>
  );
};

export default HeroSection; 