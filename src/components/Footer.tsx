"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = useMemo(() => ({
    about: [
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Goals & Objectives", href: "/about#goals" },
      { name: "History & Parent Company", href: "/about#history" },
    ],
    services: [
      { name: "Trucking Solutions", href: "/services/trucking" },
      { name: "Integrated Logistics", href: "/services/logistics" },
      { name: "Fleet Overview", href: "/services/fleet" },
      { name: "One-Stop Solution Concept", href: "/services/solution" },
    ],
    contact: [
      { city: "Surabaya:", phone: "08155-110-111" },
      { city: "Samarinda:", phone: "0813-4743-6101" },
    ]
  }), []);

  return (
    <footer className="w-full bg-[#F5F5F5] pt-16 font-sans border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div className="md:col-span-4 space-y-6">
          <div className="relative w-48 h-25">
            <Image 
              src="/logo.png" 
              alt="USI Petrotrans Energi Logo" 
              fill 
              className="object-contain object-left" 
            />
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-[#1A1A1A] text-lg">What we do?</h4>
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xs">
              We provide tailored made liquid bulk shipping services. With liquid cargo specialists, we handle diverse range of liquid products.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-[#1A1A1A] text-md">About PTE</h4>
          <ul className="space-y-3">
            {footerLinks.about.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-[#4A4A4A] text-sm hover:text-primaryOrange transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-[#1A1A1A] text-md">Services</h4>
          <ul className="space-y-3">
            {footerLinks.services.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-[#4A4A4A] text-sm hover:text-primaryOrange transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-[#1A1A1A] text-md">Contact us</h4>
          <div className="space-y-4">
            {footerLinks.contact.map((item) => (
              <div key={item.city} className="text-sm text-[#4A4A4A]">
                <p className="font-bold text-[#1A1A1A]">{item.city}</p>
                <p>Hotline: {item.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-[#1A1A1A] text-md">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <Link 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#2F3E3B] flex items-center justify-center text-white hover:bg-primaryOrange transition-colors shadow-sm"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-primaryOrange py-5 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm font-medium">
            © 2026 USI Petrotrans Energi. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/90 text-sm font-medium">
            <Link href="#" className="hover:text-white transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;