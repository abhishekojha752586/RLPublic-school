// app/about/page.tsx
import Navbar from "@/components/shared/Navbar";


import Footer from "@/components/shared/Footer";

import AboutHero from "@/components/about_us/about_hero";
import AboutSection from "@/components/about_us/MissionSection";

export default function AboutPage() {
  return (
    <main>
        <Navbar />
        <AboutHero />
        <AboutSection />
      
      {/* Other about page sections */}
    </main>
  );
}
