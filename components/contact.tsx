"use client";

import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";
import { LampContainer } from "@/components/ui/lamp";
import { AnimatedBadge } from "@/components/ui/animated-badge";

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
  h2line1: "Таны дижитал хөгжлийг",
  h2line2: "хамтдаа эхлүүлье",
  description: "Байгууллагынхаа IT дэд бүтэц, систем, аюулгүй байдал болон дижитал шилжилтийн хэрэгцээг бидэнтэй ярилцаарай. Digital Apex таны бизнесийн зорилгод нийцсэн найдвартай, үр ашигтай технологийн шийдлийг санал болгоно.",
  emailLabel: "Имэйл",
  phoneLabel: "Утас",
  websiteLabel: "Вэбсайт",
};

export function Contact() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="contact">
      <LampContainer>
        {/* Label + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-12"
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

        {/* Contact items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
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
        </motion.div>
      </LampContainer>
    </section>
  );
}
