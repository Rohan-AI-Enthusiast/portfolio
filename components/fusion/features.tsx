export function Features() {
  const features = [
    { title: "Product thinking", desc: "Clear user, business, and delivery tradeoffs." },
    { title: "Automation depth", desc: "Reliable workflows, retries, logging, monitoring." },
    { title: "AI integration", desc: "Prompts, evals, cost control, reasoning traces." },
    { title: "Fast iterations", desc: "V1 in days, improvements weekly." },
  ];

  return (
    <section className="py-10" id="work">
      <div className="text-2xl font-semibold tracking-tight">What I build</div>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
        Systems that turn messy inputs into consistent outputs, with UX that feels premium.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium text-white/85">{f.title}</div>
            <div className="mt-2 text-sm leading-6 text-white/60">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
