"use client";

export function Nav() {
  return (
    <header className="relative z-50 pt-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5">
        <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur-xl">
          {/* Avatar */}
          <div className="flex items-center gap-3 pr-2">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/5">
              {/* Replace later with your image if you want */}
              <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
            </div>
          </div>

          {/* Links */}
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#home" className="hover:text-white/90">
              Home
            </a>
            <a href="#about" className="hover:text-white/90">
              About
            </a>
            <a href="#projects" className="hover:text-white/90">
              Projects
            </a>
            <a href="#blogs" className="hover:text-white/90">
              Blogs
            </a>
          </div>

          {/* Contact pill */}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
