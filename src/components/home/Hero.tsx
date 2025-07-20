// components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CarouselItem {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const carouselItems: CarouselItem[] = [
    {
      title: "EDUCATION IS A GIFT THAT NO ONE CAN TAKE AWAY",
      description: "ADMISSION FORMS AVAILABLE, CONTACT US FOR MORE DETAILS",
      buttonText: "ABOUT SCHOOL",
      buttonLink: "/",
    },
    {
      title: "SHAPING MINDS FOR A BRIGHTER FUTURE",
      description: "JOIN OUR COMMUNITY OF LEARNERS TODAY",
      buttonText: "LEARN MORE",
      buttonLink: "/",
    },
    {
      title: "EXCELLENCE IN EDUCATION",
      description: "PROVIDING QUALITY EDUCATION SINCE ESTABLISHMENT",
      buttonText: "OUR PROGRAMS",
      buttonLink: "/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image 
          src="/images/home/Header.png" 
          alt="School Building" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Carousel Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 flex flex-col justify-center items-center h-screen">
        <div className="text-center max-w-3xl">
          {/* Admission Notice */}
          <div className="mb-8">
            <h3 className="text-yellow-400 text-xl md:text-2xl font-bold tracking-wider uppercase">
              {carouselItems[currentSlide].description}
            </h3>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            {carouselItems[currentSlide].title}
          </h1>
          
          {/* Button */}
          <Link 
            href={carouselItems[currentSlide].buttonLink} 
            className="inline-block bg-white hover:bg-gray-100 px-8 py-3 font-semibold transition-all duration-300"
          >
            <span className="text-red-600 font-extrabold">
              {carouselItems[currentSlide].buttonText}
            </span>
          </Link>
        </div>
        
        {/* Carousel Navigation - Repositioned to sides */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8">
          <button 
            onClick={prevSlide} 
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
