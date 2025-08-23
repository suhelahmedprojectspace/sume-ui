'use client';
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import cn from "../../lib/cn";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | number | (string | number)[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  onChange: (value: string | number | (string | number)[]) => void;
  className?: string;
  searchable?: boolean;
  multiSelect?: boolean;
  size?: "sm" | "md" | "lg" |"xl";
  variant?: "outline" | "filled" | "ghost";
}

const DropDown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      searchable,
      multiSelect,
      placeholder = "Select...",
      options,
      value,
      label,
      onChange,
      disabled = false,
      size = "md",
      variant = "outline",
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const selectedValues = useMemo(() => {
      if (multiSelect) {
        return new Set(Array.isArray(value) ? value : []);
      }
      return new Set(value !== undefined ? [value] : []);
    }, [value, multiSelect]);

    const filteredOptions = useMemo(() => {
      if (!searchTerm.trim()) return options;
      return options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [options, searchTerm]);

    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
          setSearchTerm("");
        }
      };
      
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false);
          setSearchTerm("");
        }
      };

      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        if (searchable && searchRef.current) {
          searchRef.current.focus();
        }
      }
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [open, searchable]);

    const toggleOption = useCallback(
      (val: string | number) => {
        if (!multiSelect) {
          onChange(val);
          setOpen(false);
          return;
        }
        
        const currentValues = Array.isArray(value) ? [...value] : [];
        const valueSet = new Set(currentValues);
        
        if (valueSet.has(val)) {
          valueSet.delete(val);
        } else {
          valueSet.add(val);
        }
        
        onChange(Array.from(valueSet));
      },
      [multiSelect, onChange, value]
    );

    const clearSelection = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      onChange(multiSelect ? [] : "");
    }, [multiSelect, onChange]);

    const displayLabel = useMemo(() => {
      if (multiSelect) {
        const selected = Array.isArray(value) ? value : [];
        if (selected.length === 0) return placeholder;
        if (selected.length === 1) {
          return options.find((o) => o.value === selected[0])?.label || placeholder;
        }
        return `${selected.length} selected`;
      }
      return value !== undefined 
        ? options.find((o) => o.value === value)?.label || placeholder
        : placeholder;
    }, [value, options, placeholder, multiSelect]);

    // Size classes
    const sizeClasses = {
      sm: "text-sm py-1.5 px-3 w-32",
      md: "text-base py-2 px-4 w-48",
      lg: "text-lg py-2 px-4 w-64",
      xl:"py-2 px-4 w-80"
    };

    // Variant classes
    const variantClasses = {
      outline: "bg-white border border-gray-300 hover:border-gray-400",
      filled: "bg-gray-100 border border-transparent hover:bg-gray-200",
      ghost: "bg-transparent border border-transparent hover:bg-gray-100",
    };

    return (
      <div ref={ref} className={cn("relative w-full", className)}>
        {label && (
          <label
            htmlFor="dropdown-button"
            className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <button
            id="dropdown-button"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            disabled={disabled}
            ref={buttonRef}
            className={cn(
              "w-full rounded-md flex items-center justify-between cursor-pointer",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              "transition-all duration-200",
              sizeClasses[size],
              variantClasses[variant],
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => !disabled && setOpen((o) => !o)}
          >
            <div className="flex flex-wrap items-center gap-1.5 flex-1 overflow-hidden">
              {multiSelect && Array.isArray(value) && value.length > 0 ? (
                value.map((val) => {
                  const item = options.find((o) => o.value === val);
                  if (!item) return null;
                  return (
                    <motion.span
                      key={String(val)}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center border border-gray-200 gap-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                    >
                      {item.icon && <span className="text-xs">{item.icon}</span>}
                      <span className="truncate max-w-[100px]">{item.label}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleOption(val);
                        }}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                      >
                        <X size={14} />
                      </button>
                    </motion.span>
                  );
                })
              ) : (
                <span className={cn(
                  "truncate",
                  value === undefined && "text-gray-400 dark:text-gray-500"
                )}>
                  {displayLabel}
                </span>
              )}
            </div>

            <div className="flex items-center ml-2">
              {(multiSelect ? (Array.isArray(value) && value.length > 0) : value !== undefined) && (
                <button
                  type="button"
                  onClick={clearSelection}
                  className="text-gray-400 hover:text-gray-600 mr-1"
                >
                  <X size={16} />
                </button>
              )}
              <ChevronDown
                size={18}
                className={cn(
                  "text-gray-500 transition-transform duration-200",
                  open && "transform rotate-180"
                )}
              />
            </div>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-64 overflow-auto"
              >
                {searchable && (
                  <div className="sticky top-0 bg-white dark:bg-gray-800 p-2 border-b border-gray-200 dark:border-gray-700 z-10">
                    <input
                      ref={searchRef}
                      type="search"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-800"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                )}

                {filteredOptions.length === 0 ? (
                  <div className="p-3 text-center text-gray-500 dark:text-gray-400 text-sm">
                    No results found
                  </div>
                ) : (
                  <ul
                    role="listbox"
                    aria-multiselectable={multiSelect}
                    className="py-1"
                  >
                    {filteredOptions.map((option) => {
                      const selected = selectedValues.has(option.value);
                      return (
                        <motion.li
                          key={String(option.value)}
                          role="option"
                          aria-selected={selected}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 select-none cursor-pointer",
                            "hover:bg-primary-50/50 dark:hover:bg-gray-700 transition-colors duration-150",
                            selected && "bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-primary-400",
                            option.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
                          )}
                          onClick={() => !option.disabled && toggleOption(option.value)}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              if (!option.disabled) toggleOption(option.value);
                            }
                          }}
                        >
                          {multiSelect && (
                            <div className="flex-shrink-0">
                              <input
                                type="checkbox"
                                checked={selected}
                                readOnly
                                tabIndex={-1}
                                className={cn(
                                  "w-4 h-4 rounded text-primary-600 dark:text-primary-400 focus:ring-primary-500",
                                  "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                )}
                              />
                            </div>
                          )}
                          {option.icon && (
                            <span className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                              {option.icon}
                            </span>
                          )}
                          <span className="truncate">{option.label}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

DropDown.displayName = "DropDown";
export { DropDown };