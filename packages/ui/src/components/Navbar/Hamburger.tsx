"use client";
import React from "react";

interface MobileIcon {
  isOpen: boolean;
  onClick: () => void;
  size?: number;
  color?: string;
  className?: string;
}

export const HamburgerIcon: React.FC<MobileIcon> = ({
  isOpen,
  onClick,
  size = 24,
  color = "#000",
  className = "",
}) => {
  const barHeight = size / 8;

  const barStyles: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: `${barHeight}px`,
    backgroundColor: color,
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  };

  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={onClick}
      className={`md:hidden ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          ...barStyles,
          top: isOpen ? '50%' : '0',
          transform: isOpen ? 'translateY(-50%) rotate(45deg)' : 'none',
        }}
      />
      <span
        style={{
          ...barStyles,
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: isOpen ? 0 : 1,
        }}
      />
      <span
        style={{
          ...barStyles,
          top: isOpen ? '50%' : '100%',
          transform: isOpen 
            ? 'translateY(-50%) rotate(-45deg)' 
            : 'translateY(-100%)',
        }}
      />
    </button>
  );
};