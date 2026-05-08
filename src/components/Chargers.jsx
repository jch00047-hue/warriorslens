import React, { useState } from "react";
import { CHARGERS } from "../data/mock";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const Chargers = () => {
  const [open, setOpen] = useState(null);
  const total = CHARGERS.images.length + 1;

  const next = () => setOpen((i) => (i + 1) % total);
  const prev = () => setOpen((i) => (i - 1 + total) % total);

  return (
    <>
      <section
        id="chargers"
        className="reveal border-t border-[#262017] bg-[#0a0a0a] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.18em] text-[#8e8778] uppercase mb-3">
              <Camera className="w-4 h-4" />
              05 / {CHARGERS.eyebrow.toUpperCase()}
            </div>
            {/* Title + subtitle, sized to match rest of site */}
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#e9e3d6] mb-3">
              {CHARGERS.title}
            </h2>
            <p className="text-sm md:text-base font-medium text-[#b7b0a1] max-w-2xl mx-auto">
              {CHARGERS.subtitle}
            </p>
          </div>

          {/* Body + meta */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between mb-12">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-2 bg-[#111010] border border-[#262017] rounded text-[0.7rem] uppercase tracking-[0.18em] text-[#8e8778] mb-5">
                Personal Photography • Sports Documentary
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#d3ccbf]">
                {CHARGERS.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="md:w-[300px] lg:w-[340px]">
              <dl className="grid grid-cols-2 gap-4 text-xs text-[#b7b0a1]">
                {CHARGERS.meta.map((m) => (
                  <div key={m.k} className="space-y-1">
                    <dt className="font-semibold tracking-[0.18em] text-[0.65rem] text-[#8e8778] uppercase">
                      {m.k}
                    </dt>
                    <dd className="text-sm text-[#e9e3d6]">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Hero frame */}
          <button
            onClick={() => setOpen(0)}
            className="block w-full relative overflow-hidden bg-[#141414] aspect-[21/9] mb-10 group rounded-lg border border-[#262017]"
          >
            <img
              src={CHARGERS.hero}
              alt="Chargers 2021 hero frame"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 drop-shadow-lg">
                Game Day — LA Chargers vs Washington
              </h3>
              <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-[#d3ccbf]">
                Frame 01 • Project cover
              </div>
            </div>
          </button>

          {/* Stats + CTA */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between mb-10">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
              {CHARGERS.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[#262017] bg-[#111010] px-4 py-3"
                >
                  <dt className="text-[0.65rem] font-medium tracking-[0.16em] text-[#8e8778] uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[#e9e3d6]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="text-center md:text-right">
              <button
                onClick={() => setOpen(0)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#111010] border border-[#262017] hover:border-[#c9a961] rounded text-[0.75rem] uppercase tracking-[0.16em] text-[#e9e3d6] transition-colors"
              >
                <Camera className="w-4 h-4" />
                View gallery
              </button>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 auto-rows-[1fr]">
            {CHARGERS.images.map((src, i) => {
              const span =
                i === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : i === 5
                  ? "sm:col-span-2"
                  : i === 9
                  ? "sm:row-span-2"
                  : i === 12
                  ? "sm:col-span-2"
                  : "";
              return (
                <button
                  key={src}
                  onClick={() => setOpen(i + 1)}
                  className={`relative overflow-hidden bg-[#141414] rounded-lg border border-[#262017] ${span}`}
                >
                  <img
                    src={src}
                    alt={`Chargers 2021 frame ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.16em] text-[#d3ccbf]">
                    <span>Chargers 2021</span>
                    <span className="text-[#e9e3d6] font-semibold">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quote */}
          <blockquote className="max-w-2xl mx-auto text-center py-16 mt-16 border-y border-[#262017]">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-[#d3ccbf] mb-6 italic leading-relaxed">
              "The same lens that documents coalition operations can capture the
              energy of game day. Photographer first, fan second — every frame
              tells the story of that singular Sunday at FedExField."
            </p>
            <footer className="text-[0.7rem] uppercase tracking-[0.2em] text-[#8e8778]">
              — SSG J. C. HERNANDEZ
            </footer>
          </blockquote>

          {/* Contact CTA */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#111010] border border-[#262017] hover:border-[#c9a961] rounded text-[0.75rem] uppercase tracking-[0.16em] text-[#e9e3d6] transition-colors"
            >
              <Camera className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Personal projects</div>
                <div className="text-[0.7rem] text-[#b7b0a1]">
                  Invite the lens.
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
            aria-label="close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="prev"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <img
            src={open === 0 ? CHARGERS.hero : CHARGERS.images[open - 1]}
            alt={`Frame ${open + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
            <span>
              {String(open + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} •{" "}
              {open === 0 ? "Project cover" : `Frame ${open + 1}`}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Chargers;