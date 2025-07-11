// components/AdmissionHero.tsx
import Image from "next/image";
import Navbar from "../shared/Navbar";

const AboutHero = () => {
  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Background Image */}
        <Image 
          src="/images/home/Header.png" 
          alt="School Building" 
          fill 
          className="object-cover"
          priority
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide font-sans">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
