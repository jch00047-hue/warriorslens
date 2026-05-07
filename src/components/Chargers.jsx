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
      <section className="max-w-6xl mx-auto px-4 py-24 lg:py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 mb-4">
            <Camera className="w-4 h-4" />
            05 / {CHARGERS.eyebrow.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            {CHARGERS.title.toUpperCase()}
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-slate-400 max-w-3xl mx-auto">
            {CHARGERS.subtitle.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-slate-200">
              {CHARGERS.subtitle.split(" ").slice(2).join(" ")}
            </span>
          </p>
        </div>

        <hr className="border-slate-800 my-16" />

        <div className="max-w-3xl mx-auto mb-16 space-y-6 text-lg text-slate-300 leading-relaxed">
          <div className="inline-block px-4 py-2 bg-slate-900/50 border border-slate-800 rounded text-sm uppercase tracking-wider text-slate-400 mb-6">
            PERSONAL PHOTOGRAPHY • SPORTS DOCUMENTARY
          </div>
          {CHARGERS.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-sm uppercase tracking-wider text-slate-500">
          {CHARGERS.meta.map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-black text-slate-300 mb-1">{m.k}</span>
              <span>{m.v}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(0)}
          className="block w-full cine-card relative overflow-hidden bg-[#141414] aspect-[21/9] reveal mb-4 lg:mb-5 group"
        >
          <img
            src={CHARGERS.hero}
            alt="LA Chargers Season Opener 2021"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-black text-white mb-2 drop-shadow-lg">
              Game Day — LA Chargers vs Washington
            </h2>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-300">
              FRAME 01 • PROJECT COVER
            </div>
          </div>
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-black mb-2">Game Day — LA Chargers 2021</h3>
          <button
            onClick={() => setOpen(0)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800 hover:border-slate-600 rounded text-sm uppercase tracking-wider transition-colors"
          >
            <Camera className="w-4 h-4" />
            VIEW GALLERY
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[1fr]">
          {CHARGERS.images.map((src, i) => {
            const span =
              i === 0 ? "col-span-2 row-span-2" :
              i === 5 ? "col-span-2" :
              i === 9 ? "row-span-2" :
              i === 12 ? "col-span-2" : "";
            return (
              <button
                key={i}
                onClick={() => setOpen(i + 1)}
                className={`cine-card relative overflow-hidden bg-[#141414] ${span}`}
              >
                <img
                  src={src}
                  alt={`LA Chargers 2021 frame ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 mb-1">
                    Chargers 2021
                  </div>
                  <div className="text-sm font-bold text-white drop-shadow-lg">
                    {String(i + 2).padStart(2, "0")}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <blockquote className="max-w-2xl mx-auto text-center py-24 my-24 border-y border-slate-800">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mb-8 italic leading-relaxed">
            "The same lens that documents coalition operations can capture the electric energy of game day. Photographer first, fan second — every frame tells the story of that singular Sunday at FedExField."
          </p>
          <footer className="text-sm uppercase tracking-widest text-slate-500">
            — SSG J. C. HERNANDEZ
          </footer>
        </blockquote>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/50 border border-slate-800 hover:border-slate-600 rounded text-sm uppercase tracking-wider transition-colors"
          >
            <Camera className="w-5 h-5" />
            <div className="text-left">
              <div className="font-black">PERSONAL PROJECTS</div>
              <div className="text-xs text-slate-400">Invite the lens.</div>
            </div>
          </a>
        </div>
      </section>

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
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="next"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <img
            src={open === 0 ? CHARGERS.hero : CHARGERS.images[open - 1]}
            alt={`Frame ${open + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center 
