"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Partnership = () => {
  const logos = useMemo(() => [
    { src: "/logodummy.png", alt: "Leading Mining Industry Partner" },
    { src: "/logo.png", alt: "Major Plantation Company Partner" },
    { src: "/logodummy.png", alt: "Manufacturing Excellence Partner" },
    { src: "/logo.png", alt: "National Energy Distribution Partner" },
    { src: "/logodummy.png", alt: "Industrial Fuel Supply Client" },
    { src: "/logo.png", alt: "Strategic Logistics Partner" },
  ], []);

  const infiniteLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section className="w-full bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <header className="max-w-5xl text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primaryOrange px-6 py-2 mb-6"
          >
            <span className="font-sans text-white text-sm font-medium">Our Partnership</span>
          </motion.div>
          
          <h2 className="font-prompt text-4xl md:text-5xl font-medium text-primaryText mb-6">
            Trusted by Leading Industries Nationwide.
          </h2>
          
          <p className="font-sans text-secondaryText text-lg md:text-xl">
            From mining and plantations to manufacturing, we are dedicated to powering your business with consistent quality and unwavering safety standards.
          </p>
        </header>

        <div className="relative w-full bg-bgGrey rounded-[30px] py-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bgGrey to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bgGrey to-transparent" />

          <motion.div 
            className="flex gap-10 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 8,
              repeat: Infinity 
            }}
          >
            {infiniteLogos.map((logo, idx) => (
              <div 
                key={`${logo.src}-${idx}`} 
                className="relative h-20 w-50 shrink-0 opacity-80 filter-[brightness(0)_saturate(100%)_invert(24%)_sepia(13%)_saturate(1148%)_hue-rotate(101deg)_brightness(94%)_contrast(91%)]"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill 
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Partnership;