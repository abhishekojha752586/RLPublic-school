// app/contact/page.tsx
import Image from "next/image";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
     <div className="relative w-full">
      {/* Navbar */}
      
      
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Background Image */}
        <Image 
          src="/images/home/Header.png" 
          alt="School Building" 
          fill 
          className="object-cover"
          priority
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-start px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide font-sans">
            Contact us
          </h1>
        </div>
      </div>
    </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-red-600 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    Near Main Market, Chilbila Bazaar, Prayagraj<br />
                     Chilbila Bazaar, Prayagraj<br />
                     Uttar Pradesh - 230403
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Numbers</h3>
                  <p className="text-gray-600">
                    Office: +91 77964 17508<br />
                    Principal: +91 77964 17508<br />
                    Fax: +91 77964 17508
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-600">
                    Admissions: admissions@srlschool.in<br />
                    General Inquiry: info@srlschool.in<br />
                    Support: support@srlschool.in
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter message subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489332838908!2d80.94641531504426!3d26.912269083131575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957e7a00f72c7%3A0x9a9a3c9b9d1b1b1b!2sSri%20R.L.%20Chaudhary%20School!5e0!3m2!1sen!2sin!4v1629876543210!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      
    </main>
  );
}
