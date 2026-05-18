"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#about" },
  { name: "FAQ", href: "#process" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-full shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/20 dark:border-white/10">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            {/* Dark mode logo - full logo with white text */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da_white1-v6PC8CfucMqVzpOmSM7DTZ2TZvxgGV.png"
              alt="Digital Apex Logo"
              width={140}
              height={32}
              className="h-8 w-auto hidden dark:block"
            />
            {/* Light mode logo - geometric blue shapes */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da-old-4wpM0jd1A4XJ1glWlTVx9iDWFvKkRQ.png"
              alt="Digital Apex Logo"
              width={80}
              height={32}
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
        
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          <ThemeToggle />
          <GlassButton size="sm" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Us
          </GlassButton>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2">
          <div className="mx-auto max-w-4xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-white/10 px-6 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 flex items-center gap-4 border-t border-border mt-4">
              <ThemeToggle />
              <GlassButton size="sm" className="flex-1" onClick={() => { setMobileMenuOpen(false); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Contact Us
              </GlassButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
