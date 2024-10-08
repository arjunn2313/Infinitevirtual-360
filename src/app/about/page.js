import VirtualTourPromo from "@/components/AboutUs/VirtualTourPromo";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import AboutUs from "@/components/HomePage/About";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Roboto } from "next/font/google";
import React from "react";



export default function Page() {
  return (
    <div>
      <PageHeader heading="About Us" />
      <AboutUs/>
      <VirtualTourPromo/>
      <WhyChooseUs/>
    </div>
  );
}
