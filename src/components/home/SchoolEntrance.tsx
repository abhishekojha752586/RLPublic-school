// components/SchoolEntrance.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SchoolEntrance = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto my-8 px-4">
      {/* Top colored bars */}
      <div className="flex w-full mb-4">
        <div className="h-3 bg-red-600 w-1/2"></div>
        <div className="h-3 bg-green-500 w-1/2"></div>
      </div>
      
      {/* Main image container with overlay effect */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background image with fade effect */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* White overlay with radial gradient to create the faded effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/70 z-10"></div>
          
          {/* Main school image */}
          <Image 
            src="/images/home/appy.png" 
            alt="School Entrance" 
            fill 
            className="object-cover"
            priority
          />
          
          {/* Additional overlay to match the faded white edges in the image */}
          <div className="absolute inset-0 bg-radial-gradient z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default SchoolEntrance;
