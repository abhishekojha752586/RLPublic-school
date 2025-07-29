// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* School Info Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image 
                src="/images/home/logo.png" 
                alt="Sri R.L. Chaudhari School Logo" 
                width={100} 
                height={100}
                className="mr-4"
              />
              <div>
                <h3 className="text-lime-500 font-bold text-xl">Shri R.L. Chaudhari School</h3>
                <h4 className="text-lime-500 font-semibold text-lg">Chilbila, Manda Uttar Pradesh</h4>
              </div>
            </div>
            <div className="mb-4">
              <p>Address: Near Main Market, Chilbila, Manda Prayagraj, Uttar Pradesh - 212104</p>
            </div>
            <div>
              <p>Email: <a href="mailto:chaudharyanup406@gmail.com" className="hover:underline">chaudharyanup406@gmail.com</a></p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/admission" className="hover:text-gray-300 transition">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">
                  About the School
                </Link>
              </li>
              {/* <li>
                <Link href="/gallery" className="hover:text-gray-300 transition">
                  Photo Gallery
                </Link>
              </li> */}
              <li>
                <Link href="/" className="hover:text-gray-300 transition">
                  Exam Results
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-gray-300 transition">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold text-xl mb-6">Get in Touch</h3>
            <p className="mb-4">Have questions or need more information? We’re here to help.</p>
            <p className="mb-2">Phone: <a href="tel:+917796417508" className="hover:underline">+91 77964 17508</a> <br /> 
            <a href="tel:+919450589446" className="hover:underline">+91 9450589446</a> </p>
            <p className="mb-6">Email: <a href="mailto:chaudharyanup406@gmail.com" className="hover:underline">chaudharyanup406@gmail.com</a></p>
            
            <h3 className="text-red-500 font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {/* Facebook */}
              <Link href="https://www.facebook.com/groups/232304902393392/?ref=share&mibextid=NSMWBT" className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center hover:opacity-80 transition" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 320 512">
                  <path d=".."/>
                </svg>
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/shri_r.l_chaudhary_school/?igsh=MWxoY3A0Njk3eTlmMg%3D%3D#" className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center hover:opacity-80 transition" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 448 512">
                  <path d="..."/>
                </svg>
              </Link>

             
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Sri R.L. Chaudhari School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
