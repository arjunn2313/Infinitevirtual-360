import React from "react";
import { FaCamera, FaEnvelope } from "react-icons/fa";

const VirtualTourPromo = () => {
  return (
    <div className="bg-blue-100 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Promo Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 transition-transform transform hover:scale-105 font-suse">
          Boost Your <span className="text-blue-600">House Sale</span> with a{" "}
          <span className="text-blue-600">360° Virtual Tour</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A 360° photo virtual tour will give potential buyers a real, immersive
          experience of your house, helping you stand out in the market. Show
          every angle with high-quality images that give your audience a real
          sense of space.
        </p>

        {/* Interactive Icons */}
        <div className="flex justify-center mb-8">
          <FaCamera className="text-5xl text-blue-500 mx-4 transition duration-300 transform hover:scale-110 hover:text-blue-600" />
          <FaEnvelope className="text-5xl text-blue-500 mx-4 transition duration-300 transform hover:scale-110 hover:text-blue-600" />
        </div>

        {/* Action Button */}
        <a
          href="https://wa.me/14706690240?text=I%20need%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-lg mx-auto bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Contact Us for Booking
        </a>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 mt-10">
          Get started today and see the difference a virtual tour can make.
        </p>
      </div>
    </div>
  );
};

export default VirtualTourPromo;
