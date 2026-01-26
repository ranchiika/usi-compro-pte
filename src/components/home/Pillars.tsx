"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Globe, Monitor, X } from "lucide-react";

const pillarData = [
  {
    title: "Designed Logistics",
    desc: "Customized supply chain strategies designed to optimize your fuel distribution flow.",
    detail: "Our smart logistics system uses AI-driven route optimization to ensure every drop of fuel is delivered via the most efficient path possible, reducing costs and carbon footprint.",
    icon: <Settings className="w-8 h-8" />, 
  },
  {
    title: "National Network",
    desc: "An expansive reach across the archipelago to ensure timely delivery to even the most remote sites.",
    detail: "With strategic hubs located from Sabang to Merauke, our fleet is ready to navigate diverse terrains to meet industrial energy demands anywhere in Indonesia.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Online Monitoring",
    desc: "24/7 digital transparency powered by advanced IT systems for real-time tracking and data accuracy.",
    detail: "Access our real-time dashboard to monitor truck locations, fuel levels, and delivery status with 99.9% data accuracy powered by IoT integration.",
    icon: <Monitor className="w-8 h-8" />,
  },
];

const Pillars = () => {
  const [selectedPillar, setSelectedPillar] = useState<null | typeof pillarData[0]>(null);

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block rounded-full bg-primaryOrange px-6 py-2 mb-6">
              <span className="font-sans text-white text-sm font-medium">Our Core Foundation</span>
            </div>
            <h2 className="font-prompt text-4xl md:text-5xl font-medium text-primaryText leading-tight">
              Three Pillars of Operational Excellence.
            </h2>
          </div>
          <p className="max-w-md font-sans text-secondaryText text-lg mt-4 text-right md:mt-16">
            Our foundation is built on three core strengths that guarantee precision in every delivery. We integrate smart logistics, a vast national network, and real-time digital monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bgGrey p-7 rounded-[30px] flex flex-col items-start group"
            >
              <div className="w-16 h-16 bg-primaryGreen rounded-2xl flex items-center justify-center mb-8 text-white transition-transform duration-500 group-hover:rotate-10">
                {item.icon}
              </div>
              <h3 className="font-prompt text-2xl font-medium text-primaryText mb-4">{item.title}</h3>
              <p className="font-sans text-secondaryText text-lg mb-10 grow leading-relaxed">
                {item.desc}
              </p>
              
              <button 
                onClick={() => setSelectedPillar(item)}
                className="w-full py-4 bg-primaryOrange text-white font-bold rounded-xl hover:bg-primaryOrange-dark transition-colors duration-300"
              >
                Detail
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPillar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPillar(null)}
                className="absolute inset-0 bg-primaryGreen/80 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="relative bg-white p-7 md:p-14 rounded-[30px] max-w-xl w-full shadow-2xl z-10 overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="absolute top-6 right-6 text-secondaryText hover:text-primaryOrange transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                <div className="w-16 h-16 bg-primaryOrange rounded-2xl flex items-center justify-center mb-8 text-white">
                  {selectedPillar.icon}
                </div>
                
                <h3 className="font-prompt text-3xl md:text-4xl font-medium text-primaryText mb-6">
                  {selectedPillar.title}
                </h3>
                
                <p className="font-sans text-secondaryText text-lg md:text-xl leading-relaxed">
                  {selectedPillar.detail}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Pillars;