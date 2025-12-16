export function Footer() {
  return (
    <footer className="py-10">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Rohan</div>
        <div className="flex gap-4">
          <a className="hover:text-white/70" href="#work">Work</a>
          <a className="hover:text-white/70" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
