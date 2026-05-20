"use client";

import { AnimatePresence, motion } from "motion/react";
import { useLangContext } from "@/contexts/lang-context";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { isEN, toggle, mounted } = useLangContext();

  if (!mounted) return <div className="h-7 w-14" />;

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative h-7 w-14 rounded-full border border-border bg-secondary cursor-pointer overflow-hidden hover:bg-secondary/80 transition-colors",
        className
      )}
      aria-label={isEN ? "Монгол хэл рүү шилжих" : "Switch to English"}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isEN ? "en" : "mn"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-xs font-semibold tracking-wider text-foreground"
        >
          {isEN ? "EN" : "MN"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
