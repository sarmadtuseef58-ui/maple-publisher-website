import { ArrowUpRight, Phone } from "lucide-react";
import heroBooks from "@/assets/hero-books.webp";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with autumn gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-autumn-cream via-background to-secondary/50" />
      
      {/* Decorative maple leaves */}
      <div className="absolute top-32 left-10 w-20 h-20 text-primary/10 animate-leaf-fall">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 5 L60 30 L90 30 L65 50 L75 80 L50 60 L25 80 L35 50 L10 30 L40 30 Z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-20 w-16 h-16 text-accent/10 animate-leaf-fall" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 5 L60 30 L90 30 L65 50 L75 80 L50 60 L25 80 L35 50 L10 30 L40 30 Z" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 md:px-8 py-12 md:py-20">
          {/* Left Content */}
          <div className="animate-slide-up">
            <p className="text-primary italic mb-4 text-lg font-medium">
              Create, Craft, Complete
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Connect with United States of America's{" "}
              <span className="text-primary">Leading Book Publishers</span>{" "}
              for Worldwide Storytelling
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Maple Leaf Publishers is United States of America's trusted hub for authors of all genres and writing styles.
              From powerful thrillers and tender romances to thought-provoking non-fiction and children's adventures, 
              we bring every story to life with care and precision. Our expert editors, designers, and publishing 
              specialists ensure your manuscript shines across all global platforms.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let's start Publishing
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="tel:+447453400720" className="btn-secondary">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content - Book Images */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={heroBooks}
                alt="Published Books"
                className="w-full max-w-lg md:max-w-xl animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
