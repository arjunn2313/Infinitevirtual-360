 "use client";
import React from "react";
import Image from "next/image"; 
import { FaHome, FaImages, FaChartLine } from "react-icons/fa";
import { Nunito, Poppins } from "next/font/google";
import { motion } from "framer-motion"; // Import only the necessary items

const popins = Poppins({
    subsets: ["latin"],
    weight: "300",
});

const nunito = Nunito({
    subsets: ["latin"],
    weight: "400",
});

export default function AirbnbHostsSection() {
  const cardData = [
    {
      id: 1,
      icon: <FaImages className="text-white text-3xl" />,
      title: (
        <>
          High-Quality <span className="text-blue-600">Images</span>
        </>
      ),
      description:
        "Professional-grade photos that capture every detail of your Airbnb, making it irresistible to potential guests.",
      imageUrl: "/hero.jpg",
    },
    {
      id: 2,
      icon: <FaHome className="text-white text-3xl" />,
      title: (
        <>
          360° <span className="text-blue-600">Virtual Tours</span>
        </>
      ),
      description:
        "Let guests explore your space with our immersive 360-degree virtual tours, making them feel at home before they arrive.",
      imageUrl: "/360.jpg",
    },
    {
      id: 3,
      icon: <FaChartLine className="text-white text-3xl" />,
      title: (
        <>
          Boost Your <span className="text-blue-600">Bookings</span>
        </>
      ),
      description:
        "Listings with professional visuals and virtual tours get more views and bookings. Maximize your Airbnb income today!",
      imageUrl: "/airbnb.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className={`${nunito.className} container mx-auto px-6 text-center`}>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 fade-in font-suse">
          Enhance Your <span className="text-blue-600">Airbnb Listing</span>{" "}
          with Us
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-16 fade-in">
          We provide professional visuals and immersive virtual tours that will
          make your Airbnb stand out from the competition and attract more
          guests.
        </p>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              className="relative bg-white rounded-lg shadow-lg p-8 text-left border border-blue-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl card-fade-in"
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              whileInView={{ opacity: 1, y: 0 }} // Animate based on when the card is in view
              exit={{ opacity: 0, y: 20 }} // Optional exit animation
              transition={{ duration: 0.5 }} // Duration of animation
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                {card.icon}
              </div>
              <Image
                src={card.imageUrl}
                alt={card.title}
                className="rounded-lg w-full h-40 object-cover mt-4"
                width={400}  
                height={250}  
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold mt-10 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA for Airbnb Hosts */}
        <div className="mt-16 fade-in-up">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <a
              href="https://wa.me/7994202313?text=I'm%20an%20Airbnb%20host%20and%20need%20to%20enhance%20my%20listing."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enhance Your Airbnb Listing
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
