import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  label: string;
  step: number;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
  color?: "blue" | "green" | "indigo" | "red" | "yellow";
  onStepClick?: (step: number) => void;
  direction: "horizontal" | "vertical";
}

const colorClasses = {
  blue: {
    bg: "bg-blue-500",
    textActive: "text-blue-600",
    textComplete: "text-blue-500",
    progress: "bg-blue-500",
  },
  green: {
    bg: "bg-green-500",
    textActive: "text-green-600",
    textComplete: "text-green-500",
    progress: "bg-green-500",
  },
  indigo: {
    bg: "bg-indigo-500",
    textActive: "text-indigo-600",
    textComplete: "text-indigo-500",
    progress: "bg-indigo-500",
  },
  red: {
    bg: "bg-red-500",
    textActive: "text-red-600",
    textComplete: "text-red-500",
    progress: "bg-red-500",
  },
  yellow: {
    bg: "bg-yellow-500",
    textActive: "text-yellow-600",
    textComplete: "text-yellow-500",
    progress: "bg-yellow-500",
  },
} as const;

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  color = "blue",
  onStepClick,
  direction = "horizontal",
}) => {
  const stepRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });
  const [progressHeight, setProgressHeight] = useState(0);

  const colors = colorClasses[color] || colorClasses.blue;

  // For horizontal stepper width
  const progressBarWidth =
    steps.length > 1 ? (100 / (steps.length - 1)) * (activeStep - 1) : 0;

  // For vertical stepper height
  useEffect(() => {
    if (direction === "vertical") {
      const first = stepRef.current[0];
      const current = stepRef.current[activeStep - 1];

      if (first && current) {
        const firstY = first.getBoundingClientRect().top;
        const currentY = current.getBoundingClientRect().top;
        const height = currentY - firstY;

        setProgressHeight(height);
      }
    }
  }, [activeStep, direction]);

  // For horizontal margins
  useEffect(() => {
    if (direction === "horizontal") {
      const first = stepRef.current[0];
      const last = stepRef.current[steps.length - 1];

      if (first && last) {
        setMargins({
          marginLeft: first.offsetWidth / 2,
          marginRight: last.offsetWidth / 2,
        });
      }
    }
  }, [steps.length, direction]);

  return (
    <div
      className={`relative flex ${
        direction === "vertical"
          ? "flex-col items-start space-y-6"
          : "flex-row items-center w-full"
      }`}
    >
      {/* Horizontal Progress Bar */}
      {direction === "horizontal" && (
        <div
          className="absolute top-5 h-1 z-0"
          style={{
            left: margins.marginLeft,
            right: margins.marginRight,
          }}
        >
          <div
            className={`${colors.progress} h-full`}
            style={{
              width: `${progressBarWidth}%`,
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
      )}

      {/* Vertical Progress Bar */}
      {direction === "vertical" && (
        <div
          ref={progressRef}
          className={`absolute top-0 bottom-0 w-1 rounded-full z-0 ${colors.progress}`}
          style={{
            left:20,
               transform: "translateX(-50%)",
    height: progressHeight,
    transition: "height 0.3s ease-in-out",
           
          }}
        />
      )}

      {/* Step Circles */}
      {steps.map(({ step, label }, index) => {
        const isActive = activeStep === step;
        const isComplete = activeStep > step;

        return (
          <div
            key={index}
            ref={(el) => {
              if (el) stepRef.current[index] = el;
            }}
            className={`relative flex z-10 ${
              direction === "vertical"
                ? "flex-row items-start space-x-4"
                : "flex-col items-center w-full text-center"
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer ${
                  isComplete || isActive ? colors.bg : "bg-gray-300"
                }`}
                onClick={() => onStepClick?.(step)}
              >
                <AnimatePresence mode="wait">
                  {isComplete ? (
                    <motion.svg
                      key="check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </motion.svg>
                  ) : (
                    <motion.span
                      key="number"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-lg font-semibold"
                    >
                      {step}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className={`mt-2 text-sm ${direction === "vertical" ? "mt-0" : "text-wrap"}`}>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};