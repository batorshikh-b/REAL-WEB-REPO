import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexusIT transformed our entire IT infrastructure. Their cloud migration strategy reduced our operational costs by 40% while improving system reliability.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Industries",
  },
  {
    quote: "The cybersecurity assessment conducted by NexusIT identified critical vulnerabilities we weren&apos;t aware of. Their team&apos;s expertise is unmatched.",
    author: "Michael Rodriguez",
    role: "VP of Operations",
    company: "GlobalFinance Corp",
  },
  {
    quote: "Working with NexusIT has been a game-changer for our digital transformation journey. They truly understand enterprise-level challenges.",
    author: "Emily Watson",
    role: "Director of IT",
    company: "MedTech Solutions",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card border border-border rounded-lg"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-6" />
              
              <blockquote className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
