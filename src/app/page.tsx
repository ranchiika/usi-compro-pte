import About from "@/components/home/About";
import FleetPreview from "@/components/home/FleetPreview";
import Hero from "@/components/home/Hero";
import Partnership from "@/components/home/Partnership";
import Pillars from "@/components/home/Pillars";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Pillars/>
      <FleetPreview/>
      <Partnership/>
    </div>
  );
}
