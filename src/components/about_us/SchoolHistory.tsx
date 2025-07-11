// components/about/SchoolHistory.tsx
import Image from "next/image";

const SchoolHistory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Red top bar */}
      <div className="h-2 bg-red-600 w-full mb-8"></div>
      
      {/* Decorative curved lines */}
      <div className="relative">
        {/* Top right curved lines */}
        <div className="absolute top-0 right-0 w-1/4 h-40 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,0 C150,30 100,60 0,60" stroke="#D1B000" strokeWidth="1" />
            <path d="M200,20 C150,50 100,80 0,80" stroke="#D1B000" strokeWidth="1" />
            <path d="M200,40 C150,70 100,100 0,100" stroke="#D1B000" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Top left curved lines */}
        <div className="absolute top-0 left-0 w-1/4 h-40 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C50,30 100,60 200,60" stroke="#D1B000" strokeWidth="1" />
            <path d="M0,20 C50,50 100,80 200,80" stroke="#D1B000" strokeWidth="1" />
            <path d="M0,40 C50,70 100,100 200,100" stroke="#D1B000" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-10">
            WELCOME TO<br />
            SRI R.L. CHAUDHARY SCHOOL
          </h1>
          
          <div className="space-y-6 mb-8">
            <p className="text-gray-800">
              The Foundation of SRLC's was laid down 9 years ago with very modest means, sheer dedication and 
              determination. The School started with strength of 25 students and 3 teachers in small setup. Driven by 
              passion to excel, Little Angels' students and 30 teachers.. through constant improvement and setting new 
              standard for quality education.
            </p>
            
            <p className="text-gray-800">
              SRLC School is a dream school brought to you from the family of Little Angels. The mi achieved in such a 
              small span of time have re assured us of the faith and trust endowed upon us. We aim to build and 
              ultimate schooling experience here at Angels High, where the children get an all round development of 
              mind, body and soul.
            </p>
          </div>
          
          {/* School image */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <Image 
              src="/images/about/school-assembly.jpg" 
              alt="Students assembled in the school ground" 
              width={1200} 
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
