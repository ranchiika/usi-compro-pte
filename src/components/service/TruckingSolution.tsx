"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Gauge, Zap, ShieldCheck } from "lucide-react";

const TruckingSolutions = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const solutions = useMemo(() => [
    {
      id: 1,
      title: "High Speed Diesel Delivery",
      shortDesc: "On-site fuel supply for uninterrupted industrial operations",
      fullDesc: "We specialize in delivering high-speed diesel (HSD) directly to operational sites, including mining, plantations, and manufacturing facilities. Our fleet is maintained to the highest safety and operational standards, ensuring timely, accurate, and compliant fuel distribution.",
      icon: <Gauge size={35} className="text-[#F05529]" strokeWidth={2.5} />, 
      image: "/service/ts_1.png", 
    },
    {
      id: 2,
      title: "Fleet & Delivery Solution",
      shortDesc: "The right truck for every operational need",
      fullDesc: "Our fleet is designed to meet varying site requirements and operational scales. From medium-sized plantations to high-demand mining operations, we provide the right fuel capacity, operational precision, and delivery efficiency.",
      icon: <Zap size={35} className="text-[#F05529]" strokeWidth={2.5} />,
      image: "/service/ts_2.png",
    },
    {
      id: 3,
      title: "Workshop & Fleet Support",
      shortDesc: "Keeping your operations moving with maintenance and support",
      fullDesc: "Our commercial service workshop ensures fleet readiness and accepts third-party trucks for maintenance. This capability supports continuous operations, minimizing downtime and improving operational reliability across client sites.",
      icon: <ShieldCheck size={35} className="text-[#F05529]" strokeWidth={2.5} />,
      image: "/service/ts_3.png",
    },
  ], []);

  const activeSolution = useMemo(() => 
    solutions.find(item => item.id === selectedId), 
  [selectedId, solutions]);

  return (
    <section id="trucking-solution" className="w-full bg-white py-16 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-primaryOrange text-xl font-medium mb-4 block">
              Our Service
            </span>
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight">
              Logistics Solutions for<br />Energy and Industry.
            </h2>
          </div>
          <div className="max-w-md text-secondaryText text-lg md:text-right md:mt-12 leading-relaxed">
            Providing reliable, compliant, and timely fuel delivery designed to keep your operations running without interruption.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {solutions.map((item) => (
            <div key={item.id} className="relative flex flex-col group cursor-default">
              
              <div className="relative w-full h-80 rounded-[30px] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-secondaryOrange/20" />
                
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-4xl shadow-lg z-30 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="relative -mt-32 mx-auto w-full bg-white rounded-[30px] shadow-md z-20 pb-8 pt-10 px-6 text-center border border-gray-100/50">
                <h3 className="font-prompt text-xl md:text-2xl font-medium text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-secondaryText text-sm md:text-base mb-8 leading-relaxed mx-auto min-h-15">
                  {item.shortDesc}
                </p>

                <button 
                  onClick={() => setSelectedId(item.id)}
                  className="w-full bg-primaryOrange text-white py-3.5 rounded-[15px] font-bold text-base hover:bg-primaryOrange-dark transition-colors shadow-md active:scale-[0.98]"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* POP-UP MODAL */}
        <AnimatePresence>
          {selectedId && activeSolution && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-primaryGreen/70 backdrop-blur-lg z-999"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-[30px] z-1000 overflow-hidden shadow-2xl"
              >
                <div className="relative w-full h-60">
                  <Image 
                    src={activeSolution.image} 
                    alt={activeSolution.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-prompt text-2xl font-medium text-[#1A1A1A]">{activeSolution.title}</h3>
                  </div>
                  <p className="text-secondaryText text-base leading-relaxed mb-8">{activeSolution.fullDesc}</p>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="w-full py-4 border-2 border-[#F05529] text-[#F05529] rounded-[18px] font-bold hover:bg-[#F05529] hover:text-white transition-all"
                  >
                    Close Information
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default TruckingSolutions;