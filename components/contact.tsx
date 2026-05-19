"use client";

import { Mail, Phone, Globe } from "lucide-react";
import { useLang } from "@/hooks/use-lang";

const en = {
  label: "Contact Us",
  h2line1: "Let's Discuss Your",
  h2line2: "Digital Journey",
  description: "Ready to transform your organization with digital intelligence? Our team is here to help you navigate every step of your digital evolution.",
  emailLabel: "Email",
  phoneLabel: "Phone",
  websiteLabel: "Website",
};

const mn = {
  label: "Холбоо барих",
  h2line1: "Таны дижитал аяллыг",
  h2line2: "Хамтдаа ярилцъя",
  description: "Дижитал оюун ухаанаар байгууллагаа хувиргахад бэлэн үү? Манай баг таны дижитал хөгжлийн алхам бүрт туслахад бэлэн байна.",
  emailLabel: "Имэйл",
  phoneLabel: "Утас",
  websiteLabel: "Вэбсайт",
};

export function Contact() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.h2line1}
            <br />
            <span className="text-muted-foreground">{t.h2line2}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.emailLabel}</p>
              <a href="mailto:info@digitalapex.mn" className="text-muted-foreground hover:text-primary transition-colors">
                info@digitalapex.mn
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.phoneLabel}</p>
              <a href="tel:+97677775335" className="text-muted-foreground hover:text-primary transition-colors">
                +976 7777 5335
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.websiteLabel}</p>
              <p className="text-muted-foreground">www.digitalapex.mn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
