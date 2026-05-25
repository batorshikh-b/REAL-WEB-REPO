"use client";

import Image from "next/image";
import { Brain, Rocket, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const en = {
  label: "Why Choose Us",
  h2: "What Sets Digital Apex Apart",
  description:
    "We combine deep IT expertise with a client-first mindset to deliver reliable, scalable solutions that grow with your business.",
  values: [
    {
      icon: Brain,
      title: "Digital Intelligence",
      description:
        "We leverage data, analytics, and AI to extract meaningful insights that empower smarter decisions.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "Continuous research into emerging technologies ensures our clients always benefit from forward-thinking solutions.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Our certified IT professionals bring deep domain expertise and a collaborative mindset to every engagement.",
    },
    {
      icon: TrendingUp,
      title: "Value Creator",
      description:
        "We measure success by the tangible value we create — optimized operations and lasting competitive advantage.",
    },
  ],
};

const mn = {
  label: "Яагаад биднийг сонгох вэ",
  h2: "Бидний тухай",
  description:
    "Бид мэргэжлийн IT мэдлэг болон хэрэглэгч төвтэй хандлагыг хослуулан бизнесийн өсөлтийг дэмжих найдвартай, уян хатан шийдлүүдийг хэрэгжүүлдэг.",
  values: [
    {
      icon: Brain,
      title: "Аюулгүй, найдвартай шийдэл",
      description:
        "Байгууллагын мэдээлэл, систем, дэд бүтцийг хамгаалах бодлого, тохиргоо, хяналтыг цогцоор хэрэгжүүлнэ.",
    },
    {
      icon: Rocket,
      title: "Шуурхай дэмжлэг үйлчилгээ",
      description:
        "Техникийн асуудлыг хурдан оношлон шийдвэрлэж, байгууллагын өдөр тутмын үйл ажиллагааг тасалдуулахгүй байхад анхаарна.",
    },
    {
      icon: Users,
      title: "Мэргэжлийн IT баг",
      description:
        "Сүлжээ, сервер, систем болон мэдээллийн аюулгүй байдлын чиглэлээр байгууллагын хэрэгцээнд нийцсэн шийдэл боловсруулна.",
    },
    {
      icon: TrendingUp,
      title: "Бизнесийн өсөлтийг дэмжих технологи",
      description:
        "Клауд, автоматжуулалт, дата-д суурилсан шийдлээр байгууллагын ирээдүйн өсөлтөд бэлэн орчин бүрдүүлнэ.",
    },
  ],
};

export function Testimonials() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading — full width */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
            {t.h2}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            {t.description}
          </p>
        </motion.div>

        {/* Cards + Image — same row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: 2x2 cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {t.values.map((value) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: image centered vertically */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/50 border border-border">
              <Image
                src="/monitoring.jpg"
                alt="IT Monitoring"
                width={1000}
                height={750}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
