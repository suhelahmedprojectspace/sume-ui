'use client';

import React, {
  useState, useRef, useImperativeHandle, forwardRef, useId
} from 'react';
import cn from '../../lib/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { Eye, EyeOff, Check, X, AlertCircle, Info } from 'lucide-react';

export const inputVariants = cva(
  'flex items-center rounded-md border px-3 py-2 transition-all focus-within:ring-2 relative',
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
      id,
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
      disabled,
      ...props
    },
    ref
  ) => {
    const internalId = useId();
    const inputId = id || `input-${internalId}`;
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const shouldShowClear = clearable && !!value && String(value).length > 0 && !disabled;

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const describedBy = error
      ? `${inputId}-error`
      : success && successText
      ? `${inputId}-success`
      : helperText
      ? `${inputId}-helper`
      : undefined;

    const inputHasLeft =
      !!leftAddon || !!icon;
    const inputHasRight =
      !!rightAddon || (!!success && !error) || isPassword || shouldShowClear;

    const renderLeftElement = () => (leftAddon || icon) && (
      <div className="flex items-center text-muted-foreground mr-2">
        {leftAddon}
        {!leftAddon && icon}
      </div>
    );
    const renderRightElement = () => (
      <div className="flex items-center gap-1 ml-2">
        {shouldShowClear && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={e => { e.stopPropagation(); onClear?.(); }}
            className="text-muted-foreground hover:text-foreground"
            tabIndex={-1}
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
        {isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={e => { e.stopPropagation(); setShowPassword(s => !s); }}
            className="text-muted-foreground hover:text-foreground"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
          </button>
        )}
        {rightAddon}
        {success && !error && (
          <Check size={16} className="text-green-500" aria-hidden="true" />
        )}
      </div>
    );

    return (
      <div className="w-full space-y-1">
        {!floating && label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground/80"
          >
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
          {renderLeftElement()}

          <div className="relative flex-1 flex min-w-0 items-center">
            {floating && label && (
              <label
                htmlFor={inputId}
                className={cn(
                  'absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 pointer-events-none',
                  floating &&
                    'peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm',
                  (isFocused || value)
                    ? 'top-[-0.6rem] left-2 text-sm px-1 bg-white dark:bg-neutral-900'
                    : '',
                  error ? 'text-red-500' : success ? 'text-green-500' : ''
                )}
              >
                {label}
                {props.required && <span className="text-red-500"> *</span>}
              </label>
            )}
            <input
              ref={inputRef}
              id={inputId}
              aria-invalid={!!error}
              aria-describedby={describedBy}
              type={inputType}
              placeholder={floating ? " " : props.placeholder}
              value={value}
              autoComplete={props.autoComplete}
              disabled={disabled}
              className={cn(
                "w-full peer bg-transparent outline-none placeholder:text-muted-foreground/60",
                "text-foreground disabled:cursor-not-allowed",
                floating ? "pt-4 pb-1 px-3" : "px-3"
              )}
              onFocus={e => { setIsFocused(true); props.onFocus?.(e); }}
              onBlur={e => { setIsFocused(false); props.onBlur?.(e); }}
              tabIndex={props.tabIndex}
              {...props}
            />
          </div>
          {renderRightElement()}
        </div>

        {(helperText || error || successText) && (
          <div
            id={
              error
                ? `${inputId}-error`
                : success && successText
                ? `${inputId}-success`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={cn(
              "flex items-start gap-1 text-xs mt-0.5 min-h-[1em]",
              error
                ? "text-red-500"
                : success
                ? "text-green-500"
                : "text-muted-foreground"
            )}
            aria-live={error ? "assertive" : (success ? "polite" : undefined)}
          >
            {error ? (
              <AlertCircle size={14} aria-hidden="true" className="mt-0.5" />
            ) : helperText ? (
              <Info size={14} aria-hidden="true" className="mt-0.5" />
            ) : success ? (
              <Check size={14} aria-hidden="true" className="mt-0.5" />
            ) : null}
            <span>{error || successText || helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
