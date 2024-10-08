import Contact from "@/components/Contact/contactForm";
import AboutUs from "@/components/HomePage/About";
import AirbnbHostsSection from "@/components/HomePage/Airbnb";
import FAQ from "@/components/HomePage/FAQ";
import Hero from "@/components/HomePage/Hero";
import RecentWorks from "@/components/HomePage/RecentWorks";
import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "700",
});
 
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AirbnbHostsSection />
      <RecentWorks />
      <FAQ/>
      <div>
        <h1 className={`text-2xl pt-10 sm:text-4xl text-gray-800 font-extrabold text-center mb-2 fade-in ${nunito.className}`}>Contact Us</h1>
        <Contact />
      </div>
    </div>
  );
}
