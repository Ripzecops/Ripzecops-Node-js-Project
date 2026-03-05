import Section from "@/components/ui/Section";

const steps = [
  { n: "01", title: "Choose a Service", desc: "Pick the project type you need from our service list." },
  { n: "02", title: "Share Requirements", desc: "Send your requirements and preferences via WhatsApp or form." },
  { n: "03", title: "Delivery + Support", desc: "Receive delivery with full support, explanation, and setup guidance." },
];

export default function HowItWorks() {
  return (
    <Section className="mt-14">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl title-text">How It Works</h2>
        <p className="mt-2 text-sm text-ink-200 sm:text-base">Simple, fast, and fully guided from start to finish.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="hud-panel group p-6 hover:border-arc-400/80 transition-all hover:shadow-glow">
            <div className="text-xs font-extrabold text-arc-400 font-[family-name:var(--font-heading)] title-text drop-shadow-glow">{s.n}</div>
            <div className="mt-2 text-lg font-extrabold text-white title-text">{s.title}</div>
            <p className="mt-2 text-sm text-ink-200 relative z-10">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
