"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryEvent {
  id: number;
  title: string;
  image: string;
}

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryEvents: GalleryEvent[] = [
    { id: 1, title: "Honoring Academic Excellence", image: "/images/gallary/Award_1.jpg" },
    { id: 2, title: "Recognizing Student Achievements", image: "/images/gallary/Award_2.jpg" },
    { id: 3, title: "Proud Award Moments", image: "/images/gallary/Award_3.jpg" },
    { id: 4, title: "Excellence in Education", image: "/images/gallary/award_4.jpg" },
    { id: 5, title: "Toppers Receiving Awards", image: "/images/gallary/Award_5.jpg" },
    { id: 6, title: "Celebrating Success Together", image: "/images/gallary/award_6.jpg" },
    { id: 7, title: "Award Ceremony Highlights", image: "/images/gallary/award_total.jpg" },
    { id: 8, title: "Welcoming Excellence – School Gate", image: "/images/gallary/main_gate.jpg" },
    { id: 9, title: "Toppers in the Spotlight", image: "/images/gallary/Newspaper_2.jpg" },
    { id: 10, title: "Featured in the Daily News", image: "/images/gallary/Newspaper_3.jpg" },
    { id: 11, title: "Recognized in Media", image: "/images/gallary/Newspaper_4.jpg" },
    { id: 12, title: "Making Headlines", image: "/images/gallary/Newspaper.jpg" },
    { id: 13, title: "Independence Day Parade", image: "/images/gallary/parade_1.jpg" },
    { id: 14, title: "Republic Day Celebrations", image: "/images/gallary/Republic_day.jpg" },
    { id: 15, title: "Celebrating Our Toppers", image: "/images/gallary/toppers_2.jpg" },
    { id: 16, title: "Top Rankers of the Year", image: "/images/gallary/toppers_3.jpg" },
    { id: 17, title: "Toppers Group Photo", image: "/images/gallary/toppers.jpg" },
    { id: 18, title: "Educational Tour Memories", image: "/images/gallary/Tour.jpg" },
  ];

  const displayedEvents = showAll ? galleryEvents : galleryEvents.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-[#f9fff5]">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h2>
        <p className="text-lg text-gray-600">Moments we captured</p>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedEvents.map((event) => (
          <div key={event.id} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300 border hover:border-blue-500">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={400}
              className="object-cover w-full h-[250px] hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-white px-4 py-2 text-center text-sm text-gray-700 font-bold">
              {event.title}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Learn More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
