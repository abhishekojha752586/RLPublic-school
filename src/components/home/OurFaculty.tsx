// components/FacultyCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const FacultyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Sample faculty data - you would replace this with your actual data
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name:"TL Akela",
      position: "Headmaster",
      image: "/images/faculty/TL_Akela.jpg",
    },
    {
      id: 2,
      name: "Atul Chaudhary",
      position: "Math Teacher",
      image: "/images/faculty/Atul_Chaudhary.jpg",
    },
    {
      id: 3,
      name: "Jannt Bano",
      position: "English Teacher",
      image: "/images/faculty/Jannt Bano.jpg",
    },
    {
      id: 4,
      name: "Ajay Kumar",
      position: "Art Teacher",
      image: "/images/faculty/Ajay_Kumar.jpg",
    },
    {
      id: 5,
      name: "Anil Singh",
      position: "Science Teacher",
      image: "/images/faculty/Anil_Singh.jpg",
    },
    {
      id: 6,
      name: "Jubeda Begam",
      position: "History Teacher",
      image: "/images/faculty/Jubeda_Begam.jpg",
    },
    {
      id: 7,
      name: "Atindra Kumar",
      position: "Physical Education",
      image: "/images/faculty/Atindra_kumar.jpg",
    },
    {
      id: 8,
      name: "Mamta Patel",
      position: "Computer Science",
      image: "/images/faculty/Mamta_Patel.jpg",
    },
    {
      id: 9,
      name: "Nafisha Bano",
      position: "Computer Science",
      image: "/images/faculty/Nafisha_bano.jpg",
    },
    {
      id: 10,
      name: "Pankaj Kumar",
      position: "Computer Science",
      image: "/images/faculty/Pankaj_kumar.jpg",
    },
    {
      id: 11,
      name: "Priyanshu Sharma",
      position: "Computer Science",
      image: "/images/faculty/Priyanshu_sharma.jpg",
    },
    {
      id: 12,
      name: "Rakesh Kumar",
      position: "Computer Science",
      image: "/images/faculty/Rakesh_Kumar.jpg",
    },
    {
      id: 13,
      name: "Ranjita Vishwakarma",
      position: "Computer Science",
      image: "/images/faculty/Ranjita_Vishwakarma.jpg",
    },
    {
      id: 14,
      name: "Sandeep Kumar",
      position: "Computer Science",
      image: "/images/faculty/Sandeep_kumar.jpg",
    },
    {
      id: 15,
      name: "Virendra Kumar",
      position: "Computer Science",
      image: "/images/faculty/Virendra_Kumar.jpg",
    },
    // Add more faculty members as needed
  ];

  // Calculate number of slides needed (4 faculty members per slide)
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(facultyMembers.length / itemsPerSlide);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with colored bars */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute left-0 h-2 bg-green-500 w-1/4"></div>
        <h2 className="text-4xl font-bold text-green-500 text-center px-6 relative z-10">
          OUR FACULTY
        </h2>
        <div className="absolute right-0 h-2 bg-red-600 w-1/4"></div>
      </div>

      {/* Carousel container */}
      <div 
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Generate slides */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full flex-shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Generate faculty members for this slide */}
                {facultyMembers
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((faculty) => (
                    <div key={faculty.id} className="flex flex-col items-center">
                      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 text-center">
                        {faculty.name}
                      </h3>
                      <p className="text-gray-500 text-center">
                        {faculty.position}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-green-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FacultyCarousel;
