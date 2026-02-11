"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HistorySection = () => {
  const timelineData = useMemo(() => [
    {
      year: "2007",
      label: "The Foundation (2007)",
      title: "The Foundation",
      description: "Our journey began with PT United Shipping Indonesia (USI). As a National Fuel Agent for PT Pertamina (Persero), USI established a strong reputation for reliability, safety, and operational discipline in maritime fuel logistics.",
      image: "/about/history_1.png",
      align: "right" as const,
    },
    {
      year: "2021",
      label: "Evolution to Land Operations (2021)",
      title: "The Evolution",
      description: "Building on this foundation, PT USI Petronas Energi (PTE) was established to extend this expertise to land-based operations. Specializing in fuel land freight, PTE applies maritime-grade precision, strict safety standards, and disciplined operational practices to onshore fuel distribution.",
      image: "/about/history_2.png",
      align: "left" as const,
    },
    {
      year: "Present",
      label: "Service Workshop Expansion (2025)",
      title: "Service Workshop",
      description: "In 2025, PTE expanded its operations to include a commercial service workshop, providing maintenance and servicing capabilities for its fleet and accepting third-party trucks, in full compliance with applicable operational, safety, and regulatory requirements.",
      image: "/about/history_3.png",
      align: "right" as const,
    },
  ], []);

  return (
    <section id="history" className="w-full bg-white py-7 px-6 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-primaryText leading-tight">
              A Legacy of Trust,<br /> Built Through Operational Excellence
            </h2>
          </div>
          <p className="max-w-md text-secondaryText text-lg md:text-right md:mt-6 leading-relaxed">
            Our journey is shaped by decades of operational experience evolving from maritime operations into a trusted provider of land based fuel logistics for industrial sectors.
          </p>
        </div>

        <div className="relative">
          
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E5E5] -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-12">
            {timelineData.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center w-full">
                
                <div className={`w-full md:w-1/2 flex flex-col ${item.align === "right" ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16 md:items-end md:text-right"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: item.align === "right" ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="inline-block rounded-full bg-primaryOrange px-6 py-2">
                      <span className="text-white text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-secondaryText text-lg leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className={`w-full md:w-1/2 mt-8 md:mt-0 ${item.align === "right" ? "md:order-1 md:pr-16" : "md:order-2 md:pl-16"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-75 md:h-87 w-full rounded-[30px] overflow-hidden shadow-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                

                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primaryGreen border-4 border-white shadow-sm hidden md:block z-10" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;