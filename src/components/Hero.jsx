import React from "react";
import { ArrowDownRight, Crosshair } from "lucide-react";
import { HERO_IMAGE, SITE, HERO_STATS } from "../data/mock";

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Combat photography" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Top meta strip */}
      <div className="relative z-10 pt-28 lg:pt-32">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex items-center justify-between font-mono-x text-[11px] tracking-[0.25em] text-[#bdb6a5]">
          <div className="flex items-center gap-2">
            <Crosshair size={14} className="text-[#c9a961]" />
            <span>34.6834° N / 38.0234° E</span>
          </div>
          <div className="hidden md:block">PORTFOLIO — VOL. 01</div>
          <div>EST. 2012</div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        <div className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961] mb-6">
          {SITE.rank} • {SITE.branch} • COMBAT CAMERA
        </div>
        <h1 className="font-display text-[18vw] sm:text-[14vw] lg:text-[10.5rem] leading-[0.86] tracking-tight text-[#f1ecdf]">
          WARRIORS
          <br />
          <span className="text-[#c9a961] italic font-light">LENS.</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-5 text-[#bdb6a5] text-base lg:text-lg leading-relaxed max-w-xl">
            Strategic visual storytelling and integrated marketing communications support for military and public affairs operations — by {SITE.owner}.
          </p>
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-end sm:justify-end gap-6">
            <button
              onClick={() => go("work")}
              className="group inline-flex items-center gap-3 font-display tracking-[0.25em] text-sm text-[#0a0a0a] bg-[#c9a961] hover:bg-[#d8b86b] px-7 h-12"
            >
              VIEW THE WORK
              <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => go("contact")}
              className="font-display tracking-[0.25em] text-sm text-[#e9e3d6] border border-[#e9e3d6]/40 hover:border-[#c9a961] hover:text-[#c9a961] px-7 h-12"
            >
              REQUEST SUPPORT
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {HERO_STATS.filter((s) => !s.hidden).map((s) => (
            <div key={s.label} className="py-5 lg:py-6 px-5 first:pl-0">
              <div className="font-display text-2xl lg:text-3xl text-[#f1ecdf]">{s.value}</div>
              <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275] mt-1">{s.label.toUpperCase()}</div>
            </div>
          ))}
          <div className="hidden lg:block py-6 px-5 col-span-2">
            <div className="font-mono-x text-[10px] tracking-[0.25em] text-[#8a8275]">CURRENT POSTING</div>
            <div className="font-display text-base text-[#f1ecdf] mt-1">{SITE.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
