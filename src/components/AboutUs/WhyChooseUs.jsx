import React from "react";
import Link from "next/link";
import { FaCamera, FaCubes, FaDollarSign } from "react-icons/fa";

const cardData = [
  {
    icon: <FaCamera className="text-4xl text-blue-500 mb-6 mx-auto" />,
    title: (
      <>
        360° <span className="text-blue-600">High-Quality</span> Images
      </>
    ),
    description:
      "Experience immersive photography with our 360° technology, capturing every angle in stunning detail.",
    linkText: "More Info",
  },
  {
    icon: <FaDollarSign className="text-4xl text-blue-500 mb-6 mx-auto" />,
    title: (
      <>
        <span className="text-blue-600">Affordable</span> Packages
      </>
    ),
    description:
      "Get 360° photography services at competitive prices without compromising on quality.",
    linkText: "More Info",
  },
  {
    icon: <FaCubes className="text-4xl text-blue-500 mb-6 mx-auto" />,
    title: (
      <>
        Variety of <span className="text-blue-600">Options</span>
      </>
    ),
    description:
      "Choose from a variety of 360° photography options tailored to your needs, whether it’s real estate or product showcasing.",
    linkText: "More Info",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-6 sm:py-20 flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 fade-inn font-suse">
          Why Choose Us
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-8 bg-white shadow-md hover:shadow-lg hover:shadow-primary-200 rounded-lg text-center border border-blue-600   
                transform transition duration-300 ease-in-out hover:bg-gray-50 fade-in-upp hover:border hover:scale-105 
                hover:rotate-1  
              `}
          >
            <div className="icon-container mb-6 transform transition-transform duration-300 hover:scale-110">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4   ">{card.title}</h3>
            <p className="text-gray-600 mb-6">{card.description}</p>
            <Link
              href={"/contact"}
              className="text-primary-500 font-semibold inline-flex items-center hover:text-primary-600 transition-colors duration-300"
            >
              {card.linkText}
              <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
