import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Clyde Warren",
    quote: "Maple Leaf Publishers helped me…",
    review: "Maple Leaf Publishers helped me transform my rough manuscript into a polished book. Their editing and formatting were spot on, and the ghostwriting team brought my ideas to life beautifully.",
  },
  {
    name: "Raymond Ramirez",
    quote: "I had a wonderful experience with…",
    review: "I had a wonderful experience with Maple Leaf Publishers. They helped me with editing proofreading and formatting and the result is a book I'm truly proud of. The whole process felt like a cup of tea.",
  },
  {
    name: "Willis Perez",
    quote: "I'm really happy with Maple Leaf Publishers..",
    review: "I'm really happy with Maple Leaf Publishers's work. My thoughts were expertly captured by their ghostwriting crew, and the editing really improved the flow of my work. Additionally the proofreading ensured that everything was flawless.",
  },
  {
    name: "Kevin Novak",
    quote: "Maple Leaf Publishers made the entire...",
    review: "Maple Leaf Publishers made the entire process feel effortless. From editing my manuscript to final publication, they guided me with professionalism. Their team truly understand what authors need.",
  },
  {
    name: "Ronald Foret",
    quote: "Maple Leaf Publishers design work was…",
    review: "Maple Leaf Publishers design work was exactly what I wanted, and their editing service ensured that my book was professional and straightforward. Everything about the process seemed natural.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What our <span className="text-primary">happy clients</span> say about us.
          </h2>
        </div>

        {/* Testimonials Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card min-w-[380px] max-w-[380px]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-maple-gold text-maple-gold" />
                  ))}
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-primary font-semibold text-sm mb-3">
                  {testimonial.quote}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
