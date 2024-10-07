"use client"
import { Nunito, Poppins } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

const popins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
});

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:flex items-center justify-between">
        
        {/* Image Section with Animation and Hover Effect */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about-2.jpg"
            alt="360 Virtual Tour Photography"
            className="rounded-lg shadow-lg w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            width={500}
            height={300}
          />
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          className="md:w-1/2 md:pl-10 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className={`${nunito.className} text-blue-600 font-bold text-lg uppercase`}>
            Who We Are
          </h4>
          <h2 className={`${nunito.className} text-4xl font-extrabold text-gray-900 mt-4`}>
            Experts in <span className="text-blue-600">360° </span>Virtual Tours & Real Estate Photography
          </h2>
          <p className={`${popins.className} text-gray-600 text-md mt-4 leading-relaxed`}>
            We bring your property to life with stunning 360-degree virtual tours and professional real estate photography. With over 10 years of experience in the field, we understand the importance of captivating visuals to showcase properties in the best light.
          </p>
          <p className={`${popins.className} text-gray-600 mt-2 text-md`}>
            From residential homes to commercial properties, our team is dedicated to delivering high-quality, immersive experiences that engage potential buyers and clients.
          </p>
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
