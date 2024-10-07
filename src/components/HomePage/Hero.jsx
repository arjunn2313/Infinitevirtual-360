"use client";

import React, { useState, useEffect } from "react";
import { Inter, Nunito, Playfair_Display, Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const popins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "800",
});

const slides = [
  //   {
  //     image: "/hero.jpg",
  //     mainText: "360° Home Tours",
  //     subText: "Discover",
  //   },
  {
    image: "/hero-2.jpg",
    mainText: "360° Home ",
    secondary: " Tours",
    subText: "We Capture",
  },
  // {
  //   image: "/hero-3.jpg",
  //   mainText: "Immersive Visuals",
  //   subText: "Explore",
  // },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center p-8 sm:p-16 lg:px-24">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-100 z-0"></div>

      <AnimatePresence>
        <motion.div
          //   key={slides[currentSlide].image}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl py-8 sm:py-16 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text Content */}
        <div className="flex-1   text-left space-y-4 sm:space-y-8 mt-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={slides[currentSlide].subText}
              className={`${nunito.className} text-xl sm:text-4xl text-gray-100`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentSlide].subText}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h4
              key={slides[currentSlide].mainText}
              className={`${nunito.className} text-5xl sm:text-8xl font-bold text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentSlide].mainText}
            </motion.h4>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h4
              key={slides[currentSlide].mainText}
              className={`${nunito.className} text-3xl sm:text-6xl font-bold text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <ReactTyped
                backSpeed={5}
                onBegin={function noRefCheck() {}}
                onComplete={function noRefCheck() {}}
                onDestroy={function noRefCheck() {}}
                onLastStringBackspaced={function noRefCheck() {}}
                onReset={function noRefCheck() {}}
                onStart={function noRefCheck() {}}
                onStop={function noRefCheck() {}}
                onStringTyped={function noRefCheck() {}}
                onTypingPaused={function noRefCheck() {}}
                onTypingResumed={function noRefCheck() {}}
                strings={["Tours", "Photography", "Tours for Airbnb"]}
                loop
                typeSpeed={80}
                typedRef={function noRefCheck() {}}
              />
              {/* {slides[currentSlide].secondary} */}
            </motion.h4>
          </AnimatePresence>
          <div className={`${popins.className}`}>
            <button className="bg-white py-2    rounded-full flex  justify-center items-center gap-3 px-5 transition-all duration-300 hover:bg-orange-600 hover:text-white hover:border-orange-600">
              Discover Our Services
              <span className="hidden sm:flex bg-orange-600 p-3 text-white rounded-full transition-all duration-300 hover:bg-white hover:text-orange-600">
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        {/* Play Button */}
        {/* <div className="  flex-1">
          <div className="flex justify-center items-center">
            <motion.button
              className="p-5 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 ring-blue-400"
              onClick={handlePlayClick}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.15, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FaPlay className="text-2xl" />
            </motion.button>
          </div>
        </div> */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 bg-center bg-cover rounded-full overflow-hidden shadow-lg relative"
            style={{
              backgroundImage: "url('hero.jpg')",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50" />

            <motion.button
              className="absolute shadow-xl shadow-white inset-0 flex flex-col justify-center items-center p-5 text-white rounded-full hover:text-white focus:outline-none focus:ring-4 ring-blue-400 border-2 transition duration-300"
              onClick={handlePlayClick}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.15, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              whileHover={{ scale: 1.1 }}
              style={{
                boxShadow:
                  "0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)",
              }}
            >
              {/* Animated ring around the icon */}
              <motion.div
                className="bg-orange-600 rounded-full p-2 flex justify-center items-center"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
              >
                <FaPlay className="text-3xl" />
              </motion.div>
              {/* Uncomment to show the label */}
              {/* <span className="text-sm font-bold">See the video</span> */}
            </motion.button>
          </motion.div>

          {/* Uncomment to add additional images with similar animations */}

          <motion.div
            className="absolute top-2 right-10 sm:right-16 w-16 h-16 sm:w-20 sm:h-20 bg-cover bg-center rounded-full shadow-lg"
            style={{ backgroundImage: "url('hero-2.jpg')" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-2 left-10 sm:left-16 w-16 h-16 sm:w-20 sm:h-20 bg-cover bg-center rounded-full shadow-lg"
            style={{ backgroundImage: "url('hero-3.jpg')" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute top-14 left-2 sm:left-4 w-14 h-14 sm:w-18 sm:h-18 bg-cover bg-center rounded-full shadow-lg"
            style={{ backgroundImage: "url('hero-2.jpg')" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-2 sm:right-4 w-14 h-14 sm:w-18 sm:h-18 bg-cover bg-center rounded-full shadow-lg"
            style={{ backgroundImage: "url('hero-3.jpg')" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white text-2xl z-30"
              onClick={handleCloseVideo}
            >
              ✕
            </button>
            <video
              src="your-video-file.mp4"
              className="w-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
}
