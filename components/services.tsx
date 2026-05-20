"use client";

import { HeadphonesIcon, Network, Database, ShieldCheck, Code, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const services = [
  { icon: HeadphonesIcon },
  { icon: Network },
  { icon: Database },
  { icon: ShieldCheck },
  { icon: Code },
  { icon: ClipboardList },
];

const en = {
  label: "Our Services",
  h2line1: "What We Do",
  h2line2: "For Your Organization",
  learnMore: "Learn more",
  services: [
    {
      title: "IT Helpdesk & Support Services",
      description: "Rapid-response technical support for your entire organization — resolving hardware, software, and connectivity issues to minimize downtime and keep your teams productive.",
    },
    {
      title: "Corporate Network & Maintenance",
      description: "Design, deployment, and continuous maintenance of your corporate network infrastructure, ensuring reliable performance, secure connectivity, and maximum uptime.",
    },
    {
      title: "Server Hosting & Datacenter Services",
      description: "Secure, high-availability server hosting and datacenter management with proactive monitoring, backup solutions, and scalable capacity for your critical systems.",
    },
    {
      title: "User Data Security Services",
      description: "Comprehensive protection of user data through access controls, encryption, security audits, and compliance frameworks — safeguarding your organization's most sensitive assets.",
    },
    {
      title: "System Development Support",
      description: "End-to-end support and maintenance for custom systems — feature development, bug resolution, performance tuning, and long-term technical stewardship.",
    },
    {
      title: "IT Project Management Services",
      description: "Structured delivery of IT projects using proven methodologies — from planning and resource allocation to execution and handover, on time and within budget.",
    },
  ],
};

const mn = {
  label: "Бидний үйлчилгээ",
  h2line1: "Бидний хийдэг зүйл",
  h2line2: "Таны байгууллагад",
  learnMore: "Дэлгэрэнгүй",
  services: [
    {
      title: "IT Helpdesk буюу мэдээллийн технологийн дэмжлэг үйлчилгээ",
      description: "Байгууллагын бүх хэмжээнд хурдан хугацаанд шийдвэрлэгдэх техникийн дэмжлэг — тоног төхөөрөмж, програм хангамж, холболтын асуудлыг шийдэж, бүтээмжийг тасралтгүй хангана.",
    },
    {
      title: "Corporate сүлжээ түүний maintenance үйлчилгээ",
      description: "Корпорацийн сүлжээний дэд бүтцийг зохион бүтээх, хэрэгжүүлэх, тасралтгүй засвар үйлчилгээ хийх — найдвартай холболт, аюулгүй байдал, тогтвортой ажиллагааг хангана.",
    },
    {
      title: "Сервер хостингийн үйлчилгээ буюу Датацентрийн үйлчилгээ",
      description: "Аюулгүй, өндөр хүртээмжтэй серверийн хостинг болон датацентрийн үйлчилгээ — идэвхтэй хяналт, нөөцлөлт, уян хатан хүчин чадалтайгаар таны чухал системийг дэмжинэ.",
    },
    {
      title: "Хэрэглэгчийн мэдээллийн аюулгүй байдлын цогц үйлчилгээ",
      description: "Нэвтрэх эрхийн хяналт, шифрлэлт, аюулгүй байдлын аудит болон нийцлийн хүрээгээр хэрэглэгчийн мэдээллийг иж бүрнээр хамгаалж, байгууллагын хамгийн чухал хөрөнгийг аюулгүй байлгана.",
    },
    {
      title: "Систем хөгжүүлэлтийн дэмжлэг, үйлчилгээ",
      description: "Тусгай системийн эхнээс эцэс хүртэлх дэмжлэг — шинэ боломжуудыг нэмэх, алдааг засах, гүйцэтгэлийг сайжруулах болон урт хугацааны техникийн тогтвортой байдлыг хангана.",
    },
    {
      title: "IT төслийн удирдлагын үйлчилгээ",
      description: "Туршлагатай аргачлалаар МТ төслийг бүтэцтэйгээр хэрэгжүүлэх — төлөвлөлт, нөөц хуваарилалт, гүйцэтгэл, хүлээлгэн өгөлтийг цаг хугацаа, төсөвт нийцүүлэн удирдана.",
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Services() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="services" className="py-24 bg-background" style={{ contentVisibility: "auto", containIntrinsicSize: "0 700px" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.h2line1}
            <br />
            <span className="text-muted-foreground">{t.h2line2}</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {t.services.map((service, index) => {
            const Icon = services[index].icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-8 bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {t.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
