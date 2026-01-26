"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, Target } from "lucide-react";

const VisionMission = () => {
  const missionPoints = useMemo(() => [
    "Creating benchmarks of high quality services",
    "Professionalism",
    "Efficiencies",
    "Positive experiences in the integrated logistics network nationally"
  ], []);

  return (
    <section className="w-full bg-white py-10  px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-primaryOrange text-xl font-medium mb-4 block">
              About Us
            </span>
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-primaryText leading-tight">
              Dedicated to Delivering Excellence in Energy Logistics.
            </h2>
          </div>
          <p className="max-w-md font-sans text-secondaryText text-lg md:text-right md:mt-12 leading-relaxed">
            We aim to be the nation&apos;s leading logistics partner by providing reliable energy solutions and maintaining the highest professional standards in every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="relative min-h-125 lg:h-auto rounded-[30px] overflow-hidden">
            <Image
              src="/about/visionmission.png"
              alt="Industrial Energy Logistics Facility"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bgGrey p-10 rounded-[30px] flex-1"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-prompt text-3xl font-medium text-primaryText">Vision</h3>
                <div className="bg-primaryOrange p-3 rounded-xl text-white">
                  <Lightbulb size={28} />
                </div>
              </div>
              <p className="font-sans text-secondaryText text-lg leading-relaxed">
                We aim to become the nation&apos;s preferred logistics company that provide reliable logistics solutions to business partners.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-bgGrey p-10 rounded-[30px] flex-1"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-prompt text-3xl font-medium text-primaryText">Mission</h3>
                <div className="bg-primaryOrange p-3 rounded-xl text-white">
                  <Target size={28} />
                </div>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondaryText mt-2.5 shrink-0" />
                    <span className="font-sans text-secondaryText text-lg leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;