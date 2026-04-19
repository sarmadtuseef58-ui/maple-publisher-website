import processBooks from "@/assets/process-books.png";

const steps = [
  {
    number: "01",
    title: "Project Kick-off",
    description: "Your project manager will contact you within the first 24 hours to confirm your order and guide you through the next steps.",
  },
  {
    number: "02",
    title: "Experts in Action",
    description: "Our skilled team begins work according to your selected services, following your directions closely to bring your vision to life.",
  },
  {
    number: "03",
    title: "Feedback and Refinement",
    description: "Your feedback helps us perfect your project. We welcome your input at every stage to ensure the final result matches your expectations.",
  },
  {
    number: "04",
    title: "Completion and Handover",
    description: "Once all is approved, we deliver the final version exactly as promised, polished and ready for launch.",
  },
];

export function Process() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">How We Work?</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Turning Your Ideas into Published Books
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Maple Leaf Publishers is your trusted partner from concept to completion. 
            When you work with us, we make the whole experience simple, clear, and rewarding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={processBooks}
                alt="Publishing Process"
                className="relative w-full max-w-md drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right - Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="process-step">
                <div className="process-number">{index + 1}</div>
                <div className="ml-4">
                  <span className="text-primary/60 font-semibold italic text-sm">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
