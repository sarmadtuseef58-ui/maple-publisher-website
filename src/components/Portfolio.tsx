import book1 from "@/assets/portfolio/book1.jpg";
import book2 from "@/assets/portfolio/book2.jpg";
import book3 from "@/assets/portfolio/book3.jpg";
import book4 from "@/assets/portfolio/book4.jpg";
import book5 from "@/assets/portfolio/book5.jpg";
import book6 from "@/assets/portfolio/book6.jpg";
import book7 from "@/assets/portfolio/book7.jpg";
import book8 from "@/assets/portfolio/book8.jpg";

const portfolioBooks = [book1, book2, book3, book4, book5, book6, book7, book8];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Portfolio</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Books We've Helped Publish
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioBooks.map((book, index) => (
            <div key={index} className="portfolio-item aspect-[3/4]">
              <img
                src={book}
                alt={`Published book ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
