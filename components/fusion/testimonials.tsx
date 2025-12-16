export function Testimonials() {
  const items = [
    { quote: "Clear thinking, clean delivery, and the system actually works in production.", name: "Client feedback", role: "Founder" },
    { quote: "The outputs are consistent and measurable. No more guesswork.", name: "Stakeholder", role: "Ops lead" },
    { quote: "Feels like a real product, not just an automation.", name: "Hiring manager", role: "Growth" },
  ];

  return (
    <section className="py-10">
      <div className="text-2xl font-semibold tracking-tight">Proof style</div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.quote} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm leading-6 text-white/70">"{t.quote}"</div>
            <div className="mt-4 text-xs text-white/55">{t.name}</div>
            <div className="text-xs text-white/40">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
