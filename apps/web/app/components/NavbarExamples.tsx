"use client";

import React from "react";
import { Navbar } from "@sume/ui/components/Navbar";

const Astra = () => {
  return (
    <div className="group relative inline-block">
      <span
        className="select-none tracking-wide text-lg md:text-xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-500 group-hover:to-cyan-400"
        aria-label="Astar"
      >
        Sume 
        <span className="relative">
          <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{"<"}</span>
          <span className="text-cyan-300 transition-all duration-300 group-hover:tracking-wider">Ui</span>
          <span className="absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">{"/>"}</span>
        </span>
      </span>
      
      {/* Animated cursor */}
      <span className="absolute -right-2 w-0.5 h-5 bg-purple-400 opacity-0 group-hover:opacity-100 animate-blink transition-opacity duration-300 delay-300" />
    </div>
  );
};

const NavbarExamples = () => {
  const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features"},
  { label: "Components", href: "#components"},
  { label: "Docs", href: "/docs"},
  { label: "Showcase", href: "#showcase"},
  // { label: "Pricing", href: "#pricing" }, // If applicable; remove if not needed
  // { label: "FAQ", href: "#faq", type: "link" },
  // { label: "Contact", href: "#contact", type: "link" }
];
  return (
    <Navbar
      logo={<Astra/>}
      className="bg-zinc-600 text-white"
      menuItems={menuItems}
    />
    
   
  );
};

export default NavbarExamples;
