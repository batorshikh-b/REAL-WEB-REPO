"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
  frameSkip: number;
};

type SparklesProps = {
  className?: string;
  color?: string;
  density?: number;
  size?: number;
  speed?: number;
  opacity?: number;
};

export function Sparkles({
  className,
  color = "#6366f1",
  density = 800,
  size = 1,
  speed = 1,
  opacity = 1,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip animation entirely if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationId: number;
    const particles: Particle[] = [];
    let lastFrame = 0;
    const TARGET_FPS = 30;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }, 150);
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    window.addEventListener("resize", resize);

    const count = Math.floor((canvas.width * canvas.height) / (800000 / density));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * size + size / 2.5,
        opacity: Math.random() * opacity,
        speed: (Math.random() * 0.5 + 0.1) * speed,
        direction: Math.random() * Math.PI * 2,
        // Each particle updates direction at a random cadence, not every frame
        frameSkip: Math.floor(Math.random() * 8) + 4,
      });
    }

    // Pre-compute cos/sin to avoid per-particle trig every frame
    let frameCount = 0;

    const animate = (timestamp: number) => {
      animationId = requestAnimationFrame(animate);

      // Throttle to TARGET_FPS
      if (timestamp - lastFrame < FRAME_INTERVAL) return;
      lastFrame = timestamp;
      frameCount++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update opacity every frame (cheap)
        p.opacity += (Math.random() - 0.5) * 0.04 * speed;
        if (p.opacity < 0.05) p.opacity = 0.05;
        if (p.opacity > opacity) p.opacity = opacity;

        // Only re-randomize direction occasionally per particle
        if (frameCount % p.frameSkip === 0) {
          p.direction += (Math.random() - 0.5) * 0.15;
        }

        p.x += Math.cos(p.direction) * p.speed * 0.3;
        p.y += Math.sin(p.direction) * p.speed * 0.3;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, size, speed, opacity]);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} />;
}
