"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Zap, Github, Palette, LayoutGrid, Rocket, Code, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-950 items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99, 102, 241, 0.2) 0px, transparent 70%)`
        }}
      />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse-medium" />
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl">
        {/* Animated logo/badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border border-indigo-400/30 shadow-lg shadow-indigo-500/20"
        >
          <Star className="w-4 h-4 text-amber-300" fill="currentColor" />
          <span className="text-sm font-medium tracking-wider text-white">
            VERSION 1.0 RELEASED
          </span>
        </motion.div>
        
        {/* Animated headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          <span className="inline-block mr-2">Designing at the</span>
          <motion.span
            className="inline-block bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%",
              backgroundImage: "linear-gradient(45deg, #38bdf8, #3b82f6, #38bdf8)",
            }}
          >
            Speed
          </motion.span>
          <span className="inline-block mx-2">of</span>
          <motion.span 
            className="inline-block bg-yellow-300 text-gray-900 px-4 py-2 rounded-lg shadow-lg"
            animate={{ 
              rotate: [0, 2, -2, 2, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Light
          </motion.span>
        </motion.h1>

        {/* Animated description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
        >
          <span className="bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text font-semibold">
            Sume UI
          </span>{" "}
          is your modern{" "}
          <span className="underline decoration-wavy decoration-sky-400">
            React component library
          </span>{" "}
          — sleek, accessible, and{" "}
          <span className="bg-green-200 text-green-900 px-2 py-1 rounded">
            fully customizable
          </span>
          . Build apps that look{" "}
          <span className="italic font-semibold text-purple-400">
            stellar
          </span>{" "}
          without touching a{" "}
          <span className="bg-orange-200 text-orange-900 px-2 py-1 rounded">
            design tool
          </span>
          , and ship them{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text font-bold">
            faster than ever
          </span>
          .
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 group"
          >
            Get Started
            <motion.span 
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-800 text-white font-medium rounded-xl border border-gray-700 flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </motion.button>
        </motion.div>

        {/* Stats / Carousel preview */}
       
      
      {/* Gradient bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />
    </div>
    </div>
  );
};

export default HeroSection;