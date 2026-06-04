"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useLang } from "@/hooks/use-lang";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const en = {
  tagline: "Professional IT Consulting service",
  h1a: "Digital",
  h1b: "Apex",
  description: "We combine digital intelligence with digital transformation to optimize operations and enhance customer experiences — driving organizational evolution in the dynamic digital landscape.",
  cta1: "Start Your Journey",
  cta2: "Explore Services",
  stats: [
    { value: "20+", label: "Years Experience" },
    { value: "15+", label: "Partners" },
    { value: "10+", label: "Ongoing Projects" },
    { value: "55+", label: "Specialists" },
  ],
};

const mn = {
  tagline: "Мэргэжлийн Мэдээллийн технологийн үйлчилгээ",
  h1a: "Дижитал",
  h1b: "Апекс",
  description: "Бид дэвшилтэт технологи, шинэлэг шийдлүүдийг ашиглан байгууллагын хөгжил, уян хатан байдал, өсөлтийг дэмжиж, инноваци болон чанарыг эрхэмлэн ажилладаг.",
  cta1: "Эхлэх",
  cta2: "Үйлчилгээг үзэх",
  stats: [
    { value: "20+", label: "Жилийн туршлага" },
    { value: "15+", label: "Харилцагчид" },
    { value: "10+", label: "Идэвхтэй төслүүд" },
    { value: "55+", label: "Мэргэжилтэн" },
  ],
};

export function Hero() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;
  const router = useRouter();

  return (
    <AuroraBackground className="min-h-screen pt-20" showRadialGradient={true}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            className="text-sm font-medium uppercase tracking-widest text-primary mb-6"
            {...fadeUp(0.1)}
          >
            {t.tagline}
          </motion.p>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            {...fadeUp(0.25)}
          >
            <span className="dark:text-white text-foreground">
              {t.h1a}{" "}
            </span>
            <span className="neon-apex">
              {t.h1b}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed dark:text-neutral-300 text-muted-foreground max-w-2xl mx-auto text-pretty"
            {...fadeUp(0.4)}
          >
            {t.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            {...fadeUp(0.55)}
          >
            <GlassButton size="lg" onClick={() => router.push("/contact")}>
              {t.cta1}
              <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton size="lg" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.cta2}
            </GlassButton>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
            {...fadeUp(0.7)}
          >
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold dark:text-white text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm dark:text-neutral-300 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </AuroraBackground>
  );
}
