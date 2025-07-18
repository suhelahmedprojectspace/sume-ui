'use client';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '../../lib/cn';
import { X, Check, AlertCircle, Info, Loader2, Sparkles } from 'lucide-react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary border-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'bg-secondary border-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive border-destructive text-destructive-foreground hover:bg-destructive/80',
        success: 'bg-success border-success text-success-foreground hover:bg-success/80',
        warning: 'bg-warning border-warning text-warning-foreground hover:bg-warning/80',
        info: 'bg-info border-info text-info-foreground hover:bg-info/80',
        outline: 'border-input text-foreground hover:bg-accent hover:text-accent-foreground',
        premium: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
      },
      shape: {
        rounded: 'rounded-full',
        square: 'rounded',
        pill: 'rounded-lg',
      },
      effect: {
        none: '',
        glow: 'shadow-lg',
        subtle: 'shadow-sm',
        neon: 'shadow-neon',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'rounded',
      effect: 'none',
    },
  }
);

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  isLoading?: boolean;
  pulse?: boolean;
  interactive?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      effect,
      leftIcon,
      rightIcon,
      closable,
      onClose,
      children,
      isLoading,
      pulse,
      interactive = false,
      ...props
    },
    ref
  ) => {
    const renderIcon = (icon: React.ReactNode) => {
      if (isLoading) {
        return <Loader2 className={cn(iconVariants({ size }), 'animate-spin')} />;
      }

      if (icon === true) {
        switch (variant) {
          case 'success':
            return <Check className={iconVariants({ size })} />;
          case 'destructive':
          case 'warning':
            return <AlertCircle className={iconVariants({ size })} />;
          case 'info':
            return <Info className={iconVariants({ size })} />;
          case 'premium':
            return <Sparkles className={iconVariants({ size })} />;
          default:
            return null;
        }
      }

      return icon;
    };

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, shape, effect, className }),
          pulse && 'animate-pulse',
          interactive && 'cursor-pointer hover:shadow-md transition-all',
          className
        )}
        {...props}
      >
        {renderIcon(leftIcon) && (
          <span className="mr-1.5 flex items-center">
            {renderIcon(leftIcon)}
          </span>
        )}

        {children}

        {closable ? (
          <button
            type="button"
            onClick={onClose}
            className="ml-1.5 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
          >
            <X className={iconVariants({ size })} />
          </button>
        ) : (
          renderIcon(rightIcon) && (
            <span className="ml-1.5 flex items-center">
              {renderIcon(rightIcon)}
            </span>
          )
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };