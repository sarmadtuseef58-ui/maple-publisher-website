import { ArrowUpRight } from "lucide-react";

const publishingPlatforms = [
  "https://www.atlanticpublishings.com/assets/img/brand/1.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/2.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/3.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/4.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/5.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/6.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/7.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/9.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/10.svg",
  "https://www.atlanticpublishings.com/assets/img/brand/11.svg",
];

export function CTABanner() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-accent to-maple-gold text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container-custom text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          From Writer to Published Author
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Contact Maple Leaf Publishers today and take the first step towards your dream. 
          We make publishing simple, professional and enjoyable from start to finish.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-autumn-cream"
        >
          SCHEDULE FREE PUBLISHING CONSULTATION
          <ArrowUpRight className="w-5 h-5" />
        </a>

        {/* Publishing Platforms Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee">
            {[...publishingPlatforms, ...publishingPlatforms].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Publishing platform"
                className="h-8 md:h-10 w-auto mx-6 md:mx-10 opacity-70 brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
