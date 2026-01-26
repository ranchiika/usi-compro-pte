"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Waves } from "lucide-react";
import Image from "next/image";

const fleetData = [
  {
    type: "TYPE NAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    liters: "5,000",
    image: "/home/fleet.png",
  },
  {
    type: "TYPE NAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    liters: "10,000",
    image: "/home/fleet.png",
  },
  {
    type: "TYPE NAME",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    liters: "16,000",
    image: "/home/fleet.png",
  },
];

const FleetPreview = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === fleetData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? fleetData.length - 1 : prev - 1));

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-6">
        
        <div className="w-full items-center lg:w-[45%] bg-bgGrey p-12 md:p-16 rounded-[30px] flex flex-col justify-between h-150">
          <div className="relative overflow-hidden grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-block rounded-full bg-primaryGreen px-6 py-2">
                  <span className="font-sans text-white text-sm font-medium italic uppercase tracking-wider">
                    Fleet Preview
                  </span>
                </div>
                
                <h2 className="font-prompt text-4xl md:text-5xl font-medium text-primaryText leading-tight">
                  {fleetData[current].type}
                </h2>
                
                <p className="font-sans text-secondaryText text-lg md:text-xl leading-relaxed">
                  {fleetData[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6 pt-8 border-black/5">
            <button 
              onClick={prevSlide} 
              className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryGreen hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <div className="flex gap-2">
              {fleetData.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-3 rounded-full transition-all duration-300 ${idx === current ? "w-10 bg-primaryOrange" : "w-3 bg-secondaryOrange/30"}`} 
                />
              ))}
            </div>

            <button 
              onClick={nextSlide} 
              className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryGreen hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative h-150 rounded-[30px] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={fleetData[current].image}
                alt={fleetData[current].type}
                fill
                priority
                className="object-cover"
              />
              
              <div className="absolute bottom-10 right-10 bg-primaryOrange rounded-4xl p-6 flex items-center gap-5 text-white shadow-2xl backdrop-blur-sm bg-opacity-95">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Waves className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-4xl font-bold leading-none tracking-tighter">
                    {fleetData[current].liters}
                  </div>
                  <div className="text-sm font-sans font-medium uppercase tracking-widest mt-1 opacity-90">
                    Liters
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FleetPreview;