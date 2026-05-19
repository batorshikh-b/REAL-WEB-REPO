"use client";

import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import { useLang } from "@/hooks/use-lang";

const en = {
  tagline: "Combining digital intelligence with digital transformation to optimize operations and enhance customer experiences.",
  brand: "Make things D1G1T@L1ZED",
  servicesHeader: "Services",
  companyHeader: "Company",
  copyright: "Digital Apex. All rights reserved.",
  services: [
    { name: "Software Development", href: "#services" },
    { name: "Network & Security", href: "#services" },
    { name: "Cloud & Datacenter", href: "#services" },
    { name: "Digital Intelligence", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

const mn = {
  tagline: "Дижитал оюун ухаан болон дижитал хувиргалтыг хослуулан үйл ажиллагааг оновчтой болгож, хэрэглэгчийн туршлагыг сайжруулдаг.",
  brand: "Бүгдийг ДИЖИТАЛЧИЛЪЯ",
  servicesHeader: "Үйлчилгээ",
  companyHeader: "Компани",
  copyright: "Digital Apex. Бүх эрх хуулиар хамгаалагдсан.",
  services: [
    { name: "Програм хангамж", href: "#services" },
    { name: "Сүлжээ & аюулгүй байдал", href: "#services" },
    { name: "Клауд & өгөгдлийн төв", href: "#services" },
    { name: "Дижитал оюун ухаан", href: "#services" },
  ],
  company: [
    { name: "Бидний тухай", href: "#about" },
    { name: "Түгээмэл асуулт", href: "#process" },
    { name: "Холбоо барих", href: "#contact" },
  ],
  privacy: "Нууцлалын бодлого",
  terms: "Үйлчилгээний нөхцөл",
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export function Footer() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Digital<span className="text-primary">Apex</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t.tagline}
            </p>
            <p className="mt-2 text-sm text-primary font-medium">{t.brand}</p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
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
            <div className="mt-6 space-y-1">
              <p className="text-xs text-muted-foreground">info@digitalapex.mn</p>
              <p className="text-xs text-muted-foreground">+976 7777 5335</p>
              <p className="text-xs text-muted-foreground">www.digitalapex.mn</p>
            </div>
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
