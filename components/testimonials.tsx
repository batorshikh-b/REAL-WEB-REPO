"use client";

import { Brain, Rocket, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const en = {
  label: "Why Choose Us",
  h2: "What Sets Digital Apex Apart",
  values: [
    {
      icon: Brain,
      title: "Digital Intelligence",
      description: "We leverage data, analytics, and AI to extract meaningful insights that empower smarter decisions and drive organizational intelligence at every level.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Continuous research and exploration of emerging technologies ensure our clients always benefit from the most effective and forward-thinking solutions available.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our 55+ certified IT and accounting professionals bring deep domain expertise, dedication, and a collaborative mindset to every client engagement.",
    },
    {
      icon: TrendingUp,
      title: "Value Creator",
      description: "We measure success by the tangible value we create — optimized operations, enhanced customer experiences, and lasting competitive advantage for our partners.",
    },
  ],
};

const mn = {
  label: "Яагаад биднийг сонгох вэ",
  h2: "Бидний тухай",
  values: [
    {
      icon: Brain,
      title: "Дижитал оюун ухаан",
      description: "Мэдээлэл, аналитик болон хиймэл оюун ухааныг ашиглан илүү ухаалаг шийдвэр гаргахыг дэмжиж, байгууллагын оюун ухааны чадавхыг бүх түвшинд нэмэгдүүлдэг.",
    },
    {
      icon: Rocket,
      title: "Инноваци тэргүүлэх",
      description: "Шинэ технологийн тасралтгүй судалгаа, хайгуулаар хэрэглэгчид үргэлж хамгийн үр дүнтэй, ирээдүйтэй шийдлүүдийг хүлээн авдаг.",
    },
    {
      icon: Users,
      title: "Мэргэжлийн баг",
      description: "55+ баталгаажсан МТ болон нягтлан бодох бүртгэлийн мэргэжилтэн бүх үйлчлүүлэгчийн ажилд гүн мэдлэг, тууштай байдал, хамтын сэтгэлгээгээр хандана.",
    },
    {
      icon: TrendingUp,
      title: "Үнэ цэнэ бүтээгч",
      description: "Амжилтыг бодитоор хэмждэг — үйл ажиллагааг оновчтой болгох, хэрэглэгчийн туршлагыг сайжруулах, хамтрагчиддаа урт хугацааны өрсөлдөх давуу талыг бий болгох.",
    },
  ],
};

export function Testimonials() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.h2}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {t.values.map((value) => (
            <motion.div
              key={value.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              className="relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
