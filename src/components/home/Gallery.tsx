"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryEvent {
  id: number;
  title: string;
  image: string;
}

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryEvents: GalleryEvent[] = [
    { id: 1, title: "Classroom Event", image: "/images/gallery/classroom-event.jpg" },
    { id: 2, title: "Library Fun", image: "/images/gallery/toys-blocks.jpg" },
    { id: 3, title: "Group Discussion", image: "/images/gallery/sports-day.jpg" },
    { id: 4, title: "Project Work", image: "/images/gallery/science-exhibition.jpg" },
    { id: 5, title: "Creative Talk", image: "/images/gallery/cultural-program.jpg" },
    { id: 6, title: "Round Table", image: "/images/gallery/art-competition.jpg" },
    { id: 7, title: "Virtual Session", image: "/images/gallery/annual-day.jpg" },
    { id: 8, title: "Trip Time", image: "/images/gallery/field-trip.jpg" }
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
