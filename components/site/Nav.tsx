"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCompact = compact && !hovered;

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          width: isCompact ? 520 : 720,
          paddingLeft: isCompact ? 10 : 14,
          paddingRight: isCompact ? 10 : 14,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="relative flex h-14 items-center justify-between rounded-full border border-white/10 bg-white/70 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.16)]"
      >
        <div className="flex items-center gap-3 pl-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/40 bg-white">
            <Image src="/rohan.png" alt="Rohan" fill className="object-cover" />
          </div>

          <motion.div
            animate={{ opacity: isCompact ? 0 : 1, width: isCompact ? 0 : "auto" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 overflow-hidden whitespace-nowrap"
          >
            <span className="text-sm font-medium text-neutral-900">Available for work</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </motion.div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-800/80 hover:text-neutral-950 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="mr-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
        >
          Contact
        </Link>
      </motion.nav>
    </div>
  );
}
