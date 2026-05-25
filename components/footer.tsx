"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/hooks/use-lang";
import { LocationMap } from "@/components/ui/expand-map";

const en = {
  tagline: "Combining digital intelligence with digital transformation to optimize operations and enhance customer experiences.",
  brand: "Digital Solutions",
  servicesHeader: "Services",
  companyHeader: "Company",
  copyright: "Digital Apex. All rights reserved.",
  services: [
    { name: "IT Helpdesk & Support", href: "#services" },
    { name: "Corporate Network & Maintenance", href: "#services" },
    { name: "Server Hosting & Datacenter", href: "#services" },
    { name: "User Data Security", href: "#services" },
    { name: "System Development Support", href: "#services" },
    { name: "IT Project Management", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#testimonials" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

const mn = {
  tagline: "Дижитал оюун ухаан болон дижитал хувиргалтыг хослуулан үйл ажиллагааг оновчтой болгож, хэрэглэгчийн туршлагыг сайжруулдаг.",
  brand: "Дижитал шийдэл",
  servicesHeader: "Үйлчилгээ",
  companyHeader: "Компани",
  copyright: "Digital Apex. Бүх эрх хуулиар хамгаалагдсан.",
  services: [
    { name: "IT Helpdesk үйлчилгээ", href: "#services" },
    { name: "Corporate сүлжээний үйлчилгээ", href: "#services" },
    { name: "Сервер & Датацентрийн үйлчилгээ", href: "#services" },
    { name: "Мэдээллийн аюулгүй байдал", href: "#services" },
    { name: "Систем хөгжүүлэлтийн үйлчилгээ", href: "#services" },
    { name: "IT төслийн удирдлага", href: "#services" },
  ],
  company: [
    { name: "Бидний тухай", href: "#testimonials" },
    { name: "Үйлчилгээ", href: "#services" },
    { name: "Холбоо барих", href: "#contact" },
  ],
  privacy: "Нууцлалын бодлого",
  terms: "Үйлчилгээний нөхцөл",
};

export function Footer() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Image
                src="/logo-light.png"
                alt="Digital Apex"
                width={160}
                height={48}
                className="h-12 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo-dark.png"
                alt="Digital Apex"
                width={160}
                height={48}
                className="h-12 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t.tagline}
            </p>
            <p className="mt-2 text-sm text-primary font-medium">{t.brand}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t.servicesHeader}</h3>
            <ul className="mt-4 space-y-3">
              {t.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t.companyHeader}</h3>
            <ul className="mt-4 space-y-3">
              {t.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start pt-1">
            <LocationMap
              location={isMN ? "Улаанбаатар, MN Tower" : "Ulaanbaatar, MN Tower"}
              coordinates="П.Гэндэнгийн гудамж шонхор, СБД - 1 хороо, Улаанбаатар 14241"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.privacy}</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
