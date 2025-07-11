// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/images/home/logo.png" 
                alt="School Logo" 
                width={100} 
                height={100} 
                
                className="rounded-full mt-7"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/about" 
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                href="/" 
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/admission" 
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Admission
              </Link>
              <Link 
                href="/" 
                className="text-white hover:text-white/80 transition-colors font-medium disabled:" 
              >
                Result
              </Link>
             {/*} <Link 
                href="/gallery" 
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Gallery
              </Link> */}
              <Link 
                href="/faculty" 
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Faculty
              </Link>
              <Link 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lime-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-white hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/admission"
              className="block px-3 py-2 rounded-md text-lime-400 hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Admission
            </Link>
            <Link
              href="/result"
              className="block px-3 py-2 rounded-md text-lime-400 hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Result
            </Link>
            {/* <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-white hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>  */}
            <Link
              href="/faculty"
              className="block px-3 py-2 rounded-md text-white hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
