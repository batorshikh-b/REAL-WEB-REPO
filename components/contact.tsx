"use client";

import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { DottedSurface } from "@/components/ui/dotted-surface";

const contact = {
  email: "admin@digitalapex.mn",
  phoneDisplay: "+976 7777 3553",
  phoneHref: "+97677773553",
  website: "www.digitalapex.mn",
  websiteHref: "https://www.digitalapex.mn",
};

const en = {
  label: "Contact Us",
  h2line1: "Let's Discuss Your",
  h2line2: "Digital Journey",
  description:
    "Talk with Digital Apex about reliable technology solutions matched to your business goals.",
  emailLabel: "Email",
  phoneLabel: "Phone",
  websiteLabel: "Website",
};

const mn = {
  label: "Холбоо барих",
  h2line1: "Таны дижитал хөгжлийг",
  h2line2: "хамтдаа эхлүүлье",
  description:
    "Digital Apex таны бизнесийн зорилгод нийцсэн найдвартай, үр ашигтай технологийн шийдлийг санал болгоно.",
  emailLabel: "Имэйл",
  phoneLabel: "Утас",
  websiteLabel: "Вэбсайт",
};

export function Contact() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="contact" className="relative overflow-hidden pt-14 pb-28 lg:pt-20 lg:pb-36 bg-background">
      <DottedSurface />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-12 -mt-8"
        >
          <div className="flex justify-center mb-4 scale-125">
            <AnimatedBadge text={t.label} color="#6366f1" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.h2line1}
            <br />
            <span className="text-muted-foreground">{t.h2line2}</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a href={`mailto:${contact.email}`} className="group flex items-start gap-4 rounded-xl p-2 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:-rotate-6">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.emailLabel}</p>
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                {contact.email}
              </span>
            </div>
          </a>

          <a href={`tel:${contact.phoneHref}`} className="group flex items-start gap-4 rounded-xl p-2 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:-rotate-6">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.phoneLabel}</p>
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                {contact.phoneDisplay}
              </span>
            </div>
          </a>

          <a
            href={contact.websiteHref}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-xl p-2 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:-rotate-6">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium text-foreground">{t.websiteLabel}</p>
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                {contact.website}
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
