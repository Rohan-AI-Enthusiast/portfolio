"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

const HERO_IMAGE_SRC = "/rohan.png";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function ScrollFrameScene() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Card motion
  const cardX = useTransform(scrollYProgress, [0, 0.55, 1], ["0%", "0%", "34%"]);
  const cardY = useTransform(scrollYProgress, [0, 0.45, 1], ["0px", "120px", "0px"]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.55, 1], ["-10deg", "-6deg", "8deg"]);
  const cardScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.98, 0.92]);

  // Hero fades (no blur to avoid MotionValue.to issues)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 0.9, 0.6]);

  // Left content reveal
  const leftContentOpacity = useTransform(scrollYProgress, [0.45, 0.62, 1], [0, 1, 1]);
  const leftContentY = useTransform(scrollYProgress, [0.45, 0.62, 1], [18, 0, 0]);

  // Background glow opacity
  const bgGlowOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.9, 0.75]);

  const heroBadges = useMemo(
    () => ["AI Product", "Automation Systems", "Applied GenAI", "Outbound Intelligence"],
    [],
  );

  return (
    <main className="bg-[#070A10] text-white">
      <section
        ref={(node) => {
          sectionRef.current = node;
        }}
        className="relative"
      >
        <div className="h-[220vh]">
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* Background */}
            <motion.div className="absolute inset-0" style={{ opacity: bgGlowOpacity }}>
              <div className="absolute inset-0 bg-[#070A10]" />
              <div className="pointer-events-none absolute -left-40 top-[-220px] h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[120px]" />
              <div className="pointer-events-none absolute -right-40 top-[-260px] h-[760px] w-[760px] rounded-full bg-sky-500/20 blur-[130px]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
            </motion.div>

            {/* NAV */}
            <div className="relative z-20 mx-auto flex max-w-6xl justify-center px-4 pt-6">
              <div className="flex w-full max-w-3xl items-center justify-between rounded-full bg-white/70 px-3 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
                    <Image src={HERO_IMAGE_SRC} alt="Rohan" fill className="object-cover" priority />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/80">
                    <span className="font-medium">Available for work</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <nav className="hidden items-center gap-7 text-sm text-black/60 md:flex">
                  <Link className="hover:text-black" href="#home">
                    Home
                  </Link>
                  <Link className="hover:text-black" href="#about">
                    About
                  </Link>
                  <Link className="hover:text-black" href="#projects">
                    Projects
                  </Link>
                  <Link className="hover:text-black" href="#blogs">
                    Blogs
                  </Link>
                </nav>

                <Link href="#contact" className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
                  Contact
                </Link>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div id="home" className="relative z-10 mx-auto max-w-6xl px-4 pt-14">
              <motion.div style={{ opacity: heroOpacity }}>
                <div className="grid items-start gap-10 md:grid-cols-2">
                  <div className="pt-8">
                    <div className="text-xs tracking-[0.35em] text-white/60">ROHAN JETHA</div>

                    <h1 className="mt-6 text-[52px] font-semibold leading-[0.92] tracking-[-0.04em] md:text-[80px]">
                      AI
                      <br />
                      PRODUCT
                    </h1>

                    <p className="mt-6 max-w-md text-[15px] leading-7 text-white/70">
                      I build AI-enabled products with crisp problem framing, measurable outcomes, and practical execution.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {heroBadges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <Link href="#projects" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
                        View work
                      </Link>
                      <Link
                        href="#contact"
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>

                  <div className="hidden md:block pt-10 text-right">
                    <div className="text-[64px] font-semibold tracking-[-0.02em] text-white/10">SYSTEMS</div>
                    <p className="ml-auto mt-2 max-w-sm text-sm leading-6 text-white/45">
                      Roadmaps, experimentation, LLM workflows, and shipping discipline.
                      <br />
                      Less hype, more outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* TRAVELING CARD + HAND */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <motion.div
                style={{ x: cardX, y: cardY, rotate: cardRotate, scale: cardScale }}
                className="pointer-events-auto relative"
              >
                <div
                  className={cn(
                    "relative h-[360px] w-[280px] md:h-[460px] md:w-[360px]",
                    "overflow-hidden rounded-[26px]",
                    "shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
                    "bg-black/20",
                  )}
                >
                  <Image src={HERO_IMAGE_SRC} alt="Rohan portrait" fill priority className="object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/10" />
                </div>

                <motion.button
                  type="button"
                  aria-label="Hi"
                  className="pointer-events-auto absolute left-1/2 top-full mt-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-500 shadow-[0_18px_60px_rgba(79,70,229,0.55)]"
                  animate={{ rotate: [0, 12, -10, 12, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                >
                  <span className="text-xl">👋</span>
                </motion.button>
              </motion.div>
            </div>

            {/* LEFT CONTENT */}
            <motion.div
              className="absolute inset-x-0 bottom-10 z-20 mx-auto max-w-6xl px-4"
              style={{ opacity: leftContentOpacity, y: leftContentY }}
            >
              <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="text-xs tracking-[0.35em] text-white/60">CAPABILITIES</div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">What I can do for you</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                    Dummy copy for now. This block is meant to sit on the left while the portrait travels to the right.
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      ["Product sense", "Turn vague problems into clear goals, user segments, and measurable outcomes."],
                      ["AI product strategy", "Pick the right model approach, define success metrics, and ship iteratively."],
                      ["Roadmaps and execution", "Translate strategy into milestones, experiments, and delivery plans."],
                      ["Stakeholder alignment", "Write crisp docs, run clean meetings, and drive decisions with evidence."],
                    ].map(([title, desc]) => (
                      <div key={title} className="flex items-start justify-between gap-6 border-t border-white/10 pt-4">
                        <div>
                          <div className="font-medium">{title}</div>
                          <div className="mt-1 text-sm text-white/65">{desc}</div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-white/70">
                          ↑
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium tracking-[0.25em] text-white/60">NOTE</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Available for work <span className="ml-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/70">
                    The traveling portrait is controlled by the sticky scroll scene. This card is a placeholder for a future
                    case study preview, testimonial, or featured project.
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium">Next</div>
                    <div className="mt-1 text-sm text-white/65">
                      Swap the portrait for a real project card, then keep the same scroll motion.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* After sticky */}
        <div id="projects" className="relative bg-[#070A10]">
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-xs tracking-[0.35em] text-white/60">NEXT</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">More sections go here</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              Once the scroll animation feels right, we can build Projects, About, and Blog sections in the same dark style.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
