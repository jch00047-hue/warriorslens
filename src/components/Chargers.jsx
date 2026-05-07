import React, { useState } from "react";
import { CHARGERS } from "../data/mock";
import { HeartHandshake, X, ChevronLeft, ChevronRight } from "lucide-react";

const CHARGERS = () => {
  const [open, setOpen] = useState(null);
  const total = VOLUNTEER.images.length + 1;
  const next = () => setOpen((i) => (i + 1) % total);
  const prev = () => setOpen((i) => (i - 1 + total) % total);

  return (
    <section id="chargers" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Eyebrow + heading */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12 reveal">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">
                04 / {VOLUNTEER.eyebrow.toUpperCase()}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="font-display text-[#c9a961] text-lg tracking-[0.18em] mb-3">
              {VOLUNTEER.title.toUpperCase()}
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.92] tracking-tight text-[#f1ecdf]">
              {VOLUNTEER.subtitle.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="italic font-light text-[#c9a961]">
                {VOLUNTEER.subtitle.split(" ").slice(3).join(" ")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <div className="inline-flex items-center gap-2 px-3 h-7 border border-[#c9a961]/40 text-[#c9a961] font-mono-x text-[10px] tracking-[0.25em] mb-4">
              <HeartHandshake size={12} /> PRO BONO &#8226; PARENT VOLUNTEER
            </div>
            <div className="space-y-4 text-[#bdb6a5] leading-relaxed text-[15px]">
              {VOLUNTEER.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Project meta strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 mb-10 reveal">
          {VOLUNTEER.meta.map((m, i) => (
            <div
              key={m.k}
              className={`py-6 px-5 ${i !== 0 ? "lg:border-l" : ""} ${
                i % 2 === 1 ? "border-l" : ""
              } border-white/10`}
            >
              <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">
                {m.k}
              </div>
              <div className="font-display text-base lg:text-lg text-[#f1ecdf] mt-2 leading-snug">
                {m.v}
              </div>
            </div>
          ))}
        </div>

        {/* Hero image of project */}
        <button
          onClick={() => setOpen(0)}
          className="block w-full cine-card relative overflow-hidden bg-[#141414] aspect-[21/9] reveal mb-4 lg:mb-5 group"
        >
          <img
            src={VOLUNTEER.hero}
            alt="Creating Smiles \u2014 Pursuing Hill Elementary"
            className="absolute inset-0 w-full h-full object-cover cine-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 lg:p-10 flex items-end justify-between">
            <div>
              <div className="font-mono-x text-[10px] tracking-[0.3em] text-[#c9a961]">
                FRAME 01 &#8226; PROJECT COVER
              </div>
              <h3 className="mt-2 font-display text-2xl lg:text-4xl text-[#f1ecdf]">
                Creating Smiles
              </h3>
            </div>
            <span className="hidden md:inline-flex font-mono-x text-[10px] tracking-[0.25em] text-[#bdb6a5] border border-white/15 group-hover:border-[#c9a961] group-hover:text-[#c9a961] px-3 h-8 items-center">
              VIEW GALLERY
            </span>
          </div>
        </button>

        {/* Asymmetric mosaic of real photographs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 lg:gap-4 reveal">
          {VOLUNTEER.images.map((src, i) => {
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i === 5
                ? "col-span-2"
                : i === 9
                ? "row-span-2"
                : i === 12
                ? "col-span-2"
                : "";
            return (
              <button
                key={src}
                onClick={() => setOpen(i + 1)}
                className={`cine-card relative overflow-hidden bg-[#141414] ${span}`}
              >
                <img
                  src={src}
                  alt={`Pursuing Hill ${i + 2}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover cine-img"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/0 hover:ring-[#c9a961]/60 transition-colors" />
                <div className="absolute top-3 left-3 font-mono-x text-[10px] tracking-[0.25em] text-[#c9a961] mix-blend-difference">
                  {String(i + 2).padStart(2, "0")}
                </div>
              </button>
            );
          })}
        </div>

        {/* Pull quote */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-center reveal">
          <blockquote className="lg:col-span-9 font-display text-2xl lg:text-3xl leading-snug text-[#e9e3d6]">
            <span className="text-[#c9a961]">&ldquo;</span>The same eye that documents a coalition mission belongs in the hallway of an elementary school. The goal was to capture genuine smiles and cement those happy memories into the very halls they walk every day.<span className="text-[#c9a961]">&rdquo;</span>
            <div className="mt-4 font-mono-x text-[11px] tracking-[0.25em] text-[#8a8275]">
              &mdash; SSG J. C. HERNANDEZ
            </div>
          </blockquote>
          <a
            href="#contact"
            className="lg:col-span-3 group inline-flex items-center justify-between gap-4 border border-white/15 hover:border-[#c9a961] transition-colors px-6 py-5"
          >
            <div>
              <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">
                COMMUNITY PROJECTS
              </div>
              <div className="font-display text-lg text-[#f1ecdf] group-hover:text-[#c9a961]">
                Invite the lens.
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[80] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 grid place-items-center border border-white/20 text-[#e9e3d6] hover:text-[#c9a961] hover:border-[#c9a961]"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
            aria-label="close"
          >
            <X size={18} />
          </button>
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center border border-white/20 text-[#e9e3d6] hover:text-[#c9a961] hover:border-[#c9a961]"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="prev"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center border border-white/20 text-[#e9e3d6] hover:text-[#c9a961] hover:border-[#c9a961]"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="next"
          >
            <ChevronRight size={20} />
          </button>
          <img
            src={open === 0 ? VOLUNTEER.hero : VOLUNTEER.images[open - 1]}
            alt={`Frame ${open + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center font-mono-x text-[11px] tracking-[0.25em] text-[#bdb6a5]">
            FRAME {String(open + 1).padStart(2, "0")} / {total} &#8226; PURSUING HILL ELEMENTARY
          </div>
        </div>
      )}
    </section>
  );
};

export default Volunteer;
