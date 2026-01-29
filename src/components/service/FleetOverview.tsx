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
      name: "Nama Type Transport",
      capacity: "5,000 LITERS",
      features: "Features",
      image: "/fleet/fleet-5k.png",
    },
    {
      id: 2,
      name: "Nama Type Transport",
      capacity: "10,000 LITERS",
      features: "Features",
      image: "/fleet/fleet-10k.png",
    },
    {
      id: 3,
      name: "Nama Type Transport",
      capacity: "16,000 LITERS",
      features: "Features",
      image: "/fleet/fleet-16k.png",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-prompt text-3xl md:text-4xl font-medium text-[#1A1A1A]">
            Fleet Overview
          </h2>
          <div className="bg-primaryOrange p-4 rounded-[15px] text-white">
            <FileClock size={32} />
          </div>
        </div>

        <div className="border border-gray-200 rounded-[30px] overflow-hidden shadow-sm">
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
                  <td className="py-7 px-8 text-primaryGreen text-lg font-bold border-x border-gray-200 text-center w-[30%]">
                    {fleet.capacity}
                  </td>
                  <td className="py-7 px-8 text-secondaryText text-xl font-medium text-center">
                    {fleet.features}
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
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white rounded-[30px] z-1000 overflow-hidden shadow-2xl"
              >
                <div className="relative w-full h-72 bg-gray-100">
                  <Image 
                    src={selectedFleet.image} 
                    alt={selectedFleet.name} 
                    fill 
                    className="object-cover"
                  />
                </div>

                <div className="p-10">
                  <div className="mb-6">
                    <span className="text-[#F05529] font-bold text-lg">{selectedFleet.capacity}</span>
                    <h3 className="font-prompt text-3xl font-medium text-[#1A1A1A] mt-2">
                      {selectedFleet.name} Detail
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-secondaryText text-lg leading-relaxed mb-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>

                  <button 
                    onClick={() => setSelectedFleet(null)}
                    className="w-full bg-primaryOrange text-white py-4 rounded-3xl font-bold hover:bg-white hover:text-primaryOrange border-2 border-primaryOrange transition-all"
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