import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FullSupport from "@/components/sections/FullSupport";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesHero from "@/components/sections/ServicesHero";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our premium IT project service categories—delivered with clean execution and full support."
};

export default function Page() {
  return (
    <div className="bg-hero-grad">
      <ServicesHero />
      <ServicesGrid />
      <FullSupport />
      <FinalCTA />
    </div>
  );
}
