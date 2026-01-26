"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full px-4 py-4 md:px-8 md:py-6">
      <div className="relative h-137 w-full overflow-hidden rounded-[40px] md:h-162">
        
        <Image
          src="/home/hero.png"
          alt="PT Petronas Energi Integrated Logistics Solutions"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-primaryOrange/50" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-primaryOrange px-4 py-1.5 md:px-6 md:py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white md:text-sm">
                Fueling The Future
              </span>
            </div>

            <h1 className="font-prompt text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-5xl">
              Empowering Industry Through Integrated Energy Logistics.
            </h1>

            <p className="max-w-3xl font-sans text-base leading-relaxed text-white/90 md:text-xl">
              PT USI Petrotrans Energi delivers high-standard land transportation solutions with a 
              commitment to safety, transparency, and operational excellence across Indonesia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;