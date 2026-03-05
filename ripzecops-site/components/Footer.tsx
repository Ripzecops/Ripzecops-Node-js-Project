import Link from "next/link";
import Section from "@/components/ui/Section";
import { BRAND, NAV_LINKS } from "@/lib/config";
import dynamic from "next/dynamic";

const ThreeDFooterLogo = dynamic(() => import("@/components/three/ThreeDFooterLogo"), { ssr: false });

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-arc-500/10 bg-ink-950 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 bg-hud-grid bg-[length:40px_40px] opacity-[0.05] pointer-events-none"></div>

      <Section className="py-16 relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <ThreeDFooterLogo />
            <p className="mt-6 text-sm text-zinc-400 leading-relaxed font-medium">
              Revolutionizing IT project management with next-gen tactical frameworks.
              Efficiency. Security. Innovation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-semibold text-ink-100 hover:text-white focus-ring link-underline">
                {l.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="text-sm font-semibold text-ink-100 hover:text-white focus-ring link-underline">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-ink-400 font-medium">
          <span>© {new Date().getFullYear()} RIPZECOPS INDUSTRIES. STARK INDUSTRIES INTEGRATION.</span>
          <span className="hidden sm:inline">Powered by J.A.R.V.I.S. Core</span>
        </div>
      </Section>
    </footer>
  );
}
