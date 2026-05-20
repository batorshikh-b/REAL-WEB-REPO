"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sparkles } from "@/components/ui/sparkles";
import { useLang } from "@/hooks/use-lang";

const logos = [
  { src: "/companies/1.png",         alt: "Fibo Cloud" },
  { src: "/companies/Picture1.png",  alt: "Unitel" },
  { src: "/companies/Picture2.png",  alt: "Partner 2" },
  { src: "/companies/Picture3.png",  alt: "VMware" },
  { src: "/companies/Picture4.png",  alt: "Partner 4" },
  { src: "/companies/Picture5.png",  alt: "Partner 5" },
  { src: "/companies/Picture6.png",  alt: "Partner 6" },
  { src: "/companies/Picture7.png",  alt: "Partner 7" },
  { src: "/companies/Picture8.png",  alt: "Partner 8" },
  { src: "/companies/Picture10.png", alt: "Partner 10" },
  { src: "/companies/Picture11.png", alt: "Partner 11" },
  { src: "/companies/Picture12.png", alt: "Partner 12" },
  { src: "/companies/Picture14.png", alt: "Partner 14" },
  { src: "/companies/Picture15.png", alt: "Partner 15" },
  { src: "/companies/Picture16.png", alt: "Partner 16" },
  { src: "/companies/Picture17.png", alt: "Partner 17" },
];

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mx-4 flex items-center justify-center w-36 h-20 rounded-xl bg-white dark:bg-white/10 border border-border shadow-sm px-4 py-3">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={56}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function Partners() {
  const { mn: isMN } = useLang();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const sparkleColor = mounted && resolvedTheme === "dark" ? "#ffffff" : "#6366f1";

  return (
    <section className="overflow-hidden bg-secondary/30">
      {/* Text heading */}
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
          {isMN ? "Бидний түншүүд" : "Our Partners"}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {isMN ? "Хамтран ажиллагч байгууллагууд" : "Trusted by Leading Organizations"}
        </h2>
      </motion.div>

      {/* Sparkles globe decoration */}
      <div className="relative h-48 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#6366f1,transparent_70%)] before:opacity-30" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-secondary/30" />
        <Sparkles
          density={1000}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={sparkleColor}
          size={1.2}
          speed={0.8}
        />
      </div>

      {/* Logo marquee */}
      <div className="relative -mt-4 pb-12">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-secondary/60 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-secondary/60 to-transparent" />
        <div className="flex animate-marquee w-max will-change-transform">
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
