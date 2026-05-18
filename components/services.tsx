import { 
  Cloud, 
  Shield, 
  Code, 
  BarChart3, 
  Network, 
  Cpu,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration to cloud infrastructure with AWS, Azure, and Google Cloud. Optimize costs while maximizing scalability and performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security assessments, threat detection, and compliance solutions to protect your critical business assets.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom enterprise applications, API integrations, and modernization of legacy systems using cutting-edge technologies.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, business intelligence, and AI-powered solutions.",
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description: "Design, implementation, and management of robust network infrastructure that supports your business growth.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation to modernize operations and enhance customer experiences.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Comprehensive IT Solutions
            <br />
            <span className="text-muted-foreground">For Modern Enterprises</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <Link 
                href="#contact" 
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
