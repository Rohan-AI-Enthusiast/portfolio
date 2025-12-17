"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Product sense",
    desc: "Turn vague problems into clear goals, user segments, and measurable outcomes.",
  },
  {
    title: "AI product strategy",
    desc: "Pick the right model approach, define success metrics, and ship iteratively.",
  },
  {
    title: "Roadmaps and execution",
    desc: "Translate strategy into milestones, experiments, and delivery plans.",
  },
  {
    title: "Stakeholder alignment",
    desc: "Write crisp docs, run clean meetings, and drive decisions with evidence.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
              CAPABILITIES
            </div>
            <h2 className="mt-3 text-5xl font-semibold tracking-tight text-neutral-900">
              What I can do for you
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
              Dummy copy for now. This section mirrors the Framer template layout and
              gives us the target for the scroll-linked frame animation.
            </p>
          </div>

          <div className="hidden rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-700 shadow-sm md:flex">
            Available for work <span className="ml-2 h-2 w-2 rounded-full bg-emerald-500" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-10">
          <div className="col-span-7">
            <div className="space-y-0">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="border-b border-black/10 py-7"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-lg font-semibold text-neutral-900">
                        {it.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {it.desc}
                      </div>
                    </div>

                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.35 }}
                      className="mt-1 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-neutral-700"
                      aria-hidden="true"
                    >
                      ↑
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
                NOTE
              </div>
              <div className="mt-3 text-sm leading-relaxed text-neutral-600">
                The image card that “travels” from the hero to this right side is
                controlled by the sticky ScrollFrameScene. This panel is here just
                to hold space and match the reference layout.
              </div>

              <div className="mt-6 h-px w-full bg-black/10" />

              <div className="mt-6 text-sm text-neutral-700">
                Next: we can swap the placeholder “alt view” inside the traveling card
                to look like a real mini case study preview.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
