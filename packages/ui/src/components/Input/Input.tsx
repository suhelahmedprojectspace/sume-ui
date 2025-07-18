'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import cn from '../../lib/cn';
import { cva, VariantProps } from 'class-variance-authority';
import {
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Info,
} from 'lucide-react';

export const inputVariants = cva(
  'flex items-center rounded-md border px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-600 relative',
  {
    variants: {
      variant: {
        default: 'border-gray-300 dark:border-gray-600 bg-background',
        outline: 'border border-gray-400 bg-transparent',
        ghost: 'border-transparent bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800',
        filled: 'border-transparent bg-gray-100 dark:bg-gray-800',
        error: 'border-red-500 focus-within:ring-red-200',
        success: 'border-green-500 focus-within:ring-green-200',
      },
      inputSize: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  helperText?: string;
  floating?: boolean;
  success?: boolean;
  successText?: string;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      className,
      type = 'text',
      variant,
      inputSize,
      leftAddon,
      rightAddon,
      helperText,
      floating,
      success,
      successText,
      clearable,
      onClear,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const shouldShowClear = clearable && value && !props.disabled;

    // Expose internal ref
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onClear) {
        onClear();
      } else if (inputRef.current) {
        const setter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          'value'
        )?.set;
        setter?.call(inputRef.current, '');
        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    return (
      <div className="w-full space-y-1">
        {!floating && label && (
          <label className="block text-sm font-medium text-foreground/80">
            {label}
            {props.required && <span className="text-red-500"> *</span>}
          </label>
        )}

        <div
          className={cn(
            inputVariants({
              variant: error ? 'error' : success ? 'success' : variant,
              inputSize,
            }),
            className,
            'relative',
            floating && 'pt-2'
          )}
          onClick={() => inputRef.current?.focus()}
        >
          {leftAddon && (
            <div className="ml-2 flex items-center text-muted-foreground">
              {leftAddon}
            </div>
          )}

          {icon && (
            <div className="ml-2 flex items-center text-muted-foreground">
              {icon}
            </div>
          )}

          <div className="relative flex flex-1">
            {floating && label && (
              <label
  className={cn(
    'absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 pointer-events-none',
    'peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm',
    (isFocused || value) &&
      'top-[-0.6rem] left-2 text-sm px-2 bg-white dark:bg-neutral-900',
    error ? 'text-red-500' : success ? 'text-green-500' : ''
  )}
>

                {label}
                {props.required && <span className="text-red-500"> *</span>}
              </label>
            )}
            <input
              ref={inputRef}
              placeholder=" "
              type={inputType}
              value={value}
              onFocus={(e) => {
                setIsFocused(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                props.onBlur?.(e);
              }}
              className={cn(
                'w-full peer bg-transparent outline-none placeholder:text-muted-foreground/60',
                'text-foreground disabled:cursor-not-allowed',
                floating ? 'pt-4 pb-1 px-3' : 'px-3'
              )}
              {...props}
            />
          </div>

          {shouldShowClear && (
            <button
              type="button"
              onClick={handleClear}
              className="mr-2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="mr-2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          )}

          {rightAddon && (
            <div className="mr-2 flex items-center text-muted-foreground">
              {rightAddon}
            </div>
          )}

          {success && (
            <div className="mr-2 flex items-center text-green-500">
              <Check size={16} />
            </div>
          )}
        </div>

        {(helperText || error || successText) && (
          <div
            className={cn(
              'flex items-start gap-1 text-xs',
              error
                ? 'text-red-500'
                : success
                ? 'text-green-500'
                : 'text-muted-foreground'
            )}
          >
            {error ? (
              <AlertCircle size={14} className="mt-0.5" />
            ) : helperText ? (
              <Info size={14} className="mt-0.5" />
            ) : success ? (
              <Check size={14} className="mt-0.5" />
            ) : null}
            <span>{error || successText || helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
