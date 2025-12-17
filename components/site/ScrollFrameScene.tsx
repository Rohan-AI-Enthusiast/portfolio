"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/site/sections/Hero";
import { Capabilities } from "@/components/site/sections/Capabilities";

export function ScrollFrameScene() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // This stage spans hero + next section so the frame can travel across both
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  // Travel path: centered in hero -> right side in next section
  const frameX = useTransform(scrollYProgress, [0, 1], ["-50%", "36%"]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["-50%", "-42%"]);
  const frameScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.92]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-6, 10]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Image swap like the Framer reference
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.45, 0.6], [1, 1, 0]);
  const altOpacity = useTransform(scrollYProgress, [0.45, 0.6, 1], [0, 1, 1]);

  return (
    <div ref={stageRef} className="relative">
      {/* Content layer */}
      <div className="relative z-10">
        <Hero />
        <Capabilities />
      </div>

      {/* Traveling frame pinned across the whole stage */}
      <div className="pointer-events-none sticky top-0 z-30 h-screen overflow-hidden">
        <motion.div
          style={{
            left: "50%",
            top: "52%",
            x: frameX,
            y: frameY,
            scale: frameScale,
            rotateZ,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute"
        >
          <div className="relative w-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-[0_40px_140px_rgba(0,0,0,0.65)] backdrop-blur-xl md:w-[360px]">
            <div className="relative aspect-[3/4] w-full">
              <motion.div style={{ opacity: portraitOpacity }} className="absolute inset-0">
                <Image
                  src="/rohan.png"
                  alt="Rohan portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 360px"
                />

                {/* Dark wash */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Hero tint to blend with your orange/blue lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_20%_35%,rgba(249,115,22,0.16),transparent_55%)]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_45%,rgba(0,0,0,0.45)_100%)]" />

                {/* Subtle highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%)]" />
              </motion.div>

              <motion.div style={{ opacity: altOpacity }} className="absolute inset-0">
                {/* “Next section” preview style (light card look) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.16),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(245,245,245,0.92))]" />
                <div className="absolute inset-x-0 top-0 h-12 border-b border-black/10 bg-white/70" />

                <div className="absolute left-5 top-5 flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-black/12" />
                  <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                </div>

                <div className="absolute inset-0 p-6 pt-16">
                  <div className="text-xs font-semibold tracking-wide text-neutral-700">
                    Case study preview
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    Dummy layout that will later become a real project card.
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="h-3 w-4/5 rounded bg-black/10" />
                    <div className="h-3 w-3/5 rounded bg-black/10" />
                    <div className="h-3 w-2/3 rounded bg-black/10" />
                    <div className="h-3 w-1/2 rounded bg-black/10" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_55%,rgba(0,0,0,0.10)_100%)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stage height: needs to be long enough for the travel */}
      <div className="h-[120vh]" />
    </div>
  );
}
