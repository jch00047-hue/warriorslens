import React from "react";
import { ABOUT, PORTRAIT_IMAGE, SITE } from "../data/mock";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-14 reveal">
          <span className="font-mono-x text-[11px] tracking-[0.3em] text-[#c9a961]">02 / ABOUT</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img src={PORTRAIT_IMAGE} alt="SSG Julio C. Hernandez" className="w-full h-full object-cover grayscale-[0.15] cine-img" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#c9a961] text-[#0a0a0a] px-4 py-2">
                <div className="font-mono-x text-[10px] tracking-[0.25em]">{SITE.rank} • {SITE.branch}</div>
                <div className="font-display tracking-wide text-base">{SITE.owner.toUpperCase()}</div>
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-[#c9a961]/40" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-[#f1ecdf] tracking-tight">
              {ABOUT.heading}
            </h2>
            <div className="mt-8 space-y-6 max-w-2xl text-[#bdb6a5] text-base lg:text-[17px] leading-[1.75] reveal">
              {ABOUT.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl reveal">
              {ABOUT.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 border border-white/10 px-4 py-3 hover:border-[#c9a961]/60 transition-colors">
                  <Check size={16} className="text-[#c9a961]" />
                  <span className="text-sm text-[#e9e3d6]">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
