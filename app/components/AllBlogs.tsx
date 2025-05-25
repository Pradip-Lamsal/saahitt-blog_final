import React from 'react';
import Image from 'next/image';
import blogsData from '../data/allBlogs.json';


const AllBlogs = () => {
  const { allBlogPosts } = blogsData;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4 text-[#5A3E14]">All Blogs</h2>
      
      {/* Responsive grid - consistent card sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allBlogPosts.map((post) => (
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

export default AllBlogs; 