"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/ui/lang-toggle";
import { useLang } from "@/hooks/use-lang";

const navItems = {
  en: [
    { name: "About Us", href: "#about" },
    { name: "Partners", href: "#partners" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ],
  mn: [
    { name: "Бидний тухай", href: "#about" },
    { name: "Хамтрагчид", href: "#partners" },
    { name: "Үйлчилгээ", href: "#services" },
    { name: "Холбоо барих", href: "#contact" },
  ],
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mn: isMN } = useLang();
  const navigation = isMN ? navItems.mn : navItems.en;

  const { scrollY } = useScroll();
  const springCfg = { stiffness: 200, damping: 30, mass: 0.8 };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Outer header padding
  const rawPad = useTransform(scrollY, [0, 80], [0, isMobile ? 10 : 16]);
  const pad = useSpring(rawPad, springCfg);

  // Nav inner padding
  const rawNavPX = useTransform(scrollY, [0, 80], [isMobile ? 16 : 32, isMobile ? 14 : 20]);
  const rawNavPY = useTransform(scrollY, [0, 80], [isMobile ? 14 : 20, isMobile ? 10 : 12]);
  const navPX = useSpring(rawNavPX, springCfg);
  const navPY = useSpring(rawNavPY, springCfg);

  // Shape
  const rawRadius = useTransform(scrollY, [0, 80], [0, 9999]);
  const borderRadius = useSpring(rawRadius, springCfg);

  const rawMaxW = useTransform(scrollY, [0, 80], [9999, isMobile ? 9999 : 1100]);
  const maxWidth = useSpring(rawMaxW, springCfg);

  // Background (light theme: white, dark theme handled via CSS var)
  const rawBg = useTransform(scrollY, [0, 80], [0, 0.88]);
  const bgAlpha = useSpring(rawBg, springCfg);
  const backgroundColor = useTransform(bgAlpha, (v) =>
    `rgba(255,255,255,${v})`
  );
  const darkBgColor = useTransform(bgAlpha, (v) =>
    `rgba(23,23,23,${v})`
  );

  // Blur
  const rawBlur = useTransform(scrollY, [0, 80], [0, 12]);
  const blur = useSpring(rawBlur, springCfg);
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px)`);

  // Border opacity
  const rawBorder = useTransform(scrollY, [0, 80], [0, 0.15]);
  const borderAlpha = useSpring(rawBorder, springCfg);
  const borderColor = useTransform(borderAlpha, (v) =>
    `rgba(255,255,255,${v})`
  );

  // Shadow
  const rawShadow = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowVal = useSpring(rawShadow, springCfg);
  const boxShadow = useTransform(shadowVal, (v) =>
    v > 0.02
      ? `0 4px 24px rgba(0,0,0,${v * 0.07}), 0 1px 3px rgba(0,0,0,${v * 0.05})`
      : "none"
  );

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        paddingLeft: pad,
        paddingRight: pad,
        paddingTop: pad,
      }}
    >
      {/* Light-theme nav */}
      <motion.nav
        className="mx-auto flex items-center justify-between dark:hidden"
        style={{
          maxWidth,
          borderRadius,
          paddingLeft: navPX,
          paddingRight: navPX,
          paddingTop: navPY,
          paddingBottom: navPY,
          backgroundColor,
          backdropFilter,
          boxShadow,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor,
        }}
      >
        <NavContent
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
        />
      </motion.nav>

      {/* Dark-theme nav */}
      <motion.nav
        className="mx-auto hidden dark:flex items-center justify-between"
        style={{
          maxWidth,
          borderRadius,
          paddingLeft: navPX,
          paddingRight: navPX,
          paddingTop: navPY,
          paddingBottom: navPY,
          backgroundColor: darkBgColor,
          backdropFilter,
          boxShadow,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor,
        }}
      >
        <NavContent
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
        />
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          id="mobile-navigation"
          className="lg:hidden mt-2 px-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mx-auto max-w-5xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-white/10 px-6 py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <GlassButton
                  key={item.name}
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </GlassButton>
              ))}
            </div>
            <div className="pt-4 flex items-center gap-4 border-t border-border mt-4">
              <LangToggle />
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavContent({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}: {
  navigation: { name: string; href: string }[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  scrollToSection: (href: string) => void;
}) {
  return (
    <>
      <div className="flex lg:flex-1">
        <Link href="#top" className="-m-1.5 p-1.5" aria-label="Digital Apex home">
          <Image
            src="/logo-dark.svg"
            alt="Digital Apex Logo"
            width={140}
            height={40}
            priority
            className="hidden dark:block"
            style={{ width: "auto", height: "2rem" }}
          />
          <Image
            src="/logo-light.png"
            alt="Digital Apex Logo"
            width={140}
            height={40}
            priority
            className="dark:hidden"
            style={{ width: "auto", height: "2rem" }}
          />
        </Link>
      </div>

      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-x-3 lg:px-8">
        {navigation.map((item) => (
          <GlassButton
            key={item.name}
            size="sm"
            onClick={() => scrollToSection(item.href)}
          >
            {item.name}
          </GlassButton>
        ))}
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
        <LangToggle />
        <ThemeToggle />
      </div>
    </>
  );
}
