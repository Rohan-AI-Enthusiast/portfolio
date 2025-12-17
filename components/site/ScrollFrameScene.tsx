"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useMemo, useRef } from "react";

type Capability = {
  title: string;
  desc: string;
};

const CAPABILITIES: Capability[] = [
  {
    title: "Product sense",
    desc: "Turn vague problems into clear goals, user segments, and measurable outcomes.",
  },
  {
    title: "AI product strategy",
    desc: "Pick the right approach, define success metrics, and ship iteratively.",
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

export function ScrollFrameScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll progress across this whole scene
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Responsive-ish movement (works well on desktop, still okay on mobile)
  const cardX = useTransform(scrollYProgress, [0.0, 0.55, 1.0], [0, 0, 420]);
  const cardY = useTransform(scrollYProgress, [0.0, 0.55, 1.0], [0, 0, 10]);

  const cardScale = useTransform(scrollYProgress, [0.0, 0.3, 1.0], [1, 1, 0.92]);
  const cardRotate = useTransform(scrollYProgress, [0.0, 0.55, 1.0], [-8, -8, 10]);
  const cardOpacity = useTransform(scrollYProgress, [0.0, 0.08], [1, 1]);

  // Left content appears only after the card starts moving to the right
  const leftOpacity = useTransform(scrollYProgress, [0.45, 0.62], [0, 1]);
  const leftY = useTransform(scrollYProgress, [0.45, 0.62], [18, 0]);

  // Soft fade for the big hero words when you transition into the next content
  const heroFade = useTransform(scrollYProgress, [0.0, 0.35, 0.55], [1, 1, 0]);

  // Use ONE image path and keep it always defined (fixes the TS build error).
  // Put this file in: /public/rohan.jpg  (or change the path below)
  const heroImageSrc = "/rohan.png";

  // Just keeping memo to avoid recalcs, not required
  const noteText = useMemo(
    () => ({
      title: "NOTE",
      body:
        "This card travels from the hero into this sticky section. Replace this note with a mini case study preview later.",
      footer:
        "Next: we can swap the placeholder content inside the card to show a real project preview.",
    }),
    []
  );

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
      }}
      className="relative bg-neutral-950 text-white"
      style={{
        // Long scroll region to drive the animation
        minHeight: "220vh",
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[-200px] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[110px]" />
        <div className="absolute -right-40 top-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-[-260px] left-1/3 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      {/* Sticky stage */}
      <div className="sticky top-0 h-screen">
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="relative grid w-full grid-cols-12 items-center gap-8">
            {/* HERO TEXT (fades out later) */}
            <motion.div
              style={{ opacity: heroFade }}
              className="col-span-12 md:col-span-7"
            >
              <div className="text-xs tracking-[0.22em] text-white/60">ROHAN JETHA</div>

              <div className="mt-5 leading-[0.9]">
                <div className="text-5xl font-semibold md:text-7xl">AI</div>
                <div className="text-5xl font-semibold md:text-7xl">PRODUCT</div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                I build AI enabled products with crisp problem framing, measurable outcomes,
                and practical execution.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-neutral-950 hover:bg-white/90"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* BIG RIGHT WORDS (also fades out later) */}
            <motion.div
              style={{ opacity: heroFade }}
              className="pointer-events-none col-span-12 hidden md:col-span-5 md:block"
            >
              <div className="text-right text-6xl font-semibold tracking-tight text-white/15">
                SYSTEMS
              </div>
              <div className="mt-3 text-right text-sm leading-6 text-white/45">
                Roadmaps, experimentation, LLM workflows, and shipping discipline.
                Less hype, more outcomes.
              </div>
            </motion.div>

            {/* CENTER "HI" BUTTON */}
            <motion.div
              style={{ opacity: heroFade }}
              className="pointer-events-none absolute left-1/2 top-[66%] -translate-x-1/2 md:top-1/2"
            >
              <div className="pointer-events-auto">
                <motion.button
                  type="button"
                  className="grid h-12 w-12 place-items-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/25"
                  animate={{ rotate: [0, 12, -10, 12, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
                  aria-label="Hi"
                >
                  <span className="text-lg">👋</span>
                </motion.button>
              </div>
            </motion.div>

            {/* TRAVELING CARD (always present, starts in hero center, ends on right) */}
            <div className="pointer-events-none absolute left-1/2 top-[72%] -translate-x-1/2 md:top-1/2">
              <motion.div
                style={{
                  x: cardX,
                  y: cardY,
                  rotate: cardRotate,
                  scale: cardScale,
                  opacity: cardOpacity,
                }}
                className="pointer-events-auto relative h-[360px] w-[260px] md:h-[420px] md:w-[300px]"
              >
                <div className="absolute inset-0 rounded-[28px] bg-white shadow-2xl shadow-black/35" />
                <div className="absolute inset-[10px] overflow-hidden rounded-[22px] bg-neutral-100">
                  {/* Top browser dots */}
                  <div className="flex items-center gap-2 px-4 py-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                  </div>

                  <div className="relative h-[calc(100%-44px)] w-full">
                    <Image
                      src={heroImageSrc}
                      alt="Portrait"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 260px, 300px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* LEFT CONTENT (appears later when card is on the right) */}
            <motion.div
              style={{ opacity: leftOpacity, y: leftY }}
              className="col-span-12 mt-[56vh] md:col-span-7 md:mt-0"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for work
              </div>

              <div className="mt-5 text-xs tracking-[0.22em] text-white/60">
                CAPABILITIES
              </div>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                What I can do for you
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 md:text-base">
                Dummy copy for now. This section mirrors the reference layout and gives us a
                clean target for the scroll linked card animation.
              </p>

              <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
                {CAPABILITIES.map((c, idx) => (
                  <div key={c.title} className="flex items-start gap-4 px-6 py-5">
                    <div className="flex-1">
                      <div className="font-medium">{c.title}</div>
                      <div className="mt-1 text-sm leading-6 text-white/65">
                        {c.desc}
                      </div>
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70">
                      {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT NOTE (appears with left content) */}
            <motion.div
              style={{ opacity: leftOpacity, y: leftY }}
              className="col-span-12 mt-6 md:col-span-5 md:mt-0"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-xs tracking-[0.2em] text-white/60">
                  {noteText.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{noteText.body}</p>
                <div className="my-5 h-px w-full bg-white/10" />
                <p className="text-sm leading-6 text-white/70">{noteText.footer}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spacer tail so you can scroll past the sticky section cleanly */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs tracking-[0.22em] text-white/60">NEXT</div>
          <h3 className="mt-3 text-2xl font-semibold">More sections go here</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
            Once the scroll animation feels right, we can build Projects, About, and Blog in
            the same dark style as the rest of the site.
          </p>
        </div>
      </div>
    </section>
  );
}
