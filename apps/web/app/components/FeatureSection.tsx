"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  LayoutGrid, ChevronRight, GalleryVerticalEnd, MousePointerClick,
  ListChecks, ToggleRight, Navigation, SidebarClose, AlertOctagon, TextCursorInput,
  ImagePlus, MoreHorizontal, SquareMousePointer, List, CircleUser, ListCollapse,
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
    icon: <GalleryVerticalEnd className="w-5 h-5" />,
  },
  {
    name: "Card",
    description: "Versatile content containers for any layout need",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    name: "Input",
    description: "Smart text fields with validation and suggestions",
    icon: <TextCursorInput className="w-5 h-5" />,
  },
  {
    name: "Button",
    description: "Interactive elements with beautiful hover effects",
    icon: <MousePointerClick className="w-5 h-5" />,
  },
  {
    name: "Navbar",
    description: "Responsive navigation with mobile-friendly menu",
    icon: <Navigation className="w-5 h-5" />,
  },
  {
    name: "Sidebar",
    description: "Collapsible navigation panel with smart transitions",
    icon: <SidebarClose className="w-5 h-5" />,
  },
  {
    name: "Badge",
    description: "Status indicators and notification markers",
    icon: <AlertOctagon className="w-5 h-5" />,
  },
  {
    name: "Textarea",
    description: "Multi-line inputs with auto-resize capability",
    icon: <ListChecks className="w-5 h-5" />,
  },
  {
    name: "Carousel",
    description: "Smooth-scrolling media galleries with gestures",
    icon: <ImagePlus className="w-5 h-5" />,
  },
  {
    name: "Kebab Menu",
    description: "Contextual actions in compact overflow menus",
    icon: <MoreHorizontal className="w-5 h-5" />,
  },
  {
    name: "Stepper Bar",
    description: "Progress tracking for multi-step workflows",
    icon: <List className="w-5 h-5" />,
  },
  {
    name: "MultiSelect Dropdown",
    description: "Tag-based selection with search and filtering",
    icon: <SquareMousePointer className="w-5 h-5" />,
  },
  {
    name: "Avatar",
    description: "User profiles with status indicators",
    icon: <CircleUser className="w-5 h-5" />,
  },
  {
    name: "Accordion",
    description: "Expandable sections with smooth animations",
    icon: <ListCollapse className="w-5 h-5" />,
  },
  {
    name: "Toggle",
    description: "Beautiful switches with animated transitions",
    icon: <ToggleRight className="w-5 h-5" />,
  },
  {
    name: "Progress Bar",
    description: "Animated indicators for loading and workflows",
    icon: <GalleryVerticalEnd className="w-5 h-5" />,
  }
];

export default function FeaturesSection() {
  const lenis = useLenis();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#features" && sectionRef.current && lenis) {
      lenis.scrollTo(sectionRef.current, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, [lenis]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Single subtle gradient orb */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            COMPONENT LIBRARY
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="block text-white mb-2">Build with</span>
            <span className="bg-gradient-to-r from-slate-200 via-blue-100 to-slate-200 bg-clip-text text-transparent">
              Crafted Components
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed"
          >
            Professional, accessible UI components with thoughtful animations and 
            comprehensive customization for modern React applications.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
                ease: [0.21, 1.11, 0.81, 0.99]
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl transition-all duration-300 group-hover:border-slate-700/70 group-hover:bg-slate-900/70">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center justify-center w-11 h-11 mb-4 bg-slate-800/80 border border-slate-700/50 rounded-lg text-slate-400 group-hover:text-slate-300 group-hover:border-slate-600/50 transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-slate-100 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Action */}
                  <button
                    onClick={() => {
                      if (lenis) {
                        const showcase = document.getElementById('showcase');
                        if (showcase) {
                          lenis.scrollTo(showcase, {
                            duration: 1.4,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                          });
                        }
                      }
                    }}
                    className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    See example
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (lenis) {
                const showcase = document.getElementById('showcase');
                if (showcase) {
                  lenis.scrollTo(showcase, {
                    duration: 1.6,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  });
                }
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <LayoutGrid className="w-5 h-5" />
            Explore Components
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
