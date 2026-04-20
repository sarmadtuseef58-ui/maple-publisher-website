import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Maple Leaf Publisher respects your privacy and prioritizes the confidentiality and security of your personal information. This privacy policy explains how we collect, use, and safeguard the information you provide to us when using our website and services. By accessing or using the website, you acknowledge and agree to the practices described in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information Collection</h2>

        <p className="font-semibold">Personal Information:</p>
        <p className="mb-4">
          We may collect personal information such as your name, email address, phone number, and billing address when you interact with our website, place an order, or communicate with us. This information is necessary to process your requests, fulfill your orders, and provide you with the best possible service.
        </p>

        <p className="font-semibold">Non-Personal Information:</p>
        <p className="mb-4">
          We may automatically collect non-personal information such as your IP address, browser type, device details, and website usage data. This data helps us analyze trends, manage our website, improve user experience, and gather demographic insights for internal purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Information</h2>

        <p className="font-semibold">Service Delivery:</p>
        <p className="mb-4">
          We use your personal information to process your orders, deliver requested services, and communicate with you regarding inquiries or requests. This includes sending order confirmations, updates, and relevant notifications related to your transactions.
        </p>

        <p className="font-semibold">Communication:</p>
        <p className="mb-4">
          We may use your contact information to send important updates, promotional content, or newsletters about our products and services, with your consent. You can unsubscribe at any time by following the instructions in our emails or contacting us directly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Website Enhancement</h2>
        <p className="mb-4">
          Non-personal information is used to analyze website usage patterns, track user interactions, and improve our website’s functionality, content, and overall user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information Sharing</h2>

        <p className="font-semibold">Third-Party Service Providers:</p>
        <p className="mb-4">
          We may share your personal information with trusted third-party service providers who assist us in delivering our products and services. These providers are required to maintain confidentiality and are prohibited from using your data for any other purpose.
        </p>

        <p className="font-semibold">Legal Compliance:</p>
        <p className="mb-4">
          We may disclose your personal information if required by law, court order, or government regulations to protect the rights, property, or safety of others.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Once no longer needed, your data is securely disposed of.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, modify, update, or delete your personal information. To exercise these rights, please contact us using the details below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. Changes will take effect immediately upon being posted on this page. We encourage users to review this policy regularly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          Maple Leaf Publisher <br />
          San Antonio, Texas <br />
          +1 (210) 890-2953
        </p>
      </main>
      <Footer />
    </>
  );
}