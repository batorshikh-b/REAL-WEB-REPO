"use client";

import { ShieldCheck, Headphones, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const en = {
  label: "Why Choose Us",
  h2: "About Digital Apex",
  description:
    "We help organizations build secure, reliable IT environments with fast support, practical infrastructure expertise, and technology that supports long-term business growth.",
  values: [
    {
      id: "secure-solutions",
      icon: ShieldCheck,
      stat: "100%",
      statLabel: "Secure",
      title: "Secure, Reliable Solutions",
      description:
        "We implement policies, configurations, and monitoring that protect your systems, infrastructure, and business data end-to-end.",
    },
    {
      id: "fast-support",
      icon: Headphones,
      stat: "24/7",
      statLabel: "Support",
      title: "Fast Support Service",
      description:
        "We diagnose and resolve technical issues quickly so your daily operations stay productive and uninterrupted.",
    },
    {
      id: "professional-team",
      icon: Users,
      stat: "55+",
      statLabel: "Experts",
      title: "Professional IT Team",
      description:
        "Our team designs practical solutions for networks, servers, systems, and information security based on each organization's needs.",
    },
    {
      id: "business-growth",
      icon: TrendingUp,
      stat: "10+",
      statLabel: "Years",
      title: "Technology for Business Growth",
      description:
        "We prepare your organization for future growth through cloud, automation, and data-driven technology solutions.",
    },
  ],
};

const mn = {
  label: "Яагаад биднийг сонгох вэ",
  h2: "Бидний тухай",
  description:
    "Байгууллагуудад аюулгүй, найдвартай IT орчин бүрдүүлэхэд туслах бөгөөд шуурхай дэмжлэг, дэд бүтцийн мэргэжлийн шийдэл, бизнесийн урт хугацааны өсөлтийг дэмжих технологиор хангадаг.",
  values: [
    {
      id: "secure-solutions",
      icon: ShieldCheck,
      stat: "100%",
      statLabel: "Аюулгүй",
      title: "Аюулгүй, найдвартай шийдэл",
      description:
        "Байгууллагын мэдээлэл, систем, дэд бүтцийг хамгаалах бодлого, тохиргоо, хяналтыг цогцоор хэрэгжүүлнэ.",
    },
    {
      id: "fast-support",
      icon: Headphones,
      stat: "24/7",
      statLabel: "Дэмжлэг",
      title: "Шуурхай дэмжлэг үйлчилгээ",
      description:
        "Техникийн асуудлыг хурдан оношлон шийдвэрлэж, байгууллагын өдөр тутмын үйл ажиллагааг тасалдуулахгүй байхад анхаарна.",
    },
    {
      id: "professional-team",
      icon: Users,
      stat: "55+",
      statLabel: "Мэргэжилтэн",
      title: "Мэргэжлийн IT баг",
      description:
        "Сүлжээ, сервер, систем болон мэдээллийн аюулгүй байдлын чиглэлээр байгууллагын хэрэгцээнд нийцсэн шийдэл боловсруулна.",
    },
    {
      id: "business-growth",
      icon: TrendingUp,
      stat: "10+",
      statLabel: "Жил",
      title: "Бизнесийн өсөлтийг дэмжих технологи",
      description:
        "Клауд, автоматжуулалт, дата-д суурилсан шийдлээр байгууллагын ирээдүйн өсөлтөд бэлэн орчин бүрдүүлнэ.",
    },
  ],
};

export function WhyChooseUs() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
            {t.h2}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {t.values.map((value) => (
            <motion.div
              key={value.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group relative p-7 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Top row: icon + stat */}
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  <value.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary leading-none">{value.stat}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{value.statLabel}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">{value.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
