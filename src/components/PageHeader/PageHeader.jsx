import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

export default function PageHeader(props) {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
      className={` ${roboto.className} relative font-extrabold text-white text-3xl sm:text-5xl py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative  z-10 py-5">{props.heading}</div>
    </div>
  );
}
