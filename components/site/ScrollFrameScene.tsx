"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";

type FrameStep = {
  at: number; // 0..1
  title: string;
  subtitle: string;
};

export function ScrollFrameScene() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for the whole scene
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });

  // Use real images later. For now keep it safe and deployable.
  // Add more files to /public later if you want unique images.
  const images = useMemo(
    () => ["/rohan.png", "/rohan.png", "/rohan.png"] as const,
    []
  );

  const steps: FrameStep[] = useMemo(
    () => [
      { at: 0.0, title: "AI Product Systems", subtitle: "Hero preview card" },
      { at: 0.45, title: "Capabilities", subtitle: "What I can do for you" },
      { at: 0.78, title: "Projects", subtitle: "Selected case studies" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active image and card text as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Snap points roughly aligned with the reference effect
    const next =
      v < 0.33 ? 0 : v < 0.66 ? 1 : 2;

    setActiveIndex(next);
  });

  const safeSrc = images[activeIndex] ?? images[0];

  // Frame motion: starts centered, then travels to the right, rotates/flips, and settles.
  const x = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 0, 220, 320]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [220, 180, 40, 0]);
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6, 1],
    [0, 10, -10, -6]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.75, 1],
    [0, 28, -18, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1, 0.98]);
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Background blend between dark hero and white section
  const darkFade = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <div ref={wrapRef} className="relative">
      {/* This tall wrapper creates the scroll timeline for the animation */}
      <div className="relative h-[240vh]">
        {/* Sticky stage */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Dark hero background (fades out into white sections) */}
          <motion.div
            style={{ opacity: darkFade }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black" />

            {/* Your existing hero lighting style */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(249,115,22,0.25),transparent_52%),radial-gradient(circle_at_78%_28%,rgba(59,130,246,0.30),transparent_55%),radial-gradient(circle_at_55%_90%,rgba(255,255,255,0.06),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-black/40" />
          </motion.div>

          {/* White section background revealed underneath */}
          <div className="absolute inset-0 bg-white" />

          {/* HERO CONTENT (dark) */}
          <motion.div
            style={{ opacity: darkFade }}
            className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-start px-6 pt-28"
          >
            <div className="w-full">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
                <div>
                  <div className="text-xs font-semibold tracking-[0.28em] text-white/60">
                    ROHAN JETHA
                  </div>

                  <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
                    AI
                    <br />
                    PRODUCT
                  </h1>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                    I build AI-enabled products with crisp problem framing,
                    measurable outcomes, and practical execution.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
                      View work
                    </button>
                    <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white">
                      Contact
                    </button>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="text-right">
                    <div className="text-5xl font-semibold text-white/90 md:text-6xl">
                      SYSTEMS
                    </div>
                    <p className="mt-3 ml-auto max-w-xs text-sm leading-6 text-white/60">
                      Roadmaps, experimentation, LLM workflows, and shipping
                      discipline. Less hype, more outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WHITE SECTION CONTENT (capabilities layout) */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.22, 0.33], [0, 1]) }}
            className="relative z-10 mx-auto h-full w-full max-w-6xl px-6 pt-28"
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.35fr_0.85fr] md:items-start">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.22em] text-black/40">
                  CAPABILITIES
                </div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black">
                  What I can do for you
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-black/60">
                  Dummy copy for now. This section mirrors the reference layout
                  and gives us the target for the scroll-linked frame animation.
                </p>

                <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                  {[
                    {
                      title: "Product sense",
                      body:
                        "Turn vague problems into clear goals, user segments, and measurable outcomes.",
                    },
                    {
                      title: "AI product strategy",
                      body:
                        "Pick the right model approach, define success metrics, and ship iteratively.",
                    },
                    {
                      title: "Roadmaps and execution",
                      body:
                        "Translate strategy into milestones, experiments, and delivery plans.",
                    },
                    {
                      title: "Stakeholder alignment",
                      body:
                        "Write crisp docs, run clean meetings, and drive decisions with evidence.",
                    },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="flex items-center justify-between gap-6 px-6 py-5"
                    >
                      <div>
                        <div className="text-sm font-semibold text-black">
                          {row.title}
                        </div>
                        <div className="mt-1 text-sm text-black/55">
                          {row.body}
                        </div>
                      </div>

                      <div className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/60">
                        ↑
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div className="flex items-center justify-end">
                  <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70">
                    Available for work <span className="ml-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
                  <div className="text-[11px] font-semibold tracking-[0.22em] text-black/40">
                    NOTE
                  </div>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    The image card that travels from the hero to this right side is
                    controlled by the sticky ScrollFrameScene.
                  </p>
                  <div className="my-5 h-px bg-black/10" />
                  <p className="text-sm leading-6 text-black/60">
                    Next: we can swap the placeholder inside the traveling card
                    to look like a real mini case study preview.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TRAVELING FRAME CARD (always rendered, animated via scroll) */}
          <motion.div
            style={{
              opacity,
              x,
              y,
              rotateZ,
              rotateY,
              scale,
              filter: blur as unknown as string,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[280px] -translate-x-1/2 -translate-y-1/2 md:w-[360px]"
          >
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl"
              style={{ transformStyle: "preserve-3d" as const }}
            >
              {/* Browser-ish header */}
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/22" />
                  <span className="h-2 w-2 rounded-full bg-white/18" />
                </div>
                <div className="ml-2 text-xs text-white/65">
                  {steps[activeIndex]?.title ?? "Preview"}
                </div>
              </div>

              {/* Image area */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  key={safeSrc}
                  src={safeSrc}
                  alt="Frame"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 360px"
                />

                {/* Soft wash and tint (matches your hero lighting) */}
                <div className="pointer-events-none absolute inset-0 bg-black/25" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_20%_35%,rgba(249,115,22,0.16),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_45%,rgba(0,0,0,0.45)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
              </div>

              {/* Caption */}
              <div className="px-5 py-4">
                <div className="text-sm font-semibold text-white">
                  {steps[activeIndex]?.subtitle ?? "Scroll linked frame"}
                </div>
                <div className="mt-1 text-xs leading-5 text-white/65">
                  Dummy layout that will later become a real project card.
                </div>

                <div className="mt-4 space-y-2">
                  <div className="h-2 w-[88%] rounded-full bg-white/12" />
                  <div className="h-2 w-[72%] rounded-full bg-white/10" />
                  <div className="h-2 w-[60%] rounded-full bg-white/10" />
                </div>
              </div>

              {/* Subtle bottom cut like the reference */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-[999px] bg-white/10 blur-xl" />
            </div>
          </motion.div>

          {/* Center "hand" button placeholder */}
          <div className="pointer-events-none absolute left-1/2 top-[54%] z-30 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: [0, 12, -8, 12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              className="grid h-12 w-12 place-items-center rounded-full bg-indigo-500 text-white shadow-lg"
            >
              👋
            </motion.div>
          </div>
        </div>
      </div>

      {/* After the animation scene ends, add real sections below */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-black/40">
            NEXT
          </div>
          <h3 className="mt-3 text-3xl font-semibold text-black">
            More sections go here
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-black/60">
            Once the scroll-frame animation feels right, we can build the real
            Projects, About, and Blog sections in the same clean white style as
            the reference.
          </p>
        </div>
      </section>
    </div>
  );
}
