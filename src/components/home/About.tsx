"use client";

import { motion } from "framer-motion";

const About = () => {
  const pillars = [
    "Safety First",
    "Trusted Partner",
    "Operational Excellence",
    "National Reach",
  ];

  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-primaryOrange px-8 py-2 mb-8"
        >
          <span className="font-sans text-white font-medium text-sm md:text-base">
            Our Legacy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-prompt text-4xl md:text-5xl lg:text-4xl font-medium text-black leading-tight mb-5"
        >
          A Strategic Extension of Maritime Excellence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-secondaryText text-lg md:text-l leading-relaxed max-w-4xl mx-auto mb-12"
        >
          Established as the land logistics specialist for PT United Shipping
          Indonesia (USI), we bring over a decade of prestigious maritime
          experience to the road. We bridge the gap between energy sources and
          industrial needs through professional management and proven
          reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="rounded-full bg-primaryGreen px-8 py-3 shadow-sm"
            >
              <span className="font-sans font-medium text-base md:text-lg text-white">
                {pillar}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
