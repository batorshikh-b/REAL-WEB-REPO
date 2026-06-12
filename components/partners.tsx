"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sparkles } from "@/components/ui/sparkles";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { useLang } from "@/hooks/use-lang";

const logos = [
  { src: "/companies/1.png", alt: "Fibo Cloud" },
  { src: "/companies/Picture1.png", alt: "Unitel" },
  { src: "/companies/Picture2.png", alt: "Cisco" },
  { src: "/companies/Picture3.png", alt: "VMware" },
  { src: "/companies/Picture4.png", alt: "Microsoft" },
  { src: "/companies/Picture5.png", alt: "Dell Technologies" },
  { src: "/companies/Picture6.png", alt: "HP" },
  { src: "/companies/Picture7.png", alt: "Lenovo" },
  { src: "/companies/Picture8.png", alt: "Huawei" },
  { src: "/companies/Picture10.png", alt: "Fortinet" },
  { src: "/companies/Picture11.png", alt: "Veeam" },
  { src: "/companies/Picture12.png", alt: "Acronis" },
  { src: "/companies/Picture14.png", alt: "ESET" },
  { src: "/companies/Picture15.png", alt: "Kaspersky" },
  { src: "/companies/Picture16.png", alt: "Supermicro" },
  { src: "/companies/Picture17.png", alt: "APC by Schneider Electric" },
];

const copy = {
  mn: {
    heading: "Хамтрагч байгууллагууд",
    ariaLabel: "Digital Apex-ийн хамтрагч байгууллагууд",
  },
  en: {
    heading: "Partner Organizations",
    ariaLabel: "Digital Apex partner organizations",
  },
};

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 mx-4 flex items-center justify-center w-36 h-20 rounded-xl bg-white dark:bg-white border border-border shadow-sm px-4 py-3">
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
  const { resolvedTheme } = useTheme();
  const { mn: isMN } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = isMN ? copy.mn : copy.en;
  const sparkleColor = mounted && resolvedTheme === "dark" ? "#ffffff" : "#1e1b4b";

  return (
    <section id="partners" className="overflow-hidden bg-secondary/30" aria-label={t.ariaLabel}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 text-center">
        <div className="flex justify-center">
          <AnimatedBadge text={t.heading} color="#6366f1" />
        </div>
      </div>

      <div className="relative h-36 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]" aria-hidden="true">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#6366f1,transparent_70%)] before:opacity-30" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-secondary/30" />
        <Sparkles
          density={900}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={sparkleColor}
          size={1.4}
          speed={1.8}
          opacity={0.9}
        />
      </div>

      <div className="relative -mt-4 pb-12">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex animate-marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <LogoCard key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
