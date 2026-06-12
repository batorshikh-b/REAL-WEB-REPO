"use client";

import { motion } from "motion/react";
import { useLang } from "@/hooks/use-lang";

type Service = {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  visual: "helpdesk" | "network" | "datacenter" | "security" | "development";
};

function HelpdeskVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <path d="M 52 86 Q 52 34 100 34 Q 148 34 148 86" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <rect x="36" y="78" width="23" height="35" rx="9" fill="currentColor" opacity="0.72" />
      <rect x="141" y="78" width="23" height="35" rx="9" fill="currentColor" opacity="0.72" />
      <path d="M 47 113 Q 47 137 72 140" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="76" cy="140" r="5" fill="currentColor">
        <animate attributeName="opacity" values="1;0.35;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <rect x="108" y="42" width="58" height="28" rx="9" fill="currentColor" opacity="0.1" />
      <rect x="118" y="52" width="34" height="4" rx="2" fill="currentColor" opacity="0.55">
        <animate attributeName="width" values="20;34;20" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="34" y="22" width="54" height="25" rx="8" fill="currentColor" opacity="0.08" />
      <rect x="44" y="31" width="30" height="4" rx="2" fill="currentColor" opacity="0.45">
        <animate attributeName="opacity" values="0.2;0.75;0.2" dur="2.2s" repeatCount="indefinite" />
      </rect>
      <circle cx="166" cy="45" r="6" fill="currentColor" opacity="0.75">
        <animate attributeName="r" values="6;10;6" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.75;0.25;0.75" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: 100, y: 80, r: 13 },
    { x: 50, y: 42, r: 7 },
    { x: 150, y: 42, r: 7 },
    { x: 38, y: 120, r: 7 },
    { x: 162, y: 120, r: 7 },
    { x: 100, y: 136, r: 7 },
  ];
  const links = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [3, 5]];

  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      {links.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.25"
        >
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin={`${i * 0.18}s`} repeatCount="indefinite" />
        </line>
      ))}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r={node.r} fill={i === 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" opacity={i === 0 ? 0.85 : 0.7}>
            <animate attributeName="r" values={`${node.r};${node.r + 2};${node.r}`} dur="2s" begin={`${i * 0.22}s`} repeatCount="indefinite" />
          </circle>
          {i === 0 && (
            <circle cx={node.x} cy={node.y} r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
              <animate attributeName="r" values="18;58" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}

function DatacenterVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect x="58" y="18" width="84" height="124" rx="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.65" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="66" y={28 + i * 18} width="68" height="12" rx="3" fill="currentColor" opacity="0.08">
            <animate attributeName="opacity" values="0.08;0.22;0.08" dur="2.8s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </rect>
          <rect x="72" y={32 + i * 18} width={24 + ((i * 7) % 28)} height="4" rx="2" fill="currentColor" opacity="0.45">
            <animate attributeName="width" values={`${24 + ((i * 7) % 28)};${48 + ((i * 5) % 18)};${24 + ((i * 7) % 28)}`} dur="3.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </rect>
          <circle cx="126" cy={34 + i * 18} r="3" fill="currentColor">
            <animate attributeName="opacity" values="1;0.25;1" dur={`${1 + i * 0.12}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <path d="M 100 18 L 150 39 L 150 87 Q 150 128 100 145 Q 50 128 50 87 L 50 39 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M 100 33 L 135 50 L 135 84 Q 135 113 100 127 Q 65 113 65 84 L 65 50 Z" fill="currentColor" opacity="0.1">
        <animate attributeName="opacity" values="0.08;0.24;0.08" dur="2s" repeatCount="indefinite" />
      </path>
      <rect x="84" y="72" width="32" height="26" rx="4" fill="currentColor" opacity="0.85" />
      <path d="M 90 72 L 90 61 Q 90 50 100 50 Q 110 50 110 61 L 110 72" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="83" r="4" fill="white" opacity="0.95" />
      <rect x="98" y="86" width="4" height="8" rx="1" fill="white" opacity="0.95" />
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0">
        <animate attributeName="y1" values="38;125;38" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="38;125;38" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.55;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function DevelopmentVisual() {
  return (
    <svg viewBox="0 0 200 160" className="h-full w-full">
      <rect x="25" y="24" width="150" height="112" rx="7" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.65" />
      <rect x="25" y="24" width="150" height="20" rx="7" fill="currentColor" opacity="0.08" />
      <circle cx="41" cy="34" r="4" fill="currentColor" opacity="0.65" />
      <circle cx="55" cy="34" r="4" fill="currentColor" opacity="0.45" />
      <circle cx="69" cy="34" r="4" fill="currentColor" opacity="0.25" />
      {[
        { x: 40, y: 62, w: 60, d: "0s" },
        { x: 50, y: 77, w: 90, d: "0.14s" },
        { x: 50, y: 92, w: 68, d: "0.28s" },
        { x: 40, y: 107, w: 104, d: "0.42s" },
      ].map((line, i) => (
        <rect key={i} x={line.x} y={line.y} width={line.w} height="7" rx="3" fill="currentColor" opacity="0.28">
          <animate attributeName="opacity" values="0.22;0.72;0.22" dur="2.4s" begin={line.d} repeatCount="indefinite" />
        </rect>
      ))}
      <rect x="147" y="118" width="3" height="12" rx="1" fill="currentColor">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}


function AnimatedVisual({ type }: { type: Service["visual"] }) {
  switch (type) {
    case "helpdesk":
      return <HelpdeskVisual />;
    case "network":
      return <NetworkVisual />;
    case "datacenter":
      return <DatacenterVisual />;
    case "security":
      return <SecurityVisual />;
    case "development":
      return <DevelopmentVisual />;
  }
}

const en = {
  eyebrow: "IT SERVICES",
  h2: "IT solutions ready\nto deploy.",
  services: [
    { id: "helpdesk", number: "01", tag: "HELPDESK", title: "IT Helpdesk & Support", description: "Rapid-response technical support for your entire organization — resolving hardware, software, and connectivity issues to minimize downtime.", stat1: { value: "< 2h", label: "avg response time" }, stat2: { value: "99%", label: "resolution rate" }, visual: "helpdesk" },
    { id: "network", number: "02", tag: "NETWORK", title: "Corporate Network & Maintenance", description: "Design, deployment, and continuous maintenance of your corporate network infrastructure ensuring reliable performance and secure connectivity.", stat1: { value: "24/7", label: "monitoring" }, stat2: { value: "99.9%", label: "uptime SLA" }, visual: "network" },
    { id: "datacenter", number: "03", tag: "DATACENTER", title: "Server Hosting & Datacenter", description: "Secure, high-availability server hosting and datacenter management with proactive monitoring, backup, and scalable capacity.", stat1: { value: "100%", label: "redundancy" }, stat2: { value: "< 50ms", label: "latency" }, visual: "datacenter" },
    { id: "security", number: "04", tag: "SECURITY", title: "User Data Security", description: "Comprehensive protection through access controls, encryption, security audits, and compliance frameworks for your most sensitive assets.", stat1: { value: "ISO 27001", label: "aligned" }, stat2: { value: "0", label: "breaches" }, visual: "security" },
    { id: "development", number: "05", tag: "DEVELOPMENT", title: "System Development Support", description: "End-to-end support for custom systems — feature development, bug resolution, performance tuning, and long-term technical stewardship.", stat1: { value: "20+", label: "years experience" }, stat2: { value: "55+", label: "engineers" }, visual: "development" },
  ] satisfies Service[],
};

const mn = {
  eyebrow: "ҮЙЛЧИЛГЭЭ",
  h2: "Таны бизнесийн\nIT шийдэл.",
  services: [
    { id: "helpdesk", number: "01", tag: "HELPDESK", title: "IT Helpdesk үйлчилгээ", description: "Байгууллагын бүх хэмжээнд хурдан хугацаанд шийдвэрлэгдэх техникийн дэмжлэг — тоног төхөөрөмж, програм хангамж, холболтын асуудлыг шийдэж бүтээмжийг хангана.", stat1: { value: "< 2h", label: "хариу хугацаа" }, stat2: { value: "99%", label: "шийдвэрлэлт" }, visual: "helpdesk" },
    { id: "network", number: "02", tag: "СҮЛЖЭЭ", title: "Corporate сүлжээний үйлчилгээ", description: "Корпорацийн сүлжээний дэд бүтцийг зохион бүтээх, хэрэгжүүлэх, тасралтгүй засвар үйлчилгээ хийх — найдвартай холболт, аюулгүй байдлыг хангана.", stat1: { value: "24/7", label: "хяналт" }, stat2: { value: "99.9%", label: "ажиллагаа" }, visual: "network" },
    { id: "datacenter", number: "03", tag: "ДАТАЦЕНТР", title: "Сервер & Датацентрийн үйлчилгээ", description: "Аюулгүй, өндөр хүртээмжтэй серверийн хостинг болон датацентрийн удирдлага — идэвхтэй хяналт, нөөцлөлт, уян хатан хүчин чадал.", stat1: { value: "100%", label: "нөөцлөлт" }, stat2: { value: "< 50ms", label: "хоцрогдол" }, visual: "datacenter" },
    { id: "security", number: "04", tag: "АЮУЛГҮЙ БАЙДАЛ", title: "Мэдээллийн аюулгүй байдал", description: "Нэвтрэх эрхийн хяналт, шифрлэлт, аюулгүй байдлын аудит болон нийцлийн хүрээгээр байгууллагын мэдээллийг иж бүрнээр хамгаалана.", stat1: { value: "ISO 27001", label: "нийцтэй" }, stat2: { value: "0", label: "зөрчил" }, visual: "security" },
    { id: "development", number: "05", tag: "ХӨГЖҮҮЛЭЛТ", title: "Систем хөгжүүлэлтийн үйлчилгээ", description: "Тусгай системийн эхнээс эцэс хүртэлх дэмжлэг — шинэ боломжуудыг нэмэх, алдааг засах, гүйцэтгэлийг сайжруулах.", stat1: { value: "20+", label: "жилийн туршлага" }, stat2: { value: "55+", label: "инженер" }, visual: "development" },
  ] satisfies Service[],
};

function ServiceRow({ service, index }: { service: Service; index: number }) {
  // Alternate entrance direction per row for a more deliberate cadence.
  const fromX = index % 2 === 0 ? -64 : 64;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative mb-4"
    >
      <div className="flex flex-col gap-8 rounded-2xl border border-foreground/10 bg-card px-8 py-10 shadow-sm transition-shadow duration-300 group-hover:shadow-md lg:flex-row lg:gap-16 lg:px-10 lg:py-12">
        <div className="shrink-0 flex items-center justify-between lg:block">
          <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary group-hover:font-semibold">{service.number}</span>
          <span className="inline-flex items-center rounded-full border border-foreground/10 px-3 py-1 text-[11px] font-mono tracking-widest text-muted-foreground lg:hidden">
            {service.tag}
          </span>
        </div>

        <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_18rem] lg:items-center">
          <div>
            <span className="mb-5 hidden items-center gap-3 text-xs font-mono tracking-widest text-muted-foreground transition-colors duration-500 group-hover:text-primary lg:inline-flex">
              <span className="h-px w-8 bg-foreground/30 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
              {service.tag}
            </span>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
              {service.title}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {service.description}
            </p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">{service.stat1.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{service.stat1.label}</div>
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">{service.stat2.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{service.stat2.label}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div aria-hidden="true" className="relative h-44 w-full max-w-xs overflow-hidden border border-foreground/10 bg-foreground/[0.02] text-primary transition-all duration-500 group-hover:border-primary/35 group-hover:bg-primary/[0.04] lg:h-48">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.16),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-full p-5 transition-transform duration-500 group-hover:scale-105">
                <AnimatedVisual type={service.visual} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const { mn: isMN } = useLang();
  const t = isMN ? mn : en;

  const h2Lines = t.h2.split("\n");

  return (
    <section id="services" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {t.eyebrow}
          </span>
          <div className="grid gap-8 lg:grid-cols-[1fr_30rem] lg:items-end">
            <motion.h2
              className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {h2Lines.map((line, index) => (
                <span key={line} className={index === 1 ? "block text-muted-foreground" : "block"}>
                  {line}
                </span>
              ))}
            </motion.h2>
          </div>
        </div>

        <div>
          {t.services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
