// components/VisionMission.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const VisionMission = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background curved lines */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" className="text-gray-100">
          <path d="M0,0 C300,100 600,200 1200,0" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M0,50 C300,150 600,250 1200,50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M0,100 C300,200 600,300 1200,100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M0,150 C300,250 600,350 1200,150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start">
        {/* Left content section */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-8">Vision & Mission</h2>
          
          {/* Mission text paragraphs */}
          <div className="space-y-6 text-gray-700">
            <p className="text-base md:text-lg">
              To impart education that shall provide academic excellence, physical
              fitness, psychological & spiritual well-beings to every student and at
              the same time consciousness and a concern for the environment. To
              help the them for life in a rapidly changing world scenario
            </p>
            
            <p className="text-base md:text-lg">
              To impart education that shall provide academic excellence, physical
              fitness, psychological & spiritual well-beings to every student and at
              the same time consciousness and a concern for the environment. To
              help the them for life in a rapidly changing world scenario
            </p>
          </div>
          
          {/* Learn more button */}
          <div className="mt-8">
            <Link href="/about" className="inline-flex items-center text-red-500 font-bold text-lg hover:text-red-600 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Right content section */}
        <div className="w-full lg:w-2/5 mt-12 lg:mt-0 flex flex-col items-end">
          {/* About Us text */}
          <h3 className="text-3xl font-bold text-green-500 mb-8">About Us</h3>
          
          {/* Globe illustration */}
          <div className="relative w-full max-w-md">
            <Image 
              src="/images/home/Vision.png" 
              alt="Globe with school supplies" 
              width={500} 
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
