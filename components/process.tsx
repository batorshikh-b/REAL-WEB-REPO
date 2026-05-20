"use client";

import { Zap, Brain, Heart, PiggyBank, Layers, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

const values = {
  en: [
    {
      icon: Zap,
      number: "01",
      title: "Enhanced Efficiency & Productivity",
      description: "By optimizing IT systems and processes, we help streamline operations, automate repetitive tasks, and improve overall efficiency — allowing your people to focus on strategic, value-added work.",
    },
    {
      icon: Brain,
      number: "02",
      title: "Improved Decision-Making",
      description: "We enable organizations to collect, analyze, and interpret data more effectively. Real-time information and insightful analytics empower your decision-makers to drive business growth and competitive advantage.",
    },
    {
      icon: Heart,
      number: "03",
      title: "Enhanced Customer Experience",
      description: "Through efficient communication channels, user-friendly interfaces, and personalized recommendations, we help organizations better understand and cater to the needs of their customers — enhancing satisfaction and loyalty.",
    },
    {
      icon: PiggyBank,
      number: "04",
      title: "Cost Reduction",
      description: "By optimizing IT infrastructure, consolidating resources, and leveraging cloud-based solutions, we reduce costs associated with hardware maintenance, software licensing, and IT support — and eliminate inefficiencies.",
    },
    {
      icon: Layers,
      number: "05",
      title: "Scalability & Flexibility",
      description: "We enable organizations to scale IT resources up or down based on changing business needs. Through cloud computing and virtualization, we deliver the flexibility required to adapt to evolving market conditions.",
    },
    {
      icon: ShieldCheck,
      number: "06",
      title: "Risk Mitigation & Compliance",
      description: "We help mitigate risks associated with cybersecurity threats, data breaches, and compliance violations — implementing robust security measures, regular audits, and ensuring compliance to protect your reputation.",
    },
    {
      icon: Rocket,
      number: "07",
      title: "Innovation & Competitive Advantage",
      description: "We facilitate innovation by enabling organizations to experiment with new technologies and develop cutting-edge solutions. By fostering a culture of innovation, we help you differentiate and drive business growth.",
    },
  ],
  mn: [
    {
      icon: Zap,
      number: "01",
      title: "Үр ашиг ба бүтээмж",
      description: "МТ системийг оновчтой болгосноор үйл ажиллагааг хялбаршуулж, давтагддаг ажлуудыг автоматжуулж, нийт үр ашгийг дэмжинэ — ажилтнуудыг стратегийн чухал ажилд чиглүүлдэг.",
    },
    {
      icon: Brain,
      number: "02",
      title: "Шийдвэр гаргалтыг сайжруулах",
      description: "Байгууллагуудад өгөгдлийг илүү үр дүнтэй цуглуулж, дүн шинжилгээ хийж, тайлбарлах боломжийг олгодог. Бодит цаг хугацааны мэдээлэл болон гүнзгий аналитикийг хангаснаар мэдээлэлд суурилсан шийдвэр гаргахад дэмждэг.",
    },
    {
      icon: Heart,
      number: "03",
      title: "Хэрэглэгчийн туршлага",
      description: "Үр дүнтэй харилцааны суваг, хэрэглэгчдэд ойлгомжтой интерфейс, хувийн зөвлөмжөөр дамжуулан байгууллагуудын хэрэглэгчдийнхээ хэрэгцээг илүү сайн ойлгож, хангахад тусалдаг.",
    },
    {
      icon: PiggyBank,
      number: "04",
      title: "Зардал хэмнэлт",
      description: "МТ дэд бүтцийг оновчтой болгох, нөөцийг нэгтгэх, клауд шийдлүүдийг ашиглан тоног төхөөрөмж, програм хангамж, МТ дэмжлэгийн зардлыг бууруулж, үр ашиггүй зарцуулалтыг арилгадаг.",
    },
    {
      icon: Layers,
      number: "05",
      title: "Уян хатан байдал",
      description: "Бизнесийн өөрчлөгдөж буй хэрэгцээнд тохируулан МТ нөөцийг нэмэгдүүлэх буюу бууруулах боломжийг олгодог. Клауд болон виртуалчлалын технологиор дамжуулан өргөтгөх чадварыг хангадаг.",
    },
    {
      icon: ShieldCheck,
      number: "06",
      title: "Эрсдэл ба нийцэл",
      description: "Кибер аюул, өгөгдлийн алдагдал, нийцлийн зөрчилтэй холбоотой эрсдэлийг бууруулахад тусалдаг. Хүчирхэг аюулгүй байдлын арга хэмжээ, тогтмол аудит хийж, байгууллагын нэр хүндийг хамгаалдаг.",
    },
    {
      icon: Rocket,
      number: "07",
      title: "Инноваци ба өрсөлдөх давуу тал",
      description: "Байгууллагуудыг шинэ технологиудыг туршиж, дэвшилтэт шийдлүүд боловсруулах боломжоор хангадаг. Инновацийн соёлыг дэмжсэнээр зах зээлд ялгарч, бизнесийн өсөлтийг хурдасгадаг.",
    },
  ],
};

const en = {
  label: "Our Values",
  h2line1: "The Value We Create",
  h2line2: "For Your Organization",
  subtitle: "Our IT consulting services deliver measurable impact across every dimension of your organization.",
};

const mn = {
  label: "Үнэ цэнэ",
  h2line1: "Таны байгууллагад",
  h2line2: "бүтээх үнэ цэнэ",
  subtitle: "Бидний МТ зөвлөх үйлчилгээ нь байгууллагын бүх чиглэлд хэмжигдэхүйц үр дүн авчирдаг.",
};

export function Process() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;
  const items = isMN ? values.mn : values.en;

  return (
    <section id="values" className="py-24 bg-background" style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
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
            {t.h2line1}
            <br />
            <span className="text-muted-foreground">{t.h2line2}</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {items.slice(0, 6).map((item) => (
            <motion.div
              key={item.number}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Faded number */}
              <span className="absolute top-4 right-5 text-6xl font-black text-primary/8 select-none leading-none">
                {item.number}
              </span>

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* 7th value — full width feature card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="group relative mt-6 p-10 bg-gradient-to-br from-primary/5 via-card to-violet-500/5 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
        >
          <span className="absolute top-4 right-8 text-8xl font-black text-primary/8 select-none leading-none">
            {items[6].number}
          </span>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {(() => { const Icon = items[6].icon; return (
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            ); })()}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{items[6].title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{items[6].description}</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full transition-all duration-500" />
        </motion.div>

      </div>
    </section>
  );
}
