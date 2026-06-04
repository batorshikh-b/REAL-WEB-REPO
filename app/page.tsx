import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Footer } from "@/components/footer";
import { ScrollReset } from "@/components/scroll-reset";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Digital Apex",
  description: "Professional IT consulting, network security, helpdesk support, and digital transformation services in Ulaanbaatar, Mongolia.",
  url: "https://digitalapex.mn",
  telephone: "+97677773553",
  email: "admin@digitalapex.mn",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Гэндэн 16, MN Central Office, 12 давхар",
    addressLocality: "Улаанбаатар",
    postalCode: "14241",
    addressCountry: "MN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9077,
    longitude: 106.8832,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function Home() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReset />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Partners />
      <Services />
      <Footer />
    </main>
  );
}
