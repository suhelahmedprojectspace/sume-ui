"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../../lib/cn";

type NavType = "link" | "dropdown";

export interface NavItem {
  label: string;
  href: string;
  type?: NavType;
  items?: Array<{ label: string; href: string }>;
}

interface NavbarProps {
  logo: React.ReactNode;
  menuItems: NavItem[];
  children?: React.ReactNode; // right-side content (e.g., button, search)
  sticky?: boolean;
  className?: string;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  menuItems,
  children,
  sticky = true,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Track scroll to add shadow
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  
  const handleDropdownKey = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Escape") {
      setOpenDropdown(null);
      (e.currentTarget as HTMLElement).blur();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === index ? null : index));
    }
    if (e.key === "ArrowDown") {
      // focus first item in dropdown if available
      const menu = document.getElementById(`menu-${index}`);
      if (menu) {
        const first = menu.querySelector<HTMLElement>('a[role="menuitem"]');
        first?.focus();
      }
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      ref={navRef}
      className={cn(
        "w-full bg-white dark:bg-gray-900 transition-shadow duration-300 z-50",
        sticky && "sticky top-0",
        hasScrolled && "shadow-md",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex flex-shrink-0 items-center">{logo}</div>

          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden md:flex items-center",
              // When no children, push nav to the right edge
              !children && "ml-auto",
              // When children exist, keep some gap and allow space for right-side area
              children && "ml-8"
            )}
            aria-label="Primary"
          >
            <ul className="flex items-center gap-3">
              {menuItems.map((item, index) => {
                const isDrop = item.type === "dropdown" && item.items?.length;
                return (
                  <li key={item.label} className="relative">
                    {isDrop ? (
                      <>
                        <button
                          type="button"
                          className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                          aria-haspopup="menu"
                          aria-expanded={openDropdown === index}
                          aria-controls={`menu-${index}`}
                          onClick={() =>
                            setOpenDropdown((prev) =>
                              prev === index ? null : index
                            )
                          }
                          onKeyDown={(e) => handleDropdownKey(e, index)}
                          onMouseEnter={() => setOpenDropdown(index)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <span>{item.label}</span>
                          <svg
                            className="ml-1 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {openDropdown === index && (
                            <motion.div
                              initial={
                                prefersReducedMotion
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -8 }
                              }
                              animate={{ opacity: 1, y: 0 }}
                              exit={
                                prefersReducedMotion
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -8 }
                              }
                              transition={{ duration: 0.16 }}
                              onMouseEnter={() => setOpenDropdown(index)}
                              onMouseLeave={() => setOpenDropdown(null)}
                              className="absolute left-0 mt-2 w-56 rounded-md border border-black/5 bg-white dark:bg-gray-800 shadow-lg focus:outline-none"
                              role="menu"
                              id={`menu-${index}`}
                              aria-label={`${item.label} submenu`}
                            >
                              <ul className="py-1">
                                {item.items!.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      role="menuitem"
                                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-zinc-600 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none transition-colors"
                                      onClick={closeMobileMenu}
                                    >
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-block px-3 py-2 rounded-md text-sm font-medium hover:text-zinc-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right-side area (children) */}
          <div className="hidden md:flex items-center gap-3">
            {children}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-zinc-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <motion.svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={
              prefersReducedMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-black/5 dark:border-white/10"
            aria-label="Mobile primary"
          >
            <ul className="px-2 pt-2 pb-3 space-y-2 sm:px-3 z-50">
              {menuItems.map((item, index) => {
                const isDrop = item.type === "dropdown" && item.items?.length;
                const isOpen = openDropdown === index;
                return (
                  <li key={item.label} className="mb-1 last:mb-0">
                    {isDrop ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                          aria-expanded={isOpen}
                          aria-controls={`mobile-menu-${index}`}
                          onClick={() =>
                            setOpenDropdown((prev) =>
                              prev === index ? null : index
                            )
                          }
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`h-5 w-5 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`mobile-menu-${index}`}
                              initial={
                                prefersReducedMotion
                                  ? { opacity: 1, height: "auto" }
                                  : { opacity: 0, height: 0 }
                              }
                              animate={{ opacity: 1, height: "auto" }}
                              exit={
                                prefersReducedMotion
                                  ? { opacity: 1, height: "auto" }
                                  : { opacity: 0, height: 0 }
                              }
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2"
                            >
                              {item.items!.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-zinc-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                                  onClick={closeMobileMenu}
                                  role="menuitem"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-zinc-600 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}

              {/* Optional mobile children */}
              {children && (
                <li className="pt-2 border-t border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-2 px-3 py-2">
                    {children}
                  </div>
                </li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};