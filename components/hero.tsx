import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground className="min-h-screen pt-20" showRadialGradient={true}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-6">
            Strategic IT Consultancy Services
          </p>
          
          <h1 className="text-4xl font-bold tracking-tight dark:text-white text-foreground sm:text-6xl lg:text-7xl text-balance">
            Transform Your Business
            <br />
            <span className="dark:text-neutral-200 text-muted-foreground">With Technology</span>
          </h1>
          
          <p className="mt-8 text-lg leading-relaxed dark:text-neutral-300 text-muted-foreground max-w-2xl mx-auto text-pretty">
            We help enterprises navigate digital transformation, optimize infrastructure, 
            and implement cutting-edge solutions that drive measurable business outcomes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90">
              <Link href="#contact" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-foreground/20 dark:border-white/20">
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Expert Consultants" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold dark:text-white text-foreground sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm dark:text-neutral-300 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs dark:text-neutral-400 text-muted-foreground">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </AuroraBackground>
  );
}
