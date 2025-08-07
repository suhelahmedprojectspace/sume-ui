'use client';
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "../../lib/cn";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center  bg-gray-100 text-gray-600 select-none",
  {
    variants: {
      size: {
       xs: "w-4 h-4 text-[10px]",   
  sm: "w-6 h-6 text-xs",       
  md: "w-10 h-10 text-sm",     
  lg: "w-14 h-14 text-base",   
  xl: "w-20 h-20 text-lg",     


      },
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "rounded",
    },
  }
);

const shapeClassMap = {
  circle: "rounded-full",
  square: "rounded-none",
  rounded: "rounded-md",
};

function getInitials(name?: string): string {
  if (!name) return "?";
  return name
    .split(" ")
    .map((word: string) => word[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallbackText?: string;
  status?: "online" | "offline" | "busy" | "away" | null;
  loading?:"eager"|"lazy";
}

const statusColorMap = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-400",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt = "User avatar",
      size,
      shape,
      fallbackText,
      status=null,
      loading="lazy",
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = React.useState(false);

    const showFallback = !src || imgError;
    const initials = getInitials(fallbackText || alt);

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, shape }), className)}
        aria-label={alt || initials}
        role="img"
        {...props}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt}
            className={cn("object-cover w-full h-full", shapeClassMap[shape || "rounded"])}
            onError={() => setImgError(true)}
            draggable={false}
            
            loading={loading}
          />
        ) : (
          <span className="font-medium">{initials}</span>
        )}
       {status && (
  <span
    aria-label={`User is ${status}`}
      className={cn(
    " absolute rounded-full ring-2 ring-white",
    statusColorMap[status],
    {
      "bottom-0 right-0 w-2 h-2  z-10": size === "xs" || size === "sm",
      "bottom-0 right-0   z-10 w-3 h-3": size === "md",
      "bottom-0 right-0 w-4 h-4  z-10": size === "lg",
      "bottom-0 right-1 w-4 h-4  z-10": size ==="xl",

    }
  )}

  />
)}

      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export {Avatar,avatarVariants};
