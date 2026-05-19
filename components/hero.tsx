"use client";

import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { useLang } from "@/hooks/use-lang";

const en = {
  tagline: "Professional IT & Accounting Services",
  h1: "Make Things",
  vapourTexts: ["Digitalized", "Innovative", "Transformed"],
  description: "We combine digital intelligence with digital transformation to optimize operations and enhance customer experiences — driving organizational evolution in the dynamic digital landscape.",
  cta1: "Start Your Journey",
  cta2: "Explore Services",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Amazing Partners" },
    { value: "10+", label: "Ongoing Projects" },
    { value: "55+", label: "Team Members" },
  ],
  scroll: "Scroll to explore",
};

const mn = {
  tagline: "Мэргэжлийн Мэдээллийн технологийн болон Нягтлан бодох бүртгэлийн үйлчилгээ",
  h1: "Дижитал Апекс",
  vapourTexts: ["Дижиталжуулъя", "Шинийг санаачилъя", "Өөрчлөн шинэчилье"],
  description: "Бид дэвшилтэт технологи, шинэлэг шийдлүүдийг ашиглан байгууллагын хөгжил, уян хатан байдал, өсөлтийг дэмжиж, инноваци болон чанарыг эрхэмлэн ажилладаг.",
  cta1: "Эхлэх",
  cta2: "Үйлчилгээг үзэх",
  stats: [
    { value: "5+", label: "Жилийн туршлага" },
    { value: "10+", label: "Түншүүд" },
    { value: "10+", label: "Идэвхтэй төслүүд" },
    { value: "65+", label: "Багийн гишүүд" },
  ],
  scroll: "Доош гүйлгэнэ үү",
};

export function Hero() {  
  const { mn: isMN, mounted } = useLang();
  const t = isMN ? mn : en;

  const textColor = mounted && !isMN
    ? "rgb(229, 229, 229)"
    : "rgb(100, 100, 100)";

  return (
    <AuroraBackground className="min-h-screen pt-20" showRadialGradient={true}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
            {t.tagline}
          </p>

          <h1 className="text-4xl font-bold tracking-tight dark:text-white text-foreground sm:text-6xl lg:text-7xl">
            {t.h1}
          </h1>

          <div className="h-16 sm:h-20 lg:h-24 w-full">
            {mounted && (
              <VaporizeTextCycle
                texts={t.vapourTexts}
                font={{
                  fontFamily: "Geist, Inter, sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                }}
                color={textColor}
                spread={5}
                density={6}
                animation={{
                  vaporizeDuration: 2,
                  fadeInDuration: 1,
                  waitDuration: 1.5,
                }}
                direction="left-to-right"
                alignment="center"
                tag={Tag.H1}
              />
            )}
          </div>

          <p className="mt-4 text-lg leading-relaxed dark:text-neutral-300 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlassButton size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              {t.cta1}
              <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton size="lg" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>
              {t.cta2}
            </GlassButton>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold dark:text-white text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm dark:text-neutral-300 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs dark:text-neutral-400 text-muted-foreground">{t.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </AuroraBackground>
  );
}
