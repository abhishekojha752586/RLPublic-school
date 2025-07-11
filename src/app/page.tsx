import Image from "next/image";
import Hero from "@/components/home/Hero";
import WelcomeNote from "@/components/home/WelcomeNote";
import VisionMission from "@/components/home/VisionMission";
import FacultyCarousel from "@/components/home/OurFaculty";
import Gallery from "@/components/home/Gallery";
import SchoolEntrance from "@/components/home/SchoolEntrance";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <WelcomeNote />
      <VisionMission />
      <FacultyCarousel />
      <Gallery />
      <SchoolEntrance />
    </main>
  );
}
