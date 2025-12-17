"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/site/sections/Hero";
import { Capabilities } from "@/components/site/sections/Capabilities";

export function ScrollFrameScene() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "34%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-6, 8]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  const portraitOpacity = useTransform(scrollYProgress, [0, 0.45, 0.6], [1, 1, 0]);
  const altOpacity = useTransform(scrollYProgress, [0.45, 0.6, 1], [0, 1, 1]);

  return (
    <div ref={sceneRef} className="relative">
      <Hero />

      <section className="relative h-[170vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute left-10 top-24 h-3 w-3 rounded-full bg-indigo-500/70" />

          <div className="relative h-full w-full max-w-6xl px-5">
            <motion.div
              style={{
                left: "50%",
                top: "52%",
                x,
                y,
                scale,
                rotateZ,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="absolute"
            >
              <div className="relative w-[280px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.12)] ring-1 ring-black/10 md:w-[360px]">
                <div className="relative aspect-[3/4] w-full">
                  <motion.div style={{ opacity: portraitOpacity }} className="absolute inset-0">
                    <Image
                      src="/rohan.png"
                      alt="Rohan portrait"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 360px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_50%,rgba(0,0,0,0.10)_100%)]" />
                  </motion.div>

                  <motion.div style={{ opacity: altOpacity }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.22),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(245,245,245,0.95))]" />
                    <div className="absolute inset-x-0 top-0 h-12 border-b border-black/10 bg-white/70" />

                    <div className="absolute left-5 top-5 flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-black/15" />
                      <div className="h-2.5 w-2.5 rounded-full bg-black/12" />
                      <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    </div>

                    <div className="absolute inset-0 p-6 pt-16">
                      <div className="text-xs font-medium text-neutral-700">AI PM Snapshot</div>
                      <div className="mt-2 text-sm text-neutral-600">
                        Problem, metrics, roadmap, execution.
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="h-3 w-4/5 rounded bg-black/10" />
                        <div className="h-3 w-3/5 rounded bg-black/10" />
                        <div className="h-3 w-2/3 rounded bg-black/10" />
                        <div className="h-3 w-1/2 rounded bg-black/10" />
                      </div>

                      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-4">
                        <div className="h-3 w-2/3 rounded bg-black/10" />
                        <div className="mt-3 h-3 w-5/6 rounded bg-black/10" />
                        <div className="mt-3 h-3 w-1/2 rounded bg-black/10" />
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_55%,rgba(0,0,0,0.10)_100%)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Capabilities />
    </div>
  );
}

