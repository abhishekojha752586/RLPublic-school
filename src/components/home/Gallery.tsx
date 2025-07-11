// components/Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Sample gallery events - replace with your actual data
  const galleryEvents: GalleryEvent[] = [
    {
      id: 1,
      title: "Event Name",
      date: "September 23",
      description: "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "/images/gallery/classroom-event.jpg"
    },
    {
      id: 2,
      title: "Event Name",
      date: "September 23",
      description: "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      image: "/images/gallery/toys-blocks.jpg"
    },
    {
      id: 3,
      title: "Annual Sports Day",
      date: "October 15",
      description: "Students participated in various sports activities showcasing their athletic abilities.",
      image: "/images/gallery/sports-day.jpg"
    },
    {
      id: 4,
      title: "Science Exhibition",
      date: "November 5",
      description: "Young scientists presented their innovative projects and experiments.",
      image: "/images/gallery/science-exhibition.jpg"
    },
    {
      id: 5,
      title: "Cultural Program",
      date: "December 12",
      description: "Students performed traditional dances and music celebrating our cultural heritage.",
      image: "/images/gallery/cultural-program.jpg"
    },
    {
      id: 6,
      title: "Art Competition",
      date: "January 20",
      description: "Creative artworks by students showcasing their imagination and artistic skills.",
      image: "/images/gallery/art-competition.jpg"
    },
    {
      id: 7,
      title: "Annual Day Celebration",
      date: "February 15",
      description: "The school's annual day celebration with performances by students from all grades.",
      image: "/images/gallery/annual-day.jpg"
    },
    {
      id: 8,
      title: "Field Trip",
      date: "March 10",
      description: "Educational excursion to enhance learning through real-world experiences.",
      image: "/images/gallery/field-trip.jpg"
    }
  ];

  // Display only first 2 events initially, or all if showAll is true
  const displayedEvents = showAll ? galleryEvents : galleryEvents.slice(0, 2);

  return (
    <section className="py-16 px-4 bg-white">
      {/* Gallery Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-6xl font-bold text-center text-green-500 mb-4">Gallery</h2>
        <h3 className="text-2xl font-medium text-center text-gray-800">What's happening</h3>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedEvents.map((event) => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row">
              {/* Event Image */}
              <div className="md:w-1/2 relative">
                <div className="aspect-w-4 aspect-h-3">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={375}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Event Details */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{event.date}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && galleryEvents.length > 2 && (
        <div className="flex justify-end max-w-7xl mx-auto mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="text-red-500 font-medium flex items-center hover:text-red-600 transition-colors"
          >
            See All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* View All Gallery Link - Optional full gallery page link */}
      <div className="text-center mt-12">
        <Link 
          href="/gallery" 
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
        >
          View Complete Gallery
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
