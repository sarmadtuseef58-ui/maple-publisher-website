import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/maple-leaf-logo.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Book Publishing", href: "/#services" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">

          {/* Logo + Text */}
          <a href="/#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Maple Leaf Publisher"
              className="h-12 md:h-16 w-auto object-contain"
            />
            <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
              Maple Leaf Publisher
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+12108902953"
              className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm">+1 (210) 890-2953</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-background border-t border-border py-6 px-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+12108902953"
                className="flex items-center gap-2 text-primary font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (210) 890-2953</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}