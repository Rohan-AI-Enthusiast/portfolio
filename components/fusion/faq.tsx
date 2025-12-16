const faqs = [
  { q: "Is this a template site or custom?", a: "Custom. This repo is yours and deploys on Vercel from GitHub." },
  { q: "Can we add more pages later?", a: "Yes. We will add /ai-products, /case-studies, /about once the home is locked." },
  { q: "Can you match the Framer feel?", a: "Yes. The sticky visual + animated swaps is the key, and we already started it." },
];

export function FAQ() {
  return (
    <section className="py-10">
      <div className="text-2xl font-semibold tracking-tight">FAQ</div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium text-white/85">{f.q}</div>
            <div className="mt-2 text-sm leading-6 text-white/60">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
