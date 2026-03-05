import type { Metadata } from "next";
import PortfolioContent from "@/components/sections/PortfolioContent";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio | RIPZECOPS",
  description: "A definitive collection of specialized IT solutions. Each mission is executed with precision, leveraging next-gen technology.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#050B14]">
      <PortfolioContent />
      <FinalCTA />
    </div>
  );
}
