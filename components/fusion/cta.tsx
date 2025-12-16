export function CTA() {
  return (
    <section className="py-14" id="contact">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-2xl font-semibold tracking-tight">Want this style for your product?</div>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
          If you want a system that looks premium and runs reliably, message me with your use case.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90" href="#">
            Email me
          </a>
          <a className="rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/8" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
