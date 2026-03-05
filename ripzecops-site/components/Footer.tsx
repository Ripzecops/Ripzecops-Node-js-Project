import Link from "next/link";
import Section from "@/components/ui/Section";
import { BRAND, NAV_LINKS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-arc-500/20 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hud-grid bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
      <Section className="py-10 relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-extrabold chrome-text title-text">{BRAND.name}</div>
            <p className="mt-2 max-w-md text-sm text-ink-200">
              Premium IT project services with full support. Affordable, fast, and professional solutions
              for all your projects.
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
          <span>© {new Date().getFullYear()} {BRAND.name}. STARK INDUSTRIES INTEGRATION.</span>
          <span className="hidden sm:inline">Powered by J.A.R.V.I.S. Core</span>
        </div>
      </Section>
    </footer>
  );
}
