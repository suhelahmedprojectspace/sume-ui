"use client";
import React from "react";
import { ChevronDown, ChevronRight, ChevronUp, X, Menu, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  collapsed?: boolean;
  onCollapseToggle?: () => void;
  mobileOpen?: boolean;
  onMobileToggle?: () => void;
}

interface SidebarHeaderProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

interface SidebarFooterProps {
  children: React.ReactNode;
  className?: string;
}

const ICON_SIZE = 20;
const ANIMATION_DURATION = 0.2;

// Create context for sidebar state
const SidebarContext = React.createContext({
  collapsed: false,
});

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span 
    className="flex items-center justify-center"
    style={{ width: ICON_SIZE, height: ICON_SIZE }}
  >
    {children}
  </span>
);

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, icon, className }) => {
  const { collapsed } = React.useContext(SidebarContext);
  
  return (
    <header className={`sticky top-0 z-10 bg-white border-b border-gray-100 ${className || ""}`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3 text-lg font-semibold">
          {icon && (
            <div className="flex-shrink-0">
              {typeof icon === 'string' ? (
                <img 
                  src={icon} 
                  alt="Header icon" 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
              ) : (
                <IconWrapper>{icon}</IconWrapper>
              )}
            </div>
          )}
          <span className={`whitespace-nowrap transition-opacity duration-200 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            {children}
          </span>
        </div>
      </div>
    </header>
  );
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, className }) => {
  return (
    <footer className={`sticky bottom-0 bg-white border-t border-gray-100 ${className || ""}`}>
      <div className="p-4">
        {children}
      </div>
    </footer>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ 
  children, 
  className, 
  collapsed = false,
  onCollapseToggle,
  mobileOpen = false,
  onMobileToggle
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            onClick={onMobileToggle}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          width: collapsed ? (isMobile ? "100%" : "5rem") : "16rem",
          x: isMobile ? (mobileOpen ? 0 : "-100%") : 0
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`fixed lg:relative z-50 h-screen bg-white shadow border-r border-gray-100 flex flex-col ${
          className || ""
        }`}
      >
        <SidebarContext.Provider value={{ collapsed }}>
          {children}
        </SidebarContext.Provider>
      </motion.aside>
    </>
  );
};

// ================== Sidebar Item ==================
interface SidebarItemProps {
  children?: React.ReactNode;
  className?: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ children, className }) => {
  const { collapsed } = React.useContext(SidebarContext);
  
  return (
    <li className={`rounded-lg ${className || ""} ${collapsed ? 'flex justify-center' : ''}`}>
      {children}
    </li>
  );
};


interface SidebarTriggerProps {
  label: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
  label,
  icon,
  children,
  className
}) => {
  const { collapsed } = React.useContext(SidebarContext);
  const [open, setOpen] = React.useState(false);
  const hasChildren = Boolean(children);

  return (
    <div className={`group ${className || ""}`}>
      <div
        className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors"
        onClick={() => hasChildren && setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-3">
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {!collapsed && (
            <span className="text-sm font-medium">{label}</span>
          )}
        </div>
        {hasChildren && !collapsed && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            <IconWrapper>
              <ChevronDown size={ICON_SIZE} />
            </IconWrapper>
          </motion.span>
        )}
      </div>
      
      <AnimatePresence>
        {hasChildren && open && !collapsed && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            className="overflow-hidden"
          >
            <div className="ml-8 pl-2 border-l-2 border-gray-100 py-1 space-y-1">
              {children}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

interface SidebarSubItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
const SidebarSubItem: React.FC<SidebarSubItemProps> = ({
  label,
  icon,
  active = false,
  onClick,
  className
}) => {
  const { collapsed } = React.useContext(SidebarContext);
  
  return (
    <motion.li
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-2 cursor-pointer rounded-lg flex items-center gap-3 transition-colors ${
        active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
      } ${className || ""}`}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {!collapsed && <span className="text-sm">{label}</span>}
    </motion.li>
  );
};

// ================== Mobile Toggle Button ==================
const SidebarMobileToggle: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-40 p-2 m-2 rounded-md bg-white shadow lg:hidden"
      aria-label="Toggle sidebar"
    >
      <Menu size={24} />
    </button>
  );
};

// ================== Collapse Toggle Button ==================
const SidebarCollapseToggle: React.FC<{ 
  collapsed: boolean; 
  onClick: () => void 
}> = ({ collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hidden lg:flex items-center justify-center p-2 rounded-full hover:bg-gray-100 absolute -right-3 top-4 bg-white border border-gray-200 shadow-sm"
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {collapsed ? (
        <ChevronRight size={16} />
      ) : (
        <ChevronLeft size={16} />
      )}
    </button>
  );
};

// ================== Export All Components ==================
export {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarItem,
  SidebarTrigger,
  SidebarSubItem,
  SidebarMobileToggle,
  SidebarCollapseToggle
};