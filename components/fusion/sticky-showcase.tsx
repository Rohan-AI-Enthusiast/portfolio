"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
};

export function StickyShowcase() {
  const items: Item[] = useMemo(
    () => [
      {
        id: "research",
        title: "Research and scoring",
        desc: "Auto research targets and score them with stable rules.",
        bullets: ["Company fit", "Role relevance", "Signal strength", "Contact readiness"],
      },
      {
        id: "brief",
        title: "Brief generation",
        desc: "Turn research into a one screen brief that explains why it is worth outreach.",
        bullets: ["Key context", "Risks", "Angle ideas", "Suggested CTA"],
      },
      {
        id: "message",
        title: "Personalized drafts",
        desc: "Draft outreach that references what matters, not generic fluff.",
        bullets: ["Hook", "Value point", "Proof", "Short CTA"],
      },
      {
        id: "pipeline",
        title: "Pipeline tracking",
        desc: "Track replies, stages, and follow ups without losing context.",
        bullets: ["MQL to SQL", "Notes", "Next action", "Metrics"],
      },
    ],
    []
  );

  const [active, setActive] = useState(items[0]?.id ?? "research");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((it) => {
      const el = sectionRefs.current[it.id];
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          if (e && e.isIntersecting) setActive(it.id);
        },
        { root: null, threshold: 0.55 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const activeItem = items.find((x) => x.id === active) ?? items[0]!;

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:h-[520px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),_0_25px_120px_rgba(37,99,235,0.12)] backdrop-blur">
            <div className="text-xs text-white/55">System view</div>

            <div className="mt-3 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="text-lg font-semibold text-white/90">{activeItem.title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">{activeItem.desc}</div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {activeItem.bullets.map((b) => (
                      <div key={b} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/70">
                        {b}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs text-white/55">Status</div>
              <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-blue-500/60"
                  style={{ width: `${(items.findIndex((x) => x.id === active) + 1) * 25}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {items.map((it) => (
            <div
              key={it.id}
              ref={(el) => {
                sectionRefs.current[it.id] = el;
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div className="text-sm font-medium text-white/85">{it.title}</div>
              <div className="mt-2 text-sm leading-6 text-white/60">{it.desc}</div>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/55">
                {it.bullets.map((b) => (
                  <li key={b} className="rounded-xl border border-white/10 bg-black/25 px-3 py-2">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
