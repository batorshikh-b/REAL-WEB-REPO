const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin with a comprehensive analysis of your current infrastructure, challenges, and business objectives to establish a clear roadmap.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our experts craft a tailored technology strategy aligned with your goals, timeline, and budget constraints.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the plan with precision, using agile methodologies to ensure flexibility and continuous improvement.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Post-implementation, we monitor, optimize, and provide ongoing support to maximize your technology investment.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            A Proven Approach
            <br />
            <span className="text-muted-foreground">To IT Excellence</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="group">
                <div className="text-5xl font-bold text-primary/20 mb-4 transition-colors group-hover:text-primary/40">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
