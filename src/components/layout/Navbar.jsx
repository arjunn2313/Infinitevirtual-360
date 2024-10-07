"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bungee_Outline, Lobster, Montserrat, Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const outline = Bungee_Outline({
  subsets: ["latin"],
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname(); // Get the current path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for changing navbar background
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled || pathname !== "/" ? "  " : "bg-transparent text-black"
      } py-2  px-2 sm:px-0 mx-auto`}
      //   className={`  py-2`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-full">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className={`text-2xl font-bold ${montserrat.className}`}>
            <Link href="/" className="flex items-center justify-center">
              {/* <Image src="/trusto.png" alt="logo" width={50} height={50} /> */}
              <span className="bg-gradient-to-r text-xl sm:text-2xl from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Infinitevirtual 360{" "}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden   md:flex ml-10 space-x-10 text-lg font-semibold ${poppins.className}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-blue-700"
                    : "hover:text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex justify-center items-center gap-6">
            <Link href={"https://www.instagram.com"}>
              <FaInstagram
                size={25}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              />
            </Link>
            <Link href={"www.facebook.com"}>
              <FaFacebook
                size={26}
                className="text-white bg-blue-500 p-1 rounded-full hover:bg-blue-600 transition-colors duration-300"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Mobile menu icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${
            roboto.className
          } bg-gray-800 px-4 pt-4 pb-3 space-y-1 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5"
          }`}
          style={{
            visibility: isMobileMenuOpen ? "visible" : "hidden",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-white hover:bg-gray-700 rounded-md ${
                pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <p className="text-center text-gray-100">Follow Us</p>
          <div className="flex justify-center items-center gap-6 py-5">
            <Link href={"https://www.instagram.com"}>
              <FaInstagram
                size={25}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
              />
            </Link>
            <Link href={"www.facebook.com"}>
              <FaFacebook
                size={26}
                className="text-white bg-blue-500 p-1 rounded-full hover:bg-blue-600 transition-colors duration-300"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
