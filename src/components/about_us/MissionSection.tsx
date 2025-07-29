// components/AboutSection.tsx
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
    {/* About Us Label with underline */}
<div className="mb-4">
  <h3 className="text-gray-500 text-sm relative inline-block">
    About Us
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
  </h3>
</div>

{/* Main Content */}
<div className="mb-12">
  <h2 className="text-4xl font-bold text-red-500 mb-2">
    Welcome to
  </h2>
  <h2 className="text-4xl font-bold text-red-500 mb-4">
    Shri R.L. Chaudhary School
  </h2>
  
  {/* Horizontal line separator */}
  <hr className="border-0 h-px bg-gray-300 mb-6" />

  <div className="flex flex-col md:flex-row gap-8">
    {/* Text Content */}
    <div className="md:w-1/2">
      <p className="text-gray-700 mb-4">
        The Foundation of Little Angels was laid down 9 years ago with very modest means, sheer dedication and determination. The School started with strength of 25 students and 3 teachers in small setup. Driven by passion to excel, Little Angels' students and 30 teachers... through constant improvisation and setting new standard for quality education.
      </p>
      
      <p className="text-gray-700">
        Angels High School is a dream school brought to you from the family of Little Angels. The mi achieved in such a small span of time have re assured us of the faith and trust endowed upon us. We aim to build and ultimate schooling experience here at Angels High, where the children get an all round development of mind, body and soul.
      </p>
    </div>
    
    {/* Image with proper shadow */}
    {/* Image */}
<div className="md:w-1/2 flex justify-center items-start">
  <div className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[420px] rounded-lg shadow-xl overflow-hidden bg-white">
    <Image
      src="/images/home/school_prayer.jpg"
      alt="School students"
      width={400}
      height={260}
      className="w-full h-auto object-cover"
      priority
    />
  </div>
</div>

  </div>
</div>

      {/* Three Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="feature-box">
          <div className="text-6xl font-bold text-lime-500 mb-2">01</div>
          <h3 className="text-xl font-bold mb-2">Why Choose us</h3>
          <p className="text-gray-700 text-sm">
            Education is a means to restore dignity to the person to give the individual reason to hunger and to free that person from the tyranny of ignorance. We are committed towards preparing stable, holistically developed personalities who continue to make our future generation and make us proud by their commendable contribution to the nation.
          </p>
        </div>
        
        {/* Box 2 */}
        <div className="feature-box">
          <div className="text-6xl font-bold text-lime-500 mb-2">02</div>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm">
            The school's mission is To live in deeds and leave imprints on sands of time. Each and every child is allowed to express himself / her self fearlessly. In fact they are given wings to walk the trails, climb the peak and create history for themselves as well as for mankind. For an institution to thrive and prosper, it needs a leader at the helm.
          </p>
        </div>
        
        {/* Box 3 */}
        <div className="feature-box">
          <div className="text-6xl font-bold text-lime-500 mb-2">03</div>
          <h3 className="text-xl font-bold mb-2">Our visions</h3>
          <p className="text-gray-700 text-sm">
            In its democratic environment students take decisions on various issues and learn to combine freedom with responsibility. A learning culture must a spirit of adventure, a sense of integrity, ethics and sportsmanship, honesty is promoted unfailingly. We focus on teachers empowerment, communication skill, development of IT skill.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
