"use client";

import { useLang } from "@/hooks/use-lang";

const en = {
  label: "FAQ",
  h2line1: "Frequently Asked",
  h2line2: "Questions",
  faqs: [
    {
      number: "01",
      title: "What services does Digital Apex offer?",
      description: "We provide 11 core service lines: Software Development & Support, Network Management & Security, Data Management, R&D, End-User Support, Cloud & Datacenter Services, IT Consulting & Strategy, IT Project Management, IT Security & Compliance, Disaster Recovery & Business Continuity, and Digital Intelligence & Transformation.",
    },
    {
      number: "02",
      title: "How does Digital Apex approach new projects?",
      description: "We start with a thorough discovery phase to understand your organization's goals and challenges. From there, we build a tailored strategy, execute with precision using proven methodologies, and provide continuous optimization and support post-delivery.",
    },
    {
      number: "03",
      title: "Does Digital Apex serve small businesses as well as enterprises?",
      description: "Yes. Our solutions are scalable and adapted to organizations of all sizes. Whether you are a growing startup or an established enterprise, we craft solutions that match your scale, budget, and ambitions.",
    },
    {
      number: "04",
      title: "How do I get started with Digital Apex?",
      description: "Simply reach out via our contact section or call us at +976 7777 5335. Our team will schedule an initial consultation to understand your needs and propose the right path forward — no commitment required.",
    },
  ],
};

const mn = {
  label: "Түгээмэл асуулт",
  h2line1: "Түгээмэл асуудаг",
  h2line2: "Асуултууд",
  faqs: [
    {
      number: "01",
      title: "Digital Apex ямар үйлчилгээ үзүүлдэг вэ?",
      description: "Бид 11 үндсэн үйлчилгээний чиглэлийг хамардаг: Програм хангамж хөгжүүлэлт, Сүлжээний удирдлага & аюулгүй байдал, Өгөгдлийн удирдлага, Судалгаа & хөгжүүлэлт, Хэрэглэгчийн дэмжлэг, Клауд & өгөгдлийн төвийн үйлчилгээ, МТ зөвлөх & стратеги, МТ төслийн удирдлага, МТ аюулгүй байдал & нийцэл, Осол сэргээн засварлалт, болон Дижитал оюун ухаан & хувиргалт.",
    },
    {
      number: "02",
      title: "Digital Apex шинэ төслүүдэд хэрхэн ханддаг вэ?",
      description: "Бид байгууллагын зорилго, сорилтуудыг ойлгох нарийн нээлтийн үе шатаас эхэлдэг. Дараа нь тусгай стратеги боловсруулж, туршлагатай аргачлалаар нарийн хэрэгжүүлж, хүргэлтийн дараа тасралтгүй оновчтой болгох, дэмжлэг үзүүлнэ.",
    },
    {
      number: "03",
      title: "Digital Apex жижиг бизнест мөн үйлчилдэг үү?",
      description: "Тийм ээ. Бидний шийдлүүд нь бүх хэмжээний байгууллагад тохирсон уян хатан байдалтай. Та өсөн нэмэгдэж буй стартап ч юм уу тогтсон томоохон аж ахуйн нэгж ч бай, таны хэмжээ, төсөв, зорилгод нийцсэн шийдлийг бид боловсруулж өгнө.",
    },
    {
      number: "04",
      title: "Digital Apex-тэй хэрхэн холбогдох вэ?",
      description: "Холбоо барих хэсгээр дамжуулан эсвэл +976 7777 5335 дугаарт залгаарай. Манай баг таны хэрэгцээг ойлгож, зөв зам санал болгохын тулд анхны зөвлөгөөний цаг товлоно — ямар ч үүрэг хариуцлага шаардлагагүй.",
    },
  ],
};

export function Process() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="process" className="py-24 bg-background">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.faqs.map((faq, index) => (
            <div key={faq.number} className="relative">
              {index < t.faqs.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              <div className="group">
                <div className="text-5xl font-bold text-primary/20 mb-4 transition-colors group-hover:text-primary/40">
                  {faq.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{faq.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
