"use client";

import React, { forwardRef, useEffect, useRef } from 'react';
import cn from '../../lib/cn';
import { Card } from '../Card';
import { Button } from '../Button';
import { cva } from 'class-variance-authority';
import {FocusTrap} from 'focus-trap-react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ModalVariants = cva(
  "relative z-10 rounded-lg shadow-xl overflow-hidden", {
    variants: {
      variant: {
        default: "bg-white",
        destructive: "bg-destructive border border-destructive text-red-900",
        outline: "border border-gray-300 bg-white",
        success: "bg-green-50 border border-green-300 text-green-900"
      },
      size: {
        sm: "px-4 py-3 text-sm",
        md: "px-6 py-4 text-base",
        lg: "px-8 py-6 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  showClose?: boolean;
  showAction?: boolean;
  helperText?:string;
  actionLabel?: string;
  onAction?: () => void;
  closeOnBackdropClick?: boolean;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  open,
  onClose,
  title,
  showClose = true,
  showAction = false,
  actionLabel = "Submit",
  onAction,
  className,
  children,
  helperText,
  closeOnBackdropClick = true,
  ...props
}, ref) => {
  const modalRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        closeOnBackdropClick &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, closeOnBackdropClick, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/40 backdrop-blur-sm"
          />

         
          <FocusTrap
            active={open}
            focusTrapOptions={{
              clickOutsideDeactivates: closeOnBackdropClick,
             
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative flex items-center justify-center w-full max-w-2xl max-h-[90vh]"
            >
              <div
                ref={ref || modalRef}
                className={cn(
                  "w-full max-h-[90vh] overflow-hidden",
                  className
                )}
                {...props}
              >
                <Card className="relative h-full max-h-[90vh] flex flex-col">
                
                  {showClose && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-2"
                      onClick={onClose}
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  )}

                 
                  {title && (
                    <h2
                      id="modal-title"
                      className="text-xl font-semibold mb-4 pr-10"
                    >
                      {title}
                    </h2>
                  )}
                  {
                    helperText && (
                      <span className='text-base font-sans'>{helperText}</span>
                    )
                  }
                 
                  <div className="overflow-y-auto pr-2 mb-4 flex-1">
                    {children}
                  </div>

                 
                  {showAction && (
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" onClick={onClose}>
                        Cancel
                      </Button>
                      <Button onClick={onAction}>
                        {actionLabel}
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            </motion.div>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
});

Modal.displayName = "Modal";
export { Modal, ModalVariants };
