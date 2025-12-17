"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: orange (left) + blue (right), dark base */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_18%,rgba(234,88,12,0.30),transparent_60%),radial-gradient(900px_600px_at_78%_22%,rgba(37,99,235,0.30),transparent_62%),#050505]" />

      {/* Add extra space under nav like the reference */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-3">
          {/* LEFT: name + "Artificial Intelligence" */}
          <div className="order-2 md:order-1">
            <p className="mb-3 text-xs tracking-widest text-white/55">
              ROHAN JETHA
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
              ARTIFICIAL
              <br />
              INTELLIGENCE
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
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

          {/* CENTER: straight image */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <Image
                  src="/rohan.png"
                  alt="Rohan Jetha"
                  width={440}
                  height={560}
                  priority
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </motion.div>

              {/* Animated hand under image */}
              <motion.div
                aria-hidden
                className="absolute -bottom-10 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-indigo-500 text-white shadow-xl"
                animate={{
                  rotate: [0, 12, -10, 12, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.div>
            </div>
          </div>

          {/* RIGHT: "Leader" + small sentence */}
          <div className="order-3 text-left md:text-right">
            <h2 className="text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
              LEADER
            </h2>
            <p className="mt-4 text-sm text-white/70">
              I ship practical AI systems with crisp strategy and measurable
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
