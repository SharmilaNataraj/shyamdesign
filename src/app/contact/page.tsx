import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapEmbed from "@/components/contact/MapEmbed";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <ContactInfo />
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}