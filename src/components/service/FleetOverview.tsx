"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, FileClock } from "lucide-react";

const FleetOverview = () => {
  const [selectedFleet, setSelectedFleet] = useState<any | null>(null);

  const fleetData = [
    {
      id: 1,
      name: "PTE — 5,000L",
      capacity: "5,000 LITERS",
      features: "Small footprint, precise delivery for tight or remote sites",
      image: "/fleet/5000L.png",
      detailFeatures: [
        "Semi heavy-duty with dual compartment tank",
        "Fleet management system",
        "Emergency cut-off system",
        "Small-capacity truck, ideal for routes with maneuvering limitations"
      ]
    },
    {
      id: 2,
      name: "PTE — 10,000L",
      capacity: "10,000 LITERS",
      features: "Balanced capacity for medium-scale operations with operational efficiency",
      image: "/fleet/10000L.png",
      detailFeatures: [
        "Semi heavy-duty with dual-compartment tank",
        "Fleet management system",
        "Emergency cut-off system",
        "Medium-capacity truck, ideal for routes with maneuvering limitations"
      ]
    },
    {
      id: 3,
      name: "PTE — 16,000L",
      capacity: "16,000 LITERS",
      features: "High-capacity delivery for demanding industrial sites",
      image: "/fleet/16000L.png",
      detailFeatures: [
        "Heavy-duty unit with dual-compartment tank",
        "Fleet management system",
        "Emergency cut-off system",
        "Designed for mining, large plantations, and high-demand industrial operations"
      ]
    },
  ];

  return (
    <section id="fleet-overview" className="w-full bg-white py-12 md:py-24 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <h2 className="font-prompt text-2xl md:text-4xl font-medium text-[#1A1A1A]">
            Reliable Fuel Delivery<br/>Starts with the Right Fleet.
          </h2>
          <div className="bg-primaryGreen p-3 md:p-4 rounded-[15px] text-white self-end md:self-auto">
            <FileClock size={28} className="md:w-8 md:h-8" />
          </div>
        </div>

        <div className="block md:hidden space-y-4">
          {fleetData.map((fleet) => (
            <div 
              key={fleet.id}
              onClick={() => setSelectedFleet(fleet)}
              className="bg-white border border-gray-200 rounded-[25px] p-6 shadow-sm active:scale-[0.98] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-secondaryText font-medium">{fleet.name}</span>
                <span className="text-primaryGreen font-bold">{fleet.capacity}</span>
              </div>
              <p className="text-secondaryText text-sm mb-6 leading-relaxed">
                {fleet.features}
              </p>
              <button className="w-full py-3 bg-primaryOrange rounded-xl text-white font-bold text-sm">
                Detail Features
              </button>
            </div>
          ))}
        </div>

        <div className="hidden md:block border border-gray-200 rounded-[30px] overflow-hidden shadow-sm">
          <table className="w-full border-collapse text-left bg-white">
            <tbody>
              {fleetData.map((fleet) => (
                <tr 
                  key={fleet.id}
                  onClick={() => setSelectedFleet(fleet)}
                  className="group cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0"
                >
                  <td className="py-7 px-8 text-secondaryText text-xl font-medium">
                    {fleet.name}
                  </td>
                  <td className="py-7 px-5 text-primaryGreen text-lg font-bold border-x border-gray-200 text-center w-[30%]">
                    {fleet.capacity}
                  </td>
                  <td className="py-7 px-8 text-secondaryText text-xl font-medium text-center">
                    {fleet.features}
                  </td>
                  <td className="py-7 px-8 text-secondaryText text-xl font-medium text-center border-x border-gray-200">
                    <button className="w-full max-w-50 py-3 bg-primaryOrange rounded-xl text-white hover:bg-primaryOrange-dark shadow-md transition-all">
                      Detail Features
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatePresence>
          {selectedFleet && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedFleet(null)}
                className="fixed inset-0 bg-primaryGreen/70 backdrop-blur-lg z-999"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] max-w-2xl bg-white rounded-[30px] z-1000 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                <div className="relative w-full h-48 md:h-72 bg-gray-100">
                  <Image 
                    src={selectedFleet.image} 
                    alt={selectedFleet.name} 
                    fill 
                    className="object-cover"
                  />
                </div>

                <div className="p-6 md:p-10">
                  <div className="mb-6">
                    <span className="text-[#F05529] font-bold text-sm md:text-lg">{selectedFleet.capacity}</span>
                    <h3 className="font-prompt text-2xl md:text-3xl font-medium text-[#1A1A1A] mt-1">
                      {selectedFleet.name} Specification
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {selectedFleet.detailFeatures.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-secondaryText text-base md:text-lg">
                        <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primaryOrange shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => setSelectedFleet(null)}
                    className="w-full bg-primaryOrange text-white py-3 md:py-4 rounded-2xl md:rounded-3xl font-bold border-2 border-primaryOrange transition-all text-sm md:text-base"
                  >
                    Close Specification
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

export default FleetOverview;