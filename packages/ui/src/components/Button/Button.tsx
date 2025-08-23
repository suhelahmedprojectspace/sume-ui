"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import cn from '../../lib/cn';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 leading-6 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none focus:outline-none [&_svg]:pointer-events-none [&_svg]:size-4", // ✅ Fixed typo
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-indigo-500",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-red-500", // ✅ Fixed text color
        outline: "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50",
        ghost: "bg-transparent hover:bg-gray-100",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        muted: "bg-gray-100 text-gray-500 hover:bg-gray-200",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 focus-visible:ring-cyan-500"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          loading && "opacity-70 cursor-not-allowed",
          className
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          iconLeft
        )}
        {children}
        {iconRight}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
