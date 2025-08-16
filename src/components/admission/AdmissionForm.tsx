// components/admission/AdmissionForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AdmissionForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    scholarName: "",
    studentAadhar: "", // New field
    fatherName: "",
    fatherAadharNumber: "", // New field
    motherName: "",
    motherAadharNumber: "", // New field
    parentsAddress: "",
    dateOfBirth: "",
    religion: "",
    classAdmission: "",
    stayDuration: "",
    lastInstitution1: "",
    motherTongue: "",
    mobileNumber: "",
    whatsappNumber: "",
    dateOfApplication: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.sheetbest.com/sheets/25525b4a-71d9-4e86-878a-466568d33bea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text(); // Read raw response
      console.log("Raw response text:", text);

      // Try parsing response
      try {
        const result = JSON.parse(text);

        if (Array.isArray(result) && result.length > 0) {
          alert("Form submitted successfully!");
        } else {
          alert("Submission failed. Please try again.");
        }

      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        alert("Server sent an invalid response.");
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
         style={{ backgroundImage: "url('/images/about/Admission_form.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Form container */}
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Admission Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <div>
                <label htmlFor="scholarName" className="block text-sm font-bold text-green-400 uppercase">
                  Name of Scholar
                </label>
                <input
                  type="text"
                  id="scholarName"
                  name="scholarName"
                  value={formData.scholarName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter name"
                  required
                />
              </div>

              {/* Student Aadhar Number - NEW */}
              <div>
                <label htmlFor="studentAadhar" className="block text-sm font-bold text-green-400 uppercase">
                  Student's Aadhar Number
                </label>
                <input
                  type="text"
                  id="studentAadhar"
                  name="studentAadhar"
                  value={formData.studentAadhar}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter 12-digit Aadhar number"
                  maxLength={12}
                  pattern="\d{12}"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="fatherName" className="block text-sm font-bold text-green-400 uppercase">
                  Father's Name
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 placeholder-gray-400 focus:placeholder-gray-300 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter name"
                  required
                />
              </div>

              {/* Father Aadhar Number - NEW */}
              <div>
                <label htmlFor="fatherAadharNumber" className="block text-sm font-bold text-green-400 uppercase">
                  Father's Aadhar Number
                </label>
                <input
                  type="text"
                  id="fatherAadharNumber"
                  name="fatherAadharNumber"
                  value={formData.fatherAadharNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter 12-digit Aadhar number"
                  maxLength={12}
                  pattern="\d{12}"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-bold text-green-400 uppercase">
                  Scholar's Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full placeholder-gray-400 focus:placeholder-gray-300 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastInstitution1" className="block text-sm font-bold text-green-400 uppercase">
                  Last Institution Attended
                </label>
                <input
                  type="text"
                  id="lastInstitution1"
                  name="lastInstitution1"
                  value={formData.lastInstitution1}
                  onChange={handleChange}
                  className="mt-1 block placeholder-gray-400 focus:placeholder-gray-300 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter institution name"
                />
              </div>
              
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-bold text-green-400 uppercase">
                  Whatsapp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 placeholder-gray-400 focus:placeholder-gray-300 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="+91"
                />
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              <div>
                <label htmlFor="dateOfApplication" className="block text-sm font-bold text-green-400 uppercase">
                  Date of Application
                </label>
                <input
                  type="date"
                  id="dateOfApplication"
                  name="dateOfApplication"
                  value={formData.dateOfApplication}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 placeholder-gray-400 focus:placeholder-gray-300 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="motherName" className="block text-sm font-bold text-green-400 uppercase">
                  Mother's Name
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="mt-1 block w-full placeholder-gray-400 focus:placeholder-gray-300 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter name"
                  required
                />
              </div>
              
              {/* Mother Aadhar Number - NEW */}
              <div>
                <label htmlFor="motherAadharNumber" className="block text-sm font-bold text-green-400 uppercase">
                  Mother's Aadhar Number
                </label>
                <input
                  type="text"
                  id="motherAadharNumber"
                  name="motherAadharNumber"
                  value={formData.motherAadharNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:placeholder-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter 12-digit Aadhar number"
                  maxLength={12}
                  pattern="\d{12}"
                  required
                />
              </div>

              <div>
                <label htmlFor="parentsAddress" className="block text-sm font-bold text-green-400 uppercase">
                  Parents Address
                </label>
                <input
                  type="text"
                  id="parentsAddress"
                  name="parentsAddress"
                  value={formData.parentsAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 placeholder-gray-400 focus:placeholder-gray-300 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="Enter address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="religion" className="block text-sm font-bold text-green-400 uppercase">
                  Religion
                </label>
              <select
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500  text-white"
                required
              >
                <option value="" disabled hidden className="text-gray-400">Select</option>
                <option value="Hindu" className="text-black">Hindu</option>
                <option value="Muslim" className="text-black">Muslim</option>
                <option value="Christian" className="text-black">Christian</option>
                <option value="Sikh" className="text-black">Sikh</option>
                <option value="Buddhist" className="text-black">Buddhist</option>
                <option value="Jain" className="text-black">Jain</option>
                <option value="Other" className="text-black">Other</option>
              </select>
            </div>
              
              <div>
                <label htmlFor="classAdmission" className="block text-sm font-bold text-green-400 uppercase">
                  Class to which admission is sought
                </label>
                <input
                  type="text"
                  id="classAdmission"
                  name="classAdmission"
                  value={formData.classAdmission}
                  onChange={handleChange}
                  className="mt-1 block w-full placeholder-gray-400 focus:placeholder-gray-300 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="eg. 5th"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-bold text-green-400 uppercase">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 placeholder-gray-400 focus:placeholder-gray-300 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-white"
                  placeholder="eg. 9XX XXXX XXXX"
                  required
                />
              </div>
            </div>
          </div>
          
          {/* Submit button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;