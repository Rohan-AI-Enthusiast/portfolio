export function Logos() {
  const items = ["Make", "Airtable", "Apify", "Vercel", "Next.js", "OpenAI", "Clay", "Lemlist"];
  return (
    <section className="py-10">
      <div className="text-xs text-white/55">Tools I build with</div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((x) => (
          <div key={x} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
