import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImage from "@/assets/faq-image.jpg";

const faqs = [
  {
    question: "How do I start publishing my book with Maple Leaf Publishers?",
    answer: "It's easy to get started. Simply contact us or book a free consultation. Our team will review your idea, explain the process, and guide you through the next steps.",
  },
  {
    question: "Do I keep the rights to my book after publishing?",
    answer: "Yes, you keep full ownership and copyright of your work. Maple Leaf Publishers helps you publish and promote your book, but all creative rights remain yours.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer complete publishing support, including writing, editing, design, printing, marketing, and distribution. You can choose a full package or select individual services to match your needs.",
  },
  {
    question: "How long does the publishing process take?",
    answer: "The timeline depends on your project's size and chosen services. On average, publishing a book with us can take from a few weeks to a few months. We'll provide a clear timeline before we begin.",
  },
  {
    question: "Can you help if my manuscript isn't finished yet?",
    answer: "Yes, absolutely. Our writing and editing team can help you develop, complete, or polish your manuscript so it's ready for publication.",
  },
  {
    question: "Where will my book be available once it's published?",
    answer: "We publish in both print and digital formats. Your book can be made available on major platforms such as Amazon, Barnes & Noble, Apple Books, and many others, depending on your package.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Got any Questions?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={faqImage}
                alt="FAQ"
                className="relative w-full max-w-md rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 bg-card/50 mb-3 rounded-xl px-4">
                  <AccordionTrigger className="text-left font-serif text-lg font-bold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
