"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (keep your existing colors) */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(234,88,12,0.25),transparent_60%),radial-gradient(1200px_600px_at_80%_30%,rgba(37,99,235,0.25),transparent_60%),#050505]" />

      {/* Spacing under nav like Duncan */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28">
        <div className="grid items-center gap-10 md:grid-cols-3">
          {/* LEFT (2 lines only) */}
          <div className="text-left">
            <p className="mb-3 text-xs tracking-widest text-white/60">
              ROHAN JETHA
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] text-white md:text-6xl lg:text-7xl">
              ARTIFICIAL
              <br />
              INTELLIGENCE
            </h1>
          </div>

          {/* CENTER SLOT (card sits here, card itself should be rendered by ScrollFrameScene) */}
          <div className="flex justify-center">
            <div className="h-[520px] w-[360px] rounded-[28px] border border-white/10 bg-white/5 md:h-[560px] md:w-[380px]" />
          </div>

          {/* RIGHT (2 lines only) */}
          <div className="text-right">
            <h2 className="text-5xl font-semibold leading-[0.95] text-white/15 md:text-6xl lg:text-7xl">
              LEADER
            </h2>
            <p className="mt-4 text-sm text-white/60">
              Building useful AI products with clear strategy and execution.
            </p>
          </div>
        </div>

        {/* Keeps the hero tall like Duncan */}
        <div className="h-24 md:h-32" />
      </div>
    </section>
  );
}
