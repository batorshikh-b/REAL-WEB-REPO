"use client";

import {
  Code, Network, Database, FlaskConical, HeadphonesIcon,
  Cloud, Lightbulb, ClipboardList, ShieldCheck, RefreshCw, BarChart3, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const icons = [Code, Network, Database, FlaskConical, HeadphonesIcon, Cloud, Lightbulb, ClipboardList, ShieldCheck, RefreshCw, BarChart3];

const en = {
  label: "Our Services",
  h2line1: "Comprehensive IT Solutions",
  h2line2: "For Modern Organizations",
  learnMore: "Learn more",
  services: [
    { title: "Software Development & Support", description: "Custom enterprise applications, system integrations, and ongoing maintenance to keep your digital products running at peak performance." },
    { title: "Network Management & Security", description: "Design, implementation, and continuous monitoring of robust network infrastructure with advanced threat detection and prevention." },
    { title: "Data Management", description: "End-to-end data lifecycle management — from storage and processing to governance and analytics — turning your data into a strategic asset." },
    { title: "Research & Development", description: "Exploring emerging technologies and developing innovative solutions tailored to your industry's unique challenges and opportunities." },
    { title: "End-User Support", description: "Responsive helpdesk and technical support services ensuring your teams stay productive with minimal downtime." },
    { title: "Cloud & Datacenter Services", description: "Seamless cloud migration, infrastructure optimization, and datacenter management across leading platforms for maximum scalability." },
    { title: "IT Consulting & Strategy", description: "Expert advisory services to align your technology investments with business goals, driving growth and operational efficiency." },
    { title: "IT Project Management", description: "Structured project delivery using proven methodologies, ensuring on-time, on-budget outcomes for your critical technology initiatives." },
    { title: "IT Security & Compliance", description: "Comprehensive security assessments, compliance audits, and risk management frameworks to protect your organization's digital assets." },
    { title: "Disaster Recovery & Business Continuity", description: "Robust backup, recovery, and continuity planning to safeguard operations and minimize disruption in the face of unexpected events." },
    { title: "Digital Intelligence & Transformation", description: "Harnessing data analytics, AI, and automation to drive organizational evolution and unlock new competitive advantages." },
  ],
};

const mn = {
  label: "Бидний үйлчилгээ",
  h2line1: "Иж бүрэн МТ шийдэл",
  h2line2: "Орчин үеийн байгууллагуудад",
  learnMore: "Дэлгэрэнгүй",
  services: [
    { title: "Програм хангамж хөгжүүлэлт & дэмжлэг", description: "Байгууллагын тусгай програм хангамж, системийн интеграци болон дижитал бүтээгдэхүүнийг тасралтгүй ажиллуулах засвар үйлчилгээ." },
    { title: "Сүлжээний удирдлага & аюулгүй байдал", description: "Найдвартай сүлжээний дэд бүтцийг зохион бүтээх, хэрэгжүүлэх, тасралтгүй хянах — аюулаас урьдчилан сэргийлэх." },
    { title: "Өгөгдлийн удирдлага", description: "Хадгалалт, боловсруулалт, аналитик зэрэг өгөгдлийн бүхий л үе шатыг хамарсан иж бүрэн шийдэл — танай байгууллагын өгөгдлийг стратегийн хөрөнгө болгоно." },
    { title: "Судалгаа & хөгжүүлэлт", description: "Гарч буй технологиудыг судалж, таны салбарт тохирсон, боломжид нийцсэн инноватив шийдлүүдийг боловсруулах." },
    { title: "Хэрэглэгчийн дэмжлэг", description: "Хариу цагтай техникийн дэмжлэг, туслах ширээний үйлчилгээ — багийн бүтээмжийг тасалдалгүйгээр хангах." },
    { title: "Клауд & өгөгдлийн төвийн үйлчилгээ", description: "Тэргүүлэгч платформ дээр клауд руу шилжих, дэд бүтцийг оновчтой болгох, өгөгдлийн төвийн удирдлага — хамгийн их уян хатан байдлын төлөө." },
    { title: "МТ зөвлөх & стратеги", description: "Технологийн хөрөнгө оруулалтыг бизнесийн зорилготой уялдуулж, өсөлт болон үйл ажиллагааны үр ашгийг дэмжих мэргэжлийн зөвлөх үйлчилгээ." },
    { title: "МТ төслийн удирдлага", description: "Туршлагатай аргачлалаар бүтэцтэй хэрэгжүүлэлт — чухал МТ санаачлагуудад цаг хугацаа, төсөвт нийцсэн үр дүнг хангах." },
    { title: "МТ аюулгүй байдал & нийцэл", description: "Байгууллагын дижитал хөрөнгийг хамгаалах иж бүрэн аюулгүй байдлын үнэлгээ, нийцлийн аудит болон эрсдэлийн удирдлагын хүрээ." },
    { title: "Осол сэргээн засварлалт & бизнесийн тасралтгүй байдал", description: "Гэнэтийн тохиолдолд үйл ажиллагааг хамгаалж, тасалдлыг багасгах найдвартай нөөцлөлт, сэргээлт болон тасралтгүй байдлын төлөвлөлт." },
    { title: "Дижитал оюун ухаан & хувиргалт", description: "Өгөгдлийн аналитик, хиймэл оюун ухаан, автоматжуулалтыг ашиглан байгууллагын хөгжлийг хурдасгаж, шинэ өрсөлдөх давуу талыг нэмэгдүүлэх." },
  ],
};

export function Services() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  return (
    <section id="services" className="py-24 bg-background" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
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
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {t.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className="group relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
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
