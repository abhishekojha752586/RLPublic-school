// components/WelcomeNote.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const WelcomeNote = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 bg-amber-50">
      {/* Latest Announcements Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-500 border-b-2 border-red-500 inline-block">
          latest announcements
        </h2>
      </div>

      {/* Main Content Card */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Background Circular Rings - These are images */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <Image
            src="/images/circular-rings.png"
            alt="Decorative circular rings"
            fill
            className="object-contain opacity-10"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row p-6 md:p-8 items-center md:items-start">
          {/* School Name - Mobile View (Top) */}
          <div className="md:hidden w-full mb-6">
            <h1 className="text-4xl font-bold text-red-500 text-center drop-shadow-[2px_2px_4px_rgba(255,0,0,0.3)]">
              SRI R.L. CHAUDHARY SCHOOL
            </h1>
          </div>

          {/* Left Side - Photo */}
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src="/images/faculty/TL_Akela.jpg"
                alt="R.L. Chaudhari"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-2/3 md:pl-8">
            {/* School Name - Desktop View (Left aligned) */}
            <div className="hidden md:block mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-red-500 drop-shadow-[2px_2px_4px_rgba(255,0,0,0.3)]">
                SRI R.L. CHAUDHARY SCHOOL
              </h1>
            </div>

            {/* Welcome Note */}
            <div className="mb-4">
              <div className="text-right mb-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Welcome Note
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To impart education that shall provide academic excellence, physical fitness, psychological & spiritual well-being to every student and at the same time, honor Indian values, respect for humanity, social consciousness and a concern for the environment.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
                To help them attain skills and attitude that will fit them for life in a rapidly changing world scenario. With the help of the parents and teachers, we are sure we can turn this mission into a reality for your child and soon, will come a time when each "Angelites" will be clearly distinguished in a crowd and make their presence felt.
              </p>
            </div>

            {/* Read More Button and Name */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                Read More
              </button>
              <div className="mt-4 md:mt-0">
                <p className="text-amber-300 text-2xl font-bold">T L Akela</p>
                <p className="font-medium text-black">Director, Shri RL Chaudhary School</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WelcomeNote;
