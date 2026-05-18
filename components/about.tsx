import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Industry-certified expert consultants",
  "Proven track record with Fortune 500 companies",
  "24/7 dedicated support and monitoring",
  "Agile methodology for rapid delivery",
  "Transparent pricing with no hidden costs",
  "Long-term partnership approach",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Your Trusted Partner in
              <br />
              <span className="text-muted-foreground">Technology Excellence</span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For over 15 years, NexusIT has been at the forefront of enterprise technology consulting. 
              We combine deep technical expertise with strategic business acumen to deliver solutions 
              that create lasting value.
            </p>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of certified professionals works alongside your organization to understand 
              unique challenges and craft tailored solutions that align with your business objectives 
              and growth trajectory.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              
              {/* Decorative grid pattern */}
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
              
              {/* Content inside the visual */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-7xl font-bold text-primary mb-4">15+</div>
                <p className="text-lg font-medium text-foreground">Years of Excellence</p>
                <p className="text-sm text-muted-foreground mt-2">Delivering innovative IT solutions worldwide</p>
                
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-2xl font-bold text-foreground">200+</p>
                    <p className="text-xs text-muted-foreground">Enterprise Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">30+</p>
                    <p className="text-xs text-muted-foreground">Countries Served</p>
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
