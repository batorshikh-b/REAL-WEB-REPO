import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ — Digital Apex",
  description: "Digital Apex-ийн IT үйлчилгээнүүд — Helpdesk, сүлжээ, датацентр, аюулгүй байдал, систем хөгжүүлэлт.",
};

export default function ServicesPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="pt-24 min-h-screen">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
