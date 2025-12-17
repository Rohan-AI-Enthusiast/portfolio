"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function ScrollFrameScene() {
  const rootRef = useRef<HTMLElement | null>(null);

  // One container that spans hero + next section (and a bit more) to match the Framer feel
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  // Frame movement: start centered lower, end on right side of white section
  const frameX = useTransform(scrollYProgress, [0.0, 1.0], ["-50%", "38%"]);
  const frameY = useTransform(scrollYProgress, [0.0, 1.0], ["22%", "8%"]);
  const frameRotate = useTransform(scrollYProgress, [0.0, 1.0], [0, 10]);
  const frameScale = useTransform(scrollYProgress, [0.0, 0.6, 1.0], [1.0, 1.0, 0.92]);
  const frameRadius = useTransform(scrollYProgress, [0.0, 1.0], [28, 36]);
  const frameShadow = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ["0 30px 90px rgba(0,0,0,0.45)", "0 30px 90px rgba(0,0,0,0.18)"]
  );

  // Swap the image while scrolling (simple, reliable)
  const images = useMemo(
    () => ["/rohan.png", "/rohan.png", "/rohan.png"],
    []
  );
  const [activeImage, setActiveImage] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const p = clamp01(v);
    if (p < 0.33) setActiveImage(0);
    else if (p < 0.66) setActiveImage(1);
    else setActiveImage(2);
  });

  // Smooth background crossfade from dark hero to white section
  const darkFade = useTransform(scrollYProgress, [0.35, 0.6], [1, 0]);
  const whiteFade = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);

  // Prevent hydration mismatch if you ever add window stuff later
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" ref={rootRef} className="relative">
      {/* Total scroll length: tune this if you want more or less “travel time” */}
      <div className="relative h-[240vh]">
        {/* Underlay: two stacked sections */}
        <div className="relative">
          {/* HERO underlay */}
          <section className="relative min-h-[100svh] overflow-hidden">
            <motion.div
              style={{ opacity: darkFade }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.28),transparent_48%),radial-gradient(circle_at_80%_25%,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.06),transparent_55%)]"
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="text-xs tracking-[0.35em] text-white/60">ROHAN JETHA</div>
                  <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                    AI
                    <br />
                    PRODUCT
                  </h1>
                  <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
                    I build AI enabled products with crisp problem framing, measurable outcomes, and practical execution.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href="#projects"
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
                    >
                      View work
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition"
                    >
                      Contact
                    </a>
                  </div>
                </div>

                <div className="hidden md:flex md:items-start md:justify-end">
                  <div className="pt-20 text-right">
                    <div className="text-6xl font-semibold text-white/90">SYSTEMS</div>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
                      Roadmaps, experimentation, LLM workflows, and shipping discipline. Less hype, more outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHITE CAPABILITIES underlay */}
          <section id="about" className="relative min-h-[120svh] bg-white">
            <motion.div
              style={{ opacity: whiteFade }}
              className="absolute inset-0 bg-white"
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-28">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="text-xs tracking-[0.35em] text-neutral-500">CAPABILITIES</div>
                  <h2 className="mt-3 text-5xl font-semibold tracking-tight text-neutral-900">
                    What I can do for you
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-600">
                    Dummy copy for now. This section mirrors the Framer template layout and keeps space for the scroll linked frame animation.
                  </p>

                  <div className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200">
                    {[
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
                    ].map((item, idx) => (
                      <div key={item.title} className="flex items-start justify-between gap-6 py-6">
                        <div>
                          <div className="font-medium text-neutral-900">{item.title}</div>
                          <div className="mt-2 text-sm leading-6 text-neutral-600">{item.desc}</div>
                        </div>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-700">
                          {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:pt-10">
                  <div className="flex justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
                      <span>Available for work</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                    <div className="text-xs font-medium tracking-[0.25em] text-neutral-500">NOTE</div>
                    <p className="mt-3 text-sm leading-6 text-neutral-700">
                      The image card that travels from the hero to this right side is controlled by the sticky frame overlay.
                      This panel exists to match spacing like the reference.
                    </p>
                    <div className="mt-6 h-px bg-neutral-200" />
                    <p className="mt-4 text-sm leading-6 text-neutral-600">
                      Next: swap the inside of the traveling card to show a mini case study preview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Optional: next dark section to show the frame keeps moving */}
          <section id="projects" className="relative min-h-[90svh] bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="text-xs tracking-[0.35em] text-white/50">PROJECTS</div>
              <h3 className="mt-4 text-4xl font-semibold text-white">Selected work</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                Placeholder section. You can replace this with your real AI product case studies later.
              </p>
            </div>
          </section>

          <section id="blogs" className="relative min-h-[60svh] bg-white">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="text-xs tracking-[0.35em] text-neutral-500">BLOGS</div>
              <h3 className="mt-4 text-4xl font-semibold text-neutral-900">Writing</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
                Placeholder section.
              </p>
            </div>
          </section>

          <section id="contact" className="relative min-h-[60svh] bg-neutral-950">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="text-xs tracking-[0.35em] text-white/50">CONTACT</div>
              <h3 className="mt-4 text-4xl font-semibold text-white">Let&apos;s talk</h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                Placeholder section.
              </p>
            </div>
          </section>
        </div>

        {/* Sticky overlay: the traveling frame */}
        <div className="pointer-events-none sticky top-0 z-40 h-[100svh]">
          <motion.div
            style={{
              left: "50%",
              top: "50%",
              x: frameX,
              y: frameY,
              rotate: frameRotate,
              scale: frameScale,
              borderRadius: frameRadius,
              boxShadow: frameShadow,
            }}
            className="absolute h-[360px] w-[280px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md md:h-[440px] md:w-[340px]"
          >
            <div className="relative h-full w-full">
              {mounted && (
                <Image
                  key={images[activeImage]}
                  src={images[activeImage]}
                  alt="Frame"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                />
              )}

              {/* Soft overlays to match your dark hero vibe */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_20%_35%,rgba(249,115,22,0.16),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_45%,rgba(0,0,0,0.45)_100%)]" />

              {/* Small “browser chrome” like the template */}
              <div className="absolute left-0 right-0 top-0 flex items-center gap-2 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/22" />
                <span className="h-2 w-2 rounded-full bg-white/18" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* The waving button stays centered like your earlier version */}
        <div className="pointer-events-none fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <div className="pointer-events-auto">
            <button
              type="button"
              aria-label="Say hi"
              className="relative h-14 w-14 rounded-full bg-indigo-500 shadow-[0_18px_55px_rgba(99,102,241,0.35)]"
            >
              <span className="absolute inset-0 flex items-center justify-center text-2xl">
                👋
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
