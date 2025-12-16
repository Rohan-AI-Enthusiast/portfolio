"use client";

import { motion } from "framer-motion";

const badges = ["AI Product", "Automation Systems", "Applied GenAI", "Outbound Intelligence"];

export function Hero() {
  return (
    <section className="relative pt-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        Building AI products that ship
      </div>

      <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            AI systems that feel like a product, not a demo
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
            I design and build automation driven workflows with clear reasoning, measurable impact, and
            a clean UI layer on top.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              View case studies
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/8"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06),_0_25px_120px_rgba(37,99,235,0.12)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-white/85">Proactive Outbound Intelligence</div>
              <div className="text-xs text-white/50">V1</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Card title="Lead scoring" desc="Consistent scoring rules across channels." />
              <Card title="Research briefs" desc="Fast context to personalize outreach." />
              <Card title="Pipeline view" desc="MQL to SQL tracking and notes." />
              <Card title="Cost control" desc="Token and run cost visibility." />
            </div>
          </div>

          <motion.div
            className="absolute -left-6 -top-6 hidden w-[240px] rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xs text-white/60">Signal</div>
            <div className="mt-1 text-sm font-medium text-white/85">High intent account detected</div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-[72%] rounded-full bg-blue-500/60" />
            </div>
            <div className="mt-2 text-xs text-white/50">Score: 72</div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-3 hidden w-[260px] rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur lg:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xs text-white/60">Draft</div>
            <div className="mt-1 text-sm font-medium text-white/85">Message personalization ready</div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-[92%] rounded bg-white/10" />
              <div className="h-2 w-[84%] rounded bg-white/10" />
              <div className="h-2 w-[76%] rounded bg-white/10" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10" />
    </section>
  );
}

function Card(props: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
      <div className="text-sm font-medium text-white/85">{props.title}</div>
      <div className="mt-1 text-xs leading-5 text-white/55">{props.desc}</div>
    </div>
  );
}
