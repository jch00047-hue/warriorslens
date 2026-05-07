import React, { useMemo, useState } from "react";
import { CATEGORIES, PROJECTS } from "../data/mock";
import { ArrowUpRight, X } from "lucide-react";

const PortfolioGallery = () => {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);

  const items = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-10 reveal">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">01 / SELECTED WORK</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] text-[#f1ecdf] tracking-tight">
              Operational <br className="hidden sm:block" />
              <span className="italic font-light text-[#c9a961]">archive.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-sm text-[#8a8275] leading-relaxed">
            Frames captured across CONUS training, OCONUS deployments, and coalition operations — a curated selection of mission documentation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10 reveal">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono-x text-[11px] tracking-[0.25em] px-4 h-9 border transition-colors ${
                active === c
                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                  : "text-[#bdb6a5] border-white/15 hover:border-[#c9a961] hover:text-[#c9a961]"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
          <span className="ml-auto font-mono-x text-[10px] tracking-[0.25em] text-[#5a5446]">{items.length} FRAMES</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-3 reveal">
          {items.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setOpen(p)}
              className={`cine-card group relative overflow-hidden bg-[#141414] ${p.span} text-left`}
              style={{ gridRowEnd: undefined }}
            >
              <img src={p.src} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover cine-img" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-[#c9a961]/60 transition-colors" />
              <div className="absolute top-3 left-3 font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 grid place-items-center bg-[#0a0a0a]/70 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={14} className="text-[#c9a961]" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 lg:p-5">
                <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#bdb6a5] mb-1">
                  {p.category.toUpperCase()} • {p.year}
                </div>
                <div className="font-display text-lg lg:text-xl text-[#f1ecdf] leading-tight">
                  {p.title}
                </div>
                <div className="font-mono-x text-[10px] text-[#8a8275] mt-1">{p.location}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-5 right-5 w-11 h-11 grid place-items-center border border-white/20 text-[#e9e3d6] hover:text-[#c9a961] hover:border-[#c9a961]" onClick={() => setOpen(null)} aria-label="close">
            <X size={18} />
          </button>
          <div className="max-w-6xl w-full grid lg:grid-cols-3 gap-6" onClick={(e) => e.stopPropagation()}>
            <div className="lg:col-span-2 bg-[#141414]">
              <img src={open.src} alt={open.title} className="w-full max-h-[80vh] object-contain" />
            </div>
            <div className="flex flex-col justify-end p-2">
              <div className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961] mb-3">{open.category.toUpperCase()}</div>
              <h3 className="font-display text-3xl lg:text-4xl text-[#f1ecdf] leading-tight">{open.title}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">LOCATION</div>
                  <div className="text-[#e9e3d6]">{open.location}</div>
                </div>
                <div>
                  <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">YEAR</div>
                  <div className="text-[#e9e3d6]">{open.year}</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-[#bdb6a5] leading-relaxed">
                Captured during operational activity supporting commander’s intent and theater-level Public Affairs themes.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
