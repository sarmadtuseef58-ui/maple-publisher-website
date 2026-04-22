import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import logo from "@/assets/maple-leaf-logo.png";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/#contact" },
];

const services = [
  "Ghost Writing",
  "Book Editing",
  "Cover Design",
  "Book Formatting",
  "Book Publishing",
  "Book Marketing",
];

const socialLinks = [
  { icon: Facebook, href: "https://web.facebook.com/mapleleafpublisher" },
  // { icon: Twitter, href: "#" },
  // { icon: Instagram, href: "#" },
  // { icon: Linkedin, href: "#" },
];

type ModalType = "privacy" | "terms" | null;

export function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-maple-brown text-autumn-cream">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src={logo}
                  alt="Maple Leaf Publishers"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-autumn-cream/70 mb-6 leading-relaxed">
                Have a story to share with the world but don't have the words to present?
                Don't worry; we are here to assist you in crafting your first draft.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-autumn-cream/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-autumn-cream/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-autumn-cream/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="tel:+12108902953"
                    className="text-autumn-cream/70 hover:text-primary transition-colors"
                  >
                    +1 (210) 890-2953
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="mailto:Info@mapleleafpublisher.com"
                    className="text-autumn-cream/70 hover:text-primary transition-colors"
                  >
                    Info@mapleleafpublisher.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-autumn-cream/70">
                    7700 Broadway St, Ste 103, San Antonio, TX 78209, United States
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-autumn-cream/10">
          <div className="container-custom py-6 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-autumn-cream/50 text-sm">
                © {new Date().getFullYear()} Maple Leaf Publishers. All Rights Reserved.
              </p>

              <div className="flex gap-6 text-sm">
                <button
                  type="button"
                  onClick={() => setActiveModal("privacy")}
                  className="text-autumn-cream/50 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("terms")}
                  className="text-autumn-cream/50 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-4 py-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-2xl font-bold text-maple-brown">
                {activeModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(90vh-80px)] overflow-y-auto px-6 py-6 text-gray-800">
              {activeModal === "privacy" ? (
                <div className="space-y-5 leading-8">
                  <p>
                    Maple Leaf Publisher respects your privacy and prioritizes the confidentiality and
                    security of your personal information. This privacy policy explains how we collect,
                    use, and safeguard the information you provide to us when using our website and
                    services. By accessing or using the website, you acknowledge and agree to the
                    practices described in this policy.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Information Collection
                    </h3>
                    <p className="font-semibold">Personal Information:</p>
                    <p>
                      We may collect personal information such as your name, email address, phone number,
                      and billing address when you interact with our website, place an order, or
                      communicate with us. This information is necessary to process your requests, fulfill
                      your orders, and provide you with the best possible service.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Non-Personal Information:</p>
                    <p>
                      We may automatically collect non-personal information such as your IP address,
                      browser type, device details, and website usage data. This data helps us analyze
                      trends, manage our website, improve user experience, and gather demographic insights
                      for internal purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Use of Information
                    </h3>
                    <p className="font-semibold">Service Delivery:</p>
                    <p>
                      We use your personal information to process your orders, deliver requested services,
                      and communicate with you regarding inquiries or requests. This includes sending
                      order confirmations, updates, and relevant notifications related to your
                      transactions.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Communication:</p>
                    <p>
                      We may use your contact information to send important updates, promotional content,
                      or newsletters about our products and services, with your consent. You can
                      unsubscribe at any time by following the instructions in the emails or contacting
                      us directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Website Enhancement
                    </h3>
                    <p>
                      Non-personal information is used to analyze website usage patterns, track user
                      interactions, and improve our website’s functionality, content, and overall user
                      experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Information Sharing
                    </h3>
                    <p className="font-semibold">Third-Party Service Providers:</p>
                    <p>
                      We may share your personal information with trusted third-party service providers
                      who assist us in delivering our products and services. These providers are required
                      to maintain the confidentiality of your data and are prohibited from using it for
                      any purpose other than providing services on our behalf.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Legal Compliance:</p>
                    <p>
                      We may disclose your personal information if required by law, court order, or
                      government regulations to protect the rights, property, or safety of others.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Data Retention
                    </h3>
                    <p>
                      We will retain your personal information for as long as necessary to fulfill the
                      purposes outlined in this privacy policy, unless a longer retention period is
                      required by law. Once your personal information is no longer needed, it will be
                      securely disposed of in compliance with applicable laws and regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">Your Rights</h3>
                    <p>
                      You have the right to access, modify, update, or delete your personal information
                      held by us. If you wish to exercise any of these rights or have concerns about how
                      we handle your information, please contact us using the information provided below.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Changes to the Privacy Policy
                    </h3>
                    <p>
                      We reserve the right to modify or update this privacy policy periodically. Any
                      changes will take effect immediately upon being posted on our website. We encourage
                      users to review this policy regularly to stay informed about how we collect, use,
                      and protect your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">Contact Us</h3>
                    <p>Maple Leaf Publisher</p>
                    <p>San Antonio, Texas</p>
                    <p>+1 (210) 890-2953</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5 leading-8">
                  <p>
                    Your use of this Website and/or our services constitutes Your agreement to the
                    following terms and conditions. If You do not agree with any of these terms and
                    conditions, please do not use this Website or Our services.
                  </p>

                  <p>
                    If You are under legal age of consent for Your respective district, You are not
                    allowed to access or use this Website or Our services. You acknowledge and agree
                    that You must be of legal age to purchase any of Our products or services available
                    on this Website or otherwise.
                  </p>

                  <p>
                    By submitting an order and/or payment, You are acknowledging that You have read and
                    understand these terms and conditions. By submitting an order and/or payment, You
                    are also agreeing to be legally bound by these terms and conditions, which form the
                    entire agreement between You and Maple Leaf Publisher.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Definition of Terms
                    </h3>
                    <p>
                      “Website” means all online content on Maple Leaf Publisher website pages.
                    </p>
                    <p>
                      “Customer,” “You,” or “Yours” mean and refer to you and/or any other person
                      submitting an order to Maple Leaf Publisher on your behalf.
                    </p>
                    <p>
                      “Company,” “We,” or “Our” mean and refer to Maple Leaf Publisher, located at 7700
                      Broadway Street, Suite 103, San Antonio, Texas.
                    </p>
                    <p>
                      “Product” means and refers to all services and products provided by Maple Leaf
                      Publisher to Customer in accordance with his/her Order.
                    </p>
                    <p>
                      “Order” means an order via phone or e-mail made by Customer to purchase services
                      or products provided by Maple Leaf Publisher.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Our Services
                    </h3>
                    <p>
                      By submitting the Order and/or payment, You are purchasing the Product for Your
                      use only. All Products are non-refundable and come with no warranties, expressed
                      or implied. It is Your obligation to read these Terms and Conditions before
                      submitting any Order and/or payment to this Website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Refund Policy
                    </h3>
                    <p className="font-semibold">Change of Mind:</p>
                    <p>
                      If for any reason you decide against continuing your project after placing your
                      order, you can ask for a refund within the first hour of placing your order. A
                      40% processing fee will be charged in other cases.
                    </p>

                    <p className="font-semibold mt-4">Incompetent Delivery:</p>
                    <p>
                      Once the work is delivered, customers are only entitled to claim a refund after
                      exhausting all available revision options. We are committed to 100% satisfaction
                      and offer revisions to ensure the delivery meets project requirements.
                    </p>

                    <p className="font-semibold mt-4">Late Delivery:</p>
                    <p>
                      If we fail to deliver on time, and it is established through documentary evidence
                      that the delay was the company’s fault, a refund may be processed.
                    </p>

                    <p className="font-semibold mt-4">Refund Time Frame:</p>
                    <p>
                      Refunds must be claimed within 30 days of delivery. Refund requests after this
                      time will not be entertained.
                    </p>

                    <p className="font-semibold mt-4">Cases Where Refund Will Not Be Issued:</p>
                    <p>
                      No refund will be issued for delays caused by the client, minor technical errors,
                      or dissatisfaction based solely on writing style.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      Email & Mobile Phone Policy
                    </h3>
                    <p>
                      By providing your email address and/or mobile phone number, you consent to receive
                      communication from Maple Leaf Publisher. This may include project updates,
                      newsletters, service notifications, and related messages.
                    </p>
                    <p>
                      Standard messaging and data rates may apply. You may unsubscribe from emails using
                      the unsubscribe link, or stop SMS communications by replying STOP, Unsub, or
                      Unsubscribe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">
                      SMS and Email Terms & Conditions
                    </h3>
                    <p>
                      By subscribing to our SMS and email communication services, you agree to receive
                      text messages and emails from Maple Leaf Publisher, including updates, promotions,
                      and service notifications.
                    </p>
                    <p>
                      SMS frequency may vary. Email communications will be sent periodically based on
                      your communication preferences and service requirements.
                    </p>
                    <p>
                      You may opt out at any time by replying STOP for SMS or using the unsubscribe link
                      in emails.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">Compliance</h3>
                    <p>
                      We adhere to 10DLC TCR regulations and all applicable laws for SMS and email
                      marketing in the US and Canada.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-maple-brown mb-2">Contact</h3>
                    <p>info@mapleleafpublisher.com</p>
                    <p>+1 (210) 890-2953</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}