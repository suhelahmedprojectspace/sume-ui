"use client";

import React from "react";
import cn from "../../lib/cn";

type ProgressVariant = "solid" | "soft" | "outline" | "gradient" | "striped";
type ProgressSize = "sm" | "md" | "lg";
type ProgressColor = "primary" | "success" | "warning" | "danger" | "neutral";
type LabelPosition = "left" | "center" | "right" | "inside";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Determinate value from 0–100; if undefined and indeterminate, shows looping animation
  value?: number;
  // Enable indeterminate animation (ignores value visually but keeps aria semantics appropriate)
  indeterminate?: boolean;
  // Visual variants
  variant?: ProgressVariant;
  size?: ProgressSize;
  color?: ProgressColor;
  // Optional label and percentage display
  label?: React.ReactNode;
  showPercentage?: boolean;
  // Where to show label/percent: outside (left/center/right) or inside the bar
  labelPosition?: LabelPosition;
  // Whether to show remaining percentage instead of completed (e.g., "30% remaining")
  showRemaining?: boolean;
  // Corner rounding
  rounded?: boolean;
  // Hide background track (useful for minimal UIs)
  hideTrack?: boolean;
  // Enables subtle animated stripes or width transition (respects reduced motion)
  animated?: boolean;
  // Custom min/max (defaults 0–100) for advanced use
  min?: number;
  max?: number;
  // Custom aria-label if no visible label
  ariaLabel?: string;
  // Optional id linkable for aria-labelledby
  labelId?: string;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (num: number, min: number, max: number) =>
  Math.min(max, Math.max(min, num));

const sizeClasses: Record<ProgressSize, { track: string; bar: string; font: string }> = {
  sm: { track: "h-2", bar: "h-2", font: "text-xs" },
  md: { track: "h-3", bar: "h-3", font: "text-sm" },
  lg: { track: "h-4", bar: "h-4", font: "text-sm" },
};

const colorTokens: Record<
  ProgressColor,
  {
    solid: string;
    soft: string;
    outline: string;
    gradient: string;
    striped: string;
    text: string;
    track: string;
    outlineBorder: string;
  }
> = {
  primary: {
    solid: "bg-blue-600 dark:bg-blue-500",
    soft: "bg-blue-100 dark:bg-blue-900/40",
    outline: "bg-transparent",
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
    striped:
      "bg-blue-600 dark:bg-blue-500 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.7)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
    text: "text-blue-700 dark:text-blue-300",
    track: "bg-blue-100/60 dark:bg-blue-950/50",
    outlineBorder: "border border-blue-300 dark:border-blue-800",
  },
  success: {
    solid: "bg-emerald-600 dark:bg-emerald-500",
    soft: "bg-emerald-100 dark:bg-emerald-900/40",
    outline: "bg-transparent",
    gradient: "bg-gradient-to-r from-emerald-500 to-teal-500",
    striped:
      "bg-emerald-600 dark:bg-emerald-500 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.7)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
    text: "text-emerald-700 dark:text-emerald-300",
    track: "bg-emerald-100/60 dark:bg-emerald-950/50",
    outlineBorder: "border border-emerald-300 dark:border-emerald-800",
  },
  warning: {
    solid: "bg-amber-500 dark:bg-amber-400",
    soft: "bg-amber-100 dark:bg-amber-900/40",
    outline: "bg-transparent",
    gradient: "bg-gradient-to-r from-amber-400 to-orange-500",
    striped:
      "bg-amber-500 dark:bg-amber-400 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.7)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
    text: "text-amber-700 dark:text-amber-300",
    track: "bg-amber-100/60 dark:bg-amber-950/50",
    outlineBorder: "border border-amber-300 dark:border-amber-800",
  },
  danger: {
    solid: "bg-rose-600 dark:bg-rose-500",
    soft: "bg-rose-100 dark:bg-rose-900/40",
    outline: "bg-transparent",
    gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
    striped:
      "bg-rose-600 dark:bg-rose-500 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.7)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
    text: "text-rose-700 dark:text-rose-300",
    track: "bg-rose-100/60 dark:bg-rose-950/50",
    outlineBorder: "border border-rose-300 dark:border-rose-800",
  },
  neutral: {
    solid: "bg-gray-600 dark:bg-gray-400",
    soft: "bg-gray-200 dark:bg-gray-800",
    outline: "bg-transparent",
    gradient: "bg-gradient-to-r from-gray-500 to-zinc-500",
    striped:
      "bg-gray-600 dark:bg-gray-500 bg-[linear-gradient(45deg,rgba(255,255,255,0.7)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0.7)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]",
    text: "text-gray-700 dark:text-gray-300",
    track: "bg-gray-200 dark:bg-gray-800",
    outlineBorder: "border border-gray-300 dark:border-gray-700",
  },
};

const getBarClasses = (variant: ProgressVariant, color: ProgressColor) => {
  const c = colorTokens[color];
  switch (variant) {
    case "solid":
      return c.solid;
    case "soft":
      // For soft, bar uses a stronger tone on top of a soft track
      return `${c.solid}`;
    case "outline":
      // Bar inherits a subtle fill to be visible inside outline
      return `${c.solid}`;
    case "gradient":
      return c.gradient;
    case "striped":
      return `${c.striped}`;
    default:
      return c.solid;
  }
};

const getTrackClasses = (
  variant: ProgressVariant,
  color: ProgressColor,
  hideTrack?: boolean
) => {
  if (hideTrack) return "bg-transparent";
  const c = colorTokens[color];
  switch (variant) {
    case "soft":
      return c.track;
    case "outline":
      return `bg-transparent ${c.outlineBorder}`;
    default:
      // solid/gradient/striped default track
      return "bg-gray-100 dark:bg-gray-900/40";
  }
};

const srOnly =
  "sr-only absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0";

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      indeterminate = false,
      variant = "solid",
      size = "md",
      color = "primary",
      label,
      showPercentage = false,
      labelPosition = "right",
      showRemaining = false,
      rounded = true,
      hideTrack = false,
      animated = true,
      min = 0,
      max = 100,
      ariaLabel,
      labelId,
      className,
      ...rest
    },
    ref
  ) => {
    const isDeterminate = typeof value === "number" && !isNaN(value);
    const clamped = isDeterminate ? clamp(value!, min, max) : undefined;
    const percent = isDeterminate
      ? ((clamped! - min) / (max - min)) * 100
      : undefined;

    if (process.env.NODE_ENV !== "production") {
      if (isDeterminate && (value! < min || value! > max)) {
        console.warn(
          `[ProgressBar] value (${value}) is outside of [${min}, ${max}]. It was clamped.`
        );
      }
      if (!isDeterminate && !indeterminate) {
        console.warn(
          "[ProgressBar] No value provided and indeterminate=false. Progress will appear empty; did you mean to set indeterminate?"
        );
      }
    }

    const sizeCfg = sizeClasses[size];

    const trackCls = cn(
      "relative w-full overflow-hidden",
      sizeCfg.track,
      getTrackClasses(variant, color, hideTrack),
      rounded && "rounded-full",
      "transition-colors"
    );

    const barBase = cn(
      "absolute left-0 top-0",
      sizeCfg.bar,
      rounded && "rounded-full"
    );

    const barColor = getBarClasses(variant, color);

    // Width/animation for determinate vs indeterminate
    const barStyle: React.CSSProperties = {};
    let barAnimCls = "";

    if (indeterminate && !isDeterminate) {
      // Indeterminate animation (stripe slide)
      barAnimCls = cn(
        "w-1/2",
        !prefersReducedMotion &&
          animated &&
          "animate-[indeterminate_1.2s_infinite_linear]"
      );
    } else {
      // Determinate width
      barStyle.width = `${percent ?? 0}%`;
      if (!prefersReducedMotion && animated) {
        barAnimCls = "transition-[width] duration-300 ease-out";
      }
    }

    // Stripes animation motion if striped and animated
    const stripedMotion =
      variant === "striped" && animated && !prefersReducedMotion
        ? "animate-[barberpole_2s_linear_infinite]"
        : "";

    const labelText =
      showPercentage && isDeterminate
        ? `${showRemaining ? Math.round(100 - (percent ?? 0)) : Math.round(percent ?? 0)}%`
        : null;

    // ARIA
    const ariaProps: React.AriaAttributes & React.HTMLAttributes<HTMLDivElement> = {
      role: "progressbar",
      "aria-label": ariaLabel,
      "aria-labelledby": labelId,
      "aria-valuemin": min,
      "aria-valuemax": max,
    };
    if (isDeterminate) {
      ariaProps["aria-valuenow"] = Math.round(clamped!);
    } else if (indeterminate) {
      // In indeterminate mode, spec: omit aria-valuenow; some UAs support aria-valuetext
      ariaProps["aria-valuetext"] = "Loading";
    }

    // Label layout outside
    const outerLabel = (pos: Exclude<LabelPosition, "inside">) => {
      if (!label && !labelText) return null;
      const base = "text-sm text-gray-700 dark:text-gray-300";
      const map: Record<typeof pos, string> = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      };
      return (
        <div className={cn("flex w-full items-center gap-2", map[pos])}>
          {label ? <div className={base}>{label}</div> : null}
          {labelText ? (
            <div
              className={cn(
                base,
                colorTokens[color].text,
                "tabular-nums font-medium"
              )}
            >
              {labelText}
            </div>
          ) : null}
        </div>
      );
    };

    // Label inside the bar
    const innerLabel = () => {
      if (labelPosition !== "inside") return null;
      if (!label && !labelText) return null;
      return (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center px-2",
            size === "sm" && "text-[10px]",
            size !== "sm" && "text-xs md:text-sm",
            // Ensure contrast
            "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
          )}
          aria-hidden // text is decorative inside the bar; outer aria conveys status
        >
          <span className="truncate">
            {label ? (
              <span className="mr-1">{label}</span>
            ) : null}
            {labelText ? <span>{labelText}</span> : null}
          </span>
        </div>
      );
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...rest}>
        {labelPosition !== "inside" && outerLabel(labelPosition)}
        <div className={trackCls}>
          {/* Determinate or Indeterminate bar */}
          <div
            className={cn(
              barBase,
              barColor,
              barAnimCls,
              stripedMotion,
              variant === "outline" && "opacity-90",
              // Ensure min visible width if >0%
              isDeterminate && (percent ?? 0) > 0 ? "min-w-[0.5rem]" : ""
            )}
            style={barStyle}
          />
          {innerLabel()}
          {/* SR text for accessibility if no external label */}
          {!label && ariaLabel && isDeterminate ? (
            <span className={srOnly}>{Math.round(percent ?? 0)} percent</span>
          ) : null}
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export {ProgressBar}