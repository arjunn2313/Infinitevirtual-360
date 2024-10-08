import { Nunito } from 'next/font/google';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Footer() {
  return (
    <footer className={`bg-gray-900 text-gray-300 p-10 ${nunito.className}`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Infinitevirtual 360</h2>
          <p className="mb-4">
            At Infinitevirtual 360, we specialize in immersive virtual experiences, bringing spaces to life with high-quality 360-degree photography and web solutions. Let us transform your online presence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Our Story</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Our Process</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Portfolio</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">360° Virtual Tours</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">3D Modeling</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Drone Photography</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Interactive Media</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">Virtual Staging</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Join Our Community</h3>
          <p className="mb-4">Stay updated with the latest trends in virtual tours and immersive experiences.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Infinitevirtual 360. All rights reserved. Empowering businesses with virtual innovation.
        </p>
      </div>
    </footer>
  );
}
