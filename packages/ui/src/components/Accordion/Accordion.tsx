"use client";
import React, { useState, useRef, KeyboardEvent, createContext, useContext, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cn from "../../lib/cn";

export type AccordionProps = {
  children: React.ReactNode;
  /**
   * true = multiple items expandable
   * false = single-expand mode
   */
  multiple?: boolean;
  /**
   * Indexes of items open by default
   */
  defaultOpenIndexes?: number[];
  className?: string;
  /**
   * Visual style variant
   */
  variant?: "default" | "minimal" | "cards";
  /**
   * Show expand/collapse all buttons
   */
  showControls?: boolean;
};

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  chevronPosition?: "left" | "right";
};

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
  animateContent?: boolean;
};

type AccordionContextType = {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
  multiple: boolean;
  handleKeyDown: (e: KeyboardEvent, index: number) => void;
  setHeaderRef: (index: number, ref: HTMLButtonElement | null) => void;
  variant: "default" | "minimal" | "cards" ;
  expandAll: () => void;
  collapseAll: () => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<number | null>(null);

const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
} = ({ 
  children, 
  multiple = false, 
  defaultOpenIndexes = [], 
  className,
  variant = "default",
  showControls = false
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);
  const headersRef = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndexes((current) => {
      if (multiple) {
        return current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
      } else {
        return current.includes(index) ? [] : [index];
      }
    });
  }, [multiple]);

  const expandAll = useCallback(() => {
    setOpenIndexes(Array.from({ length: React.Children.count(children) }, (_, i) => i));
  }, [children]);

  const collapseAll = useCallback(() => {
    setOpenIndexes([]);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        headersRef.current[(index + 1) % React.Children.count(children)]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        headersRef.current[(index - 1 + React.Children.count(children)) % React.Children.count(children)]?.focus();
        break;
      case "Home":
        e.preventDefault();
        headersRef.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        headersRef.current[React.Children.count(children) - 1]?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        toggleIndex(index);
        break;
      case "a":
        if (e.ctrlKey && multiple) {
          e.preventDefault();
          expandAll();
        }
        break;
      case "Escape":
        e.preventDefault();
        collapseAll();
        break;
    }
  }, [children, toggleIndex, multiple, expandAll, collapseAll]);

  const setHeaderRef = useCallback((index: number, ref: HTMLButtonElement | null) => {
    headersRef.current[index] = ref;
  }, []);

  const contextValue: AccordionContextType = {
    openIndexes,
    toggleIndex,
    multiple,
    handleKeyDown,
    setHeaderRef,
    variant,
    expandAll,
    collapseAll
  };

  const containerClasses = {
    default: "divide-y divide-gray-200/80 dark:divide-gray-800/80 rounded border border-gray-200 dark:border-gray-800 ",
    minimal: "space-y-1",
    cards: "space-y-4",
    // glass: "space-y-4  bg-white/50 dark:bg-gray-900/20 rounded dark:border-gray-800/50 shadow"
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className}>
        {showControls && multiple && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Collapse All
            </button>
          </div>
        )}
        
        <div className={containerClasses[variant]}>
          {React.Children.map(children, (child, index) => (
            <AccordionItemContext.Provider value={index}>
              {child}
            </AccordionItemContext.Provider>
          ))}
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ children, className }) => {
  const context = useContext(AccordionContext);
  const index = useContext(AccordionItemContext);
  const variant = context?.variant || "default";
  
  const isOpen = index !== null && context?.openIndexes.includes(index);
  
  const itemClasses = {
    default: "transition-all duration-300",
    minimal: "border-b border-gray-200/60 dark:border-gray-800/60 pb-1",
    cards: cn(
      "bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-800 shadow transition-all duration-300",
     
    ),
    // glass: cn(
    //   "dark:bg-gray-900/40 backdrop-blur-md rounded-xl dark:border-gray-800/50 shadow-lg transition-all duration-300",
    //   isOpen && "bg-white/70 dark:bg-gray-900/70 shadow-xl"
    // )
  };
  
  return (
    <div className={cn(itemClasses[variant], className)}>
      {children}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ 
  children, 
  className, 
  icon,
  chevronPosition = "right"
}) => {
  const index = useContext(AccordionItemContext);
  const context = useContext(AccordionContext);
  
  if (index === null || context === null) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }
  
  const { openIndexes, toggleIndex, handleKeyDown, setHeaderRef, variant } = context;
  const isOpen = openIndexes.includes(index);
  const controls = useAnimation();
  
  const setRef = (ref: HTMLButtonElement | null) => {
    setHeaderRef(index, ref);
  };

  const triggerClasses = {
    default: cn(
      "flex w-full justify-between items-center px-5 py-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 rounded-lg",
      isOpen && "bg-gray-50 dark:bg-gray-800/30"
    ),
    minimal: cn(
      "flex w-full justify-between items-center py-3 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 bg-transparent hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300",
      isOpen && "text-indigo-600 dark:text-indigo-400"
    ),
    cards: cn(
      "flex w-full justify-between items-center px-5 py-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300 rounded-lg",
      isOpen && "bg-gray-50 dark:bg-gray-800/30"
    ),
    // glass: cn(
    //   "flex w-full justify-between items-center px-5 py-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 bg-white/30 dark:bg-gray-900/30 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300 rounded-lg",
    //   isOpen && "bg-white/70 dark:bg-gray-900/70"
    // )
  };

  const handleClick = async () => {
    if (index !== undefined) {
      await controls.start({ scale: 0.95 });
      await controls.start({ scale: 1 });
      toggleIndex(index);
    }
  };

  return (
    <h3 className="m-0">
      <motion.button
        ref={setRef}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e, index)}
        aria-expanded={isOpen}
        className={cn(
          triggerClasses[variant], 
          className, 
          "group",
          chevronPosition === "left" ? "flex-row-reverse" : ""
        )}
        style={{ minHeight: 48 }}
        animate={controls}
        // whileHover={{ scale: 1.02 }}
        // whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {chevronPosition === "left" && (
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mr-3 flex items-center justify-center"
          >
            {icon || (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
            )}
          </motion.span>
        )}
        
        <span className={cn(
          "text-gray-900 dark:text-white transition-colors duration-300",
          variant === "minimal" && "font-semibold",
          isOpen && variant === "minimal" ? "text-indigo-600 dark:text-indigo-400" : "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        )}>
          {children}
        </span>
        
        {chevronPosition === "right" && (
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-3 flex items-center justify-center"
          >
            {icon || (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
            )}
          </motion.span>
        )}
      </motion.button>
    </h3>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({ 
  children, 
  className,
  animateContent = true
}) => {
  const index = useContext(AccordionItemContext);
  const context = useContext(AccordionContext);
  
  if (index === null || context === null) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }
  
  const { openIndexes, variant } = context;
  const isOpen = openIndexes.includes(index);

  const contentClasses = {
    default: "overflow-hidden px-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300",
    minimal: "overflow-hidden bg-transparent text-gray-700 dark:text-gray-300",
    cards: "overflow-hidden px-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300",
    // glass: "overflow-hidden px-5 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm text-gray-700 dark:text-gray-300"
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.section
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.65, 0, 0.35, 1],
            opacity: { duration: 0.3 }
          }}
          className={cn(
            contentClasses[variant], 
            className,
            "relative"
          )}
          style={{ willChange: "height, opacity" }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" />
          
          <motion.div
            initial={animateContent ? { opacity: 0, y: -10 } : undefined}
            animate={animateContent ? { opacity: 1, y: 0 } : undefined}
            exit={animateContent ? { opacity: 0 } : undefined}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="py-4"
          >
            {children}
          </motion.div>
          
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" />
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

Accordion.displayName = "Accordion";
AccordionItem.displayName = "Accordion.Item";
AccordionTrigger.displayName = "Accordion.Trigger";
AccordionContent.displayName = "Accordion.Content";

export { Accordion };