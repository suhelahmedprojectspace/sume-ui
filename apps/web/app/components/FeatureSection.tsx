"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
// import { useLenis } from "@studio-freight/react-lenis";
import {
  LayoutGrid, SlidersHorizontal, SquareTerminal, Menu, PanelLeft, BadgeCheck,
  FileText, Images, MoreVertical, ScrollText, Users2, ChevronRight, Boxes, User, ListPlus,
  GalleryVerticalEnd, MousePointerClick, ListChecks, ToggleRight, Navigation, SidebarClose,
  AlertOctagon, TextCursorInput, ImagePlus, MoreHorizontal, SquareMousePointer,List, CircleUser, ListCollapse
} from "lucide-react";

type Feature = {
  name: string;
  description: string;
  icon: React.ReactNode;
  demo?: React.ReactNode;
};

const features: Feature[] = [
  {
    name: "Modal",
    description: "Elegant overlays for dialogs, confirmations, and alerts",
    icon: <GalleryVerticalEnd className="w-6 h-6 text-purple-500" />,
  },
  {
    name: "Card",
    description: "Versatile content containers for any layout need",
    icon: <LayoutGrid className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Input",
    description: "Smart text fields with validation and suggestions",
    icon: <TextCursorInput className="w-6 h-6 text-emerald-400" />,
  },
  {
    name: "Button",
    description: "Interactive elements with beautiful hover effects",
    icon: <MousePointerClick className="w-6 h-6 text-indigo-500" />,
  },
  {
    name: "Navbar",
    description: "Responsive navigation with mobile-friendly menu",
    icon: <Navigation className="w-6 h-6 text-cyan-500" />,
  },
  {
    name: "Sidebar",
    description: "Collapsible navigation panel with smart transitions",
    icon: <SidebarClose className="w-6 h-6 text-zinc-500" />,
  },
  {
    name: "Badge",
    description: "Status indicators and notification markers",
    icon: <AlertOctagon className="w-6 h-6 text-pink-500" />,
  },
  {
    name: "Textarea",
    description: "Multi-line inputs with auto-resize capability",
    icon: <ListChecks className="w-6 h-6 text-yellow-500" />,
  },
  {
    name: "Carousel",
    description: "Smooth-scrolling media galleries with gestures",
    icon: <ImagePlus className="w-6 h-6 text-orange-500" />,
  },
  {
    name: "Kebab Menu",
    description: "Contextual actions in compact overflow menus",
    icon: <MoreHorizontal className="w-6 h-6 text-gray-400" />,
  },
  {
    name: "Stepper Bar",
    description: "Progress tracking for multi-step workflows",
    icon: <List className="w-6 h-6 text-teal-400" />,
  },
  {
    name: "MultiSelect Dropdown",
    description: "Tag-based selection with search and filtering",
    icon: <SquareMousePointer className="w-6 h-6 text-lime-500" />,
  },
  {
    name: "Avatar",
    description: "User profiles with status indicators",
    icon: <CircleUser className="w-6 h-6 text-sky-500" />,
  },
  {
    name: "Accordion",
    description: "Expandable sections with smooth animations",
    icon: <ListCollapse className="w-6 h-6 text-red-400" />,
  },
  {
    name: "Toggle",
    description: "Beautiful switches with animated transitions",
    icon: <ToggleRight className="w-6 h-6 text-violet-500" />,
  },
  {
    name: "Progress Bar",
    description: "Animated indicators for loading and workflows",
    icon: <GalleryVerticalEnd className="w-6 h-6 text-amber-500" />,
  }
];

export default function FeaturesSection() {
  const lenis = useLenis();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll to this section if in URL hash
  useEffect(() => {
    if (window.location.hash === "#features" && sectionRef.current && lenis) {
      lenis.scrollTo(sectionRef.current, {
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, [lenis]);

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="relative py-24 bg-gradient-to-br from-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse-medium" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            COMPONENT LIBRARY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
          >
            <span className="block">Build with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
              Supercharged Components
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl text-gray-400"
          >
            Professionally crafted, accessible UI components with smooth animations and 
            fully customizable styles for your React applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: i * 0.05, 
                duration: 0.6, 
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px -15px rgba(99, 102, 241, 0.3)"
              }}
              className="group relative rounded-xl bg-gray-800/50 border border-gray-700 p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="rounded-lg h-12 w-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:bg-indigo-500/20 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-indigo-300 transition-colors">
                    {feature.name}
                  </h3>
                </div>
                
                <div className="mb-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </div>
                
                <div className="pt-2">
                  <button 
                    className="text-sm text-indigo-400 flex items-center gap-1 group-hover:text-indigo-300 transition-colors"
                   onClick={() => {
    if (lenis) {
      const showcase = document.getElementById('showcase');
      if (showcase) {
        lenis.scrollTo(showcase, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  }}
                  >
                    See example
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            onClick={() => {
    if (lenis) {
      const showcase = document.getElementById('showcase');
      if (showcase) {
        lenis.scrollTo(showcase, {
          duration: 1.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  }}
          >
            <LayoutGrid className="w-5 h-5" />
            View Component Showcase
          </button>
        </motion.div>
      </div>
    </section>
  );
}