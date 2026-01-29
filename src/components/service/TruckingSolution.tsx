"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Gauge, Zap } from "lucide-react"; 

const TruckingSolutions = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const solutions = useMemo(() => [
    {
      id: 1,
      title: "High Speed Diesel (HSD)",
      shortDesc: "Optimal for high-speed industrial engines and transportation.",
      fullDesc: "Our High Speed Diesel (HSD) is specifically formulated to meet the demands of high-performance industrial engines. We ensure a steady supply chain through our integrated logistics network.",
      icon: <Gauge size={40} className="text-[#F05529]" strokeWidth={2.5} />, 
      image: "/contact/surabaya.png", 
    },
    {
      id: 2,
      title: "Medium Diesel Fuel (MDF)",
      shortDesc: "Reliable energy solution for industrial boilers and heavy machinery.",
      fullDesc: "Medium Diesel Fuel (MDF) provides a robust energy source for specialized heavy equipment and industrial heating systems.",
      icon: <Zap size={40} className="text-[#F05529]" strokeWidth={2.5} />,
      image: "/contact/samarinda.png",
    }
  ], []);

  const activeSolution = useMemo(() => 
    solutions.find(item => item.id === selectedId), 
  [selectedId, solutions]);

  return (
    <section className="w-full bg-white py-8 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-2xl">
            <span className="font-sans text-primaryOrange text-xl font-medium mb-4 block">
              Our Service
            </span>
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-[#1A1A1A] leading-tight">
              Logistics Solutions for<br />Energy and Industry.
            </h2>
          </div>
          <div className="max-w-md text-secondaryText text-lg md:text-right md:mt-12 leading-relaxed">
            We provide specialized transportation and management services tailored to the unique requirements of various liquid bulk products.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {solutions.map((item) => (
            <div key={item.id} className="relative flex flex-col group cursor-default">
              
              <div className="relative w-full h-95 rounded-[30px] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-secondaryOrange/30" />
                
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-[80%] bg-white p-5 rounded-[22px] shadow-lg z-30 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="relative -mt-40 mx-auto w-full bg-white rounded-[30px] shadow-sm z-20 pb-10 pt-10 px-8 text-center border border-gray-100/50">
                
                <h3 className="font-prompt text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-secondaryText text-base md:text-lg mb-8 leading-relaxed mx-auto">
                  {item.shortDesc}
                </p>

                <button 
                  onClick={() => setSelectedId(item.id)}
                  className="w-full bg-primaryOrange text-white py-4 rounded-[18px] font-bold text-lg hover:bg-primaryOrange-dark transition-colors shadow-md active:scale-[0.98]"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>

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
                <div className="relative w-full h-64">
                  <Image 
                    src={activeSolution.image} 
                    alt={activeSolution.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-prompt text-3xl font-medium text-[#1A1A1A]">{activeSolution.title}</h3>
                  </div>
                  <p className="text-secondaryText text-lg leading-relaxed mb-8">{activeSolution.fullDesc}</p>
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