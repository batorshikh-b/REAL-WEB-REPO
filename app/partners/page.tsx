import { Navbar } from "@/components/navbar";
import { Partners } from "@/components/partners";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хамтрагчид — Digital Apex",
  description: "Digital Apex-ийн хамтрагч байгууллагууд — Cisco, VMware, Microsoft, Dell болон бусад.",
};

export default function PartnersPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="pt-24 min-h-screen">
        <Partners />
      </div>
      <Footer />
    </main>
  );
}
