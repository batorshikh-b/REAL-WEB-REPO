"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { LocationMap } from "@/components/ui/expand-map";

const en = {
  locationHeader: "Location",
  address: "Ulaanbaatar, Sukhbaatar District, 1st Khoroo, Genden 16, MN Central Office, 12th Floor",
  copyright: "Digital Apex. All rights reserved.",
};

const mn = {
  locationHeader: "Байршил",
  address: "Улаанбаатар хот, Сүхбаатар дүүрэг, 1р хороо, Гэндэн 16, MN Central Office 12 давхар",
  copyright: "Digital Apex. Бүх эрх хуулиар хамгаалагдсан.",
};

export function Footer() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">

          {/* Logo */}
          <div>
            <Link href="/" className="inline-block" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Image
                src="/logo-light.png"
                alt="Digital Apex"
                width={160}
                height={48}
                className="h-12 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt="Digital Apex"
                width={160}
                height={48}
                className="h-12 w-auto object-contain hidden dark:block"
              />
            </Link>
          </div>

          {/* Location text */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.locationHeader}
            </h3>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{t.address}</p>
            </div>
          </div>

          {/* Interactive map card */}
          <div className="flex items-start">
            <LocationMap
              location={isMN ? "Улаанбаатар, MN Central Office" : "Ulaanbaatar, MN Central Office"}
              coordinates="Сүхбаатар дүүрэг, 1р хороо, Гэндэн 16, 12 давхар"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
