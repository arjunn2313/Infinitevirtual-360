"use client"
import { Nunito, Poppins } from "next/font/google";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const popins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "700",
});

export const photos = [
  {
    id: 1,
    title: "360 Photo 1",
    url: "https://app.cloudpano.com/tours/WBokftKDv",
    description: "An immersive view of the living room.",
    pricing: "$150",
  },
  {
    id: 2,
    title: "360 Photo 2",
    url: "https://my.matterport.com/show/?m=J3YQUXCAGAn",
    description: "Explore this stunning kitchen from every angle.",
    pricing: "$200",
  },
  {
    id: 3,
    title: "360 Photo 3",
    url: "https://app.cloudpano.com/tours/WBokftKDv?sceneId=YkAqJOeuA",
    description: "Experience the beauty of this spacious backyard.",
    pricing: "$180",
  },
  {
    id: 4,
    title: "360 Photo 4",
    url: "https://app.cloudpano.com/tours/WBokftKDv?sceneId=sey0jvJxYJ", // Example
    description: "A cozy bedroom showcasing elegant decor.",
    pricing: "$160",
  },
  {
    id: 5,
    title: "360 Photo 5",
    url: "https://my.matterport.com/show/?m=J3YQUXCAGAn", // Example
    description: "Modern bathroom design with luxury fittings.",
    pricing: "$190",
  },
  {
    id: 6,
    title: "360 Photo 6",
    url: "https://app.cloudpano.com/tours/WBokftKDv?sceneId=YkAqJOeuA", // Example
    description: "An airy dining space perfect for gatherings.",
    pricing: "$175",
  },
  {
    id: 7,
    title: "360 Photo 7",
    url: "https://app.cloudpano.com/tours/WBokftKDv?sceneId=sey0jvJxYJ", // Example
    description: "Stylish office space designed for productivity.",
    pricing: "$210",
  },
  {
    id: 8,
    title: "360 Photo 8",
    url: "https://my.matterport.com/show/?m=J3YQUXCAGAn", // Example
    description: "A vibrant children's playroom with fun features.",
    pricing: "$155",
  },
  {
    id: 9,
    title: "360 Photo 9",
    url: "https://app.cloudpano.com/tours/WBokftKDv?sceneId=YkAqJOeuA", // Example
    description: "Sleek rooftop terrace with city views.",
    pricing: "$220",
  },
];

const RecentWorks = () => {
  return (
    <div className="container mx-auto p-4 sm:py-16 bg-gray-50">
      <h1 className={`text-2xl sm:text-4xl text-gray-800 font-extrabold text-center mb-2 fade-in ${nunito.className}`}>
        Latest <span className="text-blue-600">360°</span> Photo Works
      </h1>
      <p className={`${popins.className} max-w-7xl mx-auto text-center text-md text-gray-700`}>
        Explore our most recent 360° photography projects that showcase
        immersive views and stunning visuals. Each photo is designed to capture
        the complete experience from every angle.
      </p>

      {/* Gallery Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-20">
        {photos.map((photo) => (
          <motion.div 
            key={photo.id} 
            className="relative group col-span-1"
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to final state
            transition={{ duration: 0.5 }} // Duration of animation
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              {/* Using iframe to embed 360-degree tours */}
              <div className="p-2 border border-gray-300 rounded-lg bg-white">
                <iframe
                  src={photo.url}
                  title={photo.title}
                  width="100%" // Make the iframe responsive
                  height="300" // Set a fixed height
                  style={{ border: "none" }} // Remove border
                  allowFullScreen // Allow fullscreen for better viewing experience
                />
              </div>
            </div>
            <h2 className="mt-4 text-center font-semibold">{photo.title}</h2>
            <p className="text-center text-gray-600 mt-1">{photo.description}</p> {/* Description */}
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;

 


 