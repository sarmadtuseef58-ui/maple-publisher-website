import { ArrowUpRight } from "lucide-react";
import aboutBook from "@/assets/about-book.webp";

const brands = [
  { name: "Amazon", logo: "https://www.atlanticpublishings.com/assets/img/brand/amazon.svg" },
  { name: "Apple Books", logo: "https://www.atlanticpublishings.com/assets/img/brand/apple-books.svg" },
  { name: "Barnes & Noble", logo: "https://www.atlanticpublishings.com/assets/img/brand/barnes-and-noble.svg" },
  { name: "Kobo", logo: "https://www.atlanticpublishings.com/assets/img/brand/kobo.svg" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={aboutBook}
                alt="Book Publishing"
                className="relative w-full max-w-md animate-float drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About our Agency</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Keep <span className="text-primary">100% of Your Rights and Royalties</span> with Maple Leaf Publishers
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Maple Leaf Publishers, we believe every author deserves complete recognition for their creativity 
              and hard work. Our mission is simple: to bring your vision to life while ensuring you keep full 
              control of your book. When you publish with us, you retain 100% of your royalties and ownership. 
              Every sale, every penny, is entirely yours. We value your voice, protect your rights, and help 
              you share your story with the world, exactly the way you imagined it.
            </p>
            
            <a href="#contact" className="btn-primary mb-10">
              Publish My Book
              <ArrowUpRight className="w-5 h-5" />
            </a>

            {/* Brand Logos */}
            <div className="flex flex-wrap items-center gap-8 mt-8 pt-8 border-t border-border">
              {brands.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo h-6 md:h-8"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
