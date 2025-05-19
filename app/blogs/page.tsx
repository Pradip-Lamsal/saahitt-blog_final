import React from 'react';
import AllBlogs from '../components/AllBlogs';

/**
 * Blogs Page Component
 * 
 * This page displays all blog posts in a grid layout
 */
export default function BlogsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AllBlogs />
    </main>
  );
} 