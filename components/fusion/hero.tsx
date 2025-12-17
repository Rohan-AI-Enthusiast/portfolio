"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative pb-20 pt-10">
      <div className="mx-auto w-full max-w-6xl px-5">
        {/* Hero frame */}
        <div className="fusion-hero-bg fusion-card fusion-glow border border-white/14">
          <div className="fusion-hero-inner relative px-6 py-10 md:px-10 md:py-14">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Building AI products that ship
            </div>

            {/* Big type layout */}
            <div className="relative mt-10 min-h-[460px]">
              <div className="pointer-events-none absolute left-0 top-[70px] text-[64px] font-semibold leading-none tracking-tight text-white md:text-[92px]">
                AI
              </div>

              <div className="pointer-events-none absolute left-0 top-[150px] max-w-[520px] text-[44px] font-semibold leading-[0.98] tracking-tight text-white md:text-[76px]">
                systems that feel like
                <br />
                a product
              </div>

              <div className="pointer-events-none absolute right-0 top-[110px] text-right text-[54px] font-semibold leading-none tracking-tight text-white md:text-[96px]">
                BUILDER
              </div>

              {/* Center image card */}
              <motion.div
                className="absolute left-1/2 top-[130px] w-[260px] -translate-x-1/2 md:w-[320px]"
                initial={{ opacity: 0, y: 14, rotate: -6 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  rotate: [-6, -4.5, -6],
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                  {/* Keep aspect ratio, then fill with Image */}
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/rohan.jpg"
                      alt="Rohan portrait"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 260px, 320px"
                    />

                    {/* Subtle dark overlay for premium look on dark UI */}
                    <div className="pointer-events-none absolute inset-0 bg-black/15" />

                    {/* Subtle highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_45%)]" />
                  </div>
                </div>

                {/* Waving button */}
                <div className="absolute -bottom-8 left-10">
                  <button
                    type="button"
                    aria-label="Say hi"
                    className="relative h-20 w-20 rounded-full bg-indigo-500 shadow-[0_18px_55px_rgba(99,102,241,0.35)]"
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
              </motion.div>

              {/* Right caption */}
              <div className="absolute right-0 top-[215px] max-w-[280px] text-right text-sm leading-6 text-white/70 md:text-base">
                I design and build automation systems with clear reasoning,
                measurable impact, and a clean UI layer on top.
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            <div className="mt-10 border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
