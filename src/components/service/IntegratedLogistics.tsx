"use client";

import { motion } from "framer-motion";
import { HardHat, Network, Users2 } from "lucide-react";

const IntegratedLogistics = () => {
  const steps = [
    {
      title: "Source & Supply Point",
      description: "We pick up high-standard fuel directly from Pertamina supply points and strategic storage facilities using our professional management system.",
      icon: <HardHat size={32} className="text-white" />,
    },
    {
      title: "Strategic Distribution Network",
      description: "Utilizing our exclusive fleet and optimized routing to navigate through urban and industrial areas, ensuring a smooth delivery process.",
      icon: <Network size={32} className="text-white" />,
    },
    {
      title: "Final Delivery (Customer's Site)",
      description: "Direct-to-site delivery for various sectors, including gas stations and industrial storage points, with guaranteed volume and quality.",
      icon: <Users2 size={32} className="text-white" />,
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        <div className="text-center mb-10">
          <h2 className="font-prompt text-3xl md:text-4xl font-medium text-[#1A1A1A] mb-4">
            Integrated Logistics
          </h2>
          <p className="text-secondaryText text-lg mx-auto leading-relaxed">
            Our Seamless Logistics Flow Sub-headline: An integrated end-to-end journey from source to your site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#F5F5F5] rounded-[30px] p-8 flex flex-col items-start min-h-100"
            >
              <div className="bg-[#2D4336] p-5 rounded-3xl mb-8 shadow-lg">
                {step.icon}
              </div>

              <h3 className="font-prompt text-2xl font-medium text-[#1A1A1A] mb-5 leading-tight">
                {step.title}
              </h3>

              <p className="text-secondaryText text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegratedLogistics;