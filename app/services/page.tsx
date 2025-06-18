"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Photography & Videography');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'pandits', name: 'Pandits', count: 120 },
    { id: 'photography', name: 'Photography & Videography', count: 6 },
    { id: 'makeup', name: 'Makeup', count: 10 },
    { id: 'event-hosting', name: 'Event Hosting', count: 8 },
    { id: 'sound-dj', name: 'Sound & DJ', count: 4 },
  ];

  const services = [
    {
      id: 1,
      name: 'Samir Photography',
      price: 3400,
      category: 'photography',
      image: '/image205.png',
    },
    {
      id: 2,
      name: 'Manjil Photo Studio',
      price: 3900,
      category: 'photography',
      image: '/image204.png',
    },
    {
      id: 3,
      name: 'Bright Vision Studio',
      price: 4000,
      category: 'photography',
      image: '/image208.png',
    },
    {
      id: 4,
      name: 'Maneer Studios',
      price: 2500,
      category: 'photography',
      image: '/image207.png',
    },
    {
      id: 5,
      name: 'Photographers',
      subtext: '120 available',
      category: 'photography',
      featured: true,
      image: '/image6.png',
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => (
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    ));
  };

  const filteredServices = services.filter(service => {
    const selectedCategoryId = categories.find(cat => cat.name === selectedCategory)?.id;
    return service.category === selectedCategoryId;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* === HEADER SECTION === */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span className="font-semibold">Our Services</span>
            <div className="h-[1px] bg-gray-400 flex-grow w-24"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-1">
            Services : From Pandits to Cars
          </h1>
          <p className="text-gray-600">
            We have covered each & every service that you require to provide best wedding experience.
          </p>
        </div>

        <Link
          href="/services/all"
          className="text-sm text-gray-600 hover:text-amber-600 transition-colors mt-2"
        >
          View all services <span className="text-lg">↗</span>
        </Link>
      </div>

      {/* === CATEGORY TABS === */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors border
              ${selectedCategory === category.name
                ? 'bg-yellow-500 text-white border-yellow-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
              }
            `}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* === SERVICE CARDS GRID === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 auto-rows-fr">
        {sortedServices.map(service => {
          const isFeatured = service.featured === true;

          return (
            <div
              key={service.id}
              className={`
                relative rounded-lg overflow-hidden shadow-md
                ${isFeatured 
                  ? 'lg:col-span-1 bg-gray-800 text-white lg:h-[320px] lg:w-[95%]' 
                  : 'min-h-[340px]'}
              `}
            >
              {/* Image Section */}
              <div 
                className={`
                  relative w-full 
                  ${isFeatured ? 'h-[250px]' : 'h-52'}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 rounded-lg"></div>
                
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />

                {!isFeatured && (
                  <button
                    onClick={() => toggleFavorite(service.id)}
                    className="absolute top-2 right-2 z-20 bg-white p-1.5 rounded-full shadow-sm"
                  >
                    {favorites.includes(service.id) ? (
                      <HeartIconSolid className="h-5 w-5 text-red-500" />
                    ) : (
                      <HeartIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                )}
              </div>

              {/* Text Section */}
              <div className={`p-3 ${isFeatured ? 'bg-gray-800' : 'bg-white'}`}>
                <h3
                  className={`
                    ${isFeatured ? 'font-bold text-lg text-white' : 'font-medium text-gray-800'}
                  `}
                >
                  {service.name}
                </h3>

                {isFeatured ? (
                  <p className="text-sm text-gray-300">{service.subtext}</p>
                ) : (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-gray-500">From</span>
                    <span className="text-base font-semibold text-amber-600">
                      Rs. {service.price?.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
