"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat { animation: footer-heartbeat 2s cubic-bezier(0.25,1,0.5,1) infinite; }

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, var(--primary) 18%, transparent) 0%,
    color-mix(in oklch, var(--secondary) 12%, transparent) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 0 10px 30px -10px var(--pill-shadow), inset 0 1px 1px var(--pill-highlight), inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px var(--pill-shadow-hover), inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

.footer-giant-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, { x: x * 0.35, y: y * 0.35, rotationX: -y * 0.12, rotationY: x * 0.12, scale: 1.05, ease: "power2.out", duration: 0.4 });
        };
        const handleMouseLeave = () => {
          gsap.to(element, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: "elastic.out(1,0.3)", duration: 1.2 });
        };
        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const en = {
  marquee: ["IT Consulting", "Network Security", "Helpdesk Support", "Cloud Solutions", "Data Protection", "Digital Transformation"],
  heading: "Let's work together",
  about: "About Us",
  services: "Services",
  partners: "Partners",
  contact: "Contact Us",
  locationLabel: "Location",
  address: "Ulaanbaatar, Sukhbaatar District\n1st Khoroo, Genden 16\nMN Central Office, 12th Floor",
  email: "admin@digitalapex.mn",
  phone: "7777 3553",
  copyright: "Digital Apex. All rights reserved.",
  madeWith: "Built with",
  backTop: "Back to top",
};

const mn = {
  marquee: ["IT Зөвлөх", "Сүлжээний Аюулгүй байдал", "Helpdesk Дэмжлэг", "Клауд Шийдэл", "Мэдээлэл Хамгаалалт", "Дижитал Хувиргалт"],
  heading: "Хамтран ажиллацгаая",
  about: "Бидний тухай",
  services: "Үйлчилгээ",
  partners: "Хамтрагчид",
  contact: "Холбоо барих",
  locationLabel: "Байршил",
  address: "Улаанбаатар, Сүхбаатар дүүрэг\n1-р хороо, Гэндэн 16\nMN Central Office, 12 давхар",
  email: "admin@digitalapex.mn",
  phone: "7777 3553",
  copyright: "Digital Apex. Бүх эрх хуулиар хамгаалагдсан.",
  madeWith: "Бүтээсэн",
  backTop: "Дээш",
};

function MarqueeTrack({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
      {doubled.map((item, i) => (
        <span key={i} className="flex items-center gap-8 px-6">
          {item}
          <span className="text-primary/50">✦</span>
        </span>
      ))}
    </div>
  );
}

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 } }
      );
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 40%", end: "bottom bottom", scrub: 1 } }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground cinematic-footer-wrapper">

          {/* Aurora glow */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant bg text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            APEX
          </div>

          {/* Marquee */}
          <div className="absolute top-24 left-0 w-full overflow-hidden border-y border-border/50 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <MarqueeTrack items={t.marquee} />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">

            {/* Logo */}
            <Link href="#top" className="mb-8 block" aria-label="Digital Apex home">
              <Image src="/logo-dark.svg" alt="Digital Apex" width={180} height={48} className="hidden dark:block" style={{ height: "3rem", width: "auto" }} />
              <Image src="/logo-light.png" alt="Digital Apex" width={180} height={48} className="dark:hidden" style={{ height: "3rem", width: "auto" }} />
            </Link>

            <h2
              ref={headingRef}
              className="text-4xl md:text-7xl font-black footer-text-glow tracking-tighter mb-8 text-center"
            >
              {t.heading}
            </h2>

            <MagneticButton
              as="a"
              ref={linksRef as React.Ref<HTMLElement>}
              href="https://maps.google.com/?q=WW79%2B98C+%D0%9F.%D0%93%D1%8D%D0%BD%D0%B4%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD+%D0%B3%D1%83%D0%B4%D0%B0%D0%BC%D0%B6+%D1%88%D0%BE%D0%BD%D1%85%D0%BE%D1%80%2C+%D0%A1%D0%91%D0%94+-+1+%D1%85%D0%BE%D1%80%D0%BE%D0%BE%2C+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80+14241"
              target="_blank"
              rel="noreferrer"
              className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 text-muted-foreground text-xs font-medium hover:text-foreground"
            >
              <MapPin className="w-3 h-3 text-primary shrink-0" />
              {t.address.replace(/\n/g, " · ")}
            </MagneticButton>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © {new Date().getFullYear()} {t.copyright}
            </p>


            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group order-3"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>
          </div>

        </footer>
      </div>
    </>
  );
}
