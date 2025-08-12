'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import cn from '../../lib/cn';
import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

interface KeybabMenuProps {
  variant?: 'vertical' | 'horizontal' | 'custom';
  children?: React.ReactNode;
  action?: { 
    label: string; 
    onClick: () => void; 
    disabled?: boolean; 
    icon?: React.ReactNode;
    destructive?: boolean;
  }[];
  className?: string;
  menuClassName?: string;
  align?: 'left' | 'right';
  triggerClassName?: string;
  closeOnSelect?: boolean;
  menuWidth?: 'default' | 'fit' | 'full';
}

const KeybabMenu = React.forwardRef<HTMLDivElement, KeybabMenuProps>(
  (
    {
      variant = 'vertical',
      className,
      children,
      action = [],
      menuClassName,
      align = 'right',
      triggerClassName,
      closeOnSelect = true,
      menuWidth = 'default',
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
      setOpen(false);
      buttonRef.current?.focus();
    }, []);

    useEffect(() => {
      if (!open) return;

      const onClickOutside = (e: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
        ) {
          handleClose();
        }
      };
      
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };

      document.addEventListener('mousedown', onClickOutside);
      document.addEventListener('keydown', onEsc);
      
      return () => {
        document.removeEventListener('mousedown', onClickOutside);
        document.removeEventListener('keydown', onEsc);
      };
    }, [open, handleClose]);

    const handleActionClick = (onClick: () => void) => {
      onClick();
      if (closeOnSelect) handleClose();
    };

    const menuAlignClass = align === 'right' ? 'right-0' : 'left-0';
    const widthClass = {
      default: 'w-56',
      fit: 'w-fit min-w-[120px]',
      full: 'w-full min-w-[160px]',
    }[menuWidth];

    return (
      <div ref={ref} className={cn('relative inline-block text-left', className)}>
        <motion.button
          ref={buttonRef}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open menu"
          whileTap={{ scale: 0.95 }}
          className={cn(
            "inline-flex p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500/50 cursor-pointer select-none",
            "hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-200",
            "active:bg-gray-200 dark:active:bg-gray-600",
            triggerClassName
          )}
        >
          {variant === 'horizontal' ? (
            <DotsHorizontalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : variant === 'vertical' ? (
            <DotsVerticalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            children || <DotsVerticalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              role="menu"
              aria-hidden={!open}
              tabIndex={-1}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: 'spring', 
                  damping: 25, 
                  stiffness: 300,
                  mass: 0.5 
                }
              }}
              exit={{ 
                opacity: 0, 
                y: 8, 
                scale: 0.95,
                transition: { 
                  duration: 0.15, 
                  ease: 'easeIn' 
                } 
              }}
              className={cn(
                "absolute mt-2 rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 z-50 origin-top-right overflow-hidden",
                "ring-1 ring-black/5 dark:ring-white/10",
                menuAlignClass,
                widthClass,
                menuClassName
              )}
            >
              {variant === "custom" && children ? (
                <div className="p-2">{children}</div>
              ) : (
                <LayoutGroup>
                  <div className="py-1.5">
                    <AnimatePresence mode="wait">
                      {action.map(({ label, onClick, disabled, icon, destructive }, idx) => (
                        <motion.button
                          key={`${label}-${idx}`}
                          disabled={disabled}
                          onClick={() => handleActionClick(onClick)}
                          layout="position"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: idx * 0.05,
                              ease: 'easeOut' 
                            }
                          }}
                          exit={{ opacity: 0, x: 10 }}
                          whileHover={{ 
                            backgroundColor: destructive 
                              ? 'var(--destructive-hover)' 
                              : 'var(--hover-background)',
                            transition: { duration: 0.1 }
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={cn(
                            disabled
                              ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                              : destructive
                                ? "text-red-600 dark:text-red-400"
                                : "text-gray-700 dark:text-gray-200",
                            "group flex w-full items-center px-4 py-2.5 text-sm font-medium transition-all duration-150",
                            "focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700/50"
                          )}
                          role="menuitem"
                          aria-disabled={disabled}
                        >
                          {icon && (
                            <span className={cn(
                              "mr-3 transition-colors",
                              disabled 
                                ? "text-gray-400 dark:text-gray-500" 
                                : destructive 
                                  ? "text-red-500 dark:text-red-400"
                                  : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                            )}>
                              {icon}
                            </span>
                          )}
                          <span className="truncate">{label}</span>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </LayoutGroup>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

KeybabMenu.displayName = 'KeybabMenu';

export { KeybabMenu };