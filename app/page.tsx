import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollReset } from "@/components/scroll-reset";

export default function Home() {
  return (
    <main>
      <ScrollReset />
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
