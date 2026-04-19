import { Users, Globe, Award, Wallet } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Work with Experienced UK Book Publishers",
    description: "From exciting thrillers to sweet romances, helpful non-fiction to fun fantasy stories, our team at Maple Leaf Publishers works with more than 50 book types. No story is too small or too strange. We believe every writer deserves a chance to be heard.",
  },
  {
    icon: Globe,
    title: "Publish on more than 30 Online Platforms",
    description: "Do you dream of becoming a well-known author in United States of America or abroad? We can help you publish your book on top platforms like Amazon, Apple Books, Google Books, Kobo, Barnes & Noble, and IngramSpark.",
  },
  {
    icon: Award,
    title: "Trusted by Thousands of Happy Authors",
    description: "We have helped over 100,000 authors publish their books successfully. Whether you are writing your first story or already a best-seller, you can count on us to handle your book with care and attention.",
  },
  {
    icon: Wallet,
    title: "Affordable and Reliable UK Publishing",
    description: "Professional publishing shouldn't cost a fortune. That's why Maple Leaf Publishers offers affordable packages designed for every budget, without compromising on quality. We simplify the entire process, ensuring that every author enjoys a smooth, stress-free journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Maple Leaf Publishers Is{" "}
            <span className="text-primary">United States of America's Top Choice</span>{" "}
            for Authors
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-5 p-8 rounded-3xl border border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
