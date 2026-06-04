"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const springT = { bounce: 0, duration: 0.45, type: "spring" as const };

interface Icon3DHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function Icon3DHover({ children, className }: Icon3DHoverProps) {
  const [hovered, setHovered] = useState(false);

  const accentColor = hovered ? "rgb(139,47,250)" : "color-mix(in srgb, var(--primary) 60%, transparent)";
  const cornerT = "border-color 0.35s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)";

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "inline-flex" }}
    >
      {/* 3D tilt wrapper */}
      <motion.div
        animate={{
          rotateX: hovered ? -12 : 0,
          rotateY: hovered ? 14 : 0,
          scale: hovered ? 1.12 : 1,
        }}
        transition={springT}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformStyle: "preserve-3d",
          transformPerspective: 600,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Glow behind icon */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.4 : 0.8 }}
          transition={springT}
          style={{
            position: "absolute",
            inset: -6,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,47,250,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </motion.div>

      {/* Corner brackets */}
      {[
        { top: hovered ? -4 : 2, left: hovered ? -4 : 2, borderLeft: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` },
        { bottom: hovered ? -4 : 2, left: hovered ? -4 : 2, borderLeft: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` },
        { bottom: hovered ? -4 : 2, right: hovered ? -4 : 2, borderRight: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` },
        { top: hovered ? -4 : 2, right: hovered ? -4 : 2, borderRight: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` },
      ].map((style, i) => (
        <motion.div
          key={i}
          animate={{ scale: hovered ? 1.6 : 1, opacity: hovered ? 1 : 0.4 }}
          transition={springT}
          style={{
            width: 8,
            height: 8,
            position: "absolute",
            zIndex: 2,
            pointerEvents: "none",
            transition: cornerT,
            ...style,
          }}
        />
      ))}
    </div>
  );
}
