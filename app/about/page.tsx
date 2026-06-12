import { Navbar } from "@/components/navbar";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай — Digital Apex",
  description: "Digital Apex-ийн тухай — мэргэжлийн IT зөвлөх, аюулгүй найдвартай шийдэл, шуурхай дэмжлэг.",
};

export default function AboutPage() {
  return (
    <main id="top">
      <Navbar />
      <div className="pt-24 min-h-screen">
        <WhyChooseUs />
      </div>
      <Footer />
    </main>
  );
}
