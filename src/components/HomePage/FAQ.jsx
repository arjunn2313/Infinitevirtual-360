"use client";
import { Merriweather, Nunito, Poppins } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

// Updated FAQ data
const faqs = [
  {
    id: 1,
    question: "How does the 360-degree virtual tour work?",
    answer:
      "Our 360-degree virtual tours allow you to explore properties from every angle, giving you a realistic experience of each space. Simply click on a property, and you’ll be able to navigate through interactive panoramas.",
  },
  {
    id: 2,
    question: "What equipment is used for capturing 360-degree images?",
    answer:
      "We use professional-grade cameras specifically designed for 360-degree photography, ensuring high-quality images and smooth navigation throughout the virtual tour.",
  },
  {
    id: 3,
    question: "How can I schedule a 360-degree photoshoot for my property?",
    answer:
      "To schedule a photoshoot, simply fill out the contact form on our website or email us at trusto.shop@gmail.com, and we'll get in touch with you to confirm the details.",
  },
  {
    id: 4,
    question: "Are the virtual tours mobile-friendly?",
    answer:
      "Yes, our virtual tours are optimized for all devices, including smartphones and tablets, allowing you to view properties on the go.",
  },
];

const nunito = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10">
      <h2 className={`text-2xl md:text-4xl py-10 font-bold text-blue-600 mb-8 text-center ${nunito.className}`}>
        Frequently Asked Questions
      </h2>

      <div className="grid grid-col-1 sm:grid-cols-2 max-w-7xl mx-auto">
         <div className="flex justify-center items-center">
            <Image
            src="/earth.jpg"
            alt="earth"
            width={300}
            height={200}
            className="w-1/2 rounded-full "
            />
         </div>
         <div className={`container px-5 mx-auto max-w-2xl min-w-xl py-5 ${nunito.className}`}>
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  openFAQ === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openFAQ === index && (
              <p className="text-gray-700 mt-2 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
