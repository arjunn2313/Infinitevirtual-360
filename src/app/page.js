import AboutUs from "@/components/HomePage/About";
import AirbnbHostsSection from "@/components/HomePage/Airbnb";
import Hero from "@/components/HomePage/Hero";
import RecentWorks from "@/components/HomePage/RecentWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Hero/>
     <AboutUs/>
     <AirbnbHostsSection/>
     <RecentWorks/>
    </div>
  );
}
