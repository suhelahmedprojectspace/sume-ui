"use client";

import React from "react";
import { Navbar } from "@sume/ui/components/Navbar";

const SumeUILogo = () => (
  <div className="group relative inline-block">
    <span
      className="select-none tracking-wide text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:from-blue-400 group-hover:to-cyan-400"
      aria-label="SumeUI"
    >
      Sume
      <span className="text-cyan-300 group-hover:text-blue-300 transition-colors duration-300">
        Ui
      </span>
    </span>
    
    {/* Subtle animated cursor */}
    <span className="absolute -right-2 top-1 w-0.5 h-5 bg-cyan-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
  </div>
);

const NavbarExamples = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Components", href: "#components" },
    { label: "Docs", href: "/docs" },
    { label: "Showcase", href: "#showcase" },
  ];

  return (
    <>
      {/* Add global styles for elegant navbar theming */}
      <style jsx global>{`
        /* Target the Navbar component with elegant glassmorphism styling */
        header {
          background: rgba(2, 6, 23, 0.85) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border-bottom: 1px solid rgba(100, 116, 139, 0.2) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
        }

        /* Style the navigation links */
        header nav ul li a {
          color: rgb(203, 213, 225) !important;
          font-weight: 500 !important;
          letter-spacing: 0.025em !important;
          padding: 0.75rem 1rem !important;
          border-radius: 0.5rem !important;
          position: relative !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        /* Elegant hover effects */
        header nav ul li a:hover {
          color: rgb(147, 197, 253) !important;
          background-color: rgba(30, 41, 59, 0.4) !important;
          transform: translateY(-1px) !important;
        }

        /* Animated underline on hover */
        header nav ul li a::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 2px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #22d3ee, #3b82f6);
          border-radius: 1px;
          transform: translateX(-50%);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        header nav ul li a:hover::after {
          width: 32px;
        }

        /* Mobile menu button styling */
        header button {
          color: rgb(203, 213, 225) !important;
          padding: 0.5rem !important;
          border-radius: 0.5rem !important;
          transition: all 0.2s ease !important;
        }

        header button:hover {
          color: rgb(147, 197, 253) !important;
          background-color: rgba(30, 41, 59, 0.4) !important;
        }

        /* Mobile menu styling */
        header nav[aria-label="Mobile primary"] {
          background: rgba(2, 6, 23, 0.95) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border-top: 1px solid rgba(100, 116, 139, 0.15) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }

        /* Mobile menu items */
        header nav[aria-label="Mobile primary"] a {
          color: rgb(203, 213, 225) !important;
          padding: 1rem 1.5rem !important;
          transition: all 0.2s ease !important;
          border-bottom: 1px solid rgba(100, 116, 139, 0.08) !important;
        }

        header nav[aria-label="Mobile primary"] a:hover {
          color: rgb(147, 197, 253) !important;
          background-color: rgba(30, 41, 59, 0.3) !important;
        }

        /* Dropdown menus */
        header div[role="menu"] {
          background: rgba(15, 23, 42, 0.95) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(100, 116, 139, 0.15) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
          border-radius: 0.75rem !important;
        }

        header div[role="menu"] a {
          color: rgb(203, 213, 225) !important;
          padding: 0.75rem 1rem !important;
          transition: all 0.2s ease !important;
        }

        header div[role="menu"] a:hover {
          color: rgb(147, 197, 253) !important;
          background-color: rgba(30, 41, 59, 0.4) !important;
        }

        /* Scroll enhancement */
        header.shadow-md {
          background: rgba(2, 6, 23, 0.95) !important;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2) !important;
        }

        /* Remove default background override */
        header.bg-zinc-900 {
          background: rgba(2, 6, 23, 0.85) !important;
        }
      `}</style>

      <Navbar
        logo={<SumeUILogo />}
        className="bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/20 shadow-lg"
        menuItems={menuItems}
        sticky={true}
      />
    </>
  );
};

export default NavbarExamples;
