import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

/**
 * Header Component
 * 
 * A simple navigation header with logo, links and user actions
 */
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4  bg-white">
      {/* LEFT: NAVIGATION LINKS */}
      <nav className="flex items-center space-x-6">
        {/* Regular link */}
        <Link href="/" className="text-black hover:text-amber-300 pl-20">
          Home
        </Link>
        
        {/* Dropdown with arrow */}
        <div className="relative">
          <Link href="#" className="text-black hover:text-amber-300 flex items-center">
            Explore Vendor
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
        
        {/* Regular link */}
        <Link href="#" className="text-black hover:text-amber-300">
          Success Stories
        </Link>
        
        {/* Dropdown with arrow */}
        <div className="relative">
          <Link href="#" className="text-black hover:text-amber-300 flex items-center">
            Company
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* CENTER: LOGO */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image src="/saahitt.png" alt="Saahitt Logo" width={70} height={30} />
        </Link>
      </div>

      {/* RIGHT: USER ACTIONS */}
      <div className="flex items-center space-x-4 pr-20">
        {/* Search button */}
        <button className="text-amber-500 p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        {/* Login link */}
        <Link href="/login" className="text-black hover:text-amber-300">
          Login
        </Link>
        
        {/* Signup link */}
        <Link href="/signup" className="text-black hover:text-amber-300">
          Signup
        </Link>
        
        {/* Vendor button */}
        <Link 
          href="/vendor" 
          className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
        >
          Are you a Vendor?
        </Link>
      </div>
    </header>
  );
};

export default Header; 