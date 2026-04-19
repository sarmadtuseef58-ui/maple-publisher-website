import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Direct submission to Info@mapleleafpublisher.com via FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/Info@mapleleafpublisher.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New Contact Form Submission for Maple Leaf Publisher`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible at Info@mapleleafpublisher.com.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Oops!",
        description: "There was an error sending your message. Please email Info@mapleleafpublisher.com directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions? Reach Out Now
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 bg-secondary/50 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-14 bg-secondary/50 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-14 bg-secondary/50 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary"
            />
            <Textarea
              placeholder="Tell us about your book..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="bg-secondary/50 border-border rounded-xl resize-none text-foreground placeholder:text-muted-foreground focus:border-primary"
            />
            <Button type="submit" className="w-full h-14 btn-primary text-base">
              Send Message
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
