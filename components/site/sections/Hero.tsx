"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(234,88,12,0.25),transparent_60%),radial-gradient(1200px_600px_at_80%_30%,rgba(37,99,235,0.25),transparent_60%),#050505]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-3">
          {/* LEFT */}
          <div>
            <p className="mb-3 text-xs tracking-widest text-white/50">
              ROHAN JETHA
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
              AI
              <br />
              PRODUCT
            </h1>

            <p className="mt-6 max-w-md text-sm text-white/70">
              I build AI-enabled products with crisp problem framing,
              measurable outcomes, and practical execution.
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                href="#projects"
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
              >
                View work
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2 text-sm text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ rotate: -6, y: 20 }}
              animate={{ rotate: -2, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/rohan.png"
                alt="Rohan Jetha"
                width={420}
                height={560}
                priority
                className="rounded-2xl"
              />

              {/* Hand */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                className="absolute -bottom-10 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg"
              >
                👋
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block text-right">
            <h2 className="text-6xl font-semibold text-white/10">
              SYSTEMS
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Roadmaps, experimentation, LLM workflows,
              and shipping discipline.
              <br />
              Less hype. More outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
