"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';


 function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
    
      return (
        <header className="flex justify-between items-center bg-white p-5 md:px-10">
          {/* Logo */}
          <Image src="/logo.png" width={150} height={150} alt="hero" className="mt-3" />
    
          {/* Desktop/Tablet Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-7 py-5">
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Home</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Browse Menu</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Special Offers</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Restaurants</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Track Order</Link></li>
            </ul>
          </nav>
    
          {/* Mobile Hamburger Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
    
          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
              <ul className="flex flex-col items-center gap-y-5 py-5">
                <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-4">Home</Link></li>
                <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-4">Browse Menu</Link></li>
                <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-4">Special Offers</Link></li>
                <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-4">Restaurants</Link></li>
                <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-4">Track Order</Link></li>
              </ul>
            </nav>
          )}
        </header>
      );
    }
    
  
  export default Header