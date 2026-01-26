"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    const baseClass = "transition-colors duration-200 hover:text-primaryGreen"; 
    const activeClass = "text-primaryGreen font-bold";
    const defaultClass = "text-[#8B8B8B]";

    return `${baseClass} ${isActive ? activeClass : defaultClass}`;
  };

  return (
    <header className="sticky left-0 top-0 z-50 bg-white/80 w-full backdrop-blur-md py-3 border-b border-gray-100">
      <div className="mx-auto h-15 max-w-7xl px-6 md:px-8 text-[16px]">
        <div className="flex items-center justify-between h-full">
          
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png" 
              alt="USI Petrotrans Energi"
              width={100}
              height={50}
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkClassName(link.href)}>
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 text-primaryGreen"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`${getLinkClassName(link.href)} text-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;