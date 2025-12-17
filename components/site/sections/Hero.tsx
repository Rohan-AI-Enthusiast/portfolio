"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#07080b]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-[620px] w-[620px] rounded-full bg-blue-500/12 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <div className="grid grid-cols-12 items-center gap-10">
          {/* Left typography */}
          <div className="col-span-6">
            <div className="text-xs font-semibold tracking-[0.22em] text-white/60">
              ROHAN JETHA
            </div>

            <h1 className="mt-6 text-[72px] font-semibold leading-[0.92] tracking-tight text-white">
              AI
              <br />
              PRODUCT
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              I build AI enabled products with crisp problem framing, measurable outcomes,
              and practical execution.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="#capabilities"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              >
                View work
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/85 backdrop-blur"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right typography */}
          <div className="col-span-6 text-right">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="text-[72px] font-semibold leading-[0.92] tracking-tight text-white/90">
                SYSTEMS
              </div>
              <div className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 ml-auto">
                Roadmaps, experimentation, LLM workflows, and shipping discipline.
                Less hype, more outcomes.
              </div>
            </motion.div>
          </div>
        </div>

        {/* Waving button placeholder (kept simple for now) */}
        <div className="relative mt-16 h-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-indigo-500 shadow-[0_18px_55px_rgba(99,102,241,0.35)]">
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 18, -12, 18, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 1.8 }}
              >
                👋
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

