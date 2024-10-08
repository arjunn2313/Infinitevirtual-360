"use client";
import { Nunito } from "next/font/google";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaUser,
  FaEdit,
} from "react-icons/fa";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz1o8Ux6SxEdCfygdbnmWUY5yiu4nsYRjKfd_miR4b__vfZ6vdVvK02VAxbs7Z8VqNd/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      alert("Form Submitted");
      reset();
    } catch (err) {
      alert("Submission failed. Please try again.");
      console.log(err);

      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:gap-12 p-4 sm:p-8 md:p-16 w-full md:w-4/5 lg:w-9/10 mx-auto ${nunito.className}`}
    >
      {/* Contact Information Section */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <p className="text-gray-600 mb-6">
          For inquiries about our services, feel free to get in touch.
          We&apos;re here to assist you with any questions you may have.
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-3xl text-blue-500" />
            <div>
              <h4 className="font-bold text-gray-800">Address</h4>
              <p className="text-gray-600">Kochi , Ernakulam , Kerala</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-3xl text-pink-500" />
            <div>
              <h4 className="font-bold text-gray-800">Phone</h4>
              <p className="text-gray-600">Mobile: +91 7994202313</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaClock className="text-3xl text-orange-500" />
            <div>
              <h4 className="font-bold text-gray-800">Working Hours</h4>
              <p className="text-gray-600">
                Monday-Saturday: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8">
          <h4 className="font-bold text-gray-800 mb-2">Find Us on the Map</h4>
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.859862337605!2d76.308513924794!3d10.028421040078427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dae06d59d9f%3A0x3cb6df0f9c5c9c68!2sEdappally%20Toll%2C%20Unnichira%2C%20Koonamthai%2C%20Edappally%2C%20Ernakulam%2C%20Kerala%20682024!5e0!3m2!1sen!2sin!4v1727953118869!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full md:w-2/3">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="name"
            >
              <FaUser className="text-xl text-teal-600 mr-2" />
              Your Name
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="email"
            >
              <FaEnvelope className="text-xl text-teal-600 mr-2" />
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="subject"
            >
              <FaEdit className="text-xl text-teal-600 mr-2" />
              Subject
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="subject"
              type="text"
              placeholder="Optional"
              {...register("subject")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="message"
            >
              <FaEdit className="text-xl text-teal-600 mr-2" />
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="message"
              rows="4"
              placeholder="Your message here..."
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold py-3 rounded-lg transition duration-300 ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
