"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Banner from './Banner';
import categoriesData from '../data/serviceCategories.json';


const ServiceCategories = () => {
  const { serviceCategories } = categoriesData;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate the categories for seamless looping
  const duplicatedCategories = [...serviceCategories, ...serviceCategories];

  return (
    <div className="mb-16 overflow-hidden w-full">
      <h2 className="text-4xl font-bold mb-8 text-[#5A3E14] text-center">
        Explore our service Categories, best suited to your needs
      </h2>
      <Banner />
      
      {/* Container for the scrolling animation */}
      <div className="relative w-full">
        <div ref={containerRef} className="relative overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * serviceCategories.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <div 
                key={`${category.id}-${index}`} 
                className="flex-shrink-0 w-[180px] mx-2 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Image container with rounded shape */}
                <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden mb-3">
                  <Image 
                    src={category.image.src} 
                    alt={category.image.alt} 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Category name and vendor count */}
                <h3 className="text-lg font-semibold text-center">{category.title}</h3>
                <p className="text-sm text-gray-600 text-center">{category.vendorCount} vendors</p>
              </div>
            ))}
          </motion.div>

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories; 