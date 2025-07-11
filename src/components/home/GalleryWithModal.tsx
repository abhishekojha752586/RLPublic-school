// components/GalleryWithModal.tsx
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

const GalleryWithModal = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryEvent | null>(null);
  
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
    // Add more events as in the previous example
  ];

  // Display only first 2 events initially, or all if showAll is true
  const displayedEvents = showAll ? galleryEvents : galleryEvents.slice(0, 2);

  // Open image modal
  const openModal = (event: GalleryEvent) => {
    setSelectedImage(event);
    document.body.style.overflow = "hidden";
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

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
              <div className="md:w-1/2 relative cursor-pointer" onClick={() => openModal(event)}>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-red-500 z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <Image 
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{selectedImage.date}</span>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryWithModal;
