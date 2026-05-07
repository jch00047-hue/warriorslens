import React, { useState } from "react";
import { CHARGERS } from "../data/mock";
import { HeartHandshake, X, ChevronLeft, ChevronRight } from "lucide-react";

const Chargers = () => {
  const [open, setOpen] = useState(null);
  const total = CHARGERS.images.length + 1; // +1 for hero image

  const next = () => setOpen((i) => (i + 1) % total);
  const prev = () => setOpen((i) => (i - 1 + total) % total);

  return (
    <>
      {/* Eyebrow + heading */}
      <section className="max-w-6xl mx-auto px-4 py-24 lg:py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 mb-4">
            <HeartHandshake className="w-4 h-4" />
            05 / {CHARGERS.eyebrow.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            {CHARGERS.title.toUpperCase()}
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-slate-400 max-w-3xl mx-auto">
            {CHARGERS.subtitle.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="text-slate-200">
              {CHARGERS.subtitle.split(" ").slice(3).join(" ")}
            </span>
          </p>
        </div>

        <hr className="border-slate-800 my-16" />

        {/* PROJECT META */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-sm uppercase tracking-wider text-slate-500">
          {CHARGERS.meta.map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-black text-slate-300 mb-1">{m.k}</span>
              <span>{m.v}</span>
            </div>
          ))}
        </div>

        {/* Hero image of project */}
        <button
          onClick={() => setOpen(0)}
          className="block w-full cine-card relative overflow-hidden bg-[#141414] aspect-[21/9] reveal mb-4 lg:mb-5 group"
        >
          <img
            src={CHARGERS.hero}
            alt={`${CHARGERS.title} — Hero shot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-black text-white mb-2 drop-shadow-lg">
              Game Day — LA Chargers Season Opener 2021
            </h2>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-slate-300">
              FRAME 01 • PROJECT COVER
            </div>
          </div>
        </button>

        {/* Asymmetric mosaic of real photographs */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[1fr]">
          {CHARGERS.images.map((src, i) => {
            const span = i === 0 ? "col-span-2 row-span-2" : 
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
                  alt={`Chargers game frame ${i + 1}`}
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

        {/* Pull quote */}
        <blockquote className="max-w-2xl mx-auto text-center py-24 my-24 border-y border-slate-800">
          <svg
            className="w-16 h-16 text-slate-500 mx-auto mb-8 opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.662 16.991A8.001 8.001 0 0 1 7 15c-1.102 0-2.167-.146-3.186-.4-.975-.249-1.928-.584
