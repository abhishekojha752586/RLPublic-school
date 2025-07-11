"use client";

import { useState } from "react";
import Image from "next/image";

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const FacultyGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample faculty data - replace with your actual data
  const facultyMembers: FacultyMember[] = [
    { id: 1,  name: "T.L Akela",        position: "Headmaster",    image: "/images/faculty/TL_Akela.jpg" },
    { id: 2,  name: "Ajay Kumar",       position: "Math Teacher",  image: "/images/faculty/Ajay_Kumar.jpg" },
    { id: 3,  name: "Anil Singh",       position: "English Teacher", image: "/images/faculty/Anil_Singh.jpg" },
    { id: 4,  name: "Atul Chaudhary",   position: "Art Teacher",   image: "/images/faculty/Atul_Chaudhary.jpg" },
    { id: 5,  name: "Jannt Bano",       position: "Headmaster",    image: "/images/faculty/Jannt Bano.jpg" },
    { id: 6,  name: "Jubeda Begam",     position: "Math Teacher",  image: "/images/faculty/Jubeda_Begam.jpg" },
    { id: 7,  name: "Mamta Patel",      position: "English Teacher", image: "/images/faculty/Mamta_Patel.jpg" },
    { id: 8,  name: "Nafisha Bano",     position: "Art Teacher",   image: "/images/faculty/Nafisha_bano.jpg" },
    { id: 9,  name: "Pankaj Kumar",     position: "Art Teacher",   image: "/images/faculty/Pankaj_kumar.jpg" },
    { id: 10, name: "Priyanshu Sharma", position: "Art Teacher",   image: "/images/faculty/Priyanshu_sharma.jpg" },
    { id: 11, name: "Rakesh Kumar",     position: "Art Teacher",   image: "/images/faculty/Rakesh_Kumar.jpg" },
    { id: 12, name: "Ranjita Vishwakarma", position: "Art Teacher", image: "/images/faculty/Ranjita_Vishwakarma.jpg" },
    { id: 13, name: "Sandeep Kumar",    position: "Art Teacher",   image: "/images/faculty/Sandeep_kumar.jpg" },
    { id: 14, name: "Virendra Kumar",   position: "Art Teacher",   image: "/images/faculty/Virendra_Kumar.jpg" },
  ];

  // Filter faculty members based on search term
  const filteredFaculty = facultyMembers.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage);
  const paginatedFaculty = filteredFaculty.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex justify-end">
          <div className="w-64">
            <input
              type="text"
              placeholder="Search Teacher..."
              className="w-full px-4 py-2 rounded-full border border-pink-200 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 mb-8"></div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedFaculty.map((faculty) => (
          <div key={faculty.id} className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 text-center">
              {faculty.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {faculty.position}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default FacultyGrid;
