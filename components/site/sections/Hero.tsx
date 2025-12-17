
"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-28">
        <div className="pointer-events-none absolute left-10 top-24 h-3 w-3 rounded-full bg-indigo-500/70" />

        <div className="grid items-center gap-10 md:grid-cols-[1fr,1fr]">
          <div>
            <div className="text-sm font-medium tracking-wide text-neutral-600">
              ROHAN JETHA
            </div>

            <h1 className="mt-4 text-[64px] font-extrabold leading-[0.92] tracking-tight text-neutral-900 md:text-[92px]">
              AI
              <br />
              PRODUCT
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-neutral-600">
              I build AI enabled products with crisp problem framing, measurable outcomes,
              and practical execution.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-black/5"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-[64px] font-extrabold leading-[0.92] tracking-tight text-neutral-900 md:text-[92px]">
              SYSTEMS
            </h2>

            <p className="mt-6 ml-auto max-w-md text-base leading-7 text-neutral-600">
              Roadmaps, experimentation, LLM workflows, and shipping discipline.
              Less hype, more outcomes.
            </p>
          </div>
        </div>

        {/* Waving button, sits near the center like the template */}
        <div className="relative mt-20 flex justify-center">
          <button
            type="button"
            aria-label="Say hi"
            className="relative h-20 w-20 rounded-full bg-indigo-500 shadow-[0_18px_55px_rgba(99,102,241,0.30)]"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 18, -12, 18, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
