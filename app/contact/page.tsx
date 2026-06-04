import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Digital Apex",
  description: "Get in touch with Digital Apex for IT consulting, network security, helpdesk support, and digital transformation services in Ulaanbaatar, Mongolia.",
};

export default function ContactPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="pt-24 min-h-screen">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
