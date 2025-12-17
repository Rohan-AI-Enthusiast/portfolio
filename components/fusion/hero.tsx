"use client";

import { motion } from "framer-motion";

type Badge = { label: string };

const heroBadges: Badge[] = [
  { label: "AI Product" },
  { label: "Automation Systems" },
  { label: "Applied GenAI" },
  { label: "Outbound Intelligence" },
];

export function Hero() {
  return (
    <section className="pt-10">
      <div className="fusion-hero-bg fusion-card fusion-glow">
        <div className="fusion-hero-inner p-6 md:p-10">
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
                I design and build automation driven workflows with clear
                reasoning, measurable impact, and a clean UI layer on top.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {heroBadges.map((b) => (
                  <span
                    key={b.label}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {b.label}
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
                  className="rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="fusion-card fusion-glow p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white/85">
                    Proactive Outbound Intelligence
                  </div>
                  <div className="text-xs text-white/50">V1</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <FeatureCard
                    title="Lead scoring"
                    desc="Consistent scoring rules across channels."
                  />
                  <FeatureCard
                    title="Research briefs"
                    desc="Fast context to personalize outreach."
                  />
                  <FeatureCard
                    title="Pipeline view"
                    desc="MQL to SQL tracking and notes."
                  />
                  <FeatureCard
                    title="Cost control"
                    desc="Token and run cost visibility."
                  />
                </div>
              </div>

              <motion.div
                className="fusion-card absolute -left-6 -top-6 hidden w-[240px] p-4 lg:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-white/60">Signal</div>
                <div className="mt-1 text-sm font-medium text-white/85">
                  High intent account detected
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-[72%] rounded-full bg-blue-500/60" />
                </div>
                <div className="mt-2 text-xs text-white/50">Score: 72</div>
              </motion.div>

              <motion.div
                className="fusion-card fusion-glow2 absolute -bottom-6 -right-3 hidden w-[260px] p-4 lg:block"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-white/60">Draft</div>
                <div className="mt-1 text-sm font-medium text-white/85">
                  Message personalization ready
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-[92%] rounded bg-white/10" />
                  <div className="h-2 w-[84%] rounded bg-white/10" />
                  <div className="h-2 w-[76%] rounded bg-white/10" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard(props: { title: string; desc: string }) {
  return (
    <div className="fusion-card p-4">
      <div className="text-sm font-medium text-white/85">{props.title}</div>
      <div className="mt-1 text-xs leading-5 text-white/55">{props.desc}</div>
    </div>
  );
}
