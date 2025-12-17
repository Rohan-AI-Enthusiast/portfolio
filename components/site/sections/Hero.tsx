"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HERO_IMAGE_SRC = "/rohan.png"; // make sure this exists in /public (example: /public/rohan.png)

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background: orange left + blue right (matches image vibe) */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 opacity-90 [background:radial-gradient(900px_circle_at_12%_18%,rgba(255,132,58,0.45),transparent_58%),radial-gradient(900px_circle_at_88%_22%,rgba(59,130,246,0.40),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-24">
        {/* 3-column hero like reference: left text, centered image, right text */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* LEFT */}
          <div className="text-left lg:pr-6">
            <div className="mb-5 text-[11px] tracking-[0.35em] text-white/60">
              ROHAN JETHA
            </div>

            <div className="leading-[0.9]">
              <div className="text-[46px] font-extrabold tracking-tight text-white sm:text-[64px] md:text-[74px]">
                ARTIFICIAL
              </div>
              <div className="text-[46px] font-extrabold tracking-tight text-white sm:text-[64px] md:text-[74px]">
                INTELLIGENCE
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[340px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] shadow-[0_18px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              <Image
                src={HERO_IMAGE_SRC}
                alt="Rohan"
                fill
                priority
                sizes="(max-width: 768px) 300px, 340px"
                className="object-cover"
              />
            </div>

            {/* Waving hand: left corner of image */}
            <motion.div
              className="absolute -left-8 bottom-10 grid h-16 w-16 place-items-center rounded-full bg-indigo-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
              animate={{ rotate: [0, 14, -10, 14, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="text-left lg:pl-6 lg:text-right">
            <div className="text-[46px] font-extrabold tracking-tight text-white/18 sm:text-[64px] md:text-[74px]">
              LEADER
            </div>
            <div className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 lg:ml-auto">
              Building practical AI products and automation systems with measurable outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
