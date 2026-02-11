"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GoalsObjective = () => {
  const [current, setCurrent] = useState(0);

  const goalsData = useMemo(() => [
    {
      title: "Operational Excellence",
      desc: "To maintain disciplined operational procedures that ensure timely, accurate, and uninterrupted fuel delivery.",
      image: "/about/goalsObjective.png",
    },
    {
      title: "Safety & HSE Compliance",
      desc: "To achieve zero-incident operations through strict adherence to HSE standards, training, and continuous safety improvement.",
      image: "/about/goals_3.png",
    },
    {
      title: "Fleet Readiness & Reliability",
      desc: "To ensure high fleet availability through preventive maintenance, inspections, and readiness planning.",
      image: "/about/goals_2.png",
    },
    {
      title: "Client Support & Continuity",
      desc: "To support client operations by providing dependable fuel supply tailored to site-specific industrial requirements.",
      image: "/about/goals_5.png",
    },
    {
      title: "Quality & Continuous Improvement",
      desc: "To continuously improve service quality in line with ISO-based quality management systems and performance monitoring.",
      image: "/about/goals_4.png",
    },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === goalsData.length - 1 ? 0 : prev + 1));
  }, [goalsData.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? goalsData.length - 1 : prev - 1));
  }, [goalsData.length]);

  const newLocal = "hidden lg:block lg:w-[40%] relative h-[450px] rounded-[30px] overflow-hidden";
  return (
    <section id="goals-objective" className="w-full bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        <header className="flex flex-col items-center text-center mb-10">
          <div className="inline-block rounded-full bg-primaryOrange px-6 py-2 mb-6">
            <span className="text-white text-sm font-medium uppercase tracking-widest">
              Our Goals & Objective
            </span>
          </div>
          <h2 className="font-prompt text-3xl md:text-4xl font-medium text-primaryText leading-tight max-w-3xl">
            Driving Sustainable Growth Through Strategic Fuel Logistics
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10">
          
          <div className="hidden lg:flex flex-col gap-3 shrink-0">
            {goalsData.map((_, idx) => (
              <motion.div 
                key={idx}
                animate={{ 
                  height: idx === current ? 48 : 12,
                  backgroundColor: idx === current ? "#F05529" : "rgba(240, 85, 41, 0.2)" 
                }}
                className="w-3 rounded-full transition-colors duration-300"
              />
            ))}
          </div>

          <div className="w-full lg:w-[45%] bg-[#F5F5F5] p-10 md:p-14 rounded-[30px] h-auto lg:h-112 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-prompt text-3xl md:text-3xl font-medium text-primaryText mb-8 leading-tight">
                  {goalsData[current].title}
                </h3>
                <p className="font-sans text-secondaryText text-lg leading-relaxed">
                  {goalsData[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={newLocal}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={goalsData[current].image}
                  alt={goalsData[current].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex flex-col gap-4 shrink-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryOrange hover:text-white transition-all"
            >
              <ChevronUp size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryOrange hover:text-white transition-all"
            >
              <ChevronDown size={24} />
            </button>
          </div>

          <div className="flex lg:hidden items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryOrange hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {goalsData.map((_, idx) => (
                <motion.div 
                  key={idx}
                  animate={{ 
                    width: idx === current ? 40 : 12,
                    backgroundColor: idx === current ? "#F05529" : "rgba(240, 85, 41, 0.2)" 
                  }}
                  className="h-3 rounded-full transition-colors duration-300"
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-primaryText hover:bg-primaryOrange hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GoalsObjective;