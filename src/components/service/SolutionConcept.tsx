"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, CheckSquare } from "lucide-react";

const SolutionConcept = () => {
  return (
    <section className="w-full bg-white py-10 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-5">
          <div className="max-w-2xl">
            <span className="inline-block bg-primaryOrange text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              We handle you power the industry.
            </span>
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight">
              Your One-Stop Energy<br />Logistics Partner
            </h2>
          </div>
          <div className="max-w-md text-secondaryText text-lg md:text-right md:mt-16 leading-relaxed">
            We act as the primary bridge between energy producers (Principals) and your operational sites, managing everything so you can focus on your core business.
          </div>
        </div>

        <div className="relative w-full h-100 rounded-[30px] overflow-hidden mb-12">
          <Image 
            src="/home/hero.png"
            alt="One Stop Energy Logistics"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-bgGrey rounded-[30px] p-10 flex flex-col items-start">
            <div className="bg-[#2D4336] p-4 rounded-[15px] mb-6 shadow-md">
              <Network size={28} className="text-white" />
            </div>
            <h3 className="font-prompt text-2xl font-medium text-[#1A1A1A] mb-4">
              End-to-End Supply Chain.
            </h3>
            <p className="text-secondaryText text-lg leading-relaxed">
              We manage the entire supply chain, from pickup at the depot to professional stock management at your site.
            </p>
          </div>

          <div className="bg-bgGrey rounded-[30px] p-10 flex flex-col items-start">
            <div className="bg-[#2D4336] p-4 rounded-[15px] mb-6 shadow-md">
              <CheckSquare size={28} className="text-white" />
            </div>
            <h3 className="font-prompt text-2xl font-medium text-[#1A1A1A] mb-4">
              Exclusive & Reliable Fleet.
            </h3>
            <p className="text-secondaryText text-lg leading-relaxed">
              Our distribution is powered by dedicated, well-maintained tanker units to ensure maximum efficiency and safety in every trip.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionConcept;