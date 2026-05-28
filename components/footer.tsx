"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { LocationMap } from "@/components/ui/expand-map";


const en = {
  locationHeader: "Location",
  address: "Ulaanbaatar, Sukhbaatar District, 1st Khoroo, Genden 16, MN Central Office, 12th Floor",
  mapLocation: "Ulaanbaatar, MN Central Office",
  mapCoordinates: "Sukhbaatar District, 1st Khoroo, Genden 16, 12th Floor",
  copyright: "Digital Apex. All rights reserved.",
};

const mn = {
  locationHeader: "Байршил",
  address: "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Гэндэн 16, MN Central Office, 12 давхар",
  mapLocation: "Улаанбаатар, MN Central Office",
  mapCoordinates: "Сүхбаатар дүүрэг, 1-р хороо, Гэндэн 16, 12 давхар",
  copyright: "Digital Apex. Бүх эрх хуулиар хамгаалагдсан.",
};

export function Footer() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">
          <div>
            <Link href="#top" className="inline-block" aria-label="Digital Apex home">
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

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.locationHeader}
            </h3>
            <a
              href="https://maps.google.com/?q=WW79%2B98C+%D0%9F.%D0%93%D1%8D%D0%BD%D0%B4%D1%8D%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD+%D0%B3%D1%83%D0%B4%D0%B0%D0%BC%D0%B6+%D1%88%D0%BE%D0%BD%D1%85%D0%BE%D1%80%2C+%D0%A1%D0%91%D0%94+-+1+%D1%85%D0%BE%D1%80%D0%BE%D0%BE%2C+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80+14241"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 group"
            >
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary transition-colors">{t.address}</p>
            </a>
          </div>

          <div className="flex items-start">
            <LocationMap location={t.mapLocation} coordinates={t.mapCoordinates} />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
