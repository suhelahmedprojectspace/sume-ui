'use client';
import React, { useEffect, useRef, useState } from 'react';
import cn from '../../lib/cn';
import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface KeybabMenuProps {
  variant?: 'vertical' | 'horizontal' | 'custom';
  children?: React.ReactNode;
  action?: { label: string; onClick: () => void; disabled?: boolean; icon?: React.ReactNode }[];
  className?: string;
  menuClassName?: string;
  align?: 'left' | 'right';
  triggerClassName?: string;
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
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLSpanElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!open) return;

      const onClickOutside = (e: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };

      document.addEventListener('mousedown', onClickOutside);
      document.addEventListener('keydown', onEsc);
      return () => {
        document.removeEventListener('mousedown', onClickOutside);
        document.removeEventListener('keydown', onEsc);
      };
    }, [open]);

    const menuAlignClass = align === 'right' ? 'right-0' : 'left-0';

    return (
      <div ref={ref} className={cn('relative inline-block text-left', className)}>
        <motion.span
          ref={buttonRef}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open menu"
          tabIndex={0}
          role="button"
          whileTap={{ scale: 0.95 }}
          className={cn(
            "inline-flex p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500/50 cursor-pointer select-none",
            "hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200",
            triggerClassName
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
        >
          {variant === 'horizontal' ? (
            <DotsHorizontalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : variant === 'vertical' ? (
            <DotsVerticalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            children || <DotsVerticalIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </motion.span>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              role="menu"
              tabIndex={-1}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className={cn(
                "absolute mt-1 w-56 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50 origin-top-right",
                menuAlignClass,
                menuClassName
              )}
              aria-hidden={!open}
            >
              {variant === "custom" && children ? (
                <div className="p-2">{children}</div>
              ) : (
                <div className="py-1">
                  {action.map(({ label, onClick, disabled, icon }, idx) => (
                    <motion.button
                      key={idx}
                      disabled={disabled}
                      onClick={() => {
                        onClick();
                        setOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        disabled
                          ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                        "group flex w-full items-center px-4 py-2.5 text-sm font-medium transition-all duration-150"
                      )}
                      role="menuitem"
                    >
                      {icon && (
                        <span className="mr-3 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300">
                          {icon}
                        </span>
                      )}
                      {label}
                    </motion.button>
                  ))}
                </div>
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