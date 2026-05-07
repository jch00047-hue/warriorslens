import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "../data/mock";
import { Button } from "./ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button onClick={() => go("top")} className="flex items-center gap-3 group">
          <span className="relative w-9 h-9 grid place-items-center border border-[#c9a961]">
            <span className="absolute inset-1 border border-[#c9a961]/40" />
            <span className="font-display text-[#c9a961] text-base leading-none">WL</span>
          </span>
          <div className="hidden sm:block leading-tight">
            <div className="font-display tracking-[0.18em] text-sm text-[#e9e3d6]">WARRIORS LENS</div>
            <div className="font-mono-x text-[10px] text-[#8a8275] tracking-widest">{SITE.role.toUpperCase()}</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="font-mono-x text-[11px] tracking-[0.25em] text-[#bdb6a5] hover:text-[#c9a961] link-underline"
            >
              <span className="text-[#c9a961] mr-2">{String(i + 1).padStart(2, "0")}</span>
              {n.label.toUpperCase()}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => go("contact")}
            className="hidden md:inline-flex bg-[#c9a961] hover:bg-[#d8b86b] text-[#0a0a0a] font-display tracking-[0.2em] rounded-none h-10 px-5"
          >
            REQUEST SUPPORT
          </Button>
          <button
            className="lg:hidden w-10 h-10 grid place-items-center border border-white/15"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n, i) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left font-display text-2xl tracking-wide text-[#e9e3d6] hover:text-[#c9a961]"
              >
                <span className="font-mono-x text-xs text-[#c9a961] mr-3">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </button>
            ))}
            <Button
              onClick={() => go("contact")}
              className="mt-3 bg-[#c9a961] hover:bg-[#d8b86b] text-[#0a0a0a] font-display tracking-[0.2em] rounded-none h-11"
            >
              REQUEST SUPPORT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
