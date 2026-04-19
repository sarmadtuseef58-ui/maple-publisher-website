import { PenTool, BookOpen, Palette, Layout, BookMarked, Megaphone, ArrowUpRight, Phone } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Ghost Writing",
    description: "Have a wonderful idea, but not sure how to turn it into a book? Share it with us. Our experienced writers will shape your concept into a compelling story that readers will love.",
  },
  {
    icon: BookOpen,
    title: "Book Editing",
    description: "Finished your manuscript but want that extra sparkle? Our editors bring precision and care to every line, refining your words until your book reads beautifully from start to finish.",
  },
  {
    icon: Palette,
    title: "Cover Design",
    description: "A brilliant story deserves a brilliant cover. Our designers craft eye-catching artwork that reflects your vision and captures readers' attention at first glance.",
  },
  {
    icon: Layout,
    title: "Book Formatting",
    description: "Good formatting makes great writing even better. We ensure every page looks neat and professional, creating a smooth reading experience in both print and digital formats.",
  },
  {
    icon: BookMarked,
    title: "Book Publishing",
    description: "There's nothing quite like seeing your story come to life. At Maple Leaf Publishers, we guide authors across the world through every step of the publishing journey.",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description: "You've written your story, now let's help it find its audience. Our marketing specialists promote your book with tailored strategies that boost visibility and build your author brand.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Services</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            We Write, Edit, Design,{" "}
            <span className="text-primary">Format and Publish</span> Your Book
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Get a FREE Quote
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="tel:+442081352476" className="btn-secondary">
            <Phone className="w-5 h-5" />
            Connect with Experts
          </a>
        </div>
      </div>
    </section>
  );
}
