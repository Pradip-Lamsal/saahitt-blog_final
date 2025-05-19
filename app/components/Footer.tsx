"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 px-8">
      {/* Logo section with lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="w-1/3 h-px bg-gray-300"></div>
        <div className="mx-4">
          <Image src="/saahitt.png" alt="Saahitt Logo" width={100} height={30} />
        </div>
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>

      {/* Tagline */}
      <div className="text-center text-sm text-gray-700 max-w-3xl mx-auto mb-12">
        We offer a one-stop solution for all your wedding planning needs, from photographers and makeup artists to 
        venues and decorators. With a vast network of verified vendors, you can find everything you need in one place.
      </div>

      {/* Footer content grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Company column */}
        <div>
          <h3 className="text-amber-800 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-amber-500">About us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500">Contact us</Link></li>
            <li><Link href="/become-vendor" className="hover:text-amber-500">Become a Vendor</Link></li>
            <li><Link href="/success-stories" className="hover:text-amber-500">Success Stories</Link></li>
            <li><Link href="/blogs" className="hover:text-amber-500">Blogs</Link></li>
          </ul>
        </div>

        {/* Venues column */}
        <div>
          <h3 className="text-amber-800 font-semibold mb-4">Venues</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/venues/banquet-hall" className="hover:text-amber-500">Banquet Hall</Link></li>
            <li><Link href="/venues/mini-hall" className="hover:text-amber-500">Mini Hall</Link></li>
            <li><Link href="/venues/convention-hall" className="hover:text-amber-500">Convention Hall</Link></li>
            <li><Link href="/venues/resort" className="hover:text-amber-500">Resort</Link></li>
            <li><Link href="/venues/lawn" className="hover:text-amber-500">Lawn</Link></li>
            <li><Link href="/venues/farm-house" className="hover:text-amber-500">Farm House</Link></li>
          </ul>
        </div>

        {/* Decorations column */}
        <div>
          <h3 className="text-amber-800 font-semibold mb-4">Decorations</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/decorations/stage" className="hover:text-amber-500">Stage Decorations</Link></li>
            <li><Link href="/decorations/mandap" className="hover:text-amber-500">Mandap Decorations</Link></li>
            <li><Link href="/decorations/entrance-gate" className="hover:text-amber-500">Entrance Gate Decorations</Link></li>
            <li><Link href="/decorations/welcome-board" className="hover:text-amber-500">Welcome Board</Link></li>
            <li><Link href="/decorations/photobooth" className="hover:text-amber-500">Photobooth</Link></li>
            <li><Link href="/decorations/balloon" className="hover:text-amber-500">Balloon Decorations</Link></li>
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h3 className="text-amber-800 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/photographers" className="hover:text-amber-500">Photographers</Link></li>
            <li><Link href="/services/mehendi-artists" className="hover:text-amber-500">Mehendi Artists</Link></li>
            <li><Link href="/services/makeup-artists" className="hover:text-amber-500">Makeup Artists</Link></li>
            <li><Link href="/services/event-hosting" className="hover:text-amber-500">Event Hosting</Link></li>
            <li><Link href="/services/sound-dj" className="hover:text-amber-500">Sound system & DJ</Link></li>
            <li><Link href="/services/invitation-cards" className="hover:text-amber-500">Invitation Cards</Link></li>
          </ul>
        </div>

        {/* Payment Partner column */}
        <div>
          <h3 className="text-amber-800 font-semibold mb-4">Payment Partner</h3>
          <div className="mb-4">
            <Image src="/khalti.png" alt="Khalti Logo" width={80} height={40} />
          </div>
          <p className="text-amber-800 font-semibold mb-2">We Accept</p>
          <div className="flex gap-3">
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={24} />
            <Image src="/visa.jpg" alt="Visa" width={40} height={24} />
            <Image src="/sct.png" alt="SCT" width={40} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 