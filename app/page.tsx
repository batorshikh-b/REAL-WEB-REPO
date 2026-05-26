import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollReset } from "@/components/scroll-reset";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <main id="top">
      <LoadingScreen />
      <ScrollReset />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Partners />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
