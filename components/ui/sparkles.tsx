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
  density = 320,
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
    const TARGET_FPS = 20;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let isVisible = true;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.floor(canvas.offsetWidth * dpr);
        canvas.height = Math.floor(canvas.offsetHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }, 150);
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(canvas.offsetWidth * dpr);
    canvas.height = Math.floor(canvas.offsetHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    window.addEventListener("resize", resize);

    const area = canvas.offsetWidth * canvas.offsetHeight;
    const count = Math.min(400, Math.floor((area * density) / 800000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
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

      if (!isVisible || document.hidden) return;

      // Throttle to TARGET_FPS
      if (timestamp - lastFrame < FRAME_INTERVAL) return;
      lastFrame = timestamp;
      frameCount++;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

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

        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0 });
    observer.observe(canvas);

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, size, speed, opacity]);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} />;
}
