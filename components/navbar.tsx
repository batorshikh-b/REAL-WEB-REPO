"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/ui/lang-toggle";
import { useLang } from "@/hooks/use-lang";

const navItems = {
  en: [
    { name: "About Us", href: "#testimonials" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ],
  mn: [
    { name: "Бидний тухай", href: "#testimonials" },
    { name: "Үйлчилгээ", href: "#services" },
    { name: "Холбоо барих", href: "#contact" },
  ],
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mn: isMN } = useLang();
  const navigation = isMN ? navItems.mn : navItems.en;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-4xl flex items-center justify-between px-5 py-3 rounded-full border bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm shadow-md shadow-black/5 dark:shadow-black/20 border-white/20 dark:border-white/10">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image
              src="/logo-dark.svg"
              alt="Digital Apex Logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto hidden dark:block"
            />
            <Image
              src="/logo-light.png"
              alt="Digital Apex Logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto dark:hidden"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
            >
              {item.name}
            </GlassButton>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          <LangToggle />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2">
          <div className="mx-auto max-w-4xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-white/10 px-6 py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <GlassButton
                  key={item.name}
                  size="sm"
                  className="w-full"
                  onClick={() => { setMobileMenuOpen(false); document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }); }}
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
        </div>
      )}
    </header>
  );
}
