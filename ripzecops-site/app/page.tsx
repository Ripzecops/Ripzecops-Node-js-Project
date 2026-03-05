import Hero from "@/components/sections/Hero";
import OfferStrip from "@/components/sections/OfferStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FullSupport from "@/components/sections/FullSupport";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferStrip />
      <ServicesGrid />
      <FullSupport />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
