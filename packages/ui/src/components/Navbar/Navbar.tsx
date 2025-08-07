"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import ReactDOM from "react-dom";
import cn from "../../lib/cn";
import { HamburgerIcon } from "./Hamburger";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavbarLink = {
  label: string;
  href?: string;
  active?: boolean;
  children?: NavbarLink[];
};

interface NavbarProps {
  links: NavbarLink[];
  logo?: ReactNode | string;
  className?: string;
  children?: ReactNode;
}

const menuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.5,
      when: "beforeChildren"
    }
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring"as const,
      stiffness: 300,
      damping: 30,
      mass: 0.5,
      when: "afterChildren"
    }
  }
};

const dropdownVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.5
    }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.5
    }
  }
};

const backdropVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const
    }
  }
};

const MobileMenuPortal = ({ children }: { children: React.ReactNode }) => {
  if (typeof window === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
};

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, logo, links, children, ...props }, ref) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<Record<number, boolean>>({});

    const toggleMobileDropdown = (index: number) => {
      setMobileDropdownOpen((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };

    return (
      <>
        <AnimatePresence>
          {mobileOpen && (
            <MobileMenuPortal>
              <motion.div
                variants={backdropVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
              />
            </MobileMenuPortal>
          )}
        </AnimatePresence>

        <header
          ref={ref}
          className={cn("fixed top-0 left-0 right-0 bg-white border-b border-gray-200  p-4", className)}
          {...props}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <div>
              {typeof logo === "string" ? (
                <img src={logo} alt="Logo" className="h-5 w-auto object-contain" />
              ) : (
                logo
              )}
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center gap-6" role="menubar" aria-label="Primary navigation">
              {links.map((link, idx) => {
                if (link.children && link.children.length > 0) {
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setDropdownOpenIndex(idx)}
                      onMouseLeave={() => setDropdownOpenIndex(null)}
                      tabIndex={0}
                      onFocus={() => setDropdownOpenIndex(idx)}
                      onBlur={() => setDropdownOpenIndex(null)}
                      role="presentation"
                    >
                      <button
                        aria-haspopup="true"
                        aria-expanded={dropdownOpenIndex === idx}
                        className={cn(
                          "relative text-sm font-medium text-gray-700 flex items-center gap-1 rounded-md outline-none px-1 py-1 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-600 before:transition-all before:duration-300",
                          dropdownOpenIndex === idx && "before:w-full"
                        )}
                        type="button"
                        role="menuitem"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            dropdownOpenIndex === idx ? "rotate-180 text-primary-600" : "text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      
                      <AnimatePresence>
                        {dropdownOpenIndex === idx && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "absolute right-0 bg-white rounded-lg py-2 shadow-lg mt-2 min-w-[12rem] max-w-[calc(90vw-2rem)] overflow-x-auto z-40",
                            )}
                            role="menu"
                            aria-label={`${link.label} submenu`}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || "#"}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:bg-gray-200"
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href || "#"}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium text-gray-700 rounded-md outline-none px-1 py-1 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-600 before:transition-all before:duration-300",
                      link.active && "before:w-full",
                      !link.active && "hover:before:w-full"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
             {children}   
            </nav>

            {/* Hamburger for mobile */}
            <div className="md:hidden relative z-50">
              <HamburgerIcon
                isOpen={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
                size={24}
                color="#444"
              />
          
            </div>
          </div>
        </header>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <MobileMenuPortal>
              <motion.nav
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-screen z-50 bg-white shadow-lg p-6 overflow-y-auto"
                style={{ width: "75vw", maxWidth: 320, minWidth: 240 }}
                aria-label="Mobile navigation"
              >
                {links.map((link, idx) => {
                  if (link.children && link.children.length > 0) {
                    const isOpen = mobileDropdownOpen[idx] || false;
                    return (
                      <div key={link.label} className="mb-6">
                        <button
                          onClick={() => toggleMobileDropdown(idx)}
                          aria-expanded={isOpen}
                          aria-controls={`mobile-submenu-${idx}`}
                          type="button"
                          className="w-full flex justify-between items-center text-base font-medium p-2 rounded hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 transition"
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              isOpen ? "rotate-180 text-primary-600" : "text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              id={`mobile-submenu-${idx}`}
                              className="pl-4 mt-2 flex flex-col gap-2"
                              variants={dropdownVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              role="menu"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href || "#"}
                                  className="text-base font-normal p-2 rounded hover:bg-gray-100 focus-visible:outline-none focus-visible:bg-gray-200 transition"
                                  role="menuitem"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href || "#"}
                      className="text-base font-medium p-4 block hover:underline"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
               {children}
              </motion.nav>
            </MobileMenuPortal>
          )}
        </AnimatePresence>

        <style>{`
          @keyframes fade-slide-down {
            0% {
              opacity: 0;
              transform: translateY(-0.25rem);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-slide-down {
            animation: fade-slide-down 0.3s ease forwards;
          }

          /* primary color example */
          .text-primary-600 {
            color: #4f46e5;
          }
          .hover\\:text-primary-600:hover {
            color: #4f46e5;
          }
          .focus-visible\\:ring-primary-600:focus-visible {
            --tw-ring-color: #4f46e5;
          }
          .focus-visible\\:bg-gray-200:focus-visible {
            background-color: #e5e7eb;
          }
          .hover\\:bg-gray-100:hover {
            background-color: #f3f4f6;
          }
          .focus-visible\\:outline-none:focus-visible {
            outline: none;
          }
        `}</style>
      </>
    );
  }
);

Navbar.displayName = "Navbar";