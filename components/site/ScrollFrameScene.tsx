"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

const HERO_IMAGE_SRC = "/rohan.png"; // in /public/rohan.png

function clamp01(n: number) {
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

export function ScrollFrameScene() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // This section controls the whole scroll-linked animation.
  // Height gives us enough "scroll runway" to move the image from center to right.
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  // HERO fade + blur as you start scrolling
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroBlurPx = useTransform(scrollYProgress, [0, 0.12], [0, 10]);
  const heroBlur = useMotionTemplate`blur(${heroBlurPx}px)`;

  // Image "card" movement: center (hero) -> right (capabilities)
  const cardX = useTransform(scrollYProgress, [0.05, 0.35], [0, 260]);
  const cardY = useTransform(scrollYProgress, [0.05, 0.35], [0, 40]);
  const cardRotate = useTransform(scrollYProgress, [0.05, 0.35], [0, 10]);
  const cardScale = useTransform(scrollYProgress, [0.0, 0.18], [1, 0.95]);

  // When we enter the capabilities area, show left content
  const capsOpacity = useTransform(scrollYProgress, [0.25, 0.38], [0, 1]);
  const capsY = useTransform(scrollYProgress, [0.25, 0.38], [18, 0]);

  const navJumpLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#blogs", label: "Blogs" },
    ],
    [],
  );

  // Background gradient: orange on left, blue on right, dark overall
  const heroBg = useMemo(() => {
    return [
      "radial-gradient(900px 600px at 12% 12%, rgba(255,140,64,0.35) 0%, rgba(0,0,0,0) 60%)",
      "radial-gradient(900px 600px at 88% 20%, rgba(64,140,255,0.35) 0%, rgba(0,0,0,0) 60%)",
      "radial-gradient(1100px 900px at 50% 85%, rgba(40,60,120,0.20) 0%, rgba(0,0,0,0) 60%)",
      "linear-gradient(180deg, #07090F 0%, #06070B 45%, #05060A 100%)",
    ].join(", ");
  }, []);

  // Keep overall site dark even if some global CSS is weird
  const pageBg = "#05060A";

  // Used to keep image always valid for Next/Image
  const safeSrc = HERO_IMAGE_SRC;

  return (
    <div ref={rootRef} className="relative" style={{ background: pageBg }}>
      {/* Total scroll runway */}
      <div className="relative h-[240vh]">
        {/* HERO */}
        <section
          id="home"
          className="sticky top-0 z-0 h-screen overflow-hidden"
          style={{ backgroundImage: heroBg }}
        >
          {/* subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Nav (kept simple, matching your pill look) */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 z-40">
            <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-center px-4">
              <div className="flex w-full items-center justify-between rounded-full bg-[#BFC3C9]/95 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full">
                    <Image
                      src={safeSrc}
                      alt="Rohan"
                      fill
                      className="object-cover"
                      sizes="36px"
                      priority
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-black/80">
                    <span>Available for work</span>
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="hidden items-center gap-6 text-sm text-black/70 md:flex">
                  {navJumpLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-black"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="#contact"
                    className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* HERO content with same structure as Duncan layout */}
          <motion.div
            className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4"
            style={{ opacity: heroOpacity, filter: heroBlur }}
          >
            <div className="relative w-full">
              {/* big left text */}
              <div className="absolute left-0 top-1/2 w-[38%] -translate-y-1/2">
                <div className="text-xs tracking-[0.35em] text-white/60">
                  ROHAN JETHA
                </div>
                <div className="mt-4 text-[clamp(44px,6vw,84px)] font-extrabold leading-[0.88] text-white">
                  ARTIFICIAL
                  <br />
                  INTELLIGENCE
                </div>
                <div className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                  I build AI enabled products that move from idea to outcome with
                  clear strategy, fast iteration, and measurable impact.
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="#projects"
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
                  >
                    View work
                  </Link>
                  <Link
                    href="#contact"
                    className="rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-semibold text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* big right text */}
              <div className="absolute right-0 top-1/2 w-[38%] -translate-y-1/2 text-right">
                <div className="text-[clamp(44px,6vw,84px)] font-extrabold leading-[0.88] text-white/14">
                  LEADER
                </div>
                <div className="mt-4 text-sm leading-6 text-white/70">
                  Roadmaps, experimentation, LLM workflows, and shipping
                  discipline.
                  <br />
                  Less hype, more outcomes.
                </div>
              </div>

              {/* centered image, straight, no frame */}
              <div className="mx-auto flex w-full flex-col items-center justify-center">
                <motion.div
                  className="relative z-10"
                  style={{
                    x: cardX,
                    y: cardY,
                    rotate: cardRotate,
                    scale: cardScale,
                  }}
                >
                  <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[28px] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:h-[460px] md:w-[360px]">
                    <Image
                      src={safeSrc}
                      alt="Rohan portrait"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 360px, 280px"
                      priority
                    />
                    <div className="absolute inset-0 ring-1 ring-white/10" />
                  </div>
                </motion.div>

                {/* animated hand under image */}
                <motion.div
                  className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B63FF] shadow-[0_18px_60px_rgba(91,99,255,0.35)]"
                  animate={{ rotate: [0, 12, -10, 12, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: "easeInOut",
                  }}
                  aria-label="Hi"
                  title="Hi"
                >
                  <span className="text-2xl">👋</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CAPABILITIES (dark theme, with left text when image reaches right) */}
        <section
          id="about"
          className="relative z-10"
          style={{ background: pageBg }}
        >
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid items-start gap-12 md:grid-cols-2">
              {/* Left content reveals as you scroll */}
              <motion.div style={{ opacity: capsOpacity, y: capsY }}>
                <div className="text-xs tracking-[0.35em] text-white/60">
                  CAPABILITIES
                </div>
                <h2 className="mt-4 text-4xl font-bold text-white">
                  What I can do for you
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                  Dummy copy for now. This section appears as the image moves to
                  the right, matching the reference layout and animation
                  behavior.
                </p>

                <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
                  {[
                    {
                      title: "Product sense",
                      desc: "Turn vague problems into clear goals, segments, and measurable outcomes.",
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
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 px-6 py-5"
                    >
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-white/80">
                        ↑
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm text-white/65">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right side "note card" */}
              <motion.div style={{ opacity: capsOpacity, y: capsY }}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                  <div className="text-xs font-semibold tracking-[0.25em] text-white/60">
                    NOTE
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/70">
                    The portrait above is the same element you saw in the hero.
                    It moves from center to the right as you scroll, then this
                    left content fades in.
                  </p>
                  <div className="mt-6 h-px bg-white/10" />
                  <p className="mt-6 text-sm leading-6 text-white/70">
                    Next we can swap this placeholder copy with real sections
                    like Projects, About, and Blog.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Placeholder anchors */}
        <section id="projects" className="relative z-10" style={{ background: pageBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-xs tracking-[0.35em] text-white/60">PROJECTS</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Selected work</h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Placeholder content. We will build this properly after the hero and scroll animation feel perfect.
            </p>
          </div>
        </section>

        <section id="blogs" className="relative z-10" style={{ background: pageBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-xs tracking-[0.35em] text-white/60">BLOGS</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Writing</h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Placeholder content.
            </p>
          </div>
        </section>

        <section id="contact" className="relative z-10" style={{ background: pageBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-xs tracking-[0.35em] text-white/60">CONTACT</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Say hello</h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Placeholder content.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
