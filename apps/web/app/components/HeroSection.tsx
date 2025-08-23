"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Github, Copy, Check, Terminal } from 'lucide-react';

const HERO_ACCENT = "from-blue-400 via-indigo-500 to-blue-600";

export default function HeroSection() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    }

    const element = ref.current;
    
    if (element) {
      element.addEventListener("mousemove", handle);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handle);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npm install @sume/ui');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 overflow-hidden px-4 text-center"
    >
      {/* Muted radial accent bg */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(800px 500px at ${cursor.x}px ${cursor.y}px, rgba(56,189,248,0.14) 0%, transparent 80%)`,
        }}
      />

      {/* Subtle illustration accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[12vh] right-[18vw] w-[340px] h-[340px] rounded-full bg-blue-500/20 blur-3xl z-0"
      />

      {/* Gentle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '42px 42px',
        }}
      />

      {/* Animated floating dots, staged */}
      {[0,1,2,3].map(i => (
        <motion.div
          key={i}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            top: `${30 + i*15}%`,
            left: `${10 + i*18}%`,
            width: `${8 + i*3}px`,
            height: `${8 + i*3}px`
          }}
          initial={{ scale: 0.7, y: 0 }}
          animate={{
            scale: [0.7, 1.14, 0.7],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-7 bg-slate-900/80 ring-1 ring-inset ring-blue-500/10 rounded-full text-blue-200 font-medium text-xs shadow-lg"
        >
          <Star className="w-4 h-4 text-amber-300" fill="currentColor" />
          <span className="tracking-widest">VERSION 1.0 RELEASED</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white"
        >
          <span>Designing at the </span>
          <span className={`bg-gradient-to-r ${HERO_ACCENT} bg-clip-text text-transparent animate-gradient-move`}>
            speed of light
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.27 }}
          className="max-w-2xl mx-auto text-base md:text-xl text-slate-300 mb-8"
        >
          <span className="text-blue-300 font-semibold">Sume UI</span> is a modern React component library—minimal, accessible, and <span className="text-blue-200 font-semibold">fully customizable</span>. Build professional apps visually fast—<span className="italic text-indigo-300 font-medium">without design drama</span>—and ship to production at next-gen speed.
        </motion.p>

        {/* NPM Install Command */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mb-8 w-full max-w-lg"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center justify-between bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-slate-400" />
                <code className="text-slate-300 font-mono text-sm md:text-base">
                  npm install @sume/ui
                </code>
              </div>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
                aria-label="Copy install command"
              >
                <motion.div
                  initial={false}
                  animate={copied ? "copied" : "default"}
                  variants={{
                    default: { opacity: 1, scale: 1 },
                    copied: { opacity: 1, scale: 1.1 }
                  }}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400 hover:text-blue-400" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-center text-sm text-green-400 mt-2"
            >
              Copied to clipboard!
            </motion.p>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://sume-ui-storybook-ohcn.vercel.app/?path=/docs/introduction--docs"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all group"
          >
            Get Started
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
          <motion.a
            whileHover={{ y: -1, borderColor: "#60a5fa" }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/suhelahmedprojectspace/sume-ui.git"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 bg-transparent ring-1 ring-slate-800 hover:ring-blue-400 text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Gradient bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-700/20 to-transparent pointer-events-none" />
    </section>
  );
}
