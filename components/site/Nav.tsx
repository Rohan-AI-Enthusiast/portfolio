"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export function Nav() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Blogs", href: "#blogs" },
    ],
    []
  );

  const [isCompact, setIsCompact] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compactActive = isCompact && !isHover;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <motion.nav
        className="pointer-events-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          animate={{
            paddingLeft: compactActive ? 10 : 14,
            paddingRight: compactActive ? 10 : 14,
            paddingTop: compactActive ? 8 : 10,
            paddingBottom: compactActive ? 8 : 10,
            boxShadow: compactActive
              ? "0 10px 35px rgba(0,0,0,0.08)"
              : "0 14px 45px rgba(0,0,0,0.10)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 pl-1">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/10 bg-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.45),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.35),transparent_55%)]" />
            </div>

            <motion.div
              animate={{ width: compactActive ? 0 : "auto", opacity: compactActive ? 0 : 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <span className="whitespace-nowrap text-sm font-medium text-neutral-800">
                Available for work
              </span>
            </motion.div>

            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>

          <div className="mx-2 h-6 w-px bg-black/10" />

          <div className="flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-neutral-700 hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ml-2">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

