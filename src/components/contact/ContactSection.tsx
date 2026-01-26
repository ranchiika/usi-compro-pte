"use client";

import React, { useMemo, useCallback } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface OfficeLocation {
  id: number;
  city: string;
  hotline: string;
  phone?: string;
  email: string;
  address: string;
  bgImage: string;
}

const ContactSection: React.FC = () => {
  const locations = useMemo<OfficeLocation[]>(() => [
    {
      id: 1,
      city: "SURABAYA",
      hotline: "08155-110-111",
      phone: "031-5471841",
      email: "info@ptusi.co.id",
      address: "Jl. Gondosuli no. 8 Surabaya.",
      bgImage: "/contact/surabaya.png",
    },
    {
      id: 2,
      city: "SAMARINDA",
      hotline: "0813-4743-6101",
      email: "info@ptusi.co.id",
      address: "jl. Untung suropati no 55-56",
      bgImage: "/contact/samarinda.png",
    },
  ], []);

  const handleContactAction = useCallback((type: 'tel' | 'mailto', value: string) => {
    window.location.href = `${type}:${value}`;
  }, []);

  return (
    <section className="py-8 px-6 bg-white overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-primaryOrange text-xl font-medium mb-4 block">
              Contact Us
            </span>
            <h2 className="font-prompt text-3xl md:text-4xl font-medium text-primaryText leading-tight">
              Ready to Power Your Business with Reliable Energy Solutions.
            </h2>
          </div>
          <p className="max-w-md font-sans text-secondaryText text-lg md:text-right md:mt-12 leading-relaxed">
            Our expert team is ready to discuss your cargo needs and provide a tailored logistics solution. Call or email us today to start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, index) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, scale: 0.95, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group h-112 overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${loc.bgImage})` }}
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-primaryOrange via-primaryOrange/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-10">
                <h3 className="text-3xl font-medium mb-8 tracking-wider">{loc.city}</h3>
                
                <div className="space-y-5 text-base md:text-lg">
                  <div 
                    className="flex items-start gap-4 hover:text-orange-300 transition-colors"
                    onClick={() => handleContactAction('tel', loc.hotline)}
                  >
                    <div className="bg-white/20 p-2 rounded-lg">
                        <Phone className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <p className="font-bold">Hotline. {loc.hotline}</p>
                      {loc.phone && <p className="text-sm opacity-80">{loc.phone}</p>}
                    </div>
                  </div>

                  <div 
                    className="flex items-center gap-4 hover:text-orange-300 transition-colors"
                    onClick={() => handleContactAction('mailto', loc.email)}
                  >
                    <div className="bg-white/20 p-2 rounded-lg">
                        <Mail className="w-5 h-5 shrink-0" />
                    </div>
                    <p className="font-medium">{loc.email}</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 shrink-0" />
                    </div>
                    <p className="leading-snug capitalize opacity-90">{loc.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
