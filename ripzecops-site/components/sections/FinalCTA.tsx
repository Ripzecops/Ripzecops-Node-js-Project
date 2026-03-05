import Section from "@/components/ui/Section";
import { buildWaLink } from "@/lib/wa";
import { BRAND } from "@/lib/config";

export default function FinalCTA() {
  return (
    <Section className="mt-14 mb-16">
      <div className="hud-panel border-arc-500/50 bg-ink-950/60 rounded-3xl p-10 sm:p-14 shadow-[0_0_50px_rgba(0,210,255,0.1)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-arc-500/10 rounded-full blur-[100px] group-hover:bg-arc-500/20 transition-colors duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-stark-500/5 rounded-full blur-[100px]"></div>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between relative z-10">
          <div className="max-w-xl">
            <div className="text-[10px] font-black tracking-[0.4em] text-arc-400 uppercase mb-4">Transmission Ready</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white title-text leading-tight uppercase">
              DEPOY YOUR <span className="text-stark-500">PROJECT</span> NOW
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-100 leading-relaxed font-medium">
              Accelerate your digital evolution with elite engineering.
              Our tactical response team is standing by for immediate engagement.
            </p>
          </div>

          <a
            href={buildWaLink()}
            target="_blank"
            rel="noreferrer"
            className="glow-btn whitespace-nowrap px-10 py-5 text-sm"
          >
            Initiate Comms
          </a>
        </div>
      </div>
    </Section>
  );
}
