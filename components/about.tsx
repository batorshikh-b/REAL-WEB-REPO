"use client";

import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/hooks/use-lang";

const en = {
  label: "About Us",
  h2line1: "Your Trusted Partner in",
  h2line2: "Digital Transformation",
  p1: "Digital Apex combines digital intelligence with digital transformation to optimize operations and enhance customer experiences — driving organizational evolution in the dynamic digital landscape.",
  p2: "Our team of certified IT and accounting professionals works alongside your organization to craft tailored solutions that align with your business objectives, creating measurable and lasting value.",
  highlights: [
    "Digital intelligence-driven solutions",
    "End-to-end digital transformation",
    "55+ certified IT & accounting professionals",
    "10+ years of industry partnerships",
    "IT consulting, development & security",
    "Long-term value creation approach",
  ],
  yearsLabel: "Years of Excellence",
  yearsDesc: "Delivering digital transformation in Mongolia",
  stat1label: "Team Members",
  stat2label: "Active Partners",
};

const mn = {
  label: "Бидний тухай",
  h2line1: "Таны найдвартай түнш",
  h2line2: "Дижитал хувиргалтад",
  p1: "Дижитал Апекс нь дижитал оюун ухаан болон дижитал хувиргалтыг хослуулан үйл ажиллагааг оновчтой болгож, хэрэглэгчийн туршлагыг сайжруулдаг — динамик дижитал орчинд байгууллагын хөгжлийг хурдасгадаг.",
  p2: "МТ болон нягтлан бодох бүртгэлийн мэргэжилтэн баг таны байгууллагатай хамтран ажиллаж, бизнесийн зорилгод нийцсэн тусгай шийдлүүдийг боловсруулж, тэмдэглэгдэхүйц болон удаан эдэлгээтэй үнэ цэнийг бүтээдэг.",
  highlights: [
    "Дижитал оюун ухаанд суурилсан шийдэл",
    "Эхнээс эцэс хүртэлх дижитал хувиргалт",
    "55+ баталгаажсан МТ & НББ мэргэжилтэн",
    "10+ жилийн аж үйлдвэрийн түншлэл",
    "МТ зөвлөх, хөгжүүлэлт & аюулгүй байдал",
    "Урт хугацааны үнэ цэнэ бүтээх арга барил",
  ],
  yearsLabel: "Тэргүүлэгч жилүүд",
  yearsDesc: "Монголд дижитал хувиргалт хэрэгжүүлж байна",
  stat1label: "Багийн гишүүд",
  stat2label: "Идэвхтэй түншүүд",
};

export function About() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {t.label}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {t.h2line1}
              <br />
              <span className="text-muted-foreground">{t.h2line2}</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t.p1}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.p2}</p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-20">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-7xl font-bold text-primary mb-4">5+</div>
                <p className="text-lg font-medium text-foreground">{t.yearsLabel}</p>
                <p className="text-sm text-muted-foreground mt-2">{t.yearsDesc}</p>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-2xl font-bold text-foreground">55+</p>
                    <p className="text-xs text-muted-foreground">{t.stat1label}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-xs text-muted-foreground">{t.stat2label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
